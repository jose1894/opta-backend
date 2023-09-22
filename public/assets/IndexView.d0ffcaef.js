import{ag as ae,ah as ne,aa as oe,S as X,I as v,y as f,o as m,r as E,a as i,w as c,j as o,f as w,E as r,$ as G,K as A,L as H,M as F,d as D,u as n,ai as le,aj as O,ak as ie,al as ue,A as K,c as _,T as re,x as ce,_ as de,b as Q,ao as me,B as ge,Q as W,e as fe,g as z,i as he,ap as ve,aq as pe,p as J}from"./index.e27aaed2.js";import{C as $e}from"./CardBoxComponentEmpty.8b08f16b.js";import{i as U}from"./Industries.service.b38b7368.js";import{_ as be}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const _e=["onClick"],ke=["data-label"],ye=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"IndustryTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:u}=ae(),g=ne(),I=oe(),d=X(),k=v(()=>{var e;return(e=d.industries)==null?void 0:e.industrias}),S=v(()=>d.industries.total),y=f(!1),C=f(!1),j=v(()=>d.industries.perPage),h=v(()=>d.industries.page);f([]);const p=f([]),N=v(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=f(!1),b=e=>{l.value=!l.value,$("sort",e,l.value)},P=v(()=>Math.ceil(S.value/j.value)),T=v(()=>+h.value),B=v(()=>{const e=[];for(let s=0;s<P.value;s++)e.push(s);return e}),M=e=>{$("changePage",e)},L=e=>{I.push({name:"IndustriesUpdate",params:{id:e}})},Y=e=>p.value=e,R=()=>{const{nombre:e}=p.value;return e},Z=u("message.industry.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),$("changePage",h.value)}).catch(e=>{var s;g.error(`${u("message.industry.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=p.value;return U.delete(e)},se=()=>{const{_id:e}=p.value;U.restore(e).then(()=>{g.success(u("message.industry.restore.success")),$("changePage",h.value)}).catch(s=>{var t;g.error(`${u("message.industry.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(m(),E(A,null,[i(G,{modelValue:C.value,"onUpdate:modelValue":s[0]||(s[0]=t=>C.value=t),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:c(()=>[o("strong",null,[w(r(e.$t("message.industry.deleted.question"))+" ",1),o("b",null,r(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:y.value,"onUpdate:modelValue":s[1]||(s[1]=t=>y.value=t),title:"Please confirm",onConfirm:se},{default:c(()=>[o("strong",null,[w(r(e.$t("message.industry.restore.question"))+" ",1),o("b",null,r(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:s[2]||(s[2]=t=>b("codigo"))},r(e.$t("message.industry.code")),1),o("th",{onClick:s[3]||(s[3]=t=>b("nombre"))},r(e.$t("message.industry.name")),1),o("th",{onClick:s[4]||(s[4]=t=>b("estado"))},r(e.$t("message.industry.status")),1)])]),o("tbody",null,[(m(!0),E(A,null,H(n(N),(t,te)=>(m(),E("tr",{key:t._id,onClick:q=>Y(t)},[o("td",{"data-label":e.$t("message.industry.code")},r(t.codigo),9,ke),o("td",{"data-label":e.$t("message.industry.name")},r(t.nombre),9,ye),o("td",{"data-label":e.$t("message.industry.status")},r(e.$t(`message.industry.statuses.${a(t.estado)}`)),9,Ce),o("td",Pe,[i(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:c(()=>[F(i(D,{color:"success",icon:n(le),messageTooltip:n(u)("message.restore"),small:"",onClick:s[5]||(s[5]=q=>y.value=!0)},null,8,["icon","messageTooltip"]),[[O,V.checkDelete&&t.estado===2]]),F(i(D,{color:"info",icon:n(ie),messageTooltip:n(u)("message.edit"),small:"",onClick:q=>L(t._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!V.checkDelete&&t.estado!==2]]),F(i(D,{color:"danger",icon:n(ue),messageTooltip:n(u)("message.delete"),small:"",onClick:s[6]||(s[6]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[O,!V.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),o("div",we,[i(re,null,{default:c(()=>[i(K,null,{default:c(()=>[(m(!0),E(A,null,H(n(B),t=>(m(),_(D,{key:t,active:t===n(h)-1,label:t+1,color:t===n(h)?"lightDark":"whiteDark",small:"",onClick:te=>M(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+r(n(T))+" of "+r(n(P)),1)]),_:1})])],64))}},Me={__name:"IndexView",setup(V){const $=f([{name:"Inicio"}]),u=X(),g=f(1),I=f(10),d=ce({switch:[]}),k=a=>{U.index(a).then(l=>{u.industries=l,g.value=l.page,I.value=l.perPage})};k({page:g.value});const S=f(!1),y=()=>{p({page:g.value}),S.value=d.switch.length!==0},C=a=>{p({page:a})},j=(a,l)=>{N({sortBy:a,sortDesc:l})},h=a=>{U.getDelete(a).then(l=>{u.industries=l,g.value=l.page,I.value=l.perPage})},p=a=>{d.switch.length===0?k({page:a}):h({page:a})},N=a=>{d.switch.length===0?k(a):h(a)};return(a,l)=>(m(),_(de,null,{default:c(()=>[i(he,null,{default:c(()=>{var b,P,T,B,M;return[i(Q,{icon:n(ve),title:a.$t("message.industry.industries")},{default:c(()=>[i(D,{to:{name:"IndustriesCreate"},icon:n(pe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(me,{items:$.value},null,8,["items"]),i(ge,{label:""},{default:c(()=>[i(be,{modelValue:d.switch,"onUpdate:modelValue":l[0]||(l[0]=L=>d.switch=L),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:y},null,8,["modelValue"])]),_:1}),(b=n(u))!=null&&b.industries?W("",!0):(m(),_(Q,{key:0,icon:n(J),title:"Empty variation"},null,8,["icon"])),(P=n(u))!=null&&P.jobPositions?W("",!0):(m(),_(fe,{key:1,color:"danger",icon:n(J)},{default:c(()=>[o("b",null,r(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(B=(T=n(u))==null?void 0:T.industries)==null?void 0:B.industrias)!=null&&M.length?(m(),_(z,{key:2,class:"mb-6","has-table":""},{default:c(()=>[i(De,{checkDelete:S.value,onChangePage:C,onSort:j},null,8,["checkDelete"])]),_:1})):(m(),_(z,{key:3},{default:c(()=>[i($e)]),_:1}))]}),_:1})]),_:1}))}};export{Me as default};