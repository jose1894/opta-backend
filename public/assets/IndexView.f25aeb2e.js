import{u as ne,ak as oe,ae as le,r as g,f as X,g as p,o as d,h as U,i as c,a as u,b as o,z as D,t as r,F as L,k as R,d as j,p as n,al as ce,S as G,am as re,s as ie,x as z,c as C,y as ue,U as me,A as de,m as H,B as ge,ap as fe,aq as pe,G as W}from"./index.97cc49ea.js";import{a as V,_ as J}from"./BaseButton.fb27d38b.js";import{_ as ve}from"./FormField.649b9cf9.js";import{_ as K}from"./SectionTitleLineWithButton.b61a3c8c.js";import{_ as he}from"./NotificationBar.eea78ec5.js";import{C as $e}from"./CardBoxComponentEmpty.46e8d214.js";import{B as _e}from"./Breadcrumb.b7ab342c.js";import{C as Q}from"./CardBoxModal.59db8cff.js";import{c as I}from"./currencies.service.5fe8f9c7.js";import{_ as be}from"./FormCheckRadioGroup.0e196ff9.js";import"./FormCheckRadio.e1e29b86.js";const Ce=["onClick"],ke=["data-label"],Pe=["data-label"],we=["data-label"],ye={class:"before:hidden lg:w-1 whitespace-nowrap"},De={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Ve={__name:"CurrencyTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(E,{emit:m}){const{t:i}=ne(),v=oe(),h=le(),$=g([]),_=X(),k=p(()=>_.currencies.monedas),N=p(()=>_.currencies.total),P=g(!1),w=g(!1),S=p(()=>_.currencies.perPage),f=p(()=>_.currencies.page);g([]);const F=p(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],l=g(!1),b=e=>{l.value=!l.value,m("sort",e,l.value)},y=p(()=>Math.ceil(N.value/S.value)),B=p(()=>+f.value),T=p(()=>{const e=[];for(let s=0;s<y.value;s++)e.push(s);return e}),M=e=>{m("changePage",e)},q=e=>{h.push({name:"CurrenciesUpdate",params:{id:e}})},Y=e=>$.value=e,O=()=>{const{nombre:e}=$.value;return e},Z=i("message.currencies.deleted.success"),x=async()=>{ee().then(()=>{v.success(Z),m("changePage",f.value)}).catch(e=>{var s;v.error(`${i("message.currencies.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=$.value;return console.log(e),I.delete(e)},se=i("message.currencies.confirm.success"),te=()=>{const{_id:e}=$.value;I.restore(e).then(()=>{v.success(se),m("changePage",f.value)}).catch(s=>{var t;v.error(`${i("message.currencies.confirm.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),U(L,null,[c(Q,{modelValue:w.value,"onUpdate:modelValue":s[0]||(s[0]=t=>w.value=t),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[o("strong",null,[D(r(e.$t("message.currencies.deleted.question"))+" ",1),o("b",null,r(O()),1)]),D(" ? ")]),_:1},8,["modelValue","title"]),c(Q,{modelValue:P.value,"onUpdate:modelValue":s[1]||(s[1]=t=>P.value=t),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:u(()=>[o("strong",null,[D(r(e.$t("message.currencies.confirm.question"))+" ",1),o("b",null,r(O()),1)]),D(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:s[2]||(s[2]=t=>b("codigo"))},r(e.$t("message.currencies.code")),1),o("th",{onClick:s[3]||(s[3]=t=>b("nombre"))},r(e.$t("message.currencies.name")),1),o("th",{onClick:s[4]||(s[4]=t=>b("estado"))},r(e.$t("message.currencies.status")),1)])]),o("tbody",null,[(d(!0),U(L,null,R(n(F),(t,ae)=>(d(),U("tr",{key:t._id,onClick:A=>Y(t)},[o("td",{"data-label":e.$t("message.currencies.code")},r(t.codigo),9,ke),o("td",{"data-label":e.$t("message.currencies.name")},r(t.nombre),9,Pe),o("td",{"data-label":e.$t("message.currencies.status")},r(e.$t(`message.currencies.statuses.${a(t.estado)}`)),9,we),o("td",ye,[c(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[j(c(V,{color:"success",icon:n(ce),messageTooltip:n(i)("message.restore"),small:"",onClick:s[5]||(s[5]=A=>P.value=!0)},null,8,["icon","messageTooltip"]),[[G,E.checkDelete]]),j(c(V,{color:"info",icon:n(re),messageTooltip:n(i)("message.edit"),small:"",onClick:A=>q(t._id)},null,8,["icon","messageTooltip","onClick"]),[[G,!E.checkDelete]]),j(c(V,{color:"danger",icon:n(ie),messageTooltip:n(i)("message.delete"),small:"",onClick:s[6]||(s[6]=A=>w.value=!0)},null,8,["icon","messageTooltip"]),[[G,t.estado!==2]])]),_:2},1024)])],8,Ce))),128))])]),o("div",De,[c(ue,null,{default:u(()=>[c(z,null,{default:u(()=>[(d(!0),U(L,null,R(n(T),t=>(d(),C(V,{key:t,active:t===n(f)-1,label:t+1,color:t===n(f)?"lightDark":"whiteDark",small:"",onClick:ae=>M(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+r(n(B))+" of "+r(n(y)),1)]),_:1})])],64))}},Le={__name:"IndexView",setup(E){const m=X(),i=g(1),v=g(10),h=me({switch:[]}),$=g(!1),_=g([{name:"Inicio"}]),k=a=>{I.index(a).then(l=>{m.currencies=l,i.value=l.page,v.value=l.perPage})};k({page:i.value});const N=a=>{f({page:a})},P=(a,l)=>{F({sortBy:a,sortDesc:l})},w=()=>{f(i.value),$.value=h.switch.length!==0},S=a=>{I.getDelete(a).then(l=>{m.currencies=l,i.value=l.page,v.value=l.perPage})},f=a=>{h.switch.length===0?k(a):S(a)},F=a=>{h.switch.length===0?k(a):S(a)};return(a,l)=>(d(),C(de,null,{default:u(()=>[c(ge,null,{default:u(()=>{var b,y,B,T,M;return[c(K,{icon:n(fe),title:a.$t("message.currencies.currency")},{default:u(()=>[c(V,{to:"currencies/create",icon:n(pe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),c(_e,{items:_.value},null,8,["items"]),c(ve,{label:""},{default:u(()=>[c(be,{modelValue:h.switch,"onUpdate:modelValue":l[0]||(l[0]=q=>h.switch=q),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:w},null,8,["modelValue"])]),_:1}),(b=n(m))!=null&&b.currencies?H("",!0):(d(),C(K,{key:0,icon:n(W),title:"Empty variation"},null,8,["icon"])),(y=n(m))!=null&&y.currencies?H("",!0):(d(),C(he,{key:1,color:"danger",icon:n(W)},{default:u(()=>[o("b",null,r(a.$t("message.empty_table"))+".",1),D(" When there's nothing to show ")]),_:1},8,["icon"])),(M=(T=(B=n(m))==null?void 0:B.currencies)==null?void 0:T.monedas)!=null&&M.length?(d(),C(J,{key:2,class:"mb-6","has-table":""},{default:u(()=>[c(Ve,{checkDelete:$.value,onChangePage:N,onSort:P},null,8,["checkDelete"])]),_:1})):(d(),C(J,{key:3},{default:u(()=>[c($e)]),_:1}))]}),_:1})]),_:1}))}};export{Le as default};
