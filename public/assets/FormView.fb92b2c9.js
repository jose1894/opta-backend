import{u as z,ak as F,au as O,ae as T,r as q,ax as D,g as I,o as A,c as E,a as m,b as S,i as r,N as G,d as H,_ as V,p,ay as J,S as K,az as P,ar as Q,j as W}from"./index.fced531f.js";import{a as j,_ as X}from"./BaseButton.e5b26bef.js";import{_ as y}from"./FormField.7d4d56fa.js";import{r as k,u as Y}from"./index.esm.5991b628.js";import{c as _}from"./currencies.service.1567fcba.js";const Z={style:{display:"flex","justify-content":"space-between"}},re={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(b){const d=b,{t:c}=z(),v=F(),B=O(),w=T(),$=[{id:1,label:c("message.currencies.statuses.active")},{id:0,label:c("message.currencies.statuses.inactive")}],a=q({_id:"",codigo:"00",nombre:"",estado:$[0]}),C=s=>{const{_id:e,codigo:o,nombre:n,estado:l}=s.value,t={_id:e,codigo:o,nombre:n,estado:l.id};return d.path==="create"?_.create(t):_.update(t)};D(async()=>{if(d.path==="update"){const s=await _.read(B.params);a.value=s.data,a.value.estado=$.filter(e=>e.id===s.data.estado)[0]}});const M=I(()=>({nombre:{required:k},estado:{required:k}})),h=Y(M,a),L=d.path==="create"?c("message.currencies.created.success"):c("message.currencies.updated.success"),N=d.path==="create"?c("message.currencies.created.error"):c("message.currencies.updated.error"),R=async()=>{await h.value.$validate()?C(a).then(()=>{v.success(L),w.push("/setup/currencies")}).catch(e=>{var o,n;if((o=e.response.data)!=null&&o.msg){v.error(`${N} ${e.response.data.msg}`);return}if((n=e.response.data)!=null&&n.errors){const l=e.response.data.errors,t=Object.keys(l).map(function(u,i){const f=l[u];return f.length>1?f.map(x=>f[x]).join():f[0]});let g=t.length>1?t.map(u=>t[u]).join():t[0];v.error(`${g}`)}}):console.log("error")},U=()=>w.push("/setup/currencies");return(s,e)=>(A(),E(X,{isForm:"",onSubmit:W(R,["prevent"])},{footer:m(()=>[S("div",Z,[r(j,{label:s.$t(`message.${d.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),r(j,{label:s.$t("message.return"),color:"info",onClick:e[3]||(e[3]=o=>U())},null,8,["label"])])]),default:m(()=>{var o,n,l,t,g,u;return[S("div",{class:G(b.path!=="create"?"grid md:grid-cols-3 gap-4":"grid md:grid-cols-2 gap-4")},[H(r(y,{label:s.$t("message.currencies.code")},{default:m(()=>[r(V,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value.codigo=i),icon:p(J),readonly:"true"},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[K,b.path!=="create"]]),r(y,{label:s.$t("message.currencies.name"),help:(l=(n=(o=p(h))==null?void 0:o.nombre)==null?void 0:n.$errors[0])==null?void 0:l.$message},{default:m(()=>[r(V,{modelValue:a.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value.nombre=i),icon:p(P)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),r(y,{label:s.$t("message.currencies.status"),help:(u=(g=(t=p(h))==null?void 0:t.estado)==null?void 0:g.$errors[0])==null?void 0:u.$message},{default:m(()=>[r(V,{modelValue:a.value.estado,"onUpdate:modelValue":e[2]||(e[2]=i=>a.value.estado=i),icon:p(Q),options:$},null,8,["modelValue","icon"])]),_:1},8,["label","help"])],2)]}),_:1},8,["onSubmit"]))}};export{re as _};
