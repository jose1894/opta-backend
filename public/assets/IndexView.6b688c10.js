import{u as ae,ak as ne,ae as oe,f as X,g as h,r as p,o as d,h as U,i,a as m,b as o,z as w,t as c,F as L,k as R,d as j,p as n,al as le,S as G,am as ie,s as ue,x as z,c as b,y as ce,U as me,A as re,m as H,B as de,ap as ge,aq as pe,G as W}from"./index.b6490627.js";import{a as y,_ as J}from"./BaseButton.d5c30e56.js";import{_ as K}from"./SectionTitleLineWithButton.461f9878.js";import{_ as fe}from"./NotificationBar.9d0089dc.js";import{C as he}from"./CardBoxComponentEmpty.cd64ecd6.js";import{C as Q}from"./CardBoxModal.69505658.js";import{i as E}from"./itemsMenu.service.12d65bec.js";import{_ as ve}from"./FormField.74da7989.js";import{_ as $e}from"./FormCheckRadioGroup.347ae3c3.js";import{B as _e}from"./Breadcrumb.e3ca3049.js";import"./FormCheckRadio.34186dea.js";const be=["onClick"],ke=["data-label"],Me=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ItemsMenuTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:u}=ae(),g=ne(),V=oe(),r=X(),k=h(()=>r.itemsMenu.menu),I=h(()=>r.itemsMenu.total),M=p(!1),C=p(!1),N=h(()=>r.itemsMenu.perPage),f=h(()=>r.itemsMenu.page);p([]);const v=p([]),F=h(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=p(!1),_=e=>{l.value=!l.value,$("sort",e,l.value)},P=h(()=>Math.ceil(I.value/N.value)),S=h(()=>+f.value),B=h(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),T=e=>{$("changePage",e)},q=e=>{V.push({name:"ItemsMenuUpdate",params:{id:e}})},Y=e=>v.value=e,O=()=>{const{descripcion:e}=v.value;return e},Z=u("message.itemMenu.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),$("changePage",f.value)}).catch(e=>{var t;g.error(`${u("message.itemMenu.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=v.value;return E.delete(e)},te=()=>{const{_id:e}=v.value;E.restore(e).then(()=>{g.success(u("message.country.restore.success")),$("changePage",f.value)}).catch(t=>{var s;g.error(`${u("message.itemMenu.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(d(),U(L,null,[i(Q,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:m(()=>[o("strong",null,[w(c(e.$t("message.itemMenu.deleted.question"))+" ",1),o("b",null,c(O()),1)]),w(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:M.value,"onUpdate:modelValue":t[1]||(t[1]=s=>M.value=s),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:m(()=>[o("strong",null,[w(c(e.$t("message.itemMenu.restore.question"))+" ",1),o("b",null,c(O()),1)]),w(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:t[2]||(t[2]=s=>_("codigo"))},c(e.$t("message.itemMenu.code")),1),o("th",{onClick:t[3]||(t[3]=s=>_("descripcion"))},c(e.$t("message.itemMenu.description")),1),o("th",{onClick:t[4]||(t[4]=s=>_("estado"))},c(e.$t("message.itemMenu.status")),1)])]),o("tbody",null,[(d(!0),U(L,null,R(n(F),(s,se)=>(d(),U("tr",{key:s._id,onClick:A=>Y(s)},[o("td",{"data-label":e.$t("message.itemMenu.code")},c(s.codigo),9,ke),o("td",{"data-label":e.$t("message.itemMenu.description")},c(s.descripcion),9,Me),o("td",{"data-label":e.$t("message.itemMenu.status")},c(e.$t(`message.itemMenu.statuses.${a(s.estado)}`)),9,Ce),o("td",Pe,[i(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:m(()=>[j(i(y,{color:"success",icon:n(le),messageTooltip:n(u)("message.restore"),small:"",onClick:t[5]||(t[5]=A=>M.value=!0)},null,8,["icon","messageTooltip"]),[[G,D.checkDelete&&s.estado===2]]),j(i(y,{color:"info",icon:n(ie),messageTooltip:n(u)("message.edit"),small:"",onClick:A=>q(s._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!D.checkDelete&&s.estado!==2]]),j(i(y,{color:"danger",icon:n(ue),messageTooltip:n(u)("message.delete"),small:"",onClick:t[6]||(t[6]=A=>C.value=!0)},null,8,["icon","messageTooltip"]),[[G,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,be))),128))])]),o("div",we,[i(ce,null,{default:m(()=>[i(z,null,{default:m(()=>[(d(!0),U(L,null,R(n(B),s=>(d(),b(y,{key:s,active:s===n(f)-1,label:s+1,color:s===n(f)?"lightDark":"whiteDark",small:"",onClick:se=>T(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+c(n(S))+" of "+c(n(P)),1)]),_:1})])],64))}},Ae={__name:"IndexView",setup(D){const $=p([{name:"Inicio"}]),u=X(),g=p(1),V=p(10),r=me({switch:[]}),k=a=>{E.index(a).then(l=>{u.itemsMenu=l,g.value=l.page,V.value=l.perPage})};k({page:g.value});const I=p(!1),M=()=>{v({page:g.value}),I.value=r.switch.length!==0},C=(a,l)=>{F({sortBy:a,sortDesc:l})},N=a=>{v({page:a})},f=a=>{E.getDelete(a).then(l=>{u.itemsMenu=l,g.value=l.page,V.value=l.perPage})},v=a=>{r.switch.length===0?k({page:a}):f({page:a})},F=a=>{r.switch.length===0?k(a):f(a)};return(a,l)=>(d(),b(re,null,{default:m(()=>[i(de,null,{default:m(()=>{var _,P,S,B,T;return[i(K,{icon:n(ge),title:a.$t("message.itemMenu.ItemsMenu")},{default:m(()=>[i(y,{to:"itemsMenu/create",icon:n(pe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(_e,{items:$.value},null,8,["items"]),i(ve,{label:""},{default:m(()=>[i($e,{modelValue:r.switch,"onUpdate:modelValue":l[0]||(l[0]=q=>r.switch=q),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:M},null,8,["modelValue"])]),_:1}),(_=n(u))!=null&&_.itemsMenu?H("",!0):(d(),b(K,{key:0,icon:n(W),title:"Empty variation"},null,8,["icon"])),(P=n(u))!=null&&P.itemsMenu?H("",!0):(d(),b(fe,{key:1,color:"danger",icon:n(W)},{default:m(()=>[o("b",null,c(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(T=(B=(S=n(u))==null?void 0:S.itemsMenu)==null?void 0:B.menu)!=null&&T.length?(d(),b(J,{key:2,class:"mb-6","has-table":""},{default:m(()=>[i(ye,{checkDelete:I.value,onChangePage:N,onSort:C},null,8,["checkDelete"])]),_:1})):(d(),b(J,{key:3},{default:m(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{Ae as default};
