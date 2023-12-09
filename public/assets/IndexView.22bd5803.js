import{u as ae,ak as oe,ae as le,f as X,g as h,r as d,o as g,h as U,i,a as u,b as l,z as y,t as c,F as A,k as R,d as L,p as o,al as ne,S as G,am as ie,s as re,x as z,c as C,y as ce,U as ue,A as me,m as H,B as de,ap as ge,aq as fe,G as W}from"./index.4a61edd7.js";import{a as D,_ as J}from"./BaseButton.d111364f.js";import{_ as K}from"./SectionTitleLineWithButton.7750d8a9.js";import{_ as pe}from"./NotificationBar.5c79a80a.js";import{C as he}from"./CardBoxComponentEmpty.c924b1a3.js";import{C as Q}from"./CardBoxModal.cbad6db9.js";import{c as I}from"./cargos.service.17a4bcf1.js";import{_ as ve}from"./FormField.929b004e.js";import{_ as be}from"./FormCheckRadioGroup.451a4d77.js";import{B as $e}from"./Breadcrumb.3c6212a3.js";import"./FormCheckRadio.dcb06de3.js";const Ce=["onClick"],_e=["data-label"],ke=["data-label"],Pe=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"CargoTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:b}){const{t:r}=ae(),f=oe(),S=le(),m=X(),_=h(()=>{var e;return(e=m.jobPositions)==null?void 0:e.cargos}),j=h(()=>m.jobPositions.total),k=d(!1);d();const P=d(!1),E=h(()=>m.jobPositions.perPage),p=h(()=>m.jobPositions.page);d([]);const v=d([]),N=h(()=>_.value),a=(e=1)=>({0:"inactive",1:"active",2:"deleted"})[e],n=d(!1),$=e=>{n.value=!n.value,b("sort",e,n.value)},w=h(()=>Math.ceil(j.value/E.value)),B=h(()=>+p.value),T=h(()=>{const e=[];for(let t=0;t<w.value;t++)e.push(t);return e}),M=e=>{b("changePage",e)},F=e=>{S.push({name:"CargosUpdate",params:{id:e}})},Y=e=>v.value=e,O=()=>{const{nombre:e}=v.value;return e},Z=r("message.cargo.deleted.success"),x=async()=>{ee().then(()=>{f.success(Z),b("changePage",p.value)}).catch(e=>{var t;f.error(`${r("message.cargo.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return I.delete(e)},te=()=>{const{_id:e}=v.value;I.restore(e).then(()=>{f.success(r("message.cargo.restore.success")),b("changePage",p.value)}).catch(t=>{var s;f.error(`${r("message.cargo.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(g(),U(A,null,[i(Q,{modelValue:P.value,"onUpdate:modelValue":t[0]||(t[0]=s=>P.value=s),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[l("strong",null,[y(c(e.$t("message.cargo.deleted.question"))+" ",1),l("b",null,c(O()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=s=>k.value=s),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:u(()=>[l("strong",null,[y(c(e.$t("message.cargo.restore.question"))+" ",1),l("b",null,c(O()),1)]),y(" ? ")]),_:1},8,["modelValue","title"]),l("table",null,[l("thead",null,[l("tr",null,[l("th",{onClick:t[2]||(t[2]=s=>$("codigo"))},c(e.$t("message.cargo.code")),1),l("th",{onClick:t[3]||(t[3]=s=>$("nombre"))},c(e.$t("message.cargo.name")),1),l("th",{onClick:t[4]||(t[4]=s=>$("estado"))},c(e.$t("message.cargo.status")),1)])]),l("tbody",null,[(g(!0),U(A,null,R(o(N),(s,se)=>(g(),U("tr",{key:s._id,onClick:q=>Y(s)},[l("td",{"data-label":e.$t("message.cargo.code")},c(s.codigo),9,_e),l("td",{"data-label":e.$t("message.cargo.name")},c(s.nombre),9,ke),l("td",{"data-label":e.$t("message.cargo.status")},c(e.$t(`message.cargo.statuses.${a(s.estado)}`)),9,Pe),l("td",we,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[L(i(D,{color:"success",icon:o(ne),messageTooltip:o(r)("message.restore"),small:"",onClick:t[5]||(t[5]=q=>k.value=!0)},null,8,["icon","messageTooltip"]),[[G,V.checkDelete&&s.estado===2]]),L(i(D,{color:"info",icon:o(ie),messageTooltip:o(r)("message.edit"),small:"",onClick:q=>F(s._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!V.checkDelete&&s.estado!==2]]),L(i(D,{color:"danger",icon:o(re),messageTooltip:o(r)("message.delete"),small:"",onClick:t[6]||(t[6]=q=>P.value=!0)},null,8,["icon","messageTooltip"]),[[G,!V.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,Ce))),128))])]),l("div",ye,[i(ce,null,{default:u(()=>[i(z,null,{default:u(()=>[(g(!0),U(A,null,R(o(T),s=>(g(),C(D,{key:s,active:s===o(p)-1,label:s+1,color:s===o(p)?"lightDark":"whiteDark",small:"",onClick:se=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+c(o(B))+" of "+c(o(w)),1)]),_:1})])],64))}},qe={__name:"IndexView",setup(V){const b=d([{name:"Inicio"}]),r=X(),f=d(1),S=d(10),m=ue({switch:[]}),_=a=>{I.index(a).then(n=>{r.jobPositions=n,f.value=n.page,S.value=n.perPage})};_({page:f.value});const j=d(!1),k=()=>{v(f.value),j.value=m.switch.length!==0},P=a=>{v({page:a})},E=(a,n)=>{N({sortBy:a,sortDesc:n})},p=a=>{I.getDelete(a).then(n=>{r.jobPositions=n,f.value=n.page,S.value=n.perPage})},v=a=>{m.switch.length===0?_(a):p(a)},N=a=>{m.switch.length===0?_(a):p(a)};return(a,n)=>(g(),C(me,null,{default:u(()=>[i(de,null,{default:u(()=>{var $,w,B,T,M;return[i(K,{icon:o(ge),title:a.$t("message.cargo.cargos")},{default:u(()=>[i(D,{to:{name:"CargosCreate"},icon:o(fe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i($e,{items:b.value},null,8,["items"]),i(ve,{label:""},{default:u(()=>[i(be,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=F=>m.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:k},null,8,["modelValue"])]),_:1}),($=o(r))!=null&&$.jobPositions?H("",!0):(g(),C(K,{key:0,icon:o(W),title:"Empty variation"},null,8,["icon"])),(w=o(r))!=null&&w.jobPositions?H("",!0):(g(),C(pe,{key:1,color:"danger",icon:o(W)},{default:u(()=>[l("b",null,c(a.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(T=(B=o(r))==null?void 0:B.jobPositions)==null?void 0:T.cargos)!=null&&M.length?(g(),C(J,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(De,{checkDelete:j.value,onChangePage:P,onSort:E},null,8,["checkDelete"])]),_:1})):(g(),C(J,{key:3},{default:u(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{qe as default};