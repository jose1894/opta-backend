import{u as ae,ak as ne,ae as oe,f as X,g as h,r as f,o as m,h as U,i,a as c,b as o,z as w,t as u,F as A,k as R,d as L,p as n,al as le,S as G,am as ie,s as re,x as z,c as _,y as ue,U as ce,A as de,m as H,B as me,ap as ge,aq as fe,G as W}from"./index.bf3eb1d4.js";import{a as D,_ as J}from"./BaseButton.1e584900.js";import{_ as K}from"./SectionTitleLineWithButton.09e8c280.js";import{_ as pe}from"./NotificationBar.3e298193.js";import{C as he}from"./CardBoxComponentEmpty.6d65eafd.js";import{C as Q}from"./CardBoxModal.7e1dd63f.js";import{i as E}from"./Industries.service.00931710.js";import{_ as ve}from"./FormField.ce92b931.js";import{_ as $e}from"./FormCheckRadioGroup.7cea6fbc.js";import{B as be}from"./Breadcrumb.2cc5bf09.js";import"./FormCheckRadio.0929eb1e.js";const _e=["onClick"],ke=["data-label"],Ce=["data-label"],ye=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"IndustryTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:r}=ae(),g=ne(),I=oe(),d=X(),k=h(()=>{var e;return(e=d.industries)==null?void 0:e.industrias}),S=h(()=>d.industries.total),C=f(!1),y=f(!1),N=h(()=>d.industries.perPage),p=h(()=>d.industries.page);f([]);const v=f([]),F=h(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=f(!1),b=e=>{l.value=!l.value,$("sort",e,l.value)},P=h(()=>Math.ceil(S.value/N.value)),B=h(()=>+p.value),T=h(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),M=e=>{$("changePage",e)},j=e=>{I.push({name:"IndustriesUpdate",params:{id:e}})},Y=e=>v.value=e,O=()=>{const{nombre:e}=v.value;return e},Z=r("message.industry.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),$("changePage",p.value)}).catch(e=>{var t;g.error(`${r("message.industry.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return E.delete(e)},te=()=>{const{_id:e}=v.value;E.restore(e).then(()=>{g.success(r("message.industry.restore.success")),$("changePage",p.value)}).catch(t=>{var s;g.error(`${r("message.industry.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(m(),U(A,null,[i(Q,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=s=>y.value=s),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:c(()=>[o("strong",null,[w(u(e.$t("message.industry.deleted.question"))+" ",1),o("b",null,u(O()),1)]),w(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:C.value,"onUpdate:modelValue":t[1]||(t[1]=s=>C.value=s),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:c(()=>[o("strong",null,[w(u(e.$t("message.industry.restore.question"))+" ",1),o("b",null,u(O()),1)]),w(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:t[2]||(t[2]=s=>b("codigo"))},u(e.$t("message.industry.code")),1),o("th",{onClick:t[3]||(t[3]=s=>b("nombre"))},u(e.$t("message.industry.name")),1),o("th",{onClick:t[4]||(t[4]=s=>b("estado"))},u(e.$t("message.industry.status")),1)])]),o("tbody",null,[(m(!0),U(A,null,R(n(F),(s,se)=>(m(),U("tr",{key:s._id,onClick:q=>Y(s)},[o("td",{"data-label":e.$t("message.industry.code")},u(s.codigo),9,ke),o("td",{"data-label":e.$t("message.industry.name")},u(s.nombre),9,Ce),o("td",{"data-label":e.$t("message.industry.status")},u(e.$t(`message.industry.statuses.${a(s.estado)}`)),9,ye),o("td",Pe,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:c(()=>[L(i(D,{color:"success",icon:n(le),messageTooltip:n(r)("message.restore"),small:"",onClick:t[5]||(t[5]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[G,V.checkDelete&&s.estado===2]]),L(i(D,{color:"info",icon:n(ie),messageTooltip:n(r)("message.edit"),small:"",onClick:q=>j(s._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!V.checkDelete&&s.estado!==2]]),L(i(D,{color:"danger",icon:n(re),messageTooltip:n(r)("message.delete"),small:"",onClick:t[6]||(t[6]=q=>y.value=!0)},null,8,["icon","messageTooltip"]),[[G,!V.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),o("div",we,[i(ue,null,{default:c(()=>[i(z,null,{default:c(()=>[(m(!0),U(A,null,R(n(T),s=>(m(),_(D,{key:s,active:s===n(p)-1,label:s+1,color:s===n(p)?"lightDark":"whiteDark",small:"",onClick:se=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+u(n(B))+" of "+u(n(P)),1)]),_:1})])],64))}},qe={__name:"IndexView",setup(V){const $=f([{name:"Inicio"}]),r=X(),g=f(1),I=f(10),d=ce({switch:[]}),k=a=>{E.index(a).then(l=>{r.industries=l,g.value=l.page,I.value=l.perPage})};k({page:g.value});const S=f(!1),C=()=>{v(g.value),S.value=d.switch.length!==0},y=a=>{v({page:a})},N=(a,l)=>{F({sortBy:a,sortDesc:l})},p=a=>{E.getDelete(a).then(l=>{r.industries=l,g.value=l.page,I.value=l.perPage})},v=a=>{d.switch.length===0?k(a):p(a)},F=a=>{d.switch.length===0?k(a):p(a)};return(a,l)=>(m(),_(de,null,{default:c(()=>[i(me,null,{default:c(()=>{var b,P,B,T,M;return[i(K,{icon:n(ge),title:a.$t("message.industry.industries")},{default:c(()=>[i(D,{to:{name:"IndustriesCreate"},icon:n(fe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(be,{items:$.value},null,8,["items"]),i(ve,{label:""},{default:c(()=>[i($e,{modelValue:d.switch,"onUpdate:modelValue":l[0]||(l[0]=j=>d.switch=j),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:C},null,8,["modelValue"])]),_:1}),(b=n(r))!=null&&b.industries?H("",!0):(m(),_(K,{key:0,icon:n(W),title:"Empty variation"},null,8,["icon"])),(P=n(r))!=null&&P.jobPositions?H("",!0):(m(),_(pe,{key:1,color:"danger",icon:n(W)},{default:c(()=>[o("b",null,u(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(T=(B=n(r))==null?void 0:B.industries)==null?void 0:T.industrias)!=null&&M.length?(m(),_(J,{key:2,class:"mb-6","has-table":""},{default:c(()=>[i(De,{checkDelete:S.value,onChangePage:y,onSort:N},null,8,["checkDelete"])]),_:1})):(m(),_(J,{key:3},{default:c(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{qe as default};
