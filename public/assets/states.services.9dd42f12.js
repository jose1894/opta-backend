import{as as s,at as n}from"./index.49b91a9a.js";const d="api/estados/",c={index(t){return new Promise((a,r)=>{s.get(d,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},getDelete(t){return new Promise((a,r)=>{s.get(`${d}estadosDelete`,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},create(t){return new Promise((a,r)=>{s.post(d,t,{headers:n()}).then(e=>a(e)).catch(e=>r(e))})},read(t){return console.log(t),new Promise((a,r)=>{s.get(`${d}${t.id}`,{headers:n()}).then(e=>{a(e)}).catch(e=>r(e))})},update(t){return new Promise((a,r)=>{s.put(`${d}/${t._id}`,t,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},delete(t){return new Promise((a,r)=>{s.delete(`${d}${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},restore(t){return new Promise((a,r)=>{s.delete(`${d}restore/${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},estadosByPais(t){return new Promise((a,r)=>{s.get(`${d}estadosByPais/${t}`,{},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})}};export{c as s};
