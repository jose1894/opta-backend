import{ag as ae,ah as ne,aa as oe,S as X,I as h,y as f,o as d,r as E,a as i,w as r,j as o,f as w,E as u,$ as G,K as A,L as H,M as F,d as y,u as n,ai as le,aj as O,ak as ie,al as ce,A as K,c as b,T as ue,x as re,_ as me,b as Q,ao as de,B as ge,Q as W,e as fe,g as z,i as pe,ap as he,aq as ve,p as J}from"./index.e27aaed2.js";import{C as $e}from"./CardBoxComponentEmpty.8b08f16b.js";import{i as U}from"./itemsMenu.service.6fcbd694.js";import{_ as _e}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const be=["onClick"],ke=["data-label"],Me=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ItemsMenuTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:c}=ae(),g=ne(),V=oe(),m=X(),k=h(()=>m.itemsMenu.menu),I=h(()=>m.itemsMenu.total),M=f(!1),C=f(!1),N=h(()=>m.itemsMenu.perPage),p=h(()=>m.itemsMenu.page);f([]);const v=f([]),j=h(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=f(!1),_=e=>{l.value=!l.value,$("sort",e,l.value)},P=h(()=>Math.ceil(I.value/N.value)),S=h(()=>+p.value),T=h(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),B=e=>{$("changePage",e)},L=e=>{V.push({name:"ItemsMenuUpdate",params:{id:e}})},Y=e=>v.value=e,R=()=>{const{descripcion:e}=v.value;return e},Z=c("message.itemMenu.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),$("changePage",p.value)}).catch(e=>{var t;g.error(`${c("message.itemMenu.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return U.delete(e)},te=()=>{const{_id:e}=v.value;U.restore(e).then(()=>{g.success(c("message.country.restore.success")),$("changePage",p.value)}).catch(t=>{var s;g.error(`${c("message.itemMenu.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(d(),E(A,null,[i(G,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:r(()=>[o("strong",null,[w(u(e.$t("message.itemMenu.deleted.question"))+" ",1),o("b",null,u(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:M.value,"onUpdate:modelValue":t[1]||(t[1]=s=>M.value=s),title:"Please confirm",onConfirm:te},{default:r(()=>[o("strong",null,[w(u(e.$t("message.itemMenu.restore.question"))+" ",1),o("b",null,u(R()),1)]),w(" ? ")]),_:1},8,["modelValue"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:t[2]||(t[2]=s=>_("codigo"))},u(e.$t("message.itemMenu.code")),1),o("th",{onClick:t[3]||(t[3]=s=>_("descripcion"))},u(e.$t("message.itemMenu.description")),1),o("th",{onClick:t[4]||(t[4]=s=>_("estado"))},u(e.$t("message.itemMenu.status")),1)])]),o("tbody",null,[(d(!0),E(A,null,H(n(j),(s,se)=>(d(),E("tr",{key:s._id,onClick:q=>Y(s)},[o("td",{"data-label":e.$t("message.itemMenu.code")},u(s.codigo),9,ke),o("td",{"data-label":e.$t("message.itemMenu.description")},u(s.descripcion),9,Me),o("td",{"data-label":e.$t("message.itemMenu.status")},u(e.$t(`message.itemMenu.statuses.${a(s.estado)}`)),9,Ce),o("td",Pe,[i(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[F(i(y,{color:"success",icon:n(le),messageTooltip:n(c)("message.restore"),small:"",onClick:t[5]||(t[5]=q=>M.value=!0)},null,8,["icon","messageTooltip"]),[[O,D.checkDelete&&s.estado===2]]),F(i(y,{color:"info",icon:n(ie),messageTooltip:n(c)("message.edit"),small:"",onClick:q=>L(s._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!D.checkDelete&&s.estado!==2]]),F(i(y,{color:"danger",icon:n(ce),messageTooltip:n(c)("message.delete"),small:"",onClick:t[6]||(t[6]=q=>C.value=!0)},null,8,["icon","messageTooltip"]),[[O,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,be))),128))])]),o("div",we,[i(ue,null,{default:r(()=>[i(K,null,{default:r(()=>[(d(!0),E(A,null,H(n(T),s=>(d(),b(y,{key:s,active:s===n(p)-1,label:s+1,color:s===n(p)?"lightDark":"whiteDark",small:"",onClick:se=>B(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+u(n(S))+" of "+u(n(P)),1)]),_:1})])],64))}},Be={__name:"IndexView",setup(D){const $=f([{name:"Inicio"}]),c=X(),g=f(1),V=f(10),m=re({switch:[]}),k=a=>{U.index(a).then(l=>{c.itemsMenu=l,g.value=l.page,V.value=l.perPage})};k({page:g.value});const I=f(!1),M=()=>{v({page:g.value}),I.value=m.switch.length!==0},C=(a,l)=>{j({sortBy:a,sortDesc:l})},N=a=>{v({page:a})},p=a=>{U.getDelete(a).then(l=>{c.itemsMenu=l,g.value=l.page,V.value=l.perPage})},v=a=>{m.switch.length===0?k({page:a}):p({page:a})},j=a=>{m.switch.length===0?k(a):p(a)};return(a,l)=>(d(),b(me,null,{default:r(()=>[i(pe,null,{default:r(()=>{var _,P,S,T,B;return[i(Q,{icon:n(he),title:a.$t("message.itemMenu.ItemsMenu")},{default:r(()=>[i(y,{to:"itemsMenu/create",icon:n(ve),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(de,{items:$.value},null,8,["items"]),i(ge,{label:""},{default:r(()=>[i(_e,{modelValue:m.switch,"onUpdate:modelValue":l[0]||(l[0]=L=>m.switch=L),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:M},null,8,["modelValue"])]),_:1}),(_=n(c))!=null&&_.itemsMenu?W("",!0):(d(),b(Q,{key:0,icon:n(J),title:"Empty variation"},null,8,["icon"])),(P=n(c))!=null&&P.itemsMenu?W("",!0):(d(),b(fe,{key:1,color:"danger",icon:n(J)},{default:r(()=>[o("b",null,u(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(B=(T=(S=n(c))==null?void 0:S.itemsMenu)==null?void 0:T.menu)!=null&&B.length?(d(),b(z,{key:2,class:"mb-6","has-table":""},{default:r(()=>[i(ye,{checkDelete:I.value,onChangePage:N,onSort:C},null,8,["checkDelete"])]),_:1})):(d(),b(z,{key:3},{default:r(()=>[i($e)]),_:1}))]}),_:1})]),_:1}))}};export{Be as default};
