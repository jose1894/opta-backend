import{as as s,at as c}from"./index.cc1855cb.js";const n="api/proyectos",o={index(r){return new Promise((a,t)=>{s.get(n,{params:r},{headers:c()}).then(e=>a(e.data)).catch(e=>t(e))})},getDelete(r){return new Promise((a,t)=>{s.get(`${n}/proyectosDeleted`,{params:r},{headers:c()}).then(e=>a(e.data)).catch(e=>t(e))})},create(r){return new Promise((a,t)=>{s.post(n,r,{headers:c()}).then(e=>a(e)).catch(e=>t(e))})},read(r){return new Promise((a,t)=>{s.get(`${n}/${r.id}`,{headers:c()}).then(e=>{a(e)}).catch(e=>t(e))})},update(r){return new Promise((a,t)=>{s.put(`${n}/${r._id}`,r,{headers:c()}).then(e=>a(e.data)).catch(e=>t(e))})},delete(r){return new Promise((a,t)=>{s.delete(`${n}/${r}`,{headers:c()}).then(e=>a(e.data)).catch(e=>t(e))})},allProjectsGet(){return new Promise((r,a)=>{s.get(`${n}/allProyectos`,{headers:c()}).then(t=>{r(t)}).catch(t=>a(t))})}};export{o as p};
