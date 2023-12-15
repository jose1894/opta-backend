import{u as oe,ak as ae,ae as le,f as X,g as h,r as g,o as d,h as U,i,a as u,b as l,z as P,t as r,F as L,k as R,d as j,p as a,al as ne,S as G,am as ie,s as ce,x as z,c as A,y as re,U as ue,A as me,m as H,B as de,ap as pe,aq as ge,G as W}from"./index.94d0d825.js";import{a as y,_ as J}from"./BaseButton.607b4ca4.js";import{_ as K}from"./SectionTitleLineWithButton.21bf938c.js";import{_ as fe}from"./NotificationBar.da331500.js";import{C as he}from"./CardBoxComponentEmpty.181cbc93.js";import{C as Q}from"./CardBoxModal.826e1893.js";import{p as I}from"./profileActions.service.68f07cde.js";import{_ as ve}from"./FormField.d7b1190e.js";import{_ as $e}from"./FormCheckRadioGroup.d0dc92b9.js";import{B as _e}from"./Breadcrumb.e522eb9b.js";import"./FormCheckRadio.6b119c24.js";const Ae=["onClick"],be=["data-label"],ke=["data-label"],Ce=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},Pe={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ProfileActionsTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:c}=oe(),p=ae(),V=le(),m=X(),b=h(()=>m.profileActions.accionesPerfiles),S=h(()=>m.profileActions.total),k=g(!1),C=g(!1),E=h(()=>m.profileActions.perPage),f=h(()=>m.profileActions.page);g([]);const v=g([]),N=h(()=>b.value),o=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=g(!1),_=e=>{n.value=!n.value,$("sort",e,n.value)},w=h(()=>Math.ceil(S.value/E.value)),B=h(()=>+f.value),T=h(()=>{const e=[];for(let t=0;t<w.value;t++)e.push(t);return e}),M=e=>{$("changePage",e)},F=e=>{V.push({name:"ProfileActionsUpdate",params:{id:e}})},Y=e=>v.value=e,O=()=>{const{descripcion:e}=v.value;return e},Z=c("message.profileAction.deleted.success"),x=async()=>{ee().then(()=>{p.success(Z),$("changePage",f.value)}).catch(e=>{var t;p.error(`${c("message.profileAction.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return I.delete(e)},te=()=>{const{_id:e}=v.value;I.restore(e).then(()=>{p.success(c("message.profileAction.restore.success")),$("changePage",f.value)}).catch(t=>{var s;p.error(`${c("message.profileAction.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(d(),U(L,null,[i(Q,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[l("strong",null,[P(r(e.$t("message.profileAction.deleted.question"))+" ",1),l("b",null,r(O()),1)]),P(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=s=>k.value=s),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:u(()=>[l("strong",null,[P(r(e.$t("message.profileAction.restore.question"))+" ",1),l("b",null,r(O()),1)]),P(" ? ")]),_:1},8,["modelValue","title"]),l("table",null,[l("thead",null,[l("tr",null,[l("th",{onClick:t[2]||(t[2]=s=>_("codigo"))},r(e.$t("message.profileAction.code")),1),l("th",{onClick:t[3]||(t[3]=s=>_("descripcion"))},r(e.$t("message.profileAction.description")),1),l("th",{onClick:t[4]||(t[4]=s=>_("estado"))},r(e.$t("message.profileAction.status")),1)])]),l("tbody",null,[(d(!0),U(L,null,R(a(N),(s,se)=>(d(),U("tr",{key:s._id,onClick:q=>Y(s)},[l("td",{"data-label":e.$t("message.profileAction.code")},r(s.codigo),9,be),l("td",{"data-label":e.$t("message.profileAction.description")},r(s.descripcion),9,ke),l("td",{"data-label":e.$t("message.profileAction.status")},r(e.$t(`message.profileAction.statuses.${o(s.estado)}`)),9,Ce),l("td",we,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[j(i(y,{color:"success",icon:a(ne),messageTooltip:a(c)("message.restore"),small:"",onClick:t[5]||(t[5]=q=>k.value=!0)},null,8,["icon","messageTooltip"]),[[G,D.checkDelete&&s.estado===2]]),j(i(y,{color:"info",icon:a(ie),messageTooltip:a(c)("message.edit"),small:"",onClick:q=>F(s._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!D.checkDelete&&s.estado!==2]]),j(i(y,{color:"danger",icon:a(ce),messageTooltip:a(c)("message.delete"),small:"",onClick:t[6]||(t[6]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[G,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,Ae))),128))])]),l("div",Pe,[i(re,null,{default:u(()=>[i(z,null,{default:u(()=>[(d(!0),U(L,null,R(a(T),s=>(d(),A(y,{key:s,active:s===a(f)-1,label:s+1,color:s===a(f)?"lightDark":"whiteDark",small:"",onClick:se=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+r(a(B))+" of "+r(a(w)),1)]),_:1})])],64))}},qe={__name:"IndexView",setup(D){const $=g([{name:"Inicio"}]),c=X(),p=g(1),V=g(10),m=ue({switch:[]}),b=o=>{I.index(o).then(n=>{c.profileActions=n,p.value=n.page,V.value=n.perPage})};b({page:p.value});const S=g(!1),k=()=>{v(p.value),S.value=m.switch.length!==0},C=o=>{v({page:o})},E=(o,n)=>{N({sortBy:o,sortDesc:n})},f=o=>{I.getDelete(o).then(n=>{c.profileActions=n,p.value=n.page,V.value=n.perPage})},v=o=>{m.switch.length===0?b(o):f(o)},N=o=>{m.switch.length===0?b(o):f(o)};return(o,n)=>(d(),A(me,null,{default:u(()=>[i(de,null,{default:u(()=>{var _,w,B,T,M;return[i(K,{icon:a(pe),title:o.$t("message.profileAction.profileActions")},{default:u(()=>[i(y,{to:"profileActions/create",icon:a(ge),label:o.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(_e,{items:$.value},null,8,["items"]),i(ve,{label:""},{default:u(()=>[i($e,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=F=>m.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:k},null,8,["modelValue"])]),_:1}),(_=a(c))!=null&&_.profileActions?H("",!0):(d(),A(K,{key:0,icon:a(W),title:"Empty variation"},null,8,["icon"])),(w=a(c))!=null&&w.profileActions?H("",!0):(d(),A(fe,{key:1,color:"danger",icon:a(W)},{default:u(()=>[l("b",null,r(o.$t("message.empty_table"))+".",1),P(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(T=(B=a(c))==null?void 0:B.profileActions)==null?void 0:T.accionesPerfiles)!=null&&M.length?(d(),A(J,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(ye,{checkDelete:S.value,onChangePage:C,onSort:E},null,8,["checkDelete"])]),_:1})):(d(),A(J,{key:3},{default:u(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{qe as default};
