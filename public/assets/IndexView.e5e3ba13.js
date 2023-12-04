import{u as ae,ak as oe,ae as le,f as X,g as h,r as f,o as d,h as E,i,a as u,b as o,z as w,t as c,F as L,k as G,d as O,p as l,al as ne,S as j,am as ie,s as ce,x as H,c as C,y as re,U as ue,A as me,m as W,B as de,ap as ge,aq as fe}from"./index.b6490627.js";import{a as D,_ as J}from"./BaseButton.d5c30e56.js";import{_ as pe}from"./NotificationBar.9d0089dc.js";import{C as he}from"./CardBoxComponentEmpty.cd64ecd6.js";import{_ as K}from"./SectionTitleLineWithButton.461f9878.js";import{C as Q}from"./CardBoxModal.69505658.js";import{c as N}from"./cities.service.25e83f8c.js";import{_ as ve}from"./FormField.74da7989.js";import{_ as be}from"./FormCheckRadioGroup.347ae3c3.js";import{B as $e}from"./Breadcrumb.e3ca3049.js";import"./FormCheckRadio.34186dea.js";const Ce=o("th",null,null,-1),ke=["onClick"],_e=["data-label"],ye=["data-label"],Pe=["data-label"],we=["data-label"],De={class:"before:hidden lg:w-1 whitespace-nowrap"},Ve={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Se={__name:"CityTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(V,{emit:b}){const{t:r}=ae(),g=oe(),S=le(),m=X(),k=h(()=>m.cities.ciudades),T=h(()=>m.cities.total),_=f(!1),y=f(!1),$=f([]),B=h(()=>m.cities.perPage),p=h(()=>m.cities.page);f([]);const F=h(()=>k.value),a=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],n=f(!1),v=e=>{n.value=!n.value,b("sort",e,n.value)},P=h(()=>Math.ceil(T.value/B.value)),M=h(()=>+p.value),U=h(()=>{const e=[];for(let s=0;s<P.value;s++)e.push(s);return e}),I=e=>{b("changePage",e)},q=e=>{S.push({name:"CitiesUpdate",params:{id:e}})},Y=e=>$.value=e,R=()=>{const{nombre:e}=$.value;return e},Z=r("message.city.deleted.success"),x=async()=>{ee().then(()=>{g.success(Z),b("changePage",p.value)}).catch(e=>{var s;g.error(`${r("message.city.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=$.value;return N.delete(e)},te=()=>{const{_id:e}=$.value;N.restore(e).then(()=>{g.success(r("message.city.restore.success")),b("changePage",p.value)}).catch(s=>{var t;g.error(`${r("message.city.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),E(L,null,[i(Q,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=t=>y.value=t),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:u(()=>[o("strong",null,[w(c(e.$t("message.state.deleted.question"))+" ",1),o("b",null,c(R()),1)]),w(" ? ")]),_:1},8,["modelValue","title"]),i(Q,{modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=t=>_.value=t),title:e.$t("message.pleaseConfirm"),onConfirm:te},{default:u(()=>[o("strong",null,[w(c(e.$t("message.city.restore.question"))+" ",1),o("b",null,c(R()),1)]),w(" ? ")]),_:1},8,["modelValue","title"]),o("table",null,[o("thead",null,[o("tr",null,[o("th",{onClick:s[2]||(s[2]=t=>v("codigo"))},c(e.$t("message.city.code")),1),o("th",{onClick:s[3]||(s[3]=t=>v("nombre"))},c(e.$t("message.city.name")),1),o("th",{onClick:s[4]||(s[4]=t=>v("nombre"))},c(e.$t("message.city.state")),1),o("th",{onClick:s[5]||(s[5]=t=>v("estado"))},c(e.$t("message.city.status")),1),Ce])]),o("tbody",null,[(d(!0),E(L,null,G(l(F),(t,se)=>{var z;return d(),E("tr",{key:t._id,onClick:A=>Y(t)},[o("td",{"data-label":e.$t("message.city.code")},c(t.codigo),9,_e),o("td",{"data-label":e.$t("message.city.state")},c((z=t==null?void 0:t.state)==null?void 0:z.nombre),9,ye),o("td",{"data-label":e.$t("message.city.name")},c(t.nombre),9,Pe),o("td",{"data-label":e.$t("message.city.status")},c(e.$t(`message.city.statuses.${a(t.estado)}`)),9,we),o("td",De,[i(H,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[O(i(D,{color:"success",icon:l(ne),messageTooltip:l(r)("message.restore"),small:"",onClick:s[6]||(s[6]=A=>_.value=!0)},null,8,["icon","messageTooltip"]),[[j,V.checkDelete&&t.estado===2]]),O(i(D,{color:"info",icon:l(ie),messageTooltip:l(r)("message.edit"),small:"",onClick:A=>q(t._id)},null,8,["icon","messageTooltip","onClick"]),[[j,!V.checkDelete&&t.estado!==2]]),O(i(D,{color:"danger",icon:l(ce),messageTooltip:l(r)("message.delete"),small:"",onClick:s[7]||(s[7]=A=>y.value=!0)},null,8,["icon","messageTooltip"]),[[j,!V.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,ke)}),128))])]),o("div",Ve,[i(re,null,{default:u(()=>[i(H,null,{default:u(()=>[(d(!0),E(L,null,G(l(U),t=>(d(),C(D,{key:t,active:t===l(p)-1,label:t+1,color:t===l(p)?"lightDark":"whiteDark",small:"",onClick:se=>I(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),o("small",null,"Page "+c(l(M))+" of "+c(l(P)),1)]),_:1})])],64))}},Oe={__name:"IndexView",setup(V){const b=f([{name:"Inicio"}]),r=X(),g=f(1),S=f(10),m=ue({switch:[]}),k=a=>{N.index(a).then(n=>{r.cities=n,g.value=n.page,S.value=n.perPage})};k({page:g.value});const T=f(!1),_=()=>{p(g.value),T.value=m.switch.length!==0},y=a=>{p({page:a})},$=(a,n)=>{F({sortBy:a,sortDesc:n})},B=a=>{N.getDelete(a).then(n=>{r.cities=n,g.value=n.page,S.value=n.perPage})},p=a=>{m.switch.length===0?k(a):B(a)},F=a=>{m.switch.length===0?k(a):B(a)};return(a,n)=>(d(),C(me,null,{default:u(()=>[i(de,null,{default:u(()=>{var v,P,M,U,I;return[i(K,{icon:l(ge),title:a.$t("message.city.cities")},{default:u(()=>[i(D,{to:{name:"CitiesCreate"},icon:l(fe),label:a.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),i($e,{items:b.value},null,8,["items"]),i(ve,{label:""},{default:u(()=>[i(be,{modelValue:m.switch,"onUpdate:modelValue":n[0]||(n[0]=q=>m.switch=q),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:_},null,8,["modelValue"])]),_:1}),(v=l(r))!=null&&v.cities?W("",!0):(d(),C(K,{key:0,icon:a.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(P=l(r))!=null&&P.cities?W("",!0):(d(),C(pe,{key:1,color:"danger",icon:a.mdiTableOff},{default:u(()=>[o("b",null,c(a.$t("message.empty_table"))+".",1),w(" When there's nothing to show ")]),_:1},8,["icon"])),(I=(U=(M=l(r))==null?void 0:M.cities)==null?void 0:U.ciudades)!=null&&I.length?(d(),C(J,{key:2,class:"mb-6","has-table":""},{default:u(()=>[i(Se,{checkDelete:T.value,onChangePage:y,onSort:$},null,8,["checkDelete"])]),_:1})):(d(),C(J,{key:3},{default:u(()=>[i(he)]),_:1}))]}),_:1})]),_:1}))}};export{Oe as default};
