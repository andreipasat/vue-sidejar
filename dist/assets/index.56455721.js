import{c as d,a as f,r as g,o as c,d as h,b as v,e as i,F as _,f as b,t as m,g as y,h as k,i as x,j as w,k as S}from"./vendor.ecc5a6d8.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}};j();var p=(o,n)=>{const r=o.__vccOpts||o;for(const[a,e]of n)r[a]=e;return r};const L={},N={class:"container mx-auto mt-1"};function $(o,n,r,a,e,s){const t=g("RouterView");return c(),d("div",N,[f(t)])}var J=p(L,[["render",$]]);const I=h({id:"recommendedJobs",state:()=>({jobs:[{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"AMS Performance Marketing gfhvgjdhf vfdhjvgdjfhgh",companyName:"The linkedIdn Inc."},{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Frontend developer",companyName:"The facebook Inc."},{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Backend developer",companyName:"The apple Inc."},{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Backend developer",companyName:"The apple Inc."}]}),getters:{recommendedJobs(o){return o.jobs}},actions:{addJob(){this.recommendedJobs.push({imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Devops",companyName:"The google Inc."})}}});var V="/vue-sidejar/svg/add.svg",A="/vue-sidejar/svg/fit.svg";const B=v({setup(){return{jobsStore:I()}},methods:{addJob(){this.jobsStore.addJob()}}}),O={class:"container bg-gray-2 py-2 px-2"},T={role:"list",class:"grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},F={class:"grid h-full"},P={class:"space-y-5"},R={class:"w-full flex justify-between space-x-6"},C=["src"],D=i("a",{href:"#"},[i("img",{src:V})],-1),M={class:"space-y-1"},E={class:"text-neutral font-sans text-lg"},H={class:"text-gray-3 font-sans text-sm"},q=y('<div class="self-end space-y-5"><div class="flex space-x-1"><div class="flex justify-center basis-1/7"><img src="'+A+'" class="" alt=""></div><div class="basis-10/12"><span class="text-green font-sans text-xs">Great fit</span></div></div><div class="w-full flex space-x-6"><div class="flex"><a href="#"><span class="font-semibold font-sans text-gray-0 text-sm">Dismiss</span></a></div><div class="basis-1/2 flex justify-end"><a href="#"><span class="text-sm font-semibold font-sans text-indigo">Learn more</span></a></div></div></div>',1);function G(o,n,r,a,e,s){return c(),d("div",O,[i("button",{type:"button",class:"border border-indigo rounded p-1 mb-2 bg-white text-indigo text-sm",onClick:n[0]||(n[0]=(...t)=>o.addJob&&o.addJob(...t))},"Add job"),i("ul",T,[(c(!0),d(_,null,b(o.jobsStore.recommendedJobs,(t,u)=>(c(),d("li",{key:t.title+u,class:"col-span-1 bg-white border border-gray-1 rounded-md p-6 max-w-246 max-h-264 min-h-264"},[i("div",F,[i("div",P,[i("div",R,[i("img",{class:"w-10 h-10 bg-gray-300 rounded flex-shrink-0",src:t.imgSrc,alt:""},null,8,C),D]),i("div",M,[i("h1",E,m(t.title),1),i("h2",H,m(t.companyName),1)])]),q])]))),128))])])}var K=p(B,[["render",G]]);const W=k({history:x("/vue-sidejar/"),routes:[{path:"/",name:"home",component:K}]}),l=w(J);l.use(S());l.use(W);l.mount("#app");
