import{ag as se,ah as te,aa as ne,S as J,I as f,y as h,o as m,r as I,a as c,w as u,j as n,f as y,E as r,$ as G,K as A,L as H,M as F,d as B,u as l,ai as le,aj as O,ak as oe,al as ce,A as K,c as k,T as re,x as ie,_ as ue,b as Q,ao as de,B as me,Q as W,e as ge,g as z,i as he,ap as be,aq as fe}from"./index.e27aaed2.js";import{C as ve}from"./CardBoxComponentEmpty.8b08f16b.js";import{b as E}from"./branches.service.3487c96a.js";import{_ as pe}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const $e=n("th",null,null,-1),_e=["onClick"],ke=["data-label"],Ce=["data-label"],Pe=["data-label"],we=["data-label"],ye={class:"before:hidden lg:w-1 whitespace-nowrap"},Be={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"BranchTableView",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:i}=se(),g=te(),V=ne(),d=J(),C=f(()=>d.branches.sucursales),U=f(()=>d.branches.total),P=h(!1),_=h(!1),N=f(()=>d.branches.perPage),b=f(()=>d.branches.page);h([]);const v=h([]),j=f(()=>C.value),t=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],o=h(!1),p=e=>{o.value=!o.value,$("sort",e,o.value)},w=f(()=>Math.ceil(U.value/N.value)),T=f(()=>+b.value),S=f(()=>{const e=[];for(let a=0;a<w.value;a++)e.push(a);return e}),M=e=>{$("changePage",e)},L=e=>{V.push({name:"BranchesUpdate",params:{id:e}})},X=e=>v.value=e,R=()=>{const{nombre:e}=v.value;return e},Y=i("message.branch.deleted.success"),Z=async()=>{x().then(()=>{g.success(Y),$("changePage",b.value)}).catch(e=>{var a;g.error(`${i("message.branch.deleted.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},x=()=>{const{_id:e}=v.value;return E.delete(e)},ee=()=>{const{_id:e}=v.value;E.restore(e).then(()=>{g.success(i("message.branch.restore.success")),$("changePage",b.value)}).catch(a=>{var s;g.error(`${i("message.branch.restore.error")} ${(s=a==null?void 0:a.response)==null?void 0:s.data.msg}`)})};return(e,a)=>(m(),I(A,null,[c(G,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=s=>_.value=s),title:"Please confirm",button:"danger",onConfirm:Z,"has-cancel":""},{default:u(()=>[n("strong",null,[y(r(e.$t("message.branch.deleted.question"))+" ",1),n("b",null,r(R()),1)]),y(" ? ")]),_:1},8,["modelValue"]),c(G,{modelValue:P.value,"onUpdate:modelValue":a[1]||(a[1]=s=>P.value=s),title:"Please confirm",onConfirm:ee},{default:u(()=>[n("strong",null,[y(r(e.$t("message.branch.restore.question"))+" ",1),n("b",null,r(R()),1)]),y(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:a[2]||(a[2]=s=>p("codigo"))},r(e.$t("message.branch.code")),1),n("th",{onClick:a[3]||(a[3]=s=>p("nombre"))},r(e.$t("message.branch.name")),1),n("th",{onClick:a[4]||(a[4]=s=>p("siglas"))},r(e.$t("message.branch.acronyms")),1),n("th",{onClick:a[5]||(a[5]=s=>p("estado"))},r(e.$t("message.branch.status")),1),$e])]),n("tbody",null,[(m(!0),I(A,null,H(l(j),(s,ae)=>(m(),I("tr",{key:s._id,onClick:q=>X(s)},[n("td",{"data-label":e.$t("message.branch.code")},r(s.codigo),9,ke),n("td",{"data-label":e.$t("message.branch.name")},r(s.nombre),9,Ce),n("td",{"data-label":e.$t("message.branch.acronyms")},r(s.siglas),9,Pe),n("td",{"data-label":e.$t("message.branch.status")},r(e.$t(`message.branch.statuses.${t(s.estado)}`)),9,we),n("td",ye,[c(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[F(c(B,{color:"success",icon:l(le),messageTooltip:l(i)("message.restore"),small:"",onClick:a[6]||(a[6]=q=>P.value=!0)},null,8,["icon","messageTooltip"]),[[O,D.checkDelete&&s.estado===2]]),F(c(B,{color:"info",icon:l(oe),messageTooltip:l(i)("message.edit"),small:"",onClick:q=>L(s._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!D.checkDelete&&s.estado!==2]]),F(c(B,{color:"danger",icon:l(ce),messageTooltip:l(i)("message.delete"),small:"",onClick:a[7]||(a[7]=q=>_.value=!0)},null,8,["icon","messageTooltip"]),[[O,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),n("div",Be,[c(re,null,{default:u(()=>[c(K,null,{default:u(()=>[(m(!0),I(A,null,H(l(S),s=>(m(),k(B,{key:s,active:s===l(b)-1,label:s+1,color:s===l(b)?"lightDark":"whiteDark",small:"",onClick:ae=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+r(l(T))+" of "+r(l(w)),1)]),_:1})])],64))}},Ee={__name:"IndexView",setup(D){const $=h([{name:"Inicio"}]),i=J(),g=h(1),V=h(10),d=ie({switch:[]}),C=t=>{E.index(t).then(o=>{i.branches=o,g.value=o.page,V.value=o.perPage})};C({page:g.value});const U=t=>{v({page:t})},P=(t,o)=>{j({sortBy:t,sortDesc:o})},_=h(!1),N=()=>{v({page:g.value}),_.value=d.switch.length!==0},b=t=>{E.getDelete(t).then(o=>{i.branches=o,g.value=o.page,V.value=o.perPage})},v=t=>{d.switch.length===0?C({page:t}):b({page:t})},j=t=>{d.switch.length===0?C(t):b(t)};return(t,o)=>(m(),k(ue,null,{default:u(()=>[c(he,null,{default:u(()=>{var p,w,T,S,M;return[c(Q,{icon:l(be),title:t.$t("message.branch.branches")},{default:u(()=>[c(B,{to:{name:"BranchesCreate"},icon:l(fe),label:t.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),c(de,{items:$.value},null,8,["items"]),c(me,{label:""},{default:u(()=>[c(pe,{modelValue:d.switch,"onUpdate:modelValue":o[0]||(o[0]=L=>d.switch=L),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:N},null,8,["modelValue"])]),_:1}),(p=l(i))!=null&&p.branches?W("",!0):(m(),k(Q,{key:0,icon:t.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(w=l(i))!=null&&w.branches?W("",!0):(m(),k(ge,{key:1,color:"danger",icon:t.mdiTableOff},{default:u(()=>[n("b",null,r(t.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(S=(T=l(i))==null?void 0:T.branches)==null?void 0:S.sucursales)!=null&&M.length?(m(),k(z,{key:2,class:"mb-6","has-table":""},{default:u(()=>[c(De,{checkDelete:_.value,onChangePage:U,onSort:P},null,8,["checkDelete"])]),_:1})):(m(),k(z,{key:3},{default:u(()=>[c(ve)]),_:1}))]}),_:1})]),_:1}))}};export{Ee as default};
