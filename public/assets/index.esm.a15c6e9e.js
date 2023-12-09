import{p as d,aA as K,aB as Ae,r as b,aC as Ee,w as z,Z,U as W,aD as Ve,g as p,aE as Oe,aF as Pe,aG as k,aH as ee,aI as te}from"./index.7c3ce38a.js";function I(e){return typeof e=="function"}function M(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function _(e){return I(e.$validator)?Object.assign({},e):{$validator:e}}function Te(e){return M(e)&&I(e.then)}function E(e){return typeof e=="object"?e.$valid:e}function C(e){return e.$validator||e}function J(e,t){if(!M(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!M(t)&&!I(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=_(t);return r.$params=Object.assign({},r.$params||{},e),r}function q(e,t){if(!I(e)&&typeof d(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!M(t)&&!I(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const r=_(t);return r.$message=e,r}function Ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const r=_(e);return Object.assign({},r,{$async:!0,$watchTargets:t})}function Le(e){return{$validator(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return d(t).reduce((i,$,u)=>{const g=Object.entries($).reduce((c,o)=>{let[m,v]=o;const h=e[m]||{},s=Object.entries(h).reduce((l,f)=>{let[y,j]=f;const O=C(j).call(this,v,$,u,...n),R=E(O);if(l.$data[y]=O,l.$data.$invalid=!R||!!l.$data.$invalid,l.$data.$error=l.$data.$invalid,!R){let P=j.$message||"";const L=j.$params||{};typeof P=="function"&&(P=P({$pending:!1,$invalid:!R,$params:L,$model:v,$response:O})),l.$errors.push({$property:m,$message:P,$params:L,$response:O,$model:v,$pending:!1,$validator:y})}return{$valid:l.$valid&&R,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:[]});return c.$data[m]=s.$data,c.$errors[m]=s.$errors,{$valid:c.$valid&&s.$valid,$data:c.$data,$errors:c.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:i.$valid&&g.$valid,$data:i.$data.concat(g.$data),$errors:i.$errors.concat(g.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:t=>{let{$response:r}=t;return r?r.$errors.map(n=>Object.values(n).map(a=>a.map(i=>i.$message)).reduce((a,i)=>a.concat(i),[])):[]}}}const x=e=>{if(e=d(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length},Q=e=>(e=d(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function V(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n=>(n=d(n),!x(n)||t.every(a=>a.test(n)))}var ze=Object.freeze({__proto__:null,withParams:J,withMessage:q,withAsync:Ce,forEach:Le,req:x,len:Q,regex:V,unwrap:d,unwrapNormalizedValidator:C,unwrapValidatorResponse:E,normalizeValidatorObject:_}),Ie=V(/^[a-zA-Z]*$/),qe={$validator:Ie,$message:"The value is not alphabetical",$params:{type:"alpha"}},Ne=V(/^[a-zA-Z0-9]*$/),Me={$validator:Ne,$message:"The value must be alpha-numeric",$params:{type:"alphaNum"}},Se=V(/^\d*(\.\d+)?$/),_e={$validator:Se,$message:"Value must be numeric",$params:{type:"numeric"}};function De(e,t){return r=>!x(r)||(!/\s/.test(r)||r instanceof Date)&&+d(e)<=+r&&+d(t)>=+r}function Fe(e,t){return{$validator:De(e,t),$message:r=>{let{$params:n}=r;return`The value must be between ${n.min} and ${n.max}`},$params:{min:e,max:t,type:"between"}}}const Ge=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Ue=V(Ge),Be={$validator:Ue,$message:"Value is not a valid email address",$params:{type:"email"}};function Ze(e){if(!x(e))return!0;if(typeof e!="string")return!1;const t=e.split(".");return t.length===4&&t.every(He)}const He=e=>{if(e.length>3||e.length===0||e[0]==="0"&&e!=="0"||!e.match(/^\d+$/))return!1;const t=+e|0;return t>=0&&t<=255};var We={$validator:Ze,$message:"The value is not a valid IP address",$params:{type:"ipAddress"}};function Je(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:":";return t=>{if(e=d(e),!x(t))return!0;if(typeof t!="string")return!1;const r=typeof e=="string"&&e!==""?t.split(e):t.length===12||t.length===16?t.match(/.{2}/g):null;return r!==null&&(r.length===6||r.length===8)&&r.every(Qe)}}const Qe=e=>e.toLowerCase().match(/^[0-9a-f]{2}$/);function Xe(e){return{$validator:Je(e),$message:"The value is not a valid MAC Address",$params:{type:"macAddress"}}}function Ye(e){return t=>!x(t)||Q(t)<=d(e)}function ce(e){return{$validator:Ye(e),$message:t=>{let{$params:r}=t;return`The maximum length allowed is ${r.max}`},$params:{max:e,type:"maxLength"}}}function Ke(e){return t=>!x(t)||Q(t)>=d(e)}function le(e){return{$validator:Ke(e),$message:t=>{let{$params:r}=t;return`This field should be at least ${r.min} characters long`},$params:{min:e,type:"minLength"}}}function ke(e){return typeof e=="string"&&(e=e.trim()),x(e)}var de={$validator:ke,$message:"Value is required",$params:{type:"required"}};const re=(e,t)=>e?x(typeof t=="string"?t.trim():t):!0;function et(e){return function(t,r){if(typeof e!="function")return re(d(e),t);const n=e.call(this,t,r);return re(n,t)}}function tt(e){return{$validator:et(e),$message:"The value is required",$params:{type:"requiredIf",prop:e}}}const ne=(e,t)=>e?!0:x(typeof t=="string"?t.trim():t);function rt(e){return function(t,r){if(typeof e!="function")return ne(d(e),t);const n=e.call(this,t,r);return ne(n,t)}}function nt(e){return{$validator:rt(e),$message:"The value is required",$params:{type:"requiredUnless",prop:e}}}function at(e){return t=>d(t)===d(e)}function st(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:at(e),$message:r=>`The value must be equal to the ${t} value`,$params:{equalTo:e,otherName:t,type:"sameAs"}}}const it=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;var ut=V(it),ot={$validator:ut,$message:"The value is not a valid URL address",$params:{type:"url"}};function ct(e,t,r){return r?t?t(e):e:((!e||!e.then)&&(e=Promise.resolve(e)),t?e.then(t):e)}function lt(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.reduce((a,i)=>E(a)?a:C(i).apply(this,r),!1)}}function dt(e){return function(){const t=this;for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e.reduce(function(i,$){return ct(i,function(u){return E(u)?u:C($).apply(t,n)})},Promise.resolve(!1))}}function $t(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=t.some($=>$.$async),a=t.reduce(($,u)=>u.$watchTargets?$.concat(u.$watchTargets):$,[]);let i=()=>!1;return t.length&&(i=n?dt(t):lt(t)),{$async:n,$validator:i,$watchTargets:a}}function ft(){return J({type:"or"},q("The value does not match any of the provided validators",$t(...arguments)))}function mt(e,t,r){return r?t?t(e):e:((!e||!e.then)&&(e=Promise.resolve(e)),t?e.then(t):e)}function gt(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.reduce((a,i)=>E(a)?C(i).apply(this,r):a,!0)}}function ht(e){return function(){const t=this;for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e.reduce(function(i,$){return mt(i,function(u){return E(u)?C($).apply(t,n):u})},Promise.resolve(!0))}}function vt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const n=t.some($=>$.$async),a=t.reduce(($,u)=>u.$watchTargets?$.concat(u.$watchTargets):$,[]);let i=()=>!1;return t.length&&(i=n?ht(t):gt(t)),{$async:n,$validator:i,$watchTargets:a}}function pt(){return J({type:"and"},q("The value does not match all of the provided validators",vt(...arguments)))}function yt(e){return function(t,r){if(!x(t))return!0;const n=C(e).call(this,t,r);return Te(n)?n.then(a=>!E(a)):!E(n)}}function wt(e){return{$validator:yt(e),$message:"The value does not match the provided validator",$params:{type:"not"}}}function xt(e){return t=>!x(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+d(e)}function Rt(e){return{$validator:xt(e),$message:t=>{let{$params:r}=t;return`The minimum value allowed is ${r.min}`},$params:{min:e,type:"minValue"}}}function bt(e){return t=>!x(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+d(e)}var jt=e=>({$validator:bt(e),$message:t=>{let{$params:r}=t;return`The maximum value allowed is ${r.max}`},$params:{max:e,type:"maxValue"}}),At=V(/(^[0-9]*$)|(^-[0-9]+$)/),Et={$validator:At,$message:"Value is not an integer",$params:{type:"integer"}},Vt=V(/^[-]?\d*(\.\d+)?$/),Ot={$validator:Vt,$message:"Value must be decimal",$params:{type:"decimal"}};function Pt(e){let{t,messagePath:r=a=>{let{$validator:i}=a;return`validations.${i}`},messageParams:n=a=>a}=e;return function(i){let{withArguments:$=!1,messagePath:u=r,messageParams:g=n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};function c(o){return t(u(o),g(Object.assign({model:o.$model,property:o.$property,pending:o.$pending,invalid:o.$invalid,response:o.$response,validator:o.$validator,propertyPath:o.$propertyPath},o.$params)))}return $&&typeof i=="function"?function(){return q(c,i(...arguments))}:q(c,i)}}const Tt=Object.freeze(Object.defineProperty({__proto__:null,alpha:qe,alphaNum:Me,and:pt,between:Fe,createI18nMessage:Pt,decimal:Ot,email:Be,helpers:ze,integer:Et,ipAddress:We,macAddress:Xe,maxLength:ce,maxValue:jt,minLength:le,minValue:Rt,not:wt,numeric:_e,or:ft,required:de,requiredIf:tt,requiredUnless:nt,sameAs:st,url:ot},Symbol.toStringTag,{value:"Module"})),{createI18nMessage:Ct}=Tt,X=Ct({t:K.global.t.bind(K)}),Jt=X(de);X(le,{withArguments:!0});const Qt=X(ce,{withArguments:!0});function ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((r,n)=>(t.includes(n)||(r[n]=d(e[n])),r),{})}function S(e){return typeof e=="function"}function Lt(e){return Oe(e)||Pe(e)}function $e(e,t,r){let n=e;const a=t.split(".");for(let i=0;i<a.length;i++){if(!n[a[i]])return r;n=n[a[i]]}return n}function B(e,t,r){return p(()=>e.some(n=>$e(t,n,{[r]:!1})[r]))}function se(e,t,r){return p(()=>e.reduce((n,a)=>{const i=$e(t,a,{[r]:!1})[r]||[];return n.concat(i)},[]))}function fe(e,t,r,n){return e.call(n,d(t),d(r),n)}function me(e){return e.$valid!==void 0?!e.$valid:!e}function zt(e,t,r,n,a,i,$){let{$lazy:u,$rewardEarly:g}=a,c=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],o=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,v=arguments.length>10?arguments[10]:void 0;const h=b(!!n.value),s=b(0);r.value=!1;const l=z([t,n].concat(c,v),()=>{if(u&&!n.value||g&&!m.value&&!r.value)return;let f;try{f=fe(e,t,o,$)}catch(y){f=Promise.reject(y)}s.value++,r.value=!!s.value,h.value=!1,Promise.resolve(f).then(y=>{s.value--,r.value=!!s.value,i.value=y,h.value=me(y)}).catch(y=>{s.value--,r.value=!!s.value,i.value=y,h.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:h,$unwatch:l}}function It(e,t,r,n,a,i,$,u){let{$lazy:g,$rewardEarly:c}=n;const o=()=>({}),m=p(()=>{if(g&&!r.value||c&&!u.value)return!1;let v=!0;try{const h=fe(e,t,$,i);a.value=h,v=me(h)}catch(h){a.value=h}return v});return{$unwatch:o,$invalid:m}}function qt(e,t,r,n,a,i,$,u,g,c,o){const m=b(!1),v=e.$params||{},h=b(null);let s,l;e.$async?{$invalid:s,$unwatch:l}=zt(e.$validator,t,m,r,n,h,a,e.$watchTargets,g,c,o):{$invalid:s,$unwatch:l}=It(e.$validator,t,r,n,h,a,g,c);const f=e.$message;return{$message:S(f)?p(()=>f(ae({$pending:m,$invalid:s,$params:ae(v),$model:t,$response:h,$validator:i,$propertyPath:u,$property:$}))):f||"",$params:v,$pending:m,$invalid:s,$response:h,$unwatch:l}}function Nt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=d(e),r=Object.keys(t),n={},a={},i={};let $=null;return r.forEach(u=>{const g=t[u];switch(!0){case S(g.$validator):n[u]=g;break;case S(g):n[u]={$validator:g};break;case u==="$validationGroups":$=g;break;case u.startsWith("$"):i[u]=g;break;default:a[u]=g}}),{rules:n,nestedValidators:a,config:i,validationGroups:$}}function Mt(){}const St="__root";function ge(e,t,r){if(r)return t?t(e()):e();try{var n=Promise.resolve(e());return t?n.then(t):n}catch(a){return Promise.reject(a)}}function _t(e,t){return ge(e,Mt,t)}function Dt(e,t){var r=e();return r&&r.then?r.then(t):t(r)}function Ft(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(e.apply(this,t))}catch(n){return Promise.reject(n)}}}function Gt(e,t,r,n,a,i,$,u,g){const c=Object.keys(e),o=n.get(a,e),m=b(!1),v=b(!1),h=b(0);if(o){if(!o.$partial)return o;o.$unwatch(),m.value=o.$dirty.value}const s={$dirty:m,$path:a,$touch:()=>{m.value||(m.value=!0)},$reset:()=>{m.value&&(m.value=!1)},$commit:()=>{}};return c.length?(c.forEach(l=>{s[l]=qt(e[l],t,s.$dirty,i,$,l,r,a,g,v,h)}),s.$externalResults=p(()=>u.value?[].concat(u.value).map((l,f)=>({$propertyPath:a,$property:r,$validator:"$externalResults",$uid:`${a}-externalResult-${f}`,$message:l,$params:{},$response:null,$pending:!1})):[]),s.$invalid=p(()=>{const l=c.some(f=>d(s[f].$invalid));return v.value=l,!!s.$externalResults.value.length||l}),s.$pending=p(()=>c.some(l=>d(s[l].$pending))),s.$error=p(()=>s.$dirty.value?s.$pending.value||s.$invalid.value:!1),s.$silentErrors=p(()=>c.filter(l=>d(s[l].$invalid)).map(l=>{const f=s[l];return W({$propertyPath:a,$property:r,$validator:l,$uid:`${a}-${l}`,$message:f.$message,$params:f.$params,$response:f.$response,$pending:f.$pending})}).concat(s.$externalResults.value)),s.$errors=p(()=>s.$dirty.value?s.$silentErrors.value:[]),s.$unwatch=()=>c.forEach(l=>{s[l].$unwatch()}),s.$commit=()=>{v.value=!0,h.value=Date.now()},n.set(a,e,s),s):(o&&n.set(a,e,s),s)}function Ut(e,t,r,n,a,i,$){const u=Object.keys(e);return u.length?u.reduce((g,c)=>(g[c]=H({validations:e[c],state:t,key:c,parentKey:r,resultsCache:n,globalConfig:a,instance:i,externalResults:$}),g),{}):{}}function Bt(e,t,r){const n=p(()=>[t,r].filter(s=>s).reduce((s,l)=>s.concat(Object.values(d(l))),[])),a=p({get(){return e.$dirty.value||(n.value.length?n.value.every(s=>s.$dirty):!1)},set(s){e.$dirty.value=s}}),i=p(()=>{const s=d(e.$silentErrors)||[],l=n.value.filter(f=>(d(f).$silentErrors||[]).length).reduce((f,y)=>f.concat(...y.$silentErrors),[]);return s.concat(l)}),$=p(()=>{const s=d(e.$errors)||[],l=n.value.filter(f=>(d(f).$errors||[]).length).reduce((f,y)=>f.concat(...y.$errors),[]);return s.concat(l)}),u=p(()=>n.value.some(s=>s.$invalid)||d(e.$invalid)||!1),g=p(()=>n.value.some(s=>d(s.$pending))||d(e.$pending)||!1),c=p(()=>n.value.some(s=>s.$dirty)||n.value.some(s=>s.$anyDirty)||a.value),o=p(()=>a.value?g.value||u.value:!1),m=()=>{e.$touch(),n.value.forEach(s=>{s.$touch()})},v=()=>{e.$commit(),n.value.forEach(s=>{s.$commit()})},h=()=>{e.$reset(),n.value.forEach(s=>{s.$reset()})};return n.value.length&&n.value.every(s=>s.$dirty)&&m(),{$dirty:a,$errors:$,$invalid:u,$anyDirty:c,$error:o,$pending:g,$touch:m,$reset:h,$silentErrors:i,$commit:v}}function H(e){const t=Ft(function(){return U(),Dt(function(){if(f.$rewardEarly)return Y(),_t(te)},function(){return ge(te,function(){return new Promise(w=>{if(!G.value)return w(!F.value);const T=z(G,()=>{w(!F.value),T()})})})})});let{validations:r,state:n,key:a,parentKey:i,childResults:$,resultsCache:u,globalConfig:g={},instance:c,externalResults:o}=e;const m=i?`${i}.${a}`:a,{rules:v,nestedValidators:h,config:s,validationGroups:l}=Nt(r),f=Object.assign({},g,s),y=a?p(()=>{const w=d(n);return w?d(w[a]):void 0}):n,j=Object.assign({},d(o)||{}),D=p(()=>{const w=d(o);return a?w?d(w[a]):void 0:w}),O=Gt(v,y,a,u,m,f,c,D,n),R=Ut(h,y,m,u,f,c,D),P={};l&&Object.entries(l).forEach(w=>{let[T,A]=w;P[T]={$invalid:B(A,R,"$invalid"),$error:B(A,R,"$error"),$pending:B(A,R,"$pending"),$errors:se(A,R,"$errors"),$silentErrors:se(A,R,"$silentErrors")}});const{$dirty:L,$errors:ve,$invalid:F,$anyDirty:pe,$error:ye,$pending:G,$touch:U,$reset:we,$silentErrors:xe,$commit:Y}=Bt(O,R,$),Re=a?p({get:()=>d(y),set:w=>{L.value=!0;const T=d(n),A=d(o);A&&(A[a]=j[a]),Z(T[a])?T[a].value=w:T[a]=w}}):null;a&&f.$autoDirty&&z(y,()=>{L.value||U();const w=d(o);w&&(w[a]=j[a])},{flush:"sync"});function be(w){return($.value||{})[w]}function je(){Z(o)?o.value=j:Object.keys(j).length===0?Object.keys(o).forEach(w=>{delete o[w]}):Object.assign(o,j)}return W(Object.assign({},O,{$model:Re,$dirty:L,$error:ye,$errors:ve,$invalid:F,$anyDirty:pe,$pending:G,$touch:U,$reset:we,$path:m||St,$silentErrors:xe,$validate:t,$commit:Y},$&&{$getResultsForChild:be,$clearExternalResults:je,$validationGroups:P},R))}class Zt{constructor(){this.storage=new Map}set(t,r,n){this.storage.set(t,{rules:r,result:n})}checkRulesValidity(t,r,n){const a=Object.keys(n),i=Object.keys(r);return i.length!==a.length||!i.every(u=>a.includes(u))?!1:i.every(u=>r[u].$params?Object.keys(r[u].$params).every(g=>d(n[u].$params[g])===d(r[u].$params[g])):!0)}get(t,r){const n=this.storage.get(t);if(!n)return;const{rules:a,result:i}=n,$=this.checkRulesValidity(t,r,a),u=i.$unwatch?i.$unwatch:()=>({});return $?i:{$dirty:i.$dirty,$partial:!0,$unwatch:u}}}const N={COLLECT_ALL:!0,COLLECT_NONE:!1},ie=Symbol("vuelidate#injectChildResults"),ue=Symbol("vuelidate#removeChildResults");function Ht(e){let{$scope:t,instance:r}=e;const n={},a=b([]),i=p(()=>a.value.reduce((o,m)=>(o[m]=d(n[m]),o),{}));function $(o,m){let{$registerAs:v,$scope:h,$stopPropagation:s}=m;s||t===N.COLLECT_NONE||h===N.COLLECT_NONE||t!==N.COLLECT_ALL&&t!==h||(n[v]=o,a.value.push(v))}r.__vuelidateInjectInstances=[].concat(r.__vuelidateInjectInstances||[],$);function u(o){a.value=a.value.filter(m=>m!==o),delete n[o]}r.__vuelidateRemoveInstances=[].concat(r.__vuelidateRemoveInstances||[],u);const g=k(ie,[]);ee(ie,r.__vuelidateInjectInstances);const c=k(ue,[]);return ee(ue,r.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:g,removeValidationResultsFromParent:c}}function he(e){return new Proxy(e,{get(t,r){return typeof t[r]=="object"?he(t[r]):p(()=>t[r])}})}let oe=0;function Xt(e,t){var r;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(n=e,e=void 0,t=void 0);let{$registerAs:a,$scope:i=N.COLLECT_ALL,$stopPropagation:$,$externalResults:u,currentVueInstance:g}=n;const c=g||((r=Ae())===null||r===void 0?void 0:r.proxy),o=c?c.$options:{};a||(oe+=1,a=`_vuelidate_${oe}`);const m=b({}),v=new Zt,{childResults:h,sendValidationResultsToParent:s,removeValidationResultsFromParent:l}=c?Ht({$scope:i,instance:c}):{childResults:b({})};if(!e&&o.validations){const f=o.validations;t=b({}),Ee(()=>{t.value=c,z(()=>S(f)?f.call(t.value,new he(t.value)):f,y=>{m.value=H({validations:y,state:t,childResults:h,resultsCache:v,globalConfig:n,instance:c,externalResults:u||c.vuelidateExternalResults})},{immediate:!0})}),n=o.validationsConfig||n}else{const f=Z(e)||Lt(e)?e:W(e||{});z(f,y=>{m.value=H({validations:y,state:t,childResults:h,resultsCache:v,globalConfig:n,instance:c!=null?c:{},externalResults:u})},{immediate:!0})}return c&&(s.forEach(f=>f(m,{$registerAs:a,$scope:i,$stopPropagation:$})),Ve(()=>l.forEach(f=>f(a)))),p(()=>Object.assign({},d(m.value),h.value))}export{Qt as m,Jt as r,Xt as u};
