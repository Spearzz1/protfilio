import{o as ml}from"./vendor-CPWx-N6z.js";const gl=()=>{};var wi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},_l=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,m=f?n[i+2]:0,I=o>>2,A=(o&3)<<4|h>>4;let R=(h&15)<<2|m>>6,b=m&63;f||(b=64,l||(R=64)),r.push(e[I],e[A],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(vo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):_l(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const m=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||m==null||A==null)throw new yl;const R=o<<2|h>>4;if(r.push(R),m!==64){const b=h<<4&240|m>>2;if(r.push(b),A!==64){const N=m<<6&192|A;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const El=function(n){const t=vo(n);return Io.encodeByteArray(t,!0)},Fn=function(n){return El(n).replace(/\./g,"")},Tl=function(n){try{return Io.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=()=>vl().__FIREBASE_DEFAULTS__,Al=()=>{if(typeof process>"u"||typeof wi>"u")return;const n=wi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Tl(n[1]);return t&&JSON.parse(t)},Yr=()=>{try{return gl()||Il()||Al()||wl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rl=n=>{var t,e;return(e=(t=Yr())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Sl=n=>{const t=Rl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ao=()=>{var n;return(n=Yr())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fn(JSON.stringify(e)),Fn(JSON.stringify(l)),""].join(".")}const He={};function Vl(){const n={prod:[],emulator:[]};for(const t of Object.keys(He))He[t]?n.emulator.push(t):n.prod.push(t);return n}function Dl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ri=!1;function Nl(n,t){if(typeof window>"u"||typeof document>"u"||!Zr(window.location.host)||He[n]===t||He[n]||Ri)return;He[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Vl().prod.length>0;function l(){const R=document.getElementById(r);R&&R.remove()}function h(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function m(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Ri=!0,l()},R}function I(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=Dl(r),b=e("text"),N=document.getElementById(b)||document.createElement("span"),L=e("learnmore"),k=document.getElementById(L)||document.createElement("a"),K=e("preprendIcon"),$=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const J=R.element;h(J),I(k,L);const vt=m();f($,K),J.append($,N,k,vt),document.body.appendChild(J)}o?(N.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ol(){var t;const n=(t=Yr())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xl(){return!Ol()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ml(){try{return typeof indexedDB=="object"}catch{return!1}}function Ll(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Fl,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Ul(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Ae(i,h,r)}}function Ul(n,t){return n.replace(Bl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Bl=/\{\$([^}]+)}/g;function Un(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Si(o)&&Si(l)){if(!Un(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Si(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Cl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ql(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$l(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $l(n){return n===Zt?void 0:n}function ql(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new jl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Hl={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Gl=U.INFO,Kl={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Wl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Kl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ro{constructor(t){this.name=t,this._logLevel=Gl,this._logHandler=Wl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Xl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lr="@firebase/app",Ci="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ro("@firebase/app"),Jl="@firebase/app-compat",Yl="@firebase/analytics-compat",Zl="@firebase/analytics",tu="@firebase/app-check-compat",eu="@firebase/app-check",nu="@firebase/auth",ru="@firebase/auth-compat",su="@firebase/database",iu="@firebase/data-connect",ou="@firebase/database-compat",au="@firebase/functions",lu="@firebase/functions-compat",uu="@firebase/installations",cu="@firebase/installations-compat",hu="@firebase/messaging",fu="@firebase/messaging-compat",du="@firebase/performance",pu="@firebase/performance-compat",mu="@firebase/remote-config",gu="@firebase/remote-config-compat",_u="@firebase/storage",yu="@firebase/storage-compat",Eu="@firebase/firestore",Tu="@firebase/ai",vu="@firebase/firestore-compat",Iu="firebase",Au="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",wu={[Lr]:"fire-core",[Jl]:"fire-core-compat",[Zl]:"fire-analytics",[Yl]:"fire-analytics-compat",[eu]:"fire-app-check",[tu]:"fire-app-check-compat",[nu]:"fire-auth",[ru]:"fire-auth-compat",[su]:"fire-rtdb",[iu]:"fire-data-connect",[ou]:"fire-rtdb-compat",[au]:"fire-fn",[lu]:"fire-fn-compat",[uu]:"fire-iid",[cu]:"fire-iid-compat",[hu]:"fire-fcm",[fu]:"fire-fcm-compat",[du]:"fire-perf",[pu]:"fire-perf-compat",[mu]:"fire-rc",[gu]:"fire-rc-compat",[_u]:"fire-gcs",[yu]:"fire-gcs-compat",[Eu]:"fire-fst",[vu]:"fire-fst-compat",[Tu]:"fire-vertex","fire-js":"fire-js",[Iu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,Ru=new Map,Ur=new Map;function Pi(n,t){try{n.container.addComponent(t)}catch(e){Ot.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function jn(n){const t=n.name;if(Ur.has(t))return Ot.debug(`There were multiple attempts to register component ${t}.`),!1;Ur.set(t,n);for(const e of Bn.values())Pi(e,n);for(const e of Ru.values())Pi(e,n);return!0}function Su(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Cu(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new wo("app","Firebase",Pu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=Au;function Du(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Fr,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(e||(e=Ao()),!e)throw jt.create("no-options");const o=Bn.get(i);if(o){if(Un(e,o.options)&&Un(r,o.config))return o;throw jt.create("duplicate-app",{appName:i})}const l=new zl(i);for(const f of Ur.values())l.addComponent(f);const h=new bu(e,r,l);return Bn.set(i,h),h}function Nu(n=Fr){const t=Bn.get(n);if(!t&&n===Fr&&Ao())return Du();if(!t)throw jt.create("no-app",{appName:n});return t}function pe(n,t,e){let r=wu[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ot.warn(l.join(" "));return}jn(new Ye(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="firebase-heartbeat-database",Ou=1,Ze="firebase-heartbeat-store";let Nr=null;function So(){return Nr||(Nr=ml(ku,Ou,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Nr}async function xu(n){try{const e=(await So()).transaction(Ze),r=await e.objectStore(Ze).get(Co(n));return await e.done,r}catch(t){if(t instanceof Ae)Ot.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ot.warn(e.message)}}}async function bi(n,t){try{const r=(await So()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,Co(n)),await r.done}catch(e){if(e instanceof Ae)Ot.warn(e.message);else{const r=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(r.message)}}}function Co(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=1024,Lu=30;class Fu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Vi();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Lu){const l=ju(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ot.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vi(),{heartbeatsToSend:r,unsentEntries:i}=Uu(this._heartbeatsCache.heartbeats),o=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ot.warn(e),""}}}function Vi(){return new Date().toISOString().substring(0,10)}function Uu(n,t=Mu){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Di(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Di(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Bu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ml()?Ll().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return bi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return bi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Di(n){return Fn(JSON.stringify({version:2,heartbeats:n})).length}function ju(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){jn(new Ye("platform-logger",t=>new Ql(t),"PRIVATE")),jn(new Ye("heartbeat",t=>new Fu(t),"PRIVATE")),pe(Lr,Ci,n),pe(Lr,Ci,"esm2020"),pe("fire-js","")}$u("");var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,d){function g(){}g.prototype=d.prototype,y.F=d.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var p=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)p[gt-2]=arguments[gt];return d.prototype[_].apply(E,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,d,g){g||(g=0);const E=Array(16);if(typeof d=="string")for(var _=0;_<16;++_)E[_]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],p;p=d+(v^g&(_^v))+E[0]+3614090360&4294967295,d=g+(p<<7&4294967295|p>>>25),p=v+(_^d&(g^_))+E[1]+3905402710&4294967295,v=d+(p<<12&4294967295|p>>>20),p=_+(g^v&(d^g))+E[2]+606105819&4294967295,_=v+(p<<17&4294967295|p>>>15),p=g+(d^_&(v^d))+E[3]+3250441966&4294967295,g=_+(p<<22&4294967295|p>>>10),p=d+(v^g&(_^v))+E[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=v+(_^d&(g^_))+E[5]+1200080426&4294967295,v=d+(p<<12&4294967295|p>>>20),p=_+(g^v&(d^g))+E[6]+2821735955&4294967295,_=v+(p<<17&4294967295|p>>>15),p=g+(d^_&(v^d))+E[7]+4249261313&4294967295,g=_+(p<<22&4294967295|p>>>10),p=d+(v^g&(_^v))+E[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=v+(_^d&(g^_))+E[9]+2336552879&4294967295,v=d+(p<<12&4294967295|p>>>20),p=_+(g^v&(d^g))+E[10]+4294925233&4294967295,_=v+(p<<17&4294967295|p>>>15),p=g+(d^_&(v^d))+E[11]+2304563134&4294967295,g=_+(p<<22&4294967295|p>>>10),p=d+(v^g&(_^v))+E[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=v+(_^d&(g^_))+E[13]+4254626195&4294967295,v=d+(p<<12&4294967295|p>>>20),p=_+(g^v&(d^g))+E[14]+2792965006&4294967295,_=v+(p<<17&4294967295|p>>>15),p=g+(d^_&(v^d))+E[15]+1236535329&4294967295,g=_+(p<<22&4294967295|p>>>10),p=d+(_^v&(g^_))+E[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=v+(g^_&(d^g))+E[6]+3225465664&4294967295,v=d+(p<<9&4294967295|p>>>23),p=_+(d^g&(v^d))+E[11]+643717713&4294967295,_=v+(p<<14&4294967295|p>>>18),p=g+(v^d&(_^v))+E[0]+3921069994&4294967295,g=_+(p<<20&4294967295|p>>>12),p=d+(_^v&(g^_))+E[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=v+(g^_&(d^g))+E[10]+38016083&4294967295,v=d+(p<<9&4294967295|p>>>23),p=_+(d^g&(v^d))+E[15]+3634488961&4294967295,_=v+(p<<14&4294967295|p>>>18),p=g+(v^d&(_^v))+E[4]+3889429448&4294967295,g=_+(p<<20&4294967295|p>>>12),p=d+(_^v&(g^_))+E[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=v+(g^_&(d^g))+E[14]+3275163606&4294967295,v=d+(p<<9&4294967295|p>>>23),p=_+(d^g&(v^d))+E[3]+4107603335&4294967295,_=v+(p<<14&4294967295|p>>>18),p=g+(v^d&(_^v))+E[8]+1163531501&4294967295,g=_+(p<<20&4294967295|p>>>12),p=d+(_^v&(g^_))+E[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=v+(g^_&(d^g))+E[2]+4243563512&4294967295,v=d+(p<<9&4294967295|p>>>23),p=_+(d^g&(v^d))+E[7]+1735328473&4294967295,_=v+(p<<14&4294967295|p>>>18),p=g+(v^d&(_^v))+E[12]+2368359562&4294967295,g=_+(p<<20&4294967295|p>>>12),p=d+(g^_^v)+E[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=v+(d^g^_)+E[8]+2272392833&4294967295,v=d+(p<<11&4294967295|p>>>21),p=_+(v^d^g)+E[11]+1839030562&4294967295,_=v+(p<<16&4294967295|p>>>16),p=g+(_^v^d)+E[14]+4259657740&4294967295,g=_+(p<<23&4294967295|p>>>9),p=d+(g^_^v)+E[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=v+(d^g^_)+E[4]+1272893353&4294967295,v=d+(p<<11&4294967295|p>>>21),p=_+(v^d^g)+E[7]+4139469664&4294967295,_=v+(p<<16&4294967295|p>>>16),p=g+(_^v^d)+E[10]+3200236656&4294967295,g=_+(p<<23&4294967295|p>>>9),p=d+(g^_^v)+E[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=v+(d^g^_)+E[0]+3936430074&4294967295,v=d+(p<<11&4294967295|p>>>21),p=_+(v^d^g)+E[3]+3572445317&4294967295,_=v+(p<<16&4294967295|p>>>16),p=g+(_^v^d)+E[6]+76029189&4294967295,g=_+(p<<23&4294967295|p>>>9),p=d+(g^_^v)+E[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=v+(d^g^_)+E[12]+3873151461&4294967295,v=d+(p<<11&4294967295|p>>>21),p=_+(v^d^g)+E[15]+530742520&4294967295,_=v+(p<<16&4294967295|p>>>16),p=g+(_^v^d)+E[2]+3299628645&4294967295,g=_+(p<<23&4294967295|p>>>9),p=d+(_^(g|~v))+E[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=v+(g^(d|~_))+E[7]+1126891415&4294967295,v=d+(p<<10&4294967295|p>>>22),p=_+(d^(v|~g))+E[14]+2878612391&4294967295,_=v+(p<<15&4294967295|p>>>17),p=g+(v^(_|~d))+E[5]+4237533241&4294967295,g=_+(p<<21&4294967295|p>>>11),p=d+(_^(g|~v))+E[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=v+(g^(d|~_))+E[3]+2399980690&4294967295,v=d+(p<<10&4294967295|p>>>22),p=_+(d^(v|~g))+E[10]+4293915773&4294967295,_=v+(p<<15&4294967295|p>>>17),p=g+(v^(_|~d))+E[1]+2240044497&4294967295,g=_+(p<<21&4294967295|p>>>11),p=d+(_^(g|~v))+E[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=v+(g^(d|~_))+E[15]+4264355552&4294967295,v=d+(p<<10&4294967295|p>>>22),p=_+(d^(v|~g))+E[6]+2734768916&4294967295,_=v+(p<<15&4294967295|p>>>17),p=g+(v^(_|~d))+E[13]+1309151649&4294967295,g=_+(p<<21&4294967295|p>>>11),p=d+(_^(g|~v))+E[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=v+(g^(d|~_))+E[11]+3174756917&4294967295,v=d+(p<<10&4294967295|p>>>22),p=_+(d^(v|~g))+E[2]+718787259&4294967295,_=v+(p<<15&4294967295|p>>>17),p=g+(v^(_|~d))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+d&4294967295,y.g[1]=y.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,d){d===void 0&&(d=y.length);const g=d-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<d;){if(_==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<d;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){i(this,E),_=0;break}}else for(;v<d;)if(E[_++]=y[v++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=d},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var d=1;d<y.length-8;++d)y[d]=0;d=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=d&255,d/=256;for(this.v(y),y=Array(16),d=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[d++]=this.g[g]>>>E&255;return y};function o(y,d){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=d(y)}function l(y,d){this.h=d;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==d||(g[_]=v,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(d){return new l([d|0],d<0?-1:0)}):new l([y|0],y<0?-1:0)}function m(y){if(isNaN(y)||!isFinite(y))return A;if(y<0)return k(m(-y));const d=[];let g=1;for(let E=0;y>=g;E++)d[E]=y/g|0,g*=4294967296;return new l(d,0)}function I(y,d){if(y.length==0)throw Error("number format error: empty string");if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(y.charAt(0)=="-")return k(I(y.substring(1),d));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=m(Math.pow(d,8));let E=A;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const p=parseInt(y.substring(v,v+_),d);_<8?(_=m(Math.pow(d,_)),E=E.j(_).add(m(p))):(E=E.j(g),E=E.add(m(p)))}return E}var A=f(0),R=f(1),b=f(16777216);n=l.prototype,n.m=function(){if(L(this))return-k(this).m();let y=0,d=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*d,d*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(L(this))return"-"+k(this).toString(y);const d=m(Math.pow(y,6));var g=this;let E="";for(;;){const _=vt(g,d).g;g=K(g,_.j(d));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let d=0;d<y.g.length;d++)if(y.g[d]!=0)return!1;return!0}function L(y){return y.h==-1}n.l=function(y){return y=K(this,y),L(y)?-1:N(y)?0:1};function k(y){const d=y.g.length,g=[];for(let E=0;E<d;E++)g[E]=~y.g[E];return new l(g,~y.h).add(R)}n.abs=function(){return L(this)?k(this):this},n.add=function(y){const d=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=d;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),p=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=p>>>16,v&=65535,p&=65535,g[_]=p<<16|v}return new l(g,g[g.length-1]&-2147483648?-1:0)};function K(y,d){return y.add(k(d))}n.j=function(y){if(N(this)||N(y))return A;if(L(this))return L(y)?k(this).j(k(y)):k(k(this).j(y));if(L(y))return k(this.j(k(y)));if(this.l(b)<0&&y.l(b)<0)return m(this.m()*y.m());const d=this.g.length+y.g.length,g=[];for(var E=0;E<2*d;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,p=this.i(E)&65535,gt=y.i(_)>>>16,Kt=y.i(_)&65535;g[2*E+2*_]+=p*Kt,$(g,2*E+2*_),g[2*E+2*_+1]+=v*Kt,$(g,2*E+2*_+1),g[2*E+2*_+1]+=p*gt,$(g,2*E+2*_+1),g[2*E+2*_+2]+=v*gt,$(g,2*E+2*_+2)}for(y=0;y<d;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=d;y<2*d;y++)g[y]=0;return new l(g,0)};function $(y,d){for(;(y[d]&65535)!=y[d];)y[d+1]+=y[d]>>>16,y[d]&=65535,d++}function J(y,d){this.g=y,this.h=d}function vt(y,d){if(N(d))throw Error("division by zero");if(N(y))return new J(A,A);if(L(y))return d=vt(k(y),d),new J(k(d.g),k(d.h));if(L(d))return d=vt(y,k(d)),new J(k(d.g),d.h);if(y.g.length>30){if(L(y)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var g=R,E=d;E.l(y)<=0;)g=mt(g),E=mt(E);var _=Et(g,1),v=Et(E,1);for(E=Et(E,2),g=Et(g,2);!N(E);){var p=v.add(E);p.l(y)<=0&&(_=_.add(g),v=p),E=Et(E,1),g=Et(g,1)}return d=K(y,_.j(d)),new J(_,d)}for(_=A;y.l(d)>=0;){for(g=Math.max(1,Math.floor(y.m()/d.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=m(g),p=v.j(d);L(p)||p.l(y)>0;)g-=E,v=m(g),p=v.j(d);N(v)&&(v=R),_=_.add(v),y=K(y,p)}return new J(_,y)}n.B=function(y){return vt(this,y).h},n.and=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)&y.i(E);return new l(g,this.h&y.h)},n.or=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)|y.i(E);return new l(g,this.h|y.h)},n.xor=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)^y.i(E);return new l(g,this.h^y.h)};function mt(y){const d=y.g.length+1,g=[];for(let E=0;E<d;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(g,y.h)}function Et(y,d){const g=d>>5;d%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=d>0?y.i(v+g)>>>d|y.i(v+g+1)<<32-d:y.i(v+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=I,ts=l}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Po,ze,bo,kn,Br,Vo,Do,No;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cn=="object"&&Cn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var c=0;c<s.length-1;c++){var T=s[c];if(!(T in u))break t;u=u[T]}s=s[s.length-1],c=u[s],a=a(c),a!=c&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var u=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&u.push([c,a[c]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,u){return s.call.apply(s.bind,arguments)}function m(s,a,u){return m=f,m.apply(null,arguments)}function I(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var c=u.slice();return c.push.apply(c,arguments),s.apply(this,c)}}function A(s,a){function u(){}u.prototype=a.prototype,s.Z=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(c,T,w){for(var P=Array(arguments.length-2),x=2;x<arguments.length;x++)P[x-2]=arguments[x];return a.prototype[T].apply(c,P)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function b(s){const a=s.length;if(a>0){const u=Array(a);for(let c=0;c<a;c++)u[c]=s[c];return u}return[]}function N(s,a){for(let c=1;c<arguments.length;c++){const T=arguments[c];var u=typeof T;if(u=u!="object"?u:T?Array.isArray(T)?"array":u:"null",u=="array"||u=="object"&&typeof T.length=="number"){u=s.length||0;const w=T.length||0;s.length=u+w;for(let P=0;P<w;P++)s[u+P]=T[P]}else s.push(T)}}class L{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function k(s){l.setTimeout(()=>{throw s},0)}function K(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class ${constructor(){this.h=this.g=null}add(a,u){const c=J.get();c.set(a,u),this.h?this.h.next=c:this.g=c,this.h=c}}var J=new L(()=>new vt,s=>s.reset());class vt{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,Et=!1,y=new $,d=()=>{const s=Promise.resolve(void 0);mt=()=>{s.then(g)}};function g(){for(var s;s=K();){try{s.h.call(s.g)}catch(u){k(u)}var a=J;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}Et=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return s}();function p(s){return/^[\s\xa0]*$/.test(s)}function gt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}A(gt,_),gt.prototype.init=function(s,a){const u=this.type=s.type,c=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&gt.Z.h.call(this)},gt.prototype.h=function(){gt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Kt="closure_listenable_"+(Math.random()*1e6|0),La=0;function Fa(s,a,u,c,T){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!c,this.ha=T,this.key=++La,this.da=this.fa=!1}function fn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function dn(s,a,u){for(const c in s)a.call(u,s[c],c,s)}function Ua(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function As(s){const a={};for(const u in s)a[u]=s[u];return a}const ws="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rs(s,a){let u,c;for(let T=1;T<arguments.length;T++){c=arguments[T];for(u in c)s[u]=c[u];for(let w=0;w<ws.length;w++)u=ws[w],Object.prototype.hasOwnProperty.call(c,u)&&(s[u]=c[u])}}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,u,c,T){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const P=ur(s,a,c,T);return P>-1?(a=s[P],u||(a.fa=!1)):(a=new Fa(a,this.src,w,!!c,T),a.fa=u,s.push(a)),a};function lr(s,a){const u=a.type;if(u in s.g){var c=s.g[u],T=Array.prototype.indexOf.call(c,a,void 0),w;(w=T>=0)&&Array.prototype.splice.call(c,T,1),w&&(fn(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function ur(s,a,u,c){for(let T=0;T<s.length;++T){const w=s[T];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==c)return T}return-1}var cr="closure_lm_"+(Math.random()*1e6|0),hr={};function Ss(s,a,u,c,T){if(Array.isArray(a)){for(let w=0;w<a.length;w++)Ss(s,a[w],u,c,T);return null}return u=bs(u),s&&s[Kt]?s.J(a,u,h(c)?!!c.capture:!1,T):Ba(s,a,u,!1,c,T)}function Ba(s,a,u,c,T,w){if(!a)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let x=dr(s);if(x||(s[cr]=x=new pn(s)),u=x.add(a,u,c,P,w),u.proxy)return u;if(c=ja(),u.proxy=c,c.src=s,c.listener=u,s.addEventListener)v||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),c,T);else if(s.attachEvent)s.attachEvent(Ps(a.toString()),c);else if(s.addListener&&s.removeListener)s.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ja(){function s(u){return a.call(s.src,s.listener,u)}const a=$a;return s}function Cs(s,a,u,c,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)Cs(s,a[w],u,c,T);else c=h(c)?!!c.capture:!!c,u=bs(u),s&&s[Kt]?(s=s.i,w=String(a).toString(),w in s.g&&(a=s.g[w],u=ur(a,u,c,T),u>-1&&(fn(a[u]),Array.prototype.splice.call(a,u,1),a.length==0&&(delete s.g[w],s.h--)))):s&&(s=dr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ur(a,u,c,T)),(u=s>-1?a[s]:null)&&fr(u))}function fr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Kt])lr(a.i,s);else{var u=s.type,c=s.proxy;a.removeEventListener?a.removeEventListener(u,c,s.capture):a.detachEvent?a.detachEvent(Ps(u),c):a.addListener&&a.removeListener&&a.removeListener(c),(u=dr(a))?(lr(u,s),u.h==0&&(u.src=null,a[cr]=null)):fn(s)}}}function Ps(s){return s in hr?hr[s]:hr[s]="on"+s}function $a(s,a){if(s.da)s=!0;else{a=new gt(a,this);const u=s.listener,c=s.ha||s.src;s.fa&&fr(s),s=u.call(c,a)}return s}function dr(s){return s=s[cr],s instanceof pn?s:null}var pr="__closure_events_fn_"+(Math.random()*1e9>>>0);function bs(s){return typeof s=="function"?s:(s[pr]||(s[pr]=function(a){return s.handleEvent(a)}),s[pr])}function lt(){E.call(this),this.i=new pn(this),this.M=this,this.G=null}A(lt,E),lt.prototype[Kt]=!0,lt.prototype.removeEventListener=function(s,a,u,c){Cs(this,s,a,u,c)};function dt(s,a){var u,c=s.G;if(c)for(u=[];c;c=c.G)u.push(c);if(s=s.M,c=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(c,s),Rs(a,T)}T=!0;let w,P;if(u)for(P=u.length-1;P>=0;P--)w=a.g=u[P],T=mn(w,c,!0,a)&&T;if(w=a.g=s,T=mn(w,c,!0,a)&&T,T=mn(w,c,!1,a)&&T,u)for(P=0;P<u.length;P++)w=a.g=u[P],T=mn(w,c,!1,a)&&T}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const u=s.g[a];for(let c=0;c<u.length;c++)fn(u[c]);delete s.g[a],s.h--}}this.G=null},lt.prototype.J=function(s,a,u,c){return this.i.add(String(s),a,!1,u,c)},lt.prototype.K=function(s,a,u,c){return this.i.add(String(s),a,!0,u,c)};function mn(s,a,u,c){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let w=0;w<a.length;++w){const P=a[w];if(P&&!P.da&&P.capture==u){const x=P.listener,tt=P.ha||P.src;P.fa&&lr(s.i,P),T=x.call(tt,c)!==!1&&T}}return T&&!c.defaultPrevented}function qa(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=m(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function Vs(s){s.g=qa(()=>{s.g=null,s.i&&(s.i=!1,Vs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class za extends E{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Vs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(s){E.call(this),this.h=s,this.g={}}A(Se,E);var Ds=[];function Ns(s){dn(s.g,function(a,u){this.g.hasOwnProperty(u)&&fr(a)},s),s.g={}}Se.prototype.N=function(){Se.Z.N.call(this),Ns(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mr=l.JSON.stringify,Ha=l.JSON.parse,Ga=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ks(){}function Os(){}var Ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gr(){_.call(this,"d")}A(gr,_);function _r(){_.call(this,"c")}A(_r,_);var Wt={},xs=null;function gn(){return xs=xs||new lt}Wt.Ia="serverreachability";function Ms(s){_.call(this,Wt.Ia,s)}A(Ms,_);function Pe(s){const a=gn();dt(a,new Ms(a))}Wt.STAT_EVENT="statevent";function Ls(s,a){_.call(this,Wt.STAT_EVENT,s),this.stat=a}A(Ls,_);function pt(s){const a=gn();dt(a,new Ls(a,s))}Wt.Ja="timingevent";function Fs(s,a){_.call(this,Wt.Ja,s),this.size=a}A(Fs,_);function be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Ve(){this.g=!0}Ve.prototype.ua=function(){this.g=!1};function Ka(s,a,u,c,T,w){s.info(function(){if(s.g)if(w){var P="",x=w.split("&");for(let j=0;j<x.length;j++){var tt=x[j].split("=");if(tt.length>1){const et=tt[0];tt=tt[1];const Ct=et.split("_");P=Ct.length>=2&&Ct[1]=="type"?P+(et+"="+tt+"&"):P+(et+"=redacted&")}}}else P=null;else P=w;return"XMLHTTP REQ ("+c+") [attempt "+T+"]: "+a+`
`+u+`
`+P})}function Wa(s,a,u,c,T,w,P){s.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+T+"]: "+a+`
`+u+`
`+w+" "+P})}function ue(s,a,u,c){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Xa(s,u)+(c?" "+c:"")})}function Qa(s,a){s.info(function(){return"TIMEOUT: "+a})}Ve.prototype.info=function(){};function Xa(s,a){if(!s.g)return a;if(!a)return null;try{const w=JSON.parse(a);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var u=w[s];if(!(u.length<2)){var c=u[1];if(Array.isArray(c)&&!(c.length<1)){var T=c[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<c.length;P++)c[P]=""}}}}return mr(w)}catch{return a}}var _n={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Us={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Bs;function yr(){}A(yr,ks),yr.prototype.g=function(){return new XMLHttpRequest},Bs=new yr;function De(s){return encodeURIComponent(String(s))}function Ja(s){var a=1;s=s.split(":");const u=[];for(;a>0&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function xt(s,a,u,c){this.j=s,this.i=a,this.l=u,this.S=c||1,this.V=new Se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new js}function js(){this.i=null,this.g="",this.h=!1}var $s={},Er={};function Tr(s,a,u){s.M=1,s.A=En(St(a)),s.u=u,s.R=!0,qs(s,null)}function qs(s,a){s.F=Date.now(),yn(s),s.B=St(s.A);var u=s.B,c=s.S;Array.isArray(c)||(c=[String(c)]),ni(u.i,"t",c),s.C=0,u=s.j.L,s.h=new js,s.g=Ti(s.j,u?a:null,!s.u),s.P>0&&(s.O=new za(m(s.Y,s,s.g),s.P)),a=s.V,u=s.g,c=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Ds[0]=T.toString()),T=Ds);for(let w=0;w<T.length;w++){const P=Ss(u,T[w],c||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?As(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Pe(),Ka(s.i,s.v,s.B,s.l,s.S,s.u)}xt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ft(s)==3?a.j():this.Y(s)},xt.prototype.Y=function(s){try{if(s==this.g)t:{const x=Ft(this.g),tt=this.g.ya(),j=this.g.ca();if(!(x<3)&&(x!=3||this.g&&(this.h.h||this.g.la()||ui(this.g)))){this.K||x!=4||tt==7||(tt==8||j<=0?Pe(3):Pe(2)),vr(this);var a=this.g.ca();this.X=a;var u=Ya(this);if(this.o=a==200,Wa(this.i,this.v,this.B,this.l,this.S,x,a),this.o){if(this.U&&!this.L){e:{if(this.g){var c,T=this.g;if((c=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var w=c;break e}}w=null}if(s=w)ue(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ir(this,s);else{this.o=!1,this.m=3,pt(12),Qt(this),Ne(this);break t}}if(this.R){s=!0;let et;for(;!this.K&&this.C<u.length;)if(et=Za(this,u),et==Er){x==4&&(this.m=4,pt(14),s=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(et==$s){this.m=4,pt(15),ue(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else ue(this.i,this.l,et,null),Ir(this,et);if(zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),x!=4||u.length!=0||this.h.h||(this.m=1,pt(16),s=!1),this.o=this.o&&s,!s)ue(this.i,this.l,u,"[Invalid Chunked Response]"),Qt(this),Ne(this);else if(u.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),Vr(P),P.P=!0,pt(11))}}else ue(this.i,this.l,u,null),Ir(this,u);x==4&&Qt(this),this.o&&!this.K&&(x==4?gi(this.j,this):(this.o=!1,yn(this)))}else dl(this.g),a==400&&u.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),Qt(this),Ne(this)}}}catch{}finally{}};function Ya(s){if(!zs(s))return s.g.la();const a=ui(s.g);if(a==="")return"";let u="";const c=a.length,T=Ft(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Qt(s),Ne(s),"";s.h.i=new l.TextDecoder}for(let w=0;w<c;w++)s.h.h=!0,u+=s.h.i.decode(a[w],{stream:!(T&&w==c-1)});return a.length=0,s.h.g+=u,s.C=0,s.h.g}function zs(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Za(s,a){var u=s.C,c=a.indexOf(`
`,u);return c==-1?Er:(u=Number(a.substring(u,c)),isNaN(u)?$s:(c+=1,c+u>a.length?Er:(a=a.slice(c,c+u),s.C=c+u,a)))}xt.prototype.cancel=function(){this.K=!0,Qt(this)};function yn(s){s.T=Date.now()+s.H,Hs(s,s.H)}function Hs(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=be(m(s.aa,s),a)}function vr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}xt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Qa(this.i,this.B),this.M!=2&&(Pe(),pt(17)),Qt(this),this.m=2,Ne(this)):Hs(this,this.T-s)};function Ne(s){s.j.I==0||s.K||gi(s.j,s)}function Qt(s){vr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Ns(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Ir(s,a){try{var u=s.j;if(u.I!=0&&(u.g==s||Ar(u.h,s))){if(!s.L&&Ar(u.h,s)&&u.I==3){try{var c=u.Ba.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var T=c;if(T[0]==0){t:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)wn(u),In(u);else break t;br(u),pt(18)}}else u.xa=T[1],0<u.xa-u.K&&T[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=be(m(u.Va,u),6e3));Ws(u.h)<=1&&u.ta&&(u.ta=void 0)}else Jt(u,11)}else if((s.L||u.g==s)&&wn(u),!p(a))for(T=u.Ba.g.parse(a),a=0;a<T.length;a++){let j=T[a];const et=j[0];if(!(et<=u.K))if(u.K=et,j=j[1],u.I==2)if(j[0]=="c"){u.M=j[1],u.ba=j[2];const Ct=j[3];Ct!=null&&(u.ka=Ct,u.j.info("VER="+u.ka));const Yt=j[4];Yt!=null&&(u.za=Yt,u.j.info("SVER="+u.za));const Ut=j[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(c=1.5*Ut,u.O=c,u.j.info("backChannelRequestTimeoutMs_="+c)),c=u;const Bt=s.g;if(Bt){const Sn=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var w=c.h;w.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(wr(w,w.h),w.h=null))}if(c.G){const Dr=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dr&&(c.wa=Dr,z(c.J,c.G,Dr))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),c=u;var P=s;if(c.na=Ei(c,c.L?c.ba:null,c.W),P.L){Qs(c.h,P);var x=P,tt=c.O;tt&&(x.H=tt),x.D&&(vr(x),yn(x)),c.g=P}else pi(c);u.i.length>0&&An(u)}else j[0]!="stop"&&j[0]!="close"||Jt(u,7);else u.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Jt(u,7):Pr(u):j[0]!="noop"&&u.l&&u.l.qa(j),u.A=0)}}Pe(4)}catch{}}var tl=class{constructor(s,a){this.g=s,this.map=a}};function Gs(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ks(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ws(s){return s.h?1:s.g?s.g.size:0}function Ar(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function wr(s,a){s.g?s.g.add(a):s.h=a}function Qs(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Gs.prototype.cancel=function(){if(this.i=Xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Xs(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.G);return a}return b(s.i)}var Js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function el(s,a){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const c=s[u].indexOf("=");let T,w=null;c>=0?(T=s[u].substring(0,c),w=s[u].substring(c+1)):T=s[u],a(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Mt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Mt?(this.l=s.l,ke(this,s.j),this.o=s.o,this.g=s.g,Oe(this,s.u),this.h=s.h,Rr(this,ri(s.i)),this.m=s.m):s&&(a=String(s).match(Js))?(this.l=!1,ke(this,a[1]||"",!0),this.o=xe(a[2]||""),this.g=xe(a[3]||"",!0),Oe(this,a[4]),this.h=xe(a[5]||"",!0),Rr(this,a[6]||"",!0),this.m=xe(a[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}Mt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Me(a,Ys,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Me(a,Ys,!0),"@"),s.push(De(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Me(u,u.charAt(0)=="/"?sl:rl,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Me(u,ol)),s.join("")},Mt.prototype.resolve=function(s){const a=St(this);let u=!!s.j;u?ke(a,s.j):u=!!s.o,u?a.o=s.o:u=!!s.g,u?a.g=s.g:u=s.u!=null;var c=s.h;if(u)Oe(a,s.u);else if(u=!!s.h){if(c.charAt(0)!="/")if(this.g&&!this.h)c="/"+c;else{var T=a.h.lastIndexOf("/");T!=-1&&(c=a.h.slice(0,T+1)+c)}if(T=c,T==".."||T==".")c="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){c=T.lastIndexOf("/",0)==0,T=T.split("/");const w=[];for(let P=0;P<T.length;){const x=T[P++];x=="."?c&&P==T.length&&w.push(""):x==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),c&&P==T.length&&w.push("")):(w.push(x),c=!0)}c=w.join("/")}else c=T}return u?a.h=c:u=s.i.toString()!=="",u?Rr(a,ri(s.i)):u=!!s.m,u&&(a.m=s.m),a};function St(s){return new Mt(s)}function ke(s,a,u){s.j=u?xe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Oe(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Rr(s,a,u){a instanceof Le?(s.i=a,al(s.i,s.l)):(u||(a=Me(a,il)),s.i=new Le(a,s.l))}function z(s,a,u){s.i.set(a,u)}function En(s){return z(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function xe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Me(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,nl),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function nl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ys=/[#\/\?@]/g,rl=/[#\?:]/g,sl=/[#\?]/g,il=/[#\?@]/g,ol=/#/g;function Le(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Xt(s){s.g||(s.g=new Map,s.h=0,s.i&&el(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Le.prototype,n.add=function(s,a){Xt(this),this.i=null,s=ce(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function Zs(s,a){Xt(s),a=ce(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ti(s,a){return Xt(s),a=ce(s,a),s.g.has(a)}n.forEach=function(s,a){Xt(this),this.g.forEach(function(u,c){u.forEach(function(T){s.call(a,T,c,this)},this)},this)};function ei(s,a){Xt(s);let u=[];if(typeof a=="string")ti(s,a)&&(u=u.concat(s.g.get(ce(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)u=u.concat(s[a]);return u}n.set=function(s,a){return Xt(this),this.i=null,s=ce(this,s),ti(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=ei(this,s),s.length>0?String(s[0]):a):a};function ni(s,a,u){Zs(s,a),u.length>0&&(s.i=null,s.g.set(ce(s,a),b(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let c=0;c<a.length;c++){var u=a[c];const T=De(u);u=ei(this,u);for(let w=0;w<u.length;w++){let P=T;u[w]!==""&&(P+="="+De(u[w])),s.push(P)}}return this.i=s.join("&")};function ri(s){const a=new Le;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function ce(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function al(s,a){a&&!s.j&&(Xt(s),s.i=null,s.g.forEach(function(u,c){const T=c.toLowerCase();c!=T&&(Zs(this,c),ni(this,T,u))},s)),s.j=a}function ll(s,a){const u=new Ve;if(l.Image){const c=new Image;c.onload=I(Lt,u,"TestLoadImage: loaded",!0,a,c),c.onerror=I(Lt,u,"TestLoadImage: error",!1,a,c),c.onabort=I(Lt,u,"TestLoadImage: abort",!1,a,c),c.ontimeout=I(Lt,u,"TestLoadImage: timeout",!1,a,c),l.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=s}else a(!1)}function ul(s,a){const u=new Ve,c=new AbortController,T=setTimeout(()=>{c.abort(),Lt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:c.signal}).then(w=>{clearTimeout(T),w.ok?Lt(u,"TestPingServer: ok",!0,a):Lt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(u,"TestPingServer: error",!1,a)})}function Lt(s,a,u,c,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),c(u)}catch{}}function cl(){this.g=new Ga}function Sr(s){this.i=s.Sb||null,this.h=s.ab||!1}A(Sr,ks),Sr.prototype.g=function(){return new Tn(this.i,this.h)};function Tn(s,a){lt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Tn,lt),n=Tn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Ue(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;si(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function si(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Fe(this):Ue(this),this.readyState==3&&si(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Fe(this))},n.Na=function(s){this.g&&(this.response=s,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Ue(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Ue(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ii(s){let a="";return dn(s,function(u,c){a+=c,a+=":",a+=u,a+=`\r
`}),a}function Cr(s,a,u){t:{for(c in u){var c=!1;break t}c=!0}c||(u=ii(u),typeof s=="string"?u!=null&&De(u):z(s,a,u))}function Q(s){lt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(Q,lt);var hl=/^https?$/i,fl=["POST","PUT"];n=Q.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,u,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Bs.g(),this.g.onreadystatechange=R(m(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){oi(this,w);return}if(s=u||"",u=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var T in c)u.set(T,c[T]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const w of c.keys())u.set(w,c.get(w));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(fl,a,void 0)>=0)||c||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of u)this.g.setRequestHeader(w,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){oi(this,w)}};function oi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,ai(s),vn(s)}function ai(s){s.A||(s.A=!0,dt(s,"complete"),dt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,dt(this,"complete"),dt(this,"abort"),vn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),Q.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?li(this):this.Xa())},n.Xa=function(){li(this)};function li(s){if(s.h&&typeof o<"u"){if(s.v&&Ft(s)==4)setTimeout(s.Ca.bind(s),0);else if(dt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var c;if(c=w===0){let P=String(s.D).match(Js)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),c=!hl.test(P?P.toLowerCase():"")}u=c}if(u)dt(s,"complete"),dt(s,"success");else{s.o=6;try{var T=Ft(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",ai(s)}}finally{vn(s)}}}}function vn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,a||dt(s,"ready");try{u.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ha(a)}};function ui(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function dl(s){const a={};s=(s.g&&Ft(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<s.length;c++){if(p(s[c]))continue;var u=Ja(s[c]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[T]||[];a[T]=w,w.push(u)}Ua(a,function(c){return c.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function ci(s){this.za=0,this.i=[],this.j=new Ve,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Be("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Be("baseRetryDelayMs",5e3,s),this.Za=Be("retryDelaySeedMs",1e4,s),this.Ta=Be("forwardChannelMaxRetries",2,s),this.va=Be("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Gs(s&&s.concurrentRequestLimit),this.Ba=new cl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ci.prototype,n.ka=8,n.I=1,n.connect=function(s,a,u,c){pt(0),this.W=s,this.H=a||{},u&&c!==void 0&&(this.H.OSID=u,this.H.OAID=c),this.F=this.X,this.J=Ei(this,null,this.W),An(this)};function Pr(s){if(hi(s),s.I==3){var a=s.V++,u=St(s.J);if(z(u,"SID",s.M),z(u,"RID",a),z(u,"TYPE","terminate"),je(s,u),a=new xt(s,s.j,a),a.M=2,a.A=En(St(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.A,u=!0),u||(a.g=Ti(a.j,null),a.g.ea(a.A)),a.F=Date.now(),yn(a)}yi(s)}function In(s){s.g&&(Vr(s),s.g.cancel(),s.g=null)}function hi(s){In(s),s.v&&(l.clearTimeout(s.v),s.v=null),wn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function An(s){if(!Ks(s.h)&&!s.m){s.m=!0;var a=s.Ea;mt||d(),Et||(mt(),Et=!0),y.add(a,s),s.D=0}}function pl(s,a){return Ws(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=be(m(s.Ea,s,a),_i(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new xt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=As(w),Rs(w,this.U)):w=this.U),this.u!==null||this.R||(T.J=w,w=null),this.S)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var c=this.i[u];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,a>4096){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=di(this,T,a),u=St(this.J),z(u,"RID",s),z(u,"CVER",22),this.G&&z(u,"X-HTTP-Session-Id",this.G),je(this,u),w&&(this.R?a="headers="+De(ii(w))+"&"+a:this.u&&Cr(u,this.u,w)),wr(this.h,T),this.Ra&&z(u,"TYPE","init"),this.S?(z(u,"$req",a),z(u,"SID","null"),T.U=!0,Tr(T,u,null)):Tr(T,u,a),this.I=2}}else this.I==3&&(s?fi(this,s):this.i.length==0||Ks(this.h)||fi(this))};function fi(s,a){var u;a?u=a.l:u=s.V++;const c=St(s.J);z(c,"SID",s.M),z(c,"RID",u),z(c,"AID",s.K),je(s,c),s.u&&s.o&&Cr(c,s.u,s.o),u=new xt(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),a&&(s.i=a.G.concat(s.i)),a=di(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),wr(s.h,u),Tr(u,c,a)}function je(s,a){s.H&&dn(s.H,function(u,c){z(a,c,u)}),s.l&&dn({},function(u,c){z(a,c,u)})}function di(s,a,u){u=Math.min(s.i.length,u);const c=s.l?m(s.l.Ka,s.l,s):null;t:{var T=s.i;let x=-1;for(;;){const tt=["count="+u];x==-1?u>0?(x=T[0].g,tt.push("ofs="+x)):x=0:tt.push("ofs="+x);let j=!0;for(let et=0;et<u;et++){var w=T[et].g;const Ct=T[et].map;if(w-=x,w<0)x=Math.max(0,T[et].g-100),j=!1;else try{w="req"+w+"_"||"";try{var P=Ct instanceof Map?Ct:Object.entries(Ct);for(const[Yt,Ut]of P){let Bt=Ut;h(Ut)&&(Bt=mr(Ut)),tt.push(w+Yt+"="+encodeURIComponent(Bt))}}catch(Yt){throw tt.push(w+"type="+encodeURIComponent("_badmap")),Yt}}catch{c&&c(Ct)}}if(j){P=tt.join("&");break t}}P=void 0}return s=s.i.splice(0,u),a.G=s,P}function pi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;mt||d(),Et||(mt(),Et=!0),y.add(a,s),s.A=0}}function br(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=be(m(s.Da,s),_i(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,mi(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=be(m(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),In(this),mi(this))};function Vr(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function mi(s){s.g=new xt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);z(a,"RID","rpc"),z(a,"SID",s.M),z(a,"AID",s.K),z(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&z(a,"TO",s.ia),z(a,"TYPE","xmlhttp"),je(s,a),s.u&&s.o&&Cr(a,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=En(St(a)),u.u=null,u.R=!0,qs(u,s)}n.Va=function(){this.C!=null&&(this.C=null,In(this),br(this),pt(19))};function wn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function gi(s,a){var u=null;if(s.g==a){wn(s),Vr(s),s.g=null;var c=2}else if(Ar(s.h,a))u=a.G,Qs(s.h,a),c=1;else return;if(s.I!=0){if(a.o)if(c==1){u=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;c=gn(),dt(c,new Fs(c,u)),An(s)}else pi(s);else if(T=a.m,T==3||T==0&&a.X>0||!(c==1&&pl(s,a)||c==2&&br(s)))switch(u&&u.length>0&&(a=s.h,a.i=a.i.concat(u)),T){case 1:Jt(s,5);break;case 4:Jt(s,10);break;case 3:Jt(s,6);break;default:Jt(s,2)}}}function _i(s,a){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*a}function Jt(s,a){if(s.j.info("Error code "+a),a==2){var u=m(s.bb,s),c=s.Ua;const T=!c;c=new Mt(c||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ke(c,"https"),En(c),T?ll(c.toString(),u):ul(c.toString(),u)}else pt(2);s.I=0,s.l&&s.l.pa(a),yi(s),hi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function yi(s){if(s.I=0,s.ja=[],s.l){const a=Xs(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,b(s.i),s.i.length=0),s.l.oa()}}function Ei(s,a,u){var c=u instanceof Mt?St(u):new Mt(u);if(c.g!="")a&&(c.g=a+"."+c.g),Oe(c,c.u);else{var T=l.location;c=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const w=new Mt(null);c&&ke(w,c),a&&(w.g=a),T&&Oe(w,T),u&&(w.h=u),c=w}return u=s.G,a=s.wa,u&&a&&z(c,u,a),z(c,"VER",s.ka),je(s,c),c}function Ti(s,a,u){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new Q(new Sr({ab:u})):new Q(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vi(){}n=vi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Rn(){}Rn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){lt.call(this),this.g=new ci(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!p(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!p(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new he(this)}A(Tt,lt),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Pr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=mr(s),s=u);a.i.push(new tl(a.Ya++,s)),a.I==3&&An(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Pr(this.g),delete this.g,Tt.Z.N.call(this)};function Ii(s){gr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}A(Ii,gr);function Ai(){_r.call(this),this.status=1}A(Ai,_r);function he(s){this.g=s}A(he,vi),he.prototype.ra=function(){dt(this.g,"a")},he.prototype.qa=function(s){dt(this.g,new Ii(s))},he.prototype.pa=function(s){dt(this.g,new Ai)},he.prototype.oa=function(){dt(this.g,"b")},Rn.prototype.createWebChannel=Rn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,No=function(){return new Rn},Do=function(){return gn()},Vo=Wt,Br={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_n.NO_ERROR=0,_n.TIMEOUT=8,_n.HTTP_ERROR=6,kn=_n,Us.COMPLETE="complete",bo=Us,Os.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",lt.prototype.listen=lt.prototype.J,ze=Os,Q.prototype.listenOnce=Q.prototype.K,Q.prototype.getLastError=Q.prototype.Ha,Q.prototype.getLastErrorCode=Q.prototype.ya,Q.prototype.getStatus=Q.prototype.ca,Q.prototype.getResponseJson=Q.prototype.La,Q.prototype.getResponseText=Q.prototype.la,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Fa,Po=Q}).apply(typeof Cn<"u"?Cn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="12.9.0";function qu(n){we=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Ro("@firebase/firestore");function fe(){return re.logLevel}function V(n,...t){if(re.logLevel<=U.DEBUG){const e=t.map(es);re.debug(`Firestore (${we}): ${n}`,...e)}}function se(n,...t){if(re.logLevel<=U.ERROR){const e=t.map(es);re.error(`Firestore (${we}): ${n}`,...e)}}function tn(n,...t){if(re.logLevel<=U.WARN){const e=t.map(es);re.warn(`Firestore (${we}): ${n}`,...e)}}function es(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ko(n,r,e)}function ko(n,t,e){let r=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw se(r),new Error(r)}function X(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||ko(t,i,r)}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class Hu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Gu{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},h=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Oo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new ct(t)}}class Ku{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Wu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Ku(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ki{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qu{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ki(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ki(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Xu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function jr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return kr(i)===kr(o)?B(i,o):kr(i)?1:-1}return B(n.length,t.length)}const Ju=55296,Yu=57343;function kr(n){const t=n.charCodeAt(0);return t>=Ju&&t<=Yu}function ye(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),i=Pt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):jr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ts.fromString(t.substring(4,t.length-2))}}class W extends Pt{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Zu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Pt{construct(t,e,r){return new ot(t,e,r)}static isValidIdentifier(t){return Zu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Oi}static keyField(){return new ot([Oi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(W.fromString(t))}static fromName(t){return new O(W.fromString(t).popFirst(5))}static empty(){return new O(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new W(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n,t,e){if(!e)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function tc(n,t,e,r){if(t===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function xi(n){if(!O.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mi(n){if(O.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function rs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Lo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=rs(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,t){const e={typeString:n};return t&&(e.value=t),e}function on(n,t){if(!Mo(n))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=-62135596800,Fi=1e6;class G{static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Fi);return new G(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Li)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fi}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:G._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(on(t,G._jsonSchema))return new G(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Li;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}G._jsonSchemaVersion="firestore/timestamp/1.0",G._jsonSchema={type:Z("string",G._jsonSchemaVersion),seconds:Z("number"),nanoseconds:Z("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(t){return new H(t)}static min(){return new H(new G(0,0))}static max(){return new H(new G(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function ec(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new G(e+1,0):new G(e,r));return new qt(i,O.empty(),t)}function nc(n){return new qt(n.readTime,n.key,en)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(H.min(),O.empty(),en)}static max(){return new qt(H.max(),O.empty(),en)}}function rc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ic{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==sc)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let i=0,o=0,l=!1;t.forEach(h=>{++i,h.next(()=>{++o,l&&o===i&&e()},f=>r(f))}),l=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(i=>i?S.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const m=f;e(t[m]).next(I=>{l[m]=I,++h,h===o&&r(l)},I=>i(I))}})}static doWhile(t,e){return new S((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function oc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function an(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}is.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=-1;function as(n){return n==null}function $n(n){return n===0&&1/n==-1/0}function ac(n){return typeof n=="number"&&Number.isInteger(n)&&!$n(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="";function lc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ui(t)),t=uc(n.get(e),t);return Ui(t)}function uc(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Fo:e+="";break;default:e+=o}}return e}function Ui(n){return n+Fo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Uo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pn(this.root,t,this.comparator,!0)}}class Pn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new st(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ji(this.data.getIterator())}getIteratorFrom(t){return new ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new at(ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new cc("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const hc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=hc.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ee(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="server_timestamp",jo="__type__",$o="__previous_value__",qo="__local_write_time__";function ls(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[jo])==null?void 0:r.stringValue)===Bo}function us(n){const t=n.mapValue.fields[$o];return ls(t)?us(t):t}function qn(n){const t=ie(n.mapValue.fields[qo].timestampValue);return new G(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,r,i,o,l,h,f,m,I,A){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=I,this.apiKey=A}}const zn="(default)";class Hn{constructor(t,e){this.projectId=t,this.database=e||zn}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database===zn}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}function dc(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="__type__",pc="__max__",bn={mapValue:{}},Ho="__vector__",$r="value";function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ls(n)?4:gc(n)?9007199254740991:mc(n)?10:11:M(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return qn(n).isEqual(qn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=ie(i.timestampValue),h=ie(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Ee(i.bytesValue).isEqual(Ee(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=it(i.doubleValue),h=it(o.doubleValue);return l===h?$n(l)===$n(h):isNaN(l)&&isNaN(h)}return!1}(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Bi(l)!==Bi(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Dt(l[f],h[f])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function nn(n,t){return(n.values||[]).find(e=>Dt(e,t))!==void 0}function Te(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,l){const h=it(o.integerValue||o.doubleValue),f=it(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,t);case 3:return $i(n.timestampValue,t.timestampValue);case 4:return $i(qn(n),qn(t));case 5:return jr(n.stringValue,t.stringValue);case 6:return function(o,l){const h=Ee(o),f=Ee(l);return h.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const h=o.split("/"),f=l.split("/");for(let m=0;m<h.length&&m<f.length;m++){const I=B(h[m],f[m]);if(I!==0)return I}return B(h.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const h=B(it(o.latitude),it(l.latitude));return h!==0?h:B(it(o.longitude),it(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return qi(n.arrayValue,t.arrayValue);case 10:return function(o,l){var R,b,N,L;const h=o.fields||{},f=l.fields||{},m=(R=h[$r])==null?void 0:R.arrayValue,I=(b=f[$r])==null?void 0:b.arrayValue,A=B(((N=m==null?void 0:m.values)==null?void 0:N.length)||0,((L=I==null?void 0:I.values)==null?void 0:L.length)||0);return A!==0?A:qi(m,I)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===bn.mapValue&&l===bn.mapValue)return 0;if(o===bn.mapValue)return 1;if(l===bn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),m=l.fields||{},I=Object.keys(m);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const R=jr(f[A],I[A]);if(R!==0)return R;const b=Te(h[f[A]],m[I[A]]);if(b!==0)return b}return B(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function $i(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ie(n),r=ie(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function qi(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Te(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function ve(n){return qr(n)}function qr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ee(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=qr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${qr(e.fields[l])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function On(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=us(n);return t?16+On(t):16;case 5:return 2*n.stringValue.length;case 6:return Ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+On(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Re(r.fields,(o,l)=>{i+=o.length+On(l)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function zr(n){return!!n&&"integerValue"in n}function cs(n){return!!n&&"arrayValue"in n}function xn(n){return!!n&&"mapValue"in n}function mc(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[zo])==null?void 0:r.stringValue)===Ho}function Ge(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Re(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return{...n}}function gc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=ot.emptyPath(),r={},i=[];t.forEach((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=Ge(l):i.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];xn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Re(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new At(Ge(this.value))}}function Go(n){const t=[];return Re(n.fields,(e,r)=>{const i=new ot([e]);if(xn(r)){const o=Go(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new It(t,0,H.min(),H.min(),H.min(),At.empty(),0)}static newFoundDocument(t,e,r,i){return new It(t,1,e,H.min(),r,i,0)}static newNoDocument(t,e){return new It(t,2,e,H.min(),H.min(),At.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,H.min(),H.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e){this.position=t,this.inclusive=e}}function zi(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(l.referenceValue),e.key):r=Te(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hi(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e="asc"){this.field=t,this.dir=e}}function _c(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{}class rt extends Ko{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ec(t,e,r):e==="array-contains"?new Ic(t,r):e==="in"?new Ac(t,r):e==="not-in"?new wc(t,r):e==="array-contains-any"?new Rc(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Tc(t,r):new vc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Te(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Ko{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new zt(t,e)}matches(t){return Wo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Wo(n){return n.op==="and"}function Qo(n){return yc(n)&&Wo(n)}function yc(n){for(const t of n.filters)if(t instanceof zt)return!1;return!0}function Hr(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+ve(n.value);if(Qo(n))return n.filters.map(t=>Hr(t)).join(",");{const t=n.filters.map(e=>Hr(e)).join(",");return`${n.op}(${t})`}}function Xo(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(n,t):n instanceof zt?function(r,i){return i instanceof zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,h)=>o&&Xo(l,i.filters[h]),!0):!1}(n,t):void M(19439)}function Jo(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${ve(e.value)}`}(n):n instanceof zt?function(e){return e.op.toString()+" {"+e.getFilters().map(Jo).join(" ,")+"}"}(n):"Filter"}class Ec extends rt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tc extends rt{constructor(t,e){super(t,"in",e),this.keys=Yo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vc extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Yo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Yo(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Ic extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return cs(e)&&nn(e.arrayValue,this.value)}}class Ac extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class wc extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class Rc extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!cs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function Gi(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Sc(n,t,e,r,i,o,l)}function hs(n){const t=q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Hr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),as(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ve(r)).join(",")),t.Te=e}return t.Te}function fs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!_c(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Xo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Hi(n.startAt,t.startAt)&&Hi(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Cc(n,t,e,r,i,o,l,h){return new tr(n,t,e,r,i,o,l,h)}function Pc(n){return new tr(n)}function Ki(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bc(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Vc(n){return n.collectionGroup!==null}function Ke(n){const t=q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new at(ot.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Kn(o,r))}),e.has(ot.keyField().canonicalString())||t.Ie.push(new Kn(ot.keyField(),r))}return t.Ie}function ne(n){const t=q(n);return t.Ee||(t.Ee=Dc(t,Ke(n))),t.Ee}function Dc(n,t){if(n.limitType==="F")return Gi(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Kn(i.field,o)});const e=n.endAt?new Gn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gn(n.startAt.position,n.startAt.inclusive):null;return Gi(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Gr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zo(n,t){return fs(ne(n),ne(t))&&n.limitType===t.limitType}function ta(n){return`${hs(ne(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Jo(i)).join(", ")}]`),as(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ve(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ve(i)).join(",")),`Target(${r})`}(ne(n))}; limitType=${n.limitType})`}function ds(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ke(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,h,f){const m=zi(l,h,f);return l.inclusive?m<=0:m<0}(r.startAt,Ke(r),i)||r.endAt&&!function(l,h,f){const m=zi(l,h,f);return l.inclusive?m>=0:m>0}(r.endAt,Ke(r),i))}(n,t)}function Nc(n){return(t,e)=>{let r=!1;for(const i of Ke(n)){const o=kc(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function kc(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,l,h){const f=l.data.field(o),m=h.data.field(o);return f!==null&&m!==null?Te(f,m):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Uo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new yt(O.comparator);function Wn(){return Oc}const ea=new yt(O.comparator);function Vn(...n){let t=ea;for(const e of n)t=t.insert(e.key,e);return t}function na(n){let t=ea;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function te(){return We()}function ra(){return We()}function We(){return new ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const xc=new yt(O.comparator),Mc=new at(O.comparator);function ht(...n){let t=Mc;for(const e of n)t=t.add(e);return t}const Lc=new at(B);function Fc(){return Lc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function sa(n){return{integerValue:""+n}}function Uc(n,t){return ac(t)?sa(t):ps(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function Bc(n,t,e){return n instanceof Qn?function(i,o){const l={fields:{[jo]:{stringValue:Bo},[qo]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ls(o)&&(o=us(o)),o&&(l.fields[$o]=o),{mapValue:l}}(e,t):n instanceof rn?oa(n,t):n instanceof sn?aa(n,t):function(i,o){const l=ia(i,o),h=Wi(l)+Wi(i.Ae);return zr(l)&&zr(i.Ae)?sa(h):ps(i.serializer,h)}(n,t)}function jc(n,t,e){return n instanceof rn?oa(n,t):n instanceof sn?aa(n,t):e}function ia(n,t){return n instanceof Xn?function(r){return zr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Qn extends er{}class rn extends er{constructor(t){super(),this.elements=t}}function oa(n,t){const e=la(t);for(const r of n.elements)e.some(i=>Dt(i,r))||e.push(r);return{arrayValue:{values:e}}}class sn extends er{constructor(t){super(),this.elements=t}}function aa(n,t){let e=la(t);for(const r of n.elements)e=e.filter(i=>!Dt(i,r));return{arrayValue:{values:e}}}class Xn extends er{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Wi(n){return it(n.integerValue||n.doubleValue)}function la(n){return cs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $c(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof rn&&i instanceof rn||r instanceof sn&&i instanceof sn?ye(r.elements,i.elements,Dt):r instanceof Xn&&i instanceof Xn?Dt(r.Ae,i.Ae):r instanceof Qn&&i instanceof Qn}(n.transform,t.transform)}class qc{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nr{}function ua(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ha(n.key,Nt.none()):new ln(n.key,n.data,Nt.none());{const e=n.data,r=At.empty();let i=new at(ot.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new le(n.key,r,new Rt(i.toArray()),Nt.none())}}function zc(n,t,e){n instanceof ln?function(i,o,l){const h=i.value.clone(),f=Xi(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,t,e):n instanceof le?function(i,o,l){if(!Mn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=Xi(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(ca(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Qe(n,t,e,r){return n instanceof ln?function(o,l,h,f){if(!Mn(o.precondition,l))return h;const m=o.value.clone(),I=Ji(o.fieldTransforms,f,l);return m.setAll(I),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(n,t,e,r):n instanceof le?function(o,l,h,f){if(!Mn(o.precondition,l))return h;const m=Ji(o.fieldTransforms,f,l),I=l.data;return I.setAll(ca(o)),I.setAll(m),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,l,h){return Mn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h}(n,t,e)}function Hc(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ia(r.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function Qi(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ye(r,i,(o,l)=>$c(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ln extends nr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class le extends nr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ca(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Xi(n,t,e){const r=new Map;X(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,jc(l,h,e[i]))}return r}function Ji(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,Bc(o,l,t))}return r}class ha extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gc extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&zc(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ra();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=ua(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(e,r)=>Qi(e,r))&&ye(this.baseMutations,t.baseMutations,(e,r)=>Qi(e,r))}}class ms{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){X(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return xc}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new ms(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,F;function Qc(n){switch(n){case C.OK:return M(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Xc(n){if(n===void 0)return se("GRPC error has no .code"),C.UNKNOWN;switch(n){case Y.OK:return C.OK;case Y.CANCELLED:return C.CANCELLED;case Y.UNKNOWN:return C.UNKNOWN;case Y.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Y.INTERNAL:return C.INTERNAL;case Y.UNAVAILABLE:return C.UNAVAILABLE;case Y.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Y.NOT_FOUND:return C.NOT_FOUND;case Y.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Y.ABORTED:return C.ABORTED;case Y.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Y.DATA_LOSS:return C.DATA_LOSS;default:return M(39323,{code:n})}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ts([4294967295,4294967295],0);class Jc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Kr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zc(n,t){return Kr(n,t.toTimestamp())}function me(n){return X(!!n,49232),H.fromTimestamp(function(e){const r=ie(e);return new G(r.seconds,r.nanos)}(n))}function fa(n,t){return Wr(n,t).canonicalString()}function Wr(n,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function th(n){const t=W.fromString(n);return X(lh(t),10190,{key:t.toString()}),t}function Qr(n,t){return fa(n.databaseId,t.path)}function eh(n){const t=th(n);return t.length===4?W.emptyPath():rh(t)}function nh(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rh(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yi(n,t,e){return{name:Qr(n,t),fields:e.value.mapValue.fields}}function sh(n,t){let e;if(t instanceof ln)e={update:Yi(n,t.key,t.value)};else if(t instanceof ha)e={delete:Qr(n,t.key)};else if(t instanceof le)e={update:Yi(n,t.key,t.data),updateMask:ah(t.fieldMask)};else{if(!(t instanceof Gc))return M(16599,{dt:t.type});e={verify:Qr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const h=l.transform;if(h instanceof Qn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof rn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof sn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw M(20930,{transform:l.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Zc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function ih(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map(e=>function(i,o){let l=i.updateTime?me(i.updateTime):me(o);return l.isEqual(H.min())&&(l=me(o)),new qc(l,i.transformResults||[])}(e,t))):[]}function oh(n){let t=eh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){X(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(A){const R=da(A);return R instanceof zt&&Qo(R)?R.getFilters():[R]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(R=>function(N){return new Kn(de(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(R))}(e.orderBy));let h=null;e.limit&&(h=function(A){let R;return R=typeof A=="object"?A.value:A,as(R)?null:R}(e.limit));let f=null;e.startAt&&(f=function(A){const R=!!A.before,b=A.values||[];return new Gn(b,R)}(e.startAt));let m=null;return e.endAt&&(m=function(A){const R=!A.before,b=A.values||[];return new Gn(b,R)}(e.endAt)),Cc(t,i,l,o,h,"F",f,m)}function da(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=de(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=de(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=de(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=de(e.unaryFilter.field);return rt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return rt.create(de(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return zt.create(e.compositeFilter.filters.map(r=>da(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function de(n){return ot.fromServerFormat(n.fieldPath)}function ah(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function lh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function pa(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.yt=t}}function ch(n){const t=oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.Sn=new fh}addToCollectionParentIndex(t,e){return this.Sn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(qt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class fh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(W.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ma=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(ma,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Ie(0)}static ar(){return new Ie(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="LruGarbageCollector",dh=1048576;function eo([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class ph{constructor(t){this.Pr=t,this.buffer=new at(eo),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();eo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class mh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){V(to,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){an(e)?V(to,"Ignoring IndexedDB error during garbage collection: ",e):await ss(e)}await this.Ar(3e5)})}}class gh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(is.ce);const r=new ph(e);return this.Vr.forEachTarget(t,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(t,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Zi)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zi):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,i,o,l,h,f,m;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,l=Date.now(),this.nthSequenceNumber(t,i))).next(A=>(r=A,h=Date.now(),this.removeTargets(t,r,e))).next(A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(A=>(m=Date.now(),fe()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${A} documents in `+(m-f)+`ms
Total Duration: ${m-I}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A})))}}function _h(n,t){return new gh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.changes=new ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Qe(r.mutation,i,Rt.empty(),G.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,ht()).next(()=>r))}getLocalViewOfDocuments(t,e,r=ht()){const i=te();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=Vn();return o.forEach((h,f)=>{l=l.insert(h,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=te();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,ht()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,h)=>{e.set(l,h)})})}computeViews(t,e,r,i){let o=Wn();const l=We(),h=function(){return We()}();return e.forEach((f,m)=>{const I=r.get(m.key);i.has(m.key)&&(I===void 0||I.mutation instanceof le)?o=o.insert(m.key,m):I!==void 0?(l.set(m.key,I.mutation.getFieldMask()),Qe(I.mutation,m,I.mutation.getFieldMask(),G.now())):l.set(m.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((m,I)=>l.set(m,I)),e.forEach((m,I)=>h.set(m,new Eh(I,l.get(m)??null))),h))}recalculateAndSaveOverlays(t,e){const r=We();let i=new yt((l,h)=>l-h),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const h of l)h.keys().forEach(f=>{const m=e.get(f);if(m===null)return;let I=r.get(f)||Rt.empty();I=h.applyToLocalView(m,I),r.set(f,I);const A=(i.get(h.batchId)||ht()).add(f);i=i.insert(h.batchId,A)})}).next(()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,I=f.value,A=ra();I.forEach(R=>{if(!o.has(R)){const b=ua(e.get(R),r.get(R));b!==null&&A.set(R,b),o=o.add(R)}}),l.push(this.documentOverlayCache.saveOverlays(t,m,A))}return S.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return bc(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(te());let h=en,f=o;return l.next(m=>S.forEach(m,(I,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(I)?S.resolve():this.remoteDocumentCache.getEntry(t,I).next(R=>{f=f.insert(I,R)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,f,m,ht())).next(I=>({batchId:h,changes:na(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=Vn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Vn();return this.indexManager.getCollectionParents(t,o).next(h=>S.forEach(h,f=>{const m=function(A,R){return new tr(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,r,i).next(I=>{I.forEach((A,R)=>{l=l.insert(A,R)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((f,m)=>{const I=m.getKey();l.get(I)===null&&(l=l.insert(I,It.newInvalidDocument(I)))});let h=Vn();return l.forEach((f,m)=>{const I=o.get(f);I!==void 0&&Qe(I.mutation,m,Rt.empty(),G.now()),ds(e,m)&&(h=h.insert(f,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return S.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:me(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(i){return{name:i.name,query:ch(i.bundledQuery),readTime:me(i.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.overlays=new yt(O.comparator),this.Lr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=te();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.bt(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=te(),o=e.length+1,l=new O(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new yt((m,I)=>m-I);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>r){let I=o.get(m.largestBatchId);I===null&&(I=te(),o=o.insert(m.largestBatchId,I)),I.set(m.getKey(),m)}}const h=te(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,I)=>h.set(m,I)),!(h.size()>=i)););return S.resolve(h)}bt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Wc(e,r));let o=this.Lr.get(e);o===void 0&&(o=ht(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.kr=new at(nt.Kr),this.qr=new at(nt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new nt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new nt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new O(new W([])),r=new nt(e,t),i=new nt(e,t+1),o=[];return this.qr.forEachInRange([r,i],l=>{this.Wr(l),o.push(l.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new O(new W([])),r=new nt(e,t),i=new nt(e,t+1);let o=ht();return this.qr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new nt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return O.comparator(t.key,e.key)||B(t.Hr,e.Hr)}static Ur(t,e){return B(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new at(nt.Kr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Kc(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Jr=this.Jr.add(new nt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return S.resolve(l)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?os:this.Yn-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new nt(e,0),i=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,i],l=>{const h=this.Zr(l.Hr);o.push(h)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(B);return e.forEach(i=>{const o=new nt(i,0),l=new nt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,l],h=>{r=r.add(h.Hr)})}),S.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const l=new nt(new O(o),0);let h=new at(B);return this.Jr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(h=h.add(f.Hr)),!0)},l),S.resolve(this.Yr(h))}Yr(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){X(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return S.forEach(e.mutations,i=>{const o=new nt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Jr=r})}nr(t){}containsKey(t,e){const r=new nt(e,0),i=this.Jr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this.ti=t,this.docs=function(){return new yt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=Wn();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():It.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Wn();const l=e.path,h=new O(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:I}}=f.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||rc(nc(I),r)<=0||(i.has(I.key)||ds(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M(9500)}ni(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Sh(this)}getSize(t){return S.resolve(this.size)}}class Sh extends yh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.persistence=t,this.ri=new ae(e=>hs(e),fs),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.ii=0,this.si=new gs,this.targetCount=0,this.oi=Ie._r()}forEachTarget(t,e){return this.ri.forEach((r,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),S.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.lr(e),S.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ri.forEach((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.ri.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){this._i={},this.overlays={},this.ai=new is(0),this.ui=!1,this.ui=!0,this.ci=new Ah,this.referenceDelegate=t(this),this.li=new Ch(this),this.indexManager=new hh,this.remoteDocumentCache=function(i){return new Rh(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new uh(e),this.Pi=new vh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ih,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new wh(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Ph(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ii(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return S.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Ph extends ic{constructor(t){super(),this.currentSequenceNumber=t}}class _s{constructor(t){this.persistence=t,this.Ri=new gs,this.Ai=null}static Vi(t){return new _s(t)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.di,r=>{const i=O.fromPath(r);return this.mi(t,i).next(o=>{o||e.removeEntry(i,H.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.fi=new ae(r=>lc(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=_h(this,e)}static Vi(t,e){return new Jn(t,e)}Ti(){}Ii(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return S.forEach(this.fi,(r,i)=>this.wr(t,r,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,l=>this.wr(t,l,e).next(h=>{h||(r++,o.removeEntry(l,H.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),S.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=On(t.data.value)),e}wr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=i}static Es(t,e){let r=ht(),i=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ys(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return xl()?8:oc(kl())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.gs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ps(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new bh;return this.ys(t,e,l).next(h=>{if(o.result=h,this.As)return this.ws(t,e,l,h.size)})}).next(()=>o.result)}ws(t,e,r,i){return r.documentReadCount<this.Vs?(fe()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(fe()<=U.DEBUG&&V("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(fe()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ne(e))):S.resolve())}gs(t,e){if(Ki(e))return S.resolve(null);let r=ne(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Gr(e,null,"F"),r=ne(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=ht(...o);return this.fs.getDocuments(t,l).next(h=>this.indexManager.getMinOffset(t,r).next(f=>{const m=this.bs(e,h);return this.Ss(e,m,l,f.readTime)?this.gs(t,Gr(e,null,"F")):this.Ds(t,m,e,f)}))})))}ps(t,e,r,i){return Ki(e)||i.isEqual(H.min())?S.resolve(null):this.fs.getDocuments(t,r).next(o=>{const l=this.bs(e,o);return this.Ss(e,l,r,i)?S.resolve(null):(fe()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$e(e)),this.Ds(t,l,e,ec(i,en)).next(h=>h))})}bs(t,e){let r=new at(Nc(t));return e.forEach((i,o)=>{ds(t,o)&&(r=r.add(o))}),r}Ss(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,r){return fe()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",$e(e)),this.fs.getDocumentsMatchingQuery(t,e,qt.min(),r)}Ds(t,e,r,i){return this.fs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="LocalStore";class Nh{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new yt(B),this.Fs=new ae(o=>hs(o),fs),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Th(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function kh(n,t,e,r){return new Nh(n,t,e,r)}async function _a(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],h=[];let f=ht();for(const m of i){l.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}for(const m of o){h.push(m.batchId);for(const I of m.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next(m=>({Ns:m,removedBatchIds:l,addedBatchIds:h}))})})}function Oh(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(h,f,m,I){const A=m.batch,R=A.keys();let b=S.resolve();return R.forEach(N=>{b=b.next(()=>I.getEntry(f,N)).next(L=>{const k=m.docVersions.get(N);X(k!==null,48541),L.version.compareTo(k)<0&&(A.applyToRemoteDocument(L,m),L.isValidDocument()&&(L.setReadTime(m.commitVersion),I.addEntry(L)))})}),b.next(()=>h.mutationQueue.removeMutationBatch(f,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=ht();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function xh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Mh(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=os),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class no{constructor(){this.activeTargetIds=Fc()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lh{constructor(){this.vo=new no,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new no,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="ConnectivityMonitor";class so{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(ro,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){V(ro,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn=null;function Xr(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="RestConnection",Uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Bh{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===zn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const l=Xr(),h=this.Qo(t,e.toUriEncodedString());V(Or,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(f,i,o);const{host:m}=new URL(h),I=Zr(m);return this.zo(t,h,f,r,I).then(A=>(V(Or,`Received RPC '${t}' ${l}: `,A),A),A=>{throw tn(Or,`RPC '${t}' ${l} failed with error: `,A,"url: ",h,"request:",r),A})}jo(t,e,r,i,o,l){return this.Wo(t,e,r,i,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Qo(t,e){const r=Uh[t];let i=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection",qe=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ge extends Bh{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ge.c_){const t=Do();qe(t,Vo.STAT_EVENT,e=>{e.stat===Br.PROXY?V(ut,"STAT_EVENT: detected buffering proxy"):e.stat===Br.NOPROXY&&V(ut,"STAT_EVENT: detected no buffering proxy")}),ge.c_=!0}}zo(t,e,r,i,o){const l=Xr();return new Promise((h,f)=>{const m=new Po;m.setWithCredentials(!0),m.listenOnce(bo.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case kn.NO_ERROR:const A=m.getResponseJson();V(ut,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(A)),h(A);break;case kn.TIMEOUT:V(ut,`RPC '${t}' ${l} timed out`),f(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case kn.HTTP_ERROR:const R=m.getStatus();if(V(ut,`RPC '${t}' ${l} failed with status:`,R,"response text:",m.getResponseText()),R>0){let b=m.getResponseJson();Array.isArray(b)&&(b=b[0]);const N=b==null?void 0:b.error;if(N&&N.status&&N.message){const L=function(K){const $=K.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf($)>=0?$:C.UNKNOWN}(N.status);f(new D(L,N.message))}else f(new D(C.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new D(C.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:l,h_:m.getLastErrorCode(),P_:m.getLastError()})}}finally{V(ut,`RPC '${t}' ${l} completed.`)}});const I=JSON.stringify(i);V(ut,`RPC '${t}' ${l} sending request:`,i),m.send(e,"POST",I,r,15)})}T_(t,e,r){const i=Xr(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");V(ut,`Creating RPC '${t}' stream ${i}: ${m}`,h);const I=l.createWebChannel(m,h);this.I_(I);let A=!1,R=!1;const b=new jh({Ho:N=>{R?V(ut,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(A||(V(ut,`Opening RPC '${t}' stream ${i} transport.`),I.open(),A=!0),V(ut,`RPC '${t}' stream ${i} sending:`,N),I.send(N))},Jo:()=>I.close()});return qe(I,ze.EventType.OPEN,()=>{R||(V(ut,`RPC '${t}' stream ${i} transport opened.`),b.i_())}),qe(I,ze.EventType.CLOSE,()=>{R||(R=!0,V(ut,`RPC '${t}' stream ${i} transport closed`),b.o_(),this.E_(I))}),qe(I,ze.EventType.ERROR,N=>{R||(R=!0,tn(ut,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),b.o_(new D(C.UNAVAILABLE,"The operation could not be completed")))}),qe(I,ze.EventType.MESSAGE,N=>{var L;if(!R){const k=N.data[0];X(!!k,16349);const K=k,$=(K==null?void 0:K.error)||((L=K[0])==null?void 0:L.error);if($){V(ut,`RPC '${t}' stream ${i} received error:`,$);const J=$.status;let vt=function(y){const d=Y[y];if(d!==void 0)return Xc(d)}(J),mt=$.message;J==="NOT_FOUND"&&mt.includes("database")&&mt.includes("does not exist")&&mt.includes(this.databaseId.database)&&tn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),vt===void 0&&(vt=C.INTERNAL,mt="Unknown error status: "+J+" with message "+$.message),R=!0,b.o_(new D(vt,mt)),I.close()}else V(ut,`RPC '${t}' stream ${i} received:`,k),b.__(k)}}),ge.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return No()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){return new ge(n)}function xr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){return new Jc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge.c_=!1;class ya{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="PersistentStream";class qh{constructor(t,e,r,i,o,l,h,f){this.Ci=t,this.b_=r,this.S_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ya(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(se(e.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===e&&this.G_(r,i)},r=>{t(()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return V(io,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(V(io,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zh extends qh{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=ih(t.writeResults,t.commitTime),r=me(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=nh(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>sh(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{}class Gh extends Hh{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(t,Wr(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())})}jo(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.jo(t,Wr(e,r),i,l,h,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new D(C.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Kh(n,t,e,r){return new Gh(n,t,e,r)}class Wh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(se(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class Qh{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(l=>{r.enqueueAndForget(async()=>{hn(this)&&(V(un,"Restarting streams for network reachability change."),await async function(f){const m=q(f);m.Ea.add(4),await cn(m),m.Va.set("Unknown"),m.Ea.delete(4),await sr(m)}(this))})}),this.Va=new Wh(r,i)}}async function sr(n){if(hn(n))for(const t of n.Ra)await t(!0)}async function cn(n){for(const t of n.Ra)await t(!1)}function hn(n){return q(n).Ea.size===0}async function Ea(n,t,e){if(!an(t))throw t;n.Ea.add(1),await cn(n),n.Va.set("Offline"),e||(e=()=>xh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(un,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await sr(n)})}function Ta(n,t){return t().catch(e=>Ea(n,e,t))}async function ir(n){const t=q(n),e=Ht(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:os;for(;Xh(t);)try{const i=await Mh(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Jh(t,i)}catch(i){await Ea(t,i)}va(t)&&Ia(t)}function Xh(n){return hn(n)&&n.Ta.length<10}function Jh(n,t){n.Ta.push(t);const e=Ht(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function va(n){return hn(n)&&!Ht(n).x_()&&n.Ta.length>0}function Ia(n){Ht(n).start()}async function Yh(n){Ht(n).ra()}async function Zh(n){const t=Ht(n);for(const e of n.Ta)t.ea(e.mutations)}async function tf(n,t,e){const r=n.Ta.shift(),i=ms.from(r,t,e);await Ta(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ir(n)}async function ef(n,t){t&&Ht(n).Y_&&await async function(r,i){if(function(l){return Qc(l)&&l!==C.ABORTED}(i.code)){const o=r.Ta.shift();Ht(r).B_(),await Ta(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ir(r)}}(n,t),va(n)&&Ia(n)}async function oo(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),V(un,"RemoteStore received new credentials");const r=hn(e);e.Ea.add(3),await cn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await sr(e)}async function nf(n,t){const e=q(n);t?(e.Ea.delete(2),await sr(e)):t||(e.Ea.add(2),await cn(e),e.Va.set("Unknown"))}function Ht(n){return n.fa||(n.fa=function(e,r,i){const o=q(e);return o.sa(),new zh(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Yh.bind(null,n),t_:ef.bind(null,n),ta:Zh.bind(null,n),na:tf.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await ir(n)):(await n.fa.stop(),n.Ta.length>0&&(V(un,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new Es(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Aa(n,t){if(se("AsyncQueue",`${t}: ${n}`),an(n))return new D(C.UNAVAILABLE,`${t}: ${n}`);throw n}class rf{constructor(){this.queries=ao(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=q(e),o=i.queries;i.queries=ao(),o.forEach((l,h)=>{for(const f of h.ba)f.onError(r)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function ao(){return new ae(n=>ta(n),Zo)}function sf(n){n.Ca.forEach(t=>{t.next()})}var lo,uo;(uo=lo||(lo={})).Ma="default",uo.Cache="cache";const of="SyncEngine";class af{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new ae(h=>ta(h),Zo),this.Iu=new Map,this.Eu=new Set,this.Ru=new yt(O.comparator),this.Au=new Map,this.Vu=new gs,this.du={},this.mu=new Map,this.fu=Ie.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lf(n,t,e){const r=ff(n);try{const i=await function(l,h){const f=q(l),m=G.now(),I=h.reduce((b,N)=>b.add(N.key),ht());let A,R;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let N=Wn(),L=ht();return f.xs.getEntries(b,I).next(k=>{N=k,N.forEach((K,$)=>{$.isValidDocument()||(L=L.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,N)).next(k=>{A=k;const K=[];for(const $ of h){const J=Hc($,A.get($.key).overlayedDocument);J!=null&&K.push(new le($.key,J,Go(J.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(b,m,K,h)}).next(k=>{R=k;const K=k.applyToLocalDocumentSet(A,L);return f.documentOverlayCache.saveOverlays(b,k.batchId,K)})}).then(()=>({batchId:R.batchId,changes:na(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,h,f){let m=l.du[l.currentUser.toKey()];m||(m=new yt(B)),m=m.insert(h,f),l.du[l.currentUser.toKey()]=m}(r,i.batchId,e),await or(r,i.changes),await ir(r.remoteStore)}catch(i){const o=Aa(i,"Failed to persist write");e.reject(o)}}function co(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach((o,l)=>{const h=l.view.va(t);h.snapshot&&i.push(h.snapshot)}),function(l,h){const f=q(l);f.onlineState=h;let m=!1;f.queries.forEach((I,A)=>{for(const R of A.ba)R.va(h)&&(m=!0)}),m&&sf(f)}(r.eventManager,t),i.length&&r.Pu.J_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uf(n,t){const e=q(n),r=t.batch.batchId;try{const i=await Oh(e.localStore,t);Ra(e,r,null),wa(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,i)}catch(i){await ss(i)}}async function cf(n,t,e){const r=q(n);try{const i=await function(l,h){const f=q(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let I;return f.mutationQueue.lookupMutationBatch(m,h).next(A=>(X(A!==null,37113),I=A.keys(),f.mutationQueue.removeMutationBatch(m,A))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,I,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,I)).next(()=>f.localDocuments.getDocuments(m,I))})}(r.localStore,t);Ra(r,t,e),wa(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,i)}catch(i){await ss(i)}}function wa(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Ra(n,t,e){const r=q(n);let i=r.du[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.du[r.currentUser.toKey()]=i}}async function or(n,t,e){const r=q(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach((h,f)=>{l.push(r.pu(f,t,e).then(m=>{var I;if((m||e)&&r.isPrimaryClient){const A=m?!m.fromCache:(I=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(m){i.push(m);const A=ys.Es(f.targetId,m);o.push(A)}}))}),await Promise.all(l),r.Pu.J_(i),await async function(f,m){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>S.forEach(m,R=>S.forEach(R.Ts,b=>I.persistence.referenceDelegate.addReference(A,R.targetId,b)).next(()=>S.forEach(R.Is,b=>I.persistence.referenceDelegate.removeReference(A,R.targetId,b)))))}catch(A){if(!an(A))throw A;V(Dh,"Failed to update sequence numbers: "+A)}for(const A of m){const R=A.targetId;if(!A.fromCache){const b=I.vs.get(R),N=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(N);I.vs=I.vs.insert(R,L)}}}(r.localStore,o))}async function hf(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){V(of,"User change. New user:",t.toKey());const r=await _a(e.localStore,t);e.currentUser=t,function(o,l){o.mu.forEach(h=>{h.forEach(f=>{f.reject(new D(C.CANCELLED,l))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.Ns)}}function ff(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cf.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return kh(this.persistence,new Vh,t.initialUser,this.serializer)}Cu(t){return new ga(_s.Vi,this.serializer)}Du(t){return new Lh}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class df extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){X(this.persistence.referenceDelegate instanceof Jn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new ga(r=>Jn.Vi(r,e),this.serializer)}}class Jr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>co(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hf.bind(null,this.syncEngine),await nf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rf}()}createDatastore(t){const e=rr(t.databaseInfo.databaseId),r=$h(t.databaseInfo);return Kh(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,h){return new Qh(r,i,o,l,h)}(this.localStore,this.datastore,t.asyncQueue,e=>co(this.syncEngine,e,0),function(){return so.v()?new so:new Fh}())}createSyncEngine(t,e){return function(i,o,l,h,f,m,I){const A=new af(i,o,l,h,f,m);return I&&(A.gu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=q(i);V(un,"RemoteStore shutting down."),o.Ea.add(5),await cn(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Jr.provider={build:()=>new Jr};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="FirestoreClient";class pf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=ns.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{V(Gt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(V(Gt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Aa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Mr(n,t){n.asyncQueue.verifyOperationInProgress(),V(Gt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _a(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ho(n,t){n.asyncQueue.verifyOperationInProgress();const e=await mf(n);V(Gt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>oo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>oo(t.remoteStore,i)),n._onlineComponents=t}async function mf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Gt,"Using user provided OfflineComponentProvider");try{await Mr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await Mr(n,new Yn)}}else V(Gt,"Using default OfflineComponentProvider"),await Mr(n,new df(void 0));return n._offlineComponents}async function gf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Gt,"Using user provided OnlineComponentProvider"),await ho(n,n._uninitializedComponentsProvider._online)):(V(Gt,"Using default OnlineComponentProvider"),await ho(n,new Jr))),n._onlineComponents}function _f(n){return gf(n).then(t=>t.syncEngine)}function yf(n,t){const e=new ee;return n.asyncQueue.enqueueAndForget(async()=>lf(await _f(n),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="ComponentProvider",fo=new Map;function Tf(n,t,e,r,i){return new fc(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Sa(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="firestore.googleapis.com",po=!0;class mo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ca,this.ssl=po}else this.host=t.host,this.ssl=t.ssl??po;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ma;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<dh)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sa(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ar{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zu;switch(r.type){case"firstParty":return new Wu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=fo.get(e);r&&(V(Ef,"Removing Datastore"),fo.delete(e),r.terminate())}(this),Promise.resolve()}}function vf(n,t,e,r={}){var m;n=Lo(n,ar);const i=Zr(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(Pl(`https://${h}`),Nl("Firestore",!0)),o.host!==Ca&&o.host!==h&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!Un(f,l)&&(n._setSettings(f),r.mockUserToken)){let I,A;if(typeof r.mockUserToken=="string")I=r.mockUserToken,A=ct.MOCK_USER;else{I=bl(r.mockUserToken,(m=n._app)==null?void 0:m.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new ct(R)}n._authCredentials=new Hu(new Oo(I,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ts(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(on(e,ft._jsonSchema))return new ft(t,r||null,new O(W.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:Z("string",ft._jsonSchemaVersion),referencePath:Z("string")};class $t extends Ts{constructor(t,e,r){super(t,e,Pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new O(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function jf(n,t,...e){if(n=Je(n),xo("collection","path",t),n instanceof ar){const r=W.fromString(t,...e);return Mi(r),new $t(n,null,r)}{if(!(n instanceof ft||n instanceof $t))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return Mi(r),new $t(n.firestore,null,r)}}function If(n,t,...e){if(n=Je(n),arguments.length===1&&(t=ns.newId()),xo("doc","path",t),n instanceof ar){const r=W.fromString(t,...e);return xi(r),new ft(n,null,new O(r))}{if(!(n instanceof ft||n instanceof $t))throw new D(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return xi(r),new ft(n.firestore,n instanceof $t?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="AsyncQueue";class _o{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ya(this,"async_queue_retry"),this._c=()=>{const r=xr();r&&V(go,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=xr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=xr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new ee;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!an(t))throw t;V(go,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,se("INTERNAL UNHANDLED ERROR: ",yo(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Es.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&M(47125,{Pc:yo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function yo(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Pa extends ar{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new _o,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _o(t),this._firestoreClient=void 0,await t}}}function $f(n,t){const e=typeof n=="object"?n:Nu(),r=typeof n=="string"?n:zn,i=Su(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Sl("firestore");o&&vf(i,...o)}return i}function Af(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wf(n),n._firestoreClient}function wf(n){var r,i,o,l;const t=n._freezeSettings(),e=Tf(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((l=t.localCache)!=null&&l._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new pf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wt(Vt.fromBase64String(t))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wt(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(on(t,wt._jsonSchema))return wt.fromBase64String(t.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:Z("string",wt._jsonSchemaVersion),bytes:Z("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(on(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:Z("string",kt._jsonSchemaVersion),latitude:Z("number"),longitude:Z("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(on(t,bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new bt(t.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:Z("string",bt._jsonSchemaVersion),vectorValues:Z("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=/^__.*__$/;class Sf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new ln(t,this.data,e,this.fieldTransforms)}}function Da(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class vs{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new vs({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Zn(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Da(this.dataSource)&&Rf.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Cf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rr(t)}createContext(t,e,r,i=!1){return new vs({dataSource:t,methodName:e,targetDoc:r,path:ot.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pf(n){const t=n._freezeSettings(),e=rr(n._databaseId);return new Cf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function bf(n,t,e,r,i,o={}){const l=n.createContext(o.merge||o.mergeFields?2:0,t,e,i);xa("Data must be an object, but it was:",l,r);const h=ka(r,l);let f,m;if(o.merge)f=new Rt(l.fieldMask),m=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const R=Is(t,A,e);if(!l.contains(R))throw new D(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Nf(I,R)||I.push(R)}f=new Rt(I),m=l.fieldTransforms.filter(A=>f.covers(A.field))}else f=null,m=l.fieldTransforms;return new Sf(new At(h),f,m)}function Na(n,t){if(Oa(n=Je(n)))return xa("Unsupported field value:",t,n),ka(n,t);if(n instanceof Va)return function(r,i){if(!Da(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const h of r){let f=Na(h,i.childContextForArray(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Uc(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=G.fromDate(r);return{timestampValue:Kr(i.serializer,o)}}if(r instanceof G){const o=new G(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kr(i.serializer,o)}}if(r instanceof kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wt)return{bytesValue:Yc(i.serializer,r._byteString)};if(r instanceof ft){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:fa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bt)return function(l,h){const f=l instanceof bt?l.toArray():l;return{mapValue:{fields:{[zo]:{stringValue:Ho},[$r]:{arrayValue:{values:f.map(I=>{if(typeof I!="number")throw h.createError("VectorValues must only contain numeric values.");return ps(h.serializer,I)})}}}}}}(r,i);if(pa(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${rs(r)}`)}(n,t)}function ka(n,t){const e={};return Uo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(n,(r,i)=>{const o=Na(i,t.childContextForField(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Oa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof G||n instanceof kt||n instanceof wt||n instanceof ft||n instanceof Va||n instanceof bt||pa(n))}function xa(n,t,e){if(!Oa(e)||!Mo(e)){const r=rs(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Is(n,t,e){if((t=Je(t))instanceof ba)return t._internalPath;if(typeof t=="string")return Df(n,t);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Vf=new RegExp("[~\\*/\\[\\]]");function Df(n,t,e){if(t.search(Vf)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ba(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zn(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new D(C.INVALID_ARGUMENT,h+n+f)}function Nf(n,t){return n.some(e=>e.isEqual(t))}const Eo="@firebase/firestore",To="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Is("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kf extends Ma{data(){return super.data()}}function Of(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _e extends Ma{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ln(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Is("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=_e._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}_e._jsonSchemaVersion="firestore/documentSnapshot/1.0",_e._jsonSchema={type:Z("string",_e._jsonSchemaVersion),bundleSource:Z("string","DocumentSnapshot"),bundleName:Z("string"),bundle:Z("string")};class Ln extends _e{data(t={}){return super.data(t)}}class Xe{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ln(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(h=>{const f=new Ln(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Nn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Ln(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Nn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,I=-1;return h.type!==0&&(m=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),I=l.indexOf(h.doc.key)),{type:xf(h.type),doc:f,oldIndex:m,newIndex:I}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ns.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function xf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe._jsonSchemaVersion="firestore/querySnapshot/1.0",Xe._jsonSchema={type:Z("string",Xe._jsonSchemaVersion),bundleSource:Z("string","QuerySnapshot"),bundleName:Z("string"),bundle:Z("string")};function qf(n,t){const e=Lo(n.firestore,Pa),r=If(n),i=Of(n.converter,t),o=Pf(n.firestore);return Mf(e,[bf(o,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function Mf(n,t){const e=Af(n);return yf(e,t)}(function(t,e=!0){qu(Vu),jn(new Ye("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new Pa(new Gu(r.getProvider("auth-internal")),new Qu(l,r.getProvider("app-check-internal")),dc(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),pe(Eo,To,t),pe(Eo,To,"esm2020")})();var Lf="firebase",Ff="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Lf,Ff,"app");export{qf as a,jf as c,$f as g,Du as i};
