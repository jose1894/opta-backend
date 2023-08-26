import{q as fe,af as Ve,ag as $e,as as Se,a9 as je,y as d,aJ as Z,at as _e,I as Ye,o as we,c as Me,w as r,a as t,d as Ne,j as w,B as n,u as i,C as u,au as x,av as ee,aw as g,z as De,g as Ue}from"./index.94f69dfc.js";import{r as Le,m as ye,u as he}from"./index.esm.8eaf8d5b.js";import{p as R}from"./projects.service.1804ab4d.js";import{m as Be}from"./member.service.cf66150f.js";import{b as Fe}from"./bussinesUnit.service.435050ca.js";import{c as Ce}from"./clients.srvice.7b743fb0.js";import{p as ae}from"./personal.service.551a9226.js";import{b as Ie}from"./branches.service.d19c5d13.js";import{a as Oe}from"./activities.service.13519c79.js";const Re={class:"grid md:grid-cols-3 gap-4"},Te={class:"grid md:grid-cols-2 gap-2"},ke={class:"grid md:grid-cols-2 gap-2"},Ge={class:"grid md:grid-cols-1 gap-1"},Pe={__name:"FormView",props:{path:"",saveLabel:"",project:{}},setup(oe){const S=oe,{t:b}=Ve(),T=$e(),se=Se(),le=je(),k=d(!0);let M=d([]),N=d([]),D=d([]),U=d([]),L=d([]),y=d([]),h=d([]);const B=[{id:1,label:b("message.project.statuses.active")},{id:0,label:b("message.project.statuses.inactive")},{id:2,label:b("message.project.statuses.deleted")}];d({date:"DD-MM-YYYY",month:"MMM"});const G=d("");d("");const e=d({_id:"",codigo:"0000000",fecha:Z(new Date,"DD-MM-YYYY").format("DD-MM-YYYY"),creado:"",cliente:D.value,socio:U.value,gerente:L.value,sucursal:y.value,unidadNegocio:N.value,tipoServicio:h.value,descripcionServicio:"",creadoName:"",estado:B[0],membresia:M.value}),te=s=>{const{_id:a,codigo:c,fecha:p,creado:m,cliente:V,socio:v,gerente:$,sucursal:l,unidadNegocio:C,tipoServicio:j,descripcionServicio:I,estado:_,membresia:O}=s.value,Y={_id:a,codigo:c,fecha:p,creado:m,cliente:V.id,socio:v.id,gerente:$.id,sucursal:l.id,unidadNegocio:C.id,tipoServicio:j.id,descripcionServicio:I,estado:_.id,membresia:O.id};return S.path==="create"?R.create(Y):R.update(Y)};_e(async()=>{var P,q,A,J,z,E,H,K,Q,W,X;let s=await Be.allMiembrosGet();const a=s==null?void 0:s.data.miembros;M.value=a.map(o=>({id:o._id,label:o.nombre}));let c=await Ce.allClientes();const p=c==null?void 0:c.data.cliente;D.value=p.map(o=>({id:o._id,label:o.nombre}));let m=await ae.getListTipoPersonal(1);const V=m==null?void 0:m.data.personas;U.value=V.map(o=>({id:o._id,label:o.nombres}));let v=await ae.getListTipoPersonal(2);const $=v==null?void 0:v.data.personas;L.value=$.map(o=>({id:o._id,label:o.nombres}));let l=await Ie.sucursalesGet();const C=l==null?void 0:l.data.sucursales;y.value=C.map(o=>({id:o._id,label:o.nombre}));let j=await Oe.allActividades();const I=j==null?void 0:j.data.actividades;h.value=I.map(o=>({id:o._id,label:o.nombre}));let _=await Fe.allBussinesUnitGet();const O=_==null?void 0:_.data.unidadesNegocio;N.value=O.map(o=>({id:o._id,label:o.nombre}));const Y=JSON.parse(localStorage.getItem("user")),{firstname:ue,lastname:ce,id:me}=(P=Y.userData)!=null?P:{};if(e.value.creadoName=`${ue} ${ce}`,e.value.creado=me,console.log(Y.userData),S.path==="update"){const o=await R.read(se.params);e.value=o.data;const{firstname:pe,lastname:ve,_id:ge}=(A=(q=o.data)==null?void 0:q.creado)!=null?A:{};e.value.creadoName=`${pe} ${ve}`,e.value.creado=ge,G.value=new Date((J=o.data)==null?void 0:J.fecha),e.value.fecha=Z(G.value,"DD-MM-YYYY").format("DD-MM-YYYY"),e.value.cliente=f((z=o.data)==null?void 0:z.cliente),e.value.socio=f((E=o.data)==null?void 0:E.socio),e.value.gerente=f((H=o.data)==null?void 0:H.gerente),e.value.sucursal=f((K=o.data)==null?void 0:K.sucursal),e.value.unidadNegocio=f((Q=o.data)==null?void 0:Q.unidadNegocio),e.value.tipoServicio=f((W=o.data)==null?void 0:W.tipoServicio),e.value.estado=B.filter(be=>be.id===o.data.estado)[0],e.value.membresia=f((X=o.data)==null?void 0:X.membresia)}});const f=s=>({id:s._id,label:(s==null?void 0:s.nombre)||(s==null?void 0:s.descripcion)||(s==null?void 0:s.nombres)}),ie=Ye(()=>({codigo:{required:Le,maxLength:ye(10)}})),F=he(ie,e),re=S.path==="create"?b("message.project.created.success"):b("message.project.updated.success"),de=S.path==="create"?b("message.project.created.error"):b("message.project.updated.error"),ne=async()=>{await F.value.$validate()?te(e).then(()=>{T.success(re),le.push("/setup/projects")}).catch(a=>{var c,p;if((c=a.response.data)!=null&&c.msg){T.error(`${de} ${a.response.data.msg}`);return}if((p=a.response.data)!=null&&p.errors){const m=a.response.data.errors;for(let V of m);}}):console.log("error")};return(s,a)=>(we(),Me(Ue,{isForm:"",onSubmit:De(ne,["prevent"])},{footer:r(()=>[t(Ne,{label:s.$t(`message.${S.saveLabel}`),type:"submit",color:"success"},null,8,["label"])]),default:r(()=>{var c,p,m,V,v,$;return[w("div",Re,[t(n,{label:s.$t("message.project.code"),help:(m=(p=(c=i(F))==null?void 0:c.codigo)==null?void 0:p.$errors[0])==null?void 0:m.$message},{default:r(()=>[t(u,{name:"codigo",modelValue:e.value.codigo,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.codigo=l),icon:i(x)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),t(n,{label:s.$t("message.project.date")},{default:r(()=>[t(u,{name:"fecha",modelValue:e.value.fecha,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.fecha=l),icon:i(x),readonly:k.value},null,8,["modelValue","icon","readonly"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.createdProject"),class:"c_hidden"},{default:r(()=>[t(u,{modelValue:e.value.creadoName,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.creadoName=l),icon:i(ee),readonly:k.value},null,8,["modelValue","icon","readonly"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.client")},{default:r(()=>[t(u,{modelValue:e.value.cliente,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.cliente=l),icon:i(g),options:i(D)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.partner")},{default:r(()=>[t(u,{modelValue:e.value.socio,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.socio=l),icon:i(g),options:i(U)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.manager")},{default:r(()=>[t(u,{modelValue:e.value.gerente,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.gerente=l),icon:i(g),options:i(L)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.branch")},{default:r(()=>[t(u,{modelValue:e.value.sucursal,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value.sucursal=l),icon:i(g),options:i(y)},null,8,["modelValue","icon","options"])]),_:1},8,["label"])]),w("div",Te,[t(n,{label:s.$t("message.project.bussinesUnit")},{default:r(()=>[t(u,{modelValue:e.value.unidadNegocio,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value.unidadNegocio=l),icon:i(g),options:i(N)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.typeOfService")},{default:r(()=>[t(u,{modelValue:e.value.tipoServicio,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value.tipoServicio=l),icon:i(g),options:i(h)},null,8,["modelValue","icon","options"])]),_:1},8,["label"])]),w("div",ke,[t(n,{label:s.$t("message.project.membership")},{default:r(()=>[t(u,{modelValue:e.value.membresia,"onUpdate:modelValue":a[9]||(a[9]=l=>e.value.membresia=l),icon:i(g),options:i(M)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(n,{label:s.$t("message.project.status"),help:($=(v=(V=i(F))==null?void 0:V.estado)==null?void 0:v.$errors[0])==null?void 0:$.$message},{default:r(()=>[t(u,{modelValue:e.value.estado,"onUpdate:modelValue":a[10]||(a[10]=l=>e.value.estado=l),icon:i(g),options:B},null,8,["modelValue","icon"])]),_:1},8,["label","help"])]),w("div",Ge,[t(n,{label:s.$t("message.project.serviceDescription")},{default:r(()=>[t(u,{type:"textarea",modelValue:e.value.descripcionServicio,"onUpdate:modelValue":a[11]||(a[11]=l=>e.value.descripcionServicio=l),icon:i(ee)},null,8,["modelValue","icon"])]),_:1},8,["label"])])]}),_:1},8,["onSubmit"]))}},Xe=fe(Pe,[["__scopeId","data-v-b4969419"]]);export{Xe as F};
