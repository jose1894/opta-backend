import{as as s,at as d}from"./index.fced531f.js";const n="api/idiomas/",c={index(r){return new Promise((a,t)=>{s.get(n,{params:r},{headers:d()}).then(e=>a(e.data)).catch(e=>t(e))})},getDelete(r){return new Promise((a,t)=>{s.get(`${n}idiomasDeleted`,{params:r},{headers:d()}).then(e=>a(e.data)).catch(e=>t(e))})},create(r){return new Promise((a,t)=>{s.post(n,r,{headers:d()}).then(e=>a(e)).catch(e=>t(e))})},read(r){return new Promise((a,t)=>{s.get(`${n}/${r.id}`,{headers:d()}).then(e=>{a(e)}).catch(e=>t(e))})},allIdiomas(){return new Promise((r,a)=>{s.get(`${n}allIdiomas`,{headers:d()}).then(t=>{r(t)}).catch(t=>a(t))})},update(r){return new Promise((a,t)=>{s.put(`${n}/${r._id}`,r,{headers:d()}).then(e=>a(e.data)).catch(e=>t(e))})},restore(r){return new Promise((a,t)=>{s.delete(`${n}/restore/${r}`,{headers:d()}).then(e=>a(e.data)).catch(e=>t(e))})},delete(r){return new Promise((a,t)=>{s.delete(`${n}${r}`,{headers:d()}).then(e=>a(e.data)).catch(e=>t(e))})}};export{c as l};