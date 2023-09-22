import{af as z,ag as O,as as T,a9 as A,y as M,at as D,I as E,o as G,c as H,w as c,a as n,d as J,j as K,B as b,u as l,C as f,au as Q,av as W,aw as R,z as X,g as Y}from"./index.cb093d8e.js";import{r as V,m as Z,u as P}from"./index.esm.25e21f11.js";import{c as ee}from"./countries.service.19451b6a.js";import{s as _}from"./states.services.652d1538.js";const se={class:"grid md:grid-cols-4 gap-4"},re={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(k){const g=k,{t:m}=z(),h=O(),x=T(),F=A();let v=[{id:1,label:m("message.state.statuses.active")},{id:0,label:m("message.state.statuses.inactive")},{id:2,label:m("message.state.statuses.deleted")}],$=M([]);const t=M({_id:"",codigo:"00",nombre:"",estado:v[0],pais:$.value}),I=s=>{const{_id:e,codigo:o,nombre:a,estado:i,pais:d}=s.value,r={_id:e,codigo:o,nombre:a,estado:i.id,pais:d.id};return g.path==="create"?_.create(r):_.update(r)};D(async()=>{var o;let s=await ee.index();const e=(s==null?void 0:s.paises)||[];if($.value=e.map(a=>({id:a._id,label:a.nombre})),g.path==="update"){const a=await _.read(x.params),i=((o=a.data)==null?void 0:o.pais)||[],d=e.filter(r=>r._id==i._id)[0];t.value=a.data,t.value.estado=v.filter(r=>r.id===a.data.estado)[0],t.value.pais={id:d._id,label:d.nombre}}});const N=E(()=>({codigo:{required:V,maxLength:Z(3)},nombre:{required:V},estado:{required:V}})),p=P(N,t),j=g.path==="create"?m("message.state.created.success"):m("message.state.updated.success"),q=async()=>{const s=await p.value.$validate();console.log(s),s?I(t).then(()=>{h.success(j),F.push("/setup/states")}).catch(e=>{var o,a;if((o=e.response.data)!=null&&o.msg){h.error(`${m("message.state.created.error")} ${e.response.data.msg}`);return}if((a=e.response.data)!=null&&a.errors){const i=e.response.data.errors;for(let d of i);}}):console.log("error")};return(s,e)=>(G(),H(Y,{isForm:"",onSubmit:X(q,["prevent"])},{footer:c(()=>[n(J,{label:s.$t(`message.${g.saveLabel}`),type:"submit",color:"success"},null,8,["label"])]),default:c(()=>{var o,a,i,d,r,w,y,B,L,S,C,U;return[K("div",se,[n(b,{label:s.$t("message.state.code"),help:(i=(a=(o=l(p))==null?void 0:o.codigo)==null?void 0:a.$errors[0])==null?void 0:i.$message},{default:c(()=>[n(f,{name:"codigo",modelValue:t.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value.codigo=u),icon:l(Q)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),n(b,{label:s.$t("message.state.name"),help:(w=(r=(d=l(p))==null?void 0:d.nombre)==null?void 0:r.$errors[0])==null?void 0:w.$message},{default:c(()=>[n(f,{modelValue:t.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=u=>t.value.nombre=u),icon:l(W)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),n(b,{label:s.$t("message.state.country"),help:(L=(B=(y=l(p))==null?void 0:y.estado)==null?void 0:B.$errors[0])==null?void 0:L.$message},{default:c(()=>[n(f,{modelValue:t.value.pais,"onUpdate:modelValue":e[2]||(e[2]=u=>t.value.pais=u),icon:l(R),options:l($)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),n(b,{label:s.$t("message.state.status"),help:(U=(C=(S=l(p))==null?void 0:S.estado)==null?void 0:C.$errors[0])==null?void 0:U.$message},{default:c(()=>[n(f,{modelValue:t.value.estado,"onUpdate:modelValue":e[3]||(e[3]=u=>t.value.estado=u),icon:l(R),options:l(v)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{re as _};
