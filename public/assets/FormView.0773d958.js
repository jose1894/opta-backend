import{u as Z,ak as ee,au as se,ae,U as oe,r as $,g as I,ax as te,o as L,c as R,a as r,b as v,i as l,p as i,_ as V,ay as le,az as ie,ar as E,h as ne,F as re,k as ce,j as de}from"./index.336063ef.js";import{a as N,_ as ue}from"./BaseButton.db055bcd.js";import{_ as g}from"./FormField.d3fa831d.js";import{r as P,m as me,u as pe}from"./index.esm.15ae8c3b.js";import{p as w}from"./profiles.service.fbeecccc.js";import{i as fe}from"./itemsMenu.service.47de43ac.js";import{_ as ge}from"./FormCheckRadioGroup.6593f948.js";import{p as ve}from"./profileActions.service.45c7652f.js";const be={class:"grid md:grid-cols-2 gap-2"},_e=v("div",{class:"grid md:grid-cols-1"},[v("h4",{class:"text-xl"},"Acciones del perfil")],-1),he={class:"grid md:grid-cols-2 gap-2"},$e={style:{display:"flex","justify-content":"space-between"}},Ce={__name:"FormView",props:{path:"",saveLabel:""},setup(O){const m=O,{t:c}=Z(),C=ee(),T=se(),A=ae();let d=[];const b=oe({checkbox:[]}),k=[{id:1,label:c("message.profiles.statuses.active")},{id:0,label:c("message.profiles.statuses.inactive")}];let x=$([]),y=$([]),q=$([]);const M=I(()=>y.value),t=$({_id:"",codigo:"00",descripcion:"",menu:x.value,accionesPerfil:q.value,estado:k[0]}),z=s=>{const{_id:e,codigo:a,descripcion:o,menu:u,accionesPerfil:p,estado:h}=s.value,f={_id:e,codigo:a,descripcion:o,menu:u.id,accionesPerfil:p,estado:h.id};return m.path==="create"?w.create(f):w.update(f)};te(async()=>{var s;if(D(),G(),m.path==="update"){const e=await w.read(T.params);t.value=e.data,t.value.estado=k.filter(o=>o.id===e.data.estado)[0];const a=(s=e.data)==null?void 0:s.accionesPerfil;d=a.map(o=>({_id:o._id})),b.checkbox=a.map(o=>o._id),console.log(b)}});const D=async()=>{let s=await fe.allMenu();const e=s==null?void 0:s.data.menu;x.value=e.map(a=>({id:a._id,label:a.descripcion}))},G=async()=>{let s=await ve.allAccionesPerfiles();const e=s==null?void 0:s.data.accionesPerfiles;console.log(e),y.value=H(e),console.log(y)},H=s=>s.map(({_id:e,descripcion:a})=>({[e]:a})),J=I(()=>({codigo:{required:P,maxLength:me(3)},descripcion:{required:P},estado:{required:P}})),_=pe(J,t),K=m.path==="create"?c("message.profiles.created.success"):c("message.profiles.updated.success"),Q=m.path==="create"?c("message.profiles.created.error"):c("message.profiles.updated.error"),W=async()=>{await _.value.$validate()?z(t).then(()=>{C.success(K),A.push("/setup/profiles")}).catch(e=>{var a,o;if((a=e.response.data)!=null&&a.msg){C.error(`${Q} ${e.response.data.msg}`);return}if((o=e.response.data)!=null&&o.errors){const u=e.response.data.errors;for(let p of u);}}):console.log("error")},X=s=>{const e=Object.keys(s)[0];d.filter(o=>o._id===e).length===0?d.push({_id:e}):d=d.filter(o=>o._id!==e),t.value.accionesPerfil=d,console.log(t.value)},Y=()=>A.push("/setup/profiles");return(s,e)=>(L(),R(ue,{isForm:"",onSubmit:de(W,["prevent"])},{footer:r(()=>[v("div",$e,[l(N,{label:s.$t(`message.${m.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),l(N,{label:s.$t("message.return"),color:"info",onClick:e[5]||(e[5]=a=>Y())},null,8,["label"])])]),default:r(()=>{var a,o,u,p,h,f,B,S,U;return[v("div",be,[l(g,{label:s.$t("message.profiles.code"),help:(u=(o=(a=i(_))==null?void 0:a.codigo)==null?void 0:o.$errors[0])==null?void 0:u.$message},{default:r(()=>[l(V,{name:"codigo",modelValue:t.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value.codigo=n),icon:i(le)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(g,{label:s.$t("message.profiles.description"),help:(f=(h=(p=i(_))==null?void 0:p.descripcion)==null?void 0:h.$errors[0])==null?void 0:f.$message},{default:r(()=>[l(V,{modelValue:t.value.descripcion,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value.descripcion=n),icon:i(ie)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(g,{label:s.$t("message.profiles.menu")},{default:r(()=>[l(V,{modelValue:t.value.menu,"onUpdate:modelValue":e[2]||(e[2]=n=>t.value.menu=n),icon:i(E),options:i(x)},null,8,["modelValue","icon","options"])]),_:1},8,["label"]),l(g,{label:s.$t("message.profiles.status"),help:(U=(S=(B=i(_))==null?void 0:B.estado)==null?void 0:S.$errors[0])==null?void 0:U.$message},{default:r(()=>[l(V,{modelValue:t.value.estado,"onUpdate:modelValue":e[3]||(e[3]=n=>t.value.estado=n),icon:i(E),options:k},null,8,["modelValue","icon"])]),_:1},8,["label","help"])]),_e,v("div",he,[(L(!0),ne(re,null,ce(i(M),(n,F)=>(L(),R(g,{label:""},{default:r(()=>[l(ge,{modelValue:b.checkbox,"onUpdate:modelValue":e[4]||(e[4]=j=>b.checkbox=j),name:"sample-checkbox",options:i(M)[F],onChange:j=>X(i(M)[F])},null,8,["modelValue","options","onChange"])]),_:2},1024))),256))])]}),_:1},8,["onSubmit"]))}};export{Ce as _};
