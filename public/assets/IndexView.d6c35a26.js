import{ag as te,ah as ae,aa as ne,S as J,I as h,y as b,o as m,r as M,a as i,w as r,j as n,f as w,E as u,$ as G,K as A,L as H,M as F,d as y,u as l,ai as le,aj as O,ak as oe,al as ie,A as K,c as k,T as ue,x as ce,_ as re,b as Q,ao as de,B as me,Q as W,e as ge,g as z,i as be,ap as fe,aq as he}from"./index.e27aaed2.js";import{C as ve}from"./CardBoxComponentEmpty.8b08f16b.js";import{b as I}from"./bussinesUnit.service.20bca8ab.js";import{_ as pe}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const $e=n("th",null,null,-1),_e=["onClick"],ke=["data-label"],Ue=["data-label"],Ce=["data-label"],Pe=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Be={__name:"BusinessUnitTableView",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(B,{emit:$}){const{t:c}=te(),g=ae(),D=ne(),d=J(),U=h(()=>d.businessUnit.unidadesNegocio),N=h(()=>d.businessUnit.total),C=b(!1),_=b(!1),E=h(()=>d.businessUnit.perPage),f=h(()=>d.businessUnit.page);b([]);const v=b([]),j=h(()=>U.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],o=b(!1),p=e=>{o.value=!o.value,$("sort",e,o.value)},P=h(()=>Math.ceil(N.value/E.value)),V=h(()=>+f.value),T=h(()=>{const e=[];for(let s=0;s<P.value;s++)e.push(s);return e}),S=e=>{$("changePage",e)},L=e=>{D.push({name:"BusinessUnitUpdate",params:{id:e}})},X=e=>v.value=e,R=()=>{const{nombre:e}=v.value;return e},Y=c("message.bussinesUnit.deleted.success"),Z=async()=>{x().then(()=>{g.success(Y),$("changePage",f.value)}).catch(e=>{var s;g.error(`${c("message.bussinesUnit.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},x=()=>{const{_id:e}=v.value;return I.delete(e)},ee=()=>{const{_id:e}=v.value;I.restore(e).then(()=>{g.success(c("message.bussinesUnit.restore.success")),$("changePage",f.value)}).catch(s=>{var t;g.error(`${c("message.bussinesUnit.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(m(),M(A,null,[i(G,{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=t=>_.value=t),title:"Please confirm",button:"danger",onConfirm:Z,"has-cancel":""},{default:r(()=>[n("strong",null,[w(u(e.$t("message.bussinesUnit.deleted.question"))+" ",1),n("b",null,u(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:C.value,"onUpdate:modelValue":s[1]||(s[1]=t=>C.value=t),title:"Please confirm",onConfirm:ee},{default:r(()=>[n("strong",null,[w(u(e.$t("message.bussinesUnit.restore.question"))+" ",1),n("b",null,u(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:s[2]||(s[2]=t=>p("codigo"))},u(e.$t("message.bussinesUnit.code")),1),n("th",{onClick:s[3]||(s[3]=t=>p("nombre"))},u(e.$t("message.bussinesUnit.name")),1),n("th",{onClick:s[4]||(s[4]=t=>p("siglas"))},u(e.$t("message.bussinesUnit.acronyms")),1),n("th",{onClick:s[5]||(s[5]=t=>p("estado"))},u(e.$t("message.bussinesUnit.status")),1),$e])]),n("tbody",null,[(m(!0),M(A,null,H(l(j),(t,se)=>(m(),M("tr",{key:t._id,onClick:q=>X(t)},[n("td",{"data-label":e.$t("message.bussinesUnit.code")},u(t.codigo),9,ke),n("td",{"data-label":e.$t("message.bussinesUnit.name")},u(t.nombre),9,Ue),n("td",{"data-label":e.$t("message.bussinesUnit.acronyms")},u(t.siglas),9,Ce),n("td",{"data-label":e.$t("message.branch.status")},u(e.$t(`message.bussinesUnit.statuses.${a(t.estado)}`)),9,Pe),n("td",we,[i(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[F(i(y,{color:"success",icon:l(le),messageTooltip:l(c)("message.restore"),small:"",onClick:s[6]||(s[6]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[O,B.checkDelete&&t.estado===2]]),F(i(y,{color:"info",icon:l(oe),messageTooltip:l(c)("message.edit"),small:"",onClick:q=>L(t._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!B.checkDelete&&t.estado!==2]]),F(i(y,{color:"danger",icon:l(ie),messageTooltip:l(c)("message.delete"),small:"",onClick:s[7]||(s[7]=q=>_.value=!0)},null,8,["icon","messageTooltip"]),[[O,!B.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),n("div",ye,[i(ue,null,{default:r(()=>[i(K,null,{default:r(()=>[(m(!0),M(A,null,H(l(T),t=>(m(),k(y,{key:t,active:t===l(f)-1,label:t+1,color:t===l(f)?"lightDark":"whiteDark",small:"",onClick:se=>S(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+u(l(V))+" of "+u(l(P)),1)]),_:1})])],64))}},Ie={__name:"IndexView",setup(B){const $=b([{name:"Inicio"}]),c=J(),g=b(1),D=b(10),d=ce({switch:[]}),U=a=>{I.index(a).then(o=>{c.businessUnit=o,g.value=o.page,D.value=o.perPage})};U({page:g.value});const N=a=>{v({page:a})},C=(a,o)=>{j({sortBy:a,sortDesc:o})},_=b(!1),E=()=>{v({page:g.value}),_.value=d.switch.length!==0},f=a=>{I.getDelete(a).then(o=>{c.businessUnit=o,g.value=o.page,D.value=o.perPage})},v=a=>{d.switch.length===0?U({page:a}):f({page:a})},j=a=>{d.switch.length===0?U(a):f(a)};return(a,o)=>(m(),k(re,null,{default:r(()=>[i(be,null,{default:r(()=>{var p,P,V,T,S;return[i(Q,{icon:l(fe),title:a.$t("message.bussinesUnit.bussinesUnits")},{default:r(()=>[i(y,{to:{name:"BusinessUnitCreate"},icon:l(he),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(de,{items:$.value},null,8,["items"]),i(me,{label:""},{default:r(()=>[i(pe,{modelValue:d.switch,"onUpdate:modelValue":o[0]||(o[0]=L=>d.switch=L),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:E},null,8,["modelValue"])]),_:1}),(p=l(c))!=null&&p.businessUnit?W("",!0):(m(),k(Q,{key:0,icon:a.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(P=l(c))!=null&&P.businessUnit?W("",!0):(m(),k(ge,{key:1,color:"danger",icon:a.mdiTableOff},{default:r(()=>[n("b",null,u(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(S=(T=(V=l(c))==null?void 0:V.businessUnit)==null?void 0:T.unidadesNegocio)!=null&&S.length?(m(),k(z,{key:2,class:"mb-6","has-table":""},{default:r(()=>[i(Be,{checkDelete:_.value,onChangePage:N,onSort:C},null,8,["checkDelete"])]),_:1})):(m(),k(z,{key:3},{default:r(()=>[i(ve)]),_:1}))]}),_:1})]),_:1}))}};export{Ie as default};