import{ar as s,as as n}from"./index.e27aaed2.js";const h="api/personal/",c={index(t){return new Promise((a,r)=>{s.get(h,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},getDelete(t){return new Promise((a,r)=>{s.get(`${h}personaDeleted`,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},create(t){return new Promise((a,r)=>{s.post(h,t,{headers:n()}).then(e=>a(e)).catch(e=>r(e))})},getListTipoPersonal(t){return new Promise((a,r)=>{s.get(`${h}/listTipoPersonal/${t}`,{headers:n()}).then(e=>{a(e)}).catch(e=>r(e))})},read(t){return new Promise((a,r)=>{s.get(`${h}/${t.id}`,{headers:n()}).then(e=>{a(e)}).catch(e=>r(e))})},allPersona(){return new Promise((t,a)=>{s.get(`${h}allPersona`,{headers:n()}).then(r=>{t(r)}).catch(r=>a(r))})},searchPersona(t){return new Promise((a,r)=>{s.get(`${h}buscarPersona/${t}`,{headers:n()}).then(e=>{a(e)}).catch(e=>r(e))})},update(t){return new Promise((a,r)=>{s.put(`${h}/${t._id}`,t,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},delete(t){return new Promise((a,r)=>{s.delete(`${h}${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},restore(t){return new Promise((a,r)=>{s.delete(`${h}/restore/${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})}};export{c as p};
