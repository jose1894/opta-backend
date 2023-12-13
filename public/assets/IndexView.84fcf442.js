import{u as se,ak as oe,ae as le,f as X,g as h,r as f,o as d,h as U,i,a as u,b as l,z as P,t as c,F as L,k as R,d as j,p as o,al as ne,S as G,am as ie,s as re,x as z,c as _,y as ce,U as ue,A as me,m as H,B as de,ap as ge,aq as fe,G as W}from"./index.49b91a9a.js";import{a as w,_ as J}from"./BaseButton.84fe76a1.js";import{_ as K}from"./SectionTitleLineWithButton.b2b96e7a.js";import{_ as pe}from"./NotificationBar.cb70b13a.js";import{C as he}from"./CardBoxComponentEmpty.b2c8f415.js";import{c as I}from"./categories.service.52f3f3b7.js";import{_ as ve}from"./FormField.03a460a3.js";import{_ as $e}from"./FormCheckRadioGroup.e7f28255.js";import{C as Q}from"./CardBoxModal.89707104.js";import{B as be}from"./Breadcrumb.4f619e14.js";import"./FormCheckRadio.2d01fa5e.js";const Ce=["onClick"],_e=["data-label"],ke=["data-label"],ye=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"CategoryTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:b}){const{t:r}=se(),g=oe(),V=le(),m=X(),S=h(()=>{var e;return(e=m.categories)==null?void 0:e.categorias}),E=h(()=>m.categories.total),v=f(!1),k=f(!1),N=h(()=>m.categories.perPage),p=h(()=>m.categories.page);f([]);const $=f([]),F=h(()=>S.value),s=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=f(!1),C=e=>{n.value=!n.value,b("sort",e,n.value)},y=h(()=>Math.ceil(E.value/N.value)),B=h(()=>+p.value),T=h(()=>{const e=[];for(let t=0;t<y.value;t++)e.push(t);return e}),M=e=>{b("changePage",e)},q=e=>{V.push({name:"CategoriesUpdate",params:{id:e}})},Y=e=>$.value=e,O=()=>{const{nombre:e}=$.value;return e},Z=r("message.category.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),b("changePage",p.value)}).catch(e=>{var t;g.error(`${r("message.category.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=$.value;return I.delete(e)},te=()=>{const{_id:e}=$.value;I.restore(e).then(()=>{g.success(r("message.category.restore.success")),b("changePage",p.value)}).catch(t=>{var a;g.error(`${r("message.category.restore.error")} ${(a=t==null?void 0:t.response)==null?void 0:a.data.msg}`)})};return(e,t)=>(d(),U(L,null,[i(Q,{modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=a=>k.value=a),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[l("strong",null,[P(c(e.$t("message.category.deleted.question"))+" ",1),l("b",null,c(O()),1)]),P(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=a=>v.value=a),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:u(()=>[l("strong",null,[P(c(e.$t("message.category.restore.question"))+" ",1),l("b",null,c(O()),1)]),P(" ? ")]),_:1},8,["modelValue","title"]),l("table",null,[l("thead",null,[l("tr",null,[l("th",{onClick:t[2]||(t[2]=a=>C("codigo"))},c(e.$t("message.category.code")),1),l("th",{onClick:t[3]||(t[3]=a=>C("nombre"))},c(e.$t("message.category.name")),1),l("th",{onClick:t[4]||(t[4]=a=>C("estado"))},c(e.$t("message.category.status")),1)])]),l("tbody",null,[(d(!0),U(L,null,R(o(F),(a,ae)=>(d(),U("tr",{key:a._id,onClick:A=>Y(a)},[l("td",{"data-label":e.$t("message.category.code")},c(a.codigo),9,_e),l("td",{"data-label":e.$t("message.category.name")},c(a.nombre),9,ke),l("td",{"data-label":e.$t("message.cargo.status")},c(e.$t(`message.category.statuses.${s(a.estado)}`)),9,ye),l("td",Pe,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[j(i(w,{color:"success",icon:o(ne),messageTooltip:o(r)("message.restore"),small:"",onClick:t[5]||(t[5]=A=>v.value=!0)},null,8,["icon","messageTooltip"]),[[G,D.checkDelete&&a.estado===2]]),j(i(w,{color:"info",icon:o(ie),messageTooltip:o(r)("message.edit"),small:"",onClick:A=>q(a._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!D.checkDelete&&a.estado!==2]]),j(i(w,{color:"danger",icon:o(re),messageTooltip:o(r)("message.delete"),small:"",onClick:t[6]||(t[6]=A=>k.value=!0)},null,8,["icon","messageTooltip"]),[[G,!D.checkDelete&&a.estado!==2]])]),_:2},1024)])],8,Ce))),128))])]),l("div",we,[i(ce,null,{default:u(()=>[i(z,null,{default:u(()=>[(d(!0),U(L,null,R(o(T),a=>(d(),_(w,{key:a,active:a===o(p)-1,label:a+1,color:a===o(p)?"lightDark":"whiteDark",small:"",onClick:ae=>M(a+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+c(o(B))+" of "+c(o(y)),1)]),_:1})])],64))}},Ae={__name:"IndexView",setup(D){const b=f([{name:"Inicio"}]),r=X(),g=f(1),V=f(10),m=ue({switch:[]}),S=f(!1),E=()=>{$(g.value),S.value=m.switch.length!==0},v=s=>{I.index(s).then(n=>{r.categories=n,g.value=n.page,V.value=n.perPage})};v({page:g.value});const k=s=>{$({page:s})},N=(s,n)=>{F({sortBy:s,sortDesc:n})},p=s=>{I.getDelete(s).then(n=>{r.categories=n,g.value=n.page,V.value=n.perPage})},$=s=>{m.switch.length===0?v(s):p(s)},F=s=>{m.switch.length===0?v(s):p(s)};return(s,n)=>(d(),_(me,null,{default:u(()=>[i(de,null,{default:u(()=>{var C,y,B,T,M;return[i(K,{icon:o(ge),title:s.$t("message.category.categories")},{default:u(()=>[i(w,{to:{name:"CategoriesCreate"},icon:o(fe),label:s.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(be,{items:b.value},null,8,["items"]),i(ve,{label:""},{default:u(()=>[i($e,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=q=>m.switch=q),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:E},null,8,["modelValue"])]),_:1}),(C=o(r))!=null&&C.categories?H("",!0):(d(),_(K,{key:0,icon:o(W),title:"Empty variation"},null,8,["icon"])),(y=o(r))!=null&&y.categories?H("",!0):(d(),_(pe,{key:1,color:"danger",icon:o(W)},{default:u(()=>[l("b",null,c(s.$t("message.empty_table"))+".",1),P(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(T=(B=o(r))==null?void 0:B.categories)==null?void 0:T.categorias)!=null&&M.length?(d(),_(J,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(De,{checkDelete:S.value,onChangePage:k,onSort:N},null,8,["checkDelete"])]),_:1})):(d(),_(J,{key:3},{default:u(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{Ae as default};
