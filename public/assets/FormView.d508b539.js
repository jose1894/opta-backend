import{u as I,ak as D,au as E,ae as H,r as M,ax as J,g as K,o as P,c as Q,a as d,b as _,i as o,_ as p,p as n,ar as h,az as C,j as W}from"./index.4a61edd7.js";import{a as O,_ as X}from"./BaseButton.d111364f.js";import{_ as b}from"./FormField.929b004e.js";import{r as N,m as Y,u as Z}from"./index.esm.7fbc5eb8.js";import{a as U}from"./activities.service.d9c95a8a.js";import{b as ee}from"./bussinesUnit.service.772f99ff.js";const ae={class:"grid md:grid-cols-3 gap-4"},se={class:"grid md:grid-cols-2 gap-2"},te={style:{display:"flex","justify-content":"space-between"}},de={__name:"FormView",props:{path:"",saveLabel:"",activity:{}},setup(R){const c=R,{t:u}=I(),w=D(),j=E(),L=H();let $=M([]);const y=[{id:1,label:u("message.activity.statuses.active")},{id:0,label:u("message.activity.statuses.inactive")}],V=[{id:0,label:u("message.activity.chargeable")},{id:1,label:u("message.activity.non-chargeable")}],s=M({_id:"",unidadNegocio:$.value,siglas:"",nombre:"",cargable:V[0],estado:y[0]}),F=e=>{const{_id:a,unidadNegocio:l,siglas:t,nombre:i,cargable:m,estado:f}=e.value,g={_id:a,unidadNegocio:l.id,siglas:t,nombre:i,cargable:m.id,estado:f.id};return c.path==="create"?U.create(g):U.update(g)};J(async()=>{var l;let e=await ee.allBussinesUnitGet();const a=e==null?void 0:e.data.unidadesNegocio;if($.value=a.map(t=>({id:t._id,label:t.nombre})),c.path==="update"){const t=await U.read(j.params);s.value=t.data,s.value.unidadNegocio=T((l=t.data)==null?void 0:l.unidadNegocio),s.value.cargable=V.filter(i=>i.id===t.data.cargable)[0],s.value.estado=y.filter(i=>i.id===t.data.estado)[0]}});const T=e=>({id:e._id,label:(e==null?void 0:e.nombre)||(e==null?void 0:e.descripcion)}),q=K(()=>({siglas:{required:N,maxLength:Y(4)},nombre:{required:N},estado:{required:N}})),v=Z(q,s),x=c.path==="create"?u("message.activity.created.success"):u("message.activity.updated.success"),z=c.path==="create"?u("message.activity.created.error"):u("message.activity.updated.error"),A=async()=>{await v.value.$validate()?F(s).then(()=>{w.success(x),L.push("/setup/activities")}).catch(a=>{var l,t;if((l=a.response.data)!=null&&l.msg){w.error(`${z} ${a.response.data.msg}`);return}if((t=a.response.data)!=null&&t.errors){const i=a.response.data.errors;for(let m of i);}}):console.log("error")},G=()=>L.push("/setup/activities");return(e,a)=>(P(),Q(X,{isForm:"",onSubmit:W(A,["prevent"])},{footer:d(()=>[_("div",te,[o(O,{label:e.$t(`message.${c.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),o(O,{label:e.$t("message.return"),color:"info",onClick:a[5]||(a[5]=l=>G())},null,8,["label"])])]),default:d(()=>{var l,t,i,m,f,g,S,B,k;return[_("div",ae,[o(b,{label:e.$t("message.activity.bussinesUnit")},{default:d(()=>[o(p,{modelValue:s.value.unidadNegocio,"onUpdate:modelValue":a[0]||(a[0]=r=>s.value.unidadNegocio=r),icon:n(h),options:n($)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(b,{label:e.$t("message.activity.acronyms"),help:(i=(t=(l=n(v))==null?void 0:l.siglas)==null?void 0:t.$errors[0])==null?void 0:i.$message},{default:d(()=>[o(p,{modelValue:s.value.siglas,"onUpdate:modelValue":a[1]||(a[1]=r=>s.value.siglas=r),icon:n(C)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(b,{label:e.$t("message.activity.name"),help:(g=(f=(m=n(v))==null?void 0:m.nombre)==null?void 0:f.$errors[0])==null?void 0:g.$message},{default:d(()=>[o(p,{modelValue:s.value.nombre,"onUpdate:modelValue":a[2]||(a[2]=r=>s.value.nombre=r),icon:n(C)},null,8,["modelValue","icon"])]),_:1},8,["label","help"])]),_("div",se,[o(b,{label:e.$t("message.activity.chargeable")},{default:d(()=>[o(p,{modelValue:s.value.cargable,"onUpdate:modelValue":a[3]||(a[3]=r=>s.value.cargable=r),icon:n(h),options:V},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(b,{label:e.$t("message.activity.status"),help:(k=(B=(S=n(v))==null?void 0:S.estado)==null?void 0:B.$errors[0])==null?void 0:k.$message},{default:d(()=>[o(p,{modelValue:s.value.estado,"onUpdate:modelValue":a[4]||(a[4]=r=>s.value.estado=r),icon:n(h),options:y},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{de as _};