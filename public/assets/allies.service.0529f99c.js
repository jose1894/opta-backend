import{as as s,at as n}from"./index.fced531f.js";const d="api/aliados",c={index(a){return new Promise((r,t)=>{s.get(d,{params:a},{headers:n()}).then(e=>r(e.data)).catch(e=>t(e))})},getDelete(a){return new Promise((r,t)=>{s.get(`${d}/aliadosDelete`,{params:a},{headers:n()}).then(e=>r(e.data)).catch(e=>t(e))})},create(a){return new Promise((r,t)=>{s.post(d,a,{headers:n()}).then(e=>r(e)).catch(e=>t(e))})},read(a){return new Promise((r,t)=>{s.get(`${d}/${a.id}`,{headers:n()}).then(e=>{r(e)}).catch(e=>t(e))})},update(a){return new Promise((r,t)=>{s.put(`${d}/${a._id}`,a,{headers:n()}).then(e=>r(e.data)).catch(e=>t(e))})},delete(a){return new Promise((r,t)=>{s.delete(`${d}/${a}`,{headers:n()}).then(e=>r(e.data)).catch(e=>t(e))})},restore(a){return new Promise((r,t)=>{s.delete(`${d}/restore/${a}`,{headers:n()}).then(e=>r(e.data)).catch(e=>t(e))})},allAliadosGet(){return new Promise((a,r)=>{s.get(`${d}/allAliados`,{headers:n()}).then(t=>{a(t)}).catch(t=>r(t))})}};export{c as a};
