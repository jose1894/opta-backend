import{u as te,ak as ae,ae as ne,f as K,g as h,r as p,o as d,h as E,i as c,a as r,b as n,z as x,t as u,F as A,k as R,d as L,p as o,al as oe,S as O,am as le,s as ce,x as z,c as b,y as ie,U as re,A as ue,m as G,B as me,ap as de,aq as ge}from"./index.cc1855cb.js";import{a as y,_ as H}from"./BaseButton.00025e8c.js";import{_ as pe}from"./NotificationBar.63f4cacf.js";import{C as fe}from"./CardBoxComponentEmpty.47fc2389.js";import{_ as W}from"./SectionTitleLineWithButton.e8c4cbcb.js";import{C as J}from"./CardBoxModal.baa739ff.js";import{e as M}from"./expense.service.7e438ae0.js";import{_ as he}from"./FormField.c25f55fc.js";import{_ as ve}from"./FormCheckRadioGroup.0473097c.js";import{B as _e}from"./Breadcrumb.0860d204.js";import"./FormCheckRadio.5511dc53.js";const $e=n("th",null,null,-1),be=["onClick"],ke=["data-label"],Ce=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},Pe={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},xe={__name:"ExpenseTableView",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:_}){const{t:i}=te(),g=ae(),V=ne(),m=K(),k=h(()=>m.expense.gastos),U=h(()=>m.expense.total),C=p(!1),$=p(!1),I=h(()=>m.expense.perPage),f=h(()=>m.expense.page),v=p([]);p([]);const N=h(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=p(!1),w=e=>{l.value=!l.value,_("sort",e,l.value)},P=h(()=>Math.ceil(U.value/I.value)),S=h(()=>+f.value),T=h(()=>{const e=[];for(let s=0;s<P.value;s++)e.push(s);return e}),B=e=>{_("changePage",e)},F=e=>{V.push({name:"ExpenseUpdate",params:{id:e}})},Q=e=>v.value=e,j=()=>{const{concepto:e}=v.value;return e},X=i("message.expense.deleted.success"),Y=async()=>{Z().then(()=>{g.success(X),_("changePage",f.value)}).catch(e=>{var s;g.error(`${i("message.expense.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},Z=()=>{const{_id:e}=v.value;return M.delete(e)},ee=()=>{const{_id:e}=v.value;M.restore(e).then(()=>{g.success(i("message.expense.restore.success")),_("changePage",f.value)}).catch(s=>{var t;g.error(`${i("message.expense.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),E(A,null,[c(J,{modelValue:$.value,"onUpdate:modelValue":s[0]||(s[0]=t=>$.value=t),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:Y,"has-cancel":""},{default:r(()=>[n("strong",null,[x(u(e.$t("message.expense.deleted.question"))+" ",1),n("b",null,u(j()),1)]),x(" ? ")]),_:1},8,["modelValue","title"]),c(J,{modelValue:C.value,"onUpdate:modelValue":s[1]||(s[1]=t=>C.value=t),title:e.$t("message.pleaseConfirm"),onConfirm:ee},{default:r(()=>[n("strong",null,[x(u(e.$t("message.expense.restore.question"))+" ",1),n("b",null,u(j()),1)]),x(" ? ")]),_:1},8,["modelValue","title"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:s[2]||(s[2]=t=>w("concepto"))},u(e.$t("message.expense.concept")),1),n("th",{onClick:s[3]||(s[3]=t=>w("estado"))},u(e.$t("message.expense.status")),1),$e])]),n("tbody",null,[(d(!0),E(A,null,R(o(N),(t,se)=>(d(),E("tr",{key:t._id,onClick:q=>Q(t)},[n("td",{"data-label":e.$t("message.expense.concept")},u(t.concepto),9,ke),n("td",{"data-label":e.$t("message.expense.status")},u(e.$t(`message.expense.statuses.${a(t.estado)}`)),9,Ce),n("td",we,[c(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[L(c(y,{color:"success",icon:o(oe),messageTooltip:o(i)("message.restore"),small:"",onClick:s[4]||(s[4]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[O,D.checkDelete&&t.estado===2]]),L(c(y,{color:"info",icon:o(le),messageTooltip:o(i)("message.edit"),small:"",onClick:q=>F(t._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!D.checkDelete&&t.estado!==2]]),L(c(y,{color:"danger",icon:o(ce),messageTooltip:o(i)("message.delete"),small:"",onClick:s[5]||(s[5]=q=>$.value=!0)},null,8,["icon","messageTooltip"]),[[O,!D.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,be))),128))])]),n("div",Pe,[c(ie,null,{default:r(()=>[c(z,null,{default:r(()=>[(d(!0),E(A,null,R(o(T),t=>(d(),b(y,{key:t,active:t===o(f)-1,label:t+1,color:t===o(f)?"lightDark":"whiteDark",small:"",onClick:se=>B(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+u(o(S))+" of "+u(o(P)),1)]),_:1})])],64))}},Fe={__name:"IndexView",setup(D){const _=p([{name:"Inicio"}]),i=K(),g=p(1),V=p(10),m=re({switch:[]}),k=a=>{M.index(a).then(l=>{i.expense=l,g.value=l.page,V.value=l.perPage})};k({page:g.value});const U=a=>{v({page:a})},C=(a,l)=>{N({sortBy:a,sortDesc:l})},$=p(!1),I=()=>{v(g.value),$.value=m.switch.length!==0},f=a=>{M.getDelete(a).then(l=>{i.expense=l,g.value=l.page,V.value=l.perPage})},v=a=>{m.switch.length===0?k(a):f(a)},N=a=>{m.switch.length===0?k(a):f(a)};return(a,l)=>(d(),b(ue,null,{default:r(()=>[c(me,null,{default:r(()=>{var w,P,S,T,B;return[c(W,{icon:o(de),title:a.$t("message.expense.expense")},{default:r(()=>[c(y,{to:{name:"ExpenseCreate"},icon:o(ge),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),c(_e,{items:_.value},null,8,["items"]),c(he,{label:""},{default:r(()=>[c(ve,{modelValue:m.switch,"onUpdate:modelValue":l[0]||(l[0]=F=>m.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:I},null,8,["modelValue"])]),_:1}),(w=o(i))!=null&&w.expense?G("",!0):(d(),b(W,{key:0,icon:a.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(P=o(i))!=null&&P.expense?G("",!0):(d(),b(pe,{key:1,color:"danger",icon:a.mdiTableOff},{default:r(()=>[n("b",null,u(a.$t("message.empty_table"))+".",1),x(" When there's nothing to show ")]),_:1},8,["icon"])),(B=(T=(S=o(i))==null?void 0:S.expense)==null?void 0:T.gastos)!=null&&B.length?(d(),b(H,{key:2,class:"mb-6","has-table":""},{default:r(()=>[c(xe,{checkDelete:$.value,onChangePage:U,onSort:C},null,8,["checkDelete"])]),_:1})):(d(),b(H,{key:3},{default:r(()=>[c(fe)]),_:1}))]}),_:1})]),_:1}))}};export{Fe as default};
