/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Rx = require("rxjs");
const {_setThumbnail, updateMapLayoutEpic} = require("./epics");
module.exports = {
    plugins: {
        MapPlugin: require('mapstore/framework/plugins/Map'),
        IdentifyPlugin: require('mapstore/framework/plugins/Identify'),
        ToolbarPlugin: require('mapstore/framework/plugins/Toolbar'),
        ZoomAllPlugin: require('mapstore/framework/plugins/ZoomAll'),
        MapLoadingPlugin: require('mapstore/framework/plugins/MapLoading'),
        OmniBarPlugin: require('mapstore/framework/plugins/OmniBar'),
        BackgroundSelectorPlugin: require('mapstore/framework/plugins/BackgroundSelector'),
        FullScreenPlugin: require('mapstore/framework/plugins/FullScreen'),
        ZoomInPlugin: require('mapstore/framework/plugins/ZoomIn'),
        ZoomOutPlugin: require('mapstore/framework/plugins/ZoomOut'),
        ExpanderPlugin: require('mapstore/framework/plugins/Expander'),
        BurgerMenuPlugin: require('mapstore/framework/plugins/BurgerMenu'),
        ScaleBoxPlugin: require('mapstore/framework/plugins/ScaleBox'),
        MapFooterPlugin: require('mapstore/framework/plugins/MapFooter'),
        PrintPlugin: require('mapstore/framework/plugins/Print'),
        TimelinePlugin: require('mapstore/framework/plugins/Timeline'),
        PlaybackPlugin: require('mapstore/framework/plugins/Playback'),
        AddReducersAndEpics: {
            reducers: {
                security: require('mapstore/framework/reducers/security'),
                maps: require('mapstore/framework/reducers/maps'),
                maplayout: require('mapstore/framework/reducers/maplayout')
            },
            epics: {
                _setThumbnail,
                updateMapLayoutEpic,
                zoomToVisibleAreaEpic: () => Rx.Observable.empty()
            }
        }
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('mapstore/framework/components/data/identify/SwipeHeader')
    }
};
