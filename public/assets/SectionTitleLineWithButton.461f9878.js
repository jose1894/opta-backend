import{o as t,c as a,N as n,p as l,I as u,Q as m,K as r,g as d,J as g,h,b as i,m as o,t as f,L as y}from"./index.b6490627.js";const S={__name:"IconRounded",props:{icon:{type:String,required:!0},color:{type:String,default:null},w:{type:String,default:"w-12"},h:{type:String,default:"h-12"},bg:Boolean},setup(e){return(s,c)=>(t(),a(r,{path:e.icon,w:e.w,h:e.h,size:"24",class:n(["rounded-full",e.bg?l(u)[e.color]:[l(m)[e.color],"bg-gray-50 dark:bg-slate-800"]])},null,8,["path","w","h","class"]))}},x={class:"flex items-center justify-start"},k={__name:"SectionTitleLineWithButton",props:{icon:{type:String,default:null},title:{type:String,required:!0},main:Boolean},setup(e){const s=d(()=>g().default);return(c,b)=>(t(),h("section",{class:n([{"pt-6":!e.main},"mb-6 flex items-center justify-between"])},[i("div",x,[e.icon&&e.main?(t(),a(S,{key:0,icon:e.icon,color:"light",class:"mr-3",bg:""},null,8,["icon"])):e.icon?(t(),a(r,{key:1,path:e.icon,class:"mr-2",size:"20"},null,8,["path"])):o("",!0),i("h1",{class:n([e.main?"text-3xl":"text-2xl","leading-tight"])},f(e.title),3)]),l(s)?y(c.$slots,"default",{key:0}):o("",!0)],2))}};export{k as _};
