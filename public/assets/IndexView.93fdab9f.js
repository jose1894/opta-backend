import{r as g,u as ie,ak as ce,ae as de,f as ae,g as $,o as u,h as Y,b as l,t as p,F as G,k as X,i as r,a as i,d as ue,p as c,aO as me,S as pe,x as Z,c as f,y as ge,aL as oe,U as ve,av as fe,A as be,j as he,m as F,_ as H,z as _e,B as $e,ap as ke,ay as J}from"./index.7c3ce38a.js";import{a as W,b as ye,_ as R}from"./BaseButton.ad880968.js";import{_ as Pe}from"./NotificationBar.4aa04247.js";import{C as Ce}from"./CardBoxComponentEmpty.2cb630e2.js";import{_ as x}from"./SectionTitleLineWithButton.54b480d5.js";import{B as je}from"./Breadcrumb.ea08dc32.js";import{_ as D}from"./FormField.071fd018.js";import{p as ee}from"./projects.service.cb382faf.js";import{A as te}from"./Autocomplete.a5fc26b3.js";import{c as we}from"./clients.srvice.fb7489ac.js";import{p as Ve}from"./personal.service.4fe1aae8.js";const Fe=l("th",null,null,-1),De=["onClick"],Se=["data-label"],Le=["data-label"],Be=["data-label"],Ie=["data-label"],Me=["data-label"],Ye={class:"before:hidden lg:w-1 whitespace-nowrap"},Oe={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Te={__name:"ProjectTableView",emits:["changePage","confirm","sort"],setup(se,{emit:h}){g([]);const{t:k}=ie();ce();const B=de(),V=ae(),O=$(()=>V.projects.proyectos),y=$(()=>V.projects.total),P=$(()=>V.projects.perPage),b=$(()=>V.projects.page),C=g([]),T=$(()=>O.value),E=(a="")=>({0:"inactive",1:"active",2:"deleted"})[a],s=g(!1),j=a=>{s.value=!s.value,h("sort",a,s.value)},_=$(()=>Math.ceil(y.value/P.value)),U=$(()=>+b.value),A=$(()=>{const a=[];for(let n=0;n<_.value;n++)a.push(n);return a}),I=a=>{h("changePage",a)},N=a=>C.value=a,q=(a,n)=>oe(a).format(n),z=a=>{const{codigo:n,sucursal:o,_id:S}=a,{nombre:L}=o;localStorage.setItem("selectedProject",JSON.stringify(a)),B.push({name:"AuditApproach",params:{codigo:n,nombre:L,_id:S}})};return(a,n)=>(u(),Y(G,null,[l("table",null,[l("thead",null,[l("tr",null,[l("th",{onClick:n[0]||(n[0]=o=>j("codigo"))},p(a.$t("message.project.code")),1),l("th",{onClick:n[1]||(n[1]=o=>j("cliente"))},p(a.$t("message.project.client")),1),l("th",{onClick:n[2]||(n[2]=o=>j("socio"))},p(a.$t("message.project.partner")),1),l("th",null,p(a.$t("message.project.date")),1),l("th",{onClick:n[3]||(n[3]=o=>j("estado"))},p(a.$t("message.project.status")),1),Fe])]),l("tbody",null,[(u(!0),Y(G,null,X(c(T),(o,S)=>(u(),Y("tr",{key:o._id,onClick:L=>N(o)},[l("td",{"data-label":a.$t("message.project.code")},p(o.codigo),9,Se),l("td",{"data-label":a.$t("message.project.client")},p(o.cliente.nombre),9,Le),l("td",{"data-label":a.$t("message.project.partner")},p(o.socio.nombres),9,Be),l("td",{"data-label":a.$t("message.project.date")},p(q(o.fecha,"DD/MM/YYYY")),9,Ie),l("td",{"data-label":a.$t("message.project.status")},p(a.$t(`message.project.statuses.${E(o.estado)}`)),9,Me),l("td",Ye,[r(Z,null,{default:i(()=>[ue(r(W,{color:"info",icon:c(me),messageTooltip:c(k)("message.redirect"),small:"",onClick:L=>z(o)},null,8,["icon","messageTooltip","onClick"]),[[pe,o.estado!==2]])]),_:2},1024)])],8,De))),128))])]),l("div",Oe,[r(ge,null,{default:i(()=>[r(Z,null,{default:i(()=>[(u(!0),Y(G,null,X(c(A),o=>(u(),f(W,{key:o,active:o===c(b)-1,label:o+1,color:o===c(b)?"lightDark":"whiteDark",small:"",onClick:S=>I(o+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),l("small",null,"Page "+p(c(U))+" of "+p(c(_)),1)]),_:1})])],64))}};const Ee={class:"grid md:grid-cols-2 gap-4"},Ue={__name:"IndexView",props:{path:"",saveLabel:"",project:{}},setup(se){const h=ae(),k=g(1),B=g(10);let V=g([]),O=g([]);const y=g(!0),P=g(!1),b=g(!0),C=g(!1),T=g([{name:"Inicio"}]),E=e=>{const t=e.getDate(),v=e.getMonth()+1,m=e.getFullYear();return`${t}/${v}/${m}`},s=g({cliente:"",idCliente:"",codigo:"",fecha:null,persona:"",idPersona:""}),j=ve({switch:[]}),_=e=>{ee.index(e).then(t=>{h.projects=t,k.value=t.page,B.value=t.perPage})};_({page:k.value});const U=e=>{N({page:e})},A=(e,t)=>{q({sortBy:e,sortDesc:t})},I=e=>{ee.getDelete(e).then(t=>{h.projects=t,k.value=t.page,B.value=t.perPage})},N=e=>{j.switch.length===0?_(e):I(e)},q=(e,t)=>{j.switch.length===0?_({sortBy:e,sortDesc:t}):I({sortBy:e,sortDesc:t})},z=async e=>{var d;const t=e===""?"default":e;return((d=(await we.searchCliente(t)).data)==null?void 0:d.clientes)||[]},a=e=>{O.value.filter(m=>Object.keys(m).some(d=>d===e._id)).length===0?n(e):toast.error("El registro ya fue seleccionado")},n=(e,t)=>{s.value.cliente=e.nombreCompleto,s.value.idCliente=e.id,y.value=!y.value,P.value=!P.value},o=(e,t)=>{s.value.persona=e.nombreCompleto,s.value.idPersona=e.id,b.value=!b.value,C.value=!C.value},S=async e=>{var d;const t=e===""?"default":e;return((d=(await Ve.searchPersona(t)).data)==null?void 0:d.personas)||[]},L=e=>{V.value.filter(m=>Object.keys(m).some(d=>d===e._id)).length===0?o(e):toast.error("El registro ya fue seleccionado")},le=()=>{P.value=!P.value,y.value=!y.value,s.value.cliente="",s.value.idCliente=""},ne=()=>{b.value=!b.value,C.value=!C.value,s.value.persona="",s.value.idPersona=""},re=()=>{const{idCliente:e,fecha:t,codigo:v,idPersona:m}=s.value,d=t===null?"":oe(t).format("YYYY-MM-DD");if(e===""&&t===null&&v===""&&m==="")_({page:k.value});else{const M=[{codigo:v,fecha:d,cliente:e,socio:m}];_({page:k.value,q:M})}};return(e,t)=>{const v=fe("VueDatePicker");return u(),f(be,null,{default:i(()=>[r($e,null,{default:i(()=>{var m,d,M,K,Q;return[r(x,{icon:c(ke),title:e.$t("message.project.papers")},null,8,["icon","title"]),r(je,{items:T.value},null,8,["items"]),r(R,{isForm:"",onSubmit:he(e.submit,["prevent"]),style:{background:"rgb(134 134 145 / 16%)"}},{footer:i(()=>[r(W,{label:e.$t("message.search"),color:"success",onClick:re},null,8,["label"])]),default:i(()=>[l("div",Ee,[y.value?(u(),f(D,{key:0,label:e.$t("message.project.client"),style:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},{default:i(()=>[r(te,{placeholder:"Buscar...","search-function":z,"render-function":a,"debounce-time":500},null,8,["placeholder"])]),_:1},8,["label"])):F("",!0),P.value?(u(),f(D,{key:1,label:e.$t("message.project.client"),style:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},{default:i(()=>[r(H,{name:"name",modelValue:s.value.cliente,"onUpdate:modelValue":t[0]||(t[0]=w=>s.value.cliente=w),icon:c(J),onClick:le},null,8,["modelValue","icon"])]),_:1},8,["label"])):F("",!0),r(D,{label:e.$t("message.project.code"),style:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},{default:i(()=>[r(H,{name:"codigo",modelValue:s.value.codigo,"onUpdate:modelValue":t[1]||(t[1]=w=>s.value.codigo=w),icon:c(J)},null,8,["modelValue","icon"])]),_:1},8,["label"]),r(D,{label:e.$t("message.project.date"),style:{"padding-top":"0.5rem","padding-bottom":"0.5rem",height:"3rem",background:"rgb(12, 4, 56)(38, 0, 255)"},class:"border-width: 1px;"},{default:i(()=>[r(v,{modelValue:s.value.fecha,"onUpdate:modelValue":t[2]||(t[2]=w=>s.value.fecha=w),"enable-time-picker":!1,format:E,style:{height:"3rem"}},null,8,["modelValue"])]),_:1},8,["label"]),b.value?(u(),f(D,{key:2,label:e.$t("message.project.partner"),style:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},{default:i(()=>[r(te,{placeholder:"Buscar...","search-function":S,"render-function":L,"debounce-time":500},null,8,["placeholder"])]),_:1},8,["label"])):F("",!0),C.value?(u(),f(D,{key:3,label:e.$t("message.project.partner"),style:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},{default:i(()=>[r(H,{name:"name",modelValue:s.value.persona,"onUpdate:modelValue":t[3]||(t[3]=w=>s.value.persona=w),icon:c(J),onClick:ne},null,8,["modelValue","icon"])]),_:1},8,["label"])):F("",!0)])]),_:1},8,["onSubmit"]),(m=c(h))!=null&&m.projects?F("",!0):(u(),f(x,{key:0,icon:e.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(d=c(h))!=null&&d.projects?F("",!0):(u(),f(Pe,{key:1,color:"danger",icon:e.mdiTableOff},{default:i(()=>[l("b",null,p(e.$t("message.empty_table"))+".",1),_e(" When there's nothing to show ")]),_:1},8,["icon"])),(Q=(K=(M=c(h))==null?void 0:M.projects)==null?void 0:K.proyectos)!=null&&Q.length?(u(),f(R,{key:2,class:"mb-6","has-table":""},{default:i(()=>[r(Te,{onChangePage:U,onSort:A})]),_:1})):(u(),f(R,{key:3},{default:i(()=>[r(Ce)]),_:1}))]}),_:1})]),_:1})}}},Xe=ye(Ue,[["__scopeId","data-v-889c6623"]]);export{Xe as default};
