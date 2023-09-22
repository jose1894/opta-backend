import{af as ae,ag as ne,a9 as le,R as Q,I as v,y as f,o as d,r as U,a as i,w as u,j as n,f as w,E as c,Z as G,J as L,K as H,P as O,d as y,u as o,ah as oe,ai as R,aj as ie,ak as ce,A as J,c as b,S as ue,x as re,_ as me,b as K,an as de,B as ge,O as W,e as fe,g as Z,i as he,ao as ve,ap as pe,p as z}from"./index.2b059d96.js";import{C as $e}from"./CardBoxComponentEmpty.c5973077.js";import{i as N}from"./itemsMenu.service.c7c7afe1.js";import{_ as _e}from"./FormCheckRadioGroup.f120ae1c.js";import"./FormCheckRadio.b0cf8ca6.js";const be=["onClick"],ke=["data-label"],Me=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ItemsMenuTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(D,{emit:$}){const{t:r}=ae(),g=ne(),V=le(),m=Q(),k=v(()=>m.itemsMenu.menu),I=v(()=>m.itemsMenu.total),M=f(!1),C=f(!1),T=v(()=>m.itemsMenu.perPage),h=v(()=>m.itemsMenu.page);f([]);const p=f([]),j=v(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=f(!1),_=e=>{l.value=!l.value,$("sort",e,l.value)},P=v(()=>Math.ceil(I.value/T.value)),S=v(()=>+h.value),B=v(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),E=e=>{$("changePage",e)},A=e=>{V.push({name:"ItemsMenuUpdate",params:{id:e}})},X=e=>p.value=e,q=()=>{const{descripcion:e}=p.value;return e},Y=r("message.itemMenu.deleted.success"),x=async()=>{ee().then(()=>{g.success(Y),$("changePage",h.value)}).catch(e=>{var t;g.error(`${r("message.itemMenu.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},ee=()=>{const{_id:e}=p.value;return N.delete(e)},te=()=>{const{_id:e}=p.value;N.restore(e).then(()=>{g.success(r("message.country.restore.success")),$("changePage",h.value)}).catch(t=>{var s;g.error(`${r("message.itemMenu.restore.error")} ${(s=t==null?void 0:t.response)==null?void 0:s.data.msg}`)})};return(e,t)=>(d(),U(L,null,[i(G,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[n("strong",null,[w(c(e.$t("message.itemMenu.deleted.question"))+" ",1),n("b",null,c(q()),1)]),w(" ? ")]),_:1},8,["modelValue"]),i(G,{modelValue:M.value,"onUpdate:modelValue":t[1]||(t[1]=s=>M.value=s),title:"Please confirm",onConfirm:te},{default:u(()=>[n("strong",null,[w(c(e.$t("message.itemMenu.restore.question"))+" ",1),n("b",null,c(q()),1)]),w(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:t[2]||(t[2]=s=>_("codigo"))},c(e.$t("message.itemMenu.code")),1),n("th",{onClick:t[3]||(t[3]=s=>_("descripcion"))},c(e.$t("message.itemMenu.description")),1),n("th",{onClick:t[4]||(t[4]=s=>_("estado"))},c(e.$t("message.itemMenu.status")),1)])]),n("tbody",null,[(d(!0),U(L,null,H(o(j),(s,se)=>(d(),U("tr",{key:s._id,onClick:F=>X(s)},[n("td",{"data-label":e.$t("message.itemMenu.code")},c(s.codigo),9,ke),n("td",{"data-label":e.$t("message.itemMenu.description")},c(s.descripcion),9,Me),n("td",{"data-label":e.$t("message.itemMenu.status")},c(e.$t(`message.itemMenu.statuses.${a(s.estado)}`)),9,Ce),n("td",Pe,[i(J,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[O(i(y,{color:"success",icon:o(oe),small:"",onClick:t[5]||(t[5]=F=>M.value=!0)},null,8,["icon"]),[[R,D.checkDelete&&s.estado===2]]),O(i(y,{color:"info",icon:o(ie),small:"",onClick:F=>A(s._id)},null,8,["icon","onClick"]),[[R,!D.checkDelete&&s.estado!==2]]),O(i(y,{color:"danger",icon:o(ce),small:"",onClick:t[6]||(t[6]=F=>C.value=!0)},null,8,["icon"]),[[R,!D.checkDelete&&s.estado!==2]])]),_:2},1024)])],8,be))),128))])]),n("div",we,[i(ue,null,{default:u(()=>[i(J,null,{default:u(()=>[(d(!0),U(L,null,H(o(B),s=>(d(),b(y,{key:s,active:s===o(h)-1,label:s+1,color:s===o(h)?"lightDark":"whiteDark",small:"",onClick:se=>E(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+c(o(S))+" of "+c(o(P)),1)]),_:1})])],64))}},Ee={__name:"IndexView",setup(D){const $=f([{name:"Inicio"}]),r=Q(),g=f(1),V=f(10),m=re({switch:[]}),k=a=>{N.index(a).then(l=>{r.itemsMenu=l,g.value=l.page,V.value=l.perPage})};k({page:g.value});const I=f(!1),M=()=>{p({page:g.value}),I.value=m.switch.length!==0},C=(a,l)=>{j({sortBy:a,sortDesc:l})},T=a=>{p({page:a})},h=a=>{N.getDelete(a).then(l=>{r.itemsMenu=l,g.value=l.page,V.value=l.perPage})},p=a=>{m.switch.length===0?k({page:a}):h({page:a})},j=a=>{m.switch.length===0?k(a):h(a)};return(a,l)=>(d(),b(me,null,{default:u(()=>[i(he,null,{default:u(()=>{var _,P,S,B,E;return[i(K,{icon:o(ve),title:a.$t("message.itemMenu.ItemsMenu")},{default:u(()=>[i(y,{to:"itemsMenu/create",icon:o(pe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(de,{items:$.value},null,8,["items"]),i(ge,{label:""},{default:u(()=>[i(_e,{modelValue:m.switch,"onUpdate:modelValue":l[0]||(l[0]=A=>m.switch=A),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:M},null,8,["modelValue"])]),_:1}),(_=o(r))!=null&&_.itemsMenu?W("",!0):(d(),b(K,{key:0,icon:o(z),title:"Empty variation"},null,8,["icon"])),(P=o(r))!=null&&P.itemsMenu?W("",!0):(d(),b(fe,{key:1,color:"danger",icon:o(z)},{default:u(()=>[n("b",null,c(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(E=(B=(S=o(r))==null?void 0:S.itemsMenu)==null?void 0:B.menu)!=null&&E.length?(d(),b(Z,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(ye,{checkDelete:I.value,onChangePage:T,onSort:C},null,8,["checkDelete"])]),_:1})):(d(),b(Z,{key:3},{default:u(()=>[i($e)]),_:1}))]}),_:1})]),_:1}))}};export{Ee as default};