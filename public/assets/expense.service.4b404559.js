import{as as s,at as n}from"./index.b6490627.js";const h="api/gastos",d={index(r){return new Promise((a,t)=>{s.get(h,{params:r},{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},getDelete(r){return new Promise((a,t)=>{s.get(`${h}/gastosDelete`,{params:r},{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},create(r){return new Promise((a,t)=>{s.post(h,r,{headers:n()}).then(e=>a(e)).catch(e=>t(e))})},read(r){return new Promise((a,t)=>{s.get(`${h}/${r.id}`,{headers:n()}).then(e=>{a(e)}).catch(e=>t(e))})},update(r){return new Promise((a,t)=>{s.put(`${h}/${r._id}`,r,{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},delete(r){return new Promise((a,t)=>{s.delete(`${h}/${r}`,{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},restore(r){return new Promise((a,t)=>{s.delete(`${h}/restore/${r}`,{headers:n()}).then(e=>a(e.data)).catch(e=>t(e))})},sucursalesGet(){return new Promise((r,a)=>{s.get(`${h}/allGastos`,{headers:n()}).then(t=>{r(t)}).catch(t=>a(t))})}};export{d as e};
