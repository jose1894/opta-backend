import{_ as d}from"./FormCheckRadio.b0cf8ca6.js";import{I as p,o as a,r as u,J as f,K as y,c as b,u as V,L as x,t as s}from"./index.2b059d96.js";const C={__name:"FormCheckRadioGroup",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},componentClass:{type:String,default:null},isColumn:Boolean,modelValue:{type:[Array,String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const m=e,l=p({get:()=>m.modelValue,set:t=>{r("update:modelValue",t)}});return(t,o)=>(a(),u("div",{class:s(["flex justify-start flex-wrap -mb-3",{"flex-col":e.isColumn}])},[(a(!0),u(f,null,y(e.options,(c,n)=>(a(),b(d,{key:n,modelValue:V(l),"onUpdate:modelValue":o[0]||(o[0]=i=>x(l)?l.value=i:null),type:e.type,name:e.name,"input-value":n,label:c,class:s([e.componentClass,"mr-6 mb-3 last:mr-0"])},null,8,["modelValue","type","name","input-value","label","class"]))),128))],2))}};export{C as _};