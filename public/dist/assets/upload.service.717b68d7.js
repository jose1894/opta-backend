import{as as o,at as s}from"./index.94d0d825.js";const n="api/uploads/",i={create(r){return new Promise((a,t)=>{o.post(n,r,{headers:s(!0)}).then(e=>a(e)).catch(e=>t(e))})},read(r,a,t={}){return new Promise((e,c)=>{o.get(`${n}archivoProyectoYEnfoquesGet/${r}/${a}`,{params:t},{headers:s()}).then(d=>e(d.data)).catch(d=>c(d))})},downloadFiled(r){return new Promise((a,t)=>{o.get(`${n}download/${r}`,{headers:s(),responseType:"blob"}).then(e=>a(e)).catch(e=>t(e))})},delete(r){return new Promise((a,t)=>{o.delete(`${n}/${r}`,{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})},downloadFileZip(r){return new Promise((a,t)=>{o.get(`${n}zipFile/${r}`,{headers:s(),responseType:"blob"}).then(e=>a(e)).catch(e=>t(e))})},veryfayFile(r){return new Promise((a,t)=>{o.get(`${n}verificarExisteCarpeta/${r}`,{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})}};export{i as u};
