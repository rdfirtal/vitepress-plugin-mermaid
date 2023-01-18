(function(u,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(u=typeof globalThis<"u"?globalThis:u||self,a(u.MermaidPlugin={}))})(this,function(u){"use strict";const a=r=>{const c=l=>{function t(e,n){for(;e.length<n;)e="0"+e;return e}function i(e,n){var d,m,o;if(n.length===0)return e;for(d=0,o=n.length;d<o;d++)m=n.charCodeAt(d),e=(e<<5)-e+m,e|=0;return e<0?e*-2:e}function M(e,n,d){return Object.keys(n).sort().reduce(m,e);function m(o,y){return s(o,n[y],y,d)}}function s(e,n,d,m){var o=i(i(i(e,d),p(n)),typeof n);return n===null?i(o,"null"):n===void 0?i(o,"undefined"):typeof n=="object"?m.indexOf(n)!==-1?i(o,"[Circular]"+d):(m.push(n),M(o,n,m)):i(o,n.toString())}function p(e){return Object.prototype.toString.call(e)}return t(s(0,l,"",[]).toString(16),8)},f=r.renderer.rules.fence.bind(r.renderer.rules);r.renderer.rules.fence=(l,t,i,M,s)=>{const p=l[t];if(p.info.trim()==="mermaid")try{const e=p.content.trim();return`<Mermaid id="${`mermaid_${c(t)}`}"  graph="${encodeURIComponent(e)}"></Mermaid>`}catch(e){return`<pre>${e}</pre>`}return p.info.trim()==="mmd"&&(l[t].info="mermaid"),f(l,t,i,M,s)}},v={securityLevel:"loose",startOnLoad:!1};function g(r){const c={...v,...r},f="virtual:mermaid-config",l="\0"+f;return{name:"vite-plugin-mermaid",enforce:"post",transform(t,i){if(i.includes("vitepress/dist/client/app/index.js"))return t=`
import Mermaid from 'vitepress-plugin-mermaid/Mermaid.vue';
`+t,t=t.replace("// install global components",`// install global components
		app.component('Mermaid', Mermaid);
`),{code:t,map:null}},async resolveId(t){if(t===f)return l},async load(t){if(t===l)return`export default ${JSON.stringify(c)};`}}}const b=r=>{r.markdown||(r.markdown={});const c=r.markdown.config||(()=>{});return r.markdown.config=(...f)=>{a(...f),c(...f)},r.vite||(r.vite={}),r.vite.plugins||(r.vite.plugins=[]),r.vite.plugins.push(g(r.mermaid)),r};u.MermaidMarkdown=a,u.MermaidPlugin=g,u.withMermaid=b,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});