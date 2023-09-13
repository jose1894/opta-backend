import{ag as N,ah as T,at as q,aa as z,y as O,au as A,I as D,o as E,c as G,w as m,j as L,a as o,d as C,B as v,u,C as $,av as H,aw as J,ax as K,z as P,g as Q}from"./index.e27aaed2.js";import{r as b,m as W,u as X}from"./index.esm.6263d8b1.js";import{i as M}from"./itemsMenu.service.6fcbd694.js";const Y={class:"grid md:grid-cols-3 gap-4"},Z={style:{display:"flex","justify-content":"space-between"}},te={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(S){const d=S,{t:r}=N(),h=T(),k=q(),V=z(),g=[{id:1,label:r("message.itemMenu.statuses.active")},{id:0,label:r("message.itemMenu.statuses.inactive")}],a=O({_id:"",codigo:"00",descripcion:"",estado:g[0]}),x=s=>{const{_id:e,codigo:t,descripcion:n,estado:i}=s.value,l={_id:e,codigo:t,descripcion:n,estado:i.id};return d.path==="create"?M.create(l):M.update(l)};A(async()=>{if(d.path==="update"){const s=await M.read(k.params);a.value=s.data,a.value.estado=g.filter(e=>e.id===s.data.estado)[0]}});const R=D(()=>({codigo:{required:b,maxLength:W(3)},descripcion:{required:b},estado:{required:b}})),p=X(R,a),U=d.path==="create"?r("message.itemMenu.created.success"):r("message.itemMenu.updated.success"),j=d.path==="create"?r("message.itemMenu.created.error"):r("message.itemMenu.updated.error"),F=async()=>{await p.value.$validate()?x(a).then(()=>{h.success(U),V.push("/setup/itemsMenu")}).catch(e=>{var t,n,i;if(console.log(e),(n=(t=e.response)==null?void 0:t.data)!=null&&n.msg){h.error(`${j} ${e.response.data.msg}`);return}if((i=e.response.data)!=null&&i.errors){const l=e.response.data.errors;for(let f of l);}}):console.log("error")},I=()=>V.push("/setup/itemsMenu");return(s,e)=>(E(),G(Q,{isForm:"",onSubmit:P(F,["prevent"])},{footer:m(()=>[L("div",Z,[o(C,{label:s.$t(`message.${d.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),o(C,{label:s.$t("message.return"),color:"info",onClick:e[3]||(e[3]=t=>I())},null,8,["label"])])]),default:m(()=>{var t,n,i,l,f,_,w,y,B;return[L("div",Y,[o(v,{label:s.$t("message.itemMenu.code"),help:(i=(n=(t=u(p))==null?void 0:t.codigo)==null?void 0:n.$errors[0])==null?void 0:i.$message},{default:m(()=>[o($,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value.codigo=c),icon:u(H)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(v,{label:s.$t("message.itemMenu.description"),help:(_=(f=(l=u(p))==null?void 0:l.descripcion)==null?void 0:f.$errors[0])==null?void 0:_.$message},{default:m(()=>[o($,{modelValue:a.value.descripcion,"onUpdate:modelValue":e[1]||(e[1]=c=>a.value.descripcion=c),icon:u(J)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(v,{label:s.$t("message.itemMenu.status"),help:(B=(y=(w=u(p))==null?void 0:w.estado)==null?void 0:y.$errors[0])==null?void 0:B.$message},{default:m(()=>[o($,{modelValue:a.value.estado,"onUpdate:modelValue":e[2]||(e[2]=c=>a.value.estado=c),icon:u(K),options:g},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{te as _};
