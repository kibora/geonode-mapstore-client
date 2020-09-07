/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import main from 'mapstore/framework/components/app/main';
import Router, { withRoutes } from 'mapstore/framework/components/app/Router';

import { setConfigProp } from 'mapstore/framework/utils/ConfigUtils';

// this import should be provided directly by the Map plugin
import * as config from 'mapstore/framework/epics/config';
import mapConfig from 'mapstore/framework/reducers/config';
import map from 'mapstore/framework/reducers/map';
import layers from 'mapstore/framework/reducers/layers';
import { splitMapAndLayers } from 'mapstore/framework/utils/LayersUtils';

// TODO: we should compile .scss as .less file in MapStore
// and add a link tag with the compiled css in the template
// this will ensure more control on override or custom css
import '../../themes/geonode/scss/geonode.scss';

import Builder from '@js/routes/Builder';

setConfigProp('translationsPath', ['/static/mapstore/MapStore2/web/client/'] );

// this is an example of routes for the builder
// we could create different configuration and routes for map, dashboard and geostory
const routes = [
    {
        name: 'builder',
        path: '/view/:type/:id',
        component: Builder
    }
];

// builder app entry point
main({
    appComponent: withRoutes(routes)(Router),
    pluginsConfig: {
        map: [
            { name: 'Map' }
        ],
        geostory: [
            { name: 'GeoStory' }
        ]
    },
    appEpics: {
        ...config
    },
    rootReducerFunc: ({ state, action, allReducers }) => {
        const mapState = splitMapAndLayers(mapConfig(state, action));
        return {
            ...allReducers(state, action),
            map: mapState && mapState.map ? map(mapState.map, action) : null,
            mapInitialConfig: mapState && mapState.mapInitialConfig || mapState && mapState.loadingError && {
                loadingError: mapState.loadingError,
                mapId: mapState.loadingError.mapId
            } || null,
            mapConfigRawData: mapState && mapState.mapConfigRawData || null,
            layers: mapState ? layers(mapState.layers, action) : null
        };
    }
});
