import{O as b,y as u,I as i,P as g,o as r,r as d,j as t,a as h,t as v,u as f,d as V,E as I,Q as k}from"./index.e27aaed2.js";const x={class:"flex items-stretch justify-start relative"},R={class:"inline-flex"},S=["accept"],w={key:0,class:"px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"},z={class:"text-ellipsis line-clamp-1"},F={__name:"FormFilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:null},icon:{type:String,default:b},accept:{type:String,default:null},color:{type:String,default:"info"},isRoundIcon:Boolean},emits:["update:modelValue"],setup(e,{emit:m}){const o=e,n=u(null),l=u(o.modelValue),s=i(()=>!o.isRoundIcon&&l.value),p=i(()=>o.modelValue);g(p,a=>{l.value=a,a||(n.value.input.value=null)});const y=a=>{const c=a.target.files||a.dataTransfer.files;l.value=c[0],console.log(l.value),m("update:modelValue",l.value)};return(a,c)=>(r(),d("div",x,[t("label",R,[h(V,{as:"a",class:v({"w-12 h-12":e.isRoundIcon,"rounded-r-none":f(s)}),"icon-size":e.isRoundIcon?24:void 0,label:e.isRoundIcon?null:e.label,icon:e.icon,color:e.color,"rounded-full":e.isRoundIcon},null,8,["class","icon-size","label","icon","color","rounded-full"]),t("input",{ref_key:"root",ref:n,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:y},null,40,S)]),f(s)?(r(),d("div",w,[t("span",z,I(l.value.name),1)])):k("",!0)]))}};export{F as _};
