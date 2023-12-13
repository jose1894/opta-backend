import{as as A,at as Z,r as f,U as pe,g as y,u as me,ak as Te,ae as Ue,f as ge,o as _,h as q,i as l,a as u,b as c,z as se,t as h,F as J,k as ee,p as r,c as T,x as ae,s as le,aq as ve,am as Be,d as De,S as Fe,aN as Ee,y as Le,an as Me,ao as Ne,A as Oe,_ as Ae,m as re,B as Ze,ap as qe,ar as Re}from"./index.49b91a9a.js";import{b as ze,a as k,_ as ce}from"./BaseButton.84fe76a1.js";import{_ as He}from"./NotificationBar.cb70b13a.js";import{C as Ge}from"./CardBoxComponentEmpty.b2c8f415.js";import{_ as de}from"./SectionTitleLineWithButton.b2b96e7a.js";import{_ as fe}from"./FormCheckRadioGroup.e7f28255.js";import{_ as z}from"./FormField.03a460a3.js";import{p as te}from"./projects.service.3ed23786.js";import{p as We}from"./personal.service.ac090d77.js";import{C as ie}from"./CardBoxModal.89707104.js";import{A as xe}from"./Autocomplete.4f58e26a.js";import{u as ue}from"./upload.service.64bf2c54.js";import{B as Je}from"./Breadcrumb.4f619e14.js";import{_ as Ke}from"./inputSearch.74f5c3cc.js";import"./FormCheckRadio.2d01fa5e.js";const R="api/personasProyectos/",K={create(p){return new Promise((m,d)=>{A.post(R,p,{headers:Z()}).then(t=>m(t)).catch(t=>d(t))})},read(p){return new Promise((m,d)=>{A.get(`${R}/${p._id}`,{headers:Z()}).then(t=>{m(t)}).catch(t=>d(t))})},update(p){return new Promise((m,d)=>{A.put(`${R}/${p._id}`,p,{headers:Z()}).then(t=>m(t.data)).catch(t=>d(t))})},delete(p){return new Promise((m,d)=>{A.delete(`${R}${p.id}/${p.personaId}`,{headers:Z()}).then(t=>m(t.data)).catch(t=>d(t))})},restore(p){return new Promise((m,d)=>{A.delete(`${R}/restore/${p}`,{headers:Z()}).then(t=>m(t.data)).catch(t=>d(t))})}};const he=p=>(Me("data-v-02f32308"),p=p(),Ne(),p),Qe={class:"grid md:grid-cols-1 gap-1"},Xe=he(()=>c("div",{class:"grid md:grid-cols-1 gap-1"},[c("h2",null," Encargado ")],-1)),Ye={class:"grid md:grid-cols-1 gap-1"},ea=he(()=>c("th",null,null,-1)),aa=["onClick"],sa=["data-label"],ta=["data-label"],oa=["data-label"],na=["data-label"],la={class:"before:hidden lg:w-1 whitespace-nowrap"},ra={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},ca={__name:"ProjectTable.view",props:{checkable:Boolean},emits:["changePage","confirm","sort"],setup(p,{emit:m}){let d=f([]);const t=pe({radio:[]}),j=y(()=>d.value),b=f([]);f([]);const{t:g}=me(),P=Te(),S=Ue(),w=ge(),L=y(()=>w.projects.proyectos),U=y(()=>w.projects.total);f(!1);const M=f(!1),B=f(!1),Q=y(()=>w.projects.perPage),V=y(()=>w.projects.page),$=f([]),H=y(()=>L.value),X=(e="")=>({0:"inactive",1:"active",2:"deleted"})[e],N=f(!1),D=e=>{N.value=!N.value,m("sort",e,N.value)},o=y(()=>Math.ceil(U.value/Q.value)),n=y(()=>+V.value),C=y(()=>{const e=[];for(let a=0;a<o.value;a++)e.push(a);return e}),O=e=>{m("changePage",e)},G=e=>{S.push({name:"ProjectsUpdate",params:{id:e}})},W=async e=>{oe(),(await K.read(e)).data.personas.map(s=>{Y(s,"Update")})},x=e=>$.value=e,F=(e=!1)=>{const{codigo:a}=$.value;return e?`${g("message.project.project")} ${a}`:a},_e=g("message.projectPerson.deleted.success"),be=g("message.projectPerson.created.success"),$e=async()=>{ye().then(()=>{P.success(_e),m("changePage",V.value)}).catch(e=>{var a;P.error(`${g("message.projectPerson.deleted.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},Pe=async()=>{console.log("pasoooo"),we().then(()=>{P.success(be),m("changePage",V.value)}).catch(e=>{var a;P.error(`${g("message.projectPerson.created.error")} ${(a=e==null?void 0:e.response)==null?void 0:a.data.msg}`)})},oe=()=>{d.value=[],b.value=[]},ye=()=>{const{_id:e}=$.value;return te.delete(e)},we=()=>(console.log(b.value),K.create(b.value)),Ce=async e=>{var i;const a=e===""?"default":e;return((i=(await We.searchPersona(a)).data)==null?void 0:i.personas)||[]},ke=e=>{console.log(d.value),d.value.filter(v=>Object.keys(v).some(i=>i===e._id)).length===0?Y(e,"New"):P.error("El registro ya fue seleccionado")},Y=(e,a)=>{var I,ne;const v=[a==="New"?e:e==null?void 0:e.personaId],i=je(v)[0];d.value.push(i);const E={_id:a==="New"?"":e==null?void 0:e._id,projectId:$.value._id,personaId:a==="New"?e._id:(I=e==null?void 0:e.personaId)==null?void 0:I._id,encargado:a==="New"?!1:e==null?void 0:e.encargado,persisteState:a};b.value.push(E),a==="Update"&&(e==null?void 0:e.encargado)&&(t.radio=(ne=e==null?void 0:e.personaId)==null?void 0:ne._id)},je=e=>e.map(({_id:a,nombres:s,apellidos:v})=>({[a]:`${s} ${v}`})),Se=e=>{const a=t.radio;b.value=b.value.map(s=>(s.encargado=a===s.personaId,s)),console.log(b.value)},Ve=async e=>{const{_id:a}=$.value,s={personaId:Object.keys(e)[0],id:a};await K.delete(s),b.value=[],d.value=[],(await K.read($.value)).data.personas.map(i=>{Y(i,"Update")})},Ie=async e=>{const a=await ue.veryfayFile(e.codigo);if(a!=null&&a.succes){const s=await ue.downloadFileZip(e.codigo),v=window.URL.createObjectURL(new Blob([s.data])),i=document.createElement("a");i.href=v;const E=`${e.codigo}.zip`;i.setAttribute("download",E),document.body.appendChild(i),i.click()}else P.error(`La carpete del proyecto ${e.codigo} no existe`)};return(e,a)=>(_(),q(J,null,[l(ie,{modelValue:B.value,"onUpdate:modelValue":a[0]||(a[0]=s=>B.value=s),title:e.$t("message.pleaseConfirm"),button:"danger",onConfirm:$e,"has-cancel":""},{default:u(()=>[c("strong",null,[se(h(e.$t("message.project.deleted.question"))+" ",1),c("b",null,h(F()),1)]),se(" ? ")]),_:1},8,["modelValue","title"]),l(ie,{modelValue:M.value,"onUpdate:modelValue":a[2]||(a[2]=s=>M.value=s),title:F(!0),button:"danger",onConfirm:Pe,onCancel:oe,"has-cancel":""},{footer:u(()=>[l(k,{label:e.$t("message.submit"),color:"success"},null,8,["label"])]),default:u(()=>[c("div",Qe,[l(z,{label:e.$t("message.project.person")},{default:u(()=>[l(xe,{placeholder:"Buscar...","search-function":Ce,"render-function":ke,"debounce-time":500},null,8,["placeholder"])]),_:1},8,["label"])]),Xe,c("div",Ye,[(_(!0),q(J,null,ee(r(j),(s,v)=>(_(),T(z,{label:""},{default:u(()=>[l(fe,{modelValue:t.radio,"onUpdate:modelValue":a[1]||(a[1]=i=>t.radio=i),name:"sample-radio",type:"radio",isColumn:"true",options:r(j)[v],onChange:i=>Se(r(j)[v])},null,8,["modelValue","options","onChange"]),l(ae,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[l(k,{color:"danger",icon:r(le),small:"",style:{width:"28px",height:"28px"},onClick:i=>Ve(r(j)[v])},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024))),256))])]),_:1},8,["modelValue","title"]),c("table",null,[c("thead",null,[c("tr",null,[c("th",{onClick:a[3]||(a[3]=s=>D("codigo"))},h(e.$t("message.project.code")),1),c("th",{onClick:a[4]||(a[4]=s=>D("cliente"))},h(e.$t("message.project.client")),1),c("th",{onClick:a[5]||(a[5]=s=>D("socio"))},h(e.$t("message.project.partner")),1),c("th",{onClick:a[6]||(a[6]=s=>D("estado"))},h(e.$t("message.project.status")),1),ea])]),c("tbody",null,[(_(!0),q(J,null,ee(r(H),(s,v)=>{var i,E;return _(),q("tr",{key:s._id,onClick:I=>x(s)},[c("td",{"data-label":e.$t("message.project.code")},h(s==null?void 0:s.codigo),9,sa),c("td",{"data-label":e.$t("message.project.client")},h((i=s.cliente)==null?void 0:i.nombre),9,ta),c("td",{"data-label":e.$t("message.project.partner")},h((E=s.socio)==null?void 0:E.nombres),9,oa),c("td",{"data-label":e.$t("message.project.status")},h(e.$t(`message.project.statuses.${X(s==null?void 0:s.estado)}`)),9,na),c("td",la,[l(ae,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[l(k,{color:"success",icon:r(ve),messageTooltip:r(g)("message.assignPerson"),small:"",onClick:I=>(W(s),M.value=!0)},null,8,["icon","messageTooltip","onClick"]),l(k,{color:"info",icon:r(Be),messageTooltip:r(g)("message.edit"),small:"",onClick:I=>G(s._id)},null,8,["icon","messageTooltip","onClick"]),De(l(k,{color:"danger",icon:r(le),messageTooltip:r(g)("message.delete"),small:"",onClick:a[7]||(a[7]=I=>B.value=!0)},null,8,["icon","messageTooltip"]),[[Fe,s.estado!==2]]),l(k,{class:"btn-comprimir",icon:r(Ee),messageTooltip:r(g)("message.downloadZipFile"),small:"",onClick:I=>Ie(s)},null,8,["icon","messageTooltip","onClick"])]),_:2},1024)])],8,aa)}),128))])]),c("div",ra,[l(Le,null,{default:u(()=>[l(ae,null,{default:u(()=>[(_(!0),q(J,null,ee(r(C),s=>(_(),T(k,{key:s,active:s===r(V)-1,label:s+1,color:s===r(V)?"lightDark":"whiteDark",small:"",onClick:v=>O(s+1)},null,8,["active","label","color","onClick"]))),128))]),_:1}),c("small",null,"Page "+h(r(n))+" of "+h(r(o)),1)]),_:1})])],64))}},da=ze(ca,[["__scopeId","data-v-02f32308"]]),ia={class:"grid md:grid-cols-2 gap-4"},ja={__name:"IndexView",setup(p){const m=f([{name:"Inicio"}]),d=ge(),t=f(1),{t:j}=me(),b=f(10),g=pe({switch:[]}),P=[{id:1,label:j("message.country.statuses.active")},{id:0,label:j("message.country.statuses.inactive")}],S=f({filters:["codigo","cliente.nombre","socio.nombres"],search:""}),w=f(-1),L=f(P[0]),U=o=>{te.index(o).then(n=>{d.projects=n,t.value=n.page,b.value=n.perPage})};U({page:t.value});const M=()=>{H(t.value)},B=(o=[])=>{let n={page:t.value,q2:o};w.value!==-1&&(n={...n,estado:w.value}),g.switch.length===0?U(n):$(n)},Q=o=>{H({page:o})},V=(o,n)=>{X({sortBy:o,sortDesc:n})},$=o=>{te.getDelete(o).then(n=>{d.projects=n,t.value=n.page,b.value=n.perPage})},H=o=>{g.switch.length===0?U(o):$(o)},X=o=>{g.switch.length===0?U(o):$(o)},N=async o=>{const n=o===""?"default":o;let C=[];n!=="default"&&(S.value.search=n,C=S.value),B(C)},D=()=>{const{id:o}=L.value;w.value=o;let n=[];S.value.search!==""&&S.value.search!=="default"&&(n=S.value),B(n)};return(o,n)=>(_(),T(Oe,null,{default:u(()=>[l(Ze,null,{default:u(()=>{var C,O,G,W,x;return[l(de,{icon:r(qe),title:o.$t("message.project.projects")},{default:u(()=>[l(k,{to:"projects/create",icon:r(ve),label:o.$t("message.add_new"),color:"success",small:""},null,8,["icon","label"])]),_:1},8,["icon","title"]),l(Je,{items:m.value},null,8,["items"]),c("div",ia,[l(z,{label:"Buscar"},{default:u(()=>[l(Ke,{placeholder:"Buscar...","search-function":N,"debounce-time":500},null,8,["placeholder"])]),_:1}),l(z,{label:o.$t("message.country.status")},{default:u(()=>[l(Ae,{modelValue:L.value,"onUpdate:modelValue":n[0]||(n[0]=F=>L.value=F),icon:r(Re),options:P,onOnSelectChange:D},null,8,["modelValue","icon"])]),_:1},8,["label"])]),l(z,{label:""},{default:u(()=>[l(fe,{modelValue:g.switch,"onUpdate:modelValue":n[1]||(n[1]=F=>g.switch=F),name:"sample-switch",type:"switch",options:{one:"Mostrar registros eliminados"},onChange:M},null,8,["modelValue"])]),_:1}),(C=r(d))!=null&&C.projects?re("",!0):(_(),T(de,{key:0,icon:o.mdiTableOff,title:"Empty variation"},null,8,["icon"])),(O=r(d))!=null&&O.projects?re("",!0):(_(),T(He,{key:1,color:"danger",icon:o.mdiTableOff},{default:u(()=>[c("b",null,h(o.$t("message.empty_table"))+".",1),se(" When there's nothing to show ")]),_:1},8,["icon"])),(x=(W=(G=r(d))==null?void 0:G.projects)==null?void 0:W.proyectos)!=null&&x.length?(_(),T(ce,{key:2,class:"mb-6","has-table":""},{default:u(()=>[l(da,{onChangePage:Q,onSort:V})]),_:1})):(_(),T(ce,{key:3},{default:u(()=>[l(Ge)]),_:1}))]}),_:1})]),_:1}))}};export{ja as default};
