(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[44515],{57604:(e,t,r)=>{"use strict";r.d(t,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>c,yR:()=>u,pF:()=>l,PZ:()=>s});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",c=function(e,t,r){return{type:n,dimension:t,layerId:e,data:r}},u=function(e){return{type:o,time:e}},l=function(e){return{type:i,offsetTime:e}},s=function(e){return{type:a,time:e}}},162187:(e,t,r)=>{"use strict";r.d(t,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>c,NC:()=>u,c9:()=>l,up:()=>s,FZ:()=>p,Fi:()=>f,KB:()=>y,E0:()=>d,Q_:()=>m,hY:()=>b,wO:()=>v,sT:()=>h,wR:()=>E,h1:()=>g,hS:()=>O,zK:()=>w,VS:()=>P,oz:()=>T,FH:()=>S,XN:()=>A,Ym:()=>j});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",u="PLAYBACK:FRAMES_LOADING",l="PLAYBACK:SET_CURRENT_FRAME",s="PLAYBACK:SELECT_PLAYBACK_RANGE",p="PLAYBACK:SETTINGS_CHANGE",f="PLAYBACK:TOGGLE_ANIMATION_MODE",y="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",m={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},b=function(){return{type:n}},v=function(){return{type:o}},h=function(){return{type:i}},E=function(e){return{type:a,frames:e}},g=function(e){return{type:l,frame:e}},O=function(e){return{type:c,frames:e}},w=function(e){return{type:u,loading:e}},P=function(e){return{type:s,range:e}},T=function(e,t){return{type:p,name:e,value:t}},S=function(){return{type:f}},A=function(e){return{type:y,direction:e}},j=function(e){var t=e.next,r=e.previous,n=e.forTime;return{type:d,forTime:n,next:t,previous:r}}},757676:(e,t,r)=>{"use strict";r.d(t,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>c,cO:()=>u,br:()=>l,aA:()=>s,Xe:()=>p,Nb:()=>f,_V:()=>y,kq:()=>d,JU:()=>m,PQ:()=>b,cb:()=>v,KI:()=>h,M5:()=>E,w2:()=>g,w:()=>O,Z7:()=>w,p:()=>P,_e:()=>T});var n="TIMELINE:SELECT_TIME",o=function(e,t,r,o){return{type:n,time:e,group:t,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,r=e.end;return{type:i,start:t,end:r}},c="TIMELINE:RANGE_DATA_LOADED",u=function(e,t,r,n){return{type:c,layerId:e,range:t,histogram:r,domain:n}},l="TIMELINE:LOADING",s=function(e,t){return{type:l,layerId:e,loading:t}},p="TIMELINE:INIT_SELECT_LAYER",f=function(e){return{type:p,layerId:e}},y="TIMELINE:SELECT_LAYER",d=function(e){return{type:y,layerId:e}},m="TIMELINE:ENABLE_OFFSET",b=function(e){return{type:m,enabled:e}},v="TIMELINE:AUTOSELECT",h=function(){return{type:v}},E="TIMELINE:SET_COLLAPSED",g=function(e){return{type:E,collapsed:e}},O="TIMELINE:SET_MAP_SYNC",w=function(e){return{type:O,mapSync:e}},P="TIMELINE:INIT_TIMELINE",T=function(e){return{type:P,showHiddenLayers:e}}},496361:(e,t,r)=>{"use strict";r.d(t,{i8:()=>m,ot:()=>b,Ci:()=>v,CX:()=>h});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),c=r(989255),u=r(375875),l=r.n(u),s=r(510284);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){return Object.keys(e).reduce((function(t,r){return void 0!==e[r]&&null!==e[r]?f(f({},t),{},y({},r,e[r])):t}),{})},m=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,u=void 0===a?"1.0.0":a,p=n.tileMatrixSet,y=void 0===p?"EPSG:4326":p,m=n.bbox,b=n.domains,v=n.expandLimit;return c.Observable.defer((function(){return l().get(e,{params:d(f({service:i,REQUEST:"DescribeDomains",version:u,layer:t,tileMatrixSet:y,bbox:m,domains:b,expandLimit:v},r))})})).let(s.oB).switchMap((function(e){return(0,s.sw)(e.data)}))},b=function(e,t,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,u=void 0===a?"WMTS":a,p=i.version,y=void 0===p?"1.1.0":p,m=i.tileMatrixSet,b=void 0===m?"EPSG:4326":m,v=i.bbox;return c.Observable.defer((function(){return l().get(e,{params:d(f({service:u,REQUEST:"GetHistogram",resolution:o,histogram:r,version:y,layer:t,tileMatrixSet:b,bbox:v},n))})})).let(s.oB).switchMap((function(e){return(0,s.sw)(e.data)}))},v=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,u=void 0===a?"asc":a,p=n.limit,f=void 0===p?20:p,y=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},m=y.bbox,b=y.tileMatrixSet,v=void 0===b?"EPSG:4326":b,h=y.service,E=void 0===h?"WMTS":h,g=y.version,O=void 0===g?"1.0.0":g;return c.Observable.defer((function(){return l().get(e,{params:d({service:E,version:O,request:"GetDomainValues",tileMatrixSet:v,bbox:m,layer:t,domain:r,fromValue:i,sort:u,limit:f,time:o})})})).let(s.oB).switchMap((function(e){return(0,s.sw)(e.data)}))},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(675263),o=r.n(n),i=r(667294),a=r.n(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:u({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(757588).Overlay)},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(667294),o=r.n(n),i=r(418093),a=r(957557),c=r.n(a),u=r(815135);const l=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),u.Z,(function(e){return function(t){return o().createElement(e,c()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(667294),o=r.n(n),i=r(418093),a=r(675263),c=r.n(a),u=r(957557),l=r.n(u),s=r(757588),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const E=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(f,t);var r,n,a,c,u=(a=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(a);if(c){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function f(){return y(this,f),u.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,l()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(o().Component),h(t,"propTypes",{popover:c().object}),h(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(667294),o=r.n(n),i=r(819081),a=r.n(i),c=r(757588),u=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,y=void 0===f?{}:f,d=e.transitionProps,m=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,b=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,c=p(e,l);return n?a||i&&o().createElement(i,s({key:c.key||t},c))||o().createElement(u.Z,s({key:c.key||t},y,c)):null}))};return o().createElement(c.ButtonGroup,i,m?o().createElement(a(),m,b()):b())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(667294),o=r.n(n),i=r(418093),a=r(805346),c=r(957557),u=r.n(c),l=r(757588),s=r(532425),p=r(212610),f=r(617252),y=r(282467),d=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const v=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,c=e.textId,p=e.glyphClassName,f=void 0===p?"":p,v=e.loaderProps,h=void 0===v?{}:v,E=e.children,g=b(e,d);return o().createElement(y.Z,u()(g,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(l.Glyphicon,{glyph:t,className:f}):null,c?o().createElement(a.Z,{msgId:c}):i,r?o().createElement(s.Z,m({className:"ms-loader".concat(g.bsStyle&&" ms-loader-"+g.bsStyle||"").concat(g.bsSize&&" ms-loader-"+g.bsSize||"")},h)):null,E)}))},365295:(e,t,r)=>{"use strict";r.d(t,{Z:()=>A});var n=r(667294),o=r.n(n),i=r(532475),a=r.n(i),c=r(414293),u=r.n(c),l=r(675263),s=r.n(l),p=r(730381),f=r.n(p),y=r(757588),d=r(815135),m=r(282467);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function g(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=(0,d.Z)(y.Glyphicon),S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(l,e);var t,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(i){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function l(){var e;v(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return P(O(e=c.call.apply(c,[this].concat(r))),"onUpdate",(function(t,r){var n=f()(e.props.date).utc(),o=r?f()(n).add(1,t):f()(n).subtract(1,t);o.isValid()&&!isNaN(o.toDate().getTime())&&e.props.onUpdate(o.toISOString())})),P(O(e),"onChange",(function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};if(""!==r){var o=f()(e.props.date).utc(),i=o["day"===t?"date":t]&&f()(o)["day"===t?"date":t](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&e.props.onUpdate(i.toISOString())}})),P(O(e),"getForm",(function(){var t=e.props.date&&f()(e.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:t&&t.date()},{name:"month",placeholder:"MM",readOnly:!0,value:t&&t.month(),format:function(e){return!u()(e)&&""!==e&&f().monthsShort(e)},parseValue:function(e){return e-1}},{name:"year",placeholder:"YYYY",value:t&&t.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:t&&t.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:t&&t.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:t&&t.seconds()},{name:"separator",value:t&&t.utcOffset(),type:"separator",format:function(e){return"UTC "+(e>=0?"+":"-")+a()(e/60,2,0)}}]})),e}return t=l,(r=[{key:"render",value:function(){var e=this,t=this.getForm();return o().createElement(y.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return e.props.clickable&&e.props.onIconClick(e.props.date,e.props.glyph)}},o().createElement(T,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),t.map((function(t){return"icon"===t.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(t.name)},o().createElement(T,{glyph:t.value}))||"separator"===t.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(t.name)},t.format&&t.format(t.value)||t.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(t.name)},e.props.showButtons&&o().createElement(m.Z,{bsSize:"xs",disabled:!e.props.date,onClick:function(){return e.onUpdate(t.name,!0)}},o().createElement(T,{glyph:"chevron-up"})),o().createElement(y.FormControl,{type:"text",readOnly:t.readOnly,placeholder:t.placeholder||t.name,disabled:!e.props.date,value:t.format&&t.format(t.value)||t.value,onChange:function(r){return e.onChange(t.name,r.target.value,t.parseValue)}}),e.props.showButtons&&o().createElement(m.Z,{bsSize:"xs",disabled:!e.props.date,onClick:function(){return e.onUpdate(t.name)}},o().createElement(T,{glyph:"chevron-down"})))}))))}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);P(S,"propTypes",{date:s().string,clickable:s().bool,onUpdate:s().func,onIconClick:s().func,glyph:s().string,style:s().object,className:s().string,tooltip:s().string,tooltipId:s().string,showButtons:s().bool}),P(S,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const A=S},589919:(e,t,r)=>{"use strict";r.d(t,{hP:()=>l});var n=r(984596),o=r.n(n),i=r(989255);function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.startWith.apply(e,a(t))},l=function(e,t,r){return function(n){return(r?u(n,o()(e)).catch(r):u(n,o()(e))).concat(i.Observable.from(o()(t)))}}},937307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),c=r(730381),u=r.n(c),l=r(66604),s=r.n(l),p=r(535937),f=r.n(p);const y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.XV:return(0,a.t8)("data[".concat(t.dimension,"][").concat(t.layerId,"]"),t.data,e);case n.mE:return(0,a.t8)("currentTime",t.time,e);case n.at:return(0,a.t8)("offsetTime",t.offsetTime,e);case n.mD:if(e.offsetTime&&e.currentTime){var r=u()(e.offsetTime).diff(e.currentTime),c=u()(t.time).add(r);return(0,a.t8)("currentTime",t.time,(0,a.t8)("offsetTime",c.toISOString(),e))}return(0,a.t8)("currentTime",t.time,e);case o.sb:var l=s()(e.data,(function(e){return f()(e,(function(e,r){return r!==t.node}))}));return(0,a.t8)("data",l,e);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,e)));default:return e}}},176843:(e,t,r)=>{"use strict";r.d(t,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>u,E2:()=>l,Np:()=>s,KC:()=>p,Wq:()=>f,rp:()=>y,PF:()=>d});var n=r(22222),o=function(e){return e&&e.playback&&e.playback.settings},i=function(e){return(o(e)||{}).frameDuration||5},a=function(e){return e&&e.playback&&e.playback.status},c=function(e){return e&&e.playback&&e.playback.frames},u=function(e){var t=c(e)||[];return t[t.length-1]},l=function(e){return e&&e.playback&&e.playback.framesLoading},s=function(e){return e&&e.playback&&e.playback.currentFrame},p=function(e){return function(e){return e&&e.playback&&e.playback.playbackRange}(e)},f=function(e){return(c(e)||[])[s(e)]},y=function(e){return e&&e.playback&&e.playback.metadata},d=(0,n.P1)(c,s,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return{hasNext:e[t+1],hasPrevious:e[t-1]}}))},510284:(e,t,r)=>{"use strict";r.d(t,{sw:()=>b,oB:()=>v});var n=r(989255),o=r(227361),i=r.n(o),a=r(505055),c=r(507526);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return p(e,arguments,d(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,e)},s(e)}function p(e,t,r){return p=f()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&y(o,r.prototype),o},p.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}r(324384);var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(i,e);var t,r,n,o=(t=i,r=f(),function(){var e,n=d(t);if(r){var o=d(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return l(this,e)});function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e)).name="OGCError",r.code=t,r}return n=i,Object.defineProperty(n,"prototype",{writable:!1}),n}(s(Error)),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return n.Observable.bindNodeCallback((function(e,r){return(0,a.parseString)(e,t,r)}))(e)},v=function(e){return e.switchMap((function(e){return"string"==typeof e.data&&e.data.indexOf("ExceptionReport")>0?n.Observable.bindNodeCallback((function(e,t){return(0,a.parseString)(e,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},t)}))(e.data).map((function(e){var t=i()(e,"ExceptionReport.Exception.ExceptionText");throw new m(t||"Undefined OGC Service Error",i()(e,"ExceptionReport.Exception.exceptionCode"))})):n.Observable.of(e)}))}}}]);