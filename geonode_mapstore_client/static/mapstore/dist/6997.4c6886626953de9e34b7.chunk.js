(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6997],{42780:(t,e,n)=>{"use strict";n.d(e,{aS:()=>r,A9:()=>o,r1:()=>i,Rx:()=>a,g:()=>c,yg:()=>u}),n(91175);var r=function(t){return{type:"ANNOTATIONS:HIGHLIGHT_POINT",point:t}},o=function(){return{type:"ANNOTATIONS:NEW"}},i=function(t,e){return{type:"ANNOTATIONS:VISIBILITY",id:t,visibility:e}},a=function(){return{type:"ANNOTATIONS:CLEAN_HIGHLIGHT"}},c=function(){return{type:"ANNOTATIONS:CLOSE"}},u=function(t){return{type:"ANNOTATIONS:SET_EDITING_FEATURE",feature:t}}},33528:(t,e,n)=>{"use strict";n.d(e,{gJ:()=>r,Oj:()=>o,jp:()=>i,CM:()=>a,DU:()=>c,aO:()=>u,v6:()=>s,K8:()=>p,IN:()=>l,zh:()=>f,AH:()=>E,Ub:()=>b,_9:()=>d,JB:()=>y,oh:()=>m,AY:()=>g,yi:()=>R,SW:()=>T,Hk:()=>O,iQ:()=>I,dY:()=>A,$:()=>h,_u:()=>v,gG:()=>D,DI:()=>S,dZ:()=>_,qw:()=>G,f$:()=>F,bZ:()=>U,$O:()=>P,sF:()=>N,Gk:()=>w,vO:()=>C,ut:()=>j,MK:()=>L,VV:()=>M,B8:()=>H,VM:()=>Y,a3:()=>V,Xp:()=>k,DA:()=>x,sK:()=>B,yA:()=>Z,r:()=>W,iB:()=>K,EH:()=>z,Yd:()=>q,Hg:()=>J,Lz:()=>Q,ye:()=>$,Jb:()=>X,d:()=>tt,fT:()=>et,Ib:()=>nt,Pl:()=>rt,UB:()=>ot,Uh:()=>it,QT:()=>at,oL:()=>ct,Ap:()=>ut,KD:()=>st,Z_:()=>pt,Vw:()=>lt,sY:()=>ft,kA:()=>Et,gr:()=>bt,pX:()=>dt,F5:()=>yt,MO:()=>mt,dq:()=>gt,DY:()=>Rt,oO:()=>Tt,uF:()=>Ot,a8:()=>It,Pv:()=>At,an:()=>ht,lg:()=>vt,nY:()=>Dt,nG:()=>St,lx:()=>_t,$S:()=>Gt,gc:()=>Ft,Uz:()=>Ut,fO:()=>Pt,$E:()=>Nt,cE:()=>wt,JK:()=>Ct,YV:()=>jt,t9:()=>Lt,YG:()=>Mt,HT:()=>Ht,MY:()=>Yt,ve:()=>Vt,hB:()=>kt,Ox:()=>xt,zd:()=>Bt,aT:()=>Zt,VH:()=>Wt,Yb:()=>Kt,Jr:()=>zt,pP:()=>qt});var r="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",a="FEATUREGRID:CLEAR_SELECTION",c="FEATUREGRID:SET_SELECTION_OPTIONS",u="FEATUREGRID:TOGGLE_MODE",s="FEATUREGRID:TOGGLE_FEATURES_SELECTION",p="FEATUREGRID:FEATURES_MODIFIED",l="FEATUREGRID:NEW_FEATURE",f="FEATUREGRID:SAVE_CHANGES",E="FEATUREGRID:SAVING",b="FEATUREGRID:START_EDITING_FEATURE",d="FEATUREGRID:START_DRAWING_FEATURE",y="FEATUREGRID:DELETE_GEOMETRY",m="FEATUREGRID:DELETE_GEOMETRY_FEATURE",g="FEATUREGRID:SAVE_SUCCESS",R="FEATUREGRID:CLEAR_CHANGES",T="FEATUREGRID:SAVE_ERROR",O="FEATUREGRID:DELETE_SELECTED_FEATURES",I="SET_FEATURES",A="FEATUREGRID:SORT_BY",h="FEATUREGRID:SET_LAYER",v="QUERY:UPDATE_FILTER",D="FEATUREGRID:CHANGE_PAGE",S="FEATUREGRID:GEOMETRY_CHANGED",_="DOCK_SIZE_FEATURES",G="FEATUREGRID:TOGGLE_TOOL",F="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",U="ASK_CLOSE_FEATURE_GRID_CONFIRM",P="FEATUREGRID:OPEN_GRID",N="FEATUREGRID:CLOSE_GRID",w="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",C="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",j="FEATUREGRID:SET_PERMISSION",L="FEATUREGRID:DISABLE_TOOLBAR",M="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",H="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",Y="FEATUREGRID:ADVANCED_SEARCH",V="FEATUREGRID:ZOOM_ALL",k="FEATUREGRID:INIT_PLUGIN",x="FEATUREGRID:SIZE_CHANGE",B="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",Z="FEATUREGRID:HIDE_SYNC_POPOVER",W="FEATUREGRID:UPDATE_EDITORS_OPTIONS",K="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",z={EDIT:"EDIT",VIEW:"VIEW"},q="FEATUREGRID:START_SYNC_WMS",J="FEATUREGRID:STOP_SYNC_WMS",Q="STORE_ADVANCED_SEARCH_FILTER",$="LOAD_MORE_FEATURES",X="FEATUREGRID:QUERY_RESULT",tt="FEATUREGRID:SET_TIME_SYNC",et="FEATUREGRID:SET_PAGINATION";function nt(){return{type:B}}function rt(){return{type:Z}}function ot(t,e){return{type:X,features:t,pages:e}}function it(t){return{type:Q,filterObj:t}}function at(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:k,options:t}}function ct(){return{type:w}}function ut(){return{type:C}}function st(t,e){return{type:o,features:t,append:e}}function pt(t){return{type:r,options:t}}function lt(t){return{type:S,features:t}}function ft(){return{type:b}}function Et(){return{type:d}}function bt(t){return{type:i,features:t}}function dt(){return{type:y}}function yt(t){return{type:m,features:t}}function mt(){return{type:a}}function gt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.multiselect,n=void 0!==e&&e;return{type:c,multiselect:n}}function Rt(t,e){return{type:A,sortBy:t,sortOrder:e}}function Tt(t,e){return{type:D,page:t,size:e}}function Ot(t){return{type:h,id:t}}function It(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:v,update:t,append:e}}function At(t,e){return{type:G,tool:t,value:e}}function ht(t,e,n){return{type:F,name:t,key:e,value:n}}function vt(){return{type:u,mode:z.EDIT}}function Dt(){return{type:u,mode:z.VIEW}}function St(t,e){return{type:p,features:t,updated:e}}function _t(t){return{type:l,features:t}}function Gt(){return{type:f}}function Ft(){return{type:g}}function Ut(){return{type:O}}function Pt(){return{type:E}}function Nt(){return{type:R}}function wt(){return{type:T}}function Ct(){return{type:U}}function jt(){return{type:N}}function Lt(){return{type:P}}function Mt(t){return{type:L,disabled:t}}function Ht(t){return{type:j,permission:t}}function Yt(){return{type:Y}}function Vt(){return{type:V}}function kt(){return{type:q}}function xt(t,e){return{type:x,size:t,dockProps:e}}var Bt=function(t){return{type:$,pages:t}},Zt=function(t){return{type:M,activated:t}},Wt=function(t){return{type:H,deactivated:t}},Kt=function(t){return{type:tt,value:t}},zt=function(t){return{type:et,size:t}},qt=function(t){return{type:K,updateFilterAction:t}}},47361:(t,e,n)=>{"use strict";n.d(e,{Z:()=>R});var r=n(45697),o=n.n(r),i=n(24852),a=n.n(i),c=n(14293),u=n.n(c),s=n(68195);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function d(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(c,t);var e,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function c(){return f(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){return this.context.intl?a().createElement(s.FormattedNumber,l({value:this.props.value},this.props.numberParams)):a().createElement("span",null,!u()(this.props.value)&&!isNaN(this.props.value)&&this.props.value.toString&&this.props.value.toString()||"")}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),c}(a().Component);m(g,"propTypes",{value:o().oneOfType([o().object,o().number]),numberParams:o().object}),m(g,"contextTypes",{intl:o().object});const R=g},38261:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var r=n(24852),o=n.n(r),i=n(45697),a=n.n(i),c=n(30294),u=n(80717),s=n(25311),p=n(99509),l=n(5346),f=n(18446),E=n.n(f),b=n(81763),d=n.n(b),y=n(77900);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function I(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(s,t);var e,n,r,i,a=(r=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(i){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),v(A(e=a.call(this,t)),"onChangeLatLon",(function(t,n){e.setState(R(R({},e.state),{},v({},t,parseFloat(n))),(function(){var t=parseFloat(e.state.lat)!==parseFloat(e.props.component.lat),n=parseFloat(e.state.lon)!==parseFloat(e.props.component.lon);e.setState(R(R({},e.state),{},{disabledApplyChange:!(t||n)}),(function(){"annotations"===e.props.renderer&&e.props.onSubmit(e.props.idx,e.state)}))}))})),v(A(e),"onSubmit",(function(){e.props.onSubmit(e.props.idx,e.state)})),e.state={lat:d()(e.props.component.lat)?e.props.component.lat:"",lon:d()(e.props.component.lon)?e.props.component.lon:"",disabledApplyChange:!0},e}return e=s,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(t){if(!E()(t.component,this.props.component)){var e=d()(t.component.lat)?t.component.lat:"",n=d()(t.component.lon)?t.component.lon:"";this.setState({lat:e,lon:n,disabledApplyChange:!0})}}},{key:"render",value:function(){var t=this,e=this.props.idx,n=[{visible:this.props.removeVisible,disabled:!this.props.removeEnabled||this.props.disabled,glyph:"trash",onClick:function(){t.props.onRemove(e)}},{buttonConfig:{title:o().createElement(c.Glyphicon,{glyph:"cog"}),className:"square-button-md no-border",pullRight:!0,tooltipId:"identifyChangeCoordinateFormat"},menuOptions:[{active:"decimal"===this.props.format,onClick:function(){t.props.onChangeFormat("decimal")},text:o().createElement(l.Z,{msgId:"search.decimal"})},{active:"aeronautical"===this.props.format,onClick:function(){t.props.onChangeFormat("aeronautical")},text:o().createElement(l.Z,{msgId:"search.aeronautical"})}],disabled:this.props.disabled,visible:this.props.formatVisible,Element:y.Z},{glyph:"ok",disabled:this.state.disabledApplyChange||this.props.disabled,tooltipId:"identifyCoordinateApplyChanges",onClick:this.onSubmit,visible:"annotations"!==this.props.renderer}],r=o().createElement("div",{role:"button",className:"square-button-md no-border btn btn-default",style:{display:"table",color:!this.props.isDraggableEnabled&&"#999999",pointerEvents:this.props.isDraggableEnabled?"auto":"none",cursor:this.props.isDraggableEnabled&&"grab"}},o().createElement(c.Glyphicon,{glyph:"menu-hamburger"}));return o().createElement("div",{className:"coordinateRow ".concat(this.props.format||""," ").concat(this.props.customClassName||""),onMouseEnter:function(){t.props.onMouseEnter&&t.props.component.lat&&t.props.component.lon&&t.props.onMouseEnter(t.props.component)},onMouseLeave:function(){t.props.onMouseLeave&&t.props.component.lat&&t.props.component.lon&&t.props.onMouseLeave()}},o().createElement("div",{style:{cursor:this.props.isDraggableEnabled?"grab":"not-allowed"}},this.props.showDraggable?this.props.isDraggable?this.props.connectDragSource(r):r:null),o().createElement("div",{className:"coordinate"},o().createElement("div",{className:"input-group-container"},o().createElement(c.InputGroup,null,o().createElement(c.InputGroup.Addon,null,o().createElement(l.Z,{msgId:"latitude"})),o().createElement(p.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lat",idx:e,value:this.state.lat,onChange:function(e){return t.onChangeLatLon("lat",e)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit}))),o().createElement("div",{className:"input-group-container"},o().createElement(c.InputGroup,null,o().createElement(c.InputGroup.Addon,null,o().createElement(l.Z,{msgId:"longitude"})),o().createElement(p.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lon",idx:e,value:this.state.lon,onChange:function(e){return t.onChangeLatLon("lon",e)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit})))),this.props.showToolButtons&&o().createElement("div",{key:"tools"},o().createElement(u.Z,{btnGroupProps:{className:"tools"},btnDefaultProps:{className:"square-button-md no-border"},buttons:n})))}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(o().Component);v(D,"propTypes",{idx:a().number,component:a().object,onRemove:a().func,onSubmit:a().func,onChangeFormat:a().func,onMouseEnter:a().func,format:a().string,type:a().string,onMouseLeave:a().func,connectDragSource:a().func,aeronauticalOptions:a().object,customClassName:a().string,isDraggable:a().bool,isDraggableEnabled:a().bool,showLabels:a().bool,showDraggable:a().bool,showToolButtons:a().bool,removeVisible:a().bool,formatVisible:a().bool,removeEnabled:a().bool,renderer:a().string,disabled:a().bool}),v(D,"defaultProps",{showLabels:!1,formatVisible:!1,onMouseEnter:function(){},onMouseLeave:function(){},showToolButtons:!0,disabled:!1});const S=(0,s.Z)(D)},25311:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(24852),o=n.n(r),i=n(90937),a=n(67076),c=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={beginDrag:function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}};const f=(0,a.branch)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.isDraggable;return e}),(0,a.compose)((0,i.Ej)("row",l,(function(t,e){return{connectDragSource:t.dragSource(),connectDragPreview:t.dragPreview(),isDragging:e.isDragging(),draggingItem:e.getItem()||null}})),(0,i.GR)("row",{drop:function(t,e){var n=e.getItem();n.sortId!==t.sortId&&t.onSort(t.sortId,n.sortId,{id:t.id,containerId:t.containerId},{id:n.id,containerId:n.containerId})}},(function(t,e){return{connectDropTarget:t.dropTarget(),isOver:e.isOver()}})),(function(t){return function(e){var n=e.connectDragSource,r=e.connectDragPreview,i=e.connectDropTarget,a=e.isDragging,s=e.isOver,p=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(e,c),l=p.draggingItem&&p.draggingItem.sortId<p.sortId,f=p.draggingItem&&p.draggingItem.containerId===p.containerId,E=f&&a?" ms-dragging":"",b=f&&s?" ms-over":"",d=f&&l?" ms-above":" ms-below";return r(i(o().createElement("div",{className:"ms-dragg".concat(E).concat(b," ").concat(d)},o().createElement("div",null,o().createElement(t,u({},p,{connectDragSource:n,isDragging:a,isOver:s,onDrop:function(t){return t.stopPropagation()}}))))))}})))},81756:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(71703),o=n(5346);const i=(0,r.connect)((function(t){return{locale:t.locale&&t.locale.currentLocale,messages:t.locale&&t.locale.messages||[]}}))(o.Z)},7147:(t,e,n)=>{"use strict";n.d(e,{Yq:()=>i,Iz:()=>a,QF:()=>c,_d:()=>u,pn:()=>s,lI:()=>p,PJ:()=>l,dH:()=>f,Gd:()=>E,tL:()=>b,R4:()=>d,BP:()=>y});var r=n(27361),o=n.n(r),i=function(t){return function(t,e){return function(e){return o()(e,"controls[".concat(t,"][").concat("enabled","]"))}}(t)},a=function(t){return o()(t,"controls.measure.showCoordinateEditor")},c=function(t){return o()(t,"controls.measure.enabled")},u=function(t){return o()(t,"controls.queryPanel.enabled")},s=function(t){return!!o()(t,"controls.layerdownload.available")},p=function(t){return!!o()(t,"controls.layerdownload.enabled")},l=function(t){return o()(t,"controls.widgetBuilder.available",!1)},f=function(t){return o()(t,"controls.widgetBuilder.enabled")},E=function(t){return o()(t,"controls.layersettings.initialSettings")||{}},b=function(t){return o()(t,"controls.layersettings.originalSettings")||{}},d=function(t){return o()(t,"controls.layersettings.activeTab")||"general"},y=function(t){return o()(t,"controls.drawer.enabled",!1)}}}]);