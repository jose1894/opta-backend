import{u as k,r as h,o,h as s,b as l,F as d,k as C,N as n,t as g,L as y,d as u,S as b,i as v,p,aJ as T,aK as w}from"./index.97cc49ea.js";import{b as D,a as m}from"./BaseButton.fb27d38b.js";const S={class:"mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"},B=["onClick"],L={class:"my-2 block text-blue-600 border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"},N={class:"mt-2",style:{display:"inline-block",float:"right"}},$={__name:"TabsComponent",props:{tabs:[]},emits:["tabClick"],setup(r,{emit:t}){k();const e=h(0),f=a=>{t("tabClick",a),e.value=a},_=()=>{console.log(e.value);const a=e.value+1;t("tabClick",a),e.value=a},x=()=>{console.log(e.value);const a=e.value-1;t("tabClick",a),e.value=a};return(a,F)=>(o(),s(d,null,[l("ul",S,[(o(!0),s(d,null,C(r.tabs,(c,i)=>(o(),s("li",{key:c.title,class:n(["flex-grow basis-0 text-center",{active:e.value===i}]),onClick:I=>f(i)},[l("a",L,g(c.title),1)],10,B))),128))]),y(a.$slots,"default",{},void 0,!0),l("div",N,[u(v(m,{icon:p(T),small:"","rounded-full":"",class:n("mx-2"),color:"info",onClick:x},null,8,["icon"]),[[b,e.value!==0]]),u(v(m,{icon:p(w),small:"","rounded-full":"",class:n("mx-2"),color:"info",onClick:_},null,8,["icon"]),[[b,e.value!==r.tabs.length-1]])])],64))}},E=D($,[["__scopeId","data-v-ffe90c23"]]);export{E as T};