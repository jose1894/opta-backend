import{af as x,ag as F,as as I,a9 as N,y as j,at as q,I as z,o as O,c as P,w as p,a as i,d as T,j as D,B as f,u as n,C as v,au as E,av as G,aw as H,z as J,g as K}from"./index.cb093d8e.js";import{r as $,m as Q,u as W}from"./index.esm.25e21f11.js";import{p as b}from"./profileActions.service.6523c0ce.js";const X={class:"grid md:grid-cols-3 gap-4"},se={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(y){const d=y,{t:o}=x(),h=F(),L=I(),M=N(),g=[{id:1,label:o("message.cargo.statuses.active")},{id:0,label:o("message.cargo.statuses.inactive")},{id:2,label:o("message.cargo.statuses.deleted")}],s=j({_id:"",codigo:"00",descripcion:"",estado:g[0]}),S=a=>{const{_id:e,codigo:t,descripcion:r,estado:l}=a.value,c={_id:e,codigo:t,descripcion:r,estado:l.id};return d.path==="create"?b.create(c):b.update(c)};q(async()=>{if(d.path==="update"){const a=await b.read(L.params);s.value=a.data,s.value.estado=g.filter(e=>e.id===a.data.estado)[0]}});const C=z(()=>({codigo:{required:$,maxLength:Q(3)},descripcion:{required:$},estado:{required:$}})),m=W(C,s),R=d.path==="create"?o("message.profileAction.created.success"):o("message.profileAction.updated.success"),U=d.path==="create"?o("message.profileAction.created.error"):o("message.profileAction.updated.error"),k=async()=>{await m.value.$validate()?S(s).then(()=>{h.success(R),M.push("/setup/profileActions")}).catch(e=>{var t,r;if((t=e.response.data)!=null&&t.msg){h.error(`${U} ${e.response.data.msg}`);return}if((r=e.response.data)!=null&&r.errors){const l=e.response.data.errors;for(let c of l);}}):console.log("error")};return(a,e)=>(O(),P(K,{isForm:"",onSubmit:J(k,["prevent"])},{footer:p(()=>[i(T,{label:a.$t(`message.${d.saveLabel}`),type:"submit",color:"success"},null,8,["label"])]),default:p(()=>{var t,r,l,c,V,_,A,w,B;return[D("div",X,[i(f,{label:a.$t("message.profileAction.code"),help:(l=(r=(t=n(m))==null?void 0:t.codigo)==null?void 0:r.$errors[0])==null?void 0:l.$message},{default:p(()=>[i(v,{name:"codigo",modelValue:s.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=u=>s.value.codigo=u),icon:n(E)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),i(f,{label:a.$t("message.profileAction.description"),help:(_=(V=(c=n(m))==null?void 0:c.descripcion)==null?void 0:V.$errors[0])==null?void 0:_.$message},{default:p(()=>[i(v,{modelValue:s.value.descripcion,"onUpdate:modelValue":e[1]||(e[1]=u=>s.value.descripcion=u),icon:n(G)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),i(f,{label:a.$t("message.profileAction.status"),help:(B=(w=(A=n(m))==null?void 0:A.estado)==null?void 0:w.$errors[0])==null?void 0:B.$message},{default:p(()=>[i(v,{modelValue:s.value.estado,"onUpdate:modelValue":e[2]||(e[2]=u=>s.value.estado=u),icon:n(H),options:g},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{se as _};
