(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3739],{7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(27418),o=n.n(r),a=n(45697),l=n.n(a),i=n(24852),c=n.n(i),s=n(85294),u=n.n(s),p=n(72986),f=n.n(p),d=n(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,a,l=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(a){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function i(){var e;b(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return E(w(e=l.call.apply(l,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?c().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},c().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},c().createElement(d.Z,{msgId:"loading"}),c().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),E(w(e),"renderRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),E(w(e),"hasRole",(function(t){return c().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),E(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this,t=c().createElement("div",{id:this.props.id,style:h({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},c().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),c().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?c().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):c().createElement("span",null)),n=this.props.draggable?c().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?c().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&v(t.prototype,n),i}(c().Component);E(k,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),E(k,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const j=k},75480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(24852),o=n.n(r);const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(24852),o=n.n(r),a=n(30294),l=n(7472),i=n(80717),c=n(67076),s=n(19081),u=n.n(s),p=n(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},d={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,c.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,c=e.loadingText,s=e.onClose,m=void 0===s?function(){}:s,y=e.title,h=void 0===y?"":y,b=e.clickOutEnabled,v=void 0===b||b,g=e.showClose,C=void 0===g||g,w=e.disabledClose,O=void 0!==w&&w,E=e.showFullscreen,k=void 0!==E&&E,j=e.fullscreenType,x=void 0===j?"full":j,N=e.buttons,P=void 0===N?[]:N,T=e.size,S=void 0===T?"":T,_=e.bodyClassName,R=void 0===_?"":_,D=e.children,U=e.draggable,z=void 0!==U&&U,I=e.fullscreenState,Z=e.onFullscreen,A=e.fade,L=void 0!==A&&A,F=e.fitContent,M=e.modalClassName,B=void 0===M?"":M,G=e.dialogClassName,q=void 0===G?"":G,X=e.enableFooter,H=void 0===X||X,J=f[S]||"",K=k&&"expanded"===I&&d.className[x]||"",Q=n?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(z?"ms-draggable":"")},o().createElement(l.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:v?m:function(){},containerClassName:"ms-resizable-modal",draggable:z,modal:!0,className:"modal-dialog modal-content"+J+K+q+(F?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},h),k&&d.className[x]&&o().createElement(a.Glyphicon,{className:"ms-header-btn",onClick:function(){return Z("expanded"===I?"collapsed":"expanded")},glyph:d.glyph[I][x]}),C&&m&&o().createElement(a.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:O}))),o().createElement("div",{role:"body",className:R},D),H&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?c:null),o().createElement(i.Z,{buttons:P})))):null;return L?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Q):Q}))},25108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(82904),o=n(27418),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,l({},t.control,a()({},e[t.control],l({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,l({},t.control,a()({},e[t.control],l({},t.property,void 0)))):a()({},e,l({},t.control,a()({},e[t.control],l({},t.property,t.value))));case r.dc:return a()({},e,l({},t.control,a()({},e[t.control],t.properties)));case r.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,n){return a()(t,l({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,i);default:return e}}},56973:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var r=n(24852),o=n.n(r),a=n(45697),l=n.n(a),i=n(71703),c=n(22222),s=n(22843),u=n(82904),p=n(5346),f=n(30294),d=n(25108),m=n(74855),y=n.n(m),h=n(15135),b=n(38560),v=(0,h.Z)(y());const g=function(e){var t=e.shareUrl,n=void 0===t?"":t,r=e.copied,a=void 0!==r&&r,l=e.onCopy,i=void 0===l?function(){}:l,c=e.onMouseLeave,s=void 0===c?function(){}:c;return o().createElement(v,{text:n,tooltipId:a?"share.msgCopiedUrl":"share.msgToCopyUrl",tooltipPosition:"bottom",key:a.toString(),onCopy:function(){return i(n)}},o().createElement(b.Z,{bsStyle:"primary",onMouseLeave:function(){return s()}},o().createElement(f.Glyphicon,{glyph:"copy"})))};var C=n(72500),w=n.n(C);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,a,l=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(a){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function i(){var e;E(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return T(N(e=l.call.apply(l,[this].concat(n))),"state",{copied:!1,forceDrawer:!1,connections:!1}),T(N(e),"renderTools",(function(){return o().createElement(o().Fragment,null,e.props.showTOCToggle&&o().createElement(f.Checkbox,{checked:e.state.forceDrawer,onChange:function(){return e.setState({forceDrawer:!e.state.forceDrawer})}},o().createElement(p.Z,{msgId:"share.forceDrawer"})),e.props.showConnectionsParamToggle&&o().createElement(f.Checkbox,{checked:e.state.connections,onChange:function(){return e.setState({connections:!e.state.connections})}},o().createElement(p.Z,{msgId:"share.showConnections"})))})),T(N(e),"generateUrl",(function(){var t=w().parse(e.props.shareUrl,!0);return e.state.forceDrawer&&(t.query.forceDrawer=!0),e.state.connections&&(t.query.connections=!0),w().format(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this,t='<iframe style="border: none;" height="400" width="600" src="'+this.generateUrl(this.props.shareUrl)+'"></iframe>';return o().createElement("div",{className:"input-link"},o().createElement("div",{className:"input-link-head"},o().createElement("h4",null,o().createElement(p.Z,{msgId:"share.embeddedLinkTitle"})),o().createElement(g,{copied:this.state.copied,shareUrl:t,onCopy:function(){return e.setState({copied:!0})},onMouseLeave:function(){return e.setState({copied:!1})}})),o().createElement("div",{className:"input-link-tools"},this.renderTools()),o().createElement("pre",null,o().createElement("code",null,t)))}}])&&k(t.prototype,n),i}(o().Component);T(S,"propTypes",{shareUrl:l().string,showTOCToggle:l().bool,showConnectionsParamToggle:l().bool}),T(S,"defaultProps",{showTOCToggle:!0,shareUrl:""});const _=S;function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?Z(e):t}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(i,e);var t,n,r,a,l=(r=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(a){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function i(){var e;D(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return L(Z(e=l.call.apply(l,[this].concat(n))),"state",{copied:!1}),e}return t=i,(n=[{key:"render",value:function(){var e=this;return o().createElement("div",{className:"input-link"},o().createElement("div",{className:"input-link-head"},o().createElement("h4",null,o().createElement(p.Z,{msgId:"share.directLinkTitle"})),o().createElement(g,{copied:this.state.copied,shareUrl:this.props.shareUrl,onCopy:function(){return e.setState({copied:!0})},onMouseLeave:function(){return e.setState({copied:!1})}})),o().createElement("pre",{style:{padding:0}},o().createElement(f.FormControl,{readOnly:!0,type:"text",value:this.props.shareUrl,onFocus:function(e){return e.target.select()}})))}}])&&U(t.prototype,n),i}(o().Component);L(F,"propTypes",{shareUrl:l().string});const M=F;var B=n(94745),G=n(827);function q(e){var t=e.resourceId,n=e.pathTemplate,r=e.enabled,a=e.onClose,l=function(e){var t=e.resourceId,n=e.pathTemplate,r=w().parse(location.href),o=r.host,a=r.protocol,l=n.replace(/\{id\}/g,t);return w().format({host:o,protocol:a,pathname:l})}({resourceId:t,pathTemplate:n});return o().createElement(B.Z,{modalClassName:"gn-share-modal",title:o().createElement(p.Z,{msgId:"share.title"}),show:r,fitContent:!0,clickOutEnabled:!1,onClose:function(){return a()}},o().createElement(M,{shareUrl:l}),o().createElement(_,{showTOCToggle:!1,shareUrl:l}))}q.propTypes={resourceId:l().oneOfType([l().number,l().string]),pathTemplate:l().string,enabled:l().bool,onClose:l().func},q.defaultProps={resourceId:null,pathTemplate:"/apps/{id}/embed",enabled:!1,onClose:function(){}};var X=(0,i.connect)((0,c.P1)([function(e){var t,n;return null==e||null===(t=e.controls)||void 0===t||null===(n=t.share)||void 0===n?void 0:n.enabled},function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id},G._H],(function(e,t,n){return{enabled:e,resourceId:t||(null==n?void 0:n.id)}})),{onClose:u.Xi.bind(null,"share",null)})(q);const H=(0,s.rx)("Share",{component:X,containers:{BurgerMenu:{name:"share",position:1e3,text:o().createElement(p.Z,{msgId:"share.title"}),icon:o().createElement(f.Glyphicon,{glyph:"share-alt"}),action:u.Xi.bind(null,"share",null),selector:(0,c.P1)((function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.isNew}),(function(e){var t;return null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id}),G._H,(function(e,t,n){return{style:!e&&(t||null!=n&&n.id)?{}:{display:"none"}}}))}},epics:{},reducers:{controls:d.Z}})},20640:(e,t,n)=>{"use strict";var r=n(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,l,i,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},19081:(e,t,n)=>{"use strict";e.exports=n(1174)},74300:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=i(n(24852)),l=i(n(20640));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.CopyToClipboard=function(e){function t(){var e,n,r;c(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.onClick=function(e){var t=r.props,n=t.text,o=t.onCopy,i=t.children,c=t.options,s=a.default.Children.only(i),u=(0,l.default)(n,c);o&&o(n,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["text","onCopy","options","children"]),o=a.default.Children.only(t);return a.default.cloneElement(o,r({},n,{onClick:this.onClick}))}}]),t}(a.default.PureComponent)},74855:(e,t,n)=>{"use strict";var r=n(74300).CopyToClipboard;e.exports=r},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);