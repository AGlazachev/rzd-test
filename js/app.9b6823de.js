(function(){"use strict";var t={8229:function(t,e,n){var r=n(5130),o=n(3367),a=n(1387);const i=[{path:"/",component:()=>n.e(598).then(n.bind(n,7598))},{path:"/cart",component:()=>n.e(557).then(n.bind(n,6865))},{path:"/auth",component:()=>n.e(324).then(n.bind(n,6324))}],u=(0,a.aE)({history:(0,a.LA)(),routes:i});u.beforeEach(((t,e,n)=>{const r=localStorage.getItem("auth");"/auth"===t.path||r?"/auth"===t.path&&r?n("/"):n():n("/auth")}));var c=u,s=n(6768),f=n(144),d=n(4232),l=n.p+"img/logo.ec7a1fe5.svg",h=n.p+"img/cart.27ba7b41.svg",p=n(5934);const m=t=>((0,s.Qi)("data-v-4fa24cd0"),t=t(),(0,s.jt)(),t),v={class:"header"},g={class:"header__container container"},y=m((()=>(0,s.Lk)("img",{class:"header__logo-img",src:l,alt:"Логотип РЖД"},null,-1))),b=m((()=>(0,s.Lk)("img",{class:"header__cart-icon",src:h},null,-1))),_={class:"header__cart-count"};var k={__name:"AppHeader",setup(t){const e=(0,p.x)(),n=(0,a.lq)(),r=(0,s.EW)((()=>e.totalItems));return(t,e)=>{const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",v,[(0,s.Lk)("div",g,[(0,s.bF)(o,{to:"/",class:"header__logo"},{default:(0,s.k6)((()=>[y])),_:1}),"/cart"!==(0,f.R1)(n).path?((0,s.uX)(),(0,s.Wv)(o,{key:0,to:"/cart",class:"header__cart"},{default:(0,s.k6)((()=>[b,(0,s.Lk)("span",_,(0,d.v_)(r.value),1)])),_:1})):(0,s.Q3)("",!0)])])}}},C=n(1241);const S=(0,C.A)(k,[["__scopeId","data-v-4fa24cd0"]]);var E=S;const L={class:"main"};var O={__name:"App",setup(t){return(t,e)=>{const n=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(E),(0,s.Lk)("div",L,[(0,s.bF)(n)])],64)}}};const w=(0,C.A)(O,[["__scopeId","data-v-4ef39228"]]);var A=w;const j=(0,r.Ef)(A);j.use((0,o.Ey)()),j.use(c),j.mount("#app")},5934:function(t,e,n){n.d(e,{x:function(){return o}});n(4114);var r=n(3367);const o=(0,r.nY)("cart",{state:()=>({items:JSON.parse(localStorage.getItem("cart"))||[]}),getters:{totalItems:t=>t.items.reduce(((t,e)=>t+e.quantity),0),totalSum:function(t){return t.items.reduce(((t,e)=>t+e.quantity*e.price),0).toFixed(2)}},actions:{addProduct(t){const e=this.items.find((e=>e.id===t.id));e?e.quantity++:this.items.push({...t,quantity:1}),this.updateCartLocalStorage()},increaseQuantity(t){const e=this.items.find((e=>e.id===t));e&&e.quantity++,this.updateCartLocalStorage()},decreaseQuantity(t){const e=this.items.find((e=>e.id===t));e&&e.quantity>1?e.quantity--:this.items=this.items.filter((e=>e.id!==t)),this.updateCartLocalStorage()},clearCart(){this.items=[],this.updateCartLocalStorage()},updateCartLocalStorage(){localStorage.setItem("cart",JSON.stringify(this.items))}}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],a=t[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{324:"cf620a75",557:"853d22a9",598:"dc12ff2d"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{557:"8f24e000",598:"cdf95eae"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="rzd-test:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var l=function(e,n){u.onerror=u.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/rzd-test/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=u,i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,null,o,a)}))},o={524:0};n.f.miniCss=function(t,e){var n={557:1,598:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},r=self["webpackChunkrzd_test"]=self["webpackChunkrzd_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8229)}));r=n.O(r)})();
//# sourceMappingURL=app.9b6823de.js.map