import{q as K,y as _,af as P,ag as E,as as H,a9 as Q,I as W,at as X,aJ as y,o as Z,c as x,w as u,a as t,d as ee,j as w,B as c,u as d,C as p,au as ae,aK as se,av as B,aw as S,z as oe,g as te}from"./index.94f69dfc.js";import{r as Y,u as le}from"./index.esm.8eaf8d5b.js";import{b as ie}from"./bussinesUnit.service.435050ca.js";import{c as re}from"./categories.service.72ce0a67.js";import{r as C}from"./rates.service.3d4d5b7f.js";const de={class:"container mx-auto"},ne={class:"grid md:grid-cols-3 gap-3"},ue={class:"grid md:grid-cols-2 gap-2"},ce={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(k){const f=k,O=_({date:"DD-MM-YYYY",month:"MMM"}),{t:m}=P(),D=E(),I=H(),q=Q();let N=_([]),h=_([]),F=_([!1]);const M=[{id:1,label:m("message.rate.statuses.active")},{id:0,label:m("message.rate.statuses.inactive")},{id:2,label:m("message.rate.statuses.deleted")}],a=_({_id:"",codigo:"00",fecha:new Date,siglas:"",categoria:h.value,unidadNegocio:N.value,actual:0,anterior:0,estado:M[0]}),A=W(()=>({codigo:{required:Y},fecha:{required:Y},siglas:{required:Y}})),U=le(A,a);X(async()=>{var n,i;let s=await ie.allBussinesUnitGet();const e=(s==null?void 0:s.data.unidadesNegocio)||[];if(N.value=e.map(o=>({id:o._id,label:o.nombre})),f.path==="update"){const o=await C.read(I.params),r="DD-MM-YYYY",g=y(o.data.fecha).format(r);a.value=o.data,a.value.fecha=g,a.value.unidadNegocio=L((n=o.data)==null?void 0:n.unidadNegocio),a.value.estado=M.filter(V=>V.id===o.data.estado)[0],R(a.value.unidadNegocio,(i=o.data)==null?void 0:i.categoria);const v=y(a.value.fecha,r),b=y(new Date,r);F.value=b.isAfter(v),console.log(F)}});const L=s=>({id:s._id,label:s.nombre}),R=(s,e={})=>{const{id:n}=s;h.value=[],T(n).then(i=>{const o=i.data.categorias||[];h.value=o.map(r=>({id:r._id,label:r.nombre})),f.path==="update"&&(a.value.categoria=L(e))}).catch(i=>{console.log(i)})},T=async s=>await re.categoriasPorUnidadNegocio(s),j=s=>{const{_id:e,codigo:n,fecha:i,siglas:o,unidadNegocio:r,categoria:g,actual:v,anterior:b,estado:V}=s.value,$={_id:e,codigo:n,fecha:i.undefined,siglas:o.toUpperCase(),unidadNegocio:r.id,categoria:g.id,actual:v,anterior:b,estado:V.id};return f.path==="create"?C.create($):C.update($)},z=f.path==="create"?m("message.rate.created.success"):m("message.rate.updated.success"),G=f.path==="create"?m("message.rate.created.error"):m("message.rate.updated.error"),J=async()=>{await U.value.$validate()?j(a).then(()=>{D.success(z),q.push("/setup/rates")}).catch(e=>{var n,i,o;if((i=(n=e.response)==null?void 0:n.data)!=null&&i.msg){D.error(`${G} ${e.response.data.msg}`);return}if((o=e.response.data)!=null&&o.errors){const r=e.response.data.errors;for(let g of r);}}):console.log("error")};return(s,e)=>(Z(),x(te,{isForm:"",onSubmit:oe(J,["prevent"])},{footer:u(()=>[t(ee,{label:s.$t(`message.${f.saveLabel}`),type:"submit",color:"success"},null,8,["label"])]),default:u(()=>{var n,i,o,r,g,v,b,V,$;return[w("div",null,[w("div",de,[w("div",ne,[t(c,{label:s.$t("message.rate.code"),help:(o=(i=(n=d(U))==null?void 0:n.codigo)==null?void 0:i.$errors[0])==null?void 0:o.$message},{default:u(()=>[t(p,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value.codigo=l),icon:d(ae)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(c,{label:s.$t("message.rate.date")},{default:u(()=>[t(d(se),{class:"h-12 border-gray-700",formatter:O.value,"as-single":"",modelValue:a.value.fecha,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.fecha=l),disabled:!0},null,8,["formatter","modelValue"])]),_:1},8,["label"]),t(c,{label:s.$t("message.rate.acronyms"),help:(v=(g=(r=d(U))==null?void 0:r.siglas)==null?void 0:g.$errors[0])==null?void 0:v.$message},{default:u(()=>[t(p,{modelValue:a.value.siglas,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value.siglas=l),icon:d(B)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(c,{label:s.$t("message.rate.businessUnit")},{default:u(()=>[t(p,{modelValue:a.value.unidadNegocio,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value.unidadNegocio=l),icon:d(S),options:d(N),onOnSelectChange:R},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(c,{label:s.$t("message.rate.categories")},{default:u(()=>[t(p,{modelValue:a.value.categoria,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value.categoria=l),icon:d(S),options:d(h)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(c,{label:s.$t("message.rate.currentRate")},{default:u(()=>[t(p,{modelValue:a.value.actual,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.actual=l),icon:d(B)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),w("div",ue,[t(c,{label:s.$t("message.rate.previousRate")},{default:u(()=>[t(p,{modelValue:a.value.anterior,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.anterior=l),icon:d(B)},null,8,["modelValue","icon"])]),_:1},8,["label"]),t(c,{label:s.$t("message.rate.status"),help:($=(V=(b=d(U))==null?void 0:b.estado)==null?void 0:V.$errors[0])==null?void 0:$.$message},{default:u(()=>[t(p,{modelValue:a.value.estado,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.estado=l),icon:d(S),options:M},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])])])]}),_:1},8,["onSubmit"]))}},be=K(ce,[["__scopeId","data-v-afbc2afe"]]);export{be as F};
