import{af as F,ag as I,as as N,a9 as j,y as q,at as z,I as D,o as O,c as T,w as m,a as d,d as A,j as E,B as f,u,C as b,au as G,av as H,aw as J,z as K,g as P}from"./index.2b059d96.js";import{r as v,m as Q,u as W}from"./index.esm.a100cd13.js";import{i as $}from"./Industries.service.b05a08d2.js";const X={class:"grid md:grid-cols-3 gap-4"},se={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(L){const i=L,{t}=F(),y=I(),M=N(),S=j(),g=[{id:1,label:t("message.industry.statuses.active")},{id:0,label:t("message.industry.statuses.inactive")},{id:2,label:t("message.industry.statuses.deleted")}],s=q({_id:"",codigo:"00",nombre:"",estado:g[0]}),C=a=>{const{_id:e,codigo:o,nombre:r,estado:n}=a.value,l={_id:e,codigo:o,nombre:r,estado:n.id};return i.path==="create"?$.create(l):$.update(l)};z(async()=>{if(i.path==="update"){const a=await $.read(M.params);s.value=a.data,s.value.estado=g.filter(e=>e.id===a.data.estado)[0]}});const R=D(()=>({codigo:{required:v,maxLength:Q(3)},nombre:{required:v},estado:{required:v}})),p=W(R,s),U=i.path==="create"?t("message.industry.created.success"):t("message.industry.updated.success"),k=i.path==="create"?t("message.industry.created.error"):t("message.industry.updated.error"),x=async()=>{await p.value.$validate()?C(s).then(()=>{y.success(U),S.push("/setup/industries")}).catch(e=>{var o,r;if((o=e.response.data)!=null&&o.msg){y.error(`${k} ${e.response.data.msg}`);return}if((r=e.response.data)!=null&&r.errors){const n=e.response.data.errors;for(let l of n);}}):console.log("error")};return(a,e)=>(O(),T(P,{isForm:"",onSubmit:K(x,["prevent"])},{footer:m(()=>[d(A,{label:a.$t(`message.${i.saveLabel}`),type:"submit",color:"success"},null,8,["label"])]),default:m(()=>{var o,r,n,l,h,V,_,w,B;return[E("div",X,[d(f,{label:a.$t("message.industry.code"),help:(n=(r=(o=u(p))==null?void 0:o.codigo)==null?void 0:r.$errors[0])==null?void 0:n.$message},{default:m(()=>[d(b,{name:"codigo",modelValue:s.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=c=>s.value.codigo=c),icon:u(G)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),d(f,{label:a.$t("message.industry.name"),help:(V=(h=(l=u(p))==null?void 0:l.nombre)==null?void 0:h.$errors[0])==null?void 0:V.$message},{default:m(()=>[d(b,{modelValue:s.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=c=>s.value.nombre=c),icon:u(H)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),d(f,{label:a.$t("message.industry.status"),help:(B=(w=(_=u(p))==null?void 0:_.estado)==null?void 0:w.$errors[0])==null?void 0:B.$message},{default:m(()=>[d(b,{modelValue:s.value.estado,"onUpdate:modelValue":e[2]||(e[2]=c=>s.value.estado=c),icon:u(J),options:g},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{se as _};
