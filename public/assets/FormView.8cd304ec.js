import{as as Ce,at as Ue,u as he,r as U,ak as we,au as Se,ae as Le,g as De,ax as Fe,o as H,c as ke,a as u,b as g,d as S,i as t,S as L,p as s,N as Be,_ as p,ay as Re,az as _,ar as h,h as te,F as je,k as Me,t as Oe,j as Te}from"./index.cc1855cb.js";import{r as oe,u as ze}from"./index.esm.b52ce059.js";import{b as Ie,a as se,_ as Pe}from"./BaseButton.00025e8c.js";import{_ as v}from"./FormField.c25f55fc.js";import{c as Ee}from"./cities.service.4e261c34.js";import{s as Ne}from"./states.services.9fb68361.js";import{c as G}from"./clients.srvice.24598323.js";import{T as We}from"./TabsComponent.7dba70eb.js";import{c as qe}from"./countries.service.347a35f9.js";import{c as Ae}from"./cargos.service.b567f2a2.js";import{i as He}from"./Industries.service.3853f8e6.js";const Ge="api/contactos",Je={delete(k){return new Promise((C,V)=>{Ce.delete(`${Ge}/${k}`,{headers:Ue()}).then(w=>C(w.data)).catch(w=>V(w))})}};const Ke={class:"container mx-auto"},Qe={class:"p-1 mt-0 bg-white border"},Xe={class:"grid md:grid-cols-3 gap-3"},Ye={class:"grid md:grid-cols-2 gap-2"},Ze={class:"grid md:grid-cols-2 gap-2"},xe={class:"grid gap-1"},ea={class:"btn-add-remove"},aa={class:"h2-tittle"},la=["onClick"],ta=["onClick"],oa={class:"grid md:grid-cols-3 gap-3"},sa={style:{display:"flex","justify-content":"space-between"}},na={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(k){const C=k,{t:V}=he();U([]);let w=U([]),R=U([]),j=U([]),M=U([]),z=U([]);const B=U(0),ne=e=>{B.value=e},D=[{id:1,label:V("message.yes")},{id:2,label:V("message.no")}];let ie=[{title:V("message.client.tab.client")},{title:V("message.client.tab.contacts")}];const I=[{id:1,label:V("message.client.statuses.active")},{id:0,label:V("message.client.statuses.inactive")}],n=U({contact:[{_id:"",nombre:"",apellido:"",cargo:M.value,telefonoOfic:"",telefonoCelu:"",correo:"",cliente:"",action:"create"}]}),l=U({_id:"",codigo:"00",nombre:"",iDFiscal:"",companiaListada:D[0],companiaRegulada:D[0],casaMatriz:"",industria:z.value,pais:w.value,state:R.value,ciudad:j.value,calle:"",paginaWeb:"",direccion:"",estado:I[0],contactos:n.value}),O=we(),de=Se(),J=Le(),ce=De(()=>({nombre:{required:oe},iDFiscal:{required:oe}})),P=ze(ce,l);Fe(async()=>{var y;let e=await qe.index();const a=(e==null?void 0:e.paises)||[];w.value=a.map(d=>({id:d._id,label:d.nombre}));let b=await Ae.allCargos();const i=b==null?void 0:b.data.cargos;M.value=i.map(d=>({id:d._id,label:d.nombre}));let c=await He.allIndustrias();const f=c==null?void 0:c.data.industrias;if(z.value=f.map(d=>({id:d._id,label:d.nombre})),C.path==="update"){const d=await G.read(de.params);l.value=d.data.cliente,n.value.contact=d.data.contactos,n.value.contact.map($=>($.cargo=T($.cargo),$)),n.value.contact.length===0&&(E(),n.value.contact[0].cliente=l.value._id),l.value.contactos=n.value;const{cargo:r,estado:m,industria:F,companiaListada:N,companiaRegulada:W}=d.data.cliente;l.value.industria={id:F._id,label:F.nombre},l.value.pais=T((y=d.data.cliente)==null?void 0:y.pais),l.value.estado=I.filter($=>$.id===m)[0],l.value.companiaListada=D.filter($=>$.id===N)[0],l.value.companiaRegulada=D.filter($=>$.id===W)[0],K(l.value.pais,d.data.cliente)}else n.value.contact=[],E()});const T=e=>({id:(e==null?void 0:e._id)||(e==null?void 0:e.id),label:e==null?void 0:e.nombre}),K=(e,a={})=>{const{id:b}=e;j.value=[],R.value=[],ue(b).then(i=>{const c=(i==null?void 0:i.estados)||[];R.value=c.map(f=>({id:f._id,label:f.nombre})),C.path==="update"&&(l.value.state=T(a==null?void 0:a.state),Q(l.value.state,a==null?void 0:a.ciudad))}).catch(i=>{console.log(i)})},ue=async e=>await Ne.estadosByPais(e),Q=(e,a={})=>{const{id:b}=e;re(b).then(i=>{const c=(i==null?void 0:i.ciudades)||[];j.value=c.map(f=>({id:f._id,label:f.nombre})),C.path==="update"&&(l.value.ciudad=T(a))}).catch(i=>{console.log(i)})},re=async e=>await Ee.ciudadesByEstados(e),me=e=>{const{_id:a,codigo:b,nombre:i,iDFiscal:c,pais:f,state:y,ciudad:d,companiaListada:o,companiaRegulada:r,casaMatriz:m,industria:F,calle:N,paginaWeb:W,direccion:$,estado:Ve,contactos:q}=e.value,$e=((q==null?void 0:q.contact)||[]).map(({_id:A,nombre:Y,apellido:Z,cargo:_e,telefonoOfic:x,telefonoCelu:ee,correo:ae,cliente:ye})=>{let le={nombre:null};return(Y!==""||Z!==""||x!==""||ee!==""||ae!=="")&&(le={_id:A,nombre:Y,apellido:Z,cargo:_e.id,telefonoOfic:x,telefonoCelu:ee,correo:ae,cliente:ye}),le}).filter(A=>A.nombre!==null),X={_id:a,codigo:b,nombre:i,iDFiscal:c,pais:f.id,state:y.id,ciudad:d.id,companiaListada:o.id,companiaRegulada:r.id,casaMatriz:m,industria:F.id,calle:N,paginaWeb:W,direccion:$,estado:Ve.id,contactos:$e};return C.path==="create"?G.create(X):G.update(X)},pe=C.path==="create"?V("message.client.created.success"):V("message.client.updated.success"),ve=C.path==="create"?V("message.client.created.error"):V("message.client.updated.error"),E=async e=>{n.value.contact.push({_id:"",nombre:"",apellido:"",cargo:M.value,telefonoOfic:"",telefonoCelu:"",correo:"",cliente:l.value._id!==""?l.value._id:"",action:"create/update"})},be=async e=>{let a=n.value.contact;const i=n.value.contact[e]._id;let c={};i!==""&&(c=await Je.delete(i)),(c==null?void 0:c.msj)==="Error al eliminar el contacto"?O.error(`${c==null?void 0:c.msj}`):(a.splice(e,1),n.value.contact=a)},ge=async()=>{await P.value.$validate()?me(l).then(()=>{O.success(pe),J.push("/setup/clients")}).catch(a=>{var b,i,c,f;if((i=(b=a.response)==null?void 0:b.data)!=null&&i.msg){O.error(`${ve} ${a.response.data.msg}`);return}if((f=(c=a==null?void 0:a.response)==null?void 0:c.data)!=null&&f.errors){const y=a.response.data.errors,d=Object.keys(y).map(function(o,r){const m=y[o];return m.length>1?m.map(F=>m[F]).join():m[0]});d.length>1?d.map(o=>d[o]).join():d[0],O.error("Error al procesar la data")}}):console.log("error")},fe=()=>J.push("/setup/clients");return(e,a)=>(H(),ke(Pe,{isForm:"",onSubmit:Te(ge,["prevent"])},{footer:u(()=>[g("div",sa,[S(t(se,{label:e.$t(`message.${C.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),[[L,B.value===1]]),t(se,{label:e.$t("message.return"),color:"info",onClick:a[14]||(a[14]=b=>fe())},null,8,["label"])])]),default:u(()=>[g("div",null,[g("div",Ke,[t(We,{tabs:s(ie),onTabClick:ne},{default:u(()=>{var b,i,c,f,y,d;return[g("div",Qe,[S(g("div",null,[g("div",{class:Be(k.path!=="create"?"grid md:grid-cols-3 gap-3":"grid md:grid-cols-2 gap-3")},[S(t(v,{label:e.$t("message.client.code")},{default:u(()=>[t(p,{name:"codigo",modelValue:l.value.codigo,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value.codigo=o),icon:s(Re),readonly:"true"},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[L,k.path!=="create"]]),t(v,{label:e.$t("message.client.name"),help:(c=(i=(b=s(P))==null?void 0:b.nombre)==null?void 0:i.$errors[0])==null?void 0:c.$message},{default:u(()=>[t(p,{modelValue:l.value.nombre,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value.nombre=o),icon:s(_)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(v,{label:e.$t("message.client.idFiscal"),help:(d=(y=(f=s(P))==null?void 0:f.iDFiscal)==null?void 0:y.$errors[0])==null?void 0:d.$message},{default:u(()=>[t(p,{modelValue:l.value.iDFiscal,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value.iDFiscal=o),icon:s(_)},null,8,["modelValue","icon"])]),_:1},8,["label","help"])],2),g("div",Xe,[t(v,{label:e.$t("message.client.industry")},{default:u(()=>[t(p,{modelValue:l.value.industria,"onUpdate:modelValue":a[3]||(a[3]=o=>l.value.industria=o),icon:s(h),options:s(z)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.listedCompany")},{default:u(()=>[t(p,{modelValue:l.value.companiaListada,"onUpdate:modelValue":a[4]||(a[4]=o=>l.value.companiaListada=o),icon:s(h),options:D},null,8,["modelValue","icon"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.regulatedCompany")},{default:u(()=>[t(p,{modelValue:l.value.companiaRegulada,"onUpdate:modelValue":a[5]||(a[5]=o=>l.value.companiaRegulada=o),icon:s(h),options:D},null,8,["modelValue","icon"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.parentCompany")},{default:u(()=>[t(p,{modelValue:l.value.casaMatriz,"onUpdate:modelValue":a[6]||(a[6]=o=>l.value.casaMatriz=o),icon:s(_)},null,8,["modelValue","icon"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.country")},{default:u(()=>[t(p,{modelValue:l.value.pais,"onUpdate:modelValue":a[7]||(a[7]=o=>l.value.pais=o),icon:s(h),options:s(w),onOnSelectChange:K},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.state")},{default:u(()=>[t(p,{modelValue:l.value.state,"onUpdate:modelValue":a[8]||(a[8]=o=>l.value.state=o),icon:s(h),options:s(R),onOnSelectChange:Q},null,8,["modelValue","icon","options"])]),_:1},8,["label"])]),g("div",Ye,[t(v,{label:e.$t("message.client.city")},{default:u(()=>[t(p,{modelValue:l.value.ciudad,"onUpdate:modelValue":a[9]||(a[9]=o=>l.value.ciudad=o),icon:s(h),options:s(j)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.street")},{default:u(()=>[t(p,{modelValue:l.value.calle,"onUpdate:modelValue":a[10]||(a[10]=o=>l.value.calle=o),icon:s(_)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),g("div",Ze,[t(v,{label:e.$t("message.client.paginaWeb")},{default:u(()=>[t(p,{modelValue:l.value.paginaWeb,"onUpdate:modelValue":a[11]||(a[11]=o=>l.value.paginaWeb=o),icon:s(_)},null,8,["modelValue","icon"])]),_:1},8,["label"]),t(v,{label:e.$t("message.client.status")},{default:u(()=>[t(p,{modelValue:l.value.estado,"onUpdate:modelValue":a[12]||(a[12]=o=>l.value.estado=o),icon:s(h),options:I},null,8,["modelValue","icon"])]),_:1},8,["label"])]),g("div",xe,[t(v,{label:e.$t("message.client.address")},{default:u(()=>[t(p,{type:"textarea",modelValue:l.value.direccion,"onUpdate:modelValue":a[13]||(a[13]=o=>l.value.direccion=o),icon:s(_)},null,8,["modelValue","icon"])]),_:1},8,["label"])])],512),[[L,B.value===0]]),S(g("div",null,[(H(!0),te(je,null,Me(n.value.contact,(o,r)=>(H(),te("div",{key:r},[g("div",ea,[g("h2",aa,"Contacto. "+Oe(r+1),1),S(g("button",{type:"button",class:"btn-add-referidos",onClick:m=>E(r)}," + ",8,la),[[L,n.value.contact.length===r+1]]),S(g("button",{type:"button",class:"btn-remove-referidos",onClick:m=>be(r)}," - ",8,ta),[[L,r>0]])]),g("div",oa,[t(v,{label:e.$t("message.client.name")},{default:u(()=>[t(p,{modelValue:n.value.contact[r].nombre,"onUpdate:modelValue":m=>n.value.contact[r].nombre=m,icon:s(_)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),t(v,{label:e.$t("message.client.lastName")},{default:u(()=>[t(p,{modelValue:n.value.contact[r].apellido,"onUpdate:modelValue":m=>n.value.contact[r].apellido=m,icon:s(_)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),t(v,{label:e.$t("message.client.jobPosition")},{default:u(()=>[t(p,{modelValue:n.value.contact[r].cargo,"onUpdate:modelValue":m=>n.value.contact[r].cargo=m,icon:s(h),options:s(M)},null,8,["modelValue","onUpdate:modelValue","icon","options"])]),_:2},1032,["label"]),t(v,{label:e.$t("message.client.officePhone")},{default:u(()=>[t(p,{modelValue:n.value.contact[r].telefonoOfic,"onUpdate:modelValue":m=>n.value.contact[r].telefonoOfic=m,icon:s(_)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),t(v,{label:e.$t("message.client.movilPhone")},{default:u(()=>[t(p,{modelValue:n.value.contact[r].telefonoCelu,"onUpdate:modelValue":m=>n.value.contact[r].telefonoCelu=m,icon:s(_)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),t(v,{label:e.$t("message.client.email")},{default:u(()=>[t(p,{modelValue:n.value.contact[r].correo,"onUpdate:modelValue":m=>n.value.contact[r].correo=m,icon:s(_)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"])])]))),128))],512),[[L,B.value===1]]),S(g("div",null,null,512),[[L,B.value===2]])])]}),_:1},8,["tabs"])])])]),_:1},8,["onSubmit"]))}},_a=Ie(na,[["__scopeId","data-v-826b3956"]]);export{_a as F};
