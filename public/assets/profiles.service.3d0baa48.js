import{aq as s,ar as n}from"./index.cb093d8e.js";const h="api/perfiles",c={index(t){return new Promise((a,r)=>{s.get(h,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},getDelete(t){return new Promise((a,r)=>{s.get(`${h}/perfilesDeleted`,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},create(t){return new Promise((a,r)=>{s.post(h,t,{headers:n()}).then(e=>a(e)).catch(e=>r(e))})},read(t){return new Promise((a,r)=>{s.get(`${h}/${t.id}`,{headers:n()}).then(e=>{a(e)}).catch(e=>r(e))})},allPerfiles(){return new Promise((t,a)=>{s.get(`${h}/allPerfiles`,{headers:n()}).then(r=>{t(r)}).catch(r=>a(r))})},update(t){return new Promise((a,r)=>{s.put(`${h}/${t._id}`,t,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},restore(t){return new Promise((a,r)=>{s.delete(`${h}/restore/${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},delete(t){return new Promise((a,r)=>{s.delete(`${h}/${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})}};export{c as p};
