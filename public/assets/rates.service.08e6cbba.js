import{ar as s,as as n}from"./index.e27aaed2.js";const h="api/tasas/",d={index(t){return new Promise((r,a)=>{s.get(h,{params:t},{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},getDelete(t){return new Promise((r,a)=>{s.get(`${h}tasasDelete`,{params:t},{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},create(t){return new Promise((r,a)=>{s.post(h,t,{headers:n()}).then(e=>r(e)).catch(e=>a(e))})},read(t){return new Promise((r,a)=>{s.get(`${h}/${t.id}`,{headers:n()}).then(e=>{r(e)}).catch(e=>a(e))})},allTasas(){return new Promise((t,r)=>{s.get(`${h}allTasas`,{headers:n()}).then(a=>{t(a)}).catch(a=>r(a))})},update(t){return new Promise((r,a)=>{s.put(`${h}/${t._id}`,t,{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},delete(t){return new Promise((r,a)=>{s.delete(`${h}${t}`,{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})}};export{d as r};
