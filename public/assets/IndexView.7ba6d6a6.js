import{af as ne,ag as le,a9 as oe,y as g,R as Q,I as v,o as d,r as E,a as c,w as i,j as l,f as V,E as r,Z as G,J as L,K as H,P as O,d as D,u as o,ah as ce,ai as R,aj as re,ak as ie,A as J,c as k,S as ue,x as de,_ as me,b as K,an as ge,B as fe,O as W,e as ve,g as Z,i as he,ao as pe,ap as _e,p as z}from"./index.cb093d8e.js";import{C as $e}from"./CardBoxComponentEmpty.87377cbc.js";import{c as U}from"./currencies.service.0da5e35d.js";import{_ as be}from"./FormCheckRadioGroup.d9d00b52.js";import"./FormCheckRadio.256f47df.js";const ke=["onClick"],Ce=["data-label"],Pe=["data-label"],we=["data-label"],ye={class:"before:hidden lg:w-1 whitespace-nowrap"},Ve={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},De={__name:"CurrencyTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(N,{emit:u}){const{t:m}=ne(),h=le(),p=oe(),_=g([]),$=Q(),C=v(()=>$.currencies.monedas),T=v(()=>$.currencies.total),P=g(!1),w=g(!1),S=v(()=>$.currencies.perPage),f=v(()=>$.currencies.page);g([]);const j=v(()=>C.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=g(!1),b=e=>{n.value=!n.value,u("sort",e,n.value)},y=v(()=>Math.ceil(T.value/S.value)),B=v(()=>+f.value),M=v(()=>{const e=[];for(let s=0;s<y.value;s++)e.push(s);return e}),I=e=>{u("changePage",e)},A=e=>{p.push({name:"CurrenciesUpdate",params:{id:e}})},X=e=>_.value=e,q=()=>{const{nombre:e}=_.value;return e},Y=m("message.currencies.deleted.success"),x=async()=>{ee().then(()=>{h.success(Y),u("changePage",f.value)}).catch(e=>{var s;h.error(`${m("message.currencies.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=_.value;return console.log(e),U.delete(e)},se=m("message.currencies.confirm.success"),te=()=>{const{_id:e}=_.value;U.restore(e).then(()=>{h.success(se),u("changePage",f.value)}).catch(s=>{var t;h.error(`${m("message.currencies.confirm.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),E(L,null,[c(G,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=t=>w.value=t),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:i(()=>[l("strong",null,[V(r(e.$t("message.currencies.deleted.question"))+" ",1),l("b",null,r(q()),1)]),V(" ? ")]),_:1},8,["modelValue"]),c(G,{modelValue:P.value,"onUpdate:modelValue":s[1]||(s[1]=t=>P.value=t),title:"Please confirm",onConfirm:te},{default:i(()=>[l("strong",null,[V(r(e.$t("message.currencies.confirm.question"))+" ",1),l("b",null,r(q()),1)]),V(" ? ")]),_:1},8,["modelValue"]),l("table",null,[l("thead",null,[l("tr",null,[l("th",{onClick:s[2]||(s[2]=t=>b("codigo"))},r(e.$t("message.currencies.code")),1),l("th",{onClick:s[3]||(s[3]=t=>b("nombre"))},r(e.$t("message.currencies.name")),1),l("th",{onClick:s[4]||(s[4]=t=>b("estado"))},r(e.$t("message.currencies.status")),1)])]),l("tbody",null,[(d(!0),E(L,null,H(o(j),(t,ae)=>(d(),E("tr",{key:t._id,onClick:F=>X(t)},[l("td",{"data-label":e.$t("message.currencies.code")},r(t.codigo),9,Ce),l("td",{"data-label":e.$t("message.currencies.name")},r(t.nombre),9,Pe),l("td",{"data-label":e.$t("message.currencies.status")},r(e.$t(`message.currencies.statuses.${a(t.estado)}`)),9,we),l("td",ye,[c(J,{type:"justify-start lg:justify-end","no-wrap":""},{default:i(()=>[O(c(D,{color:"success",icon:o(ce),small:"",onClick:s[5]||(s[5]=F=>P.value=!0)},null,8,["icon"]),[[R,N.checkDelete]]),O(c(D,{color:"info",icon:o(re),small:"",onClick:F=>A(t._id)},null,8,["icon","onClick"]),[[R,!N.checkDelete]]),O(c(D,{color:"danger",icon:o(ie),small:"",onClick:s[6]||(s[6]=F=>w.value=!0)},null,8,["icon"]),[[R,t.estado!==2]])]),_:2},1024)])],8,ke))),128))])]),l("div",Ve,[c(ue,null,{default:i(()=>[c(J,null,{default:i(()=>[(d(!0),E(L,null,H(o(M),t=>(d(),k(D,{key:t,active:t===o(f)-1,label:t+1,color:t===o(f)?"lightDark":"whiteDark",small:"",onClick:ae=>I(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+r(o(B))+" of "+r(o(y)),1)]),_:1})])],64))}},Ue={__name:"IndexView",setup(N){const u=Q(),m=g(1),h=g(10),p=de({switch:[]}),_=g(!1),$=g([{name:"Inicio"}]),C=a=>{U.index(a).then(n=>{u.currencies=n,m.value=n.page,h.value=n.perPage})};C({page:m.value});const T=a=>{f({page:a})},P=(a,n)=>{j({sortBy:a,sortDesc:n})},w=()=>{f({page:m.value}),_.value=p.switch.length!==0},S=a=>{U.getDelete(a).then(n=>{u.currencies=n,m.value=n.page,h.value=n.perPage})},f=a=>{p.switch.length===0?C({page:a}):S({page:a})},j=(a,n)=>{p.switch.length===0?C({sortBy:a,sortDesc:n}):S({sortBy:a,sortDesc:n})};return(a,n)=>(d(),k(me,null,{default:i(()=>[c(he,null,{default:i(()=>{var b,y,B,M,I;return[c(K,{icon:o(pe),title:a.$t("message.currencies.currency")},{default:i(()=>[c(D,{to:"currencies/create",icon:o(_e),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),c(ge,{items:$.value},null,8,["items"]),c(fe,{label:""},{default:i(()=>[c(be,{modelValue:p.switch,"onUpdate:modelValue":n[0]||(n[0]=A=>p.switch=A),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:w},null,8,["modelValue"])]),_:1}),(b=o(u))!=null&&b.currencies?W("",!0):(d(),k(K,{key:0,icon:o(z),title:"Empty variation"},null,8,["icon"])),(y=o(u))!=null&&y.currencies?W("",!0):(d(),k(ve,{key:1,color:"danger",icon:o(z)},{default:i(()=>[l("b",null,r(a.$t("message.empty_table"))+".",1),V(" When there's nothing to show ")]),_:1},8,["icon"])),(I=(M=(B=o(u))==null?void 0:B.currencies)==null?void 0:M.monedas)!=null&&I.length?(d(),k(Z,{key:2,class:"mb-6","has-table":""},{default:i(()=>[c(De,{checkDelete:_.value,onChangePage:T,onSort:P},null,8,["checkDelete"])]),_:1})):(d(),k(Z,{key:3},{default:i(()=>[c($e)]),_:1}))]}),_:1})]),_:1}))}};export{Ue as default};
