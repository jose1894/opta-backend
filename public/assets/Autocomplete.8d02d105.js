import{r as c,g as f,w as y,o as r,h as s,d as b,aw as g,b as k,p as _,F,k as w,t as m,m as x}from"./index.336063ef.js";import{b as T}from"./BaseButton.db055bcd.js";const C={style:{position:"relative"}},A=["placeholder"],I={key:0,style:{position:"absolute"}},B=["onClick"],N={__name:"Autocomplete",props:{placeholder:{type:String,default:""},searchFunction:{type:Function,required:!0},renderFunction:{type:Function,required:!0},debounceTime:{type:Number,default:300}},setup(u){const a=u,o=c(""),l=c(!0),i=c([]),d=f(()=>{const e=i.value;return l.value=!0,e});let p=null;async function h(){try{i.value=await a.searchFunction(o.value)}catch(e){console.error(e)}}function v(e){console.log(e.nombres),a.renderFunction(e),o.value="",l.value=!1}return y(o,function(e,n){clearTimeout(p),e!==n&&(p=setTimeout(h,a.debounceTime))}),(e,n)=>(r(),s("div",C,[b(k("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t),placeholder:u.placeholder,style:{width:"100%",height:"3rem"}},null,8,A),[[g,o.value]]),_(d).length>0&&l.value?(r(),s("ul",I,[(r(!0),s(F,null,w(_(d),t=>(r(),s("li",{key:t.id,onClick:V=>v(t)},m(t.nombreCompleto)+" "+m(t==null?void 0:t.apellidos),9,B))),128))])):x("",!0)]))}},L=T(N,[["__scopeId","data-v-14c6924f"]]);export{L as A};
