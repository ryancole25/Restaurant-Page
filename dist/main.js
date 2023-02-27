(()=>{"use strict";var n,e,t,o,r,i,a,c,s,l,p,d,u,f,h={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,':root {\n  --deepblue: #222a4f;\n  --charcoal: #36454f;\n}\n\n#content {\n  font-weight: bold;\n}\n\nbody {\n  margin: 0px;\n  background-color: var(--charcoal);\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  display: flex;\n  width: 100vw;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.leftside {\n  display: flex;\n  align-items: center;\n  margin-left: 15px;\n}\n\n.logo img {\n  height: 10vh;\n  background-color: white;\n  border-radius: 15px;\n  margin-top: 10px;\n}\n\n.rightside {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n}\n\n.selector {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.circle {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n}\n\n.selector:hover {\n  cursor: pointer;\n  color: lightblue;\n}\n\n.Home .circle {\n  display: inline;\n  background-color: lightblue;\n}\n\n.Menu .circle {\n  display: inline;\n}\n\n.Reservations .circle {\n  display: inline;\n}\n\n.Contact .circle {\n  display: inline;\n}\n\n.photo {\n  position: relative;\n}\n\n.photo img {\n  width: 100vw;\n}\n\n.banner {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.banner button {\n  font-size: 24px;\n  background-color: white;\n  border: none;\n  padding: 20px;\n  border-radius: 10px;\n  color: var(--deepblue);\n}\n\n.banner h1 {\n  font-size: 50px;\n}\n\n.banner h3 {\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.main-container {\n  display: flex;\n  justify-content: space-around;\n  color: white;\n  margin-top: 15px;\n}\n\n.left-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.left-container .logo img {\n  margin: 0;\n}\n\n.right-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.hours,\n.location {\n  display: flex;\n  flex-direction: column;\n  font-size: 30px;\n  font-family: Helvetica;\n  gap: 15px;\n  font-weight: bold;\n}\n\n.location {\n  margin-top: 20px;\n}\n\n.time {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.address {\n  font-size: 20px;\n  font-weight: 500;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.footer {\n  padding-top: 30px;\n  height: 100px;\n}\n\n.media-apps {\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n}\n\n.media-apps img {\n  height: 50px;\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),t=g(795),o=g.n(t),r=g(569),i=g.n(r),a=g(565),c=g.n(a),s=g(216),l=g.n(s),p=g(589),d=g.n(p),u=g(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,console.log("hello world"),console.log("see")})();