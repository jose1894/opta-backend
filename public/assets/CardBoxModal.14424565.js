import{o as s,h as p,b as h,t as v,L as _,u as w,g,d as C,S as y,p as r,c as n,a as o,i as u,x as B,m as d,j as x,N as S,T as $,M as V}from"./index.fced531f.js";import{b as M,a as f,_ as D}from"./BaseButton.e5b26bef.js";const N={class:"flex items-center justify-between mb-3"},L={class:"text-2xl"},E={__name:"CardBoxComponentTitle",props:{title:{type:String,required:!0}},setup(e){return(l,c)=>(s(),p("div",N,[h("h1",L,v(e.title),1),_(l.$slots,"default")]))}},j={class:"space-y-3"},q={__name:"CardBoxModal",props:{title:{type:String,required:!0},overlayClick:{type:Boolean,default:!0},button:{type:String,default:"info"},buttonLabel:{type:String,default:"Si"},hasCancel:Boolean,hasClose:Boolean,hasDone:{type:Boolean,default:!0},modelValue:{type:[String,Number,Boolean],default:null},data:{type:{},default:null},claseModal:{type:String,default:"shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50 custom-modal"}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:l}){const c=e;w();const t=g({get:()=>c.modelValue,set:a=>l("update:modelValue",a)}),m=a=>{t.value=!1,l(a)},b=()=>m("confirm"),i=()=>m("cancel"),k=()=>{c.overlayClick&&(t.value=!1,l("cancel"))};return window.addEventListener("keydown",a=>{a.key==="Escape"&&t.value&&i()}),(a,z)=>C((s(),n($,{onOverlayClick:k},{default:o(()=>[C(u(D,{class:S(e.claseModal),"is-modal":""},{footer:o(()=>[u(B,null,{default:o(()=>[e.hasDone?(s(),n(f,{key:0,label:e.buttonLabel,color:e.button,onClick:b},null,8,["label","color"])):d("",!0),e.hasCancel?(s(),n(f,{key:1,label:a.$t("message.cancel"),color:e.button,outline:"",onClick:i},null,8,["label","color"])):d("",!0)]),_:1})]),default:o(()=>[u(E,{title:e.title},{default:o(()=>[e.hasClose?(s(),n(f,{key:0,icon:r(V),color:"whiteDark",small:"","rounded-full":"",onClick:x(i,["prevent"])},null,8,["icon","onClick"])):d("",!0)]),_:1},8,["title"]),h("div",j,[_(a.$slots,"default",{},void 0,!0)])]),_:3},8,["class"]),[[y,r(t)]])]),_:3},512)),[[y,r(t)]])}},O=M(q,[["__scopeId","data-v-1ef4143d"]]);export{O as C,E as _};
