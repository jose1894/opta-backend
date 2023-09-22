import{af as ae,ag as oe,a9 as le,R as Q,I as h,y as g,o as m,r as N,a as i,w as r,j as o,f as y,E as c,Z as G,J as L,K as H,P as O,d as D,u as n,ah as ne,ai as R,aj as ie,ak as ce,A as J,c as b,S as re,x as ue,_ as de,b as K,an as me,B as fe,O as W,e as ge,g as Z,i as pe,ao as he,ap as ve,p as z}from"./index.cb093d8e.js";import{C as $e}from"./CardBoxComponentEmpty.87377cbc.js";import{p as T}from"./profiles.service.3d0baa48.js";import{_ as _e}from"./FormCheckRadioGroup.d9d00b52.js";import"./FormCheckRadio.256f47df.js";const be=["onClick"],ke=["data-label"],Pe=["data-label"],Ce=["data-label"],we={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"ProfilesTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:$}){const{t:u}=ae(),f=oe(),S=le(),d=Q(),k=h(()=>d.profiles.perfiles),B=h(()=>d.profiles.total),P=g(!1),C=g(!1),j=h(()=>d.profiles.perPage),p=h(()=>d.profiles.page);g([]);const v=g([]),I=h(()=>k.value);console.log(I);const a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=g(!1),_=e=>{l.value=!l.value,$("sort",e,l.value)},w=h(()=>Math.ceil(B.value/j.value)),M=h(()=>+p.value),E=h(()=>{const e=[];for(let s=0;s<w.value;s++)e.push(s);return e}),U=e=>{$("changePage",e)},A=e=>{S.push({name:"ProfilesUpdate",params:{id:e}})},X=e=>v.value=e,q=()=>{const{descripcion:e}=v.value;return e},Y=u("message.profiles.deleted.success"),x=async()=>{ee().then(()=>{f.success(Y),$("changePage",p.value)}).catch(e=>{var s;f.error(`${u("message.profiles.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return T.delete(e)},se=()=>{const{_id:e}=v.value;T.restore(e).then(()=>{f.success(u("message.profiles.restore.success")),$("changePage",p.value)}).catch(s=>{var t;f.error(`${u("message.profiles.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(m(),N(L,null,[i(G,{modelValue:C.value,"onUpdate:modelValue":s[0]||(s[0]=t=>C.value=t),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:r(()=>[o("strong",null,[y(c(e.$t("message.profiles.deleted.question"))+" ",1),o("b",null,c(q()),1)]),y(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:P.value,"onUpdate:modelValue":s[1]||(s[1]=t=>P.value=t),title:"Please confirm",onConfirm:se},{default:r(()=>[o("strong",null,[y(c(e.$t("message.profiles.restore.question"))+" ",1),o("b",null,c(q()),1)]),y(" ? ")]),_:1},8,["modelValue"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:s[2]||(s[2]=t=>_("codigo"))},c(e.$t("message.profiles.code")),1),o("th",{onClick:s[3]||(s[3]=t=>_("descripcion"))},c(e.$t("message.profiles.description")),1),o("th",{onClick:s[4]||(s[4]=t=>_("estado"))},c(e.$t("message.profiles.status")),1)])]),o("tbody",null,[(m(!0),N(L,null,H(n(I),(t,te)=>(m(),N("tr",{key:t._id,onClick:F=>X(t)},[o("td",{"data-label":e.$t("message.profiles.code")},c(t.codigo),9,ke),o("td",{"data-label":e.$t("message.profiles.description")},c(t.descripcion),9,Pe),o("td",{"data-label":e.$t("message.profiles.status")},c(e.$t(`message.profiles.statuses.${a(t.estado)}`)),9,Ce),o("td",we,[i(J,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[O(i(D,{color:"success",icon:n(ne),small:"",onClick:s[5]||(s[5]=F=>P.value=!0)},null,8,["icon"]),[[R,V.checkDelete&&t.estado===2]]),O(i(D,{color:"info",icon:n(ie),small:"",onClick:F=>A(t._id)},null,8,["icon","onClick"]),[[R,!V.checkDelete&&t.estado!==2]]),O(i(D,{color:"danger",icon:n(ce),small:"",onClick:s[6]||(s[6]=F=>C.value=!0)},null,8,["icon"]),[[R,!V.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,be))),128))])]),o("div",ye,[i(re,null,{default:r(()=>[i(J,null,{default:r(()=>[(m(!0),N(L,null,H(n(E),t=>(m(),b(D,{key:t,active:t===n(p)-1,label:t+1,color:t===n(p)?"lightDark":"whiteDark",small:"",onClick:te=>U(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+c(n(M))+" of "+c(n(w)),1)]),_:1})])],64))}},Ee={__name:"IndexView",setup(V){const $=g([{name:"Inicio"}]),u=Q(),f=g(1),S=g(10),d=ue({switch:[]}),k=a=>{T.index(a).then(l=>{u.profiles=l,f.value=l.page,S.value=l.perPage})};k({page:f.value});const B=g(!1),P=()=>{v({page:f.value}),B.value=d.switch.length!==0},C=a=>{v({page:a})},j=(a,l)=>{I({sortBy:a,sortDesc:l})},p=a=>{T.getDelete(a).then(l=>{u.profiles=l,f.value=l.page,S.value=l.perPage})},v=a=>{d.switch.length===0?k({page:a}):p({page:a})},I=a=>{d.switch.length===0?k(a):p(a)};return(a,l)=>(m(),b(de,null,{default:r(()=>[i(pe,null,{default:r(()=>{var _,w,M,E,U;return[i(K,{icon:n(he),title:a.$t("message.profiles.profiles")},{default:r(()=>[i(D,{to:{name:"ProfilesCreate"},icon:n(ve),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(me,{items:$.value},null,8,["items"]),i(fe,{label:""},{default:r(()=>[i(_e,{modelValue:d.switch,"onUpdate:modelValue":l[0]||(l[0]=A=>d.switch=A),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:P},null,8,["modelValue"])]),_:1}),(_=n(u))!=null&&_.profiles?W("",!0):(m(),b(K,{key:0,icon:n(z),title:"Empty variation"},null,8,["icon"])),(w=n(u))!=null&&w.profiles?W("",!0):(m(),b(ge,{key:1,color:"danger",icon:n(z)},{default:r(()=>[o("b",null,c(a.$t("message.empty_table"))+".",1),y(" When there's nothing to show ")]),_:1},8,["icon"])),(U=(E=(M=n(u))==null?void 0:M.profiles)==null?void 0:E.perfiles)!=null&&U.length?(m(),b(Z,{key:2,class:"mb-6","has-table":""},{default:r(()=>[i(De,{checkDelete:B.value,onChangePage:C,onSort:j},null,8,["checkDelete"])]),_:1})):(m(),b(Z,{key:3},{default:r(()=>[i($e)]),_:1}))]}),_:1})]),_:1}))}};export{Ee as default};