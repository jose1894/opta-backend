import{ag as G,ah as D,at as E,aa as H,y as M,au as J,I as K,o as P,c as Q,w as d,j as h,a as o,d as k,B as p,C as b,u as r,ax as _,aw as O,z as W,g as X}from"./index.e27aaed2.js";import{r as N,m as Y,u as Z}from"./index.esm.6263d8b1.js";import{a as w}from"./activities.service.76eab6f5.js";import{b as ee}from"./bussinesUnit.service.20bca8ab.js";const ae={class:"grid md:grid-cols-3 gap-4"},se={class:"grid md:grid-cols-2 gap-2"},te={style:{display:"flex","justify-content":"space-between"}},re={__name:"FormView",props:{path:"",saveLabel:"",activity:{}},setup(R){const c=R,{t:u}=G(),U=D(),j=E(),B=H();let y=M([]);const $=[{id:1,label:u("message.activity.statuses.active")},{id:0,label:u("message.activity.statuses.inactive")}],V=[{id:0,label:u("message.activity.chargeable")},{id:1,label:u("message.activity.non-chargeable")}],s=M({_id:"",unidadNegocio:y.value,siglas:"",nombre:"",cargable:V[0],estado:$[0]}),F=e=>{const{_id:a,unidadNegocio:l,siglas:t,nombre:i,cargable:m,estado:f}=e.value,g={_id:a,unidadNegocio:l.id,siglas:t,nombre:i,cargable:m.id,estado:f.id};return c.path==="create"?w.create(g):w.update(g)};J(async()=>{var l;let e=await ee.allBussinesUnitGet();const a=e==null?void 0:e.data.unidadesNegocio;if(y.value=a.map(t=>({id:t._id,label:t.nombre})),c.path==="update"){const t=await w.read(j.params);s.value=t.data,s.value.unidadNegocio=I((l=t.data)==null?void 0:l.unidadNegocio),s.value.cargable=V.filter(i=>i.id===t.data.cargable)[0],s.value.estado=$.filter(i=>i.id===t.data.estado)[0]}});const I=e=>({id:e._id,label:(e==null?void 0:e.nombre)||(e==null?void 0:e.descripcion)}),T=K(()=>({siglas:{required:N,maxLength:Y(4)},nombre:{required:N},estado:{required:N}})),v=Z(T,s),q=c.path==="create"?u("message.activity.created.success"):u("message.activity.updated.success"),x=c.path==="create"?u("message.activity.created.error"):u("message.activity.updated.error"),z=async()=>{await v.value.$validate()?F(s).then(()=>{U.success(q),B.push("/setup/activities")}).catch(a=>{var l,t;if((l=a.response.data)!=null&&l.msg){U.error(`${x} ${a.response.data.msg}`);return}if((t=a.response.data)!=null&&t.errors){const i=a.response.data.errors;for(let m of i);}}):console.log("error")},A=()=>B.push("/setup/activities");return(e,a)=>(P(),Q(X,{isForm:"",onSubmit:W(z,["prevent"])},{footer:d(()=>[h("div",te,[o(k,{label:e.$t(`message.${c.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),o(k,{label:e.$t("message.return"),color:"info",onClick:a[5]||(a[5]=l=>A())},null,8,["label"])])]),default:d(()=>{var l,t,i,m,f,g,L,S,C;return[h("div",ae,[o(p,{label:e.$t("message.activity.bussinesUnit")},{default:d(()=>[o(b,{modelValue:s.value.unidadNegocio,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value.unidadNegocio=n),icon:r(_),options:r(y)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(p,{label:e.$t("message.activity.acronyms"),help:(i=(t=(l=r(v))==null?void 0:l.siglas)==null?void 0:t.$errors[0])==null?void 0:i.$message},{default:d(()=>[o(b,{modelValue:s.value.siglas,"onUpdate:modelValue":a[1]||(a[1]=n=>s.value.siglas=n),icon:r(O)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(p,{label:e.$t("message.activity.name"),help:(g=(f=(m=r(v))==null?void 0:m.nombre)==null?void 0:f.$errors[0])==null?void 0:g.$message},{default:d(()=>[o(b,{modelValue:s.value.nombre,"onUpdate:modelValue":a[2]||(a[2]=n=>s.value.nombre=n),icon:r(O)},null,8,["modelValue","icon"])]),_:1},8,["label","help"])]),h("div",se,[o(p,{label:e.$t("message.activity.chargeable")},{default:d(()=>[o(b,{modelValue:s.value.cargable,"onUpdate:modelValue":a[3]||(a[3]=n=>s.value.cargable=n),icon:r(_),options:V},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(p,{label:e.$t("message.activity.status"),help:(C=(S=(L=r(v))==null?void 0:L.estado)==null?void 0:S.$errors[0])==null?void 0:C.$message},{default:d(()=>[o(b,{modelValue:s.value.estado,"onUpdate:modelValue":a[4]||(a[4]=n=>s.value.estado=n),icon:r(_),options:$},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{re as _};