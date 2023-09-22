import{af as oe,ag as ae,a9 as le,R as Q,I as h,y as g,o as m,r as E,a as i,w as r,j as a,f as w,E as c,Z as G,J as L,K as H,P as O,d as y,u as n,ah as ne,ai as R,aj as ie,ak as ce,A as J,c as A,S as re,x as ue,_ as de,b as K,an as me,B as fe,O as W,e as ge,g as Z,i as pe,ao as he,ap as ve,p as z}from"./index.2b059d96.js";import{C as $e}from"./CardBoxComponentEmpty.c5973077.js";import{p as U}from"./profileActions.service.8e2e1444.js";import{_ as _e}from"./FormCheckRadioGroup.f120ae1c.js";import"./FormCheckRadio.b0cf8ca6.js";const Ae=["onClick"],be=["data-label"],ke=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ProfileActionsTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:u}=oe(),f=ae(),V=le(),d=Q(),b=h(()=>d.profileActions.accionesPerfiles),S=h(()=>d.profileActions.total),k=g(!1),C=g(!1),N=h(()=>d.profileActions.perPage),p=h(()=>d.profileActions.page);g([]);const v=g([]),T=h(()=>b.value),o=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=g(!1),_=e=>{l.value=!l.value,$("sort",e,l.value)},P=h(()=>Math.ceil(S.value/N.value)),B=h(()=>+p.value),I=h(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),M=e=>{$("changePage",e)},j=e=>{V.push({name:"ProfileActionsUpdate",params:{id:e}})},X=e=>v.value=e,q=()=>{const{descripcion:e}=v.value;return e},Y=u("message.profileAction.deleted.success"),x=async()=>{ee().then(()=>{f.success(Y),$("changePage",p.value)}).catch(e=>{var t;f.error(`${u("message.profileAction.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return U.delete(e)},te=()=>{const{_id:e}=v.value;U.restore(e).then(()=>{f.success(u("message.profileAction.restore.success")),$("changePage",p.value)}).catch(t=>{var s;f.error(`${u("message.profileAction.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(m(),E(L,null,[i(G,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:r(()=>[a("strong",null,[w(c(e.$t("message.profileAction.deleted.question"))+" ",1),a("b",null,c(q()),1)]),w(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=s=>k.value=s),title:"Please confirm",onConfirm:te},{default:r(()=>[a("strong",null,[w(c(e.$t("message.profileAction.restore.question"))+" ",1),a("b",null,c(q()),1)]),w(" ? ")]),_:1},8,["modelValue"]),a("table",null,[a("thead",null,[a("tr",null,[a("th",{onClick:t[2]||(t[2]=s=>_("codigo"))},c(e.$t("message.profileAction.code")),1),a("th",{onClick:t[3]||(t[3]=s=>_("descripcion"))},c(e.$t("message.profileAction.description")),1),a("th",{onClick:t[4]||(t[4]=s=>_("estado"))},c(e.$t("message.profileAction.status")),1)])]),a("tbody",null,[(m(!0),E(L,null,H(n(T),(s,se)=>(m(),E("tr",{key:s._id,onClick:F=>X(s)},[a("td",{"data-label":e.$t("message.profileAction.code")},c(s.codigo),9,be),a("td",{"data-label":e.$t("message.profileAction.description")},c(s.descripcion),9,ke),a("td",{"data-label":e.$t("message.profileAction.status")},c(e.$t(`message.profileAction.statuses.${o(s.estado)}`)),9,Ce),a("td",Pe,[i(J,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[O(i(y,{color:"success",icon:n(ne),small:"",onClick:t[5]||(t[5]=F=>k.value=!0)},null,8,["icon"]),[[R,D.checkDelete&&s.estado===2]]),O(i(y,{color:"info",icon:n(ie),small:"",onClick:F=>j(s._id)},null,8,["icon","onClick"]),[[R,!D.checkDelete&&s.estado!==2]]),O(i(y,{color:"danger",icon:n(ce),small:"",onClick:t[6]||(t[6]=F=>C.value=!0)},null,8,["icon"]),[[R,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,Ae))),128))])]),a("div",we,[i(re,null,{default:r(()=>[i(J,null,{default:r(()=>[(m(!0),E(L,null,H(n(I),s=>(m(),A(y,{key:s,active:s===n(p)-1,label:s+1,color:s===n(p)?"lightDark":"whiteDark",small:"",onClick:se=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),a("small",null,"Page "+c(n(B))+" of "+c(n(P)),1)]),_:1})])],64))}},Me={__name:"IndexView",setup(D){const $=g([{name:"Inicio"}]),u=Q(),f=g(1),V=g(10),d=ue({switch:[]}),b=o=>{U.index(o).then(l=>{u.profileActions=l,f.value=l.page,V.value=l.perPage})};b({page:f.value});const S=g(!1),k=()=>{v({page:f.value}),S.value=d.switch.length!==0},C=o=>{v({page:o})},N=(o,l)=>{T({sortBy:o,sortDesc:l})},p=o=>{U.getDelete(o).then(l=>{u.profileActions=l,f.value=l.page,V.value=l.perPage})},v=o=>{d.switch.length===0?b({page:o}):p({page:o})},T=o=>{d.switch.length===0?b(o):p(o)};return(o,l)=>(m(),A(de,null,{default:r(()=>[i(pe,null,{default:r(()=>{var _,P,B,I,M;return[i(K,{icon:n(he),title:o.$t("message.profileAction.profileActions")},{default:r(()=>[i(y,{to:"profileActions/create",icon:n(ve),label:o.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(me,{items:$.value},null,8,["items"]),i(fe,{label:""},{default:r(()=>[i(_e,{modelValue:d.switch,"onUpdate:modelValue":l[0]||(l[0]=j=>d.switch=j),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:k},null,8,["modelValue"])]),_:1}),(_=n(u))!=null&&_.profileActions?W("",!0):(m(),A(K,{key:0,icon:n(z),title:"Empty variation"},null,8,["icon"])),(P=n(u))!=null&&P.profileActions?W("",!0):(m(),A(ge,{key:1,color:"danger",icon:n(z)},{default:r(()=>[a("b",null,c(o.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(I=(B=n(u))==null?void 0:B.profileActions)==null?void 0:I.accionesPerfiles)!=null&&M.length?(m(),A(Z,{key:2,class:"mb-6","has-table":""},{default:r(()=>[i(ye,{checkDelete:S.value,onChangePage:C,onSort:N},null,8,["checkDelete"])]),_:1})):(m(),A(Z,{key:3},{default:r(()=>[i($e)]),_:1}))]}),_:1})]),_:1}))}};export{Me as default};
