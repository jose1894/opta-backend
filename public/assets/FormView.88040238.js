import{q as _e,ag as Ue,y as h,ah as he,at as Le,aa as we,I as Se,au as Fe,o as W,c as ke,w as i,j as f,M as B,a as l,d as J,aj as D,u as s,B as c,C as m,av as Be,aw as y,ax as L,r as Q,K as De,L as Re,E as Me,z as Oe,g as je}from"./index.e27aaed2.js";import{r as N,m as Ie,u as Te}from"./index.esm.6263d8b1.js";import{c as ze}from"./cities.service.f962d969.js";import{s as Ee}from"./states.services.92a25f7c.js";import{c as q}from"./clients.srvice.5f8d7b0a.js";import{T as Pe}from"./TabsComponent.f3aa20e8.js";import{c as We}from"./countries.service.6413becf.js";import{c as Ne}from"./cargos.service.90ce512d.js";import{i as qe}from"./Industries.service.b38b7368.js";const Ae={class:"container mx-auto"},Ke={class:"p-1 mt-0 bg-white border"},Ge={class:"grid md:grid-cols-3 gap-3"},He={class:"grid md:grid-cols-2 gap-2"},Je={class:"btn-add-remove"},Qe={class:"h2-tittle"},Xe=["onClick"],Ye=["onClick"],Ze={class:"grid md:grid-cols-3 gap-3"},xe={style:{display:"flex","justify-content":"space-between"}},ea={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(X){const w=X,{t:C}=Ue();h([]);let T=h([]),R=h([]),M=h([]),O=h([]),z=h([]),Y="";const k=h(0),Z=a=>{k.value=a},S=[{id:1,label:C("message.yes")},{id:2,label:C("message.no")}];let x=[{title:C("message.client.tab.client")},{title:C("message.client.tab.contacts")}];const E=[{id:1,label:C("message.client.statuses.active")},{id:0,label:C("message.client.statuses.inactive")}],r=h({contact:[{nombre:"",apellido:"",cargo:O.value,telefonoOfic:"",telefonoCelu:"",correo:"",cliente:""}]}),o=h({_id:"",codigo:"00",nombre:"",iDFiscal:"",companiaListada:S[0],companiaRegulada:S[0],casaMatriz:"",industria:z.value,pais:T.value,state:R.value,ciudad:M.value,calle:"",paginaWeb:"",direccion:"",estado:E[0],contactos:r.value}),P=he(),ee=Le(),A=we(),ae=Se(()=>({codigo:{required:N,maxLength:Ie(3)},nombre:{required:N},iDFiscal:{required:N}})),j=Te(ae,o);Fe(async()=>{var _;let a=await We.index();const e=(a==null?void 0:a.paises)||[];T.value=e.map(n=>({id:n._id,label:n.nombre}));let v=await Ne.allCargos();const d=v==null?void 0:v.data.cargos;O.value=d.map(n=>({id:n._id,label:n.nombre}));let b=await qe.allIndustrias();const g=b==null?void 0:b.data.industrias;if(z.value=g.map(n=>({id:n._id,label:n.nombre})),w.path==="update"){const n=await q.read(ee.params);o.value=n.data.cliente,r.value.contact=n.data.contactos,r.value.contact.map($=>($.cargo=I($.cargo),$)),o.value.contactos=r.value;const{cargo:F,estado:V,industria:t,companiaListada:u,companiaRegulada:p}=n.data.cliente;o.value.industria={id:t._id,label:t.nombre},o.value.pais=I((_=n.data.cliente)==null?void 0:_.pais),o.value.estado=E.filter($=>$.id===V)[0],o.value.companiaListada=S.filter($=>$.id===u)[0],o.value.companiaRegulada=S.filter($=>$.id===p)[0],K(o.value.pais,n.data.cliente)}});const I=a=>({id:(a==null?void 0:a._id)||a.id,label:a.nombre}),K=(a,e={})=>{const{id:v}=a;M.value=[],R.value=[],le(v).then(d=>{const b=(d==null?void 0:d.estados)||[];R.value=b.map(g=>({id:g._id,label:g.nombre})),w.path==="update"&&(o.value.state=I(e==null?void 0:e.state),G(o.value.state,e==null?void 0:e.ciudad))}).catch(d=>{console.log(d)})},le=async a=>await Ee.estadosByPais(a),G=(a,e={})=>{const{id:v}=a;oe(v).then(d=>{const b=(d==null?void 0:d.ciudades)||[];M.value=b.map(g=>({id:g._id,label:g.nombre})),w.path==="update"&&(o.value.ciudad=I(e))}).catch(d=>{console.log(d)})},oe=async a=>await ze.ciudadesByEstados(a),te=a=>{const{_id:e,codigo:v,nombre:d,iDFiscal:b,pais:g,state:_,ciudad:n,companiaListada:U,companiaRegulada:F,casaMatriz:V,industria:t,calle:u,paginaWeb:p,direccion:$,estado:me,contactos:re}=a.value,pe=re.contact.map(({_id:ve,nombre:be,apellido:ge,cargo:fe,telefonoOfic:Ve,telefonoCelu:$e,correo:ye,cliente:Ce})=>({_id:ve,nombre:be,apellido:ge,cargo:fe.id,telefonoOfic:Ve,telefonoCelu:$e,correo:ye,cliente:Ce})),H={_id:e,codigo:v,nombre:d,iDFiscal:b,pais:g.id,state:_.id,ciudad:n.id,companiaListada:U.id,companiaRegulada:F.id,casaMatriz:V,industria:t.id,calle:u,paginaWeb:p,direccion:$,estado:me.id,contactos:pe};return w.path==="create"?q.create(H):q.update(H)},se=w.path==="create"?C("message.client.created.success"):C("message.client.updated.success"),ne=w.path==="create"?C("message.client.created.error"):C("message.client.updated.error"),ie=async a=>{r.value.contact.push({nombre:"",apellido:"",cargo:O.value,telefonoOfic:"",telefonoCelu:"",correo:"",cliente:Y})},de=async a=>{console.log("remove***"+a)},ue=async()=>{await j.value.$validate()?te(o).then(()=>{P.success(se),A.push("/setup/clients")}).catch(e=>{var v,d,b,g;if((d=(v=e.response)==null?void 0:v.data)!=null&&d.msg){P.error(`${ne} ${e.response.data.msg}`);return}if((g=(b=e==null?void 0:e.response)==null?void 0:b.data)!=null&&g.errors){const _=e.response.data.errors,n=Object.keys(_).map(function(U,F){const V=_[U];return V.length>1?V.map(t=>V[t]).join():V[0]});n.length>1?n.map(U=>n[U]).join():n[0],P.error("Error al procesar la data")}}):console.log("error")},ce=()=>A.push("/setup/clients");return(a,e)=>(W(),ke(je,{isForm:"",onSubmit:Oe(ue,["prevent"])},{footer:i(()=>[f("div",xe,[B(l(J,{label:a.$t(`message.${w.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),[[D,k.value===1]]),l(J,{label:a.$t("message.return"),color:"info",onClick:e[14]||(e[14]=v=>ce())},null,8,["label"])])]),default:i(()=>[f("div",null,[f("div",Ae,[l(Pe,{tabs:s(x),onTabClick:Z},{default:i(()=>{var v,d,b,g,_,n,U,F,V;return[f("div",Ke,[B(f("div",null,[f("div",Ge,[l(c,{label:a.$t("message.client.code"),help:(b=(d=(v=s(j))==null?void 0:v.codigo)==null?void 0:d.$errors[0])==null?void 0:b.$message},{default:i(()=>[l(m,{name:"codigo",modelValue:o.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.codigo=t),icon:s(Be)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(c,{label:a.$t("message.client.name"),help:(n=(_=(g=s(j))==null?void 0:g.nombre)==null?void 0:_.$errors[0])==null?void 0:n.$message},{default:i(()=>[l(m,{modelValue:o.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.nombre=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(c,{label:a.$t("message.client.idFiscal"),help:(V=(F=(U=s(j))==null?void 0:U.iDFiscal)==null?void 0:F.$errors[0])==null?void 0:V.$message},{default:i(()=>[l(m,{modelValue:o.value.iDFiscal,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.iDFiscal=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(c,{label:a.$t("message.client.industry")},{default:i(()=>[l(m,{modelValue:o.value.industria,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value.industria=t),icon:s(L),options:s(z)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.listedCompany")},{default:i(()=>[l(m,{modelValue:o.value.companiaListada,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.companiaListada=t),icon:s(L),options:S},null,8,["modelValue","icon"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.regulatedCompany")},{default:i(()=>[l(m,{modelValue:o.value.companiaRegulada,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.companiaRegulada=t),icon:s(L),options:S},null,8,["modelValue","icon"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.parentCompany")},{default:i(()=>[l(m,{modelValue:o.value.casaMatriz,"onUpdate:modelValue":e[6]||(e[6]=t=>o.value.casaMatriz=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.country")},{default:i(()=>[l(m,{modelValue:o.value.pais,"onUpdate:modelValue":e[7]||(e[7]=t=>o.value.pais=t),icon:s(L),options:s(T),onOnSelectChange:K},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.state")},{default:i(()=>[l(m,{modelValue:o.value.state,"onUpdate:modelValue":e[8]||(e[8]=t=>o.value.state=t),icon:s(L),options:s(R),onOnSelectChange:G},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.city")},{default:i(()=>[l(m,{modelValue:o.value.ciudad,"onUpdate:modelValue":e[9]||(e[9]=t=>o.value.ciudad=t),icon:s(L),options:s(M)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.street")},{default:i(()=>[l(m,{modelValue:o.value.calle,"onUpdate:modelValue":e[10]||(e[10]=t=>o.value.calle=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.paginaWeb")},{default:i(()=>[l(m,{modelValue:o.value.paginaWeb,"onUpdate:modelValue":e[11]||(e[11]=t=>o.value.paginaWeb=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"])]),f("div",He,[l(c,{label:a.$t("message.client.address")},{default:i(()=>[l(m,{modelValue:o.value.direccion,"onUpdate:modelValue":e[12]||(e[12]=t=>o.value.direccion=t),icon:s(y)},null,8,["modelValue","icon"])]),_:1},8,["label"]),l(c,{label:a.$t("message.client.status")},{default:i(()=>[l(m,{modelValue:o.value.estado,"onUpdate:modelValue":e[13]||(e[13]=t=>o.value.estado=t),icon:s(L),options:E},null,8,["modelValue","icon"])]),_:1},8,["label"])])],512),[[D,k.value===0]]),B(f("div",null,[(W(!0),Q(De,null,Re(r.value.contact,(t,u)=>(W(),Q("div",{key:u},[f("div",Je,[f("h2",Qe,"Contacto. "+Me(u+1),1),f("button",{type:"button",class:"btn-add-referidos",onClick:p=>ie(u)}," + ",8,Xe),B(f("button",{type:"button",class:"btn-remove-referidos",onClick:p=>de(u)}," - ",8,Ye),[[D,u>0]])]),f("div",Ze,[l(c,{label:a.$t("message.client.name")},{default:i(()=>[l(m,{modelValue:r.value.contact[u].nombre,"onUpdate:modelValue":p=>r.value.contact[u].nombre=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),l(c,{label:a.$t("message.client.lastName")},{default:i(()=>[l(m,{modelValue:r.value.contact[u].apellido,"onUpdate:modelValue":p=>r.value.contact[u].apellido=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),l(c,{label:a.$t("message.client.jobPosition")},{default:i(()=>[l(m,{modelValue:r.value.contact[u].cargo,"onUpdate:modelValue":p=>r.value.contact[u].cargo=p,icon:s(L),options:s(O)},null,8,["modelValue","onUpdate:modelValue","icon","options"])]),_:2},1032,["label"]),l(c,{label:a.$t("message.client.officePhone")},{default:i(()=>[l(m,{modelValue:r.value.contact[u].telefonoOfic,"onUpdate:modelValue":p=>r.value.contact[u].telefonoOfic=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),l(c,{label:a.$t("message.client.movilPhone")},{default:i(()=>[l(m,{modelValue:r.value.contact[u].telefonoCelu,"onUpdate:modelValue":p=>r.value.contact[u].telefonoCelu=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"]),l(c,{label:a.$t("message.client.email")},{default:i(()=>[l(m,{modelValue:r.value.contact[u].correo,"onUpdate:modelValue":p=>r.value.contact[u].correo=p,icon:s(y)},null,8,["modelValue","onUpdate:modelValue","icon"])]),_:2},1032,["label"])])]))),128))],512),[[D,k.value===1]]),B(f("div",null,null,512),[[D,k.value===2]])])]}),_:1},8,["tabs"])])])]),_:1},8,["onSubmit"]))}},ra=_e(ea,[["__scopeId","data-v-2b80a432"]]);export{ra as F};
