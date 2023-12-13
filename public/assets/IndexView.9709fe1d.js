import{u as ae,ak as te,ae as ne,f as Q,g as f,r as h,o as d,h as U,i as r,a as u,b as n,z as y,t as c,F as L,k as z,d as O,p as o,al as oe,S as j,am as le,s as re,x as G,c as _,y as ce,U as ie,A as ue,m as H,B as me,ap as de,aq as ge}from"./index.49b91a9a.js";import{a as B,_ as W}from"./BaseButton.84fe76a1.js";import{_ as he}from"./NotificationBar.cb70b13a.js";import{C as be}from"./CardBoxComponentEmpty.b2c8f415.js";import{_ as J}from"./SectionTitleLineWithButton.b2b96e7a.js";import{C as K}from"./CardBoxModal.89707104.js";import{b as I}from"./branches.service.3e71f756.js";import{_ as fe}from"./FormField.03a460a3.js";import{_ as pe}from"./FormCheckRadioGroup.e7f28255.js";import{B as ve}from"./Breadcrumb.4f619e14.js";import"./FormCheckRadio.2d01fa5e.js";const $e=n("th",null,null,-1),ke=["onClick"],_e=["data-label"],Ce=["data-label"],we=["data-label"],Pe=["data-label"],ye={class:"before:hidden lg:w-1 whitespace-nowrap"},Be={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"BranchTableView",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:i}=ae(),g=te(),V=ne(),m=Q(),C=f(()=>m.branches.sucursales),E=f(()=>m.branches.total),w=h(!1),k=h(!1),N=f(()=>m.branches.perPage),b=f(()=>m.branches.page);h([]);const p=h([]),F=f(()=>C.value),t=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=h(!1),v=e=>{l.value=!l.value,$("sort",e,l.value)},P=f(()=>Math.ceil(E.value/N.value)),S=f(()=>+b.value),T=f(()=>{const e=[];for(let s=0;s<P.value;s++)e.push(s);return e}),M=e=>{$("changePage",e)},q=e=>{V.push({name:"BranchesUpdate",params:{id:e}})},X=e=>p.value=e,R=()=>{const{nombre:e}=p.value;return e},Y=i("message.branch.deleted.success"),Z=async()=>{x().then(()=>{g.success(Y),$("changePage",b.value)}).catch(e=>{var s;g.error(`${i("message.branch.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},x=()=>{const{_id:e}=p.value;return I.delete(e)},ee=()=>{const{_id:e}=p.value;I.restore(e).then(()=>{g.success(i("message.branch.restore.success")),$("changePage",b.value)}).catch(s=>{var a;g.error(`${i("message.branch.restore.error")} ${(a=s==null?void 0:s.response)==null?void 0:a.data.msg}`)})};return(e,s)=>(d(),U(L,null,[r(K,{modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=a=>k.value=a),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:Z,"has-cancel":""},{default:u(()=>[n("strong",null,[y(c(e.$t("message.branch.deleted.question"))+" ",1),n("b",null,c(R()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),r(K,{modelValue:w.value,"onUpdate:modelValue":s[1]||(s[1]=a=>w.value=a),title:e.$t("message.pleaseConfirm"),onConfirm:ee},{default:u(()=>[n("strong",null,[y(c(e.$t("message.branch.restore.question"))+" ",1),n("b",null,c(R()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:s[2]||(s[2]=a=>v("codigo"))},c(e.$t("message.branch.code")),1),n("th",{onClick:s[3]||(s[3]=a=>v("nombre"))},c(e.$t("message.branch.name")),1),n("th",{onClick:s[4]||(s[4]=a=>v("siglas"))},c(e.$t("message.branch.acronyms")),1),n("th",{onClick:s[5]||(s[5]=a=>v("estado"))},c(e.$t("message.branch.status")),1),$e])]),n("tbody",null,[(d(!0),U(L,null,z(o(F),(a,se)=>(d(),U("tr",{key:a._id,onClick:A=>X(a)},[n("td",{"data-label":e.$t("message.branch.code")},c(a.codigo),9,_e),n("td",{"data-label":e.$t("message.branch.name")},c(a.nombre),9,Ce),n("td",{"data-label":e.$t("message.branch.acronyms")},c(a.siglas),9,we),n("td",{"data-label":e.$t("message.branch.status")},c(e.$t(`message.branch.statuses.${t(a.estado)}`)),9,Pe),n("td",ye,[r(G,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[O(r(B,{color:"success",icon:o(oe),messageTooltip:o(i)("message.restore"),small:"",onClick:s[6]||(s[6]=A=>w.value=!0)},null,8,["icon","messageTooltip"]),[[j,D.checkDelete&&a.estado===2]]),O(r(B,{color:"info",icon:o(le),messageTooltip:o(i)("message.edit"),small:"",onClick:A=>q(a._id)},null,8,["icon","messageTooltip","onClick"]),[[j,!D.checkDelete&&a.estado!==2]]),O(r(B,{color:"danger",icon:o(re),messageTooltip:o(i)("message.delete"),small:"",onClick:s[7]||(s[7]=A=>k.value=!0)},null,8,["icon","messageTooltip"]),[[j,!D.checkDelete&&a.estado!==2]])]),_:2},1024)])],8,ke))),128))])]),n("div",Be,[r(ce,null,{default:u(()=>[r(G,null,{default:u(()=>[(d(!0),U(L,null,z(o(T),a=>(d(),_(B,{key:a,active:a===o(b)-1,label:a+1,color:a===o(b)?"lightDark":"whiteDark",small:"",onClick:se=>M(a+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+c(o(S))+" of "+c(o(P)),1)]),_:1})])],64))}},Le={__name:"IndexView",setup(D){const $=h([{name:"Inicio"}]),i=Q(),g=h(1),V=h(10),m=ie({switch:[]}),C=t=>{I.index(t).then(l=>{i.branches=l,g.value=l.page,V.value=l.perPage})};C({page:g.value});const E=t=>{p({page:t})},w=(t,l)=>{F({sortBy:t,sortDesc:l})},k=h(!1),N=()=>{p(g.value),k.value=m.switch.length!==0},b=t=>{I.getDelete(t).then(l=>{i.branches=l,g.value=l.page,V.value=l.perPage})},p=t=>{m.switch.length===0?C(t):b(t)},F=t=>{m.switch.length===0?C(t):b(t)};return(t,l)=>(d(),_(ue,null,{default:u(()=>[r(me,null,{default:u(()=>{var v,P,S,T,M;return[r(J,{icon:o(de),title:t.$t("message.branch.branches")},{default:u(()=>[r(B,{to:{name:"BranchesCreate"},icon:o(ge),label:t.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),r(ve,{items:$.value},null,8,["items"]),r(fe,{label:""},{default:u(()=>[r(pe,{modelValue:m.switch,"onUpdate:modelValue":l[0]||(l[0]=q=>m.switch=q),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:N},null,8,["modelValue"])]),_:1}),(v=o(i))!=null&&v.branches?H("",!0):(d(),_(J,{key:0,icon:t.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(P=o(i))!=null&&P.branches?H("",!0):(d(),_(he,{key:1,color:"danger",icon:t.mdiTableOff},{default:u(()=>[n("b",null,c(t.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(T=(S=o(i))==null?void 0:S.branches)==null?void 0:T.sucursales)!=null&&M.length?(d(),_(W,{key:2,class:"mb-6","has-table":""},{default:u(()=>[r(De,{checkDelete:k.value,onChangePage:E,onSort:w},null,8,["checkDelete"])]),_:1})):(d(),_(W,{key:3},{default:u(()=>[r(be)]),_:1}))]}),_:1})]),_:1}))}};export{Le as default};
