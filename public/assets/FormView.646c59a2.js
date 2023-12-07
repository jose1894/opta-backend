import{u as ke,ak as Me,au as Ce,ae as Oe,r as L,ax as Re,g as Te,o as je,c as Ge,a as t,b as O,i as o,p as l,_ as u,az as b,ar as h,j as Ie}from"./index.fced531f.js";import{a as Ae,_ as qe}from"./BaseButton.e5b26bef.js";import{_ as d}from"./FormField.7d4d56fa.js";import{r as p,u as ze}from"./index.esm.5991b628.js";import{p as H}from"./personal.service.69a54273.js";import{p as Ee}from"./Professions.service.8fc86c34.js";import{l as He}from"./languages.service.75b31d17.js";import{b as Je}from"./bussinesUnit.service.c08afc11.js";import{c as Ke}from"./categories.service.59278069.js";import{b as Qe}from"./branches.service.3de045f9.js";import{p as We}from"./profiles.service.cc26306c.js";const Xe={class:"grid md:grid-cols-3 gap-3"},Ye={class:"grid md:grid-cols-1 gap-1"},Ze={class:"grid gap-1"},_e={style:{display:"flex","justify-content":"space-between"}},da={__name:"FormView",props:{path:"",saveLabel:"",country:{}},setup(Ne){const C=Ne,{t:g}=ke(),J=Me(),ye=Ce(),K=Oe(),R=[{id:1,label:g("message.personal.statuses.active")},{id:0,label:g("message.personal.statuses.inactive")}],T=[{id:0,label:g("message.personal.others")},{id:1,label:g("message.personal.partner")},{id:2,label:g("message.personal.manager")}];let j=L([]),G=L([]),I=L([]),q=L([]),z=L([]),E=L([]);const e=L({_id:"",nombres:"",apellidos:"",apelidos:"",iDFiscal:"",telefono:"",email:"",direccion:"",profesion:j.value,idiomas:G.value,postgrado:"",unidadNegocio:I.value,categoria:q.value,sucursal:z.value,perfil:E.value,usuarioAcceso:"",claveAcceso:"",estado:R[0],tipoPersonal:T[0]}),Pe=s=>{const{_id:a,nombres:m,apellidos:f,iDFiscal:c,telefono:w,email:$,direccion:B,profesion:V,idiomas:k,postgrado:U,unidadNegocio:M,categoria:A,sucursal:N,perfil:y,usuarioAcceso:P,claveAcceso:S,tipoPersonal:F,estado:r}=s.value,v={_id:a,nombres:m,apellidos:f,iDFiscal:c,telefono:w,email:$,direccion:B,profesion:V.id,idiomas:k.id,postgrado:U,unidadNegocio:M.id,categoria:A.id,sucursal:N.id,perfil:y.id,usuarioAcceso:P,claveAcceso:S,tipoPersonal:F.id,estado:r.id};return C.path==="create"?H.create(v):H.update(v)};Re(async()=>{var A,N,y,P,S,F;let s=await Ee.allProfesiones();const a=s==null?void 0:s.data.profesiones;j.value=a.map(r=>({id:r._id,label:r.nombre}));let m=await He.allIdiomas();const f=m==null?void 0:m.data.idiomas;G.value=f.map(r=>({id:r._id,label:r.nombre}));let c=await Je.allBussinesUnitGet();const w=c==null?void 0:c.data.unidadesNegocio;I.value=w.map(r=>({id:r._id,label:r.nombre}));let $=await Ke.allCategoris();const B=$==null?void 0:$.data.categorias;q.value=B.map(r=>({id:r._id,label:r.nombre}));let V=await Qe.sucursalesGet();const k=V==null?void 0:V.data.sucursales;z.value=k.map(r=>({id:r._id,label:r.nombre}));let U=await We.allPerfiles();const M=U==null?void 0:U.data.perfiles;if(E.value=M.map(r=>({id:r._id,label:r.descripcion})),C.path==="update"){const r=await H.read(ye.params);e.value=r.data,e.value.tipoPersonal=T.filter(v=>v.id===r.data.tipoPersonal)[0],e.value.estado=R.filter(v=>v.id===r.data.estado)[0],e.value.profesion=D((A=r.data)==null?void 0:A.profesion),e.value.idiomas=D((N=r.data)==null?void 0:N.idiomas),e.value.unidadNegocio=D((y=r.data)==null?void 0:y.unidadNegocio),e.value.categoria=D((P=r.data)==null?void 0:P.categoria),e.value.sucursal=D((S=r.data)==null?void 0:S.sucursal),e.value.perfil=D((F=r.data)==null?void 0:F.perfil)}});const D=s=>({id:s._id,label:(s==null?void 0:s.nombre)||(s==null?void 0:s.descripcion)}),Se=Te(()=>({iDFiscal:{required:p},apellidos:{required:p},nombres:{required:p},telefono:{required:p},email:{required:p},profesion:{required:p},idiomas:{required:p},postgrado:{required:p},unidadNegocio:{required:p},categoria:{required:p},sucursal:{required:p},perfil:{required:p},usuarioAcceso:{required:p},claveAcceso:{required:p},direccion:{required:p},estado:{required:p}})),n=ze(Se,e),Fe=C.path==="create"?g("message.personal.created.success"):g("message.personal.updated.success"),Le=C.path==="create"?g("message.personal.created.error"):g("message.personal.updated.error"),De=async()=>{await n.value.$validate()?Pe(e).then(()=>{J.success(Fe),K.push("/setup/personal")}).catch(a=>{var m,f;if((m=a.response.data)!=null&&m.msg){J.error(`${Le} ${a.response.data.msg}`);return}if((f=a.response.data)!=null&&f.errors){const c=a.response.data.errors;for(let w of c);}}):console.log("error")},Be=()=>K.push("/setup/personal");return(s,a)=>(je(),Ge(qe,{isForm:"",onSubmit:Ie(De,["prevent"])},{footer:t(()=>[O("div",_e,[o(Ae,{label:s.$t(`message.${C.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),o(Ae,{label:s.$t("message.return"),color:"info",onClick:a[17]||(a[17]=m=>Be())},null,8,["label"])])]),default:t(()=>{var m,f,c,w,$,B,V,k,U,M,A,N,y,P,S,F,r,v,Q,W,X,Y,Z,_,x,ee,ae,le,oe,se,ie,re,te,ne,ue,de,pe,me,ce,ge,fe,ve,be,$e,Ve,Ue,he,we;return[O("div",Xe,[o(d,{label:s.$t("message.personal.names"),help:(c=(f=(m=l(n))==null?void 0:m.nombres)==null?void 0:f.$errors[0])==null?void 0:c.$message},{default:t(()=>[o(u,{name:"nombres",modelValue:e.value.nombres,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.nombres=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.surnames"),help:(B=($=(w=l(n))==null?void 0:w.apellidos)==null?void 0:$.$errors[0])==null?void 0:B.$message},{default:t(()=>[o(u,{modelValue:e.value.apellidos,"onUpdate:modelValue":a[1]||(a[1]=i=>e.value.apellidos=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.idFiscal"),help:(U=(k=(V=l(n))==null?void 0:V.iDFiscal)==null?void 0:k.$errors[0])==null?void 0:U.$message},{default:t(()=>[o(u,{modelValue:e.value.iDFiscal,"onUpdate:modelValue":a[2]||(a[2]=i=>e.value.iDFiscal=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.phone"),help:(N=(A=(M=l(n))==null?void 0:M.telefono)==null?void 0:A.$errors[0])==null?void 0:N.$message},{default:t(()=>[o(u,{modelValue:e.value.telefono,"onUpdate:modelValue":a[3]||(a[3]=i=>e.value.telefono=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.email"),help:(S=(P=(y=l(n))==null?void 0:y.email)==null?void 0:P.$errors[0])==null?void 0:S.$message},{default:t(()=>[o(u,{modelValue:e.value.email,"onUpdate:modelValue":a[4]||(a[4]=i=>e.value.email=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.profession"),help:(v=(r=(F=l(n))==null?void 0:F.profesion)==null?void 0:r.$errors[0])==null?void 0:v.$message},{default:t(()=>[o(u,{modelValue:e.value.profesion,"onUpdate:modelValue":a[5]||(a[5]=i=>e.value.profesion=i),icon:l(h),options:l(j)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.languages"),help:(X=(W=(Q=l(n))==null?void 0:Q.idiomas)==null?void 0:W.$errors[0])==null?void 0:X.$message},{default:t(()=>[o(u,{modelValue:e.value.idiomas,"onUpdate:modelValue":a[6]||(a[6]=i=>e.value.idiomas=i),icon:l(h),options:l(G)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.postgraduate"),help:(_=(Z=(Y=l(n))==null?void 0:Y.postgrado)==null?void 0:Z.$errors[0])==null?void 0:_.$message},{default:t(()=>[o(u,{modelValue:e.value.postgrado,"onUpdate:modelValue":a[7]||(a[7]=i=>e.value.postgrado=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.businessUnit"),help:(ae=(ee=(x=l(n))==null?void 0:x.unidadNegocio)==null?void 0:ee.$errors[0])==null?void 0:ae.$message},{default:t(()=>[o(u,{modelValue:e.value.unidadNegocio,"onUpdate:modelValue":a[8]||(a[8]=i=>e.value.unidadNegocio=i),icon:l(h),options:l(I)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.category"),help:(se=(oe=(le=l(n))==null?void 0:le.categoria)==null?void 0:oe.$errors[0])==null?void 0:se.$message},{default:t(()=>[o(u,{modelValue:e.value.categoria,"onUpdate:modelValue":a[9]||(a[9]=i=>e.value.categoria=i),icon:l(h),options:l(q)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.branch"),help:(te=(re=(ie=l(n))==null?void 0:ie.sucursal)==null?void 0:re.$errors[0])==null?void 0:te.$message},{default:t(()=>[o(u,{modelValue:e.value.sucursal,"onUpdate:modelValue":a[10]||(a[10]=i=>e.value.sucursal=i),icon:l(h),options:l(z)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.profile"),help:(de=(ue=(ne=l(n))==null?void 0:ne.perfil)==null?void 0:ue.$errors[0])==null?void 0:de.$message},{default:t(()=>[o(u,{modelValue:e.value.perfil,"onUpdate:modelValue":a[11]||(a[11]=i=>e.value.perfil=i),icon:l(h),options:l(E)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.user"),help:(ce=(me=(pe=l(n))==null?void 0:pe.usuarioAcceso)==null?void 0:me.$errors[0])==null?void 0:ce.$message},{default:t(()=>[o(u,{modelValue:e.value.usuarioAcceso,"onUpdate:modelValue":a[12]||(a[12]=i=>e.value.usuarioAcceso=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.password"),help:(ve=(fe=(ge=l(n))==null?void 0:ge.claveAcceso)==null?void 0:fe.$errors[0])==null?void 0:ve.$message},{default:t(()=>[o(u,{modelValue:e.value.claveAcceso,"onUpdate:modelValue":a[13]||(a[13]=i=>e.value.claveAcceso=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),o(d,{label:s.$t("message.personal.status"),help:(Ve=($e=(be=l(n))==null?void 0:be.estado)==null?void 0:$e.$errors[0])==null?void 0:Ve.$message},{default:t(()=>[o(u,{modelValue:e.value.estado,"onUpdate:modelValue":a[14]||(a[14]=i=>e.value.estado=i),icon:l(h),options:R},null,8,["modelValue","icon"])]),_:1},8,["label","help"])]),O("div",Ye,[o(d,{label:s.$t("message.personal.typePersonnel")},{default:t(()=>[o(u,{modelValue:e.value.tipoPersonal,"onUpdate:modelValue":a[15]||(a[15]=i=>e.value.tipoPersonal=i),icon:l(h),options:T},null,8,["modelValue","icon"])]),_:1},8,["label"])]),O("div",Ze,[o(d,{label:s.$t("message.personal.address"),help:(we=(he=(Ue=l(n))==null?void 0:Ue.direccion)==null?void 0:he.$errors[0])==null?void 0:we.$message},{default:t(()=>[o(u,{type:"textarea",modelValue:e.value.direccion,"onUpdate:modelValue":a[16]||(a[16]=i=>e.value.direccion=i),icon:l(b)},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{da as _};
