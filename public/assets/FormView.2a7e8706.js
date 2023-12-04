import{u as j,ak as z,au as F,ae as T,r as q,ax as x,g as D,o as I,c as O,a as c,b as w,i as t,N as A,d as E,_ as b,p as m,ay as G,S as H,az as J,ar as K,j as P}from"./index.b6490627.js";import{a as S,_ as Q}from"./BaseButton.d5c30e56.js";import{_ as v}from"./FormField.74da7989.js";import{r as B,u as W}from"./index.esm.e4937ab4.js";import{p as $}from"./Professions.service.5932e448.js";const X={style:{display:"flex","justify-content":"space-between"}},oe={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(p){const u=p,{t:n}=j(),h=z(),k=F(),V=T(),f=[{id:1,label:n("message.profession.statuses.active")},{id:0,label:n("message.profession.statuses.inactive")}],a=q({_id:"",codigo:"00",nombre:"",estado:f[0]}),C=s=>{const{_id:e,codigo:o,nombre:r,estado:l}=s.value,i={_id:e,codigo:o,nombre:r,estado:l.id};return u.path==="create"?$.create(i):$.update(i)};x(async()=>{if(u.path==="update"){const s=await $.read(k.params);a.value=s.data,a.value.estado=f.filter(e=>e.id===s.data.estado)[0]}});const M=()=>V.push("/setup/professions"),L=D(()=>({nombre:{required:B},estado:{required:B}})),g=W(L,a),N=u.path==="create"?n("message.profession.created.success"):n("message.profession.updated.success"),R=u.path==="create"?n("message.profession.created.error"):n("message.profession.updated.error"),U=async()=>{await g.value.$validate()?C(a).then(()=>{h.success(N),V.push("/setup/professions")}).catch(e=>{var o,r;if((o=e.response.data)!=null&&o.msg){h.error(`${R} ${e.response.data.msg}`);return}if((r=e.response.data)!=null&&r.errors){const l=e.response.data.errors;for(let i of l);}}):console.log("error")};return(s,e)=>(I(),O(Q,{isForm:"",onSubmit:P(U,["prevent"])},{footer:c(()=>[w("div",X,[t(S,{label:s.$t(`message.${u.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),t(S,{label:s.$t("message.return"),color:"info",onClick:e[3]||(e[3]=o=>M())},null,8,["label"])])]),default:c(()=>{var o,r,l,i,y,_;return[w("div",{class:A(p.path!=="create"?"grid md:grid-cols-3 gap-3":"grid md:grid-cols-2 gap-3")},[E(t(v,{label:s.$t("message.profession.code")},{default:c(()=>[t(b,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=d=>a.value.codigo=d),icon:m(G),readonly:"true"},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[H,p.path!=="create"]]),t(v,{label:s.$t("message.profession.name"),help:(l=(r=(o=m(g))==null?void 0:o.nombre)==null?void 0:r.$errors[0])==null?void 0:l.$message},{default:c(()=>[t(b,{modelValue:a.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=d=>a.value.nombre=d),icon:m(J)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(v,{label:s.$t("message.profession.status"),help:(_=(y=(i=m(g))==null?void 0:i.estado)==null?void 0:y.$errors[0])==null?void 0:_.$message},{default:c(()=>[t(b,{modelValue:a.value.estado,"onUpdate:modelValue":e[2]||(e[2]=d=>a.value.estado=d),icon:m(K),options:f},null,8,["modelValue","icon"])]),_:1},8,["label","help"])],2)]}),_:1},8,["onSubmit"]))}};export{oe as _};
