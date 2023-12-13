import{r as _,u as H,ak as J,au as K,ae as Q,aL as Y,g as W,ax as X,o as Z,c as ee,a as u,b as h,i as t,p as d,_ as v,ay as ae,aM as se,az as y,ar as S,j as oe}from"./index.49b91a9a.js";import{r as B,u as te}from"./index.esm.8382ed57.js";import{b as le,a as R,_ as re}from"./BaseButton.84fe76a1.js";import{_ as p}from"./FormField.03a460a3.js";import{b as ie}from"./bussinesUnit.service.c7746c1b.js";import{c as ne}from"./categories.service.52f3f3b7.js";import{r as k}from"./rates.service.0b47262a.js";const de={class:"container mx-auto"},ue={class:"grid md:grid-cols-3 gap-3"},ce={class:"grid md:grid-cols-2 gap-2"},me={style:{display:"flex","justify-content":"space-between"}},ge={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(j){const b=j,T=_({date:"DD-MM-YYYY",month:"MMM"}),{t:V}=H(),D=J(),A=K(),C=Q();let w=_([]),M=_([]),L=_([!1]);const N=[{id:1,label:V("message.rate.statuses.active")},{id:0,label:V("message.rate.statuses.inactive")}],a=_({_id:"",codigo:"00",fecha:Y(new Date,"DD-MM-YYYY").format("DD-MM-YYYY"),siglas:"",categoria:M.value,unidadNegocio:w.value,actual:0,anterior:0,estado:N[0]}),I=W(()=>({codigo:{required:B},fecha:{required:B},siglas:{required:B}})),U=te(I,a);X(async()=>{var i,r;let s=await ie.allBussinesUnitGet();const e=(s==null?void 0:s.data.unidadesNegocio)||[];if(w.value=e.map(o=>({id:o._id,label:o.nombre})),b.path==="update"){const o=await k.read(A.params),n="DD-MM-YYYY",c=Y(o.data.fecha).format(n);a.value=o.data,a.value.fecha=c,a.value.unidadNegocio=F((i=o.data)==null?void 0:i.unidadNegocio),a.value.estado=N.filter(f=>f.id===o.data.estado)[0],O(a.value.unidadNegocio,(r=o.data)==null?void 0:r.categoria);const m=Y(a.value.fecha,n),g=Y(new Date,n);L.value=g.isAfter(m),console.log(L)}});const F=s=>({id:s._id,label:s.nombre}),O=(s,e={})=>{const{id:i}=s;M.value=[],q(i).then(r=>{const o=r.data.categorias||[];M.value=o.map(n=>({id:n._id,label:n.nombre})),b.path==="update"&&(a.value.categoria=F(e))}).catch(r=>{console.log(r)})},q=async s=>await ne.categoriasPorUnidadNegocio(s),z=s=>{const{_id:e,codigo:i,fecha:r,siglas:o,unidadNegocio:n,categoria:c,actual:m,anterior:g,estado:f}=s.value,$={_id:e,codigo:i,fecha:r.undefined,siglas:o.toUpperCase(),unidadNegocio:n.id,categoria:c.id,actual:m,anterior:g,estado:f.id};return b.path==="create"?($.fecha=Y(new Date,"DD-MM-YYYY").format("DD-MM-YYYY"),k.create($)):k.update($)},E=b.path==="create"?V("message.rate.created.success"):V("message.rate.updated.success"),G=b.path==="create"?V("message.rate.created.error"):V("message.rate.updated.error"),P=async()=>{await U.value.$validate()?z(a).then(()=>{D.success(E),C.push("/setup/rates")}).catch(e=>{var i,r,o;if((r=(i=e.response)==null?void 0:i.data)!=null&&r.msg){D.error(`${G} ${e.response.data.msg}`);return}if((o=e.response.data)!=null&&o.errors){const n=e.response.data.errors;let c="";for(let m of Object.values(n))m.forEach(function(g,f){c+=g});D.error(`${c}`)}}):console.log("error")},x=()=>C.push("/setup/rates");return(s,e)=>(Z(),ee(re,{isForm:"",onSubmit:oe(P,["prevent"])},{footer:u(()=>[h("div",me,[t(R,{label:s.$t(`message.${b.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),t(R,{label:s.$t("message.return"),color:"info",onClick:e[8]||(e[8]=i=>x())},null,8,["label"])])]),default:u(()=>{var i,r,o,n,c,m,g,f,$;return[h("div",null,[h("div",de,[h("div",ue,[t(p,{label:s.$t("message.rate.code"),help:(o=(r=(i=d(U))==null?void 0:i.codigo)==null?void 0:r.$errors[0])==null?void 0:o.$message},{default:u(()=>[t(v,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.codigo=l),icon:d(ae)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(p,{label:s.$t("message.rate.date")},{default:u(()=>[t(d(se),{class:"h-12 border-gray-700",formatter:T.value,"as-single":"",modelValue:a.value.fecha,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.fecha=l),disabled:!0},null,8,["formatter","modelValue"])]),_:1},8,["label"]),t(p,{label:s.$t("message.rate.acronyms"),help:(m=(c=(n=d(U))==null?void 0:n.siglas)==null?void 0:c.$errors[0])==null?void 0:m.$message},{default:u(()=>[t(v,{modelValue:a.value.siglas,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.siglas=l),icon:d(y)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(p,{label:s.$t("message.rate.businessUnit")},{default:u(()=>[t(v,{modelValue:a.value.unidadNegocio,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value.unidadNegocio=l),icon:d(S),options:d(w),onOnSelectChange:O},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(p,{label:s.$t("message.rate.categories")},{default:u(()=>[t(v,{modelValue:a.value.categoria,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.categoria=l),icon:d(S),options:d(M)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(p,{label:s.$t("message.rate.currentRate")},{default:u(()=>[t(v,{modelValue:a.value.actual,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.actual=l),icon:d(y)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),h("div",ce,[t(p,{label:s.$t("message.rate.previousRate")},{default:u(()=>[t(v,{modelValue:a.value.anterior,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.anterior=l),icon:d(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),t(p,{label:s.$t("message.rate.status"),help:($=(f=(g=d(U))==null?void 0:g.estado)==null?void 0:f.$errors[0])==null?void 0:$.$message},{default:u(()=>[t(v,{modelValue:a.value.estado,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.estado=l),icon:d(S),options:N},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])])])]}),_:1},8,["onSubmit"]))}},Ye=le(ge,[["__scopeId","data-v-937bf8ff"]]);export{Ye as F};
