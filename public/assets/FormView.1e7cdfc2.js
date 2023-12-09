import{u as H,ak as J,au as K,ae as Q,r as S,ax as W,g as X,o as Y,c as Z,a as u,b as _,i,N as x,d as ee,_ as b,p as n,ay as se,S as ae,ar as w,az as te,j as oe}from"./index.4a61edd7.js";import{a as D,_ as le}from"./BaseButton.d111364f.js";import{_ as f}from"./FormField.929b004e.js";import{r as F,u as ie}from"./index.esm.7fbc5eb8.js";import{s as ne}from"./states.services.fd43ec79.js";import{c as B}from"./cities.service.41736be5.js";import{c as re}from"./countries.service.9dee6dae.js";const de={class:"grid md:grid-cols-2 gap-4"},ue={style:{display:"flex","justify-content":"space-between"}},$e={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(y){const p=y,{t:c}=H(),C=J(),P=K(),L=Q();let V=[{id:1,label:c("message.city.statuses.active")},{id:0,label:c("message.city.statuses.inactive")},{id:2,label:c("message.city.statuses.deleted")}],$=S([]),h=S([]);const a=S({_id:"",codigo:"00",nombre:"",estado:V[0],pais:h.value,state:$.value}),T=s=>{const{_id:e,codigo:l,nombre:o,estado:r,pais:t,state:m}=s.value,v={_id:e,codigo:l,nombre:o,estado:r.id,pais:t.id,state:m.id};return p.path==="create"?B.create(v):B.update(v)};W(async()=>{var l,o,r;let s=await re.getDelete({estado:1});const e=(s==null?void 0:s.paises)||[];if(console.log(e),h.value=e.map(t=>({id:t._id,label:t.nombre})),p.path==="update"){const t=await B.read(P.params);(l=t.data)!=null&&l.state,a.value=t.data,a.value.estado=V.filter(m=>m.id===t.data.estado)[0],a.value.pais=U((o=t.data)==null?void 0:o.pais),k(a.value.pais,(r=t.data)==null?void 0:r.state)}});const U=s=>({id:s._id,label:s.nombre}),q=X(()=>({nombre:{required:F},estado:{required:F}})),g=ie(q,a),k=(s,e={})=>{const{id:l}=s;$.value=[],A(l).then(o=>{const r=(o==null?void 0:o.estados)||[];$.value=r.map(t=>({id:t._id,label:t.nombre})),p.path==="update"&&(a.value.state=U(e))}).catch(o=>{console.log(o)})},A=async s=>await ne.estadosByPais(s),I=p.path==="create"?c("message.city.created.success"):c("message.city.updated.success"),E=async()=>{const s=await g.value.$validate();console.log(s),s?T(a).then(()=>{C.success(I),L.push("/setup/cities")}).catch(e=>{var l,o;if((l=e.response.data)!=null&&l.msg){C.error(`${c("message.city.created.error")} ${e.response.data.msg}`);return}if((o=e.response.data)!=null&&o.errors){const r=e.response.data.errors;for(let t of r);}}):console.log("error")},G=()=>L.push("/setup/cities");return(s,e)=>(Y(),Z(le,{isForm:"",onSubmit:oe(E,["prevent"])},{footer:u(()=>[_("div",ue,[i(D,{label:s.$t(`message.${p.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),i(D,{label:s.$t("message.return"),color:"info",onClick:e[5]||(e[5]=l=>G())},null,8,["label"])])]),default:u(()=>{var l,o,r,t,m,v,M,N,O,R,j,z;return[_("div",{class:x(y.path!=="create"?"grid md:grid-cols-3 gap-4":"grid md:grid-cols-2 gap-4")},[ee(i(f,{label:s.$t("message.city.code")},{default:u(()=>[i(b,{name:"codigo",modelValue:a.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=d=>a.value.codigo=d),icon:n(se),readonly:"true"},null,8,["modelValue","icon"])]),_:1},8,["label"]),[[ae,y.path!=="create"]]),i(f,{label:s.$t("message.city.country"),help:(r=(o=(l=n(g))==null?void 0:l.estado)==null?void 0:o.$errors[0])==null?void 0:r.$message},{default:u(()=>[i(b,{modelValue:a.value.pais,"onUpdate:modelValue":e[1]||(e[1]=d=>a.value.pais=d),icon:n(w),options:n(h),onOnSelectChange:k},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),i(f,{label:s.$t("message.city.state"),help:(v=(m=(t=n(g))==null?void 0:t.state)==null?void 0:m.$errors[0])==null?void 0:v.$message},{default:u(()=>[i(b,{modelValue:a.value.state,"onUpdate:modelValue":e[2]||(e[2]=d=>a.value.state=d),icon:n(w),options:n($)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"])],2),_("div",de,[i(f,{label:s.$t("message.city.name"),help:(O=(N=(M=n(g))==null?void 0:M.nombre)==null?void 0:N.$errors[0])==null?void 0:O.$message},{default:u(()=>[i(b,{modelValue:a.value.nombre,"onUpdate:modelValue":e[3]||(e[3]=d=>a.value.nombre=d),icon:n(te)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),i(f,{label:s.$t("message.city.status"),help:(z=(j=(R=n(g))==null?void 0:R.estado)==null?void 0:j.$errors[0])==null?void 0:z.$message},{default:u(()=>[i(b,{modelValue:a.value.estado,"onUpdate:modelValue":e[4]||(e[4]=d=>a.value.estado=d),icon:n(w),options:n(V)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{$e as _};