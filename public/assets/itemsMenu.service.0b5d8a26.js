import{aq as n,ar as s}from"./index.cb093d8e.js";const h="api/menu",c={index(r){return new Promise((a,t)=>{n.get(h,{params:r},{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})},getDelete(r){return new Promise((a,t)=>{n.get(`${h}/menuDeleted`,{params:r},{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})},create(r){return new Promise((a,t)=>{n.post(h,r,{headers:s()}).then(e=>a(e)).catch(e=>t(e))})},read(r){return new Promise((a,t)=>{n.get(`${h}/${r.id}`,{headers:s()}).then(e=>{a(e)}).catch(e=>t(e))})},allMenu(){return new Promise((r,a)=>{n.get(`${h}/allMenu`,{headers:s()}).then(t=>{r(t)}).catch(t=>a(t))})},update(r){return new Promise((a,t)=>{n.put(`${h}/${r._id}`,r,{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})},restore(r){return new Promise((a,t)=>{n.delete(`${h}/restore/${r}`,{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})},delete(r){return new Promise((a,t)=>{n.delete(`${h}/${r}`,{headers:s()}).then(e=>a(e.data)).catch(e=>t(e))})}};export{c as i};
