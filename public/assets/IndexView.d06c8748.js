import{af as se,ag as ne,a9 as le,R as Q,I as v,y as f,o as d,r as E,a as u,w as i,j as n,f as y,E as c,Z as G,J as F,K as H,P as O,d as D,u as o,ah as oe,ai as R,aj as ue,ak as ce,A as J,c as _,S as ie,x as re,_ as ge,b as K,an as de,B as me,O as W,e as fe,g as Z,i as he,ao as ve,ap as pe,p as z}from"./index.cb093d8e.js";import{C as $e}from"./CardBoxComponentEmpty.87377cbc.js";import{l as U}from"./languages.service.311dc936.js";import{_ as be}from"./FormCheckRadioGroup.d9d00b52.js";import"./FormCheckRadio.256f47df.js";const _e=["onClick"],ke=["data-label"],Ce=["data-label"],Pe=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"LanguageTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:r}=se(),m=ne(),S=le(),g=Q(),k=v(()=>{var e;return(e=g.languages)==null?void 0:e.idiomas}),B=v(()=>g.languages.total),C=f(!1),P=f(!1),N=v(()=>g.languages.perPage),h=v(()=>g.languages.page);f([]);const p=f([]),T=v(()=>k.value),s=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=f(!1),b=e=>{l.value=!l.value,$("sort",e,l.value)},w=v(()=>Math.ceil(B.value/N.value)),L=v(()=>+h.value),I=v(()=>{const e=[];for(let a=0;a<w.value;a++)e.push(a);return e}),M=e=>{$("changePage",e)},j=e=>{S.push({name:"LanguagesUpdate",params:{id:e}})},X=e=>p.value=e,q=()=>{const{nombre:e}=p.value;return e},Y=r("message.language.deleted.success"),x=async()=>{ee().then(()=>{m.success(Y),$("changePage",h.value)}).catch(e=>{var a;m.error(`${r("message.language.deleted.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},ee=()=>{const{_id:e}=p.value;return U.delete(e)},ae=()=>{const{_id:e}=p.value;U.restore(e).then(()=>{m.success(r("message.language.restore.success")),$("changePage",h.value)}).catch(a=>{var t;m.error(`${r("message.language.restore.error")} ${(t=a==null?void 0:a.response)==null?void 0:t.data.msg}`)})};return(e,a)=>(d(),E(F,null,[u(G,{modelValue:P.value,"onUpdate:modelValue":a[0]||(a[0]=t=>P.value=t),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:i(()=>[n("strong",null,[y(c(e.$t("message.language.deleted.question"))+" ",1),n("b",null,c(q()),1)]),y(" ? ")]),_:1},8,["modelValue"]),u(G,{modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=t=>C.value=t),title:"Please confirm",onConfirm:ae},{default:i(()=>[n("strong",null,[y(c(e.$t("message.language.restore.question"))+" ",1),n("b",null,c(q()),1)]),y(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:a[2]||(a[2]=t=>b("codigo"))},c(e.$t("message.language.code")),1),n("th",{onClick:a[3]||(a[3]=t=>b("nombre"))},c(e.$t("message.language.name")),1),n("th",{onClick:a[4]||(a[4]=t=>b("estado"))},c(e.$t("message.language.status")),1)])]),n("tbody",null,[(d(!0),E(F,null,H(o(T),(t,te)=>(d(),E("tr",{key:t._id,onClick:A=>X(t)},[n("td",{"data-label":e.$t("message.language.code")},c(t.codigo),9,ke),n("td",{"data-label":e.$t("message.language.name")},c(t.nombre),9,Ce),n("td",{"data-label":e.$t("message.language.status")},c(e.$t(`message.language.statuses.${s(t.estado)}`)),9,Pe),n("td",we,[u(J,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[O(u(D,{color:"success",icon:o(oe),small:"",onClick:a[5]||(a[5]=A=>C.value=!0)},null,8,["icon"]),[[R,V.checkDelete&&t.estado===2]]),O(u(D,{color:"info",icon:o(ue),small:"",onClick:A=>j(t._id)},null,8,["icon","onClick"]),[[R,!V.checkDelete&&t.estado!==2]]),O(u(D,{color:"danger",icon:o(ce),small:"",onClick:a[6]||(a[6]=A=>P.value=!0)},null,8,["icon"]),[[R,!V.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),n("div",ye,[u(ie,null,{default:i(()=>[u(J,null,{default:i(()=>[(d(!0),E(F,null,H(o(I),t=>(d(),_(D,{key:t,active:t===o(h)-1,label:t+1,color:t===o(h)?"lightDark":"whiteDark",small:"",onClick:te=>M(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+c(o(L))+" of "+c(o(w)),1)]),_:1})])],64))}},Me={__name:"IndexView",setup(V){const $=f([{name:"Inicio"}]),r=Q(),m=f(1),S=f(10),g=re({switch:[]}),k=s=>{U.index(s).then(l=>{r.languages=l,m.value=l.page,S.value=l.perPage})};k({page:m.value});const B=f(!1),C=()=>{p({page:m.value}),B.value=g.switch.length!==0},P=s=>{p({page:s})},N=(s,l)=>{T({sortBy:s,sortDesc:l})},h=s=>{U.getDelete(s).then(l=>{r.languages=l,m.value=l.page,S.value=l.perPage})},p=s=>{g.switch.length===0?k({page:s}):h({page:s})},T=s=>{g.switch.length===0?k(s):h(s)};return(s,l)=>(d(),_(ge,null,{default:i(()=>[u(he,null,{default:i(()=>{var b,w,L,I,M;return[u(K,{icon:o(ve),title:s.$t("message.language.languages")},{default:i(()=>[u(D,{to:"languages/create",icon:o(pe),label:s.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),u(de,{items:$.value},null,8,["items"]),u(me,{label:""},{default:i(()=>[u(be,{modelValue:g.switch,"onUpdate:modelValue":l[0]||(l[0]=j=>g.switch=j),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:C},null,8,["modelValue"])]),_:1}),(b=o(r))!=null&&b.languages?W("",!0):(d(),_(K,{key:0,icon:o(z),title:"Empty variation"},null,8,["icon"])),(w=o(r))!=null&&w.languages?W("",!0):(d(),_(fe,{key:1,color:"danger",icon:o(z)},{default:i(()=>[n("b",null,c(s.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(I=(L=o(r))==null?void 0:L.languages)==null?void 0:I.idiomas)!=null&&M.length?(d(),_(Z,{key:2,class:"mb-6","has-table":""},{default:i(()=>[u(De,{checkDelete:B.value,onChangePage:P,onSort:N},null,8,["checkDelete"])]),_:1})):(d(),_(Z,{key:3},{default:i(()=>[u($e)]),_:1}))]}),_:1})]),_:1}))}};export{Me as default};
