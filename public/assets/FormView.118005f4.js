import{u as de,r as $,ak as ue,au as re,ae as me,g as ce,ax as pe,o as E,c as ge,a as r,b as t,d as F,i as s,S,N as be,_ as c,p as i,ay as ve,az as f,ar as U,t as h,h as q,F as fe,k as Ve,j as ye}from"./index.4a61edd7.js";import{r as G,u as $e}from"./index.esm.7fbc5eb8.js";import{b as Ce,a as H,_ as _e}from"./BaseButton.d111364f.js";import{_ as p}from"./FormField.929b004e.js";import{c as he}from"./cities.service.41736be5.js";import{s as we}from"./states.services.fd43ec79.js";import{a as M}from"./allies.service.d884bc4f.js";import{T as Fe}from"./TabsComponent.16d3eafa.js";import{c as Se}from"./countries.service.9dee6dae.js";import{c as Ue}from"./cargos.service.17a4bcf1.js";const Be={class:"container mx-auto"},ke={class:"p-1 mt-0 bg-white border"},De={class:"grid md:grid-cols-3 gap-3"},Oe={class:"grid md:grid-cols-2 gap-3"},We={class:"grid gap-3"},Le={class:"grid md:grid-cols-2 gap-2"},Te={class:"grid md:grid-cols-2 gap-2"},Ae={class:"grid md:grid-cols-2 gap-2"},je=["data-label"],Ee=["data-label"],Me=["data-label"],Ne={style:{display:"flex","justify-content":"space-between"}},Pe={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(O){const V=O,{t:C}=de();$([]);let W=$([]),B=$([]),k=$([]),L=$([]);const w=$(0),J=l=>{w.value=l},K=[{title:"Aliado"},{title:"Contacto"},{title:"Referidos"}],T=[{id:1,label:C("message.ally.statuses.active")},{id:0,label:C("message.ally.statuses.inactive")}],a=$({_id:"",codigo:"00",nombre:"",iDFiscal:"",pais:W.value,state:B.value,ciudad:k.value,direccionAliado:"",paginaWeb:"",nombreContact:"",apellidoContact:"",cargo:L.value,telefonoOfic:"",telefonoCelu:"",correoContact:"",referido:[],estado:T[0]}),A=ue(),Q=re(),N=me(),X=ce(()=>({nombre:{required:G},iDFiscal:{required:G}})),D=$e(X,a);pe(async()=>{let l=await Se.index();const e=(l==null?void 0:l.paises)||[];W.value=e.map(u=>({id:u._id,label:u.nombre}));let m=await Ue.allCargos();const n=m==null?void 0:m.data.cargos;if(L.value=n.map(u=>({id:u._id,label:u.nombre})),V.path==="update"){const u=await M.read(Q.params),{aliado:d,referidos:g}=u.data;a.value=d;const{cargo:b,estado:y}=d;a.value.cargo={id:b._id,label:b.nombre},a.value.pais=j(d==null?void 0:d.pais),a.value.estado=T.filter(v=>v.id===y)[0],a.value.referidos=g,P(a.value.pais,d),console.log(a)}});const j=l=>({id:l._id,label:l.nombre}),P=(l,e={})=>{const{id:m}=l;k.value=[],B.value=[],Y(m).then(n=>{const u=(n==null?void 0:n.estados)||[];B.value=u.map(d=>({id:d._id,label:d.nombre})),V.path==="update"&&(a.value.state=j(e==null?void 0:e.state),R(a.value.state,e==null?void 0:e.ciudad))}).catch(n=>{console.log(n)})},Y=async l=>await we.estadosByPais(l),R=(l,e={})=>{const{id:m}=l;Z(m).then(n=>{const u=(n==null?void 0:n.ciudades)||[];k.value=u.map(d=>({id:d._id,label:d.nombre})),V.path==="update"&&(a.value.ciudad=j(e))}).catch(n=>{console.log(n)})},Z=async l=>await he.ciudadesByEstados(l),x=l=>{const{_id:e,codigo:m,nombre:n,iDFiscal:u,pais:d,state:g,ciudad:b,direccionAliado:y,paginaWeb:v,nombreContact:_,apellidoContact:o,cargo:z,telefonoOfic:se,telefonoCelu:te,correoContact:ie,estado:ne}=l.value,I={_id:e,codigo:m,nombre:n,iDFiscal:u,pais:d.id,state:g.id,ciudad:b.id,direccionAliado:y,paginaWeb:v,nombreContact:_,apellidoContact:o,cargo:z.id,telefonoOfic:se,telefonoCelu:te,correoContact:ie,estado:ne.id};return V.path==="create"?M.create(I):M.update(I)},ee=V.path==="create"?C("message.ally.created.success"):C("message.ally.updated.success"),ae=V.path==="create"?C("message.ally.created.error"):C("message.ally.updated.error"),le=async()=>{await D.value.$validate()?x(a).then(()=>{A.success(ee),N.push("/setup/allies")}).catch(e=>{var m,n,u;if((n=(m=e.response)==null?void 0:m.data)!=null&&n.msg){A.error(`${ae} ${e.response.data.msg}`);return}if((u=e.response.data)!=null&&u.errors){const d=e.response.data.errors,g=Object.keys(d).map(function(b,y){const v=d[b];return v.length>1?v.map(_=>v[_]).join():v[0]});console.log(g.length,g),g.length>1?g.map(b=>g[b]).join():g[0],A.error("Error al procesar la data")}}):console.log("error")},oe=()=>N.push("/setup/allies");return(l,e)=>(E(),ge(_e,{isForm:"",onSubmit:ye(le,["prevent"])},{footer:r(()=>[t("div",Ne,[F(s(H,{label:l.$t(`message.${V.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),[[S,w.value===1]]),s(H,{label:l.$t("message.return"),color:"info",onClick:e[15]||(e[15]=m=>oe())},null,8,["label"])])]),default:r(()=>[t("div",null,[t("div",Be,[s(Fe,{tabs:K,onTabClick:J},{default:r(()=>{var m,n,u,d,g,b,y,v,_;return[t("div",ke,[F(t("div",null,[t("div",{class:be(O.path!=="create"?"grid md:grid-cols-3 gap-3":"grid md:grid-cols-2 gap-3")},[F(s(p,{label:l.$t("message.ally.code")},{default:r(()=>[s(c,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.codigo=o),icon:i(ve),readonly:"true"},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[S,O.path!=="create"]]),s(p,{label:l.$t("message.ally.name"),help:(u=(n=(m=i(D))==null?void 0:m.nombre)==null?void 0:n.$errors[0])==null?void 0:u.$message},{default:r(()=>[s(c,{modelValue:a.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.nombre=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),s(p,{label:l.$t("message.ally.idFiscal"),help:(b=(g=(d=i(D))==null?void 0:d.iDFiscal)==null?void 0:g.$errors[0])==null?void 0:b.$message},{default:r(()=>[s(c,{modelValue:a.value.iDFiscal,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.iDFiscal=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label","help"])],2),t("div",De,[s(p,{label:l.$t("message.ally.country")},{default:r(()=>[s(c,{modelValue:a.value.pais,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.pais=o),icon:i(U),options:i(W),onOnSelectChange:P},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),s(p,{label:l.$t("message.ally.state")},{default:r(()=>[s(c,{modelValue:a.value.state,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.state=o),icon:i(U),options:i(B),onOnSelectChange:R},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),s(p,{label:l.$t("message.ally.city")},{default:r(()=>[s(c,{modelValue:a.value.ciudad,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value.ciudad=o),icon:i(U),options:i(k)},null,8,["modelValue","icon","options"])]),_:1},8,["label"])]),t("div",Oe,[s(p,{label:l.$t("message.ally.paginaWeb"),help:(_=(v=(y=i(D))==null?void 0:y.paginaWeb)==null?void 0:v.$errors[0])==null?void 0:_.$message},{default:r(()=>[s(c,{modelValue:a.value.paginaWeb,"onUpdate:modelValue":e[6]||(e[6]=o=>a.value.paginaWeb=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),s(p,{label:l.$t("message.ally.status")},{default:r(()=>[s(c,{modelValue:a.value.estado,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value.estado=o),icon:i(U),options:T},null,8,["modelValue","icon"])]),_:1},8,["label"])]),t("div",We,[s(p,{label:l.$t("message.ally.address")},{default:r(()=>[s(c,{type:"textarea",modelValue:a.value.direccionAliado,"onUpdate:modelValue":e[8]||(e[8]=o=>a.value.direccionAliado=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label"])])],512),[[S,w.value===0]]),F(t("div",null,[t("div",Le,[s(p,{label:l.$t("message.ally.name")},{default:r(()=>[s(c,{modelValue:a.value.nombreContact,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value.nombreContact=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label"]),s(p,{label:l.$t("message.ally.lastName")},{default:r(()=>[s(c,{modelValue:a.value.apellidoContact,"onUpdate:modelValue":e[10]||(e[10]=o=>a.value.apellidoContact=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),t("div",Te,[s(p,{label:l.$t("message.ally.cargo")},{default:r(()=>[s(c,{modelValue:a.value.cargo,"onUpdate:modelValue":e[11]||(e[11]=o=>a.value.cargo=o),icon:i(U),options:i(L)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),s(p,{label:l.$t("message.ally.officePhone")},{default:r(()=>[s(c,{modelValue:a.value.telefonoOfic,"onUpdate:modelValue":e[12]||(e[12]=o=>a.value.telefonoOfic=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),t("div",Ae,[s(p,{label:l.$t("message.ally.movilPhone")},{default:r(()=>[s(c,{modelValue:a.value.telefonoCelu,"onUpdate:modelValue":e[13]||(e[13]=o=>a.value.telefonoCelu=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label"]),s(p,{label:l.$t("message.ally.email")},{default:r(()=>[s(c,{modelValue:a.value.correoContact,"onUpdate:modelValue":e[14]||(e[14]=o=>a.value.correoContact=o),icon:i(f)},null,8,["modelValue","icon"])]),_:1},8,["label"])])],512),[[S,w.value===1]]),F(t("div",null,[t("table",null,[t("thead",null,[t("tr",null,[t("th",null,h(l.$t("message.member.id")),1),t("th",null,h(l.$t("message.member.name")),1),t("th",null,h(l.$t("message.member.paginaWeb")),1)])]),t("tbody",null,[(E(!0),q(fe,null,Ve(a.value.referidos,(o,z)=>(E(),q("tr",{key:o._id},[t("td",{"data-label":l.$t("message.member.id")},h(o.iDFiscal),9,je),t("td",{"data-label":l.$t("message.member.name")},h(o.nombre),9,Ee),t("td",{"data-label":l.$t("message.member.paginaWeb")},h(o.paginaWeb),9,Me)]))),128))])])],512),[[S,w.value===2]])])]}),_:1})])])]),_:1},8,["onSubmit"]))}},Ye=Ce(Pe,[["__scopeId","data-v-6f407c4f"]]);export{Ye as F};
