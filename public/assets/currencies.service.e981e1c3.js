import{aq as s,ar as n}from"./index.2b059d96.js";const c="api/monedas",d={index(t){return new Promise((a,r)=>{s.get(c,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},getDelete(t){return new Promise((a,r)=>{s.get(`${c}/monedasDelete`,{params:t},{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},create(t){return new Promise((a,r)=>{s.post(c,t,{headers:n()}).then(e=>a(e)).catch(e=>r(e))})},read(t){return new Promise((a,r)=>{s.get(`${c}/${t.id}`,{headers:n()}).then(e=>{a(e)}).catch(e=>r(e))})},allCurrencies(){return new Promise((t,a)=>{s.get(`${c}/allMonedas`,{headers:n()}).then(r=>{t(r)}).catch(r=>a(r))})},update(t){return new Promise((a,r)=>{s.put(`${c}/${t._id}`,t,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},delete(t){return new Promise((a,r)=>{s.delete(`${c}/${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})},restore(t){return new Promise((a,r)=>{s.delete(`${c}/restore/${t}`,{headers:n()}).then(e=>a(e.data)).catch(e=>r(e))})}};export{d as c};
