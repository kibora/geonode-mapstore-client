(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7157],{80416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>o,ms:()=>i,ih:()=>c,OX:()=>u,sb:()=>p,K$:()=>l,k7:()=>a,cX:()=>s,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>b,qv:()=>h,cI:()=>m,g6:()=>E,I4:()=>v,l$:()=>O,Xv:()=>g,k3:()=>R,CQ:()=>_,R8:()=>w,HN:()=>S,sH:()=>P,c7:()=>T,_7:()=>A,eF:()=>j,O6:()=>k,ED:()=>N,RP:()=>D,sF:()=>L,VP:()=>C,He:()=>x,vO:()=>Y,WO:()=>I,bh:()=>G,pV:()=>Z,MK:()=>H,ZF:()=>M,tV:()=>B,Dv:()=>F,Yz:()=>U,kI:()=>V,XG:()=>X,A4:()=>q,Rp:()=>W,ct:()=>z,oh:()=>K,$h:()=>$,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>re,F5:()=>ne,c9:()=>oe,Jh:()=>ie,Xy:()=>ce});var n="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",c="TOGGLE_NODE",u="SORT_NODE",p="REMOVE_NODE",l="UPDATE_NODE",a="MOVE_NODE",s="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",b="ADD_GROUP",h="REMOVE_LAYER",m="SHOW_SETTINGS",E="HIDE_SETTINGS",v="UPDATE_SETTINGS",O="REFRESH_LAYERS",g="LAYERS:UPDATE_LAYERS_DIMENSION",R="LAYERS_REFRESHED",_="LAYERS_REFRESH_ERROR",w="LAYERS:BROWSE_DATA",S="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",T="LAYERS:SELECT_NODE",A="LAYERS:FILTER_LAYERS",j="LAYERS:SHOW_LAYER_METADATA",k="LAYERS:HIDE_LAYER_METADATA",N="LAYERS:UPDATE_SETTINGS_PARAMS";function D(e,t,r){return{type:m,node:e,nodeType:t,options:r}}function L(){return{type:E}}function C(e){return{type:v,options:e}}function x(e,t){return{type:n,newProperties:t,layer:e}}function Y(e,t){return{type:o,layer:e,params:t}}function I(e,t){return{type:i,newProperties:t,group:e}}function G(e,t,r){return{type:c,node:e,nodeType:t,status:!r}}function Z(e){return{type:"CONTEXT_NODE",node:e}}function H(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:u,node:e,order:t,sortLayers:r}}function M(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:p,node:e,nodeType:t,removeEmpty:r}}function B(e,t,r){return{type:l,node:e,nodeType:t,options:r}}function F(e,t,r){return{type:a,node:e,groupId:t,index:r}}function U(e){return{type:s,layerId:e}}function V(e,t){return{type:f,layerId:e,error:t}}function X(e,t,r){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:r}}function q(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d,layer:e,foreground:t}}function W(e,t,r){return{type:b,group:e,parent:t,options:r}}function z(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function K(e){return{type:R,layers:e}}function $(e,t){return{type:_,layers:e,error:t}}function Q(e,t,r,n){return{type:g,dimension:e,value:t,options:r,layers:n}}function J(e){return{type:w,layer:e}}function ee(e){return{type:S,layer:e}}function te(){return{type:P}}function re(e,t,r){return{type:T,id:e,nodeType:t,ctrlKey:r}}function ne(e){return{type:A,text:e}}function oe(e,t){return{type:j,metadataRecord:e,maskLoading:t}}function ie(){return{type:k}}function ce(e,t){return{type:N,newParams:e,update:t}}},52595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(61365).Z)(r(30294).Overlay)},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(24852),o=r.n(n),i=r(45697),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(u,e);var t,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(i){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function u(){return p(this,u),c.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);y(d,"propTypes",{disabled:c().bool,className:c().string,checked:c().bool,onChange:c().func,onClick:c().func}),y(d,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const b=d},12346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>L});var n=r(24852),o=r.n(n),i=r(45697),c=r.n(i),u=r(30294),p=r(45869),l=r(80717),a=r(5346);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function b(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(i){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function u(){return f(this,u),c.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e=this;return o().createElement(l.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},btnGroupProps:{style:{margin:10}},buttons:[{glyph:this.props.checked?"chevron-down":"chevron-left",visible:!0,tooltip:this.props.checked?o().createElement(a.Z,{msgId:"collapse"}):o().createElement(a.Z,{msgId:"expand"}),onClick:function(){return e.props.onClick(!e.props.checked)}}]})}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);m(E,"propTypes",{checked:c().bool,onClick:c().func}),m(E,"defaultProps",{checked:!1,onClick:function(){}});const v=E;var O=r(38560),g=r(82110);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function P(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(){return o().createElement(O.Z,{className:"square-button-sm no-border switch-error"},o().createElement(u.Glyphicon,{glyph:"exclamation-mark",className:"text-danger"}))},N=function(){return o().createElement("div",{className:"switch-loading"},o().createElement(g.Z,{size:"small"}))},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,r,n,i,c=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(i){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function a(){var e;_(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(T(e=c.call.apply(c,[this].concat(r))),"state",{}),e}return t=a,(r=[{key:"renderHeader",value:function(){var e=this,t=this.props.useToolbar?v:p.Z;return o().createElement("div",null,o().createElement("div",{className:"pull-left"},this.props.title||this.props.header),o().createElement("div",{className:"pull-right"},this.props.locked?null:o().createElement(t,{checked:this.props.expanded,onClick:function(t){e.props.onSwitch(t)}}),this.props.error?o().createElement(k,null):null,this.props.loading?o().createElement(N,null):null,this.props.buttons.length>0&&this.props.expanded&&o().createElement(l.Z,{btnDefaultProps:{className:"square-button-sm no-border"},buttons:this.props.buttons})))}},{key:"render",value:function(){return o().createElement(u.Panel,{className:"mapstore-switch-panel",collapsible:!0,expanded:this.props.expanded,defaultExpanded:this.props.defaultExpanded,header:this.renderHeader()},this.props.children)}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);j(D,"propTypes",{header:c().node,title:c().oneOfType([c().string,c().node]),defaultExpanded:c().string,expanded:c().bool,onSwitch:c().func,locked:c().bool,buttons:c().array,loading:c().bool,error:c().any,errorMsgId:c().string,transitionProps:c().object,useToolbar:c().bool}),j(D,"defaultProps",{title:"",expanded:!1,onSwitch:function(){},locked:!1,buttons:[],useToolbar:!1});const L=D},2576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(24852),o=r.n(n),i=r(80307),c=r.n(i),u=r(45697),p=r.n(u),l=r(30294),a=r(52595),s=r(50966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(p,e);var t,r,n,i,u=(n=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(i){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function p(){return y(this,p),u.apply(this,arguments)}return t=p,(r=[{key:"renderPopover",value:function(){return o().createElement(l.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(l.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(s.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(a.Z,{placement:this.props.placement,show:!0,target:function(){return c().findDOMNode(e.target)}},this.renderPopover())])}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o().Component);E(v,"propTypes",{id:p().string,title:p().string,text:p().string,glyph:p().string,bsStyle:p().string,placement:p().string,left:p().number,top:p().number,trigger:p().oneOfType([p().array,p().bool])}),E(v,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const O=v}}]);