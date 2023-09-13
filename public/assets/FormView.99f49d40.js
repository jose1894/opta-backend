import{ag as A,ah as D,at as E,aa as G,y as x,au as H,I as J,o as K,c as Q,w as c,j as M,a as l,d as R,B as b,u as n,C as f,av as W,aw as X,ax as j,z as Y,g as Z}from"./index.e27aaed2.js";import{r as V,m as P,u as ee}from"./index.esm.6263d8b1.js";import{c as se}from"./countries.service.6413becf.js";import{s as h}from"./states.services.92a25f7c.js";const ae={class:"grid md:grid-cols-4 gap-4"},te={style:{display:"flex","justify-content":"space-between"}},ie={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(F){const g=F,{t:m}=A(),_=D(),I=E(),y=G();let v=[{id:1,label:m("message.state.statuses.active")},{id:0,label:m("message.state.statuses.inactive")},{id:2,label:m("message.state.statuses.deleted")}],$=x([]);const t=x({_id:"",codigo:"00",nombre:"",estado:v[0],pais:$.value}),N=s=>{const{_id:e,codigo:o,nombre:a,estado:i,pais:d}=s.value,r={_id:e,codigo:o,nombre:a,estado:i.id,pais:d.id};return g.path==="create"?h.create(r):h.update(r)};H(async()=>{var o;let s=await se.index();const e=(s==null?void 0:s.paises)||[];if($.value=e.map(a=>({id:a._id,label:a.nombre})),g.path==="update"){const a=await h.read(I.params),i=((o=a.data)==null?void 0:o.pais)||[],d=e.filter(r=>r._id==i._id)[0];t.value=a.data,t.value.estado=v.filter(r=>r.id===a.data.estado)[0],t.value.pais={id:d._id,label:d.nombre}}});const T=J(()=>({codigo:{required:V,maxLength:P(3)},nombre:{required:V},estado:{required:V}})),p=ee(T,t),q=g.path==="create"?m("message.state.created.success"):m("message.state.updated.success"),z=async()=>{const s=await p.value.$validate();console.log(s),s?N(t).then(()=>{_.success(q),y.push("/setup/states")}).catch(e=>{var o,a;if((o=e.response.data)!=null&&o.msg){_.error(`${m("message.state.created.error")} ${e.response.data.msg}`);return}if((a=e.response.data)!=null&&a.errors){const i=e.response.data.errors;for(let d of i);}}):console.log("error")},O=()=>y.push("/setup/states");return(s,e)=>(K(),Q(Z,{isForm:"",onSubmit:Y(z,["prevent"])},{footer:c(()=>[M("div",te,[l(R,{label:s.$t(`message.${g.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),l(R,{label:s.$t("message.return"),color:"info",onClick:e[4]||(e[4]=o=>O())},null,8,["label"])])]),default:c(()=>{var o,a,i,d,r,w,B,L,S,C,U,k;return[M("div",ae,[l(b,{label:s.$t("message.state.code"),help:(i=(a=(o=n(p))==null?void 0:o.codigo)==null?void 0:a.$errors[0])==null?void 0:i.$message},{default:c(()=>[l(f,{name:"codigo",modelValue:t.value.codigo,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value.codigo=u),icon:n(W)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(b,{label:s.$t("message.state.name"),help:(w=(r=(d=n(p))==null?void 0:d.nombre)==null?void 0:r.$errors[0])==null?void 0:w.$message},{default:c(()=>[l(f,{modelValue:t.value.nombre,"onUpdate:modelValue":e[1]||(e[1]=u=>t.value.nombre=u),icon:n(X)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(b,{label:s.$t("message.state.country"),help:(S=(L=(B=n(p))==null?void 0:B.estado)==null?void 0:L.$errors[0])==null?void 0:S.$message},{default:c(()=>[l(f,{modelValue:t.value.pais,"onUpdate:modelValue":e[2]||(e[2]=u=>t.value.pais=u),icon:n(j),options:n($)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"]),l(b,{label:s.$t("message.state.status"),help:(k=(U=(C=n(p))==null?void 0:C.estado)==null?void 0:U.$errors[0])==null?void 0:k.$message},{default:c(()=>[l(f,{modelValue:t.value.estado,"onUpdate:modelValue":e[3]||(e[3]=u=>t.value.estado=u),icon:n(j),options:n(v)},null,8,["modelValue","icon","options"])]),_:1},8,["label","help"])])]}),_:1},8,["onSubmit"]))}};export{ie as _};
