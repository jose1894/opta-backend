import{ag as te,ah as le,aa as ne,S as X,I as v,y as f,o as d,r as I,a as u,w as r,j as n,f as y,E as i,$ as G,K as A,L as H,M as F,d as D,u as l,ai as oe,aj as O,ak as ue,al as ce,A as K,c as _,T as ie,x as re,_ as ge,b as Q,ao as de,B as me,Q as W,e as fe,g as z,i as he,ap as ve,aq as pe,p as J}from"./index.e27aaed2.js";import{C as $e}from"./CardBoxComponentEmpty.8b08f16b.js";import{l as E}from"./languages.service.441e1ab6.js";import{_ as be}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const _e=["onClick"],ke=["data-label"],Ce=["data-label"],Pe=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"LanguageTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:c}=te(),m=le(),S=ne(),g=X(),k=v(()=>{var e;return(e=g.languages)==null?void 0:e.idiomas}),T=v(()=>g.languages.total),C=f(!1),P=f(!1),U=v(()=>g.languages.perPage),h=v(()=>g.languages.page);f([]);const p=f([]),N=v(()=>k.value),t=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],o=f(!1),b=e=>{o.value=!o.value,$("sort",e,o.value)},w=v(()=>Math.ceil(T.value/U.value)),B=v(()=>+h.value),L=v(()=>{const e=[];for(let a=0;a<w.value;a++)e.push(a);return e}),M=e=>{$("changePage",e)},j=e=>{S.push({name:"LanguagesUpdate",params:{id:e}})},Y=e=>p.value=e,R=()=>{const{nombre:e}=p.value;return e},Z=c("message.language.deleted.success"),x=async()=>{ee().then(()=>{m.success(Z),$("changePage",h.value)}).catch(e=>{var a;m.error(`${c("message.language.deleted.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},ee=()=>{const{_id:e}=p.value;return E.delete(e)},ae=()=>{const{_id:e}=p.value;E.restore(e).then(()=>{m.success(c("message.language.restore.success")),$("changePage",h.value)}).catch(a=>{var s;m.error(`${c("message.language.restore.error")} ${(s=a==null?void 0:a.response)==null?void 0:s.data.msg}`)})};return(e,a)=>(d(),I(A,null,[u(G,{modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=s=>P.value=s),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:r(()=>[n("strong",null,[y(i(e.$t("message.language.deleted.question"))+" ",1),n("b",null,i(R()),1)]),y(" ? ")]),_:1},8,["modelValue"]),u(G,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=s=>C.value=s),title:"Please confirm",onConfirm:ae},{default:r(()=>[n("strong",null,[y(i(e.$t("message.language.restore.question"))+" ",1),n("b",null,i(R()),1)]),y(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:a[2]||(a[2]=s=>b("codigo"))},i(e.$t("message.language.code")),1),n("th",{onClick:a[3]||(a[3]=s=>b("nombre"))},i(e.$t("message.language.name")),1),n("th",{onClick:a[4]||(a[4]=s=>b("estado"))},i(e.$t("message.language.status")),1)])]),n("tbody",null,[(d(!0),I(A,null,H(l(N),(s,se)=>(d(),I("tr",{key:s._id,onClick:q=>Y(s)},[n("td",{"data-label":e.$t("message.language.code")},i(s.codigo),9,ke),n("td",{"data-label":e.$t("message.language.name")},i(s.nombre),9,Ce),n("td",{"data-label":e.$t("message.language.status")},i(e.$t(`message.language.statuses.${t(s.estado)}`)),9,Pe),n("td",we,[u(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[F(u(D,{color:"success",icon:l(oe),messageTooltip:l(c)("message.restore"),small:"",onClick:a[5]||(a[5]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[O,V.checkDelete&&s.estado===2]]),F(u(D,{color:"info",icon:l(ue),messageTooltip:l(c)("message.edit"),small:"",onClick:q=>j(s._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!V.checkDelete&&s.estado!==2]]),F(u(D,{color:"danger",icon:l(ce),messageTooltip:l(c)("message.delete"),small:"",onClick:a[6]||(a[6]=q=>P.value=!0)},null,8,["icon","messageTooltip"]),[[O,!V.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),n("div",ye,[u(ie,null,{default:r(()=>[u(K,null,{default:r(()=>[(d(!0),I(A,null,H(l(L),s=>(d(),_(D,{key:s,active:s===l(h)-1,label:s+1,color:s===l(h)?"lightDark":"whiteDark",small:"",onClick:se=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+i(l(B))+" of "+i(l(w)),1)]),_:1})])],64))}},Me={__name:"IndexView",setup(V){const $=f([{name:"Inicio"}]),c=X(),m=f(1),S=f(10),g=re({switch:[]}),k=t=>{E.index(t).then(o=>{c.languages=o,m.value=o.page,S.value=o.perPage})};k({page:m.value});const T=f(!1),C=()=>{p({page:m.value}),T.value=g.switch.length!==0},P=t=>{p({page:t})},U=(t,o)=>{N({sortBy:t,sortDesc:o})},h=t=>{E.getDelete(t).then(o=>{c.languages=o,m.value=o.page,S.value=o.perPage})},p=t=>{g.switch.length===0?k({page:t}):h({page:t})},N=t=>{g.switch.length===0?k(t):h(t)};return(t,o)=>(d(),_(ge,null,{default:r(()=>[u(he,null,{default:r(()=>{var b,w,B,L,M;return[u(Q,{icon:l(ve),title:t.$t("message.language.languages")},{default:r(()=>[u(D,{to:"languages/create",icon:l(pe),label:t.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),u(de,{items:$.value},null,8,["items"]),u(me,{label:""},{default:r(()=>[u(be,{modelValue:g.switch,"onUpdate:modelValue":o[0]||(o[0]=j=>g.switch=j),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:C},null,8,["modelValue"])]),_:1}),(b=l(c))!=null&&b.languages?W("",!0):(d(),_(Q,{key:0,icon:l(J),title:"Empty variation"},null,8,["icon"])),(w=l(c))!=null&&w.languages?W("",!0):(d(),_(fe,{key:1,color:"danger",icon:l(J)},{default:r(()=>[n("b",null,i(t.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(L=(B=l(c))==null?void 0:B.languages)==null?void 0:L.idiomas)!=null&&M.length?(d(),_(z,{key:2,class:"mb-6","has-table":""},{default:r(()=>[u(De,{checkDelete:T.value,onChangePage:P,onSort:U},null,8,["checkDelete"])]),_:1})):(d(),_(z,{key:3},{default:r(()=>[u($e)]),_:1}))]}),_:1})]),_:1}))}};export{Me as default};