import{o as s,h as m,L as d,N as f,J as B,g as r,c as p,a as c,F as S,i as x,p as i,m as b,e as h,R as v,O as C,P as k,d as F,K as w,t as $}from"./index.bf3eb1d4.js";const _={__name:"CardBoxComponentBody",props:{noPadding:Boolean},setup(t){return(e,o)=>(s(),m("div",{class:f(["flex-1",{"p-6":!t.noPadding}])},[d(e.$slots,"default")],2))}},z=(t,e)=>{const o=t.__vccOpts||t;for(const[l,u]of e)o[l]=u;return o},N={},T={class:"p-6 footer"};function D(t,e){return s(),m("footer",T,[d(t.$slots,"default")])}const L=z(N,[["render",D]]),P={__name:"CardBox",props:{rounded:{type:String,default:"rounded-2xl"},flex:{type:String,default:"flex-col"},hasComponentLayout:Boolean,hasTable:Boolean,isForm:Boolean,isHoverable:Boolean,isModal:Boolean},emits:["submit"],setup(t,{emit:e}){const o=t,l=B(),u=r(()=>l.footer&&!!l.footer()),y=r(()=>{const a=[o.rounded,o.flex,o.isModal?"dark:bg-slate-900":"dark:bg-slate-900/70"];return o.isHoverable&&a.push("hover:shadow-lg transition-shadow duration-500"),a}),n=a=>{e("submit",a)};return(a,g)=>(s(),p(h(t.isForm?"form":"div"),{class:f([i(y),"bg-white flex"]),onSubmit:n},{default:c(()=>[t.hasComponentLayout?d(a.$slots,"default",{key:0}):(s(),m(S,{key:1},[x(_,{"no-padding":t.hasTable},{default:c(()=>[d(a.$slots,"default")]),_:3},8,["no-padding"]),i(u)?(s(),p(L,{key:0},{default:c(()=>[d(a.$slots,"footer")]),_:3})):b("",!0)],64))]),_:3},40,["class"]))}},j={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},iconSize:{type:[String,Number],default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},messageTooltip:{type:String,default:""},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(t){const e=t,o=r(()=>e.as?e.as:e.to?v:e.href?"a":"button"),l=r(()=>{var n;return o.value==="button"?(n=e.type)!=null?n:"button":null}),u=r(()=>e.small&&e.icon?"px-1":"px-2"),y=r(()=>{const n=["inline-flex","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",e.disabled?"cursor-not-allowed":"cursor-pointer",e.roundedFull?"rounded-full":"rounded",C(e.color,e.outline,!e.disabled,e.active)];return!e.label&&e.icon?n.push("p-1"):e.small?n.push("text-sm",e.roundedFull?"px-3 py-1":"p-1"):n.push("py-2",e.roundedFull?"px-6":"px-3"),e.disabled&&n.push(e.outline?"opacity-50":"opacity-70"),n});return(n,a)=>{const g=k("tippy");return F((s(),p(h(i(o)),{class:f(i(y)),href:t.href,type:i(l),to:t.to,target:t.target,disabled:t.disabled},{default:c(()=>[t.icon?(s(),p(w,{key:0,path:t.icon,size:t.iconSize},null,8,["path","size"])):b("",!0),t.label?(s(),m("span",{key:1,class:f(i(u))},$(t.label),3)):b("",!0)]),_:1},8,["class","href","type","to","target","disabled"])),[[g,{content:t.messageTooltip}]])}}};export{P as _,j as a,z as b};
