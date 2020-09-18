/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Observable } from 'rxjs';
import isEqual from 'lodash/isEqual';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';
import {
    autocomplete
} from '@js/api/geonode/v1';
import {
    getResources,
    getResourceByPk
} from '@js/api/geonode/v2';
import {
    FETCH_SUGGESTIONS,
    updateSuggestions,
    loadingSuggestions,
    SEARCH_RESOURCES,
    REQUEST_RESOURCE,
    updateResources,
    loadingResources,
    updateResourcesMetadata,
    selectResource
} from '@js/actions/geonodesearch';

import {
    LOCATION_CHANGE,
    push
} from 'connected-react-router';
import {
    getQueryKeys,
    getPageSize
} from '@js/utils/GNSearchUtils';
import url from 'url';

const UPDATE_RESOURCES_REQUEST = 'GEONODE_SEARCH:UPDATE_RESOURCES_REQUEST';
const updateResourcesRequest = (payload) => ({
    type: UPDATE_RESOURCES_REQUEST,
    payload
});

const cleanParams = (params) => {
    return Object.keys(params)
        .reduce((acc, key) => !params[key] || params[key].length === 0
            ? acc : { ...acc, [key]: isArray(params[key])
                ? params[key].map(value => value + '')
                : params[key] + ''
            }, {});
};

const excludeParams = (params, excludeKeyParams = []) => {
    return Object.keys(params)
        .reduce((acc, key) => excludeKeyParams.indexOf(key) === -1
            ? { ...acc, [key]: params[key] } : acc, {});
};

const getParams = (locationSearch = '', params, defaultPage = 1) => {
    const DEFAULT_QUERY_KEYS = getQueryKeys();
    const { query: locationQuery } = url.parse(locationSearch || '', true);
    const { page: qPage, ...query } = locationQuery;
    const queryKeys = Object.keys(query);
    const excludeKeyParams = DEFAULT_QUERY_KEYS.filter((key) => queryKeys.indexOf(key) === -1);
    const { page, ...mergedParams } = cleanParams({ ...params, ...query });
    return [
        excludeParams(mergedParams, excludeKeyParams),
        page ? parseFloat(page) : defaultPage
    ];
};

export const gnsFetchSuggestionsEpic = (action$) =>
    action$.ofType(FETCH_SUGGESTIONS)
        .debounceTime(300)
        .switchMap(({ text }) => {
            return Observable
                .defer(() => autocomplete({ q: text }))
                .switchMap(({ suggestions }) => {
                    return Observable.of(
                        updateSuggestions(suggestions),
                        loadingSuggestions(false)
                    );
                })
                .startWith(loadingSuggestions(true));
        });

export const gnsSearchResourcesEpic = (action$, store) =>
    action$.ofType(SEARCH_RESOURCES)
        .switchMap(action => {
            const DEFAULT_QUERY_KEYS = getQueryKeys();
            const { pathname, params } = action;
            const state = store.getState();
            const currentParams = cleanParams(state?.geoNodeSearch?.params);
            const nextParams = cleanParams(params);
            const currentQuery = DEFAULT_QUERY_KEYS.reduce((acc, key) => currentParams[key] ? { ...acc, [key]: currentParams[key] } : acc, {});
            const nextQuery = DEFAULT_QUERY_KEYS.reduce((acc, key) => nextParams[key] ? { ...acc, [key]: nextParams[key] } : acc, {});
            if (!isEqual(currentQuery, nextQuery)) {
                const isSamePath = state.router?.location?.pathname.indexOf(pathname) !== -1;
                return Observable.of(push({
                    ...(pathname && !isSamePath && { pathname }),
                    search: url.format({
                        query: nextQuery
                    })
                }));
            }
            if (!isEqual(currentParams, nextParams)) {
                return Observable.of(updateResourcesRequest({
                    action: 'PUSH',
                    params: nextParams,
                    location: state?.router?.location
                }));
            }
            return Observable.empty();
        });


const requestResourcesObservable = ({
    params,
    pageSize,
    reset,
    location
}) => {
    return Observable
        .defer(() => getResources({ ...params, pageSize }))
        .switchMap(({
            resources,
            isNextPageAvailable
        }) => {
            return Observable.of(
                updateResources(resources, reset),
                updateResourcesMetadata({
                    isNextPageAvailable,
                    params,
                    locationSearch: location.search,
                    locationPathname: location.pathname
                }),
                loadingResources(false)
            );
        })
        .startWith(
            updateSuggestions([]),
            loadingResources(true)
        );
};

export const gnsSearchResourcesOnLocationChangeEpic = (action$, store) =>
    action$.ofType(LOCATION_CHANGE, UPDATE_RESOURCES_REQUEST)
        .filter(({ payload }) => {
            return payload.action === 'PUSH' || payload.action === 'POP';
        })
        .switchMap(action => {

            const PAGE_SIZE = getPageSize();
            const { isFirstRendering, location } = action.payload || {};
            const state = store.getState();

            const nextParams = state.geoNodeSearch.nextParams;

            const [previousParams, previousPage] = getParams(state.geoNodeSearch.locationSearch, state.geoNodeSearch.params);
            const [currentParams, currentPage] = getParams(location.search, nextParams || {});

            // history action performed while navigating the browser history
            if (!nextParams) {
                const page = 1;
                const params = { ...currentParams, page };
                // avoid new request while browsing through history
                // if the latest saved request is equal to the new request
                if (!isFirstRendering && isEqual(previousParams, currentParams)) {
                    return Observable.empty();
                }
                return requestResourcesObservable({
                    params,
                    pageSize: PAGE_SIZE,
                    reset: true,
                    location
                });
            }

            const resourcesLength = state.geoNodeSearch?.resources.length || 0;
            const loadedPages = Math.floor(resourcesLength / PAGE_SIZE);
            const isNextPage = currentPage === previousPage + 1 && currentPage === loadedPages + 1;
            const resetSearch = isFirstRendering || !isEqual(previousParams, currentParams) || !isNextPage;
            const page = resetSearch ? 1 : currentPage;
            const params = { ...currentParams, page };

            return requestResourcesObservable({
                params,
                pageSize: PAGE_SIZE,
                reset: resetSearch,
                location
            });
        });

export const gnsSelectResourceEpic = (action$, store) =>
    action$.ofType(REQUEST_RESOURCE)
        .switchMap(action => {
            if (isNil(action.pk)) {
                return Observable.of(selectResource(null));
            }
            const state = store.getState();
            const resources = state.geoNodeSearch?.resources || [];
            const selected = resources.find(resource => resource.pk === action.pk);
            if (selected) {
                return Observable.of(selectResource(selected));
            }
            return Observable.defer(() => getResourceByPk(action.pk))
                .switchMap((resource) => {
                    return Observable.of(selectResource(resource));
                });
        });

export default {
    gnsFetchSuggestionsEpic,
    gnsSearchResourcesEpic,
    gnsSearchResourcesOnLocationChangeEpic,
    gnsSelectResourceEpic
};
