import{q as _e,af as ye,y as L,ag as Le,as as we,a9 as he,I as Se,at as Fe,o as G,c as Be,w as i,P as k,a as o,d as De,ai as R,j as V,u as s,B as u,C as c,au as ke,av as y,aw as w,r as Y,J as Re,K as Me,E as Oe,z as Ie,g as Pe}from"./index.2b059d96.js";import{r as J,m as Te,u as je}from"./index.esm.a100cd13.js";import{c as ze}from"./cities.service.90aa5314.js";import{s as Ee}from"./states.services.54285fba.js";import{c as K}from"./clients.srvice.03e54cc3.js";import{T as We}from"./TabsComponent.470e7b72.js";import{c as Ne}from"./countries.service.eb26c9b5.js";import{c as qe}from"./cargos.service.49671356.js";import{i as Ae}from"./Industries.service.b05a08d2.js";import{m as Ge}from"./member.service.931fb429.js";const Je={class:"container mx-auto"},Ke={class:"p-1 mt-0 bg-white border"},He={class:"grid md:grid-cols-3 gap-3"},Qe={class:"grid md:grid-cols-3 gap-3"},Xe={class:"btn-add-remove"},Ye={class:"h2-tittle"},Ze=["onClick"],xe=["onClick"],ea={class:"grid md:grid-cols-3 gap-3"},aa={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(Z){const S=Z,{t:f}=ye();L([]);let j=L([]),M=L([]),O=L([]),z=L([]),E=L([]),I=L([]),x="";const B=L(0),ee=a=>{B.value=a},F=[{id:1,label:f("message.yes")},{id:2,label:f("message.no")}];let ae=[{title:f("message.client.tab.client")},{title:f("message.client.tab.contacts")}];const W=[{id:1,label:f("message.client.statuses.active")},{id:0,label:f("message.client.statuses.inactive")},{id:2,label:f("message.client.statuses.deleted")}],r=L({contact:[{nombre:"",apellido:"",cargo:z.value,telefonoOfic:"",telefonoCelu:"",correo:"",cliente:""}]}),l=L({_id:"",codigo:"00",nombre:"",iDFiscal:"",companiaListada:F[0],companiaRegulada:F[0],casaMatriz:"",industria:E.value,pais:j.value,state:M.value,ciudad:O.value,calle:"",paginaWeb:"",direccion:"",miembro:I.value,estado:W[0],contactos:r.value}),N=Le(),le=we(),oe=he(),te=Se(()=>({codigo:{required:J,maxLength:Te(3)},nombre:{required:J},iDFiscal:{required:J}})),P=je(te,l);Fe(async()=>{var U,h;let a=await Ne.index();const e=(a==null?void 0:a.paises)||[];j.value=e.map(n=>({id:n._id,label:n.nombre}));let v=await qe.allCargos();const d=v==null?void 0:v.data.cargos;z.value=d.map(n=>({id:n._id,label:n.nombre}));let b=await Ae.allIndustrias();const g=b==null?void 0:b.data.industrias;E.value=g.map(n=>({id:n._id,label:n.nombre}));let $=await Ge.allMiembrosGet();const C=$==null?void 0:$.data.miembros;if(I.value=C.map(n=>({id:n._id,label:n.nombre})),S.path==="update"){const n=await K.read(le.params);l.value=n.data.cliente,r.value.contact=n.data.contactos,r.value.contact.map(_=>(_.cargo=D(_.cargo),_)),l.value.contactos=r.value;const{cargo:m,estado:p,industria:T,companiaListada:q,companiaRegulada:A}=n.data.cliente;l.value.industria={id:T._id,label:T.nombre},l.value.pais=D((U=n.data.cliente)==null?void 0:U.pais),l.value.estado=W.filter(_=>_.id===p)[0],l.value.companiaListada=F.filter(_=>_.id===q)[0],l.value.companiaRegulada=F.filter(_=>_.id===A)[0],l.value.miembro=D((h=n.data.cliente)==null?void 0:h.miembro),H(l.value.pais,n.data.cliente)}});const D=a=>({id:(a==null?void 0:a._id)||a.id,label:a.nombre}),H=(a,e={})=>{const{id:v}=a;O.value=[],M.value=[],se(v).then(d=>{const b=(d==null?void 0:d.estados)||[];M.value=b.map(g=>({id:g._id,label:g.nombre})),S.path==="update"&&(l.value.state=D(e==null?void 0:e.state),Q(l.value.state,e==null?void 0:e.ciudad))}).catch(d=>{console.log(d)})},se=async a=>await Ee.estadosByPais(a),Q=(a,e={})=>{const{id:v}=a;ne(v).then(d=>{const b=(d==null?void 0:d.ciudades)||[];O.value=b.map(g=>({id:g._id,label:g.nombre})),S.path==="update"&&(l.value.ciudad=D(e))}).catch(d=>{console.log(d)})},ne=async a=>await ze.ciudadesByEstados(a),ie=a=>{const{_id:e,codigo:v,nombre:d,iDFiscal:b,pais:g,state:$,ciudad:C,companiaListada:U,companiaRegulada:h,casaMatriz:n,industria:t,calle:m,paginaWeb:p,direccion:T,miembro:q,estado:A,contactos:_}=a.value,pe=_.contact.map(({_id:ve,nombre:be,apellido:ge,cargo:Ve,telefonoOfic:fe,telefonoCelu:$e,correo:Ce,cliente:Ue})=>({_id:ve,nombre:be,apellido:ge,cargo:Ve.id,telefonoOfic:fe,telefonoCelu:$e,correo:Ce,cliente:Ue})),X={_id:e,codigo:v,nombre:d,iDFiscal:b,pais:g.id,state:$.id,ciudad:C.id,companiaListada:U.id,companiaRegulada:h.id,casaMatriz:n,industria:t.id,calle:m,paginaWeb:p,direccion:T,miembro:q.id,estado:A.id,contactos:pe};return S.path==="create"?K.create(X):K.update(X)},de=S.path==="create"?f("message.client.created.success"):f("message.client.updated.success"),ue=S.path==="create"?f("message.client.created.error"):f("message.client.updated.error"),ce=async a=>{r.value.contact.push({nombre:"",apellido:"",cargo:I.value,telefonoOfic:"",telefonoCelu:"",correo:"",cliente:x})},me=async a=>{console.log("remove***"+a)},re=async()=>{await P.value.$validate()?ie(l).then(()=>{N.success(de),oe.push("/setup/clients")}).catch(e=>{var v,d,b,g;if((d=(v=e.response)==null?void 0:v.data)!=null&&d.msg){N.error(`${ue} ${e.response.data.msg}`);return}if((g=(b=e==null?void 0:e.response)==null?void 0:b.data)!=null&&g.errors){const $=e.response.data.errors,C=Object.keys($).map(function(U,h){const n=$[U];return n.length>1?n.map(t=>n[t]).join():n[0]});C.length>1?C.map(U=>C[U]).join():C[0],N.error("Error al procesar la data")}}):console.log("error")};return(a,e)=>(G(),Be(Pe,{isForm:"",onSubmit:Ie(re,["prevent"])},{footer:i(()=>[k(o(De,{label:a.$t(`message.${S.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),[[R,B.value===1]])]),default:i(()=>[V("div",null,[V("div",Je,[o(We,{tabs:s(ae),onTabClick:ee},{default:i(()=>{var v,d,b,g,$,C,U,h,n;return[V("div",Ke,[k(V("div",null,[V("div",He,[o(u,{label:a.$t("message.client.code"),help:(b=(d=(v=s(P))==null?void 0:v.codigo)==null?void 0:d.$errors[0])==null?void 0:b.$message},{default:i(()=>[o(c,{name:"codigo",modelValue:l.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.codigo=t),icon:s(ke)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(u,{label:a.$t("message.client.name"),help:(C=($=(g=s(P))==null?void 0:g.nombre)==null?void 0:$.$errors[0])==null?void 0:C.$message},{default:i(()=>[o(c,{modelValue:l.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.nombre=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(u,{label:a.$t("message.client.idFiscal"),help:(n=(h=(U=s(P))==null?void 0:U.iDFiscal)==null?void 0:h.$errors[0])==null?void 0:n.$message},{default:i(()=>[o(c,{modelValue:l.value.iDFiscal,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.iDFiscal=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(u,{label:a.$t("message.client.industry")},{default:i(()=>[o(c,{modelValue:l.value.industria,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.industria=t),icon:s(w),options:s(E)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.listedCompany")},{default:i(()=>[o(c,{modelValue:l.value.companiaListada,"onUpdate:modelValue":e[4]||(e[4]=t=>l.value.companiaListada=t),icon:s(w),options:F},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.regulatedCompany")},{default:i(()=>[o(c,{modelValue:l.value.companiaRegulada,"onUpdate:modelValue":e[5]||(e[5]=t=>l.value.companiaRegulada=t),icon:s(w),options:F},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.parentCompany")},{default:i(()=>[o(c,{modelValue:l.value.casaMatriz,"onUpdate:modelValue":e[6]||(e[6]=t=>l.value.casaMatriz=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.country")},{default:i(()=>[o(c,{modelValue:l.value.pais,"onUpdate:modelValue":e[7]||(e[7]=t=>l.value.pais=t),icon:s(w),options:s(j),onOnSelectChange:H},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.state")},{default:i(()=>[o(c,{modelValue:l.value.state,"onUpdate:modelValue":e[8]||(e[8]=t=>l.value.state=t),icon:s(w),options:s(M),onOnSelectChange:Q},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.city")},{default:i(()=>[o(c,{modelValue:l.value.ciudad,"onUpdate:modelValue":e[9]||(e[9]=t=>l.value.ciudad=t),icon:s(w),options:s(O)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.street")},{default:i(()=>[o(c,{modelValue:l.value.calle,"onUpdate:modelValue":e[10]||(e[10]=t=>l.value.calle=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.paginaWeb")},{default:i(()=>[o(c,{modelValue:l.value.paginaWeb,"onUpdate:modelValue":e[11]||(e[11]=t=>l.value.paginaWeb=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),V("div",Qe,[o(u,{label:a.$t("message.client.address")},{default:i(()=>[o(c,{modelValue:l.value.direccion,"onUpdate:modelValue":e[12]||(e[12]=t=>l.value.direccion=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.membership")},{default:i(()=>[o(c,{modelValue:l.value.miembro,"onUpdate:modelValue":e[13]||(e[13]=t=>l.value.miembro=t),icon:s(w),options:s(I)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),o(u,{label:a.$t("message.client.status")},{default:i(()=>[o(c,{modelValue:l.value.estado,"onUpdate:modelValue":e[14]||(e[14]=t=>l.value.estado=t),icon:s(w),options:W},null,8,["modelValue","icon"])]),_:1},8,["label"])])],512),[[R,B.value===0]]),k(V("div",null,[(G(!0),Y(Re,null,Me(r.value.contact,(t,m)=>(G(),Y("div",{key:m},[V("div",Xe,[V("h2",Ye,"Contacto. "+Oe(m+1),1),V("button",{type:"button",class:"btn-add-referidos",onClick:p=>ce(m)}," + ",8,Ze),k(V("button",{type:"button",class:"btn-remove-referidos",onClick:p=>me(m)}," - ",8,xe),[[R,m>0]])]),V("div",ea,[o(u,{label:a.$t("message.client.name")},{default:i(()=>[o(c,{modelValue:r.value.contact[m].nombre,"onUpdate:modelValue":p=>r.value.contact[m].nombre=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),o(u,{label:a.$t("message.client.lastName")},{default:i(()=>[o(c,{modelValue:r.value.contact[m].apellido,"onUpdate:modelValue":p=>r.value.contact[m].apellido=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),o(u,{label:a.$t("message.client.jobPosition")},{default:i(()=>[o(c,{modelValue:r.value.contact[m].cargo,"onUpdate:modelValue":p=>r.value.contact[m].cargo=p,icon:s(w),options:s(z)},null,8,["modelValue","onUpdate:modelValue","icon","options"])]),_:2},1032,["label"]),o(u,{label:a.$t("message.client.officePhone")},{default:i(()=>[o(c,{modelValue:r.value.contact[m].telefonoOfic,"onUpdate:modelValue":p=>r.value.contact[m].telefonoOfic=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),o(u,{label:a.$t("message.client.movilPhone")},{default:i(()=>[o(c,{modelValue:r.value.contact[m].telefonoCelu,"onUpdate:modelValue":p=>r.value.contact[m].telefonoCelu=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),o(u,{label:a.$t("message.client.email")},{default:i(()=>[o(c,{modelValue:r.value.contact[m].correo,"onUpdate:modelValue":p=>r.value.contact[m].correo=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"])])]))),128))],512),[[R,B.value===1]]),k(V("div",null,null,512),[[R,B.value===2]])])]}),_:1},8,["tabs"])])])]),_:1},8,["onSubmit"]))}},va=_e(aa,[["__scopeId","data-v-433e0291"]]);export{va as F};
