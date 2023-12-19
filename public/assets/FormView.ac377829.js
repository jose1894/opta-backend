import{u as T,ak as q,au as z,ae as I,r as O,ax as A,g as D,o as E,c as G,a as m,b as L,i as o,p as u,_ as v,ay as H,az as J,ar as K,j as P}from"./index.97cc49ea.js";import{a as k,_ as Q}from"./BaseButton.fb27d38b.js";import{_ as $}from"./FormField.649b9cf9.js";import{r as b,m as W,u as X}from"./index.esm.4f920791.js";import{i as M}from"./itemsMenu.service.d26d7970.js";const Y={class:"grid md:grid-cols-3 gap-4"},Z={style:{display:"flex","justify-content":"space-between"}},re={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(S){const d=S,{t:l}=T(),_=q(),x=z(),h=I(),g=[{id:1,label:l("message.itemMenu.statuses.active")},{id:0,label:l("message.itemMenu.statuses.inactive")}],a=O({_id:"",codigo:"00",descripcion:"",estado:g[0]}),C=s=>{const{_id:e,codigo:t,descripcion:r,estado:i}=s.value,n={_id:e,codigo:t,descripcion:r,estado:i.id};return d.path==="create"?M.create(n):M.update(n)};A(async()=>{if(d.path==="update"){const s=await M.read(x.params);a.value=s.data,a.value.estado=g.filter(e=>e.id===s.data.estado)[0]}});const R=D(()=>({codigo:{required:b,maxLength:W(3)},descripcion:{required:b},estado:{required:b}})),p=X(R,a),U=d.path==="create"?l("message.itemMenu.created.success"):l("message.itemMenu.updated.success"),j=d.path==="create"?l("message.itemMenu.created.error"):l("message.itemMenu.updated.error"),F=async()=>{await p.value.$validate()?C(a).then(()=>{_.success(U),h.push("/setup/itemsMenu")}).catch(e=>{var t,r,i;if(console.log(e),(r=(t=e.response)==null?void 0:t.data)!=null&&r.msg){_.error(`${j} ${e.response.data.msg}`);return}if((i=e.response.data)!=null&&i.errors){const n=e.response.data.errors;for(let f of n);}}):console.log("error")},N=()=>h.push("/setup/itemsMenu");return(s,e)=>(E(),G(Q,{isForm:"",onSubmit:P(F,["prevent"])},{footer:m(()=>[L("div",Z,[o(k,{label:s.$t(`message.${d.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),o(k,{label:s.$t("message.return"),color:"info",onClick:e[3]||(e[3]=t=>N())},null,8,["label"])])]),default:m(()=>{var t,r,i,n,f,V,y,w,B;return[L("div",Y,[o($,{label:s.$t("message.itemMenu.code"),help:(i=(r=(t=u(p))==null?void 0:t.codigo)==null?void 0:r.$errors[0])==null?void 0:i.$message},{default:m(()=>[o(v,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value.codigo=c),icon:u(H)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o($,{label:s.$t("message.itemMenu.description"),help:(V=(f=(n=u(p))==null?void 0:n.descripcion)==null?void 0:f.$errors[0])==null?void 0:V.$message},{default:m(()=>[o(v,{modelValue:a.value.descripcion,"onUpdate:modelValue":e[1]||(e[1]=c=>a.value.descripcion=c),icon:u(J)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o($,{label:s.$t("message.itemMenu.status"),help:(B=(w=(y=u(p))==null?void 0:y.estado)==null?void 0:w.$errors[0])==null?void 0:B.$message},{default:m(()=>[o(v,{modelValue:a.value.estado,"onUpdate:modelValue":e[2]||(e[2]=c=>a.value.estado=c),icon:u(K),options:g},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{re as _};
