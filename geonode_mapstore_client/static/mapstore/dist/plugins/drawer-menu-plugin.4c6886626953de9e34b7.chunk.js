(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7177],{1550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>o,TR:()=>i,N7:()=>a,mq:()=>c,uv:()=>s,Qy:()=>l,IL:()=>u,Li:()=>p,OW:()=>f,ZO:()=>d,Um:()=>y,TF:()=>m,Ls:()=>b,Ec:()=>h,Eu:()=>g,JJ:()=>v,nZ:()=>w,YD:()=>O,GI:()=>E,Jb:()=>P,Uh:()=>j,LP:()=>S,xy:()=>x,o6:()=>_,FP:()=>C,Mo:()=>k,sO:()=>T,Px:()=>N,hd:()=>M,BV:()=>R,SO:()=>I,H0:()=>z,$X:()=>H,ou:()=>Z,NE:()=>A});var r=n(97395),o="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",a="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",s="PAN_TO",l="ZOOM_TO_EXTENT",u="ZOOM_TO_POINT",p="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",d="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",m="CREATION_ERROR_LAYER",b="UPDATE_VERSION",h="INIT_MAP",g="RESIZE_MAP",v="CHANGE_MAP_LIMITS",w="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",E="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE",j="MOUSE_OUT";function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,r.vU)({title:"warning",message:"map.errorLoadingFont",values:e,position:"tc",autoDismiss:10})}function x(e,t,n){return{type:u,pos:e,zoom:t,crs:n}}function _(e,t,n,r,i,a,c,s){return{type:o,center:e,zoom:t,bbox:n,size:r,mapStateSource:i,projection:a,viewerOptions:c,resolution:s}}function C(e,t){return{type:i,point:e,layer:t}}function k(e){return{type:a,pointer:e}}function T(e,t){return{type:c,zoom:e,mapStateSource:t}}function N(e,t,n){return{type:l,extent:e,crs:t,maxZoom:n}}function M(e,t){return{type:d,style:e,mapStateSource:t}}function R(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:v,restrictedExtent:t,crs:n,minZoom:r}}function I(e){return{type:w,resolutions:e}}var z=function(e,t){return{type:O,eventName:e,toolName:t}},H=function(e,t){return{type:E,eventName:e,toolName:t}},Z=function(e){return{type:P,position:e}},A=function(){return{type:j}}},43614:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(27418),o=n.n(r),i=n(30294),a=n(61365);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"handleDialogClick",value:function(e){e.target===e.currentTarget&&this.props.onHide(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Modal);const y=o()((0,a.Z)(d),{Body:i.Modal.Body,Dialog:i.Modal.Dialog,Footer:i.Modal.Footer,Header:i.Modal.Header,Title:i.Modal.Title})},50966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(30294);const i=(0,r.Z)(o.OverlayTrigger)},61365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(24852),o=n.n(r),i=n(37275);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const c=function(e){return function(t){return o().createElement(e,a({},t,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},15135:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(24852),o=n.n(r),i=n(67076),a=n(30294),c=n(50966),s=n(5346),l=n(57557),u=n.n(l),p=["tooltip","tooltipId","tooltipPosition","tooltipTrigger","keyProp","idDropDown","args"];function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const d=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.tooltip,n=e.tooltipId;return t||n}),(function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.tooltip,r=t.tooltipId,i=t.tooltipPosition,l=void 0===i?"top":i,u=t.tooltipTrigger,d=t.keyProp,y=t.idDropDown,m=t.args,b=f(t,p);return o().createElement(c.Z,{trigger:u,id:y,key:d,placement:l,overlay:o().createElement(a.Tooltip,{id:"tooltip-"+d},r?o().createElement(s.Z,{msgId:r,msgParams:{data:m}}):n)},o().createElement(e,b))}}),(function(e){return function(t){return o().createElement(e,u()(t,["tooltipId","tooltip"]),t.children)}}))},77434:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>pe}),n(16385);var r=n(65544),o=n.n(r),i=n(27418),a=n.n(i),c=n(45697),s=n.n(c),l=n(24852),u=n.n(l),p=n(30294),f=n(71703),d=n(22222),y=n(82904),m=n(1550),b=n(15135),h=n(55105),g=n(6806),v=n(50966),w=n(1706),O=n(5346),E=n(38560);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}var j=["glyph","icon","buttonConfig"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function M(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return z(R(e=i.call.apply(i,[this].concat(n))),"getWidth",(function(){return e.props.dynamicWidth||e.props.width})),z(R(e),"renderChildren",(function(t,n){var r={key:t.key?t.key:n,ref:t.ref,open:e.props.activeKey&&e.props.activeKey===t.props.eventKey},o=t.props,i=(o.glyph,o.icon,o.buttonConfig,C(o,j));return u().createElement(t.type,_({},r,i))})),z(R(e),"renderButtons",(function(){return e.props.children.map((function(t){var n=u().createElement(E.Z,{key:t.props.eventKey,bsSize:"large",className:t.props.buttonConfig&&t.props.buttonConfig.buttonClassName?t.props.buttonConfig.buttonClassName:"square-button",onClick:e.props.onChoose.bind(null,t.props.eventKey,e.props.activeKey===t.props.eventKey),bsStyle:e.props.activeKey===t.props.eventKey?"default":"primary"},t.props.glyph?u().createElement(p.Glyphicon,{glyph:t.props.glyph}):t.props.icon);if(t.props.buttonConfig&&t.props.buttonConfig.tooltip){var r=u().createElement(p.Tooltip,{key:"tooltip."+t.props.eventKey,id:"tooltip."+t.props.eventKey},u().createElement(O.Z,{msgId:t.props.buttonConfig.tooltip}));return u().createElement(v.Z,{placement:"bottom",key:"overlay-trigger."+t.props.eventKey,overlay:r},n)}return n}))})),z(R(e),"renderContent",(function(){var t=e.props.single?u().createElement("div",{className:"navHeader",style:{width:"100%",minHeight:"35px"}},u().createElement(p.Glyphicon,{glyph:"1-close",className:"no-border btn-default",onClick:e.props.onToggle,style:{cursor:"pointer"}}),u().createElement("div",{className:"navButtons"},e.renderButtons())):u().createElement("div",{className:"navHeader",style:{width:"100%",minHeight:"35px"}},u().createElement("span",{className:"title"},e.props.title),u().createElement(p.Glyphicon,{glyph:"1-close",className:"no-border btn-default",onClick:e.props.onToggle,style:{cursor:"pointer"}})),n=u().createElement("div",{className:"nav-content"},t,u().createElement("div",{className:"nav-body"},e.props.children.filter((function(t){return!e.props.single||e.props.activeKey===t.props.eventKey})).map(e.renderChildren)));return e.props.resizable?u().createElement(w.Resizable,{axis:"x",resizeHandles:["e"],width:e.getWidth(),onResize:e.resize},n):n})),z(R(e),"resize",(function(t,n){var r=n.size;e.props.onResize(r.width)})),e}return t=a,(n=[{key:"componentDidMount",value:function(){if(!this.props.overlapMap&&this.props.show){var e={left:this.props.width,width:"calc(100% - ".concat(this.props.width,"px)")};this.props.changeMapStyle(e,"drawerMenu")}}},{key:"componentDidUpdate",value:function(e){if(!this.props.overlapMap&&e.show!==this.props.show){var t=this.props.show?{left:this.props.width,width:"calc(100% - ".concat(this.props.width,"px)")}:{};this.props.changeMapStyle(t,"drawerMenu")}}},{key:"render",value:function(){var e=this;return u().createElement(g.Z,{styles:{sidebar:x(x({},this.props.layout),{},{zIndex:1022,width:this.getWidth()}),overlay:{zIndex:1021},root:{right:this.props.show?0:"auto",width:"0",overflow:"visible"},content:{overflowY:"auto"}},sidebarClassName:"nav-menu",onSetOpen:function(){e.props.onToggle()},open:this.props.show,docked:this.props.docked,sidebar:this.renderContent()},u().createElement("div",null))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);z(H,"propTypes",{title:s().node,alignment:s().string,activeKey:s().string,docked:s().bool,show:s().bool,onToggle:s().func,onChoose:s().func,single:s().bool,width:s().number,dynamicWidth:s().number,overlapMap:s().bool,changeMapStyle:s().func,layout:s().object,resizable:s().bool,onResize:s().func}),z(H,"defaultProps",{docked:!1,single:!1,width:300,overlapMap:!0,layout:{},resizable:!1,onResize:function(){}});const Z=H;var A=n(43614);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function G(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(){var e;B(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return W(V(e=i.call.apply(i,[this].concat(n))),"onHeaderClick",(function(){e.props.onHeaderClick(e.props.eventKey)})),W(V(e),"getHeight",(function(){return e.props.open&&e.refs.sectionContent?e.refs.sectionContent.scrollHeight+10:"0"})),e}return t=a,(n=[{key:"render",value:function(){var e={maxHeight:this.getHeight(),overflow:this.props.open?"auto":"hidden",padding:this.props.open?null:"0"};return u().createElement("div",{className:"section"},u().createElement("div",{className:"sectionHeader",style:{width:"100%"},onClick:this.onHeaderClick},this.props.renderInModal?null:u().createElement(p.Glyphicon,{glyph:"triangle-right",style:this.props.open?{transform:"rotate(90deg)"}:{}}),u().createElement("span",{className:this.headerClassName+" sectionTitle",ref:"sectionTitle"},this.props.header)),this.props.renderInModal?u().createElement(A.Z,{ref:"modal",show:this.props.open,onHide:this.onHeaderClick},u().createElement(A.Z.Header,{closeButton:!0},u().createElement(A.Z.Title,null,this.props.header)),u().createElement(A.Z.Body,null,this.props.children)):u().createElement("div",{ref:"sectionContent",className:"sectionContent",style:e},this.props.children))}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);W(F,"displayName","Section"),W(F,"propTypes",{key:s().string,eventKey:s().string,headerClassName:s().string,open:s().bool,onHeaderClick:s().func,renderInModal:s().bool,header:s().node}),W(F,"defaultProps",{headerClassName:"panel-heading"});const q=F;var X=n(81756);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e){return re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},re(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ie=(0,b.Z)(E.Z),ae=(0,d.P1)([function(e){return e.controls.drawer&&e.controls.drawer.enabled},function(e){return e.controls.drawer&&e.controls.drawer.menu||"1"},function(e){return e.controls.queryPanel&&e.controls.queryPanel.enabled&&e.controls.drawer&&e.controls.drawer.width||e.controls.drawer&&e.controls.drawer.resizedWidth||void 0},function(e){return(0,h.ic)(e,{height:!0})}],(function(e,t,n,r){return{show:e,activeKey:t,dynamicWidth:n,layout:r}})),ce=(0,f.connect)(ae,{onToggle:y.Xi.bind(null,"drawer",null),onResize:y.Xg.bind(null,"drawer","resizedWidth"),onChoose:o()(y.Xg.bind(null,"drawer","menu"),!0),changeMapStyle:m.hd})(Z),se=(0,f.connect)((function(e){return{disabled:e.controls&&e.controls.drawer&&e.controls.drawer.disabled}}),{toggleMenu:y.Xi.bind(null,"drawer",null)})((function(e){var t=e.id,n=void 0===t?"":t,r=e.menuButtonStyle,o=void 0===r?{}:r,i=e.buttonStyle,a=void 0===i?"primary":i,c=e.buttonClassName,s=void 0===c?"square-button ms-drawer-menu-button":c,l=e.toggleMenu,f=void 0===l?function(){}:l,d=e.disabled,y=void 0!==d&&d,m=e.glyph,b=void 0===m?"1-layer":m,h=e.tooltipId,g=void 0===h?"toc.drawerButton":h,v=e.tooltipPosition,w=void 0===v?"bottom":v;return u().createElement(ie,{id:n,style:o,bsStyle:a,key:"menu-button",className:s,onClick:f,disabled:y,tooltipId:g,tooltipPosition:w},u().createElement(p.Glyphicon,{glyph:b}))})),le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=re(r);if(o){var n=re(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return te(this,e)});function c(){var e;Q(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return oe(ne(e=i.call.apply(i,[this].concat(n))),"getTools",(function(){return e.props.items.map((function(e,t){return a()({},e,{position:e.position||t})})).sort((function(e,t){return e.position-t.position}))})),oe(ne(e),"renderItems",(function(){return e.getTools().map((function(t,n){var r=t.panel||t.plugin,o=u().createElement(r,Y({isPanel:!0},t.cfg,{items:t.items||[],groupStyle:{style:{marginBottom:"0px",cursor:"pointer"}}})),i=t.title?u().createElement("div",{className:"drawer-menu-head drawer-menu-head-"+t.name},u().createElement(X.Z,{msgId:t.title})):null;return e.props.singleSection?u().createElement(p.Panel,{icon:t.icon,glyph:t.glyph,buttonConfig:t.buttonConfig,key:t.name,eventKey:n+1+"",header:i},o):u().createElement(q,{key:t.name,renderInModal:t.renderInModal||!1,eventKey:n+1+"",header:i},o)}))})),e}return t=c,(n=[{key:"render",value:function(){return this.getTools().length>0?u().createElement("div",{id:this.props.id},u().createElement(se,Y({},this.props,{id:"drawer-menu-button"})),u().createElement(ce,Y({single:this.props.singleSection},this.props.menuOptions,{title:u().createElement(X.Z,{msgId:"menu"}),alignment:"left"}),this.renderItems())):null}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(u().Component);oe(le,"propTypes",{items:s().array,active:s().string,toggleMenu:s().func,id:s().string,glyph:s().string,buttonStyle:s().string,menuOptions:s().object,singleSection:s().bool,buttonClassName:s().string,menuButtonStyle:s().object,disabled:s().bool}),oe(le,"contextTypes",{messages:s().object,router:s().object}),oe(le,"defaultProps",{id:"mapstore-drawermenu",items:[],toggleMenu:function(){},glyph:"1-layer",buttonStyle:"primary",menuOptions:{},singleSection:!0,buttonClassName:"square-button ms-drawer-menu-button",disabled:!1});var ue=(0,f.connect)((function(e){return{active:e.controls&&e.controls.drawer&&e.controls.drawer.active,disabled:e.controls&&e.controls.drawer&&e.controls.drawer.disabled}}),{toggleMenu:y.Xi.bind(null,"drawer",null)})(le);const pe={DrawerMenuPlugin:a()(ue,{disablePluginIf:"{state('featuregridmode') === 'EDIT'}",FloatingLegend:{priority:1,name:"drawer-menu",button:se}}),reducers:{}}},81756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(71703),o=n(5346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},55105:(e,t,n)=>{"use strict";n.d(t,{Nr:()=>p,ic:()=>f,Jz:()=>y,VM:()=>m,CF:()=>b});var r=n(91175),o=n.n(r),i=n(827),a=n(52259);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){return e.maplayout&&e.maplayout.layout||{}},p=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return s(s({},e),{},l({},t,n[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=u(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},y=function(e){return d(e,[{key:"right",value:658}])},m=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},b=function(e){var t=(0,i.Od)(e),n=p(e);return n&&t&&t.size&&{left:(0,a.parseLayoutValue)(n.left,t.size.width),bottom:(0,a.parseLayoutValue)(n.bottom,t.size.height),right:(0,a.parseLayoutValue)(n.right,t.size.width),top:(0,a.parseLayoutValue)(n.top,t.size.height)}}},15198:(e,t,n)=>{(e.exports=n(9252)()).push([e.id,"/* Menu Button */\n.msgapi .drawer-menu-button {\n    position: absolute;\n    z-index:1000;\n    left: 30px;\n    top: 8px;\n    width:30px;\n    background: transparent;\n    outline: none;\n    border: transparent;\n    font-size: 14px;\n}\n\n.msgapi .drawer-menu-button:hover {\n    background: transparent;\n}\n\n.msgapi #drawer-menu-button:active{\n    box-shadow: none;\n}\n\n.msgapi #mapstore-drawermenu > div > div:nth-child(2) {\n    display: none;\n}\n\n.msgapi .nav-content #background-switcher .thumbnail {\n    border-radius: 0 !important;\n    margin-bottom: 40px;\n    width: 220px !important;\n}\n.msgapi .nav-content #background-switcher .thumbnail img {\n    border-radius: 0 !important;\n    height: 90px;\n    width: 220px !important;\n}\n\n.msgapi .nav-content #background-switcher .thumbnail .caption {\n    font-size: 14px !important;\n    text-align: left !important;\n    top: -20px !important;\n    position: absolute !important;\n}\n\n.msgapi .nav-content #background-switcher {\n    margin-top: 10px;\n}\n\n.msgapi #mapstore-drawermenu .panel {\n    border: none;\n    box-shadow: none;\n}\n\n.msgapi div.nav-menu {\n    -webkit-transform:   translate3d(300px, 0, 0);\n    -moz-transform: \t translate3d(300px, 0, 0);\n    -ms-transform: \t\t translate3d(300px, 0, 0);\n    -o-transform: \t\t translate3d(300px, 0, 0);\n    box-shadow: 2px 0px 15px #A7A7A7;\n}\n\n.msgapi .nav-menu  .navHeader {\n    height: 50px;\n}\n.msgapi .nav-menu > .nav-content .navHeader .title{\n    font-size: 16px;\n    position: absolute;\n    margin: 13px;\n    font-weight: bold;\n}\n.msgapi .nav-content  .section {\n    margin-bottom: 2px;\n}\n.msgapi .nav-content  .section .sectionHeader{\n    padding: 5px;\n    cursor: pointer;\n}\n.msgapi .nav-content .section .sectionHeader>.glyphicon{\n    /* Firefox */\n    -moz-transition: all .3s ease;\n    /* WebKit */\n    -webkit-transition: all .3s ease;\n    /* Opera */\n    -o-transition: all .3s ease;\n    /* Standard */\n    transition: all .3s ease;\n}\n.msgapi .nav-content  .section .sectionTitle{\n    padding-left: 10px;\n\n}\n.msgapi .nav-content  .section .sectionContent{\n    -moz-transition: max-height .3s ease;\n    -webkit-transition: max-height .3s ease;\n    -o-transition: max-height .3s ease;\n    transition: max-height .3s ease;\n\n    box-shadow: inset 0px 0px 10px rgba(0,0,0,.5);\n    padding: 5px;\n}\n\n.msgapi .navButtons {\n    float: right;\n}\n\n.msgapi #drawer-menu-button {\n     position: absolute;\n}\n",""])},16385:(e,t,n)=>{var r=n(15198);"string"==typeof r&&(r=[[e.id,r,""]]),n(14246)(r,{}),r.locals&&(e.exports=r.locals)}}]);