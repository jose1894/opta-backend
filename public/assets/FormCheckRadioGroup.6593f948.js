import{_ as p}from"./FormCheckRadio.c3b60c2c.js";import{g as f,P as y,o as a,h as n,F as b,k as g,d as v,c as V,p as k,Z as x,N as i}from"./index.336063ef.js";const h={__name:"FormCheckRadioGroup",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},componentClass:{type:String,default:null},isColumn:Boolean,modelValue:{type:[Array,String,Number,Boolean],default:null},messageTooltip:{type:String,default:""},readonly:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:u}){const r=e,t=f({get:()=>r.modelValue,set:l=>{u("update:modelValue",l)}});return(l,o)=>{const m=y("tippy");return a(),n("div",{class:i(["flex justify-start flex-wrap -mb-3",{"flex-col":e.isColumn}])},[(a(!0),n(b,null,g(e.options,(c,s)=>v((a(),V(p,{key:s,modelValue:k(t),"onUpdate:modelValue":o[0]||(o[0]=d=>x(t)?t.value=d:null),type:e.type,name:e.name,"input-value":s,label:c,class:i([e.componentClass,"mr-6 mb-3 last:mr-0"]),isDisabled:e.readonly},null,8,["modelValue","type","name","input-value","label","class","isDisabled"])),[[m,{content:e.messageTooltip}]])),128))],2)}}};export{h as _};
