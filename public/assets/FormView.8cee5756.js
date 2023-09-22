import{q as I,af as R,ag as k,as as q,a9 as C,y as N,I as U,at as j,o as z,c as O,w as d,a as l,d as T,j as g,B as $,u as i,C as h,av as A,aw as D,z as E,g as G}from"./index.94f69dfc.js";import{r as H,m as J,u as K}from"./index.esm.8eaf8d5b.js";import{e as v}from"./expense.service.a55cf1c0.js";const P={class:"container mx-auto"},Q={class:"grid md:grid-cols-2 gap-2"},W={__name:"FormView",props:{path:"",saveLabel:"",state:{}},setup(V){const c=V,{t:o}=R(),b=k(),w=q(),y=C(),p=[{id:1,label:o("message.expense.statuses.active")},{id:0,label:o("message.expense.statuses.inactive")},{id:2,label:o("message.expense.statuses.deleted")}],a=N({_id:"",concepto:"",estado:p[0]}),B=U(()=>({concepto:{required:H,maxLength:J(250)}})),m=K(B,a);j(async()=>{if(c.path==="update"){const s=await v.read(w.params);a.value=s.data,a.value.estado=p.filter(e=>e.id===s.data.estado)[0]}});const F=s=>{const{_id:e,concepto:n,estado:r}=s.value,t={_id:e,concepto:n,estado:r.id};return c.path==="create"?v.create(t):v.update(t)},L=c.path==="create"?o("message.expense.created.success"):o("message.expense.updated.success"),M=c.path==="create"?o("message.expense.created.error"):o("message.expense.updated.error"),S=async()=>{await m.value.$validate()?F(a).then(()=>{b.success(L),y.push("/setup/expense")}).catch(e=>{var n,r,t;if((r=(n=e.response)==null?void 0:n.data)!=null&&r.msg){b.error(`${M} ${e.response.data.msg}`);return}if((t=e.response.data)!=null&&t.errors){const u=e.response.data.errors;for(let _ of u);}}):console.log("error")};return(s,e)=>(z(),O(G,{isForm:"",onSubmit:E(S,["prevent"])},{footer:d(()=>[l(T,{label:s.$t(`message.${c.saveLabel}`),type:"submit",color:"success"},null,8,["label"])]),default:d(()=>{var n,r,t,u,_,x;return[g("div",null,[g("div",P,[g("div",Q,[l($,{label:s.$t("message.expense.concept"),help:(t=(r=(n=i(m))==null?void 0:n.concept)==null?void 0:r.$errors[0])==null?void 0:t.$message},{default:d(()=>[l(h,{modelValue:a.value.concepto,"onUpdate:modelValue":e[0]||(e[0]=f=>a.value.concepto=f),icon:i(A)},null,8,["modelValue","icon"])]),_:1},8,["label","help"]),l($,{label:s.$t("message.expense.status"),help:(x=(_=(u=i(m))==null?void 0:u.estado)==null?void 0:_.$errors[0])==null?void 0:x.$message},{default:d(()=>[l(h,{modelValue:a.value.estado,"onUpdate:modelValue":e[1]||(e[1]=f=>a.value.estado=f),icon:i(D),options:p},null,8,["modelValue","icon"])]),_:1},8,["label","help"])])])])]}),_:1},8,["onSubmit"]))}},ee=I(W,[["__scopeId","data-v-b2826c8b"]]);export{ee as F};