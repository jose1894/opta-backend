import{u as se,ak as ae,ae as oe,f as Q,g as p,r as v,o as d,h as M,i,a as u,b as o,z as P,t as c,F as L,k as z,d as O,p as l,al as le,S as j,am as ne,s as ie,x as G,c as k,y as ce,U as re,A as ue,m as H,B as me,ap as de,aq as ge}from"./index.cc1855cb.js";import{a as D,_ as W}from"./BaseButton.00025e8c.js";import{_ as ve}from"./NotificationBar.63f4cacf.js";import{C as fe}from"./CardBoxComponentEmpty.47fc2389.js";import{_ as J}from"./SectionTitleLineWithButton.e8c4cbcb.js";import{_ as pe}from"./FormCheckRadioGroup.0473097c.js";import{_ as he}from"./FormField.c25f55fc.js";import{a as N}from"./activities.service.729faede.js";import{C as K}from"./CardBoxModal.baa739ff.js";import{B as be}from"./Breadcrumb.0860d204.js";import"./FormCheckRadio.5511dc53.js";const $e=o("th",null,null,-1),ke=["onClick"],_e=["data-label"],Ce=["data-label"],ye=["data-label"],we=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},De={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Ve={__name:"ActivityTable.view",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:r}=se(),g=ae(),S=oe(),m=Q(),_=p(()=>m.activities.actividades),T=p(()=>m.activities.total),C=v(!1),y=v(!1),I=p(()=>m.activities.perPage),f=p(()=>m.activities.page);v([]);const h=v([]),E=p(()=>_.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=v(!1),b=e=>{n.value=!n.value,$("sort",e,n.value)},w=p(()=>Math.ceil(T.value/I.value)),B=p(()=>+f.value),A=p(()=>{const e=[];for(let t=0;t<w.value;t++)e.push(t);return e}),U=e=>{$("changePage",e)},F=e=>{S.push({name:"ActivitiesUpdate",params:{id:e}})},X=e=>h.value=e,R=()=>{const{nombre:e}=h.value;return e},Y=r("message.activity.deleted.success"),Z=async()=>{x().then(()=>{g.success(Y),$("changePage",f.value)}).catch(e=>{var t;g.error(`${r("message.activity.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},x=()=>{const{_id:e}=h.value;return N.delete(e)},ee=()=>{const{_id:e}=h.value;N.restore(e).then(()=>{g.success(r("message.activity.restore.success")),$("changePage",f.value)}).catch(t=>{var s;g.error(`${r("message.activity.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(d(),M(L,null,[i(K,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=s=>y.value=s),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:Z,"has-cancel":""},{default:u(()=>[o("strong",null,[P(c(e.$t("message.activity.deleted.question"))+" ",1),o("b",null,c(R()),1)]),P(" ? ")]),_:1},8,["modelValue","title"]),i(K,{modelValue:C.value,"onUpdate:modelValue":t[1]||(t[1]=s=>C.value=s),title:e.$t("message.pleaseConfirm"),onConfirm:ee},{default:u(()=>[o("strong",null,[P(c(e.$t("message.activity.restore.question"))+" ",1),o("b",null,c(R()),1)]),P(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:t[2]||(t[2]=s=>b("nombre"))},c(e.$t("message.activity.name")),1),o("th",{onClick:t[3]||(t[3]=s=>b("siglas"))},c(e.$t("message.activity.acronyms")),1),o("th",{onClick:t[4]||(t[4]=s=>b("unidadNegocio"))},c(e.$t("message.activity.bussinesUnit")),1),o("th",{onClick:t[5]||(t[5]=s=>b("estado"))},c(e.$t("message.activity.status")),1),$e])]),o("tbody",null,[(d(!0),M(L,null,z(l(E),(s,te)=>(d(),M("tr",{key:s._id,onClick:q=>X(s)},[o("td",{"data-label":e.$t("message.activity.name")},c(s.nombre),9,_e),o("td",{"data-label":e.$t("message.activity.acronyms")},c(s.siglas),9,Ce),o("td",{"data-label":e.$t("message.activity.bussinesUnit")},c(s.unidadNegocio.nombre),9,ye),o("td",{"data-label":e.$t("message.activity.status")},c(e.$t(`message.activity.statuses.${a(s.estado)}`)),9,we),o("td",Pe,[i(G,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[O(i(D,{color:"success",icon:l(le),messageTooltip:l(r)("message.restore"),small:"",onClick:t[6]||(t[6]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[j,V.checkDelete&&s.estado===2]]),O(i(D,{color:"info",icon:l(ne),messageTooltip:l(r)("message.edit"),small:"",onClick:q=>F(s._id)},null,8,["icon","messageTooltip","onClick"]),[[j,!V.checkDelete&&s.estado!==2]]),O(i(D,{color:"danger",icon:l(ie),messageTooltip:l(r)("message.delete"),small:"",onClick:t[7]||(t[7]=q=>y.value=!0)},null,8,["icon","messageTooltip"]),[[j,!V.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,ke))),128))])]),o("div",De,[i(ce,null,{default:u(()=>[i(G,null,{default:u(()=>[(d(!0),M(L,null,z(l(A),s=>(d(),k(D,{key:s,active:s===l(f)-1,label:s+1,color:s===l(f)?"lightDark":"whiteDark",small:"",onClick:te=>U(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+c(l(B))+" of "+c(l(w)),1)]),_:1})])],64))}},Le={__name:"IndexView",setup(V){const $=v([{name:"Inicio"}]),r=Q(),g=v(1),S=v(10),m=re({switch:[]}),_=a=>{N.index(a).then(n=>{r.activities=n,g.value=n.page,S.value=n.perPage})};_({page:g.value});const T=v(!1),C=()=>{h(g.value),T.value=m.switch.length!==0},y=a=>{h({page:a})},I=(a,n)=>{E({sortBy:a,sortDesc:n})},f=a=>{N.getDelete(a).then(n=>{r.activities=n,g.value=n.page,S.value=n.perPage})},h=a=>{m.switch.length===0?_(a):f(a)},E=a=>{m.switch.length===0?_(a):f(a)};return(a,n)=>(d(),k(ue,null,{default:u(()=>[i(me,null,{default:u(()=>{var b,w,B,A,U;return[i(J,{icon:l(de),title:a.$t("message.activity.activities")},{default:u(()=>[i(D,{to:{name:"ActivitiesCreate"},icon:l(ge),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(be,{items:$.value},null,8,["items"]),i(he,{label:""},{default:u(()=>[i(pe,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=F=>m.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:C},null,8,["modelValue"])]),_:1}),(b=l(r))!=null&&b.activities?H("",!0):(d(),k(J,{key:0,icon:a.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(w=l(r))!=null&&w.activities?H("",!0):(d(),k(ve,{key:1,color:"danger",icon:a.mdiTableOff},{default:u(()=>[o("b",null,c(a.$t("message.empty_table"))+".",1),P(" When there's nothing to show ")]),_:1},8,["icon"])),(U=(A=(B=l(r))==null?void 0:B.activities)==null?void 0:A.actividades)!=null&&U.length?(d(),k(W,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(Ve,{checkDelete:T.value,onChangePage:y,onSort:I},null,8,["checkDelete"])]),_:1})):(d(),k(W,{key:3},{default:u(()=>[i(fe)]),_:1}))]}),_:1})]),_:1}))}};export{Le as default};
