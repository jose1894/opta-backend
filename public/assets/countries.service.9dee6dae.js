import{as as s,at as n}from"./index.4a61edd7.js";const c="api/paises/",d={index(t){return new Promise((r,a)=>{s.get(c,{params:t},{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},getDelete(t){return new Promise((r,a)=>{s.get(`${c}paisesDelete`,{params:t},{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},create(t){return new Promise((r,a)=>{s.post(c,t,{headers:n()}).then(e=>r(e)).catch(e=>a(e))})},read(t){return new Promise((r,a)=>{s.get(`${c}/${t.id}`,{headers:n()}).then(e=>{r(e)}).catch(e=>a(e))})},update(t){return new Promise((r,a)=>{s.put(`${c}/${t._id}`,t,{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},delete(t){return new Promise((r,a)=>{s.delete(`${c}${t}`,{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},restore(t){return new Promise((r,a)=>{s.delete(`${c}restore/${t}`,{headers:n()}).then(e=>r(e.data)).catch(e=>a(e))})},countryActivate(){return new Promise((t,r)=>{s.paisesActivosGet()})}};export{d as c};
