import{ag as oe,ah as ae,aa as le,S as X,I as h,y as p,o as m,r as I,a as i,w as u,j as l,f as w,E as r,$ as G,K as q,L as H,M as F,d as y,u as a,ai as ne,aj as O,ak as ie,al as ce,A as K,c as A,T as re,x as ue,_ as de,b as Q,ao as me,B as ge,Q as W,e as pe,g as z,i as fe,ap as he,aq as ve,p as J}from"./index.e27aaed2.js";import{C as $e}from"./CardBoxComponentEmpty.8b08f16b.js";import{p as E}from"./profileActions.service.e8621814.js";import{_ as _e}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const Ae=["onClick"],be=["data-label"],ke=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ProfileActionsTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:c}=oe(),g=ae(),V=le(),d=X(),b=h(()=>d.profileActions.accionesPerfiles),S=h(()=>d.profileActions.total),k=p(!1),C=p(!1),U=h(()=>d.profileActions.perPage),f=h(()=>d.profileActions.page);p([]);const v=p([]),N=h(()=>b.value),o=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=p(!1),_=e=>{n.value=!n.value,$("sort",e,n.value)},P=h(()=>Math.ceil(S.value/U.value)),T=h(()=>+f.value),B=h(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),M=e=>{$("changePage",e)},j=e=>{V.push({name:"ProfileActionsUpdate",params:{id:e}})},Y=e=>v.value=e,R=()=>{const{descripcion:e}=v.value;return e},Z=c("message.profileAction.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),$("changePage",f.value)}).catch(e=>{var t;g.error(`${c("message.profileAction.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return E.delete(e)},te=()=>{const{_id:e}=v.value;E.restore(e).then(()=>{g.success(c("message.profileAction.restore.success")),$("changePage",f.value)}).catch(t=>{var s;g.error(`${c("message.profileAction.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(m(),I(q,null,[i(G,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[l("strong",null,[w(r(e.$t("message.profileAction.deleted.question"))+" ",1),l("b",null,r(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=s=>k.value=s),title:"Please confirm",onConfirm:te},{default:u(()=>[l("strong",null,[w(r(e.$t("message.profileAction.restore.question"))+" ",1),l("b",null,r(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),l("table",null,[l("thead",null,[l("tr",null,[l("th",{onClick:t[2]||(t[2]=s=>_("codigo"))},r(e.$t("message.profileAction.code")),1),l("th",{onClick:t[3]||(t[3]=s=>_("descripcion"))},r(e.$t("message.profileAction.description")),1),l("th",{onClick:t[4]||(t[4]=s=>_("estado"))},r(e.$t("message.profileAction.status")),1)])]),l("tbody",null,[(m(!0),I(q,null,H(a(N),(s,se)=>(m(),I("tr",{key:s._id,onClick:L=>Y(s)},[l("td",{"data-label":e.$t("message.profileAction.code")},r(s.codigo),9,be),l("td",{"data-label":e.$t("message.profileAction.description")},r(s.descripcion),9,ke),l("td",{"data-label":e.$t("message.profileAction.status")},r(e.$t(`message.profileAction.statuses.${o(s.estado)}`)),9,Ce),l("td",Pe,[i(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[F(i(y,{color:"success",icon:a(ne),messageTooltip:a(c)("message.restore"),small:"",onClick:t[5]||(t[5]=L=>k.value=!0)},null,8,["icon","messageTooltip"]),[[O,D.checkDelete&&s.estado===2]]),F(i(y,{color:"info",icon:a(ie),messageTooltip:a(c)("message.edit"),small:"",onClick:L=>j(s._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!D.checkDelete&&s.estado!==2]]),F(i(y,{color:"danger",icon:a(ce),messageTooltip:a(c)("message.delete"),small:"",onClick:t[6]||(t[6]=L=>C.value=!0)},null,8,["icon","messageTooltip"]),[[O,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,Ae))),128))])]),l("div",we,[i(re,null,{default:u(()=>[i(K,null,{default:u(()=>[(m(!0),I(q,null,H(a(B),s=>(m(),A(y,{key:s,active:s===a(f)-1,label:s+1,color:s===a(f)?"lightDark":"whiteDark",small:"",onClick:se=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+r(a(T))+" of "+r(a(P)),1)]),_:1})])],64))}},Me={__name:"IndexView",setup(D){const $=p([{name:"Inicio"}]),c=X(),g=p(1),V=p(10),d=ue({switch:[]}),b=o=>{E.index(o).then(n=>{c.profileActions=n,g.value=n.page,V.value=n.perPage})};b({page:g.value});const S=p(!1),k=()=>{v({page:g.value}),S.value=d.switch.length!==0},C=o=>{v({page:o})},U=(o,n)=>{N({sortBy:o,sortDesc:n})},f=o=>{E.getDelete(o).then(n=>{c.profileActions=n,g.value=n.page,V.value=n.perPage})},v=o=>{d.switch.length===0?b({page:o}):f({page:o})},N=o=>{d.switch.length===0?b(o):f(o)};return(o,n)=>(m(),A(de,null,{default:u(()=>[i(fe,null,{default:u(()=>{var _,P,T,B,M;return[i(Q,{icon:a(he),title:o.$t("message.profileAction.profileActions")},{default:u(()=>[i(y,{to:"profileActions/create",icon:a(ve),label:o.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(me,{items:$.value},null,8,["items"]),i(ge,{label:""},{default:u(()=>[i(_e,{modelValue:d.switch,"onUpdate:modelValue":n[0]||(n[0]=j=>d.switch=j),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:k},null,8,["modelValue"])]),_:1}),(_=a(c))!=null&&_.profileActions?W("",!0):(m(),A(Q,{key:0,icon:a(J),title:"Empty variation"},null,8,["icon"])),(P=a(c))!=null&&P.profileActions?W("",!0):(m(),A(pe,{key:1,color:"danger",icon:a(J)},{default:u(()=>[l("b",null,r(o.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(B=(T=a(c))==null?void 0:T.profileActions)==null?void 0:B.accionesPerfiles)!=null&&M.length?(m(),A(z,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(ye,{checkDelete:S.value,onChangePage:C,onSort:U},null,8,["checkDelete"])]),_:1})):(m(),A(z,{key:3},{default:u(()=>[i($e)]),_:1}))]}),_:1})]),_:1}))}};export{Me as default};
