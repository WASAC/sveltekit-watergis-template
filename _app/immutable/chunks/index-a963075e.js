function p(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function P(){return Object.create(null)}function b(t){t.forEach(W)}function j(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function bt(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function U(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return p;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(V(e,n))}function $t(t,e,n,i){if(t){const s=G(t,e,n,i);return t[0](s)}}function G(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function vt(t,e,n,i,s,c){if(s){const r=G(e,n,i,c);t.p(r,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function At(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Nt(t){return t==null?"":t}function kt(t,e,n){return t.set(n),e}function St(t){return t&&j(t.destroy)?t.destroy:p}let A=!1;function X(){A=!0}function Y(){A=!1}function Z(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:Z(1,s,x=>e[n[x]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function et(t,e){t.appendChild(e)}function nt(t,e){if(A){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function it(t,e,n){t.insertBefore(e,n||null)}function st(t,e,n){A&&!n?nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function H(t){return document.createTextNode(t)}function jt(){return H(" ")}function Dt(){return H("")}function z(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ht(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Mt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ot(t,i,e[i])}function Pt(t){return t===""?null:+t}function ct(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,s=!1){I(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function lt(t,e,n,i){return R(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return lt(t,e,n,D)}function ut(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Ot(t){return ut(t," ")}function O(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function qt(t,e){const n=O(t,"HTML_TAG_START",0),i=O(t,"HTML_TAG_END",n);if(n===i)return new q(void 0,e);I(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(c,e)}function Bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e){t.value=e==null?"":e}function Gt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function It(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Rt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let w;function at(){if(w===void 0){w=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{w=!0}}return w}function Ft(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=D("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=at();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=z(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=z(i.contentWindow,"resize",e)}),et(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function Jt(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Kt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=rt(n.nodeName):this.e=D(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class q extends dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)st(this.t,this.n[n],e)}}function Qt(t,e){return new t(e)}let g;function m(t){g=t}function _(){if(!g)throw new Error("Function called outside component initialization");return g}function Ut(t){_().$$.on_mount.push(t)}function Vt(t){_().$$.after_update.push(t)}function Xt(t){_().$$.on_destroy.push(t)}function Yt(){const t=_();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=ft(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Zt(t,e){return _().$$.context.set(t,e),e}function te(t){return _().$$.context.get(t)}function ee(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],B=[],E=[],k=[],F=Promise.resolve();let S=!1;function J(){S||(S=!0,F.then(K))}function ne(){return J(),F}function C(t){E.push(t)}function ie(t){k.push(t)}const N=new Set;let v=0;function K(){const t=g;do{for(;v<h.length;){const e=h[v];v++,m(e),_t(e.$$)}for(m(null),h.length=0,v=0;B.length;)B.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];N.has(n)||(N.add(n),n())}E.length=0}while(h.length);for(;k.length;)k.pop()();S=!1,N.clear(),m(t)}function _t(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const T=new Set;let d;function se(){d={r:0,c:[],p:d}}function re(){d.r||b(d.c),d=d.p}function ht(t,e){t&&t.i&&(T.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),d.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function le(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}function ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function fe(t){t&&t.c()}function de(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||C(()=>{const r=t.$$.on_mount.map(W).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...r):b(r),t.$$.on_mount=[]}),c.forEach(C)}function pt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,s,c,r,l=[-1]){const o=g;m(t);const u=t.$$={fragment:null,ctx:[],props:c,update:p,not_equal:s,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:P(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,x,...M)=>{const L=M.length?M[0]:x;return u.ctx&&s(u.ctx[a],u.ctx[a]=L)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](L),f&&yt(t,a)),x}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){X();const a=ct(e.target);u.fragment&&u.fragment.l(a),a.forEach(y)}else u.fragment&&u.fragment.c();e.intro&&ht(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),Y(),K()}m(o)}class he{$destroy(){pt(this,1),this.$destroy=p}$on(e,n){if(!j(n))return p;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Xt as $,ne as A,p as B,$t as C,vt as D,Et as E,wt as F,nt as G,xt as H,z as I,ee as J,Ht as K,Mt as L,Q as M,Lt as N,St as O,le as P,j as Q,b as R,he as S,At as T,_ as U,Tt as V,ce as W,B as X,ue as Y,te as Z,Zt as _,jt as a,V as a0,C as a1,It as a2,Ct as a3,Rt as a4,Wt as a5,Kt as a6,Yt as a7,ae as a8,bt as a9,ie as aa,Nt as ab,Ft as ac,kt as ad,Pt as ae,Jt as af,q as ag,qt as ah,st as b,Ot as c,re as d,Dt as e,ht as f,se as g,y as h,_e as i,Vt as j,D as k,zt as l,ct as m,ot as n,Ut as o,Gt as p,H as q,ut as r,gt as s,oe as t,Bt as u,Qt as v,fe as w,de as x,mt as y,pt as z};