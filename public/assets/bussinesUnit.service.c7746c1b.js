import{as as s,at as n}from"./index.49b91a9a.js";const d="api/unidadesNegocios",h={index(r){return new Promise((a,t)=>{s.get(d,{params:r},{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},getDelete(r){return new Promise((a,t)=>{s.get(`${d}/unidadesNegocioDelete`,{params:r},{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},create(r){return new Promise((a,t)=>{s.post(d,r,{headers:n()}).then(e=>a(e)).catch(e=>t(e))})},read(r){return new Promise((a,t)=>{s.get(`${d}/${r.id}`,{headers:n()}).then(e=>{a(e)}).catch(e=>t(e))})},update(r){return new Promise((a,t)=>{s.put(`${d}/${r._id}`,r,{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},delete(r){return new Promise((a,t)=>{s.delete(`${d}/${r}`,{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},allBussinesUnitGet(){return new Promise((r,a)=>{s.get(`${d}/allUnidadesNegocio`,{headers:n()}).then(t=>{r(t)}).catch(t=>a(t))})},restore(r){return new Promise((a,t)=>{s.delete(`${d}/restore/${r}`,{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})}};export{h as b};
