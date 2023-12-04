import{u as Z,ak as x,ae as ee,f as O,g as p,r as h,o as u,h as T,i,a as c,b as o,z as R,t as r,F as N,k as I,p as n,am as te,d as ae,s as se,S as oe,x as L,c as $,y as ne,U as le,A as re,m as j,B as ie,ap as ce,aq as ue,G as q}from"./index.fced531f.js";import{a as B,_ as A}from"./BaseButton.e5b26bef.js";import{_ as G}from"./SectionTitleLineWithButton.fa502c3a.js";import{_ as de}from"./NotificationBar.2f197c6e.js";import{C as me}from"./CardBoxComponentEmpty.97744eaa.js";import{r as E}from"./rates.service.9f1371d2.js";import{_ as ge}from"./FormField.7d4d56fa.js";import{_ as pe}from"./FormCheckRadioGroup.aa5e3b02.js";import{C as fe}from"./CardBoxModal.14424565.js";import"./FormCheckRadio.7c6aa33a.js";const _e=["onClick"],he=["data-label"],ve=["data-label"],be=["data-label"],$e=["data-label"],ke={class:"before:hidden lg:w-1 whitespace-nowrap"},Ce={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"RateTable",props:{checkable:Boolean},emits:["changePage","confirm","sort"],setup(z,{emit:d}){const{t:m}=Z(),k=x(),v=ee(),g=O(),D=p(()=>g.rates.tasas),U=p(()=>g.rates.total);h(!1);const C=h(!1),w=p(()=>g.rates.perPage),f=p(()=>g.rates.page);h([]);const y=h([]),s=p(()=>D.value),l=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],b=h(!1),_=e=>{b.value=!b.value,d("sort",e,b.value)},P=p(()=>Math.ceil(U.value/w.value)),S=p(()=>+f.value),V=p(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),M=e=>{d("changePage",e)},H=e=>{v.push({name:"RatesUpdate",params:{id:e}})},W=e=>y.value=e,J=()=>{const{nombre:e}=y.value;return e},K=m("message.rate.deleted.success"),Q=async()=>{X().then(()=>{k.success(K),d("changePage",f.value)}).catch(e=>{var t;k.error(`${m("message.rate.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},X=()=>{const{_id:e}=y.value;return E.delete(e)};return(e,t)=>(u(),T(N,null,[i(fe,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=a=>C.value=a),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:Q,"has-cancel":""},{default:c(()=>[o("strong",null,[R(r(e.$t("message.rate.deleted.question"))+" ",1),o("b",null,r(J()),1)]),R(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:t[1]||(t[1]=a=>_("siglas"))},r(e.$t("message.rate.acronyms")),1),o("th",{onClick:t[2]||(t[2]=a=>_("categoria"))},r(e.$t("message.rate.category")),1),o("th",{onClick:t[3]||(t[3]=a=>_("unidadNegocio"))},r(e.$t("message.rate.businessUnit")),1),o("th",{onClick:t[4]||(t[4]=a=>_("estado"))},r(e.$t("message.rate.status")),1)])]),o("tbody",null,[(u(!0),T(N,null,I(n(s),(a,Y)=>(u(),T("tr",{key:a._id,onClick:F=>W(a)},[o("td",{"data-label":e.$t("message.rate.acronyms")},r(a.siglas),9,he),o("td",{"data-label":e.$t("message.rate.category")},r(a.categoria.nombre),9,ve),o("td",{"data-label":e.$t("message.rate.businessUnit")},r(a.unidadNegocio.nombre),9,be),o("td",{"data-label":e.$t("message.rate.status")},r(e.$t(`message.rate.statuses.${l(a.estado)}`)),9,$e),o("td",ke,[i(L,{type:"justify-start lg:justify-end","no-wrap":""},{default:c(()=>[i(B,{color:"info",icon:n(te),messageTooltip:n(m)("message.edit"),small:"",onClick:F=>H(a._id)},null,8,["icon","messageTooltip","onClick"]),ae(i(B,{color:"danger",icon:n(se),messageTooltip:n(m)("message.delete"),small:"",onClick:t[5]||(t[5]=F=>C.value=!0)},null,8,["icon","messageTooltip"]),[[oe,a.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),o("div",Ce,[i(ne,null,{default:c(()=>[i(L,null,{default:c(()=>[(u(!0),T(N,null,I(n(V),a=>(u(),$(B,{key:a,active:a===n(f)-1,label:a+1,color:a===n(f)?"lightDark":"whiteDark",small:"",onClick:Y=>M(a+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+r(n(S))+" of "+r(n(P)),1)]),_:1})])],64))}},Re={__name:"IndexView",setup(z){const d=O(),m=h(1),k=h(10),v=le({switch:[]}),g=s=>{E.index(s).then(l=>{d.rates=l,m.value=l.page,k.value=l.perPage})};g({page:m.value});const D=()=>{f(m.value)},U=s=>{f({page:s})},C=(s,l)=>{y({sortBy:s,sortDesc:l})},w=s=>{E.getDelete(s).then(l=>{d.rates=l,m.value=l.page,k.value=l.perPage})},f=s=>{v.switch.length===0?g(s):w(s)},y=s=>{v.switch.length===0?g(s):w(s)};return(s,l)=>(u(),$(re,null,{default:c(()=>[i(ie,null,{default:c(()=>{var b,_,P,S,V;return[i(G,{icon:n(ce),title:s.$t("message.rate.rates")},{default:c(()=>[i(B,{to:"rates/create",icon:n(ue),label:s.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i(ge,{label:""},{default:c(()=>[i(pe,{modelValue:v.switch,"onUpdate:modelValue":l[0]||(l[0]=M=>v.switch=M),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:D},null,8,["modelValue"])]),_:1}),(b=n(d))!=null&&b.rates?j("",!0):(u(),$(G,{key:0,icon:n(q),title:"Empty variation"},null,8,["icon"])),(_=n(d))!=null&&_.rates?j("",!0):(u(),$(de,{key:1,color:"danger",icon:n(q)},{default:c(()=>[o("b",null,r(s.$t("message.empty_table"))+".",1),R(" When there's nothing to show ")]),_:1},8,["icon"])),(V=(S=(P=n(d))==null?void 0:P.rates)==null?void 0:S.tasas)!=null&&V.length?(u(),$(A,{key:2,class:"mb-6","has-table":""},{default:c(()=>[i(ye,{onChangePage:U,onSort:C})]),_:1})):(u(),$(A,{key:3},{default:c(()=>[i(me)]),_:1}))]}),_:1})]),_:1}))}};export{Re as default};
