import{f as c,U as _,ae as f,o as b,c as w,a as s,af as V,i as e,N as g,j as $,x as k,_ as r,p as m,X as y,a3 as S}from"./index.b6490627.js";import{_ as x}from"./SectionFullScreen.d1e4fb67.js";import{_ as P,a as t}from"./BaseButton.d5c30e56.js";import{_ as U}from"./FormCheckRadio.34186dea.js";import{_ as n}from"./FormField.74da7989.js";const M={__name:"LoginView",setup(v){const i=c(),a=_({email:"jose1894@gmail.com",password:"#Stars123",remember:!0}),u=f(),d=async()=>{await i.signIn(a),u.push("/dashboard")};return(B,o)=>(b(),w(V,null,{default:s(()=>[e(x,{bg:"purplePink"},{default:s(({cardClass:p})=>[e(P,{class:g(p),"is-form":"",onSubmit:$(d,["prevent"])},{footer:s(()=>[e(k,null,{default:s(()=>[e(t,{type:"submit",color:"success",label:"Login"}),e(t,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:s(()=>[e(n,{label:"Login",help:"Please enter your login"},{default:s(()=>[e(r,{modelValue:a.email,"onUpdate:modelValue":o[0]||(o[0]=l=>a.email=l),icon:m(y),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(n,{label:"Password",help:"Please enter your password"},{default:s(()=>[e(r,{modelValue:a.password,"onUpdate:modelValue":o[1]||(o[1]=l=>a.password=l),icon:m(S),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(U,{modelValue:a.remember,"onUpdate:modelValue":o[2]||(o[2]=l=>a.remember=l),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{M as default};
