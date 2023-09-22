import{ag as Z,ah as x,aa as ee,S as G,I as p,y as h,o as u,r as T,a as r,w as c,j as n,f as E,E as i,$ as te,K as U,L as j,d as D,u as o,ak as ae,M as se,al as ne,aj as oe,A as L,c as b,T as le,x as ie,_ as re,b as F,B as ce,Q as q,e as ue,g as A,i as de,ap as me,aq as ge,p as O}from"./index.e27aaed2.js";import{C as pe}from"./CardBoxComponentEmpty.8b08f16b.js";import{r as R}from"./rates.service.08e6cbba.js";import{_ as fe}from"./FormCheckRadioGroup.84cb26fc.js";import"./FormCheckRadio.44135d25.js";const _e=["onClick"],he=["data-label"],ve=["data-label"],$e=["data-label"],be=["data-label"],ke={class:"before:hidden lg:w-1 whitespace-nowrap"},ye={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Ce={__name:"RateTable",props:{checkable:Boolean},emits:["changePage","confirm","sort"],setup(H,{emit:d}){const{t:m}=Z(),k=x(),v=ee(),g=G(),B=p(()=>g.rates.tasas),M=p(()=>g.rates.total);h(!1);const y=h(!1),w=p(()=>g.rates.perPage),f=p(()=>g.rates.page);h([]);const C=h([]),s=p(()=>B.value),l=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],$=h(!1),_=e=>{$.value=!$.value,d("sort",e,$.value)},P=p(()=>Math.ceil(M.value/w.value)),S=p(()=>+f.value),V=p(()=>{const e=[];for(let t=0;t<P.value;t++)e.push(t);return e}),N=e=>{d("changePage",e)},K=e=>{v.push({name:"RatesUpdate",params:{id:e}})},Q=e=>C.value=e,W=()=>{const{nombre:e}=C.value;return e},z=m("message.rate.deleted.success"),J=async()=>{X().then(()=>{k.success(z),d("changePage",f.value)}).catch(e=>{var t;k.error(`${m("message.rate.deleted.error")} ${(t=e==null?void 0:e.response)==null?void 0:t.data.msg}`)})},X=()=>{const{_id:e}=C.value;return R.delete(e)};return(e,t)=>(u(),T(U,null,[r(te,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=a=>y.value=a),title:"Please confirm",button:"danger",onConfirm:J,"has-cancel":""},{default:c(()=>[n("strong",null,[E(i(e.$t("message.rate.deleted.question"))+" ",1),n("b",null,i(W()),1)]),E(" ? ")]),_:1},8,["modelValue"]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{onClick:t[1]||(t[1]=a=>_("siglas"))},i(e.$t("message.rate.acronyms")),1),n("th",{onClick:t[2]||(t[2]=a=>_("categoria"))},i(e.$t("message.rate.category")),1),n("th",{onClick:t[3]||(t[3]=a=>_("unidadNegocio"))},i(e.$t("message.rate.businessUnit")),1),n("th",{onClick:t[4]||(t[4]=a=>_("estado"))},i(e.$t("message.rate.status")),1)])]),n("tbody",null,[(u(!0),T(U,null,j(o(s),(a,Y)=>(u(),T("tr",{key:a._id,onClick:I=>Q(a)},[n("td",{"data-label":e.$t("message.rate.acronyms")},i(a.siglas),9,he),n("td",{"data-label":e.$t("message.rate.category")},i(a.categoria.nombre),9,ve),n("td",{"data-label":e.$t("message.rate.businessUnit")},i(a.unidadNegocio.nombre),9,$e),n("td",{"data-label":e.$t("message.rate.status")},i(e.$t(`message.rate.statuses.${l(a.estado)}`)),9,be),n("td",ke,[r(L,{type:"justify-start lg:justify-end","no-wrap":""},{default:c(()=>[r(D,{color:"info",icon:o(ae),messageTooltip:o(m)("message.edit"),small:"",onClick:I=>K(a._id)},null,8,["icon","messageTooltip","onClick"]),se(r(D,{color:"danger",icon:o(ne),messageTooltip:o(m)("message.delete"),small:"",onClick:t[5]||(t[5]=I=>y.value=!0)},null,8,["icon","messageTooltip"]),[[oe,a.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),n("div",ye,[r(le,null,{default:c(()=>[r(L,null,{default:c(()=>[(u(!0),T(U,null,j(o(V),a=>(u(),b(D,{key:a,active:a===o(f)-1,label:a+1,color:a===o(f)?"lightDark":"whiteDark",small:"",onClick:Y=>N(a+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),n("small",null,"Page "+i(o(S))+" of "+i(o(P)),1)]),_:1})])],64))}},De={__name:"IndexView",setup(H){const d=G(),m=h(1),k=h(10),v=ie({switch:[]}),g=s=>{R.index(s).then(l=>{d.rates=l,m.value=l.page,k.value=l.perPage})};g({page:m.value});const B=()=>{f({page:m.value})},M=s=>{f({page:s})},y=(s,l)=>{C({sortBy:s,sortDesc:l})},w=s=>{R.getDelete(s).then(l=>{d.rates=l,m.value=l.page,k.value=l.perPage})},f=s=>{v.switch.length===0?g({page:s}):w({page:s})},C=s=>{v.switch.length===0?g(s):w(s)};return(s,l)=>(u(),b(re,null,{default:c(()=>[r(de,null,{default:c(()=>{var $,_,P,S,V;return[r(F,{icon:o(me),title:s.$t("message.rate.rates")},{default:c(()=>[r(D,{to:"rates/create",icon:o(ge),label:s.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),r(ce,{label:""},{default:c(()=>[r(fe,{modelValue:v.switch,"onUpdate:modelValue":l[0]||(l[0]=N=>v.switch=N),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:B},null,8,["modelValue"])]),_:1}),($=o(d))!=null&&$.rates?q("",!0):(u(),b(F,{key:0,icon:o(O),title:"Empty variation"},null,8,["icon"])),(_=o(d))!=null&&_.rates?q("",!0):(u(),b(ue,{key:1,color:"danger",icon:o(O)},{default:c(()=>[n("b",null,i(s.$t("message.empty_table"))+".",1),E(" When there's nothing to show ")]),_:1},8,["icon"])),(V=(S=(P=o(d))==null?void 0:P.rates)==null?void 0:S.tasas)!=null&&V.length?(u(),b(A,{key:2,class:"mb-6","has-table":""},{default:c(()=>[r(Ce,{onChangePage:M,onSort:y})]),_:1})):(u(),b(A,{key:3},{default:c(()=>[r(pe)]),_:1}))]}),_:1})]),_:1}))}};export{De as default};