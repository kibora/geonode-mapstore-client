(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8880],{32420:(e,t,r)=>{"use strict";r.d(t,{DH:()=>b,dN:()=>v,Bm:()=>d,FU:()=>g,_c:()=>O,v$:()=>h});var n=r(75875),o=r.n(n),i=r(72500),u=r.n(i),a=r(27418),c=r.n(a),l=["version"];function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e,t){return o().get(e+"?service=WFS&version=1.1.0&request=GetFeature",{params:c()({outputFormat:"application/json"},t)}).then((function(e){return"object"!==f(e.data)?JSON.parse(e.data):e.data}))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.version,n=void 0===r?"1.1.0":r,o=u().parse(e,!0);return u().format(c()({},o,{query:c()({service:"WFS",version:n,request:"GetCapabilities"},o.query)}))},d=function(e,t,r){return o().get(function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.version,o=void 0===n?"1.1.0":n,i=s(r,l),a=u().parse(e,!0);return u().format(c()({},a,{query:c()(y({service:"WFS",typeName:t,version:o,request:"GetFeature"},i),a.query)}))}(e,t,r))},g=function(e){return o().get(v(e))},O=function(e,t){var n=u().parse(e,!0),i=u().format(c()({},n,{query:c()({service:"WFS",version:"1.1.0",typeName:t,request:"DescribeFeatureType"},n.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7674)]).then(function(){var t=r(97674).unmarshaller;e(o().get(i).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value})))}.bind(null,r)).catch(r.oe)}))},h=function(e,t){return o().get(function(e,t){var r=u().parse(e,!0);return u().format(y(y({},r),{},{search:void 0,query:y(y({},r.query),{},{service:"WFS",version:"1.1.0",typeName:t,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(e,t)).then((function(e){return e.data}))}},39980:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),a=r(21222);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m,b,v,d=/^[\s\S]*<body>([\s\S]*)<\/body>[\s\S]*$/i,g=/(<style[\s\=\w\/\"]*>[^<]*<\/style>)/i,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,r,n,i,u=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function c(){return l(this,c),u.apply(this,arguments)}return t=c,(r=[{key:"shouldComponentUpdate",value:function(e){return e.response!==this.props.response}},{key:"render",value:function(){var e=this.props.response||"",t=g.exec(e),r=t&&2===t.length?g.exec(e)[1]:"";r=r.replace(/body[,]+/g,"");var n=e.replace(d,"$1").trim();return o().createElement(a.Z,{html:r+n})}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);m=O,b="propTypes",v={response:u().string},b in m?Object.defineProperty(m,b,{value:v,enumerable:!0,configurable:!0,writable:!0}):m[b]=v;const h=O},40562:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(24852),o=r.n(n),i=r(67076),u=r(41106),a=r.n(u),c=r(59286),l=r(21222),s=r(47037),f=r.n(s),p=r(45697),y=r.n(p),m=r(61239);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function O(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=["exclude","titleStyle","listStyle","componentStyle","title","feature"],S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,r,n,i,u=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(i){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function a(){var e;v(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(h(e=u.call.apply(u,[this].concat(r))),"getBodyItems",(function(){return Object.keys(e.props).filter(e.toExclude).map((function(t){var r=e.renderProperty(e.props[t]);return o().createElement("tr",{key:t,style:e.props.listStyle},o().createElement("td",null,t),o().createElement("td",null,(0,m.Y)(r)?o().createElement("span",{dangerouslySetInnerHTML:{__html:r}}):r))}))})),w(h(e),"renderHeader",(function(){return e.props.title?o().createElement("thead",{key:e.props.title,style:e.props.titleStyle,className:"ms-properties-viewer-title"},o().createElement("tr",null,o().createElement("th",{colSpan:"2"},e.props.title))):null})),w(h(e),"renderBody",(function(){var t=e.getBodyItems();return 0===t.length?null:o().createElement("tbody",{className:"ms-properties-viewer-body"},t)})),w(h(e),"renderProperty",(function(e){return f()(e)?e:JSON.stringify(e)})),w(h(e),"toExclude",(function(t){return-1===P.concat(e.props.exclude).indexOf(t)})),e}return t=a,(r=[{key:"render",value:function(){return o().createElement("table",{className:"ms-properties-viewer",style:this.props.componentStyle},this.renderHeader(),this.renderBody())}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);w(S,"displayName","PropertiesViewer"),w(S,"propTypes",{title:y().string,exclude:y().array,titleStyle:y().object,listStyle:y().object,componentStyle:y().object}),w(S,"defaultProps",{exclude:[],titleStyle:{},listStyle:{},componentStyle:{}});const E=S;function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}var T={TEMPLATE:function(e){var t=e.layer,r=void 0===t?{}:t,n=e.response;return o().createElement("div",{className:"ms-template-viewer"},n.features.map((function(e,t){return o().createElement("div",{key:t},o().createElement(l.Z,{html:a()((0,c.getCleanTemplate)(r.featureInfo&&r.featureInfo.template||"",e,/\$\{.*?\}/g,2,1))(e)}))})))},PROPERTIES:function(e){var t=e.response,r=e.layer,n=e.rowViewer,i=r&&r.rowViewer||n||E;return o().createElement("div",{className:"mapstore-json-viewer"},((null==t?void 0:t.features)||[]).map((function(e,t){return o().createElement(i,R({key:t,feature:e,title:e.id+"",exclude:["bbox"]},e.properties))})))}};const x=(0,i.shouldUpdate)((function(e,t){return t.response!==e.response}))((function(e){var t=e.layer&&e.layer.featureInfo&&e.layer.featureInfo.format&&e.layer.featureInfo.template&&"<p><br></p>"!==e.layer.featureInfo.template&&e.layer.featureInfo.format||"PROPERTIES",r=T[t]||T.PROPERTIES;return o().createElement(r,e)}))},529:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(24852),u=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var y,m,b,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(o){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){return c(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"shouldComponentUpdate",value:function(e){return e.response!==this.props.response}},{key:"render",value:function(){return u().createElement("pre",null,this.props.response)}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);y=v,m="propTypes",b={response:o().string},m in y?Object.defineProperty(y,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):y[m]=b;const d=v},21222:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(45697),o=r.n(n),i=r(24852),u=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(o){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){var e;c(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(p(e=i.call.apply(i,[this].concat(r))),"getSourceCode",(function(){return{__html:e.props.html}})),e}return t=a,(r=[{key:"render",value:function(){return u().createElement("div",{id:this.props.id,dangerouslySetInnerHTML:this.getSourceCode()})}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);m(b,"propTypes",{html:o().string,id:o().string});const v=b},93152:(e,t,r)=>{"use strict";r.d(t,{$v:()=>i,c0:()=>u,m6:()=>a,tH:()=>c});var n=r(27361),o=r.n(n),i=function(e){return e&&e.maptype&&e.maptype.mapType||"leaflet"},u=function(e){return"cesium"===i(e)},a=function(e){return"openlayers"===i(e)},c=function(e){return o()(e,"maptype.last2dMapType")||"leaflet"}},53005:(e,t,r)=>{"use strict";r.d(t,{O7:()=>n,so:()=>o,cX:()=>l});var n={TEXT:"text/plain",HTML:"text/html",JSONP:"text/javascript",PROPERTIES:"application/json",JSON:"application/json",GML2:"application/vnd.ogc.gml",GML3:"application/vnd.ogc.gml/3.1.1",TEMPLATE:"application/json"},o={"text/plain":"TEXT","text/html":"HTML","text/javascript":"JSONP","application/json":"JSON","application/vnd.ogc.gml":"GML2","application/vnd.ogc.gml/3.1.1":"GML3"},i=/^[\s\S]*<gml:featureMembers[^>]*>([\s\S]*)<\/gml:featureMembers>[\s\S]*$/i,u=/^[\s\S]*<body[^>]*>([\s\S]*)<\/body>[\s\S]*$/i;function a(e){if("string"==typeof e.response){var t=e.response.match(u);return e.layerMetadata&&e.layerMetadata.regex?t&&t[1]&&t[1].match(e.layerMetadata.regex):t&&t[1]&&t[1].trim().length>0}return!1}function c(e){if("string"==typeof e.response&&-1!==e.response.indexOf("<?xml")){var t=e.response.match(i);return t&&t[1]&&t[1].trim().length>0}return!1}var l={HTML:{getValidResponses:function(e){return e.filter(a)},getNoValidResponses:function(e){return e.filter((function(e){return!a(e)}))}},TEXT:{getValidResponses:function(e){return e.filter((function(e){return""!==e.response&&"string"==typeof e.response&&0!==e.response.indexOf("no features were found")&&"string"==typeof e.response&&0!==e.response.indexOf("<?xml")}))},getNoValidResponses:function(e){return e.filter((function(e){return""===e.response||"string"==typeof e.response&&0===e.response.indexOf("no features were found")||e.response&&"string"==typeof e.response&&0===e.response.indexOf("<?xml")}))}},JSON:{getValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&e.response.features.length}))},getNoValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&0===e.response.features.length}))}},PROPERTIES:{getValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&e.response.features.length}))},getNoValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&0===e.response.features.length}))}},GML3:{getValidResponses:function(e){return e.filter(c)},getNoValidResponses:function(e){return e.filter((function(e){return!c(e)}))}},TEMPLATE:{getValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&e.response.features.length}))},getNoValidResponses:function(e){return e.filter((function(e){return e.response&&e.response.features&&0===e.response.features.length}))}}}},53231:(e,t,r)=>{"use strict";r.d(t,{h:()=>n});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length?e.map((function(e){var t=e.name,r=e.value;return"".concat(t,":").concat(r)})).join(";"):""}},88798:(e,t,r)=>{"use strict";r.d(t,{Fm:()=>ee,y_:()=>oe,K7:()=>ae,eq:()=>Z,lY:()=>K,wR:()=>U,mx:()=>Q,pf:()=>te,su:()=>$,Te:()=>re,gA:()=>ue,Qm:()=>ne});var n=r(53005),o=r(60130),i=r.n(o),u=r(30998),a=r.n(u),c=r(3918),l=r.n(c),s=r(40562),f=r(39980),p=r(529),y=r(49977),m=r(86267),b=r(24262),v=r(13218),d=r.n(v),g=r(43378),O=r(32420),h=r(38848),j=r(33044),w=r(27418),P=r.n(w),S=["point"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const x={buildRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.map,n=void 0===r?{}:r,o=t.point,i=t.currentLocale,u=t.params,a=t.maxItems,c=void 0===a?10:a,l=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return{request:(0,j.addAuthenticationToSLD)(R({point:o,service:"WFS",version:"1.1.1",request:"GetFeature",outputFormat:"application/json",exceptions:"application/json",id:e.id,typeName:e.name,srs:(0,m.normalizeSRS)(n.projection)||"EPSG:4326",feature_count:c},P()({params:u})),e),metadata:{title:d()(e.title)?e.title[i]||e.title.default:e.title,regex:e.featureInfoRegex,viewer:l,featureInfo:s},url:(0,b.Hi)(e).replace(/[?].*$/g,"")}},getIdentifyFlow:function(e,t,r){var n=r.point,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,S),i=function(e){var t,r,n=null==e||null===(t=e.geometricFilter)||void 0===t||null===(r=t.value)||void 0===r?void 0:r.geometry;if(n)return n;var o=e.latlng.lng;return{coordinates:[o-360*Math.floor(o/360+.5),e.latlng.lat],projection:"EPSG:4326",type:"Point"}}(n);return y.Observable.defer((function(){return(0,O.v$)(e.url,e.name).then((function(r){var n=(0,h.dm)(r),u=(0,g.v)({layerFilter:e.layerFilter,filterObj:{spatialField:{attribute:n,operation:"INTERSECTS",geometry:i}},params:P()({},e.baseParams,e.params,o)});return(0,O.Bm)(t,e.name,u)}))}))}};var I=r(52259),A=r(14293),F=r.n(A),q=r(53231);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const M={buildRequest:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.sizeBBox,n=t.map,o=void 0===n?{}:n,i=t.point,u=t.currentLocale,a=t.params,c=t.maxItems,l=void 0===c?10:c,s=t.env,f=arguments.length>2?arguments[2]:void 0,p=arguments.length>3?arguments[3]:void 0,y=arguments.length>4?arguments[4]:void 0,v=r&&r.height||101,O=r&&r.width||101,h=[v,O],w=0,S=F()(o.resolution)?(0,I.getCurrentResolution)(Math.ceil(o.zoom),0,21,96):o.resolution,E=i.latlng.lng,R=E-360*Math.floor(E/360+.5),T={x:R,y:i.latlng.lat},x=(0,m.reproject)(T,"EPSG:4326",o.projection),A=(0,m.getProjectedBBox)(x,S,w,h,null),D=e.name;e.queryLayers&&(D=e.queryLayers.join(","));var C=(0,q.h)(s),M=(0,g.v)({layerFilter:e.layerFilter,filterObj:e.filterObj,params:P()({},e.baseParams,e.params,a)});return{request:(0,j.addAuthenticationToSLD)(k({service:"WMS",version:"1.1.1",request:"GetFeatureInfo",exceptions:"application/json",id:e.id,layers:e.name,query_layers:D,styles:e.style,x:O%2==1?Math.ceil(O/2):O/2,y:O%2==1?Math.ceil(O/2):O/2,height:v,width:O,srs:(0,m.normalizeSRS)(o.projection)||"EPSG:4326",bbox:A.minx+","+A.miny+","+A.maxx+","+A.maxy,feature_count:l,info_format:f,ENV:C},P()({},M)),e),metadata:{title:d()(e.title)?e.title[u]||e.title.default:e.title,regex:e.featureInfoRegex,viewer:p,featureInfo:y},url:(0,b.Hi)(e).replace(/[?].*$/g,"")}}};var N=r(7294);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const B={buildRequest:function(e,t){var r=F()(t.map.resolution)?(0,I.getCurrentResolution)(Math.round(t.map.zoom),0,21,96):t.map.resolution,n=e.resolutions||(0,I.getResolutions)(),o=e.tileSize||256,i=[e.originX||-20037508.3428,e.originY||20037508.3428],u=t.point.latlng.lng,a={x:u-360*Math.floor(u/360+.5),y:t.point.latlng.lat},c=(0,m.reproject)(a,"EPSG:4326",t.map.projection),l=(0,m.normalizeSRS)(e.srs||t.map.projection||"EPSG:3857",e.allowedSRS),s=(0,N.C2)(e.tileMatrixSet,l,e.allowedSRS,e.matrixIds),f=(c.x-i[0])/(r*o),p=(i[1]-c.y)/(r*o),y=Math.floor(f),v=Math.floor(p),O=Math.floor((f-y)*o),h=Math.floor((p-v)*o),j=(0,N.Wg)(e.matrixIds&&(0,N.Bf)(e.matrixIds,s||l)||(0,N.nn)(e),n.length),w=(0,g.v)({layerFilter:e.layerFilter,filterObj:e.filterObj,params:P()({},e.baseParams,e.params,t.params)});return{request:L(L({service:"WMTS",request:"GetFeatureInfo",layer:e.name,infoformat:t.format,style:e.style||""},P()({},w)),{},{tilecol:y,tilerow:v,tilematrix:j[Math.round(t.map.zoom)],tilematrixset:s,i:O,j:h}),metadata:{title:d()(e.title)?e.title[t.currentLocale]||e.title.default:e.title,regex:e.featureInfoRegex},url:(0,b.Hi)(e).replace(/[?].*$/g,"")}}};var G,Y=r(50948);function H(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=function(){return Object.keys(n.O7).filter((function(e){return-1!==G.AVAILABLE_FORMAT.indexOf(e)})).reduce((function(e,t){return e[t]=n.O7[t],e}),{})},K=function(){return Object.keys(G.getAvailableInfoFormat()).map((function(e){return n.O7[e]}))},U=function(){return n.O7[G.AVAILABLE_FORMAT[0]]},Q=function(e,t){return e.featureInfo&&e.featureInfo.format&&n.O7[e.featureInfo.format]||t.format||G.getDefaultInfoFormatValue()},$=function(e,t,r,n,o){return W({type:"vector",visibility:!0,name:e||"GetFeatureInfo",styleName:r||"marker",label:o,features:G.clickedPointToGeoJson(t)},n)},ee=function(e,t){if(G.services[e.type]){var r=G.getDefaultInfoFormatValueFromLayer(e,t),n=G.getLayerFeatureInfoViewer(e),o=G.getLayerFeatureInfo(e);return G.services[e.type].buildRequest(e,t,r,n,o)}return{}},te=function(e,t,r){return G.services[e.type]&&G.services[e.type].getIdentifyFlow?G.services[e.type].getIdentifyFlow(e,t,r):null},re=function(e){var t={getValidResponses:function(e){return e},getNoValidResponses:function(){return[]}};return{getValidResponses:function(r){return r.reduce((function(r,o){if(o){var i;o.queryParams&&o.queryParams.hasOwnProperty("info_format")&&(i=o.queryParams.info_format),o.queryParams&&o.queryParams.hasOwnProperty("outputFormat")&&(i=o.queryParams.outputFormat);var u=(n.cX[o.format||n.so[i]||n.so[e]]||t).getValidResponses([o]);return[].concat(H(r),H(u))}return H(r)}),[])},getNoValidResponses:function(r){return r.reduce((function(r,o){if(o){var i;o.queryParams&&o.queryParams.hasOwnProperty("info_format")&&(i=o.queryParams.info_format),o.queryParams&&o.queryParams.hasOwnProperty("outputFormat")&&(i=o.queryParams.outputFormat);var u=(n.cX[o.format||n.so[i]||n.so[e]]||t).getNoValidResponses([o]);return[].concat(H(r),H(u))}return H(r)}),[])}}},ne=function(){var e;return X(e={},n.O7.PROPERTIES,s.Z),X(e,n.O7.JSON,s.Z),X(e,n.O7.HTML,f.Z),X(e,n.O7.TEXT,p.Z),e},oe=function(e){var t;return e.visibility&&G.services[e.type]&&(void 0===e.queryable||e.queryable)&&"background"!==e.group&&"HIDDEN"!==(null==e||null===(t=e.featureInfo)||void 0===t?void 0:t.format)},ie={wfs:x,wms:M,wmts:B,vector:r.n(Y)()},ue=function(e){return G.VIEWERS[e]?G.VIEWERS[e]:null},ae=function(e,t,r){var n=t||[],o=r||[];return Object.keys(e).reduce((function(t,r){if("params"!==r&&-1!==n.indexOf(r))t[r]=e[r];else if("params"===r&&o.length>0){var i=e[r];Object.keys(i).forEach((function(e){-1===a()(o,(function(t){return t===e}))&&(t[e]=i[e])}),{})}return t}),{})};G={AVAILABLE_FORMAT:["TEXT","PROPERTIES","HTML","TEMPLATE"],getAvailableInfoFormatLabels:function(){return Object.keys(G.getAvailableInfoFormat())},getAvailableInfoFormat:Z,getDefaultInfoFormatValue:U,clickedPointToGeoJson:function(e){if(!e)return[];if("Feature"===e.type){var t=[i()(e)];return e&&e.geometry&&"Point"!==e.geometry.type&&t.push(e),t}return void 0===e.lng||void 0===e.lat?e.features||[]:[].concat(H(e.features||[]),[{id:"get-feature-info-point",type:"Feature",geometry:{type:"Point",coordinates:[parseFloat(e.lng),parseFloat(e.lat)]},style:[{iconUrl:l(),iconAnchor:[12,41],iconSize:[25,41]}]}])},services:ie,getDefaultInfoFormatValueFromLayer:Q,getLayerFeatureInfoViewer:function(e){return e.featureInfo&&e.featureInfo.viewer?e.featureInfo.viewer:{}},getLayerFeatureInfo:function(e){return e&&e.featureInfo&&W({},e.featureInfo)||{}},VIEWERS:{}}},61239:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n,v:()=>o});var n=function(e){return new RegExp("<(.|\\n)*?>","g").test(e)},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;return t.test(e)}},59286:(e,t,r)=>{"use strict";r.r(t),r.d(t,{validateStringAttribute:()=>p,getCleanTemplate:()=>y,parseCustomTemplate:()=>m,generateTemplateString:()=>b,parseTemplate:()=>v,default:()=>d});var n,o=r(47037),i=r.n(o),u=r(18721),a=r.n(u),c=r(92742),l=r.n(c),s=r(41106),f=r.n(s),p=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=i()(t)&&l()(t.substring(r,t.length-n))||"";return a()(e,o)},y=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){return""},a=i()(e)&&e.match(r),c=a&&a.map((function(e){var r=e.replace(/(<([^>]+)>)/gi,"");return{previous:e,next:p(t,r,n,o)?r:u(e)}}))||null;return c&&c.reduce((function(e,t){return e.replace(t.previous,t.next)}),e)||e||""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return"".concat(l()(e.substring(2,e.length-1))," Not Available")};return f()(y(e||"",t,/\$\{.*?\}/g,2,1,r))(t)},b=(n={},function(e,t){var r=n[e];return r&&!t||(r=function(r){var n=e.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g,(function(e,n){return(t||function(e){return e})(n.trim().split(".").reduce((function(e,t){return e&&e[t]}),r))}));return i()(n)&&n||""},t||(n[e]=r)),r}),v=function(e,t){r.e(181).then(function(){var n=r(90181),o="function"==typeof e?e():e;try{var i=n.transform(o,{presets:["es2015","react","stage-0"]}).code;t(i)}catch(e){t(null,e)}}.bind(null,r)).catch(r.oe)};const d={generateTemplateString:b,parseTemplate:v,validateStringAttribute:p,getCleanTemplate:y,parseCustomTemplate:m}},38848:(e,t,r)=>{"use strict";r.d(t,{Es:()=>f,mI:()=>p,dm:()=>y});var n=r(43378),o=(r(72500),r(27361)),i=r.n(o),u=r(91175),a=r.n(u);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e,t){var r=l(l({},(0,n.v)(e)||{}),{},{_v_:e._v_}),o=l(l({},(0,n.v)(t)||{}),{},{_v_:t._v_});return["_v_","CQL_FILTER","VIEWPARAMS"].reduce((function(e,t){return r[t]!==o[t]||e}),!1)},p=function(e){var t=i()(e,"featureTypes[0].properties")||[];return t&&a()(t.filter((function(e){return 0===e.type.indexOf("gml:")})).map((function(e){return e.type.split(":")[1]})))},y=function(e){var t=i()(e,"featureTypes[0].properties")||[];return t&&a()(t.filter((function(e){return 0===e.type.indexOf("gml:")})).map((function(e){return e.name})))}},50948:(e,t,r)=>{var n=r(52259).getCurrentResolution,o=r(14293);e.exports={buildRequest:function(e,t){var r,i,u,a;return{request:{lat:t.point.latlng.lat,lng:t.point.latlng.lng},metadata:{fields:(null===(r=e.features)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.properties)&&Object.keys(e.features[0].properties)||[],title:e.name,resolution:o(null==t||null===(u=t.map)||void 0===u?void 0:u.resolution)?(null==t||null===(a=t.map)||void 0===a?void 0:a.zoom)&&n(t.map.zoom,0,21,96):t.map.resolution,buffer:t.buffer||2,units:t.map&&t.map.units,rowViewer:e.rowViewer,viewer:e.viewer},url:""}}}},3918:e=>{e.exports="data:image/png;base64,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"}}]);