import{r as c,w as s,o as d,h as p,d as h,aw as m,b as f}from"./index.fced531f.js";const y=["placeholder"],w={__name:"inputSearch",props:{placeholder:{type:String,default:""},searchFunction:{type:Function,required:!0},renderFunction:{type:Function,required:!0},debounceTime:{type:Number,default:300}},setup(o){const n=o,e=c(""),u=c([]);let a=null;async function l(){try{u.value=await n.searchFunction(e.value)}catch(t){console.error(t)}}return s(e,function(t,r){clearTimeout(a),t!==r&&(a=setTimeout(l,n.debounceTime))}),(t,r)=>(d(),p("div",null,[h(f("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i),placeholder:o.placeholder,style:{width:"100%",height:"3rem"}},null,8,y),[[m,e.value]])]))}};export{w as _};
