!function(e){function t(t){for(var n,o,i=t[0],s=t[1],a=0,c=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(e){return o.p+""+({0:"about-view",2:"view-404",3:"work-view"}[e]||e)+".bundle.js"}(e);var l=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=s;o(o.s=2)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return B})),n.d(t,"b",(function(){return Q})),n.d(t,"a",(function(){return te}));const r=new WeakMap,o=e=>"function"==typeof e&&r.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`);class p{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let i=0,s=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)u(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=l[a],n=g.exec(t)[2],r=n.toLowerCase()+"$lit$",o=e.getAttribute(r);e.removeAttribute(r);const i=o.split(d);this.parts.push({type:"attribute",index:s,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const r=e.parentNode,o=t.split(d),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=m();else{const e=g.exec(i);null!==e&&u(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===o[i]?(r.insertBefore(m(),e),n.push(e)):e.data=o[i],a+=i}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&s!==i||(s++,t.insertBefore(m(),e)),i=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const u=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},f=e=>-1!==e.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,s=0,a=0,l=r.nextNode();for(;s<n.length;)if(o=n[s],f(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}const v=` ${c} `;class y{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const i=g.exec(e);t+=null===i?e+(n?v:h):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+c}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const w=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new A(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(w(e)||!b(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class A{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||w(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new S(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class E extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends A{}let R=!1;try{const e={get capture(){return R=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;o(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(R?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const O=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new E(e,t.slice(1),n).parts}return"@"===o?[new N(e,t.slice(1),r.eventContext)]:"?"===o?[new C(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new S(e)}};function T(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(c);return n=t.keyString.get(r),void 0===n&&(n=new p(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const j=new Map,L=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const B=(e,...t)=>new y(e,t,"html",O);function V(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=M(r),s=r[i],a=-1,l=0;const c=[];let h=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==s&&s.index===a;)s.index=null!==h?-1:s.index-l,i=M(r,i),s=r[i]}c.forEach(e=>e.parentNode.removeChild(e))}const H=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},M=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(f(t))return n}return-1};const z=(e,t)=>`${e}--${t}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const U=e=>t=>{const n=z(t.type,e);let r=j.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},j.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(c);if(o=r.keyString.get(i),void 0===o){const n=t.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(n,e),o=new p(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o},$=["html","svg"],F=new Set,q=(e,t,n)=>{F.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{$.forEach(t=>{const n=j.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),V(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=M(o),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===n&&(a=H(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=M(o,s);return}s=M(o,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),V(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},D=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:D},J=Promise.resolve(!0);class G extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=D){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||Z,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||Z.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r)||W;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r._classProperties.get(e)||W;r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{e=n,t=r});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}G.finalized=!0;const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class X{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new X(n,K)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ee=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let r=0,o=t.length;r<o;r++){const o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e);class te extends G{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ee(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}te.finalized=!0,te.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,o=L.has(t),i=I&&11===t.nodeType&&!!t.host,a=i&&!F.has(r),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=L.get(t);void 0===r&&(s(t,t.firstChild),L.set(t,r=new S(Object.assign({templateFactory:T},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:U(r)},n)),a){const e=L.get(l);L.delete(l);const n=e.value instanceof _?e.value.template:void 0;q(r,l,n),s(t,t.firstChild),t.appendChild(l),L.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=n(0).b`
  :host {
    display: block;
    --app-blue-color: #0AC8FA;
    --app-grey-color: #24262E;
    --nav-bar-width: 70px;
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes falling {
    from { opacity: 0; margin-top: -300px; }
    to { opacity: 1; margin-top: -50px; }
  }

  @keyframes fromRight {
    from { opacity: 0; margin-right: -300px; }
    to { opacity: 1; margin-right: 0; }
  }

  @keyframes fromLeft {
    from { opacity: 0; margin-left: -300px; }
    to { opacity: 1; margin-left: 0; }
  }

  @keyframes flipIn {
    0% { transform: scaleX(0) }
    100% { transform: scaleX(1) }
  }
`},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);class i extends r.a{static get styles(){return[o.a,r.b`
        :host {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 70px;
          z-index: 999;
        }

        nav {
          padding-right: 50px;
        }

        nav a {
          padding: 25px;
          margin: -25px 30px -25px -25px;
          text-decoration: none;
          color: #ffffff;
        }

        nav a[active] {
          color: var(--app-grey-color);
          background-image: url('https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon/blue-splash.png');
          background-position-x: center;
          background-position-y: 45%;
          background-size: 90px;
          background-repeat: no-repeat;
          animation: fadeIn 0.5s ease;
        }
      `]}static get properties(){return{path:{type:String}}}constructor(){super(),this.path=location.pathname}render(){return r.c`
      <nav>
        <a href="/marcosmonzon/home" ?active="${"/marcosmonzon/home"===this.path||"/"===this.path}" @click="${()=>this._updatePath("/marcosmonzon/home")}">HOME</a>
        <a href="/marcosmonzon/work" ?active="${"/marcosmonzon/work"===this.path}" @click="${()=>this._updatePath("/marcosmonzon/work")}">WORK</a>
        <a href="/marcosmonzon/about" ?active="${"/marcosmonzon/about"===this.path}" @click="${()=>this._updatePath("/marcosmonzon/about")}">ABOUT</a>
        <a href="/marcosmonzon/contact" ?active="${"/marcosmonzon/contact"===this.path}" @click="${()=>this._updatePath("/marcosmonzon/contact")}">CONTACT</a>
      </nav>
    `}_updatePath(e){this.path=e}}customElements.define("nav-bar",i);const s=r.c`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="20" viewBox="0 0 44 31"><defs><linearGradient id="linear-gradient" x1="28.199" y1="33.742" x2="14.028" y2="-1.097" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#71d2ec"/><stop offset="1" stop-color="#0ac8fa"/></linearGradient></defs><g id="menu" transform="translate(-31 -34)"><g id="menu-2" data-name="menu"><rect id="Rectangle_4" data-name="Rectangle 4" width="37" height="3" transform="translate(31 34)" fill="#fff"/><rect id="Rectangle_4_copy_3" data-name="Rectangle 4 copy 3" width="3" height="3" transform="translate(72 34)" fill="#fff"/><rect id="Rectangle_4_copy_4" data-name="Rectangle 4 copy 4" width="3" height="3" transform="translate(31 48)" fill="#fff"/><rect id="Rectangle_4_copy" data-name="Rectangle 4 copy" width="37" height="3" transform="translate(38 48)" fill="#fff"/><rect id="Rectangle_4_copy_2" data-name="Rectangle 4 copy 2" width="17" height="3" transform="translate(31 62)" fill="#fff"/><rect id="Rectangle_4_copy_6" data-name="Rectangle 4 copy 6" width="16" height="3" transform="translate(59 62)" fill="#fff"/><rect id="Rectangle_4_copy_5" data-name="Rectangle 4 copy 5" width="3" height="3" transform="translate(52 62)" fill="#fff"/></g><path id="Gradient_Overlay" data-name="Gradient Overlay" d="M59,65V62H75v3Zm-7,0V62h3v3ZM31,65V62H48v3Zm7-14V48H75v3Zm-7,0V48h3v3ZM72,37V34h3v3ZM31,37V34H68v3Z" fill="url(#linear-gradient)"/></g></svg>`;r.c`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="67" height="26" viewBox="0 0 67 26"><defs><pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 67 26"><image width="67" height="26" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAaCAYAAADsS+FMAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAQ6ADAAQAAAABAAAAGgAAAABEoOxkAAAG5ElEQVRYCbXXW+ilVRkG8D01ZWczNamJ+FfORUQFFQVFYHYghfAqCSpIIqqLkYiKuoguK7zKrJuIqC4CKQNJjSAa6SK8CKKTwojNMBqWZQfG7GCH5/ft7/m35nPv+W8oH3j2Wus9rfd91/q+vfehS+755+oxxrHEvyK88jHe538O/7gtESR/aXj9PI5mZAosbu1kwyjG3TOr5l/wxcb7d+YnZpl5Y9Nb4wi2YJ/aToJ8NE7XB46Ht1jcNsvbEM1RFLlNPh+CBOiMR0N6PvQtsL5sqjdvPOO4ZiMWGO0nJrtrw0JjyMBYH7HYWZvvjEM7PiZNSJGKgyZoLCR1OHxByAeW+uV6WTA/stFOnEKzPHJjoXJqo9w8eZCNjc3y3Nj2mAiITUhQcNrjNZ+Ew8eTMt8LPzXL6j8v9+P1ROnbNDZin17IyKE+itQII0Ib0ZFMzl2LO+5DX+znuOvN4CCZcdwW/Ezsvh2+O1xCguL0EVrq6Z4ZXhR2v9HmVVl8M3wkbC4aotg2JtMJvRUaYm7PPt4M2JPvY9dmOAkndnnYJIywKem1ZrX6ayZuS8HWI7B8EVZvvC88Mgsa+4GsHwyfGz591n0/45vCX4V7YcHHQSm2+1VnpJPDiKkxBzWDo2KeMfNkxr1wV/jefvwOxpqmQU8OH57HDGfhL1k9JRz1d2T9mrOsVquTWe/NsjbG0g3pWl3gpuzfjsOTaPPHeyJ2+veHPV3JHg9fEWrQQdilEWLIA/8R2mMTNAKeuB6mz2UjCPfCk/Mof/xdqBGg+PExbTOOHXQz/hzHG8IPh5L9TahACV0QFj21rreNu96Upf8jEdgf/rUeVtte/g9F/4fw/LCP1MOZO1Tg/6Jptlodmkcv/HdtCzjbrH6YyVvC80JNuDcEc4XZWKI9tSba0dVnA38Lu/kkGD7YizeiMcjGRoiBYv89XOKpETwvtB/8JJTjJaGYbUSmq7vCN4cfDA9vuxlfiPIb4fFQ4YUNXGXNkYw5fR8jm7XgjuOpRj2BnVh8x2tPSeeQjNADs5+Y/Pg0fuX1i2rKi5/4bTJ7Nm1spqs/hbeHLwlvHhVZT/h6Pl8ZvjPsBgKy1YQmIglosp1Lll2x3MOVfUKogU20tsY2wtg9yFt8m9cmVD7mIT7IX0OgtaxX67UbfWnoJl04BqjRhzJRDOfTs9CG3vgKlYR3BFkTs27ilUW0j+oINEeC/JeNimhC82qhlRvJUH6goWN8supGfzHHNTt+R0L5PKebjm/Xz0Zx40wdbuHmnH8bcm4CCtLhbtSx+qj2debi1MZ6tOt6KSNfQu7s2thR37rox2aN+7qhmva0UA2v46QR/WV2WeZHw1vCD4Se95PhqdCt8I7w1ddHJdONkATfc0EiLbojewmPSZNtwmg3+o+2bNxoeY/QIIfiUdVMuEUz2giCq0Ide2n4pfDC0M9jX1FsOeqkTZYFt3hyhdoMxkTNyxZjhCa86RtibfHfBi/fNc2ne2nAH0O10Mm9+2a6Ou4jkKev4VPhxm+T66LwlnUD3hdeHHJqNzOdoPg+8/Q23IRRJ6Gu24RNPmRs2djXIfCr76a92Glkv9n4a4ZHuM3zyLvhmiXmPeHrwwktpmvjR0MBOF4eaobNbw9fHXq50jl5/jYdk/v9rOsv1DaNDVsJS2R80bbIFs4OydkC3U3hZaEbu8ydXfcw8gUNbZ4a1bzk8bFwH5yWeEcEJ2bhLzPq5I9Czn7AuH5+2Lg5YLM+ItY2o4efh/eGTcx+ruWZcESTF4utwj029ct0ar7HWGyHAexGtHFk5mzFaEw33heAmyGHi8JPhBM2NYPyO+HHwxeGAvkv8vyQ81dDpzYm0iIinpLm89PwztA7ZzxFP/F7lTPdh1wa9/7M3cC+d2rEzztLw/3fcEAjrJc1Ne6D0T0QykWjPxl+Lvx0OGHpSPjy8P3hZ0LOTlISLfAjmbsdD4V3h9Arul6tb5MGvT18VvizWeFEjoRGOBP+OnT7wDNO5iZugxc+vaKctKbwU6DHG3pTHRiysY983O4fhF8Mz8KmZowGb8jiu7PgvEGhmLeGkinchF+EHgvfPteFoGEvm2brptK5MYo+HWrOTeHV4R3ht0JxHAIqpE03Xhu+NtSQ+8KLQwflFrXJHgXvrlPhV0KN+F7osX9jeFX4KGz7b1JD19YJw63hldPs7I8TWR4dROyc3m2zrH5GDYCr18OjPr8cyYtDDXhb2L0z3QqP4dfCZ4eadWN4czhCQ64ZBZvm47O8SS+ZK8LrNylnGf2IZcN6qhp0LFzqR9/3ZnFB6Eaca8/R58dZ3BDeFfYARr35gY1gdNDNYPP/hAJd812h0dsK3DXGznb/AfFf1t6kIRE6AAAAAElFTkSuQmCC"/></pattern></defs><path id="Layer_2" data-name="Layer 2" d="M0,0H67V26H0Z" fill="url(#pattern)"/></svg>`;class a extends r.a{static get styles(){return[o.a,r.b`
        :host {
          width: var(--nav-bar-width);
          height: 100vh;
          color: #ffffff50;
          position: absolute;
          left: 0;
          z-index: 10;
        }

        nav {
          --nav-padding: 22px;
          width: calc(var(--nav-bar-width) - var(--nav-padding) * 2);
          height: calc(100% - 2 * var(--nav-padding));
          background-color: var(--app-grey-color);
          box-shadow: 0 0 20px #13a6fb55;
          display: flex;
          flex-flow: column;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: var(--nav-padding);
          z-index: 10;
          transition: all 0.2s ease;
        }

        .menu-button {
          cursor: pointer;
        }

        .social-media-text {
          font-size: 11px;
          writing-mode: vertical-rl;
          text-orientation: upright;
        }

        .social-links {
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .opened {
          width: 300px;
          align-items: flex-end;
        }

        @media screen and (max-width: 720px) {
          :host {
            display: none;
          }
        }
      `]}static get properties(){return{assetsBasePath:{type:String}}}constructor(){super(),this.assetsBasePath="https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon"}firstUpdated(){const e=this.shadowRoot.querySelectorAll("img");e.forEach(e=>e.addEventListener("mouseenter",this._mouseOverHandler)),e.forEach(e=>e.addEventListener("mouseleave",this._mouseOverHandler))}render(){return r.c`
      <nav>
        <div class="menu-button" @click="${this._toogleBar}">
          ${s}
        </div>
        <span class="social-media-text">SOCIAL MEDIA</span>
        <div class="social-links">
          <a href="https://github.com/marco238" target="_blank">
            <img src="${this.assetsBasePath}/github-logo.svg" width="34" alt="Github">
          </a>
          <a href="https://www.linkedin.com/in/marcomonzon/" target="_blank">
            <img src="${this.assetsBasePath}/linkedin-logo.svg" width="30" alt="Linkedin">
          </a>
          <a href="mailto:marcomonzip@gmail.com?Subject=Vengo%20desde%20tu%20web">
            <img src="${this.assetsBasePath}/email-logo.svg" width="30" alt="Email">
          </a>
          <a href="https://wa.me/692949758" target="_blank">
            <img src="${this.assetsBasePath}/whatsapp-logo.svg" width="30" alt="Whatsapp">
          </a>
        </div>
      </nav>
    `}_toogleBar(){this.shadowRoot.querySelector("nav").classList.toggle("opened")}_mouseOverHandler(e){"mouseenter"===e.type?this.dispatchEvent(new CustomEvent("showBadge",{composed:!0,detail:{alt:e.target.alt,top:e.clientY-30,left:e.clientX}})):"mouseleave"===e.type&&this.dispatchEvent(new CustomEvent("hideBadge",{composed:!0}))}}function l(e){return e=e||[],Array.isArray(e)?e:[e]}function c(e){return"[Vaadin.Router] "+e}customElements.define("social-media-bar",a);const h=["module","nomodule"];function d(e){if(!e.match(/.+\.[m]?js$/))throw new Error(c(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function p(e){if(!e||!v(e.path))throw new Error(c('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(_(e.action)||Array.isArray(e.children)||_(e.children)||g(t)||n.some(t=>v(e[t]))))throw new Error(c(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(v(t))d(t);else{if(!h.some(e=>e in t))throw new Error(c('Expected route bundle to include either "nomodule" or "module" keys, or both'));h.forEach(e=>e in t&&d(t[e]))}e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(c(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function u(e){l(e).forEach(e=>p(e))}function f(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),"module"===t?n.setAttribute("type","module"):"nomodule"===t&&n.setAttribute("nomodule",""),n.async=!0),new Promise((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()})}function m(e,t){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+e,{cancelable:"go"===e,detail:t}))}function g(e){return"object"==typeof e&&!!e}function _(e){return"function"==typeof e}function v(e){return"string"==typeof e}function y(e){const t=new Error(c(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const w=new class{};function b(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:o,hash:i}=t;m("go",{pathname:r,search:o,hash:i})&&e.preventDefault()}const x={activate(){window.document.addEventListener("click",b)},inactivate(){window.document.removeEventListener("click",b)}};function A(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;m("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!_(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const S={activate(){window.addEventListener("popstate",A)},inactivate(){window.removeEventListener("popstate",A)}};var C=H,E=O,P=function(e,t){return T(O(e,t))},R=T,N=V,k=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function O(e,t){for(var n,r=[],o=0,i=0,s="",a=t&&t.delimiter||"/",l=t&&t.delimiters||"./",c=!1;null!==(n=k.exec(e));){var h=n[0],d=n[1],p=n.index;if(s+=e.slice(i,p),i=p+h.length,d)s+=d[1],c=!0;else{var u="",f=e[i],m=n[2],g=n[3],_=n[4],v=n[5];if(!c&&s.length){var y=s.length-1;l.indexOf(s[y])>-1&&(u=s[y],s=s.slice(0,y))}s&&(r.push(s),s="",c=!1);var w=""!==u&&void 0!==f&&f!==u,b="+"===v||"*"===v,x="?"===v||"*"===v,A=u||a,S=g||_;r.push({name:m||o++,prefix:u,delimiter:A,optional:x,repeat:b,partial:w,pattern:S?L(S):"[^"+j(A)+"]+?"})}}return(s||i<e.length)&&r.push(s+e.substr(i)),r}function T(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(l=i(c[h],a),!t[s].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===h?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(l=i(String(c),a),!t[s].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');o+=a.prefix+l}}else o+=a}return o}}function j(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function L(e){return e.replace(/([=!:$/()])/g,"\\$1")}function B(e){return e&&e.sensitive?"":"i"}function V(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,s=j(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(j).concat("$").join("|"),c=o?"^":"",h=0===e.length,d=0;d<e.length;d++){var p=e[d];if("string"==typeof p)c+=j(p),h=d===e.length-1&&a.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+j(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.partial?c+=j(p.prefix)+"("+u+")?":c+="(?:"+j(p.prefix)+"("+u+"))?":c+=j(p.prefix)+"("+u+")"}}return i?(r||(c+="(?:"+s+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+s+"(?="+l+"))?"),h||(c+="(?="+s+"|"+l+")")),new RegExp(c,B(n))}function H(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(H(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",B(n))}(e,t,n):function(e,t,n){return V(O(e,n),t,n)}(e,t,n)}C.parse=E,C.compile=P,C.tokensToFunction=R,C.tokensToRegExp=N;const{hasOwnProperty:M}=Object.prototype,z=new Map;function I(e){try{return decodeURIComponent(e)}catch(t){return e}}function U(e,t,n,r,o){let i,s,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let s=z.get(i);if(!s){const t=[];s={keys:t,pattern:C(e,t,{end:n,strict:""===e})},z.set(i,s)}const a=s.pattern.exec(t);if(!a)return null;const l=Object.assign({},o);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&M.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(I):[]:l[n]=r?I(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:l}}(l,t,!h,r,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;a<h.length;){if(!s){const r=h[a];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),s=U(r,t.substr(o),n,i.keys,i.params)}const r=s.next(c);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function $(e){if(_(e.route.action))return e.route.action(e)}z.set("|false",{keys:[],pattern:/(?:)/});class F{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||$,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){u(e);const t=[...l(e)];this.root.__children=t}addRoutes(e){return u(e),this.root.__children.push(...l(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,v(e)?{pathname:e}:e),n=U(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,s=t;function a(e,l=o.value.route,c){const h=null===c&&o.value.route;return o=i||n.next(h),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,o.value.route)?o.done?Promise.reject(y(t)):(function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};!function(e,t){return!t.parent||!e||!e.length||e[e.length-1].route!==t.parent}(e.chain,n)?e.chain.push(t):e.chain=[t]}}(t,o.value),s=Object.assign({},t,o.value),Promise.resolve(r(s)).then(t=>null!=t&&t!==w?(s.result=t.result||t,s):a(e,l,t))):(i=o,Promise.resolve(w))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}F.pathToRegexp=C;const{pathToRegexp:q}=F,Z=new Map;function D(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function W(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function J(e,t={}){if(!(e instanceof F))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=D(n,r);if(!i&&(n.clear(),function e(t,n,r){const o=n.name||n.component;if(o&&(t.has(o)?t.get(o).push(n):t.set(o,[n])),Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];i.parent=n,e(t,i,i.__children||i.children)}}(n,e.root,e.root.__children),i=D(n,r),!i))throw new Error(`Route "${r}" not found`);let s=Z.get(i.fullPath);if(!s){let e=W(i),t=i.parent;for(;t;){const n=W(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=q.parse(e),r=q.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)v(n[e])||(o[n[e].name]=!0);s={toPath:r,keys:o},Z.set(e,s),i.fullPath=e}let a=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:"?"+r)}return a}}let G=[];function Y(e){G.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),G=e}function K(e,t){return e.classList.add(t),new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style","position: absolute; "+o),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}function X(e){return null!=e}function Q({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:s},a){const l=r.map(e=>e.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>oe(se.pathToRegexp.compile(ie(l))(Object.assign({},o,e)),s)}}function ee(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function te(e,t,n){if(_(e))return e.apply(n,t)}function ne(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?te(n[e],t,n):void 0}function re(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function oe(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function ie(e){return e.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class se extends F{constructor(e,t){const n=document.head.querySelector("base");super([],Object.assign({baseUrl:n&&n.getAttribute("href")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const r=se.NavigationTrigger;se.setTriggers.apply(se,Object.keys(r).map(e=>r[e])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Q({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();_(t.children)&&(n=n.then(()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e))).then(e=>{X(e)||_(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!g(e))throw new Error(c(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=l(e);for(let e=0;e<n.length;e++)p(n[e]),t.__children.push(n[e])}(e,t)}));const r={redirect:t=>ee(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then(()=>{if(this.__isLatestRender(e))return te(t.action,[e,r],t)}).then(e=>{return X(e)&&(e instanceof HTMLElement||e.redirect||e===w)?e:v(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,v(n)?f(n):Promise.race(h.filter(e=>e in n).map(e=>f(n[e],e)))).then(()=>{},()=>{throw new Error(c(`Bundle not found: ${t.bundle}. Check if the file name is correct`))}):void 0;var n}).then(e=>X(e)?e:v(t.component)?r.component(t.component):void 0)}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},v(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then(e=>this.__fullyResolveChain(e)).then(e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Q(e),t&&this.__updateBrowserHistory(e,1===n),m("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then(()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location})}}).catch(e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),re(this.__outlet&&this.__outlet.children),this.location=Q(Object.assign(r,{resolver:this})),m("error",Object.assign({router:this,error:e},r)),e}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(n=>{const r=n!==t?n:e;return n.next().then(e=>{if(null===e||e===w){if(oe(ie(n.chain),n.resolver)!==n.pathname)throw y(r)}return e&&e!==w?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Q(e);const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(e=>this.__findComponentContextAfterAllRedirects(e)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(c(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),s=t=>ee(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=r.length-1;s>=0;s--)n[s].path===r[s].path&&e.search===t.search||(o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[s]));for(let a=0;a<r.length;a++)n[a].path===r[a].path&&e.search===t.search||(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[a])),n[a].element.location=Q(e,n[a].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}for(let t=e.__divergedChainIndex;!e.__skipAttach&&t<r.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[t]);return o.then(t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=Q(t);return e.then(e=>{if(this.__isLatestRender(t)){return ne("onBeforeLeave",[o,n,this],r.element)(e)}}).then(e=>{if(!(e||{}).redirect)return e})}__runOnBeforeEnterCallbacks(e,t,n,r){const o=Q(t,r.route);return e.then(e=>{if(this.__isLatestRender(t)){return ne("onBeforeEnter",[o,n,this],r.element)(e)}})}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(c("Too many redirects when rendering "+e.from));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(c(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(t=>this.__addedByRouter.get(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&re(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(re(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=Q(e);te(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&re(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=Q(e,e.chain[t].route);te(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=g(i)&&i.leave||"leaving",o=g(i)&&i.enter||"entering";r.push(K(t,e)),r.push(K(n,o))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;v(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Y(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=J(this)),oe(this.__urlForName(e,t),this)}urlForPath(e,t){return oe(se.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=v(e)?this.__createUrl(e,"http://a"):e;return m("go",{pathname:t,search:n,hash:r})}}const ae=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,le=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ce(e,t){if("function"!=typeof e)return;const n=ae.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const he=function(e,t){if(window.Vaadin.developmentMode)return ce(e,t)};function de(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(le?!function(){if(le){if(Object.keys(le).map(e=>le[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!ce((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.5.1"}),he(de),se.NavigationTrigger={POPSTATE:S,CLICK:x};class pe extends r.a{static get styles(){return[o.a,r.b`
        :host {
          width: calc(98vw - var(--nav-bar-width));
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
        }

        .presentation-text {
          margin-top: -50px;
          margin-right: 50px;
          margin-left: 50px;
          animation: falling 0.5s ease;
        }

        .presentation-text p {
          font-size: 46px;
          margin: 0 0 15px 0;
        }

        .presentation-text h1 {
          font-family: 'Playfair Display', serif;
          font-size: 62px;
          width: 380px;
          margin: 0 0 20px 0;
          line-height: 62px;
        }

        .presentation-text .description {
          display: block;
          font-size: 28px;
          width: 300px;
        }

        .presentation-buttons button, .presentation-buttons #hire-me {
          position: relative;
          font-size: 14px;
          margin: 20px 20px 0 0;
          cursor: pointer;
          transition: all 0.1s ease;
          border-radius: 0 0 10px 0;
        }

        .presentation-buttons button:hover, .presentation-buttons #hire-me:hover {
          box-shadow: 0 0 10px var(--app-blue-color);
        }
        
        .presentation-buttons button:focus { 
          outline: none;
        }
        
        .presentation-buttons #hire-me {
          background-color: var(--app-blue-color);
          border: 1px solid var(--app-blue-color);
          color: var(--app-grey-color);
          padding: 10px 20px;
          font-weight: 700;
          text-decoration: none;
        }
        
        .presentation-buttons button {
          background-color: transparent;
          border: 1px solid var(--app-blue-color);
          color: var(--app-blue-color);
          padding: 10px 15px;
        }
        
        .presentation-buttons #hire-me span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -7px;
          right: -7px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-grey-color);
          transform: rotate(-45deg);
        }
        
        .presentation-buttons button span {
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: -6px;
          right: -6px;
          background-color: var(--app-grey-color);
          border-top: 1px solid var(--app-blue-color);
          transform: rotate(-45deg);
        }

        .feathers {
          position: relative;
          width: 500px;
          height: 400px;
          animation: fadeIn 1s ease-in;
        }

        img:first-child {
          position: absolute;
          width: 500px;
          transform: rotate(-30deg);
          z-index: 1;
        }

        img:nth-child(2) {
          position: absolute;
          width: 220px;
          transform: translate(40px, -50px) scaleX(-1);
          filter: blur(5px);
        }

        img:last-child {
          position: absolute;
          width: 550px;
          transform: rotate(-60deg) translate(0px, 100px);
          filter: blur(2px);
        }
      `]}static get properties(){return{name:{type:String},job:{type:String},mail:{type:String},assetsBasePath:{type:String}}}constructor(){super(),this.name="MARCOS A. MONZÓN",this.job="Frontend Web Developer",this.mail="marcomonzip@gmail.com",this.assetsBasePath="https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588156329/marcomonzon"}render(){return r.c`
      <div class="presentation-text">
        <p>I am,</p>
        <h1>${this.name}</h1>
        <span class="description"> => ${this.job}</span>
        <div class="presentation-buttons">
          <a id="hire-me" href="mailto:${this.mail}?Subject=Quiero%20contar%20con%20tus%20servicios">HIRE ME</a>
          <a id="download-resume" @click="${this._downloadResume}">
            <button>DOWNLOAD RESUME</button>
          </a>
        </div>
      </div>
      <div class="feathers">
        <img src="${this.assetsBasePath}/feather-image.png" alt="Feather">
        <img src="${this.assetsBasePath}/feather-image.png" alt="Feather">
        <img src="${this.assetsBasePath}/feather-image.png" alt="Feather">
      </div>
    `}_downloadResume(){fetch("https://res.cloudinary.com/dlmrvaeyh/image/upload/v1588150941/M.pdf").then(e=>e.blob()).then(e=>{let t=window.URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="Marcos_Monzon.pdf",n.click()})}}customElements.define("main-view",pe);class ue extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: block;
        }

        .badge {
          position: absolute;
          font-size: 12px;
          color: #fff;
          background: linear-gradient(45deg, var(--app-grey-color), var(--app-blue-color));
          border-radius: 2px;
          padding: 2px 5px;
          z-index: 20;
          display: none;
        }

        @media screen and (min-width: 720px) {
          :host {
            padding-left: var(--nav-bar-width);
          }
        }
      `]}firstUpdated(){(e=>{new se(e,{baseUrl:"/marcosmonzon/"}).setRoutes([{path:"/",redirect:"/home"},{path:"/home",component:"main-view",action:()=>n.e(3).then(n.bind(null,6))},{path:"/work",component:"work-view",action:()=>n.e(3).then(n.bind(null,6))},{path:"/about",component:"about-view",action:()=>n.e(0).then(n.bind(null,4))},{path:"(.*)",component:"view-404",action:()=>n.e(2).then(n.bind(null,5))}])})(this.shadowRoot.querySelector("main"))}connectedCallback(){super.connectedCallback(),this.addEventListener("showBadge",this._openBadge),this.addEventListener("hideBadge",this._hideBadge)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("showBadge",this._openBadge),this.removeEventListener("hideBadge",this._hideBadge)}render(){return r.c`
      <social-media-bar></social-media-bar>
      <nav-bar></nav-bar>
      <main></main>
      <span class="badge"></span>
    `}_openBadge(e){let t=this.shadowRoot.querySelector(".badge");t.textContent=e.detail.alt,t.style.display="block",t.style.top=e.detail.top+"px",t.style.left=e.detail.left+"px"}_hideBadge(){let e=this.shadowRoot.querySelector(".badge");e.textContent="",e.style.display="none",e.style.top=0,e.style.left=0}}customElements.define("app-shell",ue)}]);