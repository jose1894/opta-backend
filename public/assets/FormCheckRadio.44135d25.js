import{I as s,o as d,r as p,M as m,R as y,u,j as a,N as h,E as b,t as V}from"./index.e27aaed2.js";const f=["type","name","value"],g=a("span",{class:"check"},null,-1),k={class:"pl-2"},S={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0}},emits:["update:modelValue"],setup(e,{emit:i}){const l=e,t=s({get:()=>l.modelValue,set:n=>{i("update:modelValue",n)}}),r=s(()=>l.type==="radio"?"radio":"checkbox");return(n,o)=>(d(),p("label",{class:V([e.type,"switch-label"])},[m(a("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>h(t)?t.value=c:null),type:u(r),name:e.name,value:e.inputValue},null,8,f),[[y,u(t)]]),g,a("span",k,b(e.label),1)],2))}};export{S as _};
