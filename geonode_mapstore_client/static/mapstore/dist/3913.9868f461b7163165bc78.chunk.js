(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3913],{82385:(e,t,n)=>{"use strict";n.d(t,{nr:()=>r,B8:()=>o,LE:()=>i,$Z:()=>a,Cp:()=>c});var r="MAP_EDITOR:SHOW",o="MAP_EDITOR:HIDE",i="MAP_EDITOR:SAVE",a=function(e,t){return{type:r,owner:e,map:t}},c=function(e){return{type:o,owner:e}}},93848:(e,t,n)=>{"use strict";n.d(t,{Ai:()=>a,AQ:()=>c,Gl:()=>u,wd:()=>s,V9:()=>l,ih:()=>d,B8:()=>f,ww:()=>E,HP:()=>m,ri:()=>p,gd:()=>y,nr:()=>I,ty:()=>v,GZ:()=>D,O6:()=>g,Vt:()=>O,Ug:()=>A,Ke:()=>T,Cp:()=>h,pW:()=>b,Gr:()=>_,gG:()=>S,oo:()=>M,Gh:()=>w,$G:()=>R,I5:()=>P,d8:()=>C,y5:()=>j,Az:()=>G,$Z:()=>k,Ql:()=>V,Ul:()=>L,TU:()=>N,E0:()=>U,Yt:()=>Z});var r=n(13218),o=n.n(r),i=n(27693),a="MEDIA_EDITOR:ADDING_MEDIA",c="MEDIA_EDITOR:CHOOSE_MEDIA",u="MEDIA_EDITOR:EDITING_MEDIA",s="GEOSTORY:EDIT_MEDIA",l="MEDIA_EDITOR:LOAD_MEDIA",d="MEDIA_EDITOR:LOAD_MEDIA_SUCCESS",f="MEDIA_EDITOR:HIDE",E="MEDIA_EDITOR:SAVE_MEDIA",m="MEDIA_EDITOR:SET_MEDIA_TYPE",p="MEDIA_EDITOR:SET_MEDIA_SERVICE",y="MEDIA_EDITOR:SELECT_ITEM",I="MEDIA_EDITOR:SHOW",v="MEDIA_EDITOR:UPDATE_ITEM",D="MEDIA_EDITOR:IMPORT_IN_LOCAL",g="MEDIA_EDITOR:REMOVE_MEDIA",O="MEDIA_EDITOR:LOADING_SELECTED_MEDIA",A="MEDIA_EDITOR:LOADING_MEDIA_LIST",T=function(e){return{type:c,resource:e}},h=function(){return{type:f}},b=function(e,t,n){return{type:l,params:e,mediaType:t,sourceId:n}},_=function(e){var t=e.mediaType,n=e.sourceId,r=e.params,o=e.resultData;return{type:d,mediaType:t,sourceId:n,params:r,resultData:o}},S=function(e){var t=e.type,n=e.source,r=e.data;return{type:E,mediaType:t,source:n,data:r}},M=function(e){return{type:"MEDIA_EDITOR:SAVE_MEDIA_SUCCESS",mediaType:e.mediaType,source:e.source,data:e.data,id:e.id}},w=function(e){return{type:y,id:e}},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"merge";return{type:v,item:e,mode:t}},P=function(e){return{type:a,adding:e}},C=function(e){return{type:p,id:o()(e)?e.value:e}},j=function(e){return{type:m,mediaType:e}},G=function(e){return{type:u,editing:e}},k=function(e,t){return{type:I,owner:e,settings:t}},V=function(e){var t=e.path,n=e.owner;return{type:s,path:t,owner:void 0===n?"geostory":n}},L=function(e){var t=e.resource,n=e.sourceType,r=void 0===n?i.r.GEOSTORY:n,o=e.owner;return{type:D,resource:t,sourceType:r,owner:void 0===o?"geostory":o}},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"geostory";return{type:g,mediaType:e,owner:t}},U=function(e){return{type:O,loading:e}},Z=function(){return{type:A}}},52826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(24852),o=n.n(r),i=n(70390),a=n(32425),c=n(80628),u=n(30294),s=n(92579),l=n(5346);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=(0,c.Z)((function(e){var t=e.src,n=e.width,c=e.height,s=e.resolution,d=e.thumbnail,E=e.controls,p=e.play,y=e.onPlay,I=void 0===y?function(){}:y,v=e.onStart,D=void 0===v?function(){}:v,g=e.fit,O=e.loop,A=e.volume,T=void 0===A?1:A,h=e.muted,b=p,_=m((0,r.useState)(b),2),S=_[0],M=_[1],w=m((0,r.useState)(),2),R=w[0],P=w[1],C=m((0,r.useState)(p),2),j=C[0],G=C[1],k="cover"===g,V=m((0,r.useState)(!1),2),L=V[0],N=V[1];(0,r.useEffect)((function(){!S&&b&&(M(!0),G(!0)),S&&D(S)}),[S,b]);var U,Z=(U=n/c,k?U<s?[c*s,c]:[n,n/s]:"contain"===g?U<s?[n,n/s]:[c*s,c]:[n,n/s]),x="contain"===g||k?c:Z[1],H=!k&&E,W=!!k||O;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:x,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,S&&o().createElement(i.ZP,{url:t,width:Z[0],height:Z[1],playing:b,loop:W,volume:T,muted:h,style:k?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:H,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:H?2:0,modestbranding:1,rel:0}},onReady:function(){return G(!1)},onError:function(e){P(e),(""+e).includes("NotAllowedError")&&(I(!1),N(!0),G(!1))},onPause:function(){I(!1)},onPlay:function(){I(!0),L&&(P(!1),N(!1))}}),(!S||S&&(j||R))&&o().createElement("div",{className:"ms-video-cover",style:f(f({position:"absolute",width:Z[0],height:Z[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(j||R)&&{cursor:"pointer"}),!b&&d&&{backgroundImage:"url(".concat(d,")"),backgroundSize:k?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){L?(N(!1),P(!1)):G(!0),M(!0),I(!0)}},j&&o().createElement(a.Z,{size:70}),R&&!L&&o().createElement("div",{className:"text-center"},o().createElement(u.Glyphicon,{glyph:"alert",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(l.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(j||R)&&!b||R&&L)&&o().createElement(u.Glyphicon,{glyph:"play",style:{fontSize:Z[1]/4>100?100:Z[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!H&&!L&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:Z[0],height:Z[1]}}))}));const I=function(e){var t=e.id,n=e.src,i=e.resolution,a=void 0===i?16/9:i,c=e.autoplay,u=e.inView,l=e.description,d=e.showCaption,f=e.caption,E=void 0===f?l:f,p=e.thumbnail,I=e.credits,v=e.controls,D=void 0===v||v,g=e.fit,O=e.loop,A=e.muted,T=e.onPlay,h=void 0===T?function(){}:T,b=e.mode,_=e.containerInView,S=(void 0===_||_)&&u,M=m((0,r.useState)(!1),2),w=M[0],R=M[1],P=function(e){R(e),h(e)};return(0,r.useEffect)((function(){b===s.nl.EDIT&&P(!1)}),[b]),(0,r.useEffect)((function(){b===s.nl.VIEW&&S&&(c||"cover"===g)&&P(!0)}),[S,c,g,b]),(0,r.useEffect)((function(){b===s.nl.VIEW&&!S&&w&&P(!1)}),[S,w,b]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(g,"-").concat(b),className:"ms-media ms-media-video"},o().createElement(y,{src:n,play:w&&b===s.nl.VIEW,resolution:a,thumbnail:p,controls:D&&b===s.nl.VIEW,onPlay:P,fit:g,loop:O,muted:A}),I&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,I)),d&&E&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,E)))}},7501:(e,t,n)=>{"use strict";n.d(t,{hp:()=>u,cM:()=>s,Qi:()=>l,TU:()=>d,IQ:()=>f,hb:()=>E,HL:()=>m,dq:()=>p,Iy:()=>y,Qd:()=>I,ER:()=>v,Gi:()=>D,mA:()=>g,jR:()=>O,mD:()=>A,XG:()=>T,B6:()=>h});var r=n(27361),o=n.n(r),i=n(13311),a=n.n(i),c=n(22222),u=function(e){return o()(e,"mediaEditor.open")},s=function(e){return o()(e,"mediaEditor.saveState.editing",!1)},l=function(e){return o()(e,"mediaEditor.saveState.addingMedia",!1)},d=function(e){return o()(e,"mediaEditor.saveState")},f=function(e){return o()(e,"mediaEditor.settings.sourceId")},E=function(e){return o()(e,"mediaEditor.settings.mediaType")},m=function(e){return o()(e,"mediaEditor.settings.sources")},p=function(e){return o()(m(e),f(e),{})},y=function(e){return function(e){return o()(function(e){return o()(e,"mediaEditor.settings.mediaTypes")}(e),"".concat(E(e),".sources"),[])}(e).map((function(t){return{id:t,name:(n=t,function(e){return o()(m(e),"".concat(n),{})})(e).name};var n}))},I=function(e){return o()(e,'mediaEditor.data["'.concat(E(e),'"]["').concat(f(e),'"].resultData'))},v=function(e){return o()(e,'mediaEditor.data["'.concat(E(e),'"]["').concat(f(e),'"].params'))},D=function(e){return o()(I(e),"resources")},g=function(e){return o()(I(e),"totalCount")},O=function(e){return o()(e,"mediaEditor.selected")},A=function(e){return o()(e,"mediaEditor.loadingSelected")},T=function(e){return o()(e,"mediaEditor.loadingList")},h=(0,c.P1)(D,O,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return a()(e,{id:t})}))},27693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);