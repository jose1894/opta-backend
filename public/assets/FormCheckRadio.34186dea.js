import{g as o,o as r,h as p,d as m,a0 as y,p as i,b as t,Z as b,t as h,N as f}from"./index.b6490627.js";const V=["type","name","value","disabled"],g=t("span",{class:"check"},null,-1),k={class:"pl-2"},B={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:u}){const l=e,a=o({get:()=>l.modelValue,set:s=>{u("update:modelValue",s)}}),d=o(()=>l.type==="radio"?"radio":"checkbox");return(s,n)=>(r(),p("label",{class:f([e.type,"switch-label"])},[m(t("input",{"onUpdate:modelValue":n[0]||(n[0]=c=>b(a)?a.value=c:null),type:i(d),name:e.name,value:e.inputValue,disabled:e.isDisabled},null,8,V),[[y,i(a)]]),g,t("span",k,h(e.label),1)],2))}};export{B as _};
