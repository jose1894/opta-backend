import{o as a,h as o,c as s,N as n,K as c,m as r,b as i,t as u,g as m,H as d,I as g,p}from"./index.7c3ce38a.js";const f={__name:"PillTagPlain",props:{label:{type:String,required:!0},icon:{type:String,default:null},small:Boolean},setup(l){return(e,t)=>(a(),o("div",{class:n(["inline-flex items-center capitalize leading-none",[l.small?"text-xs":"text-sm"]])},[l.icon?(a(),s(c,{key:0,path:l.icon,h:"h-4",w:"w-4",class:n(l.small?"mr-1":"mr-2"),size:l.small?14:null},null,8,["path","class","size"])):r("",!0),i("span",null,u(l.label),1)],2))}},h={__name:"PillTag",props:{label:{type:String,required:!0},color:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(l){const e=l,t=m(()=>[e.small?"py-1 px-3":"py-1.5 px-4",e.outline?d[e.color]:g[e.color]]);return(x,y)=>(a(),s(f,{class:n(["border rounded-full",p(t)]),icon:l.icon,label:l.label,small:l.small},null,8,["class","icon","label","small"]))}};export{h as _};
