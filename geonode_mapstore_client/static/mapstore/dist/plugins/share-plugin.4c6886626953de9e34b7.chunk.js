(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3739],{7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var n=r(27418),o=r.n(n),a=r(45697),l=r.n(a),i=r(24852),c=r.n(i),s=r(85294),u=r.n(s),p=r(72986),f=r.n(p),d=r(5346);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var t,r,n,a,l=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(a){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return w(this,e)});function i(){var e;h(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return E(C(e=l.call.apply(l,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),E(C(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),E(C(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),E(C(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),r=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(c().Component);E(j,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),E(j,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const k=j},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(24852),o=r.n(n);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(24852),o=r.n(n),a=r(30294),l=r(7472),i=r(80717),c=r(67076),s=r(19081),u=r.n(s),p=r(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},d={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const y=(0,c.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,c=e.loadingText,s=e.onClose,y=void 0===s?function(){}:s,m=e.title,b=void 0===m?"":m,h=e.clickOutEnabled,v=void 0===h||h,g=e.showClose,w=void 0===g||g,C=e.disabledClose,O=void 0!==C&&C,E=e.showFullscreen,j=void 0!==E&&E,k=e.fullscreenType,P=void 0===k?"full":k,x=e.buttons,N=void 0===x?[]:x,T=e.size,S=void 0===T?"":T,_=e.bodyClassName,R=void 0===_?"":_,D=e.children,U=e.draggable,z=void 0!==U&&U,I=e.fullscreenState,Z=e.onFullscreen,A=e.fade,L=void 0!==A&&A,F=e.fitContent,M=e.modalClassName,B=void 0===M?"":M,G=e.dialogClassName,q=void 0===G?"":G,X=e.enableFooter,H=void 0===X||X,J=f[S]||"",K=j&&"expanded"===I&&d.className[P]||"",Q=r?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(z?"ms-draggable":"")},o().createElement(l.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:v?y:function(){},containerClassName:"ms-resizable-modal",draggable:z,modal:!0,className:"modal-dialog modal-content"+J+K+q+(F?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),j&&d.className[P]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return Z("expanded"===I?"collapsed":"expanded")},glyph:d.glyph[I][P]}),w&&y&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:y,disabled:O}))),o().createElement("div",{role:"body",className:R},D),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?c:null),o().createElement(i.Z,{buttons:N})))):null;return L?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Q):Q}))},25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(82904),o=r(27418),a=r.n(o);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return a()({},e,l({},t.control,a()({},e[t.control],l({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,l({},t.control,a()({},e[t.control],l({},t.property,void 0)))):a()({},e,l({},t.control,a()({},e[t.control],l({},t.property,t.value))));case n.dc:return a()({},e,l({},t.control,a()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,r){return a()(t,l({},r,a()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return a()({},e,i);default:return e}}},56973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>H});var n=r(24852),o=r.n(n),a=r(45697),l=r.n(a),i=r(71703),c=r(22222),s=r(22843),u=r(82904),p=r(5346),f=r(30294),d=r(25108),y=r(74855),m=r.n(y),b=r(15135),h=r(38560),v=(0,b.Z)(m());const g=function(e){var t=e.shareUrl,r=void 0===t?"":t,n=e.copied,a=void 0!==n&&n,l=e.onCopy,i=void 0===l?function(){}:l,c=e.onMouseLeave,s=void 0===c?function(){}:c;return o().createElement(v,{text:r,tooltipId:a?"share.msgCopiedUrl":"share.msgToCopyUrl",tooltipPosition:"bottom",key:a.toString(),onCopy:function(){return i(r)}},o().createElement(h.Z,{bsStyle:"primary",onMouseLeave:function(){return s()}},o().createElement(f.Glyphicon,{glyph:"copy"})))};var w=r(72500),C=r.n(w);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function P(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(i,e);var t,r,n,a,l=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(a){var r=N(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function i(){var e;E(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return T(x(e=l.call.apply(l,[this].concat(r))),"state",{copied:!1,forceDrawer:!1,connections:!1}),T(x(e),"renderTools",(function(){return o().createElement(o().Fragment,null,e.props.showTOCToggle&&o().createElement(f.Checkbox,{checked:e.state.forceDrawer,onChange:function(){return e.setState({forceDrawer:!e.state.forceDrawer})}},o().createElement(p.Z,{msgId:"share.forceDrawer"})),e.props.showConnectionsParamToggle&&o().createElement(f.Checkbox,{checked:e.state.connections,onChange:function(){return e.setState({connections:!e.state.connections})}},o().createElement(p.Z,{msgId:"share.showConnections"})))})),T(x(e),"generateUrl",(function(){var t=C().parse(e.props.shareUrl,!0);return e.state.forceDrawer&&(t.query.forceDrawer=!0),e.state.connections&&(t.query.connections=!0),C().format(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this,t='<iframe style="border: none;" height="400" width="600" src="'+this.generateUrl(this.props.shareUrl)+'"></iframe>';return o().createElement("div",{className:"input-link"},o().createElement("div",{className:"input-link-head"},o().createElement("h4",null,o().createElement(p.Z,{msgId:"share.embeddedLinkTitle"})),o().createElement(g,{copied:this.state.copied,shareUrl:t,onCopy:function(){return e.setState({copied:!0})},onMouseLeave:function(){return e.setState({copied:!1})}})),o().createElement("div",{className:"input-link-tools"},this.renderTools()),o().createElement("pre",null,o().createElement("code",null,t)))}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o().Component);T(S,"propTypes",{shareUrl:l().string,showTOCToggle:l().bool,showConnectionsParamToggle:l().bool}),T(S,"defaultProps",{showTOCToggle:!0,shareUrl:""});const _=S;function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}function I(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Z(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(i,e);var t,r,n,a,l=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(a){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function i(){var e;D(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return L(Z(e=l.call.apply(l,[this].concat(r))),"state",{copied:!1}),e}return t=i,(r=[{key:"render",value:function(){var e=this;return o().createElement("div",{className:"input-link"},o().createElement("div",{className:"input-link-head"},o().createElement("h4",null,o().createElement(p.Z,{msgId:"share.directLinkTitle"})),o().createElement(g,{copied:this.state.copied,shareUrl:this.props.shareUrl,onCopy:function(){return e.setState({copied:!0})},onMouseLeave:function(){return e.setState({copied:!1})}})),o().createElement("pre",{style:{padding:0}},o().createElement(f.FormControl,{readOnly:!0,type:"text",value:this.props.shareUrl,onFocus:function(e){return e.target.select()}})))}}])&&U(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o().Component);L(F,"propTypes",{shareUrl:l().string});const M=F;var B=r(94745),G=r(827);function q(e){var t=e.resourceId,r=e.pathTemplate,n=e.enabled,a=e.onClose,l=function(e){var t=e.resourceId,r=e.pathTemplate,n=C().parse(location.href),o=n.host,a=n.protocol,l=r.replace(/\{id\}/g,t);return C().format({host:o,protocol:a,pathname:l})}({resourceId:t,pathTemplate:r});return o().createElement(B.Z,{modalClassName:"gn-share-modal",title:o().createElement(p.Z,{msgId:"share.title"}),show:n,fitContent:!0,clickOutEnabled:!1,onClose:function(){return a()}},o().createElement(M,{shareUrl:l}),o().createElement(_,{showTOCToggle:!1,shareUrl:l}))}q.propTypes={resourceId:l().oneOfType([l().number,l().string]),pathTemplate:l().string,enabled:l().bool,onClose:l().func},q.defaultProps={resourceId:null,pathTemplate:"/apps/{id}/embed",enabled:!1,onClose:function(){}};var X=(0,i.connect)((0,c.P1)([function(e){var t,r;return null==e||null===(t=e.controls)||void 0===t||null===(r=t.share)||void 0===r?void 0:r.enabled},function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id},G._H],(function(e,t,r){return{enabled:e,resourceId:t||(null==r?void 0:r.id)}})),{onClose:u.Xi.bind(null,"share",null)})(q);const H=(0,s.rx)("Share",{component:X,containers:{BurgerMenu:{name:"share",position:1e3,text:o().createElement(p.Z,{msgId:"share.title"}),icon:o().createElement(f.Glyphicon,{glyph:"share-alt"}),action:u.Xi.bind(null,"share",null),selector:(0,c.P1)((function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.isNew}),(function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id}),G._H,(function(e,t,r){return{style:!e&&(t||null!=r&&r.id)?{}:{display:"none"}}}))}},epics:{},reducers:{controls:d.Z}})},20640:(e,t,r)=>{"use strict";var n=r(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,l,i,c,s,u=!1;t||(t={}),r=t.debug||!1;try{if(l=n(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){r&&console.error("unable to copy using execCommand: ",n),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(n){r&&console.error("unable to copy using clipboardData: ",n),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},19081:(e,t,r)=>{"use strict";e.exports=r(1174)},74300:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(24852)),l=i(r(20640));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.CopyToClipboard=function(e){function t(){var e,r,n;c(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.onClick=function(e){var t=n.props,r=t.text,o=t.onCopy,i=t.children,c=t.options,s=a.default.Children.only(i),u=(0,l.default)(r,c);o&&o(r,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["text","onCopy","options","children"]),o=a.default.Children.only(t);return a.default.cloneElement(o,n({},r,{onClick:this.onClick}))}}]),t}(a.default.PureComponent)},74855:(e,t,r)=>{"use strict";var n=r(74300).CopyToClipboard;e.exports=n},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);