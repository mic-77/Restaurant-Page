(()=>{"use strict";var e={180:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"#backgroundBox{position:relative;background-size:cover;background-position:center;background-color:#000}h1{font-size:2.5rem;text-align:center;color:#fff;margin-top:30px}#addressDiv{background-color:rgba(255,255,255,.8);padding:20px;border-radius:10px;margin:20px auto;width:60%}#addressHeading{font-size:1.5rem;color:#333;margin-bottom:10px}#address{font-size:1rem;color:#555}#phoneDiv{background-color:rgba(255,255,255,.8);padding:20px;border-radius:10px;margin:20px auto;width:60%}#phoneHeading{font-size:1.5rem;color:#333;margin-bottom:10px}#phone{font-size:1rem;color:#555}","",{version:3,sources:["webpack://./src/styles/contact.css"],names:[],mappings:"AAAA,eACE,iBAAA,CAEA,qBAAA,CACA,0BAAA,CACA,qBAAA,CAGF,GACE,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,eAAA,CAGF,YACE,qCAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,SAAA,CAGF,gBACE,gBAAA,CACA,UAAA,CACA,kBAAA,CAGF,SACE,cAAA,CACA,UAAA,CAGF,UACE,qCAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,SAAA,CAGF,cACE,gBAAA,CACA,UAAA,CACA,kBAAA,CAGF,OACE,cAAA,CACA,UAAA",sourcesContent:["#backgroundBox {\n  position: relative;\n  /* height: 100vh; */\n  background-size: cover;\n  background-position: center;\n  background-color: black;\n}\n\nh1 {\n  font-size: 2.5rem;\n  text-align: center;\n  color: white;\n  margin-top: 30px;\n}\n\n#addressDiv {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 20px;\n  border-radius: 10px;\n  margin: 20px auto;\n  width: 60%;\n}\n\n#addressHeading {\n  font-size: 1.5rem;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n#address {\n  font-size: 1rem;\n  color: #555;\n}\n\n#phoneDiv {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 20px;\n  border-radius: 10px;\n  margin: 20px auto;\n  width: 60%;\n}\n\n#phoneHeading {\n  font-size: 1.5rem;\n  color: #333;\n  margin-bottom: 10px;\n}\n\n#phone {\n  font-size: 1rem;\n  color: #555;\n}\n"],sourceRoot:""}]);const c=a},9:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"#header{display:flex;justify-content:space-between;align-items:center;background-color:#333;padding:20px;color:#fff}#header button{background-color:rgba(0,0,0,0);border:none;color:#fff;font-size:18px;cursor:pointer;margin-right:20px}#header button:hover{text-decoration:underline}","",{version:3,sources:["webpack://./src/styles/header.css"],names:[],mappings:"AAEA,QACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,qBAAA,CACA,YAAA,CACA,UAAA,CAGF,eACE,8BAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,iBAAA,CAGF,qBACE,yBAAA",sourcesContent:["/* header.css */\n\n#header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #333;\n  padding: 20px;\n  color: #fff;\n}\n\n#header button {\n  background-color: transparent;\n  border: none;\n  color: #fff;\n  font-size: 18px;\n  cursor: pointer;\n  margin-right: 20px;\n}\n\n#header button:hover {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]);const c=a},675:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(354),o=t.n(r),i=t(314),a=t.n(i),c=t(417),d=t.n(c),A=new URL(t(104),t.b),s=a()(o()),l=d()(A);s.push([e.id,`body,html{height:100%;margin:0;padding:0}#content{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background-color:rgba(0,0,0,.5);background-image:url(${l});background-repeat:no-repeat;background-size:cover;background-position:center}#background{text-align:center;padding:20px;color:#fff}#background h1{font-size:36px;margin-bottom:10px}#description{font-size:18px;margin-bottom:20px}`,"",{version:3,sources:["webpack://./src/styles/home.css"],names:[],mappings:"AAEA,UAEE,WAAA,CACA,QAAA,CACA,SAAA,CAGF,SACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,WAAA,CACA,+BAAA,CACA,wDAAA,CACA,2BAAA,CACA,qBAAA,CACA,0BAAA,CAGF,YACE,iBAAA,CACA,YAAA,CACA,UAAA,CAGF,eACE,cAAA,CACA,kBAAA,CAGF,aACE,cAAA,CACA,kBAAA",sourcesContent:['/* home.css */\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  background-image: url("../assets/restaurant.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n#background {\n  text-align: center;\n  padding: 20px;\n  color: #fff;\n}\n\n#background h1 {\n  font-size: 36px;\n  margin-bottom: 10px;\n}\n\n#description {\n  font-size: 18px;\n  margin-bottom: 20px;\n}\n'],sourceRoot:""}]);const u=s},407:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,'#menu-tab{background-color:#f2f2f2;padding:20px;text-align:center}#menu-tab h1{font-size:24px;margin-bottom:10px}#menu-container{width:60vw}#menu-container{display:flex;justify-content:space-between}.div-child{flex-basis:45%;padding:10px;background-color:#fff;border:1px solid #ccc}.menu-list{list-style-type:none;padding:0;margin:0}.menu-list li{margin-bottom:5px}.menu-list li:before{content:"•";margin-right:5px}',"",{version:3,sources:["webpack://./src/styles/menu.css"],names:[],mappings:"AAAA,UAAA,wBACE,CAAA,YACA,CAAA,iBACA,CAAA,aAGF,cACE,CAAA,kBACA,CAAA,gBAGF,UACE,CAAA,gBAGF,YACE,CAAA,6BACA,CAAA,WAGF,cACE,CAAA,YACA,CAAA,qBACA,CAAA,qBACA,CAAA,WAGF,oBACE,CAAA,SACA,CAAA,QACA,CAAA,cAGF,iBACE,CAAA,qBAGF,WACE,CAAA,gBACA",sourcesContent:['#menu-tab {\n  background-color: #f2f2f2;\n  padding: 20px;\n  text-align: center;\n}\n\n#menu-tab h1 {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n#menu-container {\n  width: 60vw;\n}\n\n#menu-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.div-child {\n  flex-basis: 45%;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n}\n\n.menu-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.menu-list li {\n  margin-bottom: 5px;\n}\n\n.menu-list li:before {\n  content: "•";\n  margin-right: 5px;\n}\n'],sourceRoot:""}]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var A=0;A<e.length;A++){var s=[].concat(e[A]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],A=r.base?d[0]+r.base:d[0],s=i[A]||0,l="".concat(A," ").concat(s);i[A]=s+1;var u=t(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var C=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:C,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),A=0;A<i.length;A++){var s=t(i[A]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},104:(e,n,t)=>{e.exports=t.p+"restaurant.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),d=t.n(c),A=t(540),s=t.n(A),l=t(113),u=t.n(l),p=t(675),C={};C.styleTagTransform=u(),C.setAttributes=d(),C.insert=a().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=s(),n()(p.A,C),p.A&&p.A.locals&&p.A.locals;var m=t(9),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;var f=t(180),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),n()(f.A,g),f.A&&f.A.locals&&f.A.locals;var b=t(407),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=s(),n()(b.A,x),b.A&&b.A.locals&&b.A.locals;var v=t(104);const y=()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="background",e.appendChild(n);const t=document.createElement("h1");t.textContent="Welcome to Our Restaurant",n.appendChild(t);const r=document.createElement("p");r.id="description",r.textContent="Experience the finest flavors with our exquisite menu.",n.appendChild(r);const o=document.createElement("img");o.src=v,o.alt="Restaurant Image",o.id="bgImg",n.style.backgroundImage=`url(${v})`},w=function(){const e=document.querySelector("#content");for(e.style="";e.children.length>1;)e.children[1].remove()};class E{constructor(e){this.elementType=e,this.attributes={},this.children=[]}addAttributes(e){for(const n of Object.keys(e))this.attributes[n]=e[n];return this}addChild(e){return this.innerText=void 0,this.children.push(e),this}setInnerText(e){return this.childen=[],this.innerText=e,this}build(){let e=document.createElement(this.elementType);for(const n of Object.keys(this.attributes))e.setAttribute(n,this.attributes[n]);if(void 0===this.innerText)for(const n of this.children)e.appendChild(n.build());else{let n=document.createTextNode(this.innerText);e.appendChild(n)}return e}}const k=document.querySelector("#content");!function(){const e=document.querySelector("#content"),n=function(){const e=document.createElement("div");e.id="header";const n=document.createElement("button");n.id="home-tab",n.textContent="Home",e.appendChild(n);const t=document.createElement("button");t.textContent="Menu",t.id="menu-tab",e.appendChild(t);const r=document.createElement("button");return r.textContent="Contact",r.id="contact-tab",e.appendChild(r),e}();e.appendChild(n),y()}();const B=document.querySelector("#home-tab"),T=document.querySelector("#menu-tab"),I=document.querySelector("#contact-tab");B.addEventListener("click",(function(){w(),y()})),T.addEventListener("click",(function(){w(),function(){const e=new E("div").addAttributes({id:"menu-tab",class:"tab"}).addChild(new E("h1").setInnerText("Our Daily Menu")).addChild(new E("div").addAttributes({class:"container-div",id:"menu-container"}).addChild(new E("img").addAttributes({class:"div-child",id:"menu-img"})).addChild(new E("div").addAttributes({class:"div-child",id:"menu-child"}).addChild(new E("h2").setInnerText("Coffees")).addChild(new E("ul").addAttributes({class:"menu-list",id:"coffee-list"}).addChild(new E("li").setInnerText("Espresso")).addChild(new E("li").setInnerText("Americano")).addChild(new E("li").setInnerText("Cold Brew")).addChild(new E("li").setInnerText("Cappuccino")).addChild(new E("li").setInnerText("Macchiato")).addChild(new E("li").setInnerText("Latte"))).addChild(new E("h2").setInnerText("Teas")).addChild(new E("ul").addAttributes({class:"menu-list",id:"tea-list"}).addChild(new E("li").setInnerText("Chai")).addChild(new E("li").setInnerText("London Fog")).addChild(new E("li").setInnerText("Black Tea")).addChild(new E("li").setInnerText("Green Tea")).addChild(new E("li").setInnerText("Oolong")).addChild(new E("li").setInnerText("Chamomile with cat hair"))).addChild(new E("h2").setInnerText("Treats")).addChild(new E("ul").addAttributes({class:"menu-list",id:"treats-list"}).addChild(new E("li").setInnerText("Pumpkin Bread")).addChild(new E("li").setInnerText("Banana Bread")).addChild(new E("li").setInnerText("Cake Pop")).addChild(new E("li").setInnerText("Bagle w/ cream cheese")))));k.appendChild(e.build())}()})),I.addEventListener("click",(function(){w(),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="backgroundBox",e.appendChild(n);const t=document.createElement("h1");t.textContent="Contact",n.appendChild(t);const r=document.createElement("div");r.id="addressDiv",n.appendChild(r);const o=document.createElement("h3");o.id="addressHeading",o.textContent="Address",r.appendChild(o);const i=document.createElement("p");i.id="address",i.textContent="123 Main Street, Anytown, Anystate, 12345, United States",r.appendChild(i);const a=document.createElement("div");a.id="phoneDiv",n.appendChild(a);const c=document.createElement("h3");c.id="phoneHeading",c.textContent="Call us for Reservation",a.appendChild(c);const d=document.createElement("p");d.id="phone",d.textContent="+1 (555) 123-4567",a.appendChild(d)})()}))})()})();
//# sourceMappingURL=bundle.js.map