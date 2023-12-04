import{o as y,h as C,b as h,L as D,N,p as m,I as F,U as w,r as x,c as O,a as l,A as j,i as e,j as S,x as z,_ as i,V as d,B as $,z as f,t as M,W as T,D as Y,X as v,Y as q}from"./index.fced531f.js";import{a as p,_}from"./BaseButton.e5b26bef.js";import{_ as b}from"./FormCheckRadioGroup.aa5e3b02.js";import{_ as E}from"./FormFilePicker.69535caa.js";import{_ as s}from"./FormField.7d4d56fa.js";import{_ as g}from"./SectionTitle.ffe23873.js";import{_ as G}from"./SectionTitleLineWithButton.fa502c3a.js";import"./FormCheckRadio.7c6aa33a.js";const I={class:"flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in"},L={__name:"NotificationBarInCard",props:{color:{type:String,required:!0}},setup(V){return(r,t)=>(y(),C("div",I,[h("div",{class:N([[m(F)[V.color]],"rounded-t-2xl flex flex-col p-6 transition-colors"])},[D(r.$slots,"default")],2)]))}},W={class:"capitalize"},ee={__name:"FormsView",setup(V){const r=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=w({name:"John Doe",email:"john.doe@example.com",phone:"",department:r[0],subject:"",question:""}),n=w({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),U=()=>{},k=x(!0),u=x(0),c=["info","success","danger","warning"],B=()=>{u.value=c[u.value+1]?u.value+1:0};return(A,o)=>(y(),O(j,null,{default:l(()=>[e($,null,{default:l(()=>[e(G,{icon:m(T),title:"Forms example",main:""},{default:l(()=>[e(p,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:m(Y),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(_,{form:"",onSubmit:S(U,["prevent"])},{footer:l(()=>[e(z,null,{default:l(()=>[e(p,{type:"submit",color:"success",label:"Submit"}),e(p,{type:"reset",color:"info",outline:"",label:"Reset"})]),_:1})]),default:l(()=>[e(s,{label:"Grouped with icons"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),icon:m(v)},null,8,["modelValue","icon"]),e(i,{modelValue:t.email,"onUpdate:modelValue":o[1]||(o[1]=a=>t.email=a),type:"email",icon:m(q)},null,8,["modelValue","icon"])]),_:1}),e(s,{label:"With help line",help:"Do not enter the leading zero"},{default:l(()=>[e(i,{modelValue:t.phone,"onUpdate:modelValue":o[2]||(o[2]=a=>t.phone=a),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),e(s,{label:"Dropdown"},{default:l(()=>[e(i,{modelValue:t.department,"onUpdate:modelValue":o[3]||(o[3]=a=>t.department=a),options:r},null,8,["modelValue"])]),_:1}),e(d),e(s,{label:"Question",help:"Your question. Max 255 characters"},{default:l(()=>[e(i,{type:"textarea",placeholder:"Explain how we can help you"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),e(g,null,{default:l(()=>[f("Custom elements")]),_:1}),e($,null,{default:l(()=>[e(_,null,{default:l(()=>[e(s,{label:"Checkbox"},{default:l(()=>[e(b,{modelValue:n.checkbox,"onUpdate:modelValue":o[4]||(o[4]=a=>n.checkbox=a),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]),_:1}),e(d),e(s,{label:"Radio"},{default:l(()=>[e(b,{modelValue:n.radio,"onUpdate:modelValue":o[5]||(o[5]=a=>n.radio=a),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(d),e(s,{label:"Switch"},{default:l(()=>[e(b,{modelValue:n.switch,"onUpdate:modelValue":o[6]||(o[6]=a=>n.switch=a),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(d),e(E,{modelValue:n.file,"onUpdate:modelValue":o[7]||(o[7]=a=>n.file=a),label:"Upload"},null,8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[f("Form with status example")]),_:1}),e(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-form":"","is-hoverable":"",onSubmit:S(B,["prevent"])},{footer:l(()=>[e(p,{label:"Trigger",type:"submit",color:"success"})]),default:l(()=>[e(L,{color:c[u.value],"is-placed-with-header":k.value},{default:l(()=>[h("span",null,[h("b",W,M(c[u.value]),1),f(" state")])]),_:1},8,["color","is-placed-with-header"]),e(s,{label:"Fields"},{default:l(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[8]||(o[8]=a=>t.name=a),"icon-left":m(v),help:"Your full name",placeholder:"Name"},null,8,["modelValue","icon-left"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}))}};export{ee as default};
