import{as as s,at as d}from"./index.b6490627.js";const n="api/actividades/",h={index(a){return new Promise((r,t)=>{s.get(n,{params:a},{headers:d()}).then(e=>r(e.data)).catch(e=>t(e))})},getDelete(a){return new Promise((r,t)=>{s.get(`${n}actividadesDeleted`,{params:a},{headers:d()}).then(e=>r(e.data)).catch(e=>t(e))})},create(a){return new Promise((r,t)=>{s.post(n,a,{headers:d()}).then(e=>r(e)).catch(e=>t(e))})},read(a){return new Promise((r,t)=>{s.get(`${n}/${a.id}`,{headers:d()}).then(e=>{r(e)}).catch(e=>t(e))})},allActividades(){return new Promise((a,r)=>{s.get(`${n}allActividades`,{headers:d()}).then(t=>{a(t)}).catch(t=>r(t))})},update(a){return new Promise((r,t)=>{s.put(`${n}/${a._id}`,a,{headers:d()}).then(e=>r(e.data)).catch(e=>t(e))})},restore(a){return new Promise((r,t)=>{s.delete(`${n}/restore/${a}`,{headers:d()}).then(e=>r(e.data)).catch(e=>t(e))})},delete(a){return new Promise((r,t)=>{s.delete(`${n}${a}`,{headers:d()}).then(e=>r(e.data)).catch(e=>t(e))})}};export{h as a};
