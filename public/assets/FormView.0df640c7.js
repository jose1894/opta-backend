import{u as j,ak as z,au as F,ae as T,r as q,ax as x,g as D,o as I,c as O,a as c,b as w,i as o,N as A,d as E,_ as b,p as m,ay as G,S as H,az as J,ar as K,j as P}from"./index.4a61edd7.js";import{a as S,_ as Q}from"./BaseButton.d111364f.js";import{_ as v}from"./FormField.929b004e.js";import{r as B,u as W}from"./index.esm.7fbc5eb8.js";import{l as $}from"./languages.service.d289d1ff.js";const X={style:{display:"flex","justify-content":"space-between"}},te={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(g){const d=g,{t:r}=j(),h=z(),k=F(),V=T(),p=[{id:1,label:r("message.language.statuses.active")},{id:0,label:r("message.language.statuses.inactive")}],s=q({_id:"",codigo:"00",nombre:"",estado:p[0]}),C=a=>{const{_id:e,codigo:t,nombre:l,estado:n}=a.value,u={_id:e,codigo:t,nombre:l,estado:n.id};return d.path==="create"?$.create(u):$.update(u)};x(async()=>{if(d.path==="update"){const a=await $.read(k.params);s.value=a.data,s.value.estado=p.filter(e=>e.id===a.data.estado)[0]}});const M=D(()=>({nombre:{required:B},estado:{required:B}})),f=W(M,s),L=d.path==="create"?r("message.language.created.success"):r("message.language.updated.success"),N=d.path==="create"?r("message.language.created.error"):r("message.language.updated.error"),R=async()=>{await f.value.$validate()?C(s).then(()=>{h.success(L),V.push("/setup/languages")}).catch(e=>{var t,l;if((t=e.response.data)!=null&&t.msg){h.error(`${N} ${e.response.data.msg}`);return}if((l=e.response.data)!=null&&l.errors){const n=e.response.data.errors;for(let u of n);}}):console.log("error")},U=()=>V.push("/setup/languages");return(a,e)=>(I(),O(Q,{isForm:"",onSubmit:P(R,["prevent"])},{footer:c(()=>[w("div",X,[o(S,{label:a.$t(`message.${d.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),o(S,{label:a.$t("message.return"),color:"info",onClick:e[3]||(e[3]=t=>U())},null,8,["label"])])]),default:c(()=>{var t,l,n,u,y,_;return[w("div",{class:A(g.path!=="create"?"grid md:grid-cols-3 gap-4":"grid md:grid-cols-2 gap-4")},[E(o(v,{label:a.$t("message.language.code")},{default:c(()=>[o(b,{name:"codigo",modelValue:s.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=i=>s.value.codigo=i),icon:m(G),readonly:"true"},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[H,g.path!=="create"]]),o(v,{label:a.$t("message.language.name"),help:(n=(l=(t=m(f))==null?void 0:t.nombre)==null?void 0:l.$errors[0])==null?void 0:n.$message},{default:c(()=>[o(b,{modelValue:s.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=i=>s.value.nombre=i),icon:m(J)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(v,{label:a.$t("message.language.status"),help:(_=(y=(u=m(f))==null?void 0:u.estado)==null?void 0:y.$errors[0])==null?void 0:_.$message},{default:c(()=>[o(b,{modelValue:s.value.estado,"onUpdate:modelValue":e[2]||(e[2]=i=>s.value.estado=i),icon:m(K),options:p},null,8,["modelValue","icon"])]),_:1},8,["label","help"])],2)]}),_:1},8,["onSubmit"]))}};export{te as _};
