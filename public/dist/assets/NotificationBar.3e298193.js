import{g as n,H as h,I as _,r as y,J as g,o,h as k,i as x,a as B,b as r,c,K as w,m as i,L as m,p as t,M as C,y as N,N as S}from"./index.bf3eb1d4.js";import{a as $}from"./BaseButton.1e584900.js";const b={class:"flex flex-col md:flex-row items-center"},v={class:"text-center md:text-left md:py-2"},q={__name:"NotificationBar",props:{icon:{type:String,default:null},outline:Boolean,color:{type:String,required:!0}},setup(s){const e=s,d=n(()=>e.outline?h[e.color]:_[e.color]),a=y(!1),u=()=>{a.value=!0},f=g(),p=n(()=>f.right);return(l,V)=>a.value?i("",!0):(o(),k("div",{key:0,class:S([t(d),"px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"])},[x(N,null,{default:B(()=>[r("div",b,[s.icon?(o(),c(w,{key:0,path:s.icon,w:"w-10 md:w-5",h:"h-10 md:h-5",size:"24",class:"md:mr-2"},null,8,["path"])):i("",!0),r("span",v,[m(l.$slots,"default")])]),t(p)?m(l.$slots,"right",{key:0}):(o(),c($,{key:1,icon:t(C),small:"","rounded-full":"",color:"white",onClick:u},null,8,["icon"]))]),_:3})],2))}};export{q as _};
