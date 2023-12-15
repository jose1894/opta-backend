import{u as ge,ak as be,au as fe,ae as Ve,r as d,aL as X,ax as $e,g as Se,o as je,c as _e,a as r,b as f,i as t,N as Ye,d as we,_ as u,p as i,ay as Z,S as ye,az as x,ar as v,j as Me}from"./index.2a5a620e.js";import{b as Ne,a as ee,_ as De}from"./BaseButton.cdd5c322.js";import{_ as c}from"./FormField.33193145.js";import{u as Ue}from"./index.esm.9bf57b6a.js";import{p as F}from"./projects.service.26c8b9a6.js";import{b as he}from"./bussinesUnit.service.81a9a6b4.js";import{c as Le}from"./clients.srvice.1e001a48.js";import{p as ae}from"./personal.service.33a2dfb3.js";import{b as Be}from"./branches.service.0610da82.js";import{a as ke}from"./activities.service.f9fb90d8.js";const Ce={class:"grid md:grid-cols-2 gap-2"},Fe={class:"grid md:grid-cols-2 gap-2"},Te={class:"grid md:grid-cols-2 gap-3"},Oe={class:"grid md:grid-cols-1 gap-1"},Re={style:{display:"flex","justify-content":"space-between"}},Ie={__name:"FormView",props:{path:"",saveLabel:"",project:{}},setup(w){const V=w,{t:g}=ge(),T=be(),oe=fe(),O=Ve(),R=d(!0);let y=d([]),M=d([]),N=d([]),D=d([]),U=d([]),h=d([]);const L=[{id:1,label:g("message.project.statuses.active")},{id:0,label:g("message.project.statuses.inactive")}];d({date:"DD-MM-YYYY",month:"MMM"});const I=d("");d("");const e=d({_id:"",codigo:"0000000",fecha:X(new Date,"DD-MM-YYYY").format("DD-MM-YYYY"),creado:"",cliente:M.value,socio:N.value,gerente:D.value,sucursal:U.value,unidadNegocio:y.value,tipoServicio:h.value,descripcionServicio:"",creadoName:"",estado:L[0]}),se=o=>{const{_id:a,codigo:n,fecha:p,creado:m,cliente:l,socio:$,gerente:B,sucursal:S,unidadNegocio:k,tipoServicio:j,descripcionServicio:C,estado:_}=o.value,Y={_id:a,codigo:n,fecha:p,creado:m,cliente:l.id,socio:$.id,gerente:B.id,sucursal:S.id,unidadNegocio:k.id,tipoServicio:j.id,descripcionServicio:C,estado:_.id};return V.path==="create"?F.create(Y):F.update(Y)};$e(async()=>{var z,A,G,J,q,E,H,K,Q,W;let o=await Le.allClientes();const a=o==null?void 0:o.data.cliente;M.value=a.map(s=>({id:s._id,label:s.nombre}));let n=await ae.getListTipoPersonal(1);const p=n==null?void 0:n.data.personas;N.value=p.map(s=>({id:s._id,label:s.nombres}));let m=await ae.getListTipoPersonal(2);const l=m==null?void 0:m.data.personas;D.value=l.map(s=>({id:s._id,label:s.nombres}));let $=await Be.sucursalesGet();const B=$==null?void 0:$.data.sucursales;U.value=B.map(s=>({id:s._id,label:s.nombre}));let S=await ke.allActividades();const k=S==null?void 0:S.data.actividades;h.value=k.map(s=>({id:s._id,label:s.nombre}));let j=await he.allBussinesUnitGet();const C=j==null?void 0:j.data.unidadesNegocio;y.value=C.map(s=>({id:s._id,label:s.nombre}));const _=JSON.parse(localStorage.getItem("user")),{firstname:Y,lastname:de,id:ue}=(z=_.userData)!=null?z:{};if(e.value.creadoName=`${Y} ${de}`,e.value.creado=ue,console.log(_.userData),V.path==="update"){const s=await F.read(oe.params);e.value=s.data;const{firstname:ce,lastname:me,_id:pe}=(G=(A=s.data)==null?void 0:A.creado)!=null?G:{};e.value.creadoName=`${ce} ${me}`,e.value.creado=pe,I.value=new Date((J=s.data)==null?void 0:J.fecha),e.value.fecha=X(I.value,"DD-MM-YYYY").format("DD-MM-YYYY"),e.value.cliente=b((q=s.data)==null?void 0:q.cliente),e.value.socio=b((E=s.data)==null?void 0:E.socio),e.value.gerente=b((H=s.data)==null?void 0:H.gerente),e.value.sucursal=b((K=s.data)==null?void 0:K.sucursal),e.value.unidadNegocio=b((Q=s.data)==null?void 0:Q.unidadNegocio),e.value.tipoServicio=b((W=s.data)==null?void 0:W.tipoServicio),e.value.estado=L.filter(ve=>ve.id===s.data.estado)[0]}});const b=o=>({id:o._id,label:(o==null?void 0:o.nombre)||(o==null?void 0:o.descripcion)||(o==null?void 0:o.nombres)}),le=Se(()=>({})),P=Ue(le,e),te=V.path==="create"?g("message.project.created.success"):g("message.project.updated.success"),ie=V.path==="create"?g("message.project.created.error"):g("message.project.updated.error"),re=async()=>{await P.value.$validate()?se(e).then(()=>{T.success(te),O.push("/setup/projects")}).catch(a=>{var n,p;if((n=a.response.data)!=null&&n.msg){T.error(`${ie} ${a.response.data.msg}`);return}if((p=a.response.data)!=null&&p.errors){const m=a.response.data.errors;for(let l of m);}}):console.log("error")},ne=()=>O.push("/setup/projects");return(o,a)=>(je(),_e(De,{isForm:"",onSubmit:Me(re,["prevent"])},{footer:r(()=>[f("div",Re,[t(ee,{label:o.$t(`message.${V.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),t(ee,{label:o.$t("message.return"),color:"info",onClick:a[11]||(a[11]=n=>ne())},null,8,["label"])])]),default:r(()=>{var n,p,m;return[f("div",{class:Ye(w.path!=="create"?"grid md:grid-cols-3 gap-4":"grid md:grid-cols-2 gap-4")},[we(t(c,{label:o.$t("message.project.code")},{default:r(()=>[t(u,{name:"codigo",modelValue:e.value.codigo,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.codigo=l),icon:i(Z),readonly:!0},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[ye,w.path!=="create"]]),t(c,{label:o.$t("message.project.date")},{default:r(()=>[t(u,{name:"fecha",modelValue:e.value.fecha,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.fecha=l),icon:i(Z),readonly:R.value},null,8,["modelValue","icon","readonly"])]),_:1},8,["label"]),t(c,{label:o.$t("message.project.createdProject"),class:"c_hidden"},{default:r(()=>[t(u,{modelValue:e.value.creadoName,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.creadoName=l),icon:i(x),readonly:R.value},null,8,["modelValue","icon","readonly"])]),_:1},8,["label"]),t(c,{label:o.$t("message.project.client")},{default:r(()=>[t(u,{modelValue:e.value.cliente,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.cliente=l),icon:i(v),options:i(M)},null,8,["modelValue","icon","options"])]),_:1},8,["label"])],2),f("div",Ce,[t(c,{label:o.$t("message.project.partner")},{default:r(()=>[t(u,{modelValue:e.value.socio,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.socio=l),icon:i(v),options:i(N)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(c,{label:o.$t("message.project.manager")},{default:r(()=>[t(u,{modelValue:e.value.gerente,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.gerente=l),icon:i(v),options:i(D)},null,8,["modelValue","icon","options"])]),_:1},8,["label"])]),f("div",Fe,[t(c,{label:o.$t("message.project.branch")},{default:r(()=>[t(u,{modelValue:e.value.sucursal,"onUpdate:modelValue":a[6]||(a[6]=l=>e.value.sucursal=l),icon:i(v),options:i(U)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(c,{label:o.$t("message.project.bussinesUnit")},{default:r(()=>[t(u,{modelValue:e.value.unidadNegocio,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value.unidadNegocio=l),icon:i(v),options:i(y)},null,8,["modelValue","icon","options"])]),_:1},8,["label"])]),f("div",Te,[t(c,{label:o.$t("message.project.typeOfService")},{default:r(()=>[t(u,{modelValue:e.value.tipoServicio,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value.tipoServicio=l),icon:i(v),options:i(h)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),t(c,{label:o.$t("message.project.status"),help:(m=(p=(n=i(P))==null?void 0:n.estado)==null?void 0:p.$errors[0])==null?void 0:m.$message},{default:r(()=>[t(u,{modelValue:e.value.estado,"onUpdate:modelValue":a[9]||(a[9]=l=>e.value.estado=l),icon:i(v),options:L},null,8,["modelValue","icon"])]),_:1},8,["label","help"])]),f("div",Oe,[t(c,{label:o.$t("message.project.serviceDescription")},{default:r(()=>[t(u,{type:"textarea",modelValue:e.value.descripcionServicio,"onUpdate:modelValue":a[10]||(a[10]=l=>e.value.descripcionServicio=l),icon:i(x)},null,8,["modelValue","icon"])]),_:1},8,["label"])])]}),_:1},8,["onSubmit"]))}},We=Ne(Ie,[["__scopeId","data-v-58b488de"]]);export{We as F};
