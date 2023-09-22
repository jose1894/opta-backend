import{y as v,I as b,Y as P,o as R,c as W,w as e,_ as j,a as o,Z as T,f as m,g as _,j as t,d as n,u as l,i as h,A as p,$,e as k,B as A,D as O,U as y,b as E,a0 as J,a1 as Y,a2 as Z,a3 as q,a4 as z,a5 as M,a6 as F,a7 as f,a8 as G}from"./index.94f69dfc.js";import{_ as w}from"./SectionTitle.8bfed157.js";import{_ as I}from"./FormCheckRadioGroup.7dc4317c.js";import{C as H}from"./CardBoxComponentEmpty.c052dd4c.js";import"./FormCheckRadio.7aa78bc3.js";const K=t("p",null,"This is sample modal",-1),Q=t("p",null,"Lorem ipsum dolor",-1),X=t("p",null,"This is sample modal",-1),ll=t("p",null,"Lorem ipsum dolor",-1),ol=t("p",null,"This is sample modal",-1),el=t("p",null,"Lorem ipsum dolor",-1),nl={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},tl={class:"space-y-12"},al=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),il=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),ul=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),sl=t("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1),dl={class:"flex items-center justify-center mt-6"},cl=t("b",null,"Info state",-1),rl=t("b",null,"Success state",-1),fl=t("b",null,"Warning state",-1),ml=t("b",null,"Danger state",-1),_l=t("b",null,"Contrast",-1),bl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},pl=t("div",{class:"space-y-3"},[t("p",null,"Card with title, icon & footer")],-1),Vl={__name:"UiView",setup(gl){const S=v(!1),D=v(!1),U=v(!1),N=v([]),r=b(()=>N.value.indexOf("outline")>-1),g=v([]),i=b(()=>g.value.indexOf("outline")>-1),u=b(()=>g.value.indexOf("small")>-1),s=b(()=>g.value.indexOf("disabled")>-1),d=b(()=>g.value.indexOf("rounded")>-1),x=v(["icon"]),C=b(()=>x.value.indexOf("outline")>-1),B=b(()=>x.value.indexOf("small")>-1),V=b(()=>x.value.indexOf("icon")>-1?J:null),L=P();return(vl,a)=>(R(),W(j,null,{default:e(()=>[o(T,{modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=c=>S.value=c),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[K,Q]),_:1},8,["modelValue"]),o(T,{modelValue:D.value,"onUpdate:modelValue":a[1]||(a[1]=c=>D.value=c),title:"Unhandled exception",button:"danger"},{default:e(()=>[X,ll]),_:1},8,["modelValue"]),o(T,{modelValue:U.value,"onUpdate:modelValue":a[2]||(a[2]=c=>U.value=c),title:"Success",button:"success"},{default:e(()=>[ol,el]),_:1},8,["modelValue"]),o(w,{first:""},{default:e(()=>[m("Dark mode")]),_:1}),o(h,null,{default:e(()=>[o(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[t("div",nl,[o(n,{label:"Toggle",color:"contrast",onClick:a[3]||(a[3]=c=>l(L).setDarkMode())})])]),_:1})]),_:1}),o(w,null,{default:e(()=>[m("Modal examples")]),_:1}),o(h,null,{default:e(()=>[t("div",tl,[o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[4]||(a[4]=c=>S.value=!0)},{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o($,{title:"Please confirm action"},{default:e(()=>[o(n,{icon:l(Y),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),al]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[5]||(a[5]=c=>D.value=!0)},{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[o($,{title:"Unhandled exception"}),il]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[6]||(a[6]=c=>U.value=!0)},{footer:e(()=>[o(n,{label:"Done",color:"success"})]),default:e(()=>[o($,{title:"Success"}),ul]),_:1})])]),_:1}),o(w,{custom:""},{default:e(()=>[sl,t("div",dl,[o(I,{modelValue:N.value,"onUpdate:modelValue":a[7]||(a[7]=c=>N.value=c),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(h,null,{default:e(()=>[o(k,{color:"info",icon:l(Z),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"info":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[cl,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"success",icon:l(q),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"success":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[rl,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"warning",icon:l(z),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"warning":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[fl,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"danger",icon:l(M),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"danger":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[ml,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"contrast",icon:l(F),outline:l(r)},{default:e(()=>[_l,m(". NotificationBar ")]),_:1},8,["icon","outline"])]),_:1}),o(w,null,{default:e(()=>[m("Buttons")]),_:1}),o(h,null,{default:e(()=>[o(_,null,{default:e(()=>[o(A,{label:"Settings"},{default:e(()=>[o(I,{modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=c=>g.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[m("Pills")]),_:1}),o(h,null,{default:e(()=>[o(_,null,{default:e(()=>[o(A,{label:"Settings"},{default:e(()=>[o(I,{modelValue:x.value,"onUpdate:modelValue":a[9]||(a[9]=c=>x.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(y,{color:"contrast",label:"Contrast",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o(y,{color:"info",label:"Info",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o(y,{color:"success",label:"Success",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o(y,{color:"warning",label:"Warning",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o(y,{color:"danger",label:"Danger",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[m("Cards")]),_:1}),o(h,null,{default:e(()=>[t("div",bl,[o(_,null,{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o($,{title:"With title & icon"},{default:e(()=>[o(n,{icon:l(G),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),pl]),_:1}),o(_,null,{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[m(" Just body & footer ")]),_:1})]),o(E,{icon:l(M),title:"Empty variation"},null,8,["icon"]),o(_,null,{default:e(()=>[o(H)]),_:1})]),_:1})]),_:1}))}};export{Vl as default};