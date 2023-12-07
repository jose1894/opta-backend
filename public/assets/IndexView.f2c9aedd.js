import{u as ae,ak as oe,ae as le,f as X,g as h,r as f,o as d,h as E,i,a as u,b as o,z as y,t as r,F as L,k as R,d as j,p as l,al as ne,S as G,am as ie,s as re,x as z,c as b,y as ce,U as ue,A as me,m as H,B as de,ap as ge,aq as fe,G as W}from"./index.b6490627.js";import{a as D,_ as J}from"./BaseButton.d5c30e56.js";import{_ as K}from"./SectionTitleLineWithButton.461f9878.js";import{_ as pe}from"./NotificationBar.9d0089dc.js";import{C as he}from"./CardBoxComponentEmpty.cd64ecd6.js";import{C as Q}from"./CardBoxModal.69505658.js";import{p as N}from"./profiles.service.d9e8ffec.js";import{_ as ve}from"./FormField.74da7989.js";import{_ as $e}from"./FormCheckRadioGroup.347ae3c3.js";import{B as _e}from"./Breadcrumb.e3ca3049.js";import"./FormCheckRadio.34186dea.js";const be=["onClick"],ke=["data-label"],Ce=["data-label"],Pe=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"ProfilesTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:c}=ae(),g=oe(),S=le(),m=X(),k=h(()=>m.profiles.perfiles),B=h(()=>m.profiles.total),C=f(!1),P=f(!1),F=h(()=>m.profiles.perPage),p=h(()=>m.profiles.page);f([]);const v=f([]),T=h(()=>k.value);console.log(T);const a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=f(!1),_=e=>{n.value=!n.value,$("sort",e,n.value)},w=h(()=>Math.ceil(B.value/F.value)),M=h(()=>+p.value),U=h(()=>{const e=[];for(let s=0;s<w.value;s++)e.push(s);return e}),I=e=>{$("changePage",e)},q=e=>{S.push({name:"ProfilesUpdate",params:{id:e}})},Y=e=>v.value=e,O=()=>{const{descripcion:e}=v.value;return e},Z=c("message.profiles.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),$("changePage",p.value)}).catch(e=>{var s;g.error(`${c("message.profiles.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return N.delete(e)},se=()=>{const{_id:e}=v.value;N.restore(e).then(()=>{g.success(c("message.profiles.restore.success")),$("changePage",p.value)}).catch(s=>{var t;g.error(`${c("message.profiles.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),E(L,null,[i(Q,{modelValue:P.value,"onUpdate:modelValue":s[0]||(s[0]=t=>P.value=t),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[o("strong",null,[y(r(e.$t("message.profiles.deleted.question"))+" ",1),o("b",null,r(O()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:C.value,"onUpdate:modelValue":s[1]||(s[1]=t=>C.value=t),title:e.$t("message.pleaseConfirm"),onConfirm:se},{default:u(()=>[o("strong",null,[y(r(e.$t("message.profiles.restore.question"))+" ",1),o("b",null,r(O()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:s[2]||(s[2]=t=>_("codigo"))},r(e.$t("message.profiles.code")),1),o("th",{onClick:s[3]||(s[3]=t=>_("descripcion"))},r(e.$t("message.profiles.description")),1),o("th",{onClick:s[4]||(s[4]=t=>_("estado"))},r(e.$t("message.profiles.status")),1)])]),o("tbody",null,[(d(!0),E(L,null,R(l(T),(t,te)=>(d(),E("tr",{key:t._id,onClick:A=>Y(t)},[o("td",{"data-label":e.$t("message.profiles.code")},r(t.codigo),9,ke),o("td",{"data-label":e.$t("message.profiles.description")},r(t.descripcion),9,Ce),o("td",{"data-label":e.$t("message.profiles.status")},r(e.$t(`message.profiles.statuses.${a(t.estado)}`)),9,Pe),o("td",we,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[j(i(D,{color:"success",icon:l(ne),messageTooltip:"t('message.restore')",small:"",onClick:s[5]||(s[5]=A=>C.value=!0)},null,8,["icon"]),[[G,V.checkDelete&&t.estado===2]]),j(i(D,{color:"info",icon:l(ie),messageTooltip:l(c)("message.edit"),small:"",onClick:A=>q(t._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!V.checkDelete&&t.estado!==2]]),j(i(D,{color:"danger",icon:l(re),messageTooltip:l(c)("message.delete"),small:"",onClick:s[6]||(s[6]=A=>P.value=!0)},null,8,["icon","messageTooltip"]),[[G,!V.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,be))),128))])]),o("div",ye,[i(ce,null,{default:u(()=>[i(z,null,{default:u(()=>[(d(!0),E(L,null,R(l(U),t=>(d(),b(D,{key:t,active:t===l(p)-1,label:t+1,color:t===l(p)?"lightDark":"whiteDark",small:"",onClick:te=>I(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+r(l(M))+" of "+r(l(w)),1)]),_:1})])],64))}},Ae={__name:"IndexView",setup(V){const $=f([{name:"Inicio"}]),c=X(),g=f(1),S=f(10),m=ue({switch:[]}),k=a=>{N.index(a).then(n=>{c.profiles=n,g.value=n.page,S.value=n.perPage})};k({page:g.value});const B=f(!1),C=()=>{v(g.value),B.value=m.switch.length!==0},P=a=>{v({page:a})},F=(a,n)=>{T({sortBy:a,sortDesc:n})},p=a=>{N.getDelete(a).then(n=>{c.profiles=n,g.value=n.page,S.value=n.perPage})},v=a=>{m.switch.length===0?k(a):p(a)},T=a=>{m.switch.length===0?k(a):p(a)};return(a,n)=>(d(),b(me,null,{default:u(()=>[i(de,null,{default:u(()=>{var _,w,M,U,I;return[i(K,{icon:l(ge),title:a.$t("message.profiles.profiles")},{default:u(()=>[i(D,{to:{name:"ProfilesCreate"},icon:l(fe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(_e,{items:$.value},null,8,["items"]),i(ve,{label:""},{default:u(()=>[i($e,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=q=>m.switch=q),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:C},null,8,["modelValue"])]),_:1}),(_=l(c))!=null&&_.profiles?H("",!0):(d(),b(K,{key:0,icon:l(W),title:"Empty variation"},null,8,["icon"])),(w=l(c))!=null&&w.profiles?H("",!0):(d(),b(pe,{key:1,color:"danger",icon:l(W)},{default:u(()=>[o("b",null,r(a.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(I=(U=(M=l(c))==null?void 0:M.profiles)==null?void 0:U.perfiles)!=null&&I.length?(d(),b(J,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(De,{checkDelete:B.value,onChangePage:P,onSort:F},null,8,["checkDelete"])]),_:1})):(d(),b(J,{key:3},{default:u(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{Ae as default};
