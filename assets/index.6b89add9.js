import{R as y,r as _,o as c,c as x,w as l,a as e,b as V,d as u,t as g,e as v,f as o,g as a,h as L,i as M,F as w,j as H,k as Z,l as k,m as S,n as B,p as N,q as j}from"./vendor.c2bc95fd.js";const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};T();var h=(C,n)=>{const r=C.__vccOpts||C;for(const[d,s]of n)r[d]=s;return r};const A={components:{RouterLink:y},props:{to:{type:String,required:!0},count:Number}},I={class:"grow"},J={key:0,class:"text-xs-no-line-height text-indigo-2 font-semibold text-center bg-gray-4 w-6 h-6 rounded-full"};function D(C,n,r,d,s,i){const t=_("router-link");return c(),x(t,{to:r.to,class:"flex flex-nowrap px-3 py-6px hover:text-neutral-2 hover:bg-gray-4 hover:rounded"},{default:l(()=>[e("span",I,[V(C.$slots,"default")]),r.count?(c(),u("span",J,g(r.count),1)):v("",!0)]),_:3},8,["to"])}var b=h(A,[["render",D]]);const F={emits:["toggleSidebar"],inject:["sidebarToggle"],components:{AppSidebarLinkVue:b}},P={class:"p-4 text-gray-3 text-lg-1"},R={class:"px-3"},E=e("svg",{width:"114",height:"22",viewBox:"0 0 114 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M49.455 10.535C49.14 11.606 48.426 12.32 47.25 12.32C45.885 12.32 44.625 11.06 44.625 9.275C44.625 7.49 45.885 6.23 47.25 6.23C48.426 6.23 49.14 6.944 49.455 8.015H51.45C51.009 5.999 49.476 4.445 47.25 4.445C44.73 4.445 42.735 6.44 42.735 9.275C42.735 12.11 44.73 14.105 47.25 14.105C49.476 14.105 51.009 12.551 51.45 10.535H49.455ZM59.3348 14H60.6998V7.805C60.6998 5.915 59.2298 4.445 57.0248 4.445C54.6938 4.445 53.3498 5.705 53.2448 7.385H55.1348C55.2398 6.734 55.7648 6.23 57.0248 6.23C58.2008 6.23 58.8098 6.86 58.8098 7.805V8.12C54.1898 8.12 52.9298 9.38 52.9298 11.27C52.9298 12.95 54.0848 14.105 56.1848 14.105C57.1298 14.105 57.8228 13.853 58.2638 13.58C58.5158 13.433 58.7258 13.244 58.9148 13.055L59.3348 14ZM58.8098 10.304C58.8098 11.48 57.8858 12.425 56.2898 12.425C55.3448 12.425 54.8198 11.9 54.8198 11.375C54.8198 10.43 55.4498 9.8 58.8098 9.8V10.304ZM63.1116 14H65.0016V8.645C65.0016 7.406 66.0306 6.335 67.3116 6.335C67.4586 6.335 67.6056 6.377 67.7526 6.398L67.9416 6.44V4.55L67.7736 4.508C67.6686 4.487 67.5426 4.445 67.3116 4.445C66.4926 4.445 65.9046 4.718 65.5056 4.97C65.2746 5.117 65.0646 5.306 64.8966 5.495L64.4766 4.55H63.1116V14ZM75.7025 11.27C75.3875 11.69 74.7575 12.32 73.6025 12.32C72.2375 12.32 71.1875 11.291 71.0825 10.115H77.8025L77.8445 9.863C77.8655 9.716 77.9075 9.506 77.9075 9.275C77.9075 6.44 75.9335 4.445 73.4975 4.445C71.0615 4.445 69.0875 6.44 69.0875 9.275C69.0875 12.11 71.0825 14.105 73.6025 14.105C75.8075 14.105 77.0885 12.845 77.6975 11.27H75.7025ZM71.0825 8.54C71.3135 7.175 72.2375 6.23 73.4975 6.23C74.9885 6.23 75.8915 7.175 76.1225 8.54H71.0825ZM85.9975 11.27C85.6825 11.69 85.0525 12.32 83.8975 12.32C82.5325 12.32 81.4825 11.291 81.3775 10.115H88.0975L88.1395 9.863C88.1605 9.716 88.2025 9.506 88.2025 9.275C88.2025 6.44 86.2285 4.445 83.7925 4.445C81.3565 4.445 79.3825 6.44 79.3825 9.275C79.3825 12.11 81.3775 14.105 83.8975 14.105C86.1025 14.105 87.3835 12.845 87.9925 11.27H85.9975ZM81.3775 8.54C81.6085 7.175 82.5325 6.23 83.7925 6.23C85.2835 6.23 86.1865 7.175 86.4175 8.54H81.3775ZM90.2024 14H92.0924V8.645C92.0924 7.406 93.1214 6.335 94.4024 6.335C94.5494 6.335 94.6964 6.377 94.8434 6.398L95.0324 6.44V4.55L94.8644 4.508C94.7594 4.487 94.6334 4.445 94.4024 4.445C93.5834 4.445 92.9954 4.718 92.5964 4.97C92.3654 5.117 92.1554 5.306 91.9874 5.495L91.5674 4.55H90.2024V14ZM95.2325 12.95C95.2325 13.601 95.7365 14.105 96.3875 14.105C97.0385 14.105 97.5425 13.601 97.5425 12.95C97.5425 12.299 97.0385 11.795 96.3875 11.795C95.7365 11.795 95.2325 12.299 95.2325 12.95ZM99.4309 14H101.321V4.55H99.4309V14ZM100.376 0.769999C99.7249 0.769999 99.2209 1.274 99.2209 1.925C99.2209 2.576 99.7249 3.08 100.376 3.08C101.027 3.08 101.531 2.576 101.531 1.925C101.531 1.274 101.027 0.769999 100.376 0.769999ZM107.83 12.32C106.465 12.32 105.205 11.06 105.205 9.275C105.205 7.49 106.465 6.23 107.83 6.23C109.195 6.23 110.455 7.49 110.455 9.275C110.455 11.06 109.195 12.32 107.83 12.32ZM107.83 14.105C110.35 14.105 112.345 12.11 112.345 9.275C112.345 6.44 110.35 4.445 107.83 4.445C105.31 4.445 103.315 6.44 103.315 9.275C103.315 12.11 105.31 14.105 107.83 14.105Z",fill:"#0F141E"}),e("circle",{cx:"23",cy:"11",r:"11",fill:"#A0D6FA"}),e("path",{d:"M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22V0Z",fill:"#2F8DEB"})],-1),O=[E],q={class:"mt-10"},G=a("Dashboard"),K=a("Messages"),W=e("h3",{class:"mt-10 mx-3 text-neutral-2 uppercase text-sm font-semibold"},"Land the job",-1),z=a("Career Pathway"),Q=a("Training"),U=a("Job Targeting"),X=a("Interview Prep"),Y=a("Salary Negotiation"),e1={class:"mt-16"},t1=a("Assessment"),s1=a("Document Prep"),o1=a("Job Targeting"),l1=a("Interview Prep"),n1=a("Salary Negotiation");function C1(C,n,r,d,s,i){const t=_("app-sidebar-link-vue");return c(),u("div",P,[e("div",R,[e("a",{href:"#",onClick:n[0]||(n[0]=p=>C.$emit("toggleSidebar"))},O)]),e("nav",q,[e("ul",null,[e("li",null,[o(t,{to:"/"},{default:l(()=>[G]),_:1})]),e("li",null,[o(t,{to:"/",count:5},{default:l(()=>[K]),_:1})])])]),W,e("nav",null,[e("ul",null,[e("li",null,[o(t,{to:"/"},{default:l(()=>[z]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[Q]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[U]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[X]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[Y]),_:1})])])]),e("nav",e1,[e("ul",null,[e("li",null,[o(t,{to:"/"},{default:l(()=>[t1]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[s1]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[o1]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[l1]),_:1})]),e("li",null,[o(t,{to:"/"},{default:l(()=>[n1]),_:1})])])])])}var i1=h(F,[["render",C1]]);const r1={emits:["toggleSidebar"],inject:["sidebarToggle"],components:{AppSidebarLinkVue:b}},a1={class:"p-4 text-gray-3 text-lg-1"},d1={class:"px-1"},c1=e("svg",{width:"34",height:"22",viewBox:"0 0 34 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"23",cy:"11",r:"11",fill:"#A0D6FA"}),e("path",{d:"M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22V0Z",fill:"#2F8DEB"})],-1),u1=[c1],p1={class:"mt-10"},_1=e("svg",{class:"hover:fill-neutral-2 h-5 w-5 fill-gray-3",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7C3 7.53043 3.21071 8.03914 3.58579 8.41421C3.96086 8.78929 4.46957 9 5 9H7C7.53043 9 8.03914 8.78929 8.41421 8.41421C8.78929 8.03914 9 7.53043 9 7V5C9 4.46957 8.78929 3.96086 8.41421 3.58579C8.03914 3.21071 7.53043 3 7 3H5ZM5 11C4.46957 11 3.96086 11.2107 3.58579 11.5858C3.21071 11.9609 3 12.4696 3 13V15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H7C7.53043 17 8.03914 16.7893 8.41421 16.4142C8.78929 16.0391 9 15.5304 9 15V13C9 12.4696 8.78929 11.9609 8.41421 11.5858C8.03914 11.2107 7.53043 11 7 11H5ZM11 5C11 4.46957 11.2107 3.96086 11.5858 3.58579C11.9609 3.21071 12.4696 3 13 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7C17 7.53043 16.7893 8.03914 16.4142 8.41421C16.0391 8.78929 15.5304 9 15 9H13C12.4696 9 11.9609 8.78929 11.5858 8.41421C11.2107 8.03914 11 7.53043 11 7V5ZM11 13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H15C15.5304 11 16.0391 11.2107 16.4142 11.5858C16.7893 11.9609 17 12.4696 17 13V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H13C12.4696 17 11.9609 16.7893 11.5858 16.4142C11.2107 16.0391 11 15.5304 11 15V13Z"})],-1),h1=e("svg",{class:"hover:fill-neutral-2 h-5 w-5 fill-gray-3",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2.00293 5.884L9.99993 9.882L17.9969 5.884C17.9673 5.37444 17.744 4.89549 17.3728 4.54523C17.0015 4.19497 16.5103 3.99991 15.9999 4H3.99993C3.48951 3.99991 2.99838 4.19497 2.62711 4.54523C2.25584 4.89549 2.03253 5.37444 2.00293 5.884Z"}),e("path",{d:"M18 8.11801L10 12.118L2 8.11801V14C2 14.5304 2.21071 15.0392 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0392 18 14.5304 18 14V8.11801Z"})],-1),f1={class:"mt-10"},g1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M9 2C8.73478 2 8.48043 2.10536 8.29289 2.29289C8.10536 2.48043 8 2.73478 8 3C8 3.26522 8.10536 3.51957 8.29289 3.70711C8.48043 3.89464 8.73478 4 9 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H9Z"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3C6 3.79565 6.31607 4.55871 6.87868 5.12132C7.44129 5.68393 8.20435 6 9 6H11C11.7956 6 12.5587 5.68393 13.1213 5.12132C13.6839 4.55871 14 3.79565 14 3C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V5ZM13.707 10.707C13.8892 10.5184 13.99 10.2658 13.9877 10.0036C13.9854 9.7414 13.8802 9.49059 13.6948 9.30518C13.5094 9.11977 13.2586 9.0146 12.9964 9.01233C12.7342 9.01005 12.4816 9.11084 12.293 9.293L9 12.586L7.707 11.293C7.5184 11.1108 7.2658 11.01 7.0036 11.0123C6.7414 11.0146 6.49059 11.1198 6.30518 11.3052C6.11977 11.4906 6.0146 11.7414 6.01233 12.0036C6.01005 12.2658 6.11084 12.5184 6.293 12.707L8.293 14.707C8.48053 14.8945 8.73484 14.9998 9 14.9998C9.26516 14.9998 9.51947 14.8945 9.707 14.707L13.707 10.707Z"})],-1),v1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H10.586C11.1164 2.00011 11.625 2.2109 12 2.586L15.414 6C15.7891 6.37499 15.9999 6.88361 16 7.414V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V4ZM6 10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10C14 10.2652 13.8946 10.5196 13.7071 10.7071C13.5196 10.8946 13.2652 11 13 11H7C6.73478 11 6.48043 10.8946 6.29289 10.7071C6.10536 10.5196 6 10.2652 6 10ZM7 13C6.73478 13 6.48043 13.1054 6.29289 13.2929C6.10536 13.4804 6 13.7348 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15H13C13.2652 15 13.5196 14.8946 13.7071 14.7071C13.8946 14.5196 14 14.2652 14 14C14 13.7348 13.8946 13.4804 13.7071 13.2929C13.5196 13.1054 13.2652 13 13 13H7Z"})],-1),m1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 6V5C6 4.20435 6.31607 3.44129 6.87868 2.87868C7.44129 2.31607 8.20435 2 9 2H11C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V11.57C15.4396 12.5187 12.7305 13.003 10 13C7.2695 13.003 4.56037 12.5188 2 11.57V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H6ZM8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H11C11.2652 4 11.5196 4.10536 11.7071 4.29289C11.8946 4.48043 12 4.73478 12 5V6H8V5ZM9 10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H10.01C10.2752 9 10.5296 9.10536 10.7171 9.29289C10.9046 9.48043 11.01 9.73478 11.01 10C11.01 10.2652 10.9046 10.5196 10.7171 10.7071C10.5296 10.8946 10.2752 11 10.01 11H10C9.73478 11 9.48043 10.8946 9.29289 10.7071C9.10536 10.5196 9 10.2652 9 10Z"}),e("path",{d:"M2 13.692V16C2 16.5304 2.21071 17.0392 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0392 18 16.5304 18 16V13.692C15.4224 14.5608 12.7201 15.0026 10 15C7.204 15 4.513 14.54 2 13.692Z"})],-1),w1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H10C10.5304 4 11.0391 4.21071 11.4142 4.58579C11.7893 4.96086 12 5.46957 12 6V14C12 14.5304 11.7893 15.0391 11.4142 15.4142C11.0391 15.7893 10.5304 16 10 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V6ZM14.553 7.106C14.3869 7.18899 14.2472 7.31658 14.1496 7.47447C14.0519 7.63237 14.0001 7.81434 14 8V12C14.0001 12.1857 14.0519 12.3676 14.1496 12.5255C14.2472 12.6834 14.3869 12.811 14.553 12.894L16.553 13.894C16.7054 13.9702 16.8748 14.0061 17.045 13.9985C17.2152 13.9908 17.3806 13.9398 17.5256 13.8502C17.6706 13.7606 17.7902 13.6355 17.8733 13.4867C17.9563 13.3379 17.9999 13.1704 18 13V7C17.9999 6.82961 17.9563 6.66207 17.8733 6.51327C17.7902 6.36448 17.6706 6.23936 17.5256 6.14981C17.3806 6.06025 17.2152 6.00921 17.045 6.00155C16.8748 5.99388 16.7054 6.02984 16.553 6.106L14.553 7.106Z"})],-1),x1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C2 10.5304 2.21071 11.0391 2.58579 11.4142C2.96086 11.7893 3.46957 12 4 12V6H14C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4ZM6 10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8H16C16.5304 8 17.0391 8.21071 17.4142 8.58579C17.7893 8.96086 18 9.46957 18 10V14C18 14.5304 17.7893 15.0391 17.4142 15.4142C17.0391 15.7893 16.5304 16 16 16H8C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14V10ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z"})],-1),V1={class:"mt-16"},b1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4C2 4.26522 2.10536 4.51957 2.29289 4.70711C2.48043 4.89464 2.73478 5 3 5V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7.586L6.293 16.293C6.19749 16.3852 6.12131 16.4956 6.0689 16.6176C6.01649 16.7396 5.9889 16.8708 5.98775 17.0036C5.9866 17.1364 6.0119 17.2681 6.06218 17.391C6.11246 17.5138 6.18671 17.6255 6.2806 17.7194C6.3745 17.8133 6.48615 17.8875 6.60905 17.9378C6.73194 17.9881 6.86362 18.0134 6.9964 18.0123C7.12918 18.0111 7.2604 17.9835 7.3824 17.9311C7.50441 17.8787 7.61475 17.8025 7.707 17.707L10 15.414L12.293 17.707C12.4816 17.8892 12.7342 17.99 12.9964 17.9877C13.2586 17.9854 13.5094 17.8802 13.6948 17.6948C13.8802 17.5094 13.9854 17.2586 13.9877 16.9964C13.99 16.7342 13.8892 16.4816 13.707 16.293L12.414 15H15C15.5304 15 16.0391 14.7893 16.4142 14.4142C16.7893 14.0391 17 13.5304 17 13V5C17.2652 5 17.5196 4.89464 17.7071 4.70711C17.8946 4.51957 18 4.26522 18 4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H3ZM14.707 7.707C14.8892 7.5184 14.99 7.2658 14.9877 7.0036C14.9854 6.7414 14.8802 6.49059 14.6948 6.30518C14.5094 6.11977 14.2586 6.0146 13.9964 6.01233C13.7342 6.01005 13.4816 6.11084 13.293 6.293L10 9.586L8.707 8.293C8.51947 8.10553 8.26516 8.00021 8 8.00021C7.73484 8.00021 7.48053 8.10553 7.293 8.293L5.293 10.293C5.19749 10.3852 5.12131 10.4956 5.0689 10.6176C5.01649 10.7396 4.9889 10.8708 4.98775 11.0036C4.9866 11.1364 5.0119 11.2681 5.06218 11.391C5.11246 11.5139 5.18671 11.6255 5.2806 11.7194C5.3745 11.8133 5.48615 11.8875 5.60905 11.9378C5.73194 11.9881 5.86362 12.0134 5.9964 12.0123C6.12918 12.0111 6.2604 11.9835 6.3824 11.9311C6.50441 11.8787 6.61475 11.8025 6.707 11.707L8 10.414L9.293 11.707C9.48053 11.8945 9.73484 11.9998 10 11.9998C10.2652 11.9998 10.5195 11.8945 10.707 11.707L14.707 7.707Z"})],-1),$1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M9 4.80401C7.90971 4.27317 6.71265 3.99819 5.5 4.00001C4.245 4.00001 3.057 4.29001 2 4.80401V14.804C3.0903 14.2732 4.28736 13.9982 5.5 14C7.169 14 8.718 14.51 10 15.385C11.3261 14.4802 12.8947 13.9975 14.5 14C15.755 14 16.943 14.29 18 14.804V4.80401C16.9097 4.27317 15.7126 3.99819 14.5 4.00001C13.245 4.00001 12.057 4.29001 11 4.80401V12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8947 10.2652 13 10 13C9.73478 13 9.48043 12.8947 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12V4.80401Z"})],-1),y1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.496 2.13198C10.3449 2.04569 10.174 2.00031 10 2.00031C9.82603 2.00031 9.65506 2.04569 9.504 2.13198L2.504 6.13198C2.31267 6.24144 2.16287 6.41104 2.07788 6.61442C1.99289 6.81781 1.97749 7.04357 2.03405 7.25661C2.09062 7.46966 2.216 7.65804 2.39068 7.79247C2.56537 7.92691 2.77957 7.99986 3 7.99998V15C2.73478 15 2.48043 15.1053 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16C18 15.7348 17.8946 15.4804 17.7071 15.2929C17.5196 15.1053 17.2652 15 17 15V7.99998C17.2204 7.99986 17.4346 7.92691 17.6093 7.79247C17.784 7.65804 17.9094 7.46966 17.9659 7.25661C18.0225 7.04357 18.0071 6.81781 17.9221 6.61442C17.8371 6.41104 17.6873 6.24144 17.496 6.13198L10.496 2.13198ZM6 8.99998C5.73478 8.99998 5.48043 9.10534 5.29289 9.29288C5.10536 9.48041 5 9.73477 5 9.99998V13C5 13.2652 5.10536 13.5196 5.29289 13.7071C5.48043 13.8946 5.73478 14 6 14C6.26522 14 6.51957 13.8946 6.70711 13.7071C6.89464 13.5196 7 13.2652 7 13V9.99998C7 9.73477 6.89464 9.48041 6.70711 9.29288C6.51957 9.10534 6.26522 8.99998 6 8.99998ZM9 9.99998C9 9.73477 9.10536 9.48041 9.29289 9.29288C9.48043 9.10534 9.73478 8.99998 10 8.99998C10.2652 8.99998 10.5196 9.10534 10.7071 9.29288C10.8946 9.48041 11 9.73477 11 9.99998V13C11 13.2652 10.8946 13.5196 10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13V9.99998ZM14 8.99998C13.7348 8.99998 13.4804 9.10534 13.2929 9.29288C13.1054 9.48041 13 9.73477 13 9.99998V13C13 13.2652 13.1054 13.5196 13.2929 13.7071C13.4804 13.8946 13.7348 14 14 14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13V9.99998C15 9.73477 14.8946 9.48041 14.7071 9.29288C14.5196 9.10534 14.2652 8.99998 14 8.99998Z"})],-1),L1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6ZM17 6C17 6.39397 16.9224 6.78407 16.7716 7.14805C16.6209 7.51203 16.3999 7.84274 16.1213 8.12132C15.8427 8.3999 15.512 8.62087 15.1481 8.77164C14.7841 8.9224 14.394 9 14 9C13.606 9 13.2159 8.9224 12.8519 8.77164C12.488 8.62087 12.1573 8.3999 11.8787 8.12132C11.6001 7.84274 11.3791 7.51203 11.2284 7.14805C11.0776 6.78407 11 6.39397 11 6C11 5.20435 11.3161 4.44129 11.8787 3.87868C12.4413 3.31607 13.2044 3 14 3C14.7956 3 15.5587 3.31607 16.1213 3.87868C16.6839 4.44129 17 5.20435 17 6ZM12.93 17C12.976 16.673 13 16.34 13 16C13.0023 14.4289 12.4737 12.903 11.5 11.67C12.2601 11.2312 13.1223 11.0001 14 11.0001C14.8776 11.0001 15.7399 11.2311 16.4999 11.67C17.26 12.1088 17.8912 12.74 18.3301 13.5C18.7689 14.2601 19 15.1223 19 16V17H12.93ZM6 11C7.32608 11 8.59785 11.5268 9.53553 12.4645C10.4732 13.4021 11 14.6739 11 16V17H1V16C1 14.6739 1.52678 13.4021 2.46447 12.4645C3.40215 11.5268 4.67392 11 6 11Z"})],-1),M1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM16 10C16 10.993 15.759 11.929 15.332 12.754L13.808 11.229C14.0362 10.5227 14.0632 9.76679 13.886 9.046L15.448 7.484C15.802 8.249 16 9.1 16 10ZM10.835 13.913L12.415 15.493C11.654 15.8281 10.8315 16.0007 10 16C9.13118 16.0011 8.27257 15.8127 7.484 15.448L9.046 13.886C9.63267 14.0298 10.2443 14.039 10.835 13.913ZM6.158 11.117C5.96121 10.4394 5.94707 9.72182 6.117 9.037L6.037 9.117L4.507 7.584C4.1718 8.34531 3.99913 9.16817 4 10C4 10.954 4.223 11.856 4.619 12.657L6.159 11.117H6.158ZM7.246 4.667C8.09722 4.22702 9.04179 3.99825 10 4C10.954 4 11.856 4.223 12.657 4.619L11.117 6.159C10.3493 5.93538 9.53214 5.94687 8.771 6.192L7.246 4.668V4.667ZM12 10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12C9.46957 12 8.96086 11.7893 8.58579 11.4142C8.21071 11.0391 8 10.5304 8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58579C11.7893 8.96086 12 9.46957 12 10Z"})],-1),H1=e("svg",{class:"hover:fill-neutral-2 fill-gray-3 h-5 w-5",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4902 3.17C11.1102 1.61 8.89024 1.61 8.51024 3.17C8.45351 3.40442 8.34223 3.62213 8.18546 3.80541C8.02869 3.9887 7.83087 4.13238 7.60808 4.22477C7.3853 4.31716 7.14384 4.35564 6.90338 4.33709C6.66291 4.31854 6.43022 4.24347 6.22424 4.118C4.85224 3.282 3.28224 4.852 4.11824 6.224C4.65824 7.11 4.17924 8.266 3.17124 8.511C1.61024 8.89 1.61024 11.111 3.17124 11.489C3.40572 11.5458 3.62346 11.6572 3.80675 11.8141C3.99004 11.971 4.13368 12.1689 4.22598 12.3918C4.31828 12.6147 4.35663 12.8563 4.33791 13.0968C4.31919 13.3373 4.24392 13.5701 4.11824 13.776C3.28224 15.148 4.85224 16.718 6.22424 15.882C6.43018 15.7563 6.66289 15.6811 6.90342 15.6623C7.14396 15.6436 7.38551 15.682 7.60842 15.7743C7.83132 15.8666 8.02928 16.0102 8.18617 16.1935C8.34305 16.3768 8.45443 16.5945 8.51124 16.829C8.89024 18.39 11.1112 18.39 11.4892 16.829C11.5462 16.5946 11.6577 16.377 11.8146 16.1939C11.9716 16.0107 12.1695 15.8672 12.3923 15.7749C12.6152 15.6826 12.8566 15.6442 13.0971 15.6628C13.3376 15.6815 13.5702 15.7565 13.7762 15.882C15.1482 16.718 16.7182 15.148 15.8822 13.776C15.7568 13.57 15.6817 13.3373 15.6631 13.0969C15.6445 12.8564 15.6829 12.6149 15.7751 12.3921C15.8674 12.1692 16.011 11.9713 16.1941 11.8144C16.3773 11.6575 16.5949 11.546 16.8292 11.489C18.3902 11.11 18.3902 8.889 16.8292 8.511C16.5948 8.45419 16.377 8.34281 16.1937 8.18593C16.0104 8.02904 15.8668 7.83109 15.7745 7.60818C15.6822 7.38527 15.6438 7.14372 15.6626 6.90318C15.6813 6.66265 15.7566 6.42994 15.8822 6.224C16.7182 4.852 15.1482 3.282 13.7762 4.118C13.5703 4.24368 13.3376 4.31895 13.0971 4.33767C12.8565 4.35639 12.615 4.31804 12.3921 4.22574C12.1692 4.13344 11.9712 3.9898 11.8143 3.80651C11.6574 3.62323 11.546 3.40548 11.4892 3.171L11.4902 3.17ZM10.0002 13C10.7959 13 11.559 12.6839 12.1216 12.1213C12.6842 11.5587 13.0002 10.7956 13.0002 10C13.0002 9.20435 12.6842 8.44129 12.1216 7.87868C11.559 7.31607 10.7959 7 10.0002 7C9.20459 7 8.44153 7.31607 7.87892 7.87868C7.31631 8.44129 7.00024 9.20435 7.00024 10C7.00024 10.7956 7.31631 11.5587 7.87892 12.1213C8.44153 12.6839 9.20459 13 10.0002 13Z"})],-1);function Z1(C,n,r,d,s,i){const t=_("app-sidebar-link-vue");return c(),u("div",a1,[e("div",d1,[e("a",{href:"#",onClick:n[0]||(n[0]=p=>C.$emit("toggleSidebar"))},u1)]),e("nav",p1,[e("ul",null,[e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[_1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[h1]),_:1})])])]),e("nav",f1,[e("ul",null,[e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[g1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[v1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[m1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[w1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[x1]),_:1})])])]),e("nav",V1,[e("ul",null,[e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[b1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[$1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[y1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[L1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[M1]),_:1})]),e("li",null,[o(t,{to:"/",class:"py-2"},{default:l(()=>[H1]),_:1})])])])])}var k1=h(r1,[["render",Z1]]);const S1={data(){return{toggleSidebar:!1}},provide(){return{sidebarToggle:L(()=>this.toggleSidebar)}},components:{SidebarVue:i1,SidebarIconsVue:k1}},B1={class:"relative min-h-screen flex"},N1={key:0,class:"bg-white w-72"},j1={key:1,class:"bg-white w-[107]"},T1={class:"p-12 flex-1 max-w-6xl"};function A1(C,n,r,d,s,i){const t=_("sidebar-vue"),p=_("sidebar-icons-vue"),f=_("RouterView");return c(),u("div",B1,[s.toggleSidebar?(c(),u("div",N1,[o(t,{onToggleSidebar:n[0]||(n[0]=$=>s.toggleSidebar=!s.toggleSidebar)})])):v("",!0),s.toggleSidebar?v("",!0):(c(),u("div",j1,[o(p,{onToggleSidebar:n[1]||(n[1]=$=>s.toggleSidebar=!s.toggleSidebar)})])),e("div",T1,[o(f)])])}var I1=h(S1,[["render",A1]]);const J1=M({id:"recommendedJobs",state:()=>({jobs:[{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"AMS Performance",companyName:"The linkedIdn Inc."},{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Frontend developer",companyName:"The facebook Inc."},{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Backend developer",companyName:"The apple Inc."},{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Backend developer",companyName:"The apple Inc."}]}),getters:{recommendedJobs(C){return C.jobs}},actions:{addJob(){this.recommendedJobs.push({imgSrc:"https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",title:"Devops",companyName:"The google Inc."})}}}),D1={emits:["onClick"]};function F1(C,n,r,d,s,i){return c(),u("a",{href:"#",onClick:n[0]||(n[0]=t=>C.$emit("onClick")),class:"bg-blue text-white text-sm-2 px-3 py-2 border border-blue rounded"},[V(C.$slots,"default")])}var P1=h(D1,[["render",F1]]);const R1={setup(){return{jobsStore:J1()}},components:{AppButton:P1}},E1={class:"flex justify-between align-middle py-5 font-semibold"},O1=e("div",null,[e("h1",{class:"text-neutral text-xl"},"Jobs you may be interested in")],-1),q1={class:"mt-1"},G1=a("More jobs"),K1={role:"list",class:"grid auto-rows-auto grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},W1={class:"space-y-5 w-full h-36"},z1={class:"w-full flex justify-between space-x-6"},Q1=["src"],U1=e("a",{href:"#"},[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z",fill:"#B0B0B0"})])],-1),X1={class:"space-y-1"},Y1={class:"text-neutral font-sans text-lg"},e4={class:"text-gray-3 font-sans text-sm"},t4=Z('<div class="space-y-5 w-full"><div class="flex space-x-1"><div class="flex justify-center basis-1/7"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00008 4.66664C9.41457 4.66664 10.7711 5.22854 11.7713 6.22874C12.7715 7.22893 13.3334 8.58549 13.3334 9.99997C13.3334 11.4145 12.7715 12.771 11.7713 13.7712C10.7711 14.7714 9.41457 15.3333 8.00008 15.3333C6.58559 15.3333 5.22904 14.7714 4.22885 13.7712C3.22865 12.771 2.66675 11.4145 2.66675 9.99997C2.66675 8.58549 3.22865 7.22893 4.22885 6.22874C5.22904 5.22854 6.58559 4.66664 8.00008 4.66664ZM8.00008 5.99997C6.93922 5.99997 5.9218 6.4214 5.17165 7.17155C4.42151 7.92169 4.00008 8.93911 4.00008 9.99997C4.00008 11.0608 4.42151 12.0783 5.17165 12.8284C5.9218 13.5785 6.93922 14 8.00008 14C9.06095 14 10.0784 13.5785 10.8285 12.8284C11.5787 12.0783 12.0001 11.0608 12.0001 9.99997C12.0001 8.93911 11.5787 7.92169 10.8285 7.17155C10.0784 6.4214 9.06095 5.99997 8.00008 5.99997ZM8.00008 6.99997L8.88208 8.78664L10.8534 9.07331L9.42675 10.4633L9.76341 12.4273L8.00008 11.5L6.23675 12.4266L6.57341 10.4633L5.14675 9.07264L7.11808 8.78597L8.00008 6.99997ZM12.0001 1.33331V3.33331L11.0914 4.09197C10.3374 3.69636 9.51412 3.44986 8.66675 3.36597V1.33331H12.0001ZM7.33341 1.33264V3.36597C6.48631 3.44974 5.6633 3.69601 4.90941 4.09131L4.00008 3.33331V1.33331L7.33341 1.33264Z" fill="#207544"></path></svg></div><div class="basis-10/12"><span class="text-green font-sans text-xs">Great fit</span></div></div><div class="flex justify-between"><div><a href="/"><span class="font-semibold font-sans text-gray-0 text-sm">Dismiss</span></a></div><div class="basis-1/2 flex justify-end"><a href="/"><span class="text-sm font-semibold font-sans text-indigo">Learn more</span></a></div></div></div>',1);function s4(C,n,r,d,s,i){const t=_("app-button");return c(),u(w,null,[e("div",E1,[O1,e("div",q1,[o(t,null,{default:l(()=>[G1]),_:1})])]),e("ul",K1,[(c(!0),u(w,null,H(d.jobsStore.recommendedJobs,(p,f)=>(c(),u("li",{key:p.title+f,class:"col-span-1 bg-white border border-gray-1 rounded-md p-6 min-w-246 max-w-246 max-h-264 min-h-264"},[e("div",null,[e("div",W1,[e("div",z1,[e("img",{class:"w-10 h-10 bg-gray-300 rounded flex-shrink-0",src:p.imgSrc,alt:""},null,8,Q1),U1]),e("div",X1,[e("h1",Y1,g(p.title),1),e("h2",e4,g(p.companyName),1)])]),t4])]))),128))])],64)}var o4=h(R1,[["render",s4]]);const l4=k({setup(){},components:{RecommendedJobsVue:o4}});function n4(C,n,r,d,s,i){const t=_("recommended-jobs-vue");return c(),x(t)}var C4=h(l4,[["render",n4]]);const i4=S({history:B("/vue-sidejar/"),routes:[{path:"/",name:"home",component:C4}]}),m=N(I1);m.use(j());m.use(i4);m.mount("#app");