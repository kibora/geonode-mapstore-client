/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import main from '@mapstore/framework/components/app/main';
import Router, { withRoutes } from '@js/components/Router';
import MainLoader from '@js/components/MainLoader';
import { connect } from 'react-redux';

import security from '@mapstore/framework/reducers/security';
import controls from '@mapstore/framework/reducers/controls';

import Home from '@js/routes/Home';
import SearchRoute from '@js/routes/Search';
import DetailRoute from '@js/routes/Detail';

import gnsearch from '@js/reducers/gnsearch';
import gnresource from '@js/reducers/gnresource';
import gnsearchEpics from '@js/epics/gnsearch';
import gnlocaleEpics from '@js/epics/gnlocale';

import {
    getConfiguration,
    getEndpoints,
    getAccountInfo,
    getResourcesTotalCount
} from '@js/api/geonode/v2';

import {
    setupConfiguration,
    initializeApp,
    getVersion
} from '@js/utils/AppUtils';

const DEFAULT_LOCALE = {};
const ConnectedRouter = connect((state) => ({
    locale: state?.locale || DEFAULT_LOCALE
}))(Router);

const routes = [
    {
        name: 'homepage',
        path: '/',
        component: Home
    },
    {
        name: 'resources',
        path: [
            '/search/'
        ],
        component: SearchRoute
    },
    {
        name: 'detail',
        path: [
            '/detail/:pk',
            '/detail/:ctype/:pk'
        ],
        component: DetailRoute
    }

];

initializeApp();

Promise.all([
    getConfiguration(),
    getAccountInfo(),
    getResourcesTotalCount(),
    getEndpoints()
])
    .then(([localConfig, user, resourcesTotalCount]) => {
        const {
            securityState,
            geoNodeConfiguration
        } = setupConfiguration({
            localConfig,
            user,
            resourcesTotalCount
        });

        // home app entry point
        main({
            appComponent: withRoutes(routes)(ConnectedRouter),
            loaderComponent: MainLoader,
            initialState: {
                defaultState: {
                    ...securityState
                }
            },
            pluginsConfig: localConfig.plugins || [],
            themeCfg: {
                path: '/static/mapstore/dist/themes',
                prefixContainer: 'body',
                version: getVersion(),
                prefix: 'msgapi',
                theme: 'geonode'
            },
            appReducers: {
                gnsearch,
                gnresource,
                security,
                controls
            },
            appEpics: {
                ...gnsearchEpics,
                ...gnlocaleEpics
            },
            geoNodeConfiguration
        });
    });
