import{ag as ne,ah as oe,aa as le,y as g,S as X,I as v,o as d,r as I,a as c,w as u,j as o,f as D,E as r,$ as G,K as A,L as H,M as F,d as V,u as n,ai as ce,aj as O,ak as re,al as ie,A as K,c as k,T as ue,x as me,_ as de,b as Q,ao as ge,B as fe,Q as W,e as ve,g as z,i as he,ap as pe,aq as _e,p as J}from"./index.e27aaed2.js";import{C as $e}from"./CardBoxComponentEmpty.8b08f16b.js";import{c as E}from"./currencies.service.a7bb4266.js";import{_ as be}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const ke=["onClick"],Ce=["data-label"],Pe=["data-label"],we=["data-label"],ye={class:"before:hidden lg:w-1 whitespace-nowrap"},De={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Ve={__name:"CurrencyTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(U,{emit:m}){const{t:i}=ne(),h=oe(),p=le(),_=g([]),$=X(),C=v(()=>$.currencies.monedas),N=v(()=>$.currencies.total),P=g(!1),w=g(!1),S=v(()=>$.currencies.perPage),f=v(()=>$.currencies.page);g([]);const j=v(()=>C.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=g(!1),b=e=>{l.value=!l.value,m("sort",e,l.value)},y=v(()=>Math.ceil(N.value/S.value)),T=v(()=>+f.value),B=v(()=>{const e=[];for(let s=0;s<y.value;s++)e.push(s);return e}),M=e=>{m("changePage",e)},L=e=>{p.push({name:"CurrenciesUpdate",params:{id:e}})},Y=e=>_.value=e,R=()=>{const{nombre:e}=_.value;return e},Z=i("message.currencies.deleted.success"),x=async()=>{ee().then(()=>{h.success(Z),m("changePage",f.value)}).catch(e=>{var s;h.error(`${i("message.currencies.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=_.value;return console.log(e),E.delete(e)},se=i("message.currencies.confirm.success"),te=()=>{const{_id:e}=_.value;E.restore(e).then(()=>{h.success(se),m("changePage",f.value)}).catch(s=>{var t;h.error(`${i("message.currencies.confirm.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),I(A,null,[c(G,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=t=>w.value=t),title:"Please confirm",button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[o("strong",null,[D(r(e.$t("message.currencies.deleted.question"))+" ",1),o("b",null,r(R()),1)]),D(" ? ")]),_:1},8,["modelValue"]),c(G,{modelValue:P.value,"onUpdate:modelValue":s[1]||(s[1]=t=>P.value=t),title:"Please confirm",onConfirm:te},{default:u(()=>[o("strong",null,[D(r(e.$t("message.currencies.confirm.question"))+" ",1),o("b",null,r(R()),1)]),D(" ? ")]),_:1},8,["modelValue"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:s[2]||(s[2]=t=>b("codigo"))},r(e.$t("message.currencies.code")),1),o("th",{onClick:s[3]||(s[3]=t=>b("nombre"))},r(e.$t("message.currencies.name")),1),o("th",{onClick:s[4]||(s[4]=t=>b("estado"))},r(e.$t("message.currencies.status")),1)])]),o("tbody",null,[(d(!0),I(A,null,H(n(j),(t,ae)=>(d(),I("tr",{key:t._id,onClick:q=>Y(t)},[o("td",{"data-label":e.$t("message.currencies.code")},r(t.codigo),9,Ce),o("td",{"data-label":e.$t("message.currencies.name")},r(t.nombre),9,Pe),o("td",{"data-label":e.$t("message.currencies.status")},r(e.$t(`message.currencies.statuses.${a(t.estado)}`)),9,we),o("td",ye,[c(K,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[F(c(V,{color:"success",icon:n(ce),messageTooltip:n(i)("message.restore"),small:"",onClick:s[5]||(s[5]=q=>P.value=!0)},null,8,["icon","messageTooltip"]),[[O,U.checkDelete]]),F(c(V,{color:"info",icon:n(re),messageTooltip:n(i)("message.edit"),small:"",onClick:q=>L(t._id)},null,8,["icon","messageTooltip","onClick"]),[[O,!U.checkDelete]]),F(c(V,{color:"danger",icon:n(ie),messageTooltip:n(i)("message.delete"),small:"",onClick:s[6]||(s[6]=q=>w.value=!0)},null,8,["icon","messageTooltip"]),[[O,t.estado!==2]])]),_:2},1024)])],8,ke))),128))])]),o("div",De,[c(ue,null,{default:u(()=>[c(K,null,{default:u(()=>[(d(!0),I(A,null,H(n(B),t=>(d(),k(V,{key:t,active:t===n(f)-1,label:t+1,color:t===n(f)?"lightDark":"whiteDark",small:"",onClick:ae=>M(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+r(n(T))+" of "+r(n(y)),1)]),_:1})])],64))}},Ee={__name:"IndexView",setup(U){const m=X(),i=g(1),h=g(10),p=me({switch:[]}),_=g(!1),$=g([{name:"Inicio"}]),C=a=>{E.index(a).then(l=>{m.currencies=l,i.value=l.page,h.value=l.perPage})};C({page:i.value});const N=a=>{f({page:a})},P=(a,l)=>{j({sortBy:a,sortDesc:l})},w=()=>{f({page:i.value}),_.value=p.switch.length!==0},S=a=>{E.getDelete(a).then(l=>{m.currencies=l,i.value=l.page,h.value=l.perPage})},f=a=>{p.switch.length===0?C({page:a}):S({page:a})},j=a=>{p.switch.length===0?C(a):S(a)};return(a,l)=>(d(),k(de,null,{default:u(()=>[c(he,null,{default:u(()=>{var b,y,T,B,M;return[c(Q,{icon:n(pe),title:a.$t("message.currencies.currency")},{default:u(()=>[c(V,{to:"currencies/create",icon:n(_e),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),c(ge,{items:$.value},null,8,["items"]),c(fe,{label:""},{default:u(()=>[c(be,{modelValue:p.switch,"onUpdate:modelValue":l[0]||(l[0]=L=>p.switch=L),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:w},null,8,["modelValue"])]),_:1}),(b=n(m))!=null&&b.currencies?W("",!0):(d(),k(Q,{key:0,icon:n(J),title:"Empty variation"},null,8,["icon"])),(y=n(m))!=null&&y.currencies?W("",!0):(d(),k(ve,{key:1,color:"danger",icon:n(J)},{default:u(()=>[o("b",null,r(a.$t("message.empty_table"))+".",1),D(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(B=(T=n(m))==null?void 0:T.currencies)==null?void 0:B.monedas)!=null&&M.length?(d(),k(z,{key:2,class:"mb-6","has-table":""},{default:u(()=>[c(Ve,{checkDelete:_.value,onChangePage:N,onSort:P},null,8,["checkDelete"])]),_:1})):(d(),k(z,{key:3},{default:u(()=>[c($e)]),_:1}))]}),_:1})]),_:1}))}};export{Ee as default};
