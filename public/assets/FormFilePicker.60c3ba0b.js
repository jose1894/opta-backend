import{$ as b,r as i,g as u,w as g,o as r,h as d,b as t,i as h,N as v,p as f,t as V,m as k}from"./index.7c3ce38a.js";import{a as I}from"./BaseButton.ad880968.js";const x={class:"flex items-stretch justify-start relative"},R={class:"inline-flex"},w=["accept"],S={key:0,class:"px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"},z={class:"text-ellipsis line-clamp-1"},N={__name:"FormFilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:null},icon:{type:String,default:b},accept:{type:String,default:null},color:{type:String,default:"info"},isRoundIcon:Boolean},emits:["update:modelValue"],setup(e,{emit:m}){const a=e,n=i(null),l=i(a.modelValue),s=u(()=>!a.isRoundIcon&&l.value),p=u(()=>a.modelValue);g(p,o=>{l.value=o,o||(n.value.input.value=null)});const y=o=>{const c=o.target.files||o.dataTransfer.files;l.value=c[0],console.log(l.value),m("update:modelValue",l.value)};return(o,c)=>(r(),d("div",x,[t("label",R,[h(I,{as:"a",class:v({"w-12 h-12":e.isRoundIcon,"rounded-r-none":f(s)}),"icon-size":e.isRoundIcon?24:void 0,label:e.isRoundIcon?null:e.label,icon:e.icon,color:e.color,"rounded-full":e.isRoundIcon},null,8,["class","icon-size","label","icon","color","rounded-full"]),t("input",{ref_key:"root",ref:n,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:y},null,40,w)]),f(s)?(r(),d("div",S,[t("span",z,V(l.value.name),1)])):k("",!0)]))}};export{N as _};
