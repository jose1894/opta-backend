import{u as j,ak as C,au as I,ae as N,r as T,g as U,ax as q,o as z,c as O,a as i,b as p,i as l,p as d,_ as h,az as A,ar as D,j as E}from"./index.b6490627.js";import{r as G,m as H,u as J}from"./index.esm.e4937ab4.js";import{b as K,a as V,_ as P}from"./BaseButton.d5c30e56.js";import{_ as w}from"./FormField.74da7989.js";import{e as v}from"./expense.service.4b404559.js";const Q={class:"container mx-auto"},W={class:"grid md:grid-cols-2 gap-2"},X={style:{display:"flex","justify-content":"space-between"}},Y={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(y){const c=y,{t:r}=j(),b=C(),F=I(),x=N(),m=[{id:1,label:r("message.expense.statuses.active")},{id:0,label:r("message.expense.statuses.inactive")}],a=T({_id:"",concepto:"",estado:m[0]}),L=U(()=>({concepto:{required:G,maxLength:H(250)}})),f=J(L,a);q(async()=>{if(c.path==="update"){const s=await v.read(F.params);a.value=s.data,a.value.estado=m.filter(e=>e.id===s.data.estado)[0]}});const k=s=>{const{_id:e,concepto:t,estado:n}=s.value,o={_id:e,concepto:t,estado:n.id};return c.path==="create"?v.create(o):v.update(o)},B=c.path==="create"?r("message.expense.created.success"):r("message.expense.updated.success"),M=c.path==="create"?r("message.expense.created.error"):r("message.expense.updated.error"),S=async()=>{await f.value.$validate()?k(a).then(()=>{b.success(B),x.push("/setup/expense")}).catch(e=>{var t,n,o;if((n=(t=e.response)==null?void 0:t.data)!=null&&n.msg){b.error(`${M} ${e.response.data.msg}`);return}if((o=e.response.data)!=null&&o.errors){const u=e.response.data.errors;for(let _ of u);}}):console.log("error")},R=()=>x.push("/setup/expense");return(s,e)=>(z(),O(P,{isForm:"",onSubmit:E(S,["prevent"])},{footer:i(()=>[p("div",X,[l(V,{label:s.$t(`message.${c.saveLabel}`),type:"submit",color:"success"},null,8,["label"]),l(V,{label:s.$t("message.return"),color:"info",onClick:e[2]||(e[2]=t=>R())},null,8,["label"])])]),default:i(()=>{var t,n,o,u,_,$;return[p("div",null,[p("div",Q,[p("div",W,[l(w,{label:s.$t("message.expense.concept"),help:(o=(n=(t=d(f))==null?void 0:t.concept)==null?void 0:n.$errors[0])==null?void 0:o.$message},{default:i(()=>[l(h,{modelValue:a.value.concepto,"onUpdate:modelValue":e[0]||(e[0]=g=>a.value.concepto=g),icon:d(A)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l(w,{label:s.$t("message.expense.status"),help:($=(_=(u=d(f))==null?void 0:u.estado)==null?void 0:_.$errors[0])==null?void 0:$.$message},{default:i(()=>[l(h,{modelValue:a.value.estado,"onUpdate:modelValue":e[1]||(e[1]=g=>a.value.estado=g),icon:d(D),options:m},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])])])]}),_:1},8,["onSubmit"]))}},oe=K(Y,[["__scopeId","data-v-2ff0311b"]]);export{oe as F};
