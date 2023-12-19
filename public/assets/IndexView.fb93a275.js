import{u as se,ak as le,ae as oe,f as X,g as h,r as f,o as g,h as U,i,a as r,b as o,z as y,t as c,F as A,k as R,d as j,p as l,al as ne,S as G,am as ie,s as ue,x as z,c as _,y as ce,U as re,A as me,m as H,B as ge,ap as de,aq as fe,G as W}from"./index.336063ef.js";import{a as D,_ as J}from"./BaseButton.db055bcd.js";import{_ as K}from"./SectionTitleLineWithButton.59f38d3f.js";import{_ as pe}from"./NotificationBar.ae3e0b11.js";import{C as he}from"./CardBoxComponentEmpty.f42c41ad.js";import{C as Q}from"./CardBoxModal.bb1588ee.js";import{l as I}from"./languages.service.33515c35.js";import{_ as ve}from"./FormField.d3fa831d.js";import{_ as $e}from"./FormCheckRadioGroup.6593f948.js";import{B as be}from"./Breadcrumb.ad8cdde5.js";import"./FormCheckRadio.c3b60c2c.js";const _e=["onClick"],ke=["data-label"],Ce=["data-label"],Pe=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"LanguageTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:u}=se(),d=le(),S=oe(),m=X(),k=h(()=>{var e;return(e=m.languages)==null?void 0:e.idiomas}),B=h(()=>m.languages.total),C=f(!1),P=f(!1),E=h(()=>m.languages.perPage),p=h(()=>m.languages.page);f([]);const v=f([]),N=h(()=>k.value),s=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=f(!1),b=e=>{n.value=!n.value,$("sort",e,n.value)},w=h(()=>Math.ceil(B.value/E.value)),T=h(()=>+p.value),L=h(()=>{const e=[];for(let a=0;a<w.value;a++)e.push(a);return e}),M=e=>{$("changePage",e)},F=e=>{S.push({name:"LanguagesUpdate",params:{id:e}})},Y=e=>v.value=e,O=()=>{const{nombre:e}=v.value;return e},Z=u("message.language.deleted.success"),x=async()=>{ee().then(()=>{d.success(Z),$("changePage",p.value)}).catch(e=>{var a;d.error(`${u("message.language.deleted.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return I.delete(e)},ae=()=>{const{_id:e}=v.value;I.restore(e).then(()=>{d.success(u("message.language.restore.success")),$("changePage",p.value)}).catch(a=>{var t;d.error(`${u("message.language.restore.error")} ${(t=a==null?void 0:a.response)==null?void 0:t.data.msg}`)})};return(e,a)=>(g(),U(A,null,[i(Q,{modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=t=>P.value=t),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:r(()=>[o("strong",null,[y(c(e.$t("message.language.deleted.question"))+" ",1),o("b",null,c(O()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=t=>C.value=t),title:e.$t("message.pleaseConfirm"),onConfirm:ae},{default:r(()=>[o("strong",null,[y(c(e.$t("message.language.restore.question"))+" ",1),o("b",null,c(O()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:a[2]||(a[2]=t=>b("codigo"))},c(e.$t("message.language.code")),1),o("th",{onClick:a[3]||(a[3]=t=>b("nombre"))},c(e.$t("message.language.name")),1),o("th",{onClick:a[4]||(a[4]=t=>b("estado"))},c(e.$t("message.language.status")),1)])]),o("tbody",null,[(g(!0),U(A,null,R(l(N),(t,te)=>(g(),U("tr",{key:t._id,onClick:q=>Y(t)},[o("td",{"data-label":e.$t("message.language.code")},c(t.codigo),9,ke),o("td",{"data-label":e.$t("message.language.name")},c(t.nombre),9,Ce),o("td",{"data-label":e.$t("message.language.status")},c(e.$t(`message.language.statuses.${s(t.estado)}`)),9,Pe),o("td",we,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[j(i(D,{color:"success",icon:l(ne),messageTooltip:l(u)("message.restore"),small:"",onClick:a[5]||(a[5]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[G,V.checkDelete&&t.estado===2]]),j(i(D,{color:"info",icon:l(ie),messageTooltip:l(u)("message.edit"),small:"",onClick:q=>F(t._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!V.checkDelete&&t.estado!==2]]),j(i(D,{color:"danger",icon:l(ue),messageTooltip:l(u)("message.delete"),small:"",onClick:a[6]||(a[6]=q=>P.value=!0)},null,8,["icon","messageTooltip"]),[[G,!V.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),o("div",ye,[i(ce,null,{default:r(()=>[i(z,null,{default:r(()=>[(g(!0),U(A,null,R(l(L),t=>(g(),_(D,{key:t,active:t===l(p)-1,label:t+1,color:t===l(p)?"lightDark":"whiteDark",small:"",onClick:te=>M(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+c(l(T))+" of "+c(l(w)),1)]),_:1})])],64))}},qe={__name:"IndexView",setup(V){const $=f([{name:"Inicio"}]),u=X(),d=f(1),S=f(10),m=re({switch:[]}),k=s=>{I.index(s).then(n=>{u.languages=n,d.value=n.page,S.value=n.perPage})};k({page:d.value});const B=f(!1),C=()=>{v(d.value),B.value=m.switch.length!==0},P=s=>{v({page:s})},E=(s,n)=>{N({sortBy:s,sortDesc:n})},p=s=>{I.getDelete(s).then(n=>{u.languages=n,d.value=n.page,S.value=n.perPage})},v=s=>{m.switch.length===0?k(s):p(s)},N=s=>{m.switch.length===0?k(s):p(s)};return(s,n)=>(g(),_(me,null,{default:r(()=>[i(ge,null,{default:r(()=>{var b,w,T,L,M;return[i(K,{icon:l(de),title:s.$t("message.language.languages")},{default:r(()=>[i(D,{to:"languages/create",icon:l(fe),label:s.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(be,{items:$.value},null,8,["items"]),i(ve,{label:""},{default:r(()=>[i($e,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=F=>m.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:C},null,8,["modelValue"])]),_:1}),(b=l(u))!=null&&b.languages?H("",!0):(g(),_(K,{key:0,icon:l(W),title:"Empty variation"},null,8,["icon"])),(w=l(u))!=null&&w.languages?H("",!0):(g(),_(pe,{key:1,color:"danger",icon:l(W)},{default:r(()=>[o("b",null,c(s.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(L=(T=l(u))==null?void 0:T.languages)==null?void 0:L.idiomas)!=null&&M.length?(g(),_(J,{key:2,class:"mb-6","has-table":""},{default:r(()=>[i(De,{checkDelete:B.value,onChangePage:P,onSort:E},null,8,["checkDelete"])]),_:1})):(g(),_(J,{key:3},{default:r(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{qe as default};
