import{as as s,at as d}from"./index.cc1855cb.js";const c="api/ciudades/",h={index(t){return new Promise((a,r)=>{s.get(c,{params:t},{headers:d()}).then(e=>a(e.data)).catch(e=>r(e))})},getDelete(t){return new Promise((a,r)=>{s.get(`${c}ciudadesDelete`,{params:t},{headers:d()}).then(e=>a(e.data)).catch(e=>r(e))})},create(t){return new Promise((a,r)=>{s.post(c,t,{headers:d()}).then(e=>a(e)).catch(e=>r(e))})},read(t){return new Promise((a,r)=>{s.get(`${c}/${t.id}`,{headers:d()}).then(e=>{a(e)}).catch(e=>r(e))})},update(t){return new Promise((a,r)=>{s.put(`${c}/${t._id}`,t,{headers:d()}).then(e=>a(e.data)).catch(e=>r(e))})},delete(t){return new Promise((a,r)=>{s.delete(`${c}${t}`,{headers:d()}).then(e=>a(e.data)).catch(e=>r(e))})},restore(t){return new Promise((a,r)=>{s.delete(`${c}restore/${t}`,{headers:d()}).then(e=>a(e.data)).catch(e=>r(e))})},ciudadesByEstados(t){return new Promise((a,r)=>{s.get(`${c}ciudadesByEstados/${t}`,{},{headers:d()}).then(e=>a(e.data)).catch(e=>r(e))})}};export{h as c};
