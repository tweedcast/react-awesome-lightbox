module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){t.exports=require("react")},function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return b}));var n=o(0),r=o.n(n);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=d(t);if(e){var r=d(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return s(this,o)}}function s(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t){var e=0,o=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,o=t.touches[0].pageY):(e=t.pageX,o=t.pageY),{x:e,y:o}}function v(t){return t.condition?r.a.createElement(r.a.Fragment,null,t.children):null}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(s,t);var e,o,n,a=u(s);function s(){var t,e,o,n,l;i(this,s);for(var c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];return m(f(l=a.call.apply(a,[this].concat(u))),"initX",0),m(f(l),"initY",0),m(f(l),"lastX",0),m(f(l),"lastY",0),m(f(l),"_cont",r.a.createRef()),m(f(l),"state",{x:0,y:0,zoom:1,rotate:0,loading:!0,moving:!1,current:null!==(t=null===(e=l.props)||void 0===e?void 0:e.startIndex)&&void 0!==t?t:0,multi:!(null===(o=l.props)||void 0===o||null===(n=o.images)||void 0===n||!n.length)}),m(f(l),"createTransform",(function(t,e,o,n){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(o,") rotate(").concat(n,"deg)")})),m(f(l),"stopSideEffect",(function(t){return t.stopPropagation()})),m(f(l),"getCurrentImage",(function(t,e){var o,n,r,a,i;return t.multi?null!==(n=null!==(r=null===(a=e.images[t.current])||void 0===a?void 0:a.url)&&void 0!==r?r:null===(i=e.images)||void 0===i?void 0:i[t.current])&&void 0!==n?n:"":null!==(o=e.image)&&void 0!==o?o:""})),m(f(l),"getCurrentTitle",(function(t,e){var o,n,r,a;return t.multi?null!==(n=null===(r=e.images)||void 0===r||null===(a=r[t.current])||void 0===a?void 0:a.title)&&void 0!==n?n:"":null!==(o=e.title)&&void 0!==o?o:""})),m(f(l),"resetZoom",(function(){return l.setState({x:0,y:0,zoom:1})})),m(f(l),"shockZoom",(function(t){var e,o,n=l.props,r=n.zoomStep,a=void 0===r?.3:r,i=n.allowZoom,c=void 0===i||i,u=n.doubleClickZoom,s=void 0===u?4:u;if(!c||!s)return!1;if(l.stopSideEffect(t),l.state.zoom>1)return l.resetZoom();var f=(a<1?Math.ceil(s/a):a)*a,d=p(t),m=null===(e=l._cont.current)||void 0===e||null===(o=e.getBoundingClientRect)||void 0===o?void 0:o.call(e),v=m.x+m.width/2,b=m.y+m.height/2,y=-1*(d.x-v)*f,g=-1*(d.y-b)*f;l.setState({x:y,y:g,zoom:f})})),m(f(l),"navigateImage",(function(t,e){l.stopSideEffect(e);var o=0;switch(t){case"next":o=l.state.current+1;break;case"prev":o=l.state.current-1}o>=l.props.images.length?o=0:o<0&&(o=l.props.images.length-1),l.setState({current:o,x:0,y:0,zoom:1,rotate:0,loading:!0}),"function"==typeof l.props.onNavigateImage&&l.props.onNavigateImage(o)})),m(f(l),"startMove",(function(t){if(l.state.zoom<=1)return!1;l.setState({moving:!0});var e=p(t);l.initX=e.x-l.lastX,l.initY=e.y-l.lastY})),m(f(l),"duringMove",(function(t){if(!l.state.moving)return!1;var e=p(t);l.lastX=e.x-l.initX,l.lastY=e.y-l.initY,l.setState({x:e.x-l.initX,y:e.y-l.initY})})),m(f(l),"endMove",(function(t){return l.setState({moving:!1})})),m(f(l),"wheelZoom",(function(t){t.deltaY>0?l.setState({zoom:l.state.zoom+zoomStep}):t.deltaY<0&&l.setState({zoom:l.state.zoom-zoomStep})})),m(f(l),"applyZoom",(function(t){var e=l.props.zoomStep,o=void 0===e?.3:e;switch(t){case"in":l.setState({zoom:l.state.zoom+o});break;case"out":var n=l.state.zoom-o;if(n<1)break;1===n?l.setState({x:0,y:0,zoom:1}):l.setState({zoom:n});break;case"reset":l.resetZoom()}})),m(f(l),"applyRotate",(function(t){switch(t){case"cw":l.setState({rotate:l.state.rotate+90});break;case"acw":l.setState({rotate:l.state.rotate-90})}})),m(f(l),"reset",(function(t){l.stopSideEffect(t),l.setState({x:0,y:0,zoom:1,rotate:0})})),m(f(l),"exit",(function(t){if("function"==typeof l.props.onClose)return l.props.onClose(t);console.error("No Exit function passed on prop: onClose. Clicking the close button will do nothing")})),m(f(l),"shouldShowReset",(function(){return l.state.x||l.state.y||1!==l.state.zoom||0!==l.state.rotate})),m(f(l),"canvasClick",(function(t){var e=l.props.clickOutsideToExit;if((void 0===e||e)&&l.state.zoom<=1)return l.exit(t)})),m(f(l),"keyboardNavigation",(function(t){var e=l.props,o=e.allowZoom,n=void 0===o||o,r=e.allowReset,a=void 0===r||r,i=l.state,c=i.multi,u=i.x,s=i.y,f=i.zoom;switch(t.key){case"ArrowLeft":c&&1===f?l.navigateImage("prev",t):f>1&&l.setState({x:u-20});break;case"ArrowRight":c&&1===f?l.navigateImage("next",t):f>1&&l.setState({x:u+20});break;case"ArrowUp":f>1&&l.setState({y:s+20});break;case"ArrowDown":f>1&&l.setState({y:s-20});break;case"+":n&&l.applyZoom("in");break;case"-":n&&l.applyZoom("out");break;case"Escape":a&&l.shouldShowReset()?l.reset(t):l.exit(t)}})),l}return e=s,(o=[{key:"componentDidMount",value:function(){document.body.classList.add("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.addEventListener("keyup",this.keyboardNavigation)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("lb-open-lightbox");var t=this.props.keyboardInteraction;(void 0===t||t)&&document.removeEventListener("keyup",this.keyboardNavigation)}},{key:"render",value:function(){var t=this,e=this.getCurrentImage(this.state,this.props),o=this.getCurrentTitle(this.state,this.props);if(!e)return console.warn("Not showing lightbox because no image(s) was supplied"),null;var n=this.props,a=n.allowZoom,i=void 0===a||a,l=n.allowRotate,c=void 0===l||l,u=n.buttonAlign,s=void 0===u?"flex-end":u,f=n.showTitle,d=void 0===f||f,m=n.allowReset,p=void 0===m||m,b=this.state,y=b.x,g=b.y,h=b.zoom,x=b.rotate,w=b.multi,k=b.loading,S=b.moving,E=p&&this.shouldShowReset();return r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header",style:{justifyContent:s}},r.a.createElement(v,{condition:d&&o},r.a.createElement("div",{className:"lb-title",style:{display:"center"===s?"none":"flex",order:"flex-start"===s?"2":"unset"}},r.a.createElement("span",{title:o,style:{textAlign:"flex-start"===s?"right":"left"}},o))),r.a.createElement(v,{condition:"center"===s||E},r.a.createElement("div",{title:"Reset",style:{order:"flex-start"===s?"1":"unset"},className:"lb-button lb-icon-reset lb-hide-mobile reload ".concat(E?"":"lb-disabled"),onClick:this.reset})),r.a.createElement(v,{condition:w},r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev lb-hide-mobile",onClick:function(e){return t.navigateImage("prev",e)}}),r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next lb-hide-mobile",onClick:function(e){return t.navigateImage("next",e)}})),r.a.createElement(v,{condition:i},r.a.createElement("div",{title:"Zoom In",className:"lb-button lb-icon-zoomin zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{title:"Zoom Out",className:"lb-button lb-icon-zoomout zoomout ".concat(h<=1?"lb-disabled":""),onClick:function(){return t.applyZoom("out")}})),r.a.createElement(v,{condition:c},r.a.createElement("div",{title:"Rotate left",className:"lb-button lb-icon-rotate rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{title:"Rotate right",className:"lb-button lb-icon-rotate rotater",onClick:function(){return t.applyRotate("cw")}})),r.a.createElement("div",{title:"Close",className:"lb-button lb-icon-close close",style:{order:"flex-start"===s?"-1":"unset"},onClick:function(e){return t.exit(e)}})),r.a.createElement("div",{className:"lb-canvas".concat(k?" lb-loading":""),ref:this._cont,onClick:function(e){return t.canvasClick(e)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(y,g,h,x),cursor:h>1?"grab":"unset",transition:S?"none":"all 0.1s"},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},onDoubleClick:function(e){return t.shockZoom(e)},onWheel:function(e){return t.wheelZoom(e)},onLoad:function(e){return t.setState({loading:!1})},className:"lb-img".concat(k?" lb-loading":""),title:o,src:e,alt:o}),r.a.createElement("div",{className:"mobile-controls lb-show-mobile"},w?r.a.createElement("div",{title:"Previous",className:"lb-button lb-icon-arrow prev",onClick:function(e){return t.navigateImage("prev",e)}}):null,E?r.a.createElement("div",{title:"Reset",className:"lb-button lb-icon-reset reload",onClick:this.reset}):null,w?r.a.createElement("div",{title:"Next",className:"lb-button lb-icon-arrow next",onClick:function(e){return t.navigateImage("next",e)}}):null)))}}])&&l(e.prototype,o),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),s}(r.a.Component)}]);