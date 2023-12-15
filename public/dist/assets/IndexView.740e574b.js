import{u as oe,ak as ae,ae as ne,f as Q,g as p,r as g,o as d,h as I,i as l,a as c,b as a,z as V,t as r,F as A,k as O,d as L,p as n,al as le,S as j,am as ie,s as re,x as R,c as C,y as ce,U as ue,A as me,m as z,B as de,ap as ge,aq as fe,G as H}from"./index.94d0d825.js";import{a as S,_ as W}from"./BaseButton.607b4ca4.js";import{_ as J}from"./SectionTitleLineWithButton.21bf938c.js";import{_ as pe}from"./NotificationBar.da331500.js";import{C as he}from"./CardBoxComponentEmpty.181cbc93.js";import{C as K}from"./CardBoxModal.826e1893.js";import{p as E}from"./Professions.service.6f444044.js";import{_ as ve}from"./FormField.d7b1190e.js";import{_ as $e}from"./FormCheckRadioGroup.d0dc92b9.js";import"./FormCheckRadio.6b119c24.js";const _e=["onClick"],be=["data-label"],ke=["data-label"],Ce=["data-label"],Pe={class:"before:hidden lg:w-1 whitespace-nowrap"},we={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ye={__name:"ProfessionsTable",props:{checkable:Boolean,checkDelete:Boolean},emits:["changePage","confirm","sort"],setup(T,{emit:m}){const{t:u}=oe(),h=ae(),v=ne(),$=Q(),N=p(()=>{var e;return(e=$.professions)==null?void 0:e.profesiones}),P=p(()=>$.professions.total),w=g(!1),y=g(!1),B=p(()=>$.professions.perPage),f=p(()=>$.professions.page);g([]);const _=g([]),o=p(()=>N.value),i=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],b=g(!1),k=e=>{b.value=!b.value,m("sort",e,b.value)},D=p(()=>Math.ceil(P.value/B.value)),M=p(()=>+f.value),U=p(()=>{const e=[];for(let s=0;s<D.value;s++)e.push(s);return e}),F=e=>{m("changePage",e)},X=e=>{v.push({name:"ProfessionsUpdate",params:{id:e}})},Y=e=>_.value=e,G=()=>{const{nombre:e}=_.value;return e},Z=u("message.profession.deleted.success"),x=async()=>{ee().then(()=>{h.success(Z),m("changePage",f.value)}).catch(e=>{var s;h.error(`${u("message.profession.deleted.error")} ${(s=e==null?void 0:e.response)==null?void 0:s.data.msg}`)})},ee=()=>{const{_id:e}=_.value;return E.delete(e)},se=()=>{const{_id:e}=_.value;E.restore(e).then(()=>{h.success(u("message.profession.restore.success")),m("changePage",f.value)}).catch(s=>{var t;h.error(`${u("message.profession.restore.error")} ${(t=s==null?void 0:s.response)==null?void 0:t.data.msg}`)})};return(e,s)=>(d(),I(A,null,[l(K,{modelValue:y.value,"onUpdate:modelValue":s[0]||(s[0]=t=>y.value=t),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:x,"has-cancel":""},{default:c(()=>[a("strong",null,[V(r(e.$t("message.profession.deleted.question"))+" ",1),a("b",null,r(G()),1)]),V(" ? ")]),_:1},8,["modelValue","title"]),l(K,{modelValue:w.value,"onUpdate:modelValue":s[1]||(s[1]=t=>w.value=t),title:e.$t("message.pleaseConfirm"),onConfirm:se},{default:c(()=>[a("strong",null,[V(r(e.$t("message.profession.restore.question"))+" ",1),a("b",null,r(G()),1)]),V(" ? ")]),_:1},8,["modelValue","title"]),a("table",null,[a("thead",null,[a("tr",null,[a("th",{onClick:s[2]||(s[2]=t=>k("codigo"))},r(e.$t("message.profession.code")),1),a("th",{onClick:s[3]||(s[3]=t=>k("nombre"))},r(e.$t("message.profession.name")),1),a("th",{onClick:s[4]||(s[4]=t=>k("estado"))},r(e.$t("message.profession.status")),1)])]),a("tbody",null,[(d(!0),I(A,null,O(n(o),(t,te)=>(d(),I("tr",{key:t._id,onClick:q=>Y(t)},[a("td",{"data-label":e.$t("message.profession.code")},r(t.codigo),9,be),a("td",{"data-label":e.$t("message.profession.name")},r(t.nombre),9,ke),a("td",{"data-label":e.$t("message.profession.status")},r(e.$t(`message.profession.statuses.${i(t.estado)}`)),9,Ce),a("td",Pe,[l(R,{type:"justify-start lg:justify-end","no-wrap":""},{default:c(()=>[L(l(S,{color:"success",icon:n(le),messageTooltip:"t('message.restore')",small:"",onClick:s[5]||(s[5]=q=>w.value=!0)},null,8,["icon"]),[[j,T.checkDelete&&t.estado===2]]),L(l(S,{color:"info",icon:n(ie),messageTooltip:n(u)("message.edit"),small:"",onClick:q=>X(t._id)},null,8,["icon","messageTooltip","onClick"]),[[j,!T.checkDelete&&t.estado!==2]]),L(l(S,{color:"danger",icon:n(re),messageTooltip:n(u)("message.delete"),small:"",onClick:s[6]||(s[6]=q=>y.value=!0)},null,8,["icon","messageTooltip"]),[[j,!T.checkDelete&&t.estado!==2]])]),_:2},1024)])],8,_e))),128))])]),a("div",we,[l(ce,null,{default:c(()=>[l(R,null,{default:c(()=>[(d(!0),I(A,null,O(n(U),t=>(d(),C(S,{key:t,active:t===n(f)-1,label:t+1,color:t===n(f)?"lightDark":"whiteDark",small:"",onClick:te=>F(t+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),a("small",null,"Page "+r(n(M))+" of "+r(n(D)),1)]),_:1})])],64))}},Fe={__name:"IndexView",setup(T){g([{name:"Inicio"}]);const m=Q(),u=g(1),h=g(10),v=ue({switch:[]}),$=g(!1),N=()=>{f(u.value),$.value=v.switch.length!==0},P=o=>{E.index(o).then(i=>{m.professions=i,u.value=i.page,h.value=i.perPage})};P({page:u.value});const w=o=>{f({page:o})},y=(o,i)=>{_({sortBy:o,sortDesc:i})},B=o=>{E.getDelete(o).then(i=>{m.professions=i,u.value=i.page,h.value=i.perPage})},f=o=>{v.switch.length===0?P(o):B(o)},_=o=>{v.switch.length===0?P(o):B(o)};return(o,i)=>(d(),C(me,null,{default:c(()=>[l(de,null,{default:c(()=>{var b,k,D,M,U;return[l(J,{icon:n(ge),title:o.$t("message.profession.professions")},{default:c(()=>[l(S,{to:"create",icon:n(fe),label:o.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),l(ve,{label:""},{default:c(()=>[l($e,{modelValue:v.switch,"onUpdate:modelValue":i[0]||(i[0]=F=>v.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:N},null,8,["modelValue"])]),_:1}),(b=n(m))!=null&&b.professions?z("",!0):(d(),C(J,{key:0,icon:n(H),title:"Empty variation"},null,8,["icon"])),(k=n(m))!=null&&k.professions?z("",!0):(d(),C(pe,{key:1,color:"danger",icon:n(H)},{default:c(()=>[a("b",null,r(o.$t("message.empty_table"))+".",1),V(" When there's nothing to show ")]),_:1},8,["icon"])),(U=(M=(D=n(m))==null?void 0:D.professions)==null?void 0:M.profesiones)!=null&&U.length?(d(),C(W,{key:2,class:"mb-6","has-table":""},{default:c(()=>[l(ye,{checkDelete:$.value,onChangePage:w,onSort:y},null,8,["checkDelete"])]),_:1})):(d(),C(W,{key:3},{default:c(()=>[l(he)]),_:1}))]}),_:1})]),_:1}))}};export{Fe as default};
