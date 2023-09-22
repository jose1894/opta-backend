import{af as se,ag as te,a9 as ne,R as z,I as f,y as h,o as m,r as E,a as o,w as i,j as n,f as y,E as c,Z as G,J as F,K as H,P as L,d as B,u as r,ah as le,ai as R,aj as oe,ak as ce,A as J,c as k,S as re,x as ie,_ as ue,b as K,an as de,B as me,O as W,e as ge,g as Z,i as he,ao as be,ap as fe}from"./index.cb093d8e.js";import{C as ve}from"./CardBoxComponentEmpty.87377cbc.js";import{b as T}from"./branches.service.075422d5.js";import{_ as $e}from"./FormCheckRadioGroup.d9d00b52.js";import"./FormCheckRadio.256f47df.js";const pe=n("th",null,null,-1),_e=["onClick"],ke=["data-label"],Ce=["data-label"],Pe=["data-label"],we=["data-label"],ye={class:"before:hidden lg:w-1 whitespace-nowrap"},Be={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"BranchTableView",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:p}){const{t:u}=se(),g=te(),V=ne(),d=z(),C=f(()=>d.branches.sucursales),U=f(()=>d.branches.total),P=h(!1),_=h(!1),N=f(()=>d.branches.perPage),b=f(()=>d.branches.page);h([]);const v=h([]),j=f(()=>C.value),t=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=h(!1),$=e=>{l.value=!l.value,p("sort",e,l.value)},w=f(()=>Math.ceil(U.value/N.value)),S=f(()=>+b.value),I=f(()=>{const e=[];for(let a=0;a<w.value;a++)e.push(a);return e}),M=e=>{p("changePage",e)},O=e=>{V.push({name:"BranchesUpdate",params:{id:e}})},Q=e=>v.value=e,q=()=>{const{nombre:e}=v.value;return e},X=u("message.branch.deleted.success"),Y=async()=>{x().then(()=>{g.success(X),p("changePage",b.value)}).catch(e=>{var a;g.error(`${u("message.branch.deleted.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},x=()=>{const{_id:e}=v.value;return T.delete(e)},ee=()=>{const{_id:e}=v.value;T.restore(e).then(()=>{g.success(u("message.branch.restore.success")),p("changePage",b.value)}).catch(a=>{var s;g.error(`${u("message.branch.restore.error")} ${(s=a==null?void 0:a.response)==null?void 0:s.data.msg}`)})};return(e,a)=>(m(),E(F,null,[o(G,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=s=>_.value=s),title:"Please confirm",button:"danger",onConfirm:Y,"has-cancel":""},{default:i(()=>[n("strong",null,[y(c(e.$t("message.branch.deleted.question"))+" ",1),n("b",null,c(q()),1)]),y(" ? ")]),_:1},8,["modelValue"]),o(G,{modelValue:P.value,"onUpdate:modelValue":a[1]||(a[1]=s=>P.value=s),title:"Please confirm",onConfirm:ee},{default:i(()=>[n("strong",null,[y(c(e.$t("message.branch.restore.question"))+" ",1),n("b",null,c(q()),1)]),y(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:a[2]||(a[2]=s=>$("codigo"))},c(e.$t("message.branch.code")),1),n("th",{onClick:a[3]||(a[3]=s=>$("nombre"))},c(e.$t("message.branch.name")),1),n("th",{onClick:a[4]||(a[4]=s=>$("siglas"))},c(e.$t("message.branch.acronyms")),1),n("th",{onClick:a[5]||(a[5]=s=>$("estado"))},c(e.$t("message.branch.status")),1),pe])]),n("tbody",null,[(m(!0),E(F,null,H(r(j),(s,ae)=>(m(),E("tr",{key:s._id,onClick:A=>Q(s)},[n("td",{"data-label":e.$t("message.branch.code")},c(s.codigo),9,ke),n("td",{"data-label":e.$t("message.branch.name")},c(s.nombre),9,Ce),n("td",{"data-label":e.$t("message.branch.acronyms")},c(s.siglas),9,Pe),n("td",{"data-label":e.$t("message.branch.status")},c(e.$t(`message.branch.statuses.${t(s.estado)}`)),9,we),n("td",ye,[o(J,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[L(o(B,{color:"success",icon:r(le),small:"",onClick:a[6]||(a[6]=A=>P.value=!0)},null,8,["icon"]),[[R,D.checkDelete&&s.estado===2]]),L(o(B,{color:"info",icon:r(oe),small:"",onClick:A=>O(s._id)},null,8,["icon","onClick"]),[[R,!D.checkDelete&&s.estado!==2]]),L(o(B,{color:"danger",icon:r(ce),small:"",onClick:a[7]||(a[7]=A=>_.value=!0)},null,8,["icon"]),[[R,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),n("div",Be,[o(re,null,{default:i(()=>[o(J,null,{default:i(()=>[(m(!0),E(F,null,H(r(I),s=>(m(),k(B,{key:s,active:s===r(b)-1,label:s+1,color:s===r(b)?"lightDark":"whiteDark",small:"",onClick:ae=>M(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+c(r(S))+" of "+c(r(w)),1)]),_:1})])],64))}},Te={__name:"IndexView",setup(D){const p=h([{name:"Inicio"}]),u=z(),g=h(1),V=h(10),d=ie({switch:[]}),C=t=>{T.index(t).then(l=>{u.branches=l,g.value=l.page,V.value=l.perPage})};C({page:g.value});const U=t=>{v({page:t})},P=(t,l)=>{j({sortBy:t,sortDesc:l})},_=h(!1),N=()=>{v({page:g.value}),_.value=d.switch.length!==0},b=t=>{T.getDelete(t).then(l=>{u.branches=l,g.value=l.page,V.value=l.perPage})},v=t=>{d.switch.length===0?C({page:t}):b({page:t})},j=t=>{d.switch.length===0?C(t):b(t)};return(t,l)=>(m(),k(ue,null,{default:i(()=>[o(he,null,{default:i(()=>{var $,w,S,I,M;return[o(K,{icon:r(be),title:t.$t("message.branch.branches")},{default:i(()=>[o(B,{to:{name:"BranchesCreate"},icon:r(fe),label:t.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),o(de,{items:p.value},null,8,["items"]),o(me,{label:""},{default:i(()=>[o($e,{modelValue:d.switch,"onUpdate:modelValue":l[0]||(l[0]=O=>d.switch=O),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:N},null,8,["modelValue"])]),_:1}),($=r(u))!=null&&$.branches?W("",!0):(m(),k(K,{key:0,icon:t.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(w=r(u))!=null&&w.branches?W("",!0):(m(),k(ge,{key:1,color:"danger",icon:t.mdiTableOff},{default:i(()=>[n("b",null,c(t.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(I=(S=r(u))==null?void 0:S.branches)==null?void 0:I.sucursales)!=null&&M.length?(m(),k(Z,{key:2,class:"mb-6","has-table":""},{default:i(()=>[o(De,{checkDelete:_.value,onChangePage:U,onSort:P},null,8,["checkDelete"])]),_:1})):(m(),k(Z,{key:3},{default:i(()=>[o(ve)]),_:1}))]}),_:1})]),_:1}))}};export{Te as default};