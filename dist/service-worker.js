if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>t(e,r),c={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"c3dc5dd894d33ba6028d6fda8a374795"},{url:"main.js",revision:"e95fd82e6212f6a785df5f91dddfbba6"},{url:"main.js.LICENSE.txt",revision:"9b7bbb13bf2591ada81c89a0c23360cd"}],{})}));