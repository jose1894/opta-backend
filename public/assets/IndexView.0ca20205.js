import{u as te,ak as le,ae as ne,f as ae,g as $,r as u,o as g,h as q,i as o,a as r,b as n,z as T,t as c,F as H,k as Q,d as W,p as i,al as oe,S as J,am as ie,s as ce,x as X,c as D,y as re,U as ue,A as de,_ as me,m as Y,B as ge,ap as fe,aq as ve}from"./index.49b91a9a.js";import{a as E,_ as Z}from"./BaseButton.84fe76a1.js";import{_ as pe}from"./NotificationBar.cb70b13a.js";import{C as he}from"./CardBoxComponentEmpty.b2c8f415.js";import{_ as x}from"./SectionTitleLineWithButton.b2b96e7a.js";import{C as ee}from"./CardBoxModal.89707104.js";import{c as L}from"./clients.srvice.dce6808a.js";import{_ as be}from"./FormCheckRadioGroup.e7f28255.js";import{_ as K}from"./FormField.03a460a3.js";import{B as $e}from"./Breadcrumb.4f619e14.js";import{_ as _e}from"./inputSearch.74f5c3cc.js";import"./FormCheckRadio.2d01fa5e.js";const Ce=n("th",null,null,-1),ke=["onClick"],ye=["data-label"],Pe=["data-label"],we=["data-label"],De=["data-label"],Ve={class:"before:hidden lg:w-1 whitespace-nowrap"},Se={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Be={__name:"ClientTable.view",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(F,{emit:y}){const{t:d}=te(),m=le(),_=ne(),C=ae(),p=$(()=>C.clients.clientes),M=$(()=>C.clients.total),f=u(!1),k=u(!1),V=$(()=>C.clients.perPage),h=$(()=>C.clients.page);u([]);const v=u([]),U=$(()=>p.value),A=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],S=u(!1),P=e=>{S.value=!S.value,y("sort",e,S.value)},w=$(()=>Math.ceil(M.value/V.value)),I=$(()=>+h.value),j=$(()=>{const e=[];for(let t=0;t<w.value;t++)e.push(t);return e}),R=e=>{y("changePage",e)},z=e=>{_.push({name:"ClientsUpdate",params:{id:e}})},a=e=>v.value=e,s=()=>{const{nombre:e}=v.value;return e},b=d("message.client.deleted.success"),B=async()=>{N().then(()=>{m.success(b),y("changePage",h.value)}).catch(e=>{var t;m.error(`${d("message.client.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},N=()=>{const{_id:e}=v.value;return L.delete(e)},O=()=>{const{_id:e}=v.value;L.restore(e).then(()=>{m.success(d("message.client.restore.success")),y("changePage",h.value)}).catch(t=>{var l;m.error(`${d("message.client.restore.error")} ${(l=t==null?void 0:t.response)==null?void 0:l.data.msg}`)})};return(e,t)=>(g(),q(H,null,[o(ee,{modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=l=>k.value=l),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:B,"has-cancel":""},{default:r(()=>[n("strong",null,[T(c(e.$t("message.client.deleted.question"))+" ",1),n("b",null,c(s()),1)]),T(" ? ")]),_:1},8,["modelValue","title"]),o(ee,{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=l=>f.value=l),title:e.$t("message.pleaseConfirm"),onConfirm:O},{default:r(()=>[n("strong",null,[T(c(e.$t("message.client.restore.question"))+" ",1),n("b",null,c(s()),1)]),T(" ? ")]),_:1},8,["modelValue","title"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:t[2]||(t[2]=l=>P("codigo"))},c(e.$t("message.client.code")),1),n("th",{onClick:t[3]||(t[3]=l=>P("nombre"))},c(e.$t("message.client.name")),1),n("th",{onClick:t[4]||(t[4]=l=>P("iDFiscal"))},c(e.$t("message.client.id")),1),n("th",{onClick:t[5]||(t[5]=l=>P("estado"))},c(e.$t("message.client.status")),1),Ce])]),n("tbody",null,[(g(!0),q(H,null,Q(i(U),(l,se)=>(g(),q("tr",{key:l._id,onClick:G=>a(l)},[n("td",{"data-label":e.$t("message.client.code")},c(l.codigo),9,ye),n("td",{"data-label":e.$t("message.client.name")},c(l.nombre),9,Pe),n("td",{"data-label":e.$t("message.client.id")},c(l.iDFiscal),9,we),n("td",{"data-label":e.$t("message.client.status")},c(e.$t(`message.client.statuses.${A(l.estado)}`)),9,De),n("td",Ve,[o(X,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[W(o(E,{color:"success",icon:i(oe),messageTooltip:i(d)("message.restore"),small:"",onClick:t[6]||(t[6]=G=>f.value=!0)},null,8,["icon","messageTooltip"]),[[J,F.checkDelete&&l.estado===2]]),W(o(E,{color:"info",icon:i(ie),messageTooltip:i(d)("message.edit"),small:"",onClick:G=>z(l._id)},null,8,["icon","messageTooltip","onClick"]),[[J,!F.checkDelete&&l.estado!==2]]),W(o(E,{color:"danger",icon:i(ce),messageTooltip:i(d)("message.delete"),small:"",onClick:t[7]||(t[7]=G=>k.value=!0)},null,8,["icon","messageTooltip"]),[[J,!F.checkDelete&&l.estado!==2]])]),_:2},1024)])],8,ke))),128))])]),n("div",Se,[o(re,null,{default:r(()=>[o(X,null,{default:r(()=>[(g(!0),q(H,null,Q(i(j),l=>(g(),D(E,{key:l,active:l===i(h)-1,label:l+1,color:l===i(h)?"lightDark":"whiteDark",small:"",onClick:se=>R(l+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+c(i(I))+" of "+c(i(w)),1)]),_:1})])],64))}},Te={class:"grid md:grid-cols-2 gap-4"},ze={__name:"IndexView",setup(F){const y=u([{name:"Inicio"}]),{t:d}=te(),m=ae(),_=u(1),C=u(10),p=ue({switch:[]}),M=[{id:1,label:d("message.country.statuses.active")},{id:0,label:d("message.country.statuses.inactive")}],f=u({filters:["codigo","nombre","iDFiscal"],search:""}),k=u(-1),V=u(M[0]),h=(a=[])=>{let s={page:_.value,q:a};k.value!==-1&&(s={...s,estado:k.value}),p.switch.length===0?v(s):w(s)},v=a=>{L.index(a).then(s=>{m.clients=s,_.value=s.page,C.value=s.perPage})};v({page:_.value});const U=u(!1),A=()=>{I(_.value),U.value=p.switch.length!==0},S=a=>{I({page:a})},P=(a,s)=>{j({sortBy:a,sortDesc:s})},w=a=>{L.getDelete(a).then(s=>{m.clients=s,_.value=s.page,C.value=s.perPage})},I=a=>{p.switch.length===0?v(a):w(a)},j=a=>{p.switch.length===0?v(a):w(a)},R=async a=>{const s=a===""?"default":a;let b=[];s!=="default"&&(f.value.search=s,b=f.value),h(b)},z=()=>{const{id:a}=V.value;k.value=a;let s=[];f.value.search!==""&&f.value.search!=="default"&&(s=f.value),h(s)};return(a,s)=>(g(),D(de,null,{default:r(()=>[o(ge,null,{default:r(()=>{var b,B,N,O,e;return[o(x,{icon:i(fe),title:a.$t("message.client.clients")},{default:r(()=>[o(E,{to:{name:"ClientsCreate"},icon:i(ve),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),o($e,{items:y.value},null,8,["items"]),n("div",Te,[o(K,{label:"Buscar"},{default:r(()=>[o(_e,{placeholder:"Buscar...","search-function":R,"debounce-time":500},null,8,["placeholder"])]),_:1}),o(K,{label:a.$t("message.country.status")},{default:r(()=>[o(me,{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=t=>V.value=t),icon:a.mdiListStatus,options:M,onOnSelectChange:z},null,8,["modelValue","icon"])]),_:1},8,["label"])]),o(K,{label:""},{default:r(()=>[o(be,{modelValue:p.switch,"onUpdate:modelValue":s[1]||(s[1]=t=>p.switch=t),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:A},null,8,["modelValue"])]),_:1}),(b=i(m))!=null&&b.clients?Y("",!0):(g(),D(x,{key:0,icon:a.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(B=i(m))!=null&&B.clients?Y("",!0):(g(),D(pe,{key:1,color:"danger",icon:a.mdiTableOff},{default:r(()=>[n("b",null,c(a.$t("message.empty_table"))+".",1),T(" When there's nothing to show ")]),_:1},8,["icon"])),(e=(O=(N=i(m))==null?void 0:N.clients)==null?void 0:O.clientes)!=null&&e.length?(g(),D(Z,{key:2,class:"mb-6","has-table":""},{default:r(()=>[o(Be,{checkDelete:U.value,onChangePage:S,onSort:P},null,8,["checkDelete"])]),_:1})):(g(),D(Z,{key:3},{default:r(()=>[o(he)]),_:1}))]}),_:1})]),_:1}))}};export{ze as default};
