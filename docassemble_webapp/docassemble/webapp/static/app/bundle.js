/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*! jQuery Validation Plugin - v1.19.2 - 5/23/2020
 * https://jqueryvalidation.org/
 * Copyright (c) 2020 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});
/*! jQuery Validation Plugin - v1.19.2 - 5/23/2020
 * https://jqueryvalidation.org/
 * Copyright (c) 2020 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")}a.validator.addMethod("maxWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length<=d},a.validator.format("Please enter {0} words or less.")),a.validator.addMethod("minWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length>=d},a.validator.format("Please enter at least {0} words.")),a.validator.addMethod("rangeWords",function(a,c,d){var e=b(a),f=/\b\w+\b/g;return this.optional(c)||e.match(f).length>=d[0]&&e.match(f).length<=d[1]},a.validator.format("Please enter between {0} and {1} words."))}(),a.validator.addMethod("abaRoutingNumber",function(a){var b=0,c=a.split(""),d=c.length;if(9!==d)return!1;for(var e=0;e<d;e+=3)b+=3*parseInt(c[e],10)+7*parseInt(c[e+1],10)+parseInt(c[e+2],10);return 0!==b&&b%10===0},"Please enter a valid routing number."),a.validator.addMethod("accept",function(b,c,d){var e,f,g,h="string"==typeof d?d.replace(/\s/g,""):"image/*",i=this.optional(c);if(i)return i;if("file"===a(c).attr("type")&&(h=h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g,"\\$&").replace(/,/g,"|").replace(/\/\*/g,"/.*"),c.files&&c.files.length))for(g=new RegExp(".?("+h+")$","i"),e=0;e<c.files.length;e++)if(f=c.files[e],!f.type.match(g))return!1;return!0},a.validator.format("Please enter a value with a valid mimetype.")),a.validator.addMethod("alphanumeric",function(a,b){return this.optional(b)||/^\w+$/i.test(a)},"Letters, numbers, and underscores only please"),a.validator.addMethod("bankaccountNL",function(a,b){if(this.optional(b))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a))return!1;var c,d,e,f=a.replace(/ /g,""),g=0,h=f.length;for(c=0;c<h;c++)d=h-c,e=f.substring(c,c+1),g+=d*e;return g%11===0},"Please specify a valid bank account number"),a.validator.addMethod("bankorgiroaccountNL",function(b,c){return this.optional(c)||a.validator.methods.bankaccountNL.call(this,b,c)||a.validator.methods.giroaccountNL.call(this,b,c)},"Please specify a valid bank or giro account number"),a.validator.addMethod("bic",function(a,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())},"Please specify a valid BIC code"),a.validator.addMethod("cifES",function(a,b){"use strict";function c(a){return a%2===0}if(this.optional(b))return!0;var d,e,f,g,h=new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),i=a.substring(0,1),j=a.substring(1,8),k=a.substring(8,9),l=0,m=0,n=0;if(9!==a.length||!h.test(a))return!1;for(d=0;d<j.length;d++)e=parseInt(j[d],10),c(d)?(e*=2,n+=e<10?e:e-9):m+=e;return l=m+n,f=(10-l.toString().substr(-1)).toString(),f=parseInt(f,10)>9?"0":f,g="JABCDEFGHI".substr(f,1).toString(),i.match(/[ABEH]/)?k===f:i.match(/[KPQS]/)?k===g:k===f||k===g},"Please specify a valid CIF number."),a.validator.addMethod("cnhBR",function(a){if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var b,c,d,e,f,g,h=0,i=0;if(b=a.charAt(0),new Array(12).join(b)===a)return!1;for(e=0,f=9,g=0;e<9;++e,--f)h+=+(a.charAt(e)*f);for(c=h%11,c>=10&&(c=0,i=2),h=0,e=0,f=1,g=0;e<9;++e,++f)h+=+(a.charAt(e)*f);return d=h%11,d>=10?d=0:d-=i,String(c).concat(d)===a.substr(-2)},"Please specify a valid CNH number"),a.validator.addMethod("cnpjBR",function(a,b){"use strict";if(this.optional(b))return!0;if(a=a.replace(/[^\d]+/g,""),14!==a.length)return!1;if("00000000000000"===a||"11111111111111"===a||"22222222222222"===a||"33333333333333"===a||"44444444444444"===a||"55555555555555"===a||"66666666666666"===a||"77777777777777"===a||"88888888888888"===a||"99999999999999"===a)return!1;for(var c=a.length-2,d=a.substring(0,c),e=a.substring(c),f=0,g=c-7,h=c;h>=1;h--)f+=d.charAt(c-h)*g--,g<2&&(g=9);var i=f%11<2?0:11-f%11;if(i!==parseInt(e.charAt(0),10))return!1;c+=1,d=a.substring(0,c),f=0,g=c-7;for(var j=c;j>=1;j--)f+=d.charAt(c-j)*g--,g<2&&(g=9);return i=f%11<2?0:11-f%11,i===parseInt(e.charAt(1),10)},"Please specify a CNPJ value number"),a.validator.addMethod("cpfBR",function(a,b){"use strict";if(this.optional(b))return!0;if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var c,d,e,f,g=0;if(c=parseInt(a.substring(9,10),10),d=parseInt(a.substring(10,11),10),e=function(a,b){var c=10*a%11;return 10!==c&&11!==c||(c=0),c===b},""===a||"00000000000"===a||"11111111111"===a||"22222222222"===a||"33333333333"===a||"44444444444"===a||"55555555555"===a||"66666666666"===a||"77777777777"===a||"88888888888"===a||"99999999999"===a)return!1;for(f=1;f<=9;f++)g+=parseInt(a.substring(f-1,f),10)*(11-f);if(e(g,c)){for(g=0,f=1;f<=10;f++)g+=parseInt(a.substring(f-1,f),10)*(12-f);return e(g,d)}return!1},"Please specify a valid CPF number"),a.validator.addMethod("creditcard",function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},"Please enter a valid credit card number."),a.validator.addMethod("creditcardtypes",function(a,b,c){if(/[^0-9\-]+/.test(a))return!1;a=a.replace(/\D/g,"");var d=0;return c.mastercard&&(d|=1),c.visa&&(d|=2),c.amex&&(d|=4),c.dinersclub&&(d|=8),c.enroute&&(d|=16),c.discover&&(d|=32),c.jcb&&(d|=64),c.unknown&&(d|=128),c.all&&(d=255),1&d&&(/^(5[12345])/.test(a)||/^(2[234567])/.test(a))?16===a.length:2&d&&/^(4)/.test(a)?16===a.length:4&d&&/^(3[47])/.test(a)?15===a.length:8&d&&/^(3(0[012345]|[68]))/.test(a)?14===a.length:16&d&&/^(2(014|149))/.test(a)?15===a.length:32&d&&/^(6011)/.test(a)?16===a.length:64&d&&/^(3)/.test(a)?16===a.length:64&d&&/^(2131|1800)/.test(a)?15===a.length:!!(128&d)},"Please enter a valid credit card number."),a.validator.addMethod("currency",function(a,b,c){var d,e="string"==typeof c,f=e?c:c[0],g=!!e||c[1];return f=f.replace(/,/g,""),f=g?f+"]":f+"]?",d="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(b)||d.test(a)},"Please specify a valid currency"),a.validator.addMethod("dateFA",function(a,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)},a.validator.messages.date),a.validator.addMethod("dateITA",function(a,b){var c,d,e,f,g,h=!1,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/;return i.test(a)?(c=a.split("/"),d=parseInt(c[0],10),e=parseInt(c[1],10),f=parseInt(c[2],10),g=new Date(Date.UTC(f,e-1,d,12,0,0,0)),h=g.getUTCFullYear()===f&&g.getUTCMonth()===e-1&&g.getUTCDate()===d):h=!1,this.optional(b)||h},a.validator.messages.date),a.validator.addMethod("dateNL",function(a,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)},a.validator.messages.date),a.validator.addMethod("extension",function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp("\\.("+c+")$","i"))},a.validator.format("Please enter a value with a valid extension.")),a.validator.addMethod("giroaccountNL",function(a,b){return this.optional(b)||/^[0-9]{1,7}$/.test(a)},"Please specify a valid giro account number"),a.validator.addMethod("greaterThan",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-greaterThan-blur").length&&e.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan",function(){a(c).valid()}),b>e.val()},"Please enter a greater value."),a.validator.addMethod("greaterThanEqual",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-greaterThanEqual-blur").length&&e.addClass("validate-greaterThanEqual-blur").on("blur.validate-greaterThanEqual",function(){a(c).valid()}),b>=e.val()},"Please enter a greater value."),a.validator.addMethod("iban",function(a,b){if(this.optional(b))return!0;var c,d,e,f,g,h,i,j,k,l=a.replace(/ /g,"").toUpperCase(),m="",n=!0,o="",p="",q=5;if(l.length<q)return!1;if(c=l.substring(0,2),h={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},g=h[c],"undefined"!=typeof g&&(i=new RegExp("^[A-Z]{2}\\d{2}"+g+"$",""),!i.test(l)))return!1;for(d=l.substring(4,l.length)+l.substring(0,4),j=0;j<d.length;j++)e=d.charAt(j),"0"!==e&&(n=!1),n||(m+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));for(k=0;k<m.length;k++)f=m.charAt(k),p=""+o+f,o=p%97;return 1===o},"Please specify a valid IBAN"),a.validator.addMethod("integer",function(a,b){return this.optional(b)||/^-?\d+$/.test(a)},"A positive or negative non-decimal number please"),a.validator.addMethod("ipv4",function(a,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)},"Please enter a valid IP v4 address."),a.validator.addMethod("ipv6",function(a,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)},"Please enter a valid IP v6 address."),a.validator.addMethod("lessThan",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-lessThan-blur").length&&e.addClass("validate-lessThan-blur").on("blur.validate-lessThan",function(){a(c).valid()}),b<e.val()},"Please enter a lesser value."),a.validator.addMethod("lessThanEqual",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-lessThanEqual-blur").length&&e.addClass("validate-lessThanEqual-blur").on("blur.validate-lessThanEqual",function(){a(c).valid()}),b<=e.val()},"Please enter a lesser value."),a.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please"),a.validator.addMethod("letterswithbasicpunc",function(a,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(a)},"Letters or punctuation only please"),a.validator.addMethod("maxfiles",function(b,c,d){return!!this.optional(c)||!("file"===a(c).attr("type")&&c.files&&c.files.length>d)},a.validator.format("Please select no more than {0} files.")),a.validator.addMethod("maxsize",function(b,c,d){if(this.optional(c))return!0;if("file"===a(c).attr("type")&&c.files&&c.files.length)for(var e=0;e<c.files.length;e++)if(c.files[e].size>d)return!1;return!0},a.validator.format("File size must not exceed {0} bytes each.")),a.validator.addMethod("maxsizetotal",function(b,c,d){if(this.optional(c))return!0;if("file"===a(c).attr("type")&&c.files&&c.files.length)for(var e=0,f=0;f<c.files.length;f++)if(e+=c.files[f].size,e>d)return!1;return!0},a.validator.format("Total size of all files must not exceed {0} bytes.")),a.validator.addMethod("mobileNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid mobile number"),a.validator.addMethod("mobileRU",function(a,b){var c=a.replace(/\(|\)|\s+|-/g,"");return this.optional(b)||c.length>9&&/^((\+7|7|8)+([0-9]){10})$/.test(c)},"Please specify a valid mobile number"),a.validator.addMethod("mobileUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),a.validator.addMethod("netmask",function(a,b){return this.optional(b)||/^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(a)},"Please enter a valid netmask."),a.validator.addMethod("nieES",function(a,b){"use strict";if(this.optional(b))return!0;var c,d=new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),e="TRWAGMYFPDXBNJZSQVHLCKET",f=a.substr(a.length-1).toUpperCase();return a=a.toString().toUpperCase(),!(a.length>10||a.length<9||!d.test(a))&&(a=a.replace(/^[X]/,"0").replace(/^[Y]/,"1").replace(/^[Z]/,"2"),c=9===a.length?a.substr(0,8):a.substr(0,9),e.charAt(parseInt(c,10)%23)===f)},"Please specify a valid NIE number."),a.validator.addMethod("nifES",function(a,b){"use strict";return!!this.optional(b)||(a=a.toUpperCase(),!!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")&&(/^[0-9]{8}[A-Z]{1}$/.test(a)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,0)%23)===a.charAt(8):!!/^[KLM]{1}/.test(a)&&a[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,1)%23)))},"Please specify a valid NIF number."),a.validator.addMethod("nipPL",function(a){"use strict";if(a=a.replace(/[^0-9]/g,""),10!==a.length)return!1;for(var b=[6,5,7,2,3,4,5,6,7],c=0,d=0;d<9;d++)c+=b[d]*a[d];var e=c%11,f=10===e?0:e;return f===parseInt(a[9],10)},"Please specify a valid NIP number."),a.validator.addMethod("nisBR",function(a){var b,c,d,e,f,g=0;if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;for(c=parseInt(a.substring(10,11),10),b=parseInt(a.substring(0,10),10),e=2;e<12;e++)f=e,10===e&&(f=2),11===e&&(f=3),g+=b%10*f,b=parseInt(b/10,10);return d=g%11,d=d>1?11-d:0,c===d},"Please specify a valid NIS/PIS number"),a.validator.addMethod("notEqualTo",function(b,c,d){return this.optional(c)||!a.validator.methods.equalTo.call(this,b,c,d)},"Please enter a different value, values must not be the same."),a.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please"),a.validator.addMethod("pattern",function(a,b,c){return!!this.optional(b)||("string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a))},"Invalid format."),a.validator.addMethod("phoneNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid phone number."),a.validator.addMethod("phonePL",function(a,b){a=a.replace(/\s+/g,"");var c=/^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;return this.optional(b)||c.test(a)},"Please specify a valid phone number"),a.validator.addMethod("phonesUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),a.validator.addMethod("phoneUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),a.validator.addMethod("phoneUS",function(a,b){return a=a.replace(/\s+/g,""),this.optional(b)||a.length>9&&a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),a.validator.addMethod("postalcodeBR",function(a,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)},"Informe um CEP válido."),a.validator.addMethod("postalCodeCA",function(a,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeIT",function(a,b){return this.optional(b)||/^\d{5}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeNL",function(a,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postcodeUK",function(a,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)},"Please specify a valid UK postcode"),a.validator.addMethod("require_from_group",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_req_grp")?f.data("valid_req_grp"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length>=d[0];return f.data("valid_req_grp",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),h},a.validator.format("Please fill at least {0} of these fields.")),a.validator.addMethod("skip_or_fill_minimum",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_skip")?f.data("valid_skip"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length,i=0===h||h>=d[0];return f.data("valid_skip",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),i},a.validator.format("Please either skip these fields or fill at least {0} of them.")),a.validator.addMethod("stateUS",function(a,b,c){var d,e="undefined"==typeof c,f=!e&&"undefined"!=typeof c.caseSensitive&&c.caseSensitive,g=!e&&"undefined"!=typeof c.includeTerritories&&c.includeTerritories,h=!e&&"undefined"!=typeof c.includeMilitary&&c.includeMilitary;return d=g||h?g&&h?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":g?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=f?new RegExp(d):new RegExp(d,"i"),this.optional(b)||d.test(a)},"Please specify a valid state"),a.validator.addMethod("strippedminlength",function(b,c,d){return a(b).text().length>=d},a.validator.format("Please enter at least {0} characters")),a.validator.addMethod("time",function(a,b){return this.optional(b)||/^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)},"Please enter a valid time, between 00:00 and 23:59"),a.validator.addMethod("time12h",function(a,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)},"Please enter a valid time in 12-hour am/pm format"),a.validator.addMethod("url2",function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},a.validator.messages.url),a.validator.addMethod("vinUS",function(a){if(17!==a.length)return!1;var b,c,d,e,f,g,h=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],i=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],j=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],k=0;for(b=0;b<17;b++){if(e=j[b],d=a.slice(b,b+1),8===b&&(g=d),isNaN(d)){for(c=0;c<h.length;c++)if(d.toUpperCase()===h[c]){d=i[c],d*=e,isNaN(g)&&8===c&&(g=h[c]);break}}else d*=e;k+=d}return f=k%11,10===f&&(f="X"),f===g},"The specified vehicle identification number (VIN) is invalid."),a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(a)},"The specified US ZIP Code is invalid"),a.validator.addMethod("ziprange",function(a,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(a)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"),a});
(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *       the user visible viewport of a web browser.
   *       can accounts for vertical position, horizontal, or both
   */
  var $w = $(window);
  $.fn.visible = function (partial, hidden, direction, container) {
    if (this.length < 1) return;

    // Set direction default to 'both'.
    direction = direction || "both";

    var $t = this.length > 1 ? this.eq(0) : this,
      isContained = typeof container !== "undefined" && container !== null,
      $c = isContained ? $(container) : $w,
      wPosition = isContained ? $c.position() : 0,
      t = $t.get(0),
      vpWidth = $c.outerWidth(),
      vpHeight = $c.outerHeight(),
      clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

    if (typeof t.getBoundingClientRect === "function") {
      // Use this native browser method, if available.
      var rec = t.getBoundingClientRect(),
        tViz = isContained
          ? rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top
          : rec.top >= 0 && rec.top < vpHeight,
        bViz = isContained
          ? rec.bottom - wPosition.top > 0 &&
            rec.bottom <= vpHeight + wPosition.top
          : rec.bottom > 0 && rec.bottom <= vpHeight,
        lViz = isContained
          ? rec.left - wPosition.left >= 0 &&
            rec.left < vpWidth + wPosition.left
          : rec.left >= 0 && rec.left < vpWidth,
        rViz = isContained
          ? rec.right - wPosition.left > 0 &&
            rec.right < vpWidth + wPosition.left
          : rec.right > 0 && rec.right <= vpWidth,
        vVisible = partial ? tViz || bViz : tViz && bViz,
        hVisible = partial ? lViz || rViz : lViz && rViz,
        vVisible = rec.top < 0 && rec.bottom > vpHeight ? true : vVisible,
        hVisible = rec.left < 0 && rec.right > vpWidth ? true : hVisible;

      if (direction === "both") return clientSize && vVisible && hVisible;
      else if (direction === "vertical") return clientSize && vVisible;
      else if (direction === "horizontal") return clientSize && hVisible;
    } else {
      var viewTop = isContained ? 0 : wPosition,
        viewBottom = viewTop + vpHeight,
        viewLeft = $c.scrollLeft(),
        viewRight = viewLeft + vpWidth,
        position = $t.position(),
        _top = position.top,
        _bottom = _top + $t.height(),
        _left = position.left,
        _right = _left + $t.width(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom,
        compareLeft = partial === true ? _right : _left,
        compareRight = partial === true ? _left : _right;

      if (direction === "both")
        return (
          !!clientSize &&
          compareBottom <= viewBottom &&
          compareTop >= viewTop &&
          compareRight <= viewRight &&
          compareLeft >= viewLeft
        );
      else if (direction === "vertical")
        return (
          !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop
        );
      else if (direction === "horizontal")
        return (
          !!clientSize && compareRight <= viewRight && compareLeft >= viewLeft
        );
    }
  };
})(jQuery);

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('popper.js')):'function'==typeof define&&define.amd?define(['popper.js'],b):a.Tooltip=b(a.Popper)})(this,function(a){'use strict';function b(a){return a&&'[object Function]'==={}.toString.call(a)}a=a&&a.hasOwnProperty('default')?a['default']:a;var c=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},f={container:!1,delay:0,html:!1,placement:'top',title:'',template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',offset:0},g=function(){function g(a,b){c(this,g),h.call(this),b=e({},f,b),a.jquery&&(a=a[0]),this.reference=a,this.options=b;var d='string'==typeof b.trigger?b.trigger.split(' ').filter(function(a){return-1!==['click','hover','focus'].indexOf(a)}):[];this._isOpen=!1,this._popperOptions={},this._setEventListeners(a,d,b)}return d(g,[{key:'_create',value:function(a,b,c,d){var e=window.document.createElement('div');e.innerHTML=b.trim();var f=e.childNodes[0];f.id='tooltip_'+Math.random().toString(36).substr(2,10),f.setAttribute('aria-hidden','false');var g=e.querySelector(this.innerSelector);return this._addTitleContent(a,c,d,g),f}},{key:'_addTitleContent',value:function(a,c,d,e){if(1===c.nodeType||11===c.nodeType)d&&e.appendChild(c);else if(b(c)){var f=c.call(a);d?e.innerHTML=f:e.textContent=f}else d?e.innerHTML=c:e.textContent=c}},{key:'_show',value:function(b,c){if(this._isOpen&&!this._isOpening)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.display='',this._tooltipNode.setAttribute('aria-hidden','false'),this.popperInstance.update(),this;var d=b.getAttribute('title')||c.title;if(!d)return this;var f=this._create(b,c.template,d,c.html);b.setAttribute('aria-describedby',f.id);var g=this._findContainer(c.container,b);return this._append(f,g),this._popperOptions=e({},c.popperOptions,{placement:c.placement}),this._popperOptions.modifiers=e({},this._popperOptions.modifiers,{arrow:{element:this.arrowSelector},offset:{offset:c.offset}}),c.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:c.boundariesElement}),this.popperInstance=new a(b,f,this._popperOptions),this._tooltipNode=f,this}},{key:'_hide',value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.display='none',this._tooltipNode.setAttribute('aria-hidden','true'),this):this}},{key:'_dispose',value:function(){var a=this;return this._events.forEach(function(b){var c=b.func,d=b.event;a.reference.removeEventListener(d,c)}),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),!this.popperInstance.options.removeOnDestroy&&(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:'_findContainer',value:function(a,b){return'string'==typeof a?a=window.document.querySelector(a):!1===a&&(a=b.parentNode),a}},{key:'_append',value:function(a,b){b.appendChild(a)}},{key:'_setEventListeners',value:function(a,b,c){var d=this,e=[],f=[];b.forEach(function(a){'hover'===a?(e.push('mouseenter'),f.push('mouseleave')):'focus'===a?(e.push('focus'),f.push('blur')):'click'===a?(e.push('click'),f.push('click')):void 0}),e.forEach(function(b){var e=function(b){!0===d._isOpening||(b.usedByTooltip=!0,d._scheduleShow(a,c.delay,c,b))};d._events.push({event:b,func:e}),a.addEventListener(b,e)}),f.forEach(function(b){var e=function(b){!0===b.usedByTooltip||d._scheduleHide(a,c.delay,c,b)};d._events.push({event:b,func:e}),a.addEventListener(b,e)})}},{key:'_scheduleShow',value:function(a,b,c){var d=this;this._isOpening=!0;var e=b&&b.show||b||0;this._showTimeout=window.setTimeout(function(){return d._show(a,c)},e)}},{key:'_scheduleHide',value:function(a,b,c,d){var e=this;this._isOpening=!1;var f=b&&b.hide||b||0;window.setTimeout(function(){if((window.clearTimeout(e._showTimeout),!1!==e._isOpen)&&document.body.contains(e._tooltipNode)){if('mouseleave'===d.type){var f=e._setTooltipNodeEvent(d,a,b,c);if(f)return}e._hide(a,c)}},f)}},{key:'_updateTitleContent',value:function(a){if('undefined'==typeof this._tooltipNode)return void('undefined'!=typeof this.options.title&&(this.options.title=a));var b=this._tooltipNode.parentNode.querySelector(this.innerSelector);this._clearTitleContent(b,this.options.html,this.reference.getAttribute('title')||this.options.title),this._addTitleContent(this.reference,a,this.options.html,b),this.options.title=a,this.popperInstance.update()}},{key:'_clearTitleContent',value:function(a,b,c){1===c.nodeType||11===c.nodeType?b&&a.removeChild(c):b?a.innerHTML='':a.textContent=''}}]),g}(),h=function(){var a=this;this.show=function(){return a._show(a.reference,a.options)},this.hide=function(){return a._hide()},this.dispose=function(){return a._dispose()},this.toggle=function(){return a._isOpen?a.hide():a.show()},this.updateTitleContent=function(b){return a._updateTitleContent(b)},this.arrowSelector='.tooltip-arrow, .tooltip__arrow',this.innerSelector='.tooltip-inner, .tooltip__inner',this._events=[],this._setTooltipNodeEvent=function(b,c,d,e){var f=b.relatedreference||b.toElement||b.relatedTarget;return!!a._tooltipNode.contains(f)&&(a._tooltipNode.addEventListener(b.type,function d(f){var g=f.relatedreference||f.toElement||f.relatedTarget;a._tooltipNode.removeEventListener(b.type,d),c.contains(g)||a._scheduleHide(c,e.delay,e,f)}),!0)}};return g});
//# sourceMappingURL=tooltip.min.js.map

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*! =======================================================
                      VERSION  10.6.2              
========================================================= */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * bootstrap-slider is released under the MIT License
 * Copyright (c) 2019 Kyle Kemp, Rohit Kalkur, and contributors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ========================================================= */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */
var windowIsDefined = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) {
		var jQuery;
		try {
			jQuery = require("jquery");
		} catch (err) {
			jQuery = null;
		}
		module.exports = factory(jQuery);
	} else if (window) {
		window.Slider = factory(window.jQuery);
	}
})(function ($) {
	// Constants
	var NAMESPACE_MAIN = 'slider';
	var NAMESPACE_ALTERNATE = 'bootstrapSlider';

	// Polyfill console methods
	if (windowIsDefined && !window.console) {
		window.console = {};
	}
	if (windowIsDefined && !window.console.log) {
		window.console.log = function () {};
	}
	if (windowIsDefined && !window.console.warn) {
		window.console.warn = function () {};
	}

	// Reference to Slider constructor
	var Slider;

	(function ($) {

		'use strict';

		// -------------------------- utils -------------------------- //

		var slice = Array.prototype.slice;

		function noop() {}

		// -------------------------- definition -------------------------- //

		function defineBridget($) {

			// bail if no jQuery
			if (!$) {
				return;
			}

			// -------------------------- addOptionMethod -------------------------- //

			/**
    * adds option method -> $().plugin('option', {...})
    * @param {Function} PluginClass - constructor class
    */
			function addOptionMethod(PluginClass) {
				// don't overwrite original option method
				if (PluginClass.prototype.option) {
					return;
				}

				// option setter
				PluginClass.prototype.option = function (opts) {
					// bail out if not an object
					if (!$.isPlainObject(opts)) {
						return;
					}
					this.options = $.extend(true, this.options, opts);
				};
			}

			// -------------------------- plugin bridge -------------------------- //

			// helper function for logging errors
			// $.error breaks jQuery chaining
			var logError = typeof console === 'undefined' ? noop : function (message) {
				console.error(message);
			};

			/**
    * jQuery plugin bridge, access methods like $elem.plugin('method')
    * @param {String} namespace - plugin name
    * @param {Function} PluginClass - constructor class
    */
			function bridge(namespace, PluginClass) {
				// add to jQuery fn namespace
				$.fn[namespace] = function (options) {
					if (typeof options === 'string') {
						// call plugin method when first argument is a string
						// get arguments for method
						var args = slice.call(arguments, 1);

						for (var i = 0, len = this.length; i < len; i++) {
							var elem = this[i];
							var instance = $.data(elem, namespace);
							if (!instance) {
								logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
								continue;
							}
							if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
								logError("no such method '" + options + "' for " + namespace + " instance");
								continue;
							}

							// trigger method with arguments
							var returnValue = instance[options].apply(instance, args);

							// break look and return first value if provided
							if (returnValue !== undefined && returnValue !== instance) {
								return returnValue;
							}
						}
						// return this if no return value
						return this;
					} else {
						var objects = this.map(function () {
							var instance = $.data(this, namespace);
							if (instance) {
								// apply options & init
								instance.option(options);
								instance._init();
							} else {
								// initialize new instance
								instance = new PluginClass(this, options);
								$.data(this, namespace, instance);
							}
							return $(this);
						});

						if (objects.length === 1) {
							return objects[0];
						}
						return objects;
					}
				};
			}

			// -------------------------- bridget -------------------------- //

			/**
    * converts a Prototypical class into a proper jQuery plugin
    *   the class must have a ._init method
    * @param {String} namespace - plugin name, used in $().pluginName
    * @param {Function} PluginClass - constructor class
    */
			$.bridget = function (namespace, PluginClass) {
				addOptionMethod(PluginClass);
				bridge(namespace, PluginClass);
			};

			return $.bridget;
		}

		// get jquery from browser global
		defineBridget($);
	})($);

	/*************************************************
 			BOOTSTRAP-SLIDER SOURCE CODE
 	**************************************************/

	(function ($) {
		var autoRegisterNamespace = void 0;

		var ErrorMsgs = {
			formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(input) {
				return "Invalid input value '" + input + "' passed in";
			},
			callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		};

		var SliderScale = {
			linear: {
				getValue: function getValue(value, options) {
					if (value < options.min) {
						return options.min;
					} else if (value > options.max) {
						return options.max;
					} else {
						return value;
					}
				},
				toValue: function toValue(percentage) {
					var rawValue = percentage / 100 * (this.options.max - this.options.min);
					var shouldAdjustWithBase = true;
					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 1; i < this.options.ticks_positions.length; i++) {
							if (percentage <= this.options.ticks_positions[i]) {
								minv = this.options.ticks[i - 1];
								minp = this.options.ticks_positions[i - 1];
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						var partialPercentage = (percentage - minp) / (maxp - minp);
						rawValue = minv + partialPercentage * (maxv - minv);
						shouldAdjustWithBase = false;
					}

					var adjustment = shouldAdjustWithBase ? this.options.min : 0;
					var value = adjustment + Math.round(rawValue / this.options.step) * this.options.step;
					return SliderScale.linear.getValue(value, this.options);
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					}

					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 0; i < this.options.ticks.length; i++) {
							if (value <= this.options.ticks[i]) {
								minv = i > 0 ? this.options.ticks[i - 1] : 0;
								minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						if (i > 0) {
							var partialPercentage = (value - minv) / (maxv - minv);
							return minp + partialPercentage * (maxp - minp);
						}
					}

					return 100 * (value - this.options.min) / (this.options.max - this.options.min);
				}
			},

			logarithmic: {
				/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
				toValue: function toValue(percentage) {
					var offset = 1 - this.options.min;
					var min = Math.log(this.options.min + offset);
					var max = Math.log(this.options.max + offset);
					var value = Math.exp(min + (max - min) * percentage / 100) - offset;
					if (Math.round(value) === max) {
						return max;
					}
					value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
					/* Rounding to the nearest step could exceed the min or
      * max, so clip to those values. */
					return SliderScale.linear.getValue(value, this.options);
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					} else {
						var offset = 1 - this.options.min;
						var max = Math.log(this.options.max + offset);
						var min = Math.log(this.options.min + offset);
						var v = Math.log(value + offset);
						return 100 * (v - min) / (max - min);
					}
				}
			}
		};

		/*************************************************
  						CONSTRUCTOR
  	**************************************************/
		Slider = function Slider(element, options) {
			createNewSlider.call(this, element, options);
			return this;
		};

		function createNewSlider(element, options) {

			/*
   	The internal state object is used to store data about the current 'state' of slider.
   	This includes values such as the `value`, `enabled`, etc...
   */
			this._state = {
				value: null,
				enabled: null,
				offset: null,
				size: null,
				percentage: null,
				inDrag: false,
				over: false,
				tickIndex: null
			};

			// The objects used to store the reference to the tick methods if ticks_tooltip is on
			this.ticksCallbackMap = {};
			this.handleCallbackMap = {};

			if (typeof element === "string") {
				this.element = document.querySelector(element);
			} else if (element instanceof HTMLElement) {
				this.element = element;
			}

			/*************************************************
   					Process Options
   	**************************************************/
			options = options ? options : {};
			var optionTypes = Object.keys(this.defaultOptions);

			var isMinSet = options.hasOwnProperty('min');
			var isMaxSet = options.hasOwnProperty('max');

			for (var i = 0; i < optionTypes.length; i++) {
				var optName = optionTypes[i];

				// First check if an option was passed in via the constructor
				var val = options[optName];
				// If no data attrib, then check data atrributes
				val = typeof val !== 'undefined' ? val : getDataAttrib(this.element, optName);
				// Finally, if nothing was specified, use the defaults
				val = val !== null ? val : this.defaultOptions[optName];

				// Set all options on the instance of the Slider
				if (!this.options) {
					this.options = {};
				}
				this.options[optName] = val;
			}

			this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0;

			// Lock to ticks only when ticks[] is defined and set
			if (!this.ticksAreValid) {
				this.options.lock_to_ticks = false;
			}

			// Check options.rtl
			if (this.options.rtl === 'auto') {
				var computedStyle = window.getComputedStyle(this.element);
				if (computedStyle != null) {
					this.options.rtl = computedStyle.direction === 'rtl';
				} else {
					// Fix for Firefox bug in versions less than 62:
					// https://bugzilla.mozilla.org/show_bug.cgi?id=548397
					// https://bugzilla.mozilla.org/show_bug.cgi?id=1467722
					this.options.rtl = this.element.style.direction === 'rtl';
				}
			}

			/*
   	Validate `tooltip_position` against 'orientation`
   	- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`
   		-- default for "vertical" -> "right", "left" if rtl
   		-- default for "horizontal" -> "top"
   */
			if (this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom")) {
				if (this.options.rtl) {
					this.options.tooltip_position = "left";
				} else {
					this.options.tooltip_position = "right";
				}
			} else if (this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right")) {

				this.options.tooltip_position = "top";
			}

			function getDataAttrib(element, optName) {
				var dataName = "data-slider-" + optName.replace(/_/g, '-');
				var dataValString = element.getAttribute(dataName);

				try {
					return JSON.parse(dataValString);
				} catch (err) {
					return dataValString;
				}
			}

			/*************************************************
   					Create Markup
   	**************************************************/

			var origWidth = this.element.style.width;
			var updateSlider = false;
			var parent = this.element.parentNode;
			var sliderTrackSelection;
			var sliderTrackLow, sliderTrackHigh;
			var sliderMinHandle;
			var sliderMaxHandle;

			if (this.sliderElem) {
				updateSlider = true;
			} else {
				/* Create elements needed for slider */
				this.sliderElem = document.createElement("div");
				this.sliderElem.className = "slider";

				/* Create slider track elements */
				var sliderTrack = document.createElement("div");
				sliderTrack.className = "slider-track";

				sliderTrackLow = document.createElement("div");
				sliderTrackLow.className = "slider-track-low";

				sliderTrackSelection = document.createElement("div");
				sliderTrackSelection.className = "slider-selection";

				sliderTrackHigh = document.createElement("div");
				sliderTrackHigh.className = "slider-track-high";

				sliderMinHandle = document.createElement("div");
				sliderMinHandle.className = "slider-handle min-slider-handle";
				sliderMinHandle.setAttribute('role', 'slider');
				sliderMinHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMinHandle.setAttribute('aria-valuemax', this.options.max);

				sliderMaxHandle = document.createElement("div");
				sliderMaxHandle.className = "slider-handle max-slider-handle";
				sliderMaxHandle.setAttribute('role', 'slider');
				sliderMaxHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMaxHandle.setAttribute('aria-valuemax', this.options.max);

				sliderTrack.appendChild(sliderTrackLow);
				sliderTrack.appendChild(sliderTrackSelection);
				sliderTrack.appendChild(sliderTrackHigh);

				/* Create highlight range elements */
				this.rangeHighlightElements = [];
				var rangeHighlightsOpts = this.options.rangeHighlights;
				if (Array.isArray(rangeHighlightsOpts) && rangeHighlightsOpts.length > 0) {
					for (var j = 0; j < rangeHighlightsOpts.length; j++) {
						var rangeHighlightElement = document.createElement("div");
						var customClassString = rangeHighlightsOpts[j].class || "";
						rangeHighlightElement.className = "slider-rangeHighlight slider-selection " + customClassString;
						this.rangeHighlightElements.push(rangeHighlightElement);
						sliderTrack.appendChild(rangeHighlightElement);
					}
				}

				/* Add aria-labelledby to handle's */
				var isLabelledbyArray = Array.isArray(this.options.labelledby);
				if (isLabelledbyArray && this.options.labelledby[0]) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby[0]);
				}
				if (isLabelledbyArray && this.options.labelledby[1]) {
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby[1]);
				}
				if (!isLabelledbyArray && this.options.labelledby) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby);
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby);
				}

				/* Create ticks */
				this.ticks = [];
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					this.ticksContainer = document.createElement('div');
					this.ticksContainer.className = 'slider-tick-container';

					for (i = 0; i < this.options.ticks.length; i++) {
						var tick = document.createElement('div');
						tick.className = 'slider-tick';
						if (this.options.ticks_tooltip) {
							var tickListenerReference = this._addTickListener();
							var enterCallback = tickListenerReference.addMouseEnter(this, tick, i);
							var leaveCallback = tickListenerReference.addMouseLeave(this, tick);

							this.ticksCallbackMap[i] = {
								mouseEnter: enterCallback,
								mouseLeave: leaveCallback
							};
						}
						this.ticks.push(tick);
						this.ticksContainer.appendChild(tick);
					}

					sliderTrackSelection.className += " tick-slider-selection";
				}

				this.tickLabels = [];
				if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
					this.tickLabelContainer = document.createElement('div');
					this.tickLabelContainer.className = 'slider-tick-label-container';

					for (i = 0; i < this.options.ticks_labels.length; i++) {
						var label = document.createElement('div');
						var noTickPositionsSpecified = this.options.ticks_positions.length === 0;
						var tickLabelsIndex = this.options.reversed && noTickPositionsSpecified ? this.options.ticks_labels.length - (i + 1) : i;
						label.className = 'slider-tick-label';
						label.innerHTML = this.options.ticks_labels[tickLabelsIndex];

						this.tickLabels.push(label);
						this.tickLabelContainer.appendChild(label);
					}
				}

				var createAndAppendTooltipSubElements = function createAndAppendTooltipSubElements(tooltipElem) {
					var arrow = document.createElement("div");
					arrow.className = "tooltip-arrow";

					var inner = document.createElement("div");
					inner.className = "tooltip-inner";

					tooltipElem.appendChild(arrow);
					tooltipElem.appendChild(inner);
				};

				/* Create tooltip elements */
				var sliderTooltip = document.createElement("div");
				sliderTooltip.className = "tooltip tooltip-main";
				sliderTooltip.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltip);

				var sliderTooltipMin = document.createElement("div");
				sliderTooltipMin.className = "tooltip tooltip-min";
				sliderTooltipMin.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMin);

				var sliderTooltipMax = document.createElement("div");
				sliderTooltipMax.className = "tooltip tooltip-max";
				sliderTooltipMax.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMax);

				/* Append components to sliderElem */
				this.sliderElem.appendChild(sliderTrack);
				this.sliderElem.appendChild(sliderTooltip);
				this.sliderElem.appendChild(sliderTooltipMin);
				this.sliderElem.appendChild(sliderTooltipMax);

				if (this.tickLabelContainer) {
					this.sliderElem.appendChild(this.tickLabelContainer);
				}
				if (this.ticksContainer) {
					this.sliderElem.appendChild(this.ticksContainer);
				}

				this.sliderElem.appendChild(sliderMinHandle);
				this.sliderElem.appendChild(sliderMaxHandle);

				/* Append slider element to parent container, right before the original <input> element */
				parent.insertBefore(this.sliderElem, this.element);

				/* Hide original <input> element */
				this.element.style.display = "none";
			}
			/* If JQuery exists, cache JQ references */
			if ($) {
				this.$element = $(this.element);
				this.$sliderElem = $(this.sliderElem);
			}

			/*************************************************
   						Setup
   	**************************************************/
			this.eventToCallbackMap = {};
			this.sliderElem.id = this.options.id;

			this.touchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

			this.touchX = 0;
			this.touchY = 0;

			this.tooltip = this.sliderElem.querySelector('.tooltip-main');
			this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

			this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
			this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

			this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
			this.tooltipInner_max = this.tooltip_max.querySelector('.tooltip-inner');

			if (SliderScale[this.options.scale]) {
				this.options.scale = SliderScale[this.options.scale];
			}

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.sliderElem, 'slider-horizontal');
				this._removeClass(this.sliderElem, 'slider-vertical');
				this._removeClass(this.sliderElem, 'slider-rtl');
				this._removeClass(this.tooltip, 'hide');
				this._removeClass(this.tooltip_min, 'hide');
				this._removeClass(this.tooltip_max, 'hide');

				// Undo existing inline styles for track
				["left", "right", "top", "width", "height"].forEach(function (prop) {
					this._removeProperty(this.trackLow, prop);
					this._removeProperty(this.trackSelection, prop);
					this._removeProperty(this.trackHigh, prop);
				}, this);

				// Undo inline styles on handles
				[this.handle1, this.handle2].forEach(function (handle) {
					this._removeProperty(handle, 'left');
					this._removeProperty(handle, 'right');
					this._removeProperty(handle, 'top');
				}, this);

				// Undo inline styles and classes on tooltips
				[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (tooltip) {
					this._removeProperty(tooltip, 'left');
					this._removeProperty(tooltip, 'right');
					this._removeProperty(tooltip, 'top');

					this._removeClass(tooltip, 'right');
					this._removeClass(tooltip, 'left');
					this._removeClass(tooltip, 'top');
				}, this);
			}

			if (this.options.orientation === 'vertical') {
				this._addClass(this.sliderElem, 'slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
			} else {
				this._addClass(this.sliderElem, 'slider-horizontal');
				this.sliderElem.style.width = origWidth;
				this.options.orientation = 'horizontal';
				if (this.options.rtl) {
					this.stylePos = 'right';
				} else {
					this.stylePos = 'left';
				}
				this.mousePos = 'clientX';
				this.sizePos = 'offsetWidth';
			}
			// specific rtl class
			if (this.options.rtl) {
				this._addClass(this.sliderElem, 'slider-rtl');
			}
			this._setTooltipPosition();
			/* In case ticks are specified, overwrite the min and max bounds */
			if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
				if (!isMaxSet) {
					this.options.max = Math.max.apply(Math, this.options.ticks);
				}
				if (!isMinSet) {
					this.options.min = Math.min.apply(Math, this.options.ticks);
				}
			}

			if (Array.isArray(this.options.value)) {
				this.options.range = true;
				this._state.value = this.options.value;
			} else if (this.options.range) {
				// User wants a range, but value is not an array
				this._state.value = [this.options.value, this.options.max];
			} else {
				this._state.value = this.options.value;
			}

			this.trackLow = sliderTrackLow || this.trackLow;
			this.trackSelection = sliderTrackSelection || this.trackSelection;
			this.trackHigh = sliderTrackHigh || this.trackHigh;

			if (this.options.selection === 'none') {
				this._addClass(this.trackLow, 'hide');
				this._addClass(this.trackSelection, 'hide');
				this._addClass(this.trackHigh, 'hide');
			} else if (this.options.selection === 'after' || this.options.selection === 'before') {
				this._removeClass(this.trackLow, 'hide');
				this._removeClass(this.trackSelection, 'hide');
				this._removeClass(this.trackHigh, 'hide');
			}

			this.handle1 = sliderMinHandle || this.handle1;
			this.handle2 = sliderMaxHandle || this.handle2;

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.handle1, 'round triangle');
				this._removeClass(this.handle2, 'round triangle hide');

				for (i = 0; i < this.ticks.length; i++) {
					this._removeClass(this.ticks[i], 'round triangle hide');
				}
			}

			var availableHandleModifiers = ['round', 'triangle', 'custom'];
			var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
			if (isValidHandleType) {
				this._addClass(this.handle1, this.options.handle);
				this._addClass(this.handle2, this.options.handle);

				for (i = 0; i < this.ticks.length; i++) {
					this._addClass(this.ticks[i], this.options.handle);
				}
			}

			this._state.offset = this._offset(this.sliderElem);
			this._state.size = this.sliderElem[this.sizePos];
			this.setValue(this._state.value);

			/******************************************
   				Bind Event Listeners
   	******************************************/

			// Bind keyboard handlers
			this.handle1Keydown = this._keydown.bind(this, 0);
			this.handle1.addEventListener("keydown", this.handle1Keydown, false);

			this.handle2Keydown = this._keydown.bind(this, 1);
			this.handle2.addEventListener("keydown", this.handle2Keydown, false);

			this.mousedown = this._mousedown.bind(this);
			this.touchstart = this._touchstart.bind(this);
			this.touchmove = this._touchmove.bind(this);

			if (this.touchCapable) {
				this.sliderElem.addEventListener("touchstart", this.touchstart, false);
				this.sliderElem.addEventListener("touchmove", this.touchmove, false);
			}

			this.sliderElem.addEventListener("mousedown", this.mousedown, false);

			// Bind window handlers
			this.resize = this._resize.bind(this);
			window.addEventListener("resize", this.resize, false);

			// Bind tooltip-related handlers
			if (this.options.tooltip === 'hide') {
				this._addClass(this.tooltip, 'hide');
				this._addClass(this.tooltip_min, 'hide');
				this._addClass(this.tooltip_max, 'hide');
			} else if (this.options.tooltip === 'always') {
				this._showTooltip();
				this._alwaysShowTooltip = true;
			} else {
				this.showTooltip = this._showTooltip.bind(this);
				this.hideTooltip = this._hideTooltip.bind(this);

				if (this.options.ticks_tooltip) {
					var callbackHandle = this._addTickListener();
					//create handle1 listeners and store references in map
					var mouseEnter = callbackHandle.addMouseEnter(this, this.handle1);
					var mouseLeave = callbackHandle.addMouseLeave(this, this.handle1);
					this.handleCallbackMap.handle1 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
					//create handle2 listeners and store references in map
					mouseEnter = callbackHandle.addMouseEnter(this, this.handle2);
					mouseLeave = callbackHandle.addMouseLeave(this, this.handle2);
					this.handleCallbackMap.handle2 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
				} else {
					this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
					this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);

					if (this.touchCapable) {
						this.sliderElem.addEventListener("touchstart", this.showTooltip, false);
						this.sliderElem.addEventListener("touchmove", this.showTooltip, false);
						this.sliderElem.addEventListener("touchend", this.hideTooltip, false);
					}
				}

				this.handle1.addEventListener("focus", this.showTooltip, false);
				this.handle1.addEventListener("blur", this.hideTooltip, false);

				this.handle2.addEventListener("focus", this.showTooltip, false);
				this.handle2.addEventListener("blur", this.hideTooltip, false);

				if (this.touchCapable) {
					this.handle1.addEventListener("touchstart", this.showTooltip, false);
					this.handle1.addEventListener("touchmove", this.showTooltip, false);
					this.handle1.addEventListener("touchend", this.hideTooltip, false);

					this.handle2.addEventListener("touchstart", this.showTooltip, false);
					this.handle2.addEventListener("touchmove", this.showTooltip, false);
					this.handle2.addEventListener("touchend", this.hideTooltip, false);
				}
			}

			if (this.options.enabled) {
				this.enable();
			} else {
				this.disable();
			}
		}

		/*************************************************
  				INSTANCE PROPERTIES/METHODS
  	- Any methods bound to the prototype are considered
  part of the plugin's `public` interface
  	**************************************************/
		Slider.prototype = {
			_init: function _init() {}, // NOTE: Must exist to support bridget

			constructor: Slider,

			defaultOptions: {
				id: "",
				min: 0,
				max: 10,
				step: 1,
				precision: 0,
				orientation: 'horizontal',
				value: 5,
				range: false,
				selection: 'before',
				tooltip: 'show',
				tooltip_split: false,
				lock_to_ticks: false,
				handle: 'round',
				reversed: false,
				rtl: 'auto',
				enabled: true,
				formatter: function formatter(val) {
					if (Array.isArray(val)) {
						return val[0] + " : " + val[1];
					} else {
						return val;
					}
				},
				natural_arrow_keys: false,
				ticks: [],
				ticks_positions: [],
				ticks_labels: [],
				ticks_snap_bounds: 0,
				ticks_tooltip: false,
				scale: 'linear',
				focus: false,
				tooltip_position: null,
				labelledby: null,
				rangeHighlights: []
			},

			getElement: function getElement() {
				return this.sliderElem;
			},

			getValue: function getValue() {
				if (this.options.range) {
					return this._state.value;
				} else {
					return this._state.value[0];
				}
			},

			setValue: function setValue(val, triggerSlideEvent, triggerChangeEvent) {
				if (!val) {
					val = 0;
				}
				var oldValue = this.getValue();
				this._state.value = this._validateInputValue(val);
				var applyPrecision = this._applyPrecision.bind(this);

				if (this.options.range) {
					this._state.value[0] = applyPrecision(this._state.value[0]);
					this._state.value[1] = applyPrecision(this._state.value[1]);

					if (this.ticksAreValid && this.options.lock_to_ticks) {
						this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])];
						this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])];
					}

					this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0]));
					this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]));
				} else {
					this._state.value = applyPrecision(this._state.value);

					if (this.ticksAreValid && this.options.lock_to_ticks) {
						this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)];
					}

					this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))];
					this._addClass(this.handle2, 'hide');
					if (this.options.selection === 'after') {
						this._state.value[1] = this.options.max;
					} else {
						this._state.value[1] = this.options.min;
					}
				}

				// Determine which ticks the handle(s) are set at (if applicable)
				this._setTickIndex();

				if (this.options.max > this.options.min) {
					this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)];
				} else {
					this._state.percentage = [0, 0, 100];
				}

				this._layout();
				var newValue = this.options.range ? this._state.value : this._state.value[0];

				this._setDataVal(newValue);
				if (triggerSlideEvent === true) {
					this._trigger('slide', newValue);
				}

				var hasChanged = false;
				if (Array.isArray(newValue)) {
					hasChanged = oldValue[0] !== newValue[0] || oldValue[1] !== newValue[1];
				} else {
					hasChanged = oldValue !== newValue;
				}

				if (hasChanged && triggerChangeEvent === true) {
					this._trigger('change', {
						oldValue: oldValue,
						newValue: newValue
					});
				}

				return this;
			},

			destroy: function destroy() {
				// Remove event handlers on slider elements
				this._removeSliderEventHandlers();

				// Remove the slider from the DOM
				this.sliderElem.parentNode.removeChild(this.sliderElem);
				/* Show original <input> element */
				this.element.style.display = "";

				// Clear out custom event bindings
				this._cleanUpEventCallbacksMap();

				// Remove data values
				this.element.removeAttribute("data");

				// Remove JQuery handlers/data
				if ($) {
					this._unbindJQueryEventHandlers();
					if (autoRegisterNamespace === NAMESPACE_MAIN) {
						this.$element.removeData(autoRegisterNamespace);
					}
					this.$element.removeData(NAMESPACE_ALTERNATE);
				}
			},

			disable: function disable() {
				this._state.enabled = false;
				this.handle1.removeAttribute("tabindex");
				this.handle2.removeAttribute("tabindex");
				this._addClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideDisabled');

				return this;
			},

			enable: function enable() {
				this._state.enabled = true;
				this.handle1.setAttribute("tabindex", 0);
				this.handle2.setAttribute("tabindex", 0);
				this._removeClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideEnabled');

				return this;
			},

			toggle: function toggle() {
				if (this._state.enabled) {
					this.disable();
				} else {
					this.enable();
				}
				return this;
			},

			isEnabled: function isEnabled() {
				return this._state.enabled;
			},

			on: function on(evt, callback) {
				this._bindNonQueryEventHandler(evt, callback);
				return this;
			},

			off: function off(evt, callback) {
				if ($) {
					this.$element.off(evt, callback);
					this.$sliderElem.off(evt, callback);
				} else {
					this._unbindNonQueryEventHandler(evt, callback);
				}
			},

			getAttribute: function getAttribute(attribute) {
				if (attribute) {
					return this.options[attribute];
				} else {
					return this.options;
				}
			},

			setAttribute: function setAttribute(attribute, value) {
				this.options[attribute] = value;
				return this;
			},

			refresh: function refresh(options) {
				var currentValue = this.getValue();
				this._removeSliderEventHandlers();
				createNewSlider.call(this, this.element, this.options);
				// Don't reset slider's value on refresh if `useCurrentValue` is true
				if (options && options.useCurrentValue === true) {
					this.setValue(currentValue);
				}
				if ($) {
					// Bind new instance of slider to the element
					if (autoRegisterNamespace === NAMESPACE_MAIN) {
						$.data(this.element, NAMESPACE_MAIN, this);
						$.data(this.element, NAMESPACE_ALTERNATE, this);
					} else {
						$.data(this.element, NAMESPACE_ALTERNATE, this);
					}
				}
				return this;
			},

			relayout: function relayout() {
				this._resize();
				return this;
			},

			/******************************+
   				HELPERS
   	- Any method that is not part of the public interface.
   - Place it underneath this comment block and write its signature like so:
   		_fnName : function() {...}
   	********************************/
			_removeTooltipListener: function _removeTooltipListener(event, handler) {
				this.handle1.removeEventListener(event, handler, false);
				this.handle2.removeEventListener(event, handler, false);
			},
			_removeSliderEventHandlers: function _removeSliderEventHandlers() {
				// Remove keydown event listeners
				this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
				this.handle2.removeEventListener("keydown", this.handle2Keydown, false);

				//remove the listeners from the ticks and handles if they had their own listeners
				if (this.options.ticks_tooltip) {
					var ticks = this.ticksContainer.getElementsByClassName('slider-tick');
					for (var i = 0; i < ticks.length; i++) {
						ticks[i].removeEventListener('mouseenter', this.ticksCallbackMap[i].mouseEnter, false);
						ticks[i].removeEventListener('mouseleave', this.ticksCallbackMap[i].mouseLeave, false);
					}
					if (this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2) {
						this.handle1.removeEventListener('mouseenter', this.handleCallbackMap.handle1.mouseEnter, false);
						this.handle2.removeEventListener('mouseenter', this.handleCallbackMap.handle2.mouseEnter, false);
						this.handle1.removeEventListener('mouseleave', this.handleCallbackMap.handle1.mouseLeave, false);
						this.handle2.removeEventListener('mouseleave', this.handleCallbackMap.handle2.mouseLeave, false);
					}
				}

				this.handleCallbackMap = null;
				this.ticksCallbackMap = null;

				if (this.showTooltip) {
					this._removeTooltipListener("focus", this.showTooltip);
				}
				if (this.hideTooltip) {
					this._removeTooltipListener("blur", this.hideTooltip);
				}

				// Remove event listeners from sliderElem
				if (this.showTooltip) {
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
				}

				this.sliderElem.removeEventListener("mousedown", this.mousedown, false);

				if (this.touchCapable) {
					// Remove touch event listeners from handles
					if (this.showTooltip) {
						this.handle1.removeEventListener("touchstart", this.showTooltip, false);
						this.handle1.removeEventListener("touchmove", this.showTooltip, false);
						this.handle2.removeEventListener("touchstart", this.showTooltip, false);
						this.handle2.removeEventListener("touchmove", this.showTooltip, false);
					}
					if (this.hideTooltip) {
						this.handle1.removeEventListener("touchend", this.hideTooltip, false);
						this.handle2.removeEventListener("touchend", this.hideTooltip, false);
					}

					// Remove event listeners from sliderElem
					if (this.showTooltip) {
						this.sliderElem.removeEventListener("touchstart", this.showTooltip, false);
						this.sliderElem.removeEventListener("touchmove", this.showTooltip, false);
					}
					if (this.hideTooltip) {
						this.sliderElem.removeEventListener("touchend", this.hideTooltip, false);
					}

					this.sliderElem.removeEventListener("touchstart", this.touchstart, false);
					this.sliderElem.removeEventListener("touchmove", this.touchmove, false);
				}

				// Remove window event listener
				window.removeEventListener("resize", this.resize, false);
			},
			_bindNonQueryEventHandler: function _bindNonQueryEventHandler(evt, callback) {
				if (this.eventToCallbackMap[evt] === undefined) {
					this.eventToCallbackMap[evt] = [];
				}
				this.eventToCallbackMap[evt].push(callback);
			},
			_unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(evt, callback) {
				var callbacks = this.eventToCallbackMap[evt];
				if (callbacks !== undefined) {
					for (var i = 0; i < callbacks.length; i++) {
						if (callbacks[i] === callback) {
							callbacks.splice(i, 1);
							break;
						}
					}
				}
			},
			_cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
				var eventNames = Object.keys(this.eventToCallbackMap);
				for (var i = 0; i < eventNames.length; i++) {
					var eventName = eventNames[i];
					delete this.eventToCallbackMap[eventName];
				}
			},
			_showTooltip: function _showTooltip() {
				if (this.options.tooltip_split === false) {
					this._addClass(this.tooltip, 'show');
					this.tooltip_min.style.display = 'none';
					this.tooltip_max.style.display = 'none';
				} else {
					this._addClass(this.tooltip_min, 'show');
					this._addClass(this.tooltip_max, 'show');
					this.tooltip.style.display = 'none';
				}
				this._state.over = true;
			},
			_hideTooltip: function _hideTooltip() {
				if (this._state.inDrag === false && this._alwaysShowTooltip !== true) {
					this._removeClass(this.tooltip, 'show');
					this._removeClass(this.tooltip_min, 'show');
					this._removeClass(this.tooltip_max, 'show');
				}
				this._state.over = false;
			},
			_setToolTipOnMouseOver: function _setToolTipOnMouseOver(tempState) {
				var self = this;
				var formattedTooltipVal = this.options.formatter(!tempState ? this._state.value[0] : tempState.value[0]);
				var positionPercentages = !tempState ? getPositionPercentages(this._state, this.options.reversed) : getPositionPercentages(tempState, this.options.reversed);
				this._setText(this.tooltipInner, formattedTooltipVal);

				this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";

				function getPositionPercentages(state, reversed) {
					if (reversed) {
						return [100 - state.percentage[0], self.options.range ? 100 - state.percentage[1] : state.percentage[1]];
					}
					return [state.percentage[0], state.percentage[1]];
				}
			},
			_copyState: function _copyState() {
				return {
					value: [this._state.value[0], this._state.value[1]],
					enabled: this._state.enabled,
					offset: this._state.offset,
					size: this._state.size,
					percentage: [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2]],
					inDrag: this._state.inDrag,
					over: this._state.over,
					// deleted or null'd keys
					dragged: this._state.dragged,
					keyCtrl: this._state.keyCtrl
				};
			},
			_addTickListener: function _addTickListener() {
				return {
					addMouseEnter: function addMouseEnter(reference, element, index) {
						var enter = function enter() {
							var tempState = reference._copyState();
							// Which handle is being hovered over?
							var val = element === reference.handle1 ? tempState.value[0] : tempState.value[1];
							var per = void 0;

							// Setup value and percentage for tick's 'mouseenter'
							if (index !== undefined) {
								val = reference.options.ticks[index];
								per = reference.options.ticks_positions.length > 0 && reference.options.ticks_positions[index] || reference._toPercentage(reference.options.ticks[index]);
							} else {
								per = reference._toPercentage(val);
							}

							tempState.value[0] = val;
							tempState.percentage[0] = per;
							reference._setToolTipOnMouseOver(tempState);
							reference._showTooltip();
						};
						element.addEventListener("mouseenter", enter, false);
						return enter;
					},
					addMouseLeave: function addMouseLeave(reference, element) {
						var leave = function leave() {
							reference._hideTooltip();
						};
						element.addEventListener("mouseleave", leave, false);
						return leave;
					}
				};
			},
			_layout: function _layout() {
				var positionPercentages;
				var formattedValue;

				if (this.options.reversed) {
					positionPercentages = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]];
				} else {
					positionPercentages = [this._state.percentage[0], this._state.percentage[1]];
				}

				this.handle1.style[this.stylePos] = positionPercentages[0] + "%";
				this.handle1.setAttribute('aria-valuenow', this._state.value[0]);
				formattedValue = this.options.formatter(this._state.value[0]);
				if (isNaN(formattedValue)) {
					this.handle1.setAttribute('aria-valuetext', formattedValue);
				} else {
					this.handle1.removeAttribute('aria-valuetext');
				}

				this.handle2.style[this.stylePos] = positionPercentages[1] + "%";
				this.handle2.setAttribute('aria-valuenow', this._state.value[1]);
				formattedValue = this.options.formatter(this._state.value[1]);
				if (isNaN(formattedValue)) {
					this.handle2.setAttribute('aria-valuetext', formattedValue);
				} else {
					this.handle2.removeAttribute('aria-valuetext');
				}

				/* Position highlight range elements */
				if (this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) {
					for (var _i = 0; _i < this.options.rangeHighlights.length; _i++) {
						var startPercent = this._toPercentage(this.options.rangeHighlights[_i].start);
						var endPercent = this._toPercentage(this.options.rangeHighlights[_i].end);

						if (this.options.reversed) {
							var sp = 100 - endPercent;
							endPercent = 100 - startPercent;
							startPercent = sp;
						}

						var currentRange = this._createHighlightRange(startPercent, endPercent);

						if (currentRange) {
							if (this.options.orientation === 'vertical') {
								this.rangeHighlightElements[_i].style.top = currentRange.start + "%";
								this.rangeHighlightElements[_i].style.height = currentRange.size + "%";
							} else {
								if (this.options.rtl) {
									this.rangeHighlightElements[_i].style.right = currentRange.start + "%";
								} else {
									this.rangeHighlightElements[_i].style.left = currentRange.start + "%";
								}
								this.rangeHighlightElements[_i].style.width = currentRange.size + "%";
							}
						} else {
							this.rangeHighlightElements[_i].style.display = "none";
						}
					}
				}

				/* Position ticks and labels */
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {

					var styleSize = this.options.orientation === 'vertical' ? 'height' : 'width';
					var styleMargin;
					if (this.options.orientation === 'vertical') {
						styleMargin = 'marginTop';
					} else {
						if (this.options.rtl) {
							styleMargin = 'marginRight';
						} else {
							styleMargin = 'marginLeft';
						}
					}
					var labelSize = this._state.size / (this.options.ticks.length - 1);

					if (this.tickLabelContainer) {
						var extraMargin = 0;
						if (this.options.ticks_positions.length === 0) {
							if (this.options.orientation !== 'vertical') {
								this.tickLabelContainer.style[styleMargin] = -labelSize / 2 + "px";
							}

							extraMargin = this.tickLabelContainer.offsetHeight;
						} else {
							/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */
							for (i = 0; i < this.tickLabelContainer.childNodes.length; i++) {
								if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
									extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
								}
							}
						}
						if (this.options.orientation === 'horizontal') {
							this.sliderElem.style.marginBottom = extraMargin + "px";
						}
					}
					for (var i = 0; i < this.options.ticks.length; i++) {

						var percentage = this.options.ticks_positions[i] || this._toPercentage(this.options.ticks[i]);

						if (this.options.reversed) {
							percentage = 100 - percentage;
						}

						this.ticks[i].style[this.stylePos] = percentage + "%";

						/* Set class labels to denote whether ticks are in the selection */
						this._removeClass(this.ticks[i], 'in-selection');
						if (!this.options.range) {
							if (this.options.selection === 'after' && percentage >= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							}
						} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
							this._addClass(this.ticks[i], 'in-selection');
						}

						if (this.tickLabels[i]) {
							this.tickLabels[i].style[styleSize] = labelSize + "px";

							if (this.options.orientation !== 'vertical' && this.options.ticks_positions[i] !== undefined) {
								this.tickLabels[i].style.position = 'absolute';
								this.tickLabels[i].style[this.stylePos] = percentage + "%";
								this.tickLabels[i].style[styleMargin] = -labelSize / 2 + 'px';
							} else if (this.options.orientation === 'vertical') {
								if (this.options.rtl) {
									this.tickLabels[i].style['marginRight'] = this.sliderElem.offsetWidth + "px";
								} else {
									this.tickLabels[i].style['marginLeft'] = this.sliderElem.offsetWidth + "px";
								}
								this.tickLabelContainer.style[styleMargin] = this.sliderElem.offsetWidth / 2 * -1 + 'px';
							}

							/* Set class labels to indicate tick labels are in the selection or selected */
							this._removeClass(this.tickLabels[i], 'label-in-selection label-is-selection');
							if (!this.options.range) {
								if (this.options.selection === 'after' && percentage >= positionPercentages[0]) {
									this._addClass(this.tickLabels[i], 'label-in-selection');
								} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
									this._addClass(this.tickLabels[i], 'label-in-selection');
								}
								if (percentage === positionPercentages[0]) {
									this._addClass(this.tickLabels[i], 'label-is-selection');
								}
							} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
								this._addClass(this.tickLabels[i], 'label-in-selection');
								if (percentage === positionPercentages[0] || positionPercentages[1]) {
									this._addClass(this.tickLabels[i], 'label-is-selection');
								}
							}
						}
					}
				}

				var formattedTooltipVal;

				if (this.options.range) {
					formattedTooltipVal = this.options.formatter(this._state.value);
					this._setText(this.tooltipInner, formattedTooltipVal);
					this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2 + "%";

					var innerTooltipMinText = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner_min, innerTooltipMinText);

					var innerTooltipMaxText = this.options.formatter(this._state.value[1]);
					this._setText(this.tooltipInner_max, innerTooltipMaxText);

					this.tooltip_min.style[this.stylePos] = positionPercentages[0] + "%";

					this.tooltip_max.style[this.stylePos] = positionPercentages[1] + "%";
				} else {
					formattedTooltipVal = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner, formattedTooltipVal);

					this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
				}

				if (this.options.orientation === 'vertical') {
					this.trackLow.style.top = '0';
					this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					this.trackHigh.style.bottom = '0';
					this.trackHigh.style.height = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';
				} else {
					if (this.stylePos === 'right') {
						this.trackLow.style.right = '0';
					} else {
						this.trackLow.style.left = '0';
					}
					this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackSelection.style.right = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					} else {
						this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					}
					this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackHigh.style.left = '0';
					} else {
						this.trackHigh.style.right = '0';
					}
					this.trackHigh.style.width = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					var offset_min = this.tooltip_min.getBoundingClientRect();
					var offset_max = this.tooltip_max.getBoundingClientRect();

					if (this.options.tooltip_position === 'bottom') {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = '';
							this.tooltip_max.style.bottom = 22 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
							this.tooltip_max.style.bottom = '';
						}
					} else {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = 18 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
						}
					}
				}
			},
			_createHighlightRange: function _createHighlightRange(start, end) {
				if (this._isHighlightRange(start, end)) {
					if (start > end) {
						return { 'start': end, 'size': start - end };
					}
					return { 'start': start, 'size': end - start };
				}
				return null;
			},
			_isHighlightRange: function _isHighlightRange(start, end) {
				if (0 <= start && start <= 100 && 0 <= end && end <= 100) {
					return true;
				} else {
					return false;
				}
			},
			_resize: function _resize(ev) {
				/*jshint unused:false*/
				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];
				this._layout();
			},
			_removeProperty: function _removeProperty(element, prop) {
				if (element.style.removeProperty) {
					element.style.removeProperty(prop);
				} else {
					element.style.removeAttribute(prop);
				}
			},
			_mousedown: function _mousedown(ev) {
				if (!this._state.enabled) {
					return false;
				}

				if (ev.preventDefault) {
					ev.preventDefault();
				}

				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];

				var percentage = this._getPercentage(ev);

				if (this.options.range) {
					var diff1 = Math.abs(this._state.percentage[0] - percentage);
					var diff2 = Math.abs(this._state.percentage[1] - percentage);
					this._state.dragged = diff1 < diff2 ? 0 : 1;
					this._adjustPercentageForRangeSliders(percentage);
				} else {
					this._state.dragged = 0;
				}

				this._state.percentage[this._state.dragged] = percentage;

				if (this.touchCapable) {
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}

				if (this.mousemove) {
					document.removeEventListener("mousemove", this.mousemove, false);
				}
				if (this.mouseup) {
					document.removeEventListener("mouseup", this.mouseup, false);
				}

				this.mousemove = this._mousemove.bind(this);
				this.mouseup = this._mouseup.bind(this);

				if (this.touchCapable) {
					// Touch: Bind touch events:
					document.addEventListener("touchmove", this.mousemove, false);
					document.addEventListener("touchend", this.mouseup, false);
				}
				// Bind mouse events:
				document.addEventListener("mousemove", this.mousemove, false);
				document.addEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = true;
				var newValue = this._calculateValue();

				this._trigger('slideStart', newValue);

				this.setValue(newValue, false, true);

				ev.returnValue = false;

				if (this.options.focus) {
					this._triggerFocusOnHandle(this._state.dragged);
				}

				return true;
			},
			_touchstart: function _touchstart(ev) {
				this._mousedown(ev);
			},
			_triggerFocusOnHandle: function _triggerFocusOnHandle(handleIdx) {
				if (handleIdx === 0) {
					this.handle1.focus();
				}
				if (handleIdx === 1) {
					this.handle2.focus();
				}
			},
			_keydown: function _keydown(handleIdx, ev) {
				if (!this._state.enabled) {
					return false;
				}

				var dir;
				switch (ev.keyCode) {
					case 37: // left
					case 40:
						// down
						dir = -1;
						break;
					case 39: // right
					case 38:
						// up
						dir = 1;
						break;
				}
				if (!dir) {
					return;
				}

				// use natural arrow keys instead of from min to max
				if (this.options.natural_arrow_keys) {
					var isHorizontal = this.options.orientation === 'horizontal';
					var isVertical = this.options.orientation === 'vertical';
					var isRTL = this.options.rtl;
					var isReversed = this.options.reversed;

					if (isHorizontal) {
						if (isRTL) {
							if (!isReversed) {
								dir = -dir;
							}
						} else {
							if (isReversed) {
								dir = -dir;
							}
						}
					} else if (isVertical) {
						if (!isReversed) {
							dir = -dir;
						}
					}
				}

				var val;
				if (this.ticksAreValid && this.options.lock_to_ticks) {
					var index = void 0;
					// Find tick index that handle 1/2 is currently on
					index = this.options.ticks.indexOf(this._state.value[handleIdx]);
					if (index === -1) {
						// Set default to first tick
						index = 0;
						window.console.warn('(lock_to_ticks) _keydown: index should not be -1');
					}
					index += dir;
					index = Math.max(0, Math.min(this.options.ticks.length - 1, index));
					val = this.options.ticks[index];
				} else {
					val = this._state.value[handleIdx] + dir * this.options.step;
				}
				var percentage = this._toPercentage(val);
				this._state.keyCtrl = handleIdx;
				if (this.options.range) {
					this._adjustPercentageForRangeSliders(percentage);
					var val1 = !this._state.keyCtrl ? val : this._state.value[0];
					var val2 = this._state.keyCtrl ? val : this._state.value[1];
					// Restrict values within limits
					val = [Math.max(this.options.min, Math.min(this.options.max, val1)), Math.max(this.options.min, Math.min(this.options.max, val2))];
				} else {
					val = Math.max(this.options.min, Math.min(this.options.max, val));
				}

				this._trigger('slideStart', val);

				this.setValue(val, true, true);

				this._trigger('slideStop', val);

				this._pauseEvent(ev);
				delete this._state.keyCtrl;

				return false;
			},
			_pauseEvent: function _pauseEvent(ev) {
				if (ev.stopPropagation) {
					ev.stopPropagation();
				}
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				ev.cancelBubble = true;
				ev.returnValue = false;
			},
			_mousemove: function _mousemove(ev) {
				if (!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;

				var val = this._calculateValue(true);
				this.setValue(val, true, true);

				return false;
			},
			_touchmove: function _touchmove(ev) {
				if (ev.changedTouches === undefined) {
					return;
				}

				// Prevent page from scrolling and only drag the slider
				if (ev.preventDefault) {
					ev.preventDefault();
				}
			},
			_adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(percentage) {
				if (this.options.range) {
					var precision = this._getNumDigitsAfterDecimalPlace(percentage);
					precision = precision ? precision - 1 : 0;
					var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
					if (this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], precision) < percentageWithAdjustedPrecision) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.dragged = 1;
					} else if (this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], precision) > percentageWithAdjustedPrecision) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.dragged = 0;
					} else if (this._state.keyCtrl === 0 && this._toPercentage(this._state.value[1]) < percentage) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.keyCtrl = 1;
						this.handle2.focus();
					} else if (this._state.keyCtrl === 1 && this._toPercentage(this._state.value[0]) > percentage) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.keyCtrl = 0;
						this.handle1.focus();
					}
				}
			},
			_mouseup: function _mouseup(ev) {
				if (!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;

				if (this.touchCapable) {
					// Touch: Unbind touch event handlers:
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}
				// Unbind mouse event handlers:
				document.removeEventListener("mousemove", this.mousemove, false);
				document.removeEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = false;
				if (this._state.over === false) {
					this._hideTooltip();
				}
				var val = this._calculateValue(true);

				this.setValue(val, false, true);
				this._trigger('slideStop', val);

				// No longer need 'dragged' after mouse up
				this._state.dragged = null;

				return false;
			},
			_setValues: function _setValues(index, val) {
				var comp = 0 === index ? 0 : 100;
				if (this._state.percentage[index] !== comp) {
					val.data[index] = this._toValue(this._state.percentage[index]);
					val.data[index] = this._applyPrecision(val.data[index]);
				}
			},
			_calculateValue: function _calculateValue(snapToClosestTick) {
				var val = {};
				if (this.options.range) {
					val.data = [this.options.min, this.options.max];
					this._setValues(0, val);
					this._setValues(1, val);
					if (snapToClosestTick) {
						val.data[0] = this._snapToClosestTick(val.data[0]);
						val.data[1] = this._snapToClosestTick(val.data[1]);
					}
				} else {
					val.data = this._toValue(this._state.percentage[0]);
					val.data = parseFloat(val.data);
					val.data = this._applyPrecision(val.data);
					if (snapToClosestTick) {
						val.data = this._snapToClosestTick(val.data);
					}
				}

				return val.data;
			},
			_snapToClosestTick: function _snapToClosestTick(val) {
				var min = [val, Infinity];
				for (var i = 0; i < this.options.ticks.length; i++) {
					var diff = Math.abs(this.options.ticks[i] - val);
					if (diff <= min[1]) {
						min = [this.options.ticks[i], diff];
					}
				}
				if (min[1] <= this.options.ticks_snap_bounds) {
					return min[0];
				}
				return val;
			},

			_applyPrecision: function _applyPrecision(val) {
				var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
				return this._applyToFixedAndParseFloat(val, precision);
			},
			_getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(num) {
				var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if (!match) {
					return 0;
				}
				return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
			},
			_applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(num, toFixedInput) {
				var truncatedNum = num.toFixed(toFixedInput);
				return parseFloat(truncatedNum);
			},
			/*
   	Credits to Mike Samuel for the following method!
   	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
   */
			_getPercentage: function _getPercentage(ev) {
				if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove' || ev.type === 'touchend')) {
					ev = ev.changedTouches[0];
				}

				var eventPosition = ev[this.mousePos];
				var sliderOffset = this._state.offset[this.stylePos];
				var distanceToSlide = eventPosition - sliderOffset;
				if (this.stylePos === 'right') {
					distanceToSlide = -distanceToSlide;
				}
				// Calculate what percent of the length the slider handle has slid
				var percentage = distanceToSlide / this._state.size * 100;
				percentage = Math.round(percentage / this._state.percentage[2]) * this._state.percentage[2];
				if (this.options.reversed) {
					percentage = 100 - percentage;
				}

				// Make sure the percent is within the bounds of the slider.
				// 0% corresponds to the 'min' value of the slide
				// 100% corresponds to the 'max' value of the slide
				return Math.max(0, Math.min(100, percentage));
			},
			_validateInputValue: function _validateInputValue(val) {
				if (!isNaN(+val)) {
					return +val;
				} else if (Array.isArray(val)) {
					this._validateArray(val);
					return val;
				} else {
					throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
				}
			},
			_validateArray: function _validateArray(val) {
				for (var i = 0; i < val.length; i++) {
					var input = val[i];
					if (typeof input !== 'number') {
						throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
					}
				}
			},
			_setDataVal: function _setDataVal(val) {
				this.element.setAttribute('data-value', val);
				this.element.setAttribute('value', val);
				this.element.value = val;
			},
			_trigger: function _trigger(evt, val) {
				val = val || val === 0 ? val : undefined;

				var callbackFnArray = this.eventToCallbackMap[evt];
				if (callbackFnArray && callbackFnArray.length) {
					for (var i = 0; i < callbackFnArray.length; i++) {
						var callbackFn = callbackFnArray[i];
						callbackFn(val);
					}
				}

				/* If JQuery exists, trigger JQuery events */
				if ($) {
					this._triggerJQueryEvent(evt, val);
				}
			},
			_triggerJQueryEvent: function _triggerJQueryEvent(evt, val) {
				var eventData = {
					type: evt,
					value: val
				};
				this.$element.trigger(eventData);
				this.$sliderElem.trigger(eventData);
			},
			_unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
				this.$element.off();
				this.$sliderElem.off();
			},
			_setText: function _setText(element, text) {
				if (typeof element.textContent !== "undefined") {
					element.textContent = text;
				} else if (typeof element.innerText !== "undefined") {
					element.innerText = text;
				}
			},
			_removeClass: function _removeClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					newClasses = newClasses.replace(regex, " ");
				}

				element.className = newClasses.trim();
			},
			_addClass: function _addClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					var ifClassExists = regex.test(newClasses);

					if (!ifClassExists) {
						newClasses += " " + classTag;
					}
				}

				element.className = newClasses.trim();
			},
			_offsetLeft: function _offsetLeft(obj) {
				return obj.getBoundingClientRect().left;
			},
			_offsetRight: function _offsetRight(obj) {
				return obj.getBoundingClientRect().right;
			},
			_offsetTop: function _offsetTop(obj) {
				var offsetTop = obj.offsetTop;
				while ((obj = obj.offsetParent) && !isNaN(obj.offsetTop)) {
					offsetTop += obj.offsetTop;
					if (obj.tagName !== 'BODY') {
						offsetTop -= obj.scrollTop;
					}
				}
				return offsetTop;
			},
			_offset: function _offset(obj) {
				return {
					left: this._offsetLeft(obj),
					right: this._offsetRight(obj),
					top: this._offsetTop(obj)
				};
			},
			_css: function _css(elementRef, styleName, value) {
				if ($) {
					$.style(elementRef, styleName, value);
				} else {
					var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (all, letter) {
						return letter.toUpperCase();
					});
					elementRef.style[style] = value;
				}
			},
			_toValue: function _toValue(percentage) {
				return this.options.scale.toValue.apply(this, [percentage]);
			},
			_toPercentage: function _toPercentage(value) {
				return this.options.scale.toPercentage.apply(this, [value]);
			},
			_setTooltipPosition: function _setTooltipPosition() {
				var tooltips = [this.tooltip, this.tooltip_min, this.tooltip_max];
				if (this.options.orientation === 'vertical') {
					var tooltipPos;
					if (this.options.tooltip_position) {
						tooltipPos = this.options.tooltip_position;
					} else {
						if (this.options.rtl) {
							tooltipPos = 'left';
						} else {
							tooltipPos = 'right';
						}
					}
					var oppositeSide = tooltipPos === 'left' ? 'right' : 'left';
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, tooltipPos);
						tooltip.style[oppositeSide] = '100%';
					}.bind(this));
				} else if (this.options.tooltip_position === 'bottom') {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'bottom');
						tooltip.style.top = 22 + 'px';
					}.bind(this));
				} else {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'top');
						tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';
					}.bind(this));
				}
			},
			_getClosestTickIndex: function _getClosestTickIndex(val) {
				var difference = Math.abs(val - this.options.ticks[0]);
				var index = 0;
				for (var i = 0; i < this.options.ticks.length; ++i) {
					var d = Math.abs(val - this.options.ticks[i]);
					if (d < difference) {
						difference = d;
						index = i;
					}
				}
				return index;
			},
			/**
    * Attempts to find the index in `ticks[]` the slider values are set at.
    * The indexes can be -1 to indicate the slider value is not set at a value in `ticks[]`.
    */
			_setTickIndex: function _setTickIndex() {
				if (this.ticksAreValid) {
					this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])];
				}
			}
		};

		/*********************************
  		Attach to global namespace
  	*********************************/
		if ($ && $.fn) {
			if (!$.fn.slider) {
				$.bridget(NAMESPACE_MAIN, Slider);
				autoRegisterNamespace = NAMESPACE_MAIN;
			} else {
				if (windowIsDefined) {
					window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead.");
				}
				autoRegisterNamespace = NAMESPACE_ALTERNATE;
			}
			$.bridget(NAMESPACE_ALTERNATE, Slider);

			// Auto-Register data-provide="slider" Elements
			$(function () {
				$("input[data-provide=slider]")[autoRegisterNamespace]();
			});
		}
	})($);

	return Slider;
});

!function(){"use strict";function e(e){return JSON.parse(JSON.stringify(e))}function t(e){for(var t=y(e);"ÿà"<=t[1].slice(0,2)&&t[1].slice(0,2)<="ÿï";)t=[t[0]].concat(t.slice(2));return t.join("")}function a(e){return s(">"+p("B",e.length),e)}function i(e){return s(">"+p("H",e.length),e)}function n(e){return s(">"+p("L",e.length),e)}function r(e,t,r){var o,l,m,y,c="",S="";if("Byte"==t)o=e.length,4>=o?S=a(e)+p("\x00",4-o):(S=s(">L",[r]),c=a(e));else if("Short"==t)o=e.length,2>=o?S=i(e)+p("\x00\x00",2-o):(S=s(">L",[r]),c=i(e));else if("Long"==t)o=e.length,1>=o?S=n(e):(S=s(">L",[r]),c=n(e));else if("Ascii"==t)l=e+"\x00",o=l.length,o>4?(S=s(">L",[r]),c=l):S=l+p("\x00",4-o);else if("Rational"==t){if("number"==typeof e[0])o=1,m=e[0],y=e[1],l=s(">L",[m])+s(">L",[y]);else{o=e.length,l="";for(var f=0;o>f;f++)m=e[f][0],y=e[f][1],l+=s(">L",[m])+s(">L",[y])}S=s(">L",[r]),c=l}else if("SRational"==t){if("number"==typeof e[0])o=1,m=e[0],y=e[1],l=s(">l",[m])+s(">l",[y]);else{o=e.length,l="";for(var f=0;o>f;f++)m=e[f][0],y=e[f][1],l+=s(">l",[m])+s(">l",[y])}S=s(">L",[r]),c=l}else"Undefined"==t&&(o=e.length,o>4?(S=s(">L",[r]),c=e):S=e+p("\x00",4-o));var h=s(">L",[o]);return[h,S,c]}function o(e,t,a){var i,n=8,o=Object.keys(e).length,l=s(">H",[o]);i=["0th","1st"].indexOf(t)>-1?2+12*o+4:2+12*o;var m,p="",y="";for(var m in e)if("string"==typeof m&&(m=parseInt(m)),!("0th"==t&&[34665,34853].indexOf(m)>-1||"Exif"==t&&40965==m||"1st"==t&&[513,514].indexOf(m)>-1)){var c=e[m],S=s(">H",[m]),f=u[t][m].type,h=s(">H",[g[f]]);"number"==typeof c&&(c=[c]);var d=n+i+a+y.length,P=r(c,f,d),C=P[0],R=P[1],L=P[2];p+=S+h+C+R,y+=L}return[l+p,y]}function l(e){var t,a;if("ÿØ"==e.slice(0,2))t=y(e),a=c(t),a?this.tiftag=a.slice(10):this.tiftag=null;else if(["II","MM"].indexOf(e.slice(0,2))>-1)this.tiftag=e;else{if("Exif"!=e.slice(0,4))throw"Given file is neither JPEG nor TIFF.";this.tiftag=e.slice(6)}}function s(e,t){if(!(t instanceof Array))throw"'pack' error. Got invalid type argument.";if(e.length-1!=t.length)throw"'pack' error. "+(e.length-1)+" marks, "+t.length+" elements.";var a;if("<"==e[0])a=!0;else{if(">"!=e[0])throw"";a=!1}for(var i="",n=1,r=null,o=null,l=null;o=e[n];){if("b"==o.toLowerCase()){if(r=t[n-1],"b"==o&&0>r&&(r+=256),r>255||0>r)throw"'pack' error.";l=String.fromCharCode(r)}else if("H"==o){if(r=t[n-1],r>65535||0>r)throw"'pack' error.";l=String.fromCharCode(Math.floor(r%65536/256))+String.fromCharCode(r%256),a&&(l=l.split("").reverse().join(""))}else{if("l"!=o.toLowerCase())throw"'pack' error.";if(r=t[n-1],"l"==o&&0>r&&(r+=4294967296),r>4294967295||0>r)throw"'pack' error.";l=String.fromCharCode(Math.floor(r/16777216))+String.fromCharCode(Math.floor(r%16777216/65536))+String.fromCharCode(Math.floor(r%65536/256))+String.fromCharCode(r%256),a&&(l=l.split("").reverse().join(""))}i+=l,n+=1}return i}function m(e,t){if("string"!=typeof t)throw"'unpack' error. Got invalid type argument.";for(var a=0,i=1;i<e.length;i++)if("b"==e[i].toLowerCase())a+=1;else if("h"==e[i].toLowerCase())a+=2;else{if("l"!=e[i].toLowerCase())throw"'unpack' error. Got invalid mark.";a+=4}if(a!=t.length)throw"'unpack' error. Mismatch between symbol and string length. "+a+":"+t.length;var n;if("<"==e[0])n=!0;else{if(">"!=e[0])throw"'unpack' error.";n=!1}for(var r=[],o=0,l=1,s=null,m=null,p=null,y="";m=e[l];){if("b"==m.toLowerCase())p=1,y=t.slice(o,o+p),s=y.charCodeAt(0),"b"==m&&s>=128&&(s-=256);else if("H"==m)p=2,y=t.slice(o,o+p),n&&(y=y.split("").reverse().join("")),s=256*y.charCodeAt(0)+y.charCodeAt(1);else{if("l"!=m.toLowerCase())throw"'unpack' error. "+m;p=4,y=t.slice(o,o+p),n&&(y=y.split("").reverse().join("")),s=16777216*y.charCodeAt(0)+65536*y.charCodeAt(1)+256*y.charCodeAt(2)+y.charCodeAt(3),"l"==m&&s>=2147483648&&(s-=4294967296)}r.push(s),o+=p,l+=1}return r}function p(e,t){for(var a="",i=0;t>i;i++)a+=e;return a}function y(e){if("ÿØ"!=e.slice(0,2))throw"Given data isn't JPEG.";for(var t=2,a=["ÿØ"];;){if("ÿÚ"==e.slice(t,t+2)){a.push(e.slice(t));break}var i=m(">H",e.slice(t+2,t+4))[0],n=t+i+2;if(a.push(e.slice(t,n)),t=n,t>=e.length)throw"Wrong JPEG data."}return a}function c(e){for(var t,a=0;a<e.length;a++)if(t=e[a],"ÿá"==t.slice(0,2)&&"Exif\x00\x00"==t.slice(4,10))return t;return null}function S(e,t){return"ÿà"==e[1].slice(0,2)&&"ÿá"==e[2].slice(0,2)&&"Exif\x00\x00"==e[2].slice(4,10)?t?(e[2]=t,e=["ÿØ"].concat(e.slice(2))):e=null==t?e.slice(0,2).concat(e.slice(3)):e.slice(0).concat(e.slice(2)):"ÿà"==e[1].slice(0,2)?t&&(e[1]=t):"ÿá"==e[1].slice(0,2)&&"Exif\x00\x00"==e[1].slice(4,10)?t?e[1]=t:null==t&&(e=e.slice(0).concat(e.slice(2))):t&&(e=[e[0],t].concat(e.slice(1))),e.join("")}var f={};if(f.version="1.03",f.remove=function(e){var t=!1;if("ÿØ"==e.slice(0,2));else{if("data:image/jpeg;base64,"!=e.slice(0,23)&&"data:image/jpg;base64,"!=e.slice(0,22))throw"Given data is not jpeg.";e=d(e.split(",")[1]),t=!0}var a=y(e);if("ÿá"==a[1].slice(0,2)&&"Exif\x00\x00"==a[1].slice(4,10))a=[a[0]].concat(a.slice(2));else{if("ÿá"!=a[2].slice(0,2)||"Exif\x00\x00"!=a[2].slice(4,10))throw"Exif not found.";a=a.slice(0,2).concat(a.slice(3))}var i=a.join("");return t&&(i="data:image/jpeg;base64,"+h(i)),i},f.insert=function(e,t){var a=!1;if("Exif\x00\x00"!=e.slice(0,6))throw"Given data is not exif.";if("ÿØ"==t.slice(0,2));else{if("data:image/jpeg;base64,"!=t.slice(0,23)&&"data:image/jpg;base64,"!=t.slice(0,22))throw"Given data is not jpeg.";t=d(t.split(",")[1]),a=!0}var i="ÿá"+s(">H",[e.length+2])+e,n=y(t),r=S(n,i);return a&&(r="data:image/jpeg;base64,"+h(r)),r},f.load=function(e){var t;if("string"!=typeof e)throw"'load' gots invalid type argument.";if("ÿØ"==e.slice(0,2))t=e;else if("data:image/jpeg;base64,"==e.slice(0,23)||"data:image/jpg;base64,"==e.slice(0,22))t=d(e.split(",")[1]);else{if("Exif"!=e.slice(0,4))throw"'load' gots invalid file data.";t=e.slice(6)}var a={"0th":{},Exif:{},GPS:{},Interop:{},"1st":{},thumbnail:null},i=new l(t);if(null===i.tiftag)return a;"II"==i.tiftag.slice(0,2)?i.endian_mark="<":i.endian_mark=">";var n=m(i.endian_mark+"L",i.tiftag.slice(4,8))[0];a["0th"]=i.get_ifd(n,"0th");var r=a["0th"].first_ifd_pointer;if(delete a["0th"].first_ifd_pointer,34665 in a["0th"]&&(n=a["0th"][34665],a.Exif=i.get_ifd(n,"Exif")),34853 in a["0th"]&&(n=a["0th"][34853],a.GPS=i.get_ifd(n,"GPS")),40965 in a.Exif&&(n=a.Exif[40965],a.Interop=i.get_ifd(n,"Interop")),"\x00\x00\x00\x00"!=r&&(n=m(i.endian_mark+"L",r)[0],a["1st"]=i.get_ifd(n,"1st"),513 in a["1st"]&&514 in a["1st"])){var o=a["1st"][513]+a["1st"][514],s=i.tiftag.slice(a["1st"][513],o);a.thumbnail=s}return a},f.dump=function(a){var i,n,r,l,m,p=8,y=e(a),c="Exif\x00\x00MM\x00*\x00\x00\x00\b",S=!1,h=!1,d=!1,u=!1;i="0th"in y?y["0th"]:{},"Exif"in y&&Object.keys(y.Exif).length||"Interop"in y&&Object.keys(y.Interop).length?(i[34665]=1,S=!0,n=y.Exif,"Interop"in y&&Object.keys(y.Interop).length?(n[40965]=1,d=!0,r=y.Interop):Object.keys(n).indexOf(f.ExifIFD.InteroperabilityTag.toString())>-1&&delete n[40965]):Object.keys(i).indexOf(f.ImageIFD.ExifTag.toString())>-1&&delete i[34665],"GPS"in y&&Object.keys(y.GPS).length?(i[f.ImageIFD.GPSTag]=1,h=!0,l=y.GPS):Object.keys(i).indexOf(f.ImageIFD.GPSTag.toString())>-1&&delete i[f.ImageIFD.GPSTag],"1st"in y&&"thumbnail"in y&&null!=y.thumbnail&&(u=!0,y["1st"][513]=1,y["1st"][514]=1,m=y["1st"]);var P,C,R,L,x,I=o(i,"0th",0),D=I[0].length+12*S+12*h+4+I[1].length,G="",A=0,v="",b=0,T="",k=0,w="";if(S&&(P=o(n,"Exif",D),A=P[0].length+12*d+P[1].length),h&&(C=o(l,"GPS",D+A),v=C.join(""),b=v.length),d){var F=D+A+b;R=o(r,"Interop",F),T=R.join(""),k=T.length}if(u){var F=D+A+b+k;if(L=o(m,"1st",F),x=t(y.thumbnail),x.length>64e3)throw"Given thumbnail is too large. max 64kB"}var B="",E="",M="",O="\x00\x00\x00\x00";if(S){var N=p+D,U=s(">L",[N]),_=34665,H=s(">H",[_]),j=s(">H",[g.Long]),V=s(">L",[1]);B=H+j+V+U}if(h){var N=p+D+A,U=s(">L",[N]),_=34853,H=s(">H",[_]),j=s(">H",[g.Long]),V=s(">L",[1]);E=H+j+V+U}if(d){var N=p+D+A+b,U=s(">L",[N]),_=40965,H=s(">H",[_]),j=s(">H",[g.Long]),V=s(">L",[1]);M=H+j+V+U}if(u){var N=p+D+A+b+k;O=s(">L",[N]);var J=N+L[0].length+24+4+L[1].length,X="\x00\x00\x00\x00"+s(">L",[J]),z="\x00\x00\x00\x00"+s(">L",[x.length]);w=L[0]+X+z+"\x00\x00\x00\x00"+L[1]+x}var Y=I[0]+B+E+O+I[1];return S&&(G=P[0]+M+P[1]),c+Y+G+v+T+w},l.prototype={get_ifd:function(e,t){var a,i={},n=m(this.endian_mark+"H",this.tiftag.slice(e,e+2))[0],r=e+2;a=["0th","1st"].indexOf(t)>-1?"Image":t;for(var o=0;n>o;o++){e=r+12*o;var l=m(this.endian_mark+"H",this.tiftag.slice(e,e+2))[0],s=m(this.endian_mark+"H",this.tiftag.slice(e+2,e+4))[0],p=m(this.endian_mark+"L",this.tiftag.slice(e+4,e+8))[0],y=this.tiftag.slice(e+8,e+12),c=[s,p,y];l in u[a]&&(i[l]=this.convert_value(c))}return"0th"==t&&(e=r+12*n,i.first_ifd_pointer=this.tiftag.slice(e,e+4)),i},convert_value:function(e){var t,a=null,i=e[0],n=e[1],r=e[2];if(1==i)n>4?(t=m(this.endian_mark+"L",r)[0],a=m(this.endian_mark+p("B",n),this.tiftag.slice(t,t+n))):a=m(this.endian_mark+p("B",n),r.slice(0,n));else if(2==i)n>4?(t=m(this.endian_mark+"L",r)[0],a=this.tiftag.slice(t,t+n-1)):a=r.slice(0,n-1);else if(3==i)n>2?(t=m(this.endian_mark+"L",r)[0],a=m(this.endian_mark+p("H",n),this.tiftag.slice(t,t+2*n))):a=m(this.endian_mark+p("H",n),r.slice(0,2*n));else if(4==i)n>1?(t=m(this.endian_mark+"L",r)[0],a=m(this.endian_mark+p("L",n),this.tiftag.slice(t,t+4*n))):a=m(this.endian_mark+p("L",n),r);else if(5==i)if(t=m(this.endian_mark+"L",r)[0],n>1){a=[];for(var o=0;n>o;o++)a.push([m(this.endian_mark+"L",this.tiftag.slice(t+8*o,t+4+8*o))[0],m(this.endian_mark+"L",this.tiftag.slice(t+4+8*o,t+8+8*o))[0]])}else a=[m(this.endian_mark+"L",this.tiftag.slice(t,t+4))[0],m(this.endian_mark+"L",this.tiftag.slice(t+4,t+8))[0]];else if(7==i)n>4?(t=m(this.endian_mark+"L",r)[0],a=this.tiftag.slice(t,t+n)):a=r.slice(0,n);else{if(10!=i)throw"Exif might be wrong. Got incorrect value type to decode. type:"+i;if(t=m(this.endian_mark+"L",r)[0],n>1){a=[];for(var o=0;n>o;o++)a.push([m(this.endian_mark+"l",this.tiftag.slice(t+8*o,t+4+8*o))[0],m(this.endian_mark+"l",this.tiftag.slice(t+4+8*o,t+8+8*o))[0]])}else a=[m(this.endian_mark+"l",this.tiftag.slice(t,t+4))[0],m(this.endian_mark+"l",this.tiftag.slice(t+4,t+8))[0]]}return a instanceof Array&&1==a.length?a[0]:a}},"undefined"!=typeof window&&"function"==typeof window.btoa)var h=window.btoa;if("undefined"==typeof h)var h=function(e){for(var t,a,i,n,r,o,l,s="",m=0,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";m<e.length;)t=e.charCodeAt(m++),a=e.charCodeAt(m++),i=e.charCodeAt(m++),n=t>>2,r=(3&t)<<4|a>>4,o=(15&a)<<2|i>>6,l=63&i,isNaN(a)?o=l=64:isNaN(i)&&(l=64),s=s+p.charAt(n)+p.charAt(r)+p.charAt(o)+p.charAt(l);return s};if("undefined"!=typeof window&&"function"==typeof window.atob)var d=window.atob;if("undefined"==typeof d)var d=function(e){var t,a,i,n,r,o,l,s="",m=0,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");m<e.length;)n=p.indexOf(e.charAt(m++)),r=p.indexOf(e.charAt(m++)),o=p.indexOf(e.charAt(m++)),l=p.indexOf(e.charAt(m++)),t=n<<2|r>>4,a=(15&r)<<4|o>>2,i=(3&o)<<6|l,s+=String.fromCharCode(t),64!=o&&(s+=String.fromCharCode(a)),64!=l&&(s+=String.fromCharCode(i));return s};var g={Byte:1,Ascii:2,Short:3,Long:4,Rational:5,Undefined:7,SLong:9,SRational:10},u={Image:{11:{name:"ProcessingSoftware",type:"Ascii"},254:{name:"NewSubfileType",type:"Long"},255:{name:"SubfileType",type:"Short"},256:{name:"ImageWidth",type:"Long"},257:{name:"ImageLength",type:"Long"},258:{name:"BitsPerSample",type:"Short"},259:{name:"Compression",type:"Short"},262:{name:"PhotometricInterpretation",type:"Short"},263:{name:"Threshholding",type:"Short"},264:{name:"CellWidth",type:"Short"},265:{name:"CellLength",type:"Short"},266:{name:"FillOrder",type:"Short"},269:{name:"DocumentName",type:"Ascii"},270:{name:"ImageDescription",type:"Ascii"},271:{name:"Make",type:"Ascii"},272:{name:"Model",type:"Ascii"},273:{name:"StripOffsets",type:"Long"},274:{name:"Orientation",type:"Short"},277:{name:"SamplesPerPixel",type:"Short"},278:{name:"RowsPerStrip",type:"Long"},279:{name:"StripByteCounts",type:"Long"},282:{name:"XResolution",type:"Rational"},283:{name:"YResolution",type:"Rational"},284:{name:"PlanarConfiguration",type:"Short"},290:{name:"GrayResponseUnit",type:"Short"},291:{name:"GrayResponseCurve",type:"Short"},292:{name:"T4Options",type:"Long"},293:{name:"T6Options",type:"Long"},296:{name:"ResolutionUnit",type:"Short"},301:{name:"TransferFunction",type:"Short"},305:{name:"Software",type:"Ascii"},306:{name:"DateTime",type:"Ascii"},315:{name:"Artist",type:"Ascii"},316:{name:"HostComputer",type:"Ascii"},317:{name:"Predictor",type:"Short"},318:{name:"WhitePoint",type:"Rational"},319:{name:"PrimaryChromaticities",type:"Rational"},320:{name:"ColorMap",type:"Short"},321:{name:"HalftoneHints",type:"Short"},322:{name:"TileWidth",type:"Short"},323:{name:"TileLength",type:"Short"},324:{name:"TileOffsets",type:"Short"},325:{name:"TileByteCounts",type:"Short"},330:{name:"SubIFDs",type:"Long"},332:{name:"InkSet",type:"Short"},333:{name:"InkNames",type:"Ascii"},334:{name:"NumberOfInks",type:"Short"},336:{name:"DotRange",type:"Byte"},337:{name:"TargetPrinter",type:"Ascii"},338:{name:"ExtraSamples",type:"Short"},339:{name:"SampleFormat",type:"Short"},340:{name:"SMinSampleValue",type:"Short"},341:{name:"SMaxSampleValue",type:"Short"},342:{name:"TransferRange",type:"Short"},343:{name:"ClipPath",type:"Byte"},344:{name:"XClipPathUnits",type:"Long"},345:{name:"YClipPathUnits",type:"Long"},346:{name:"Indexed",type:"Short"},347:{name:"JPEGTables",type:"Undefined"},351:{name:"OPIProxy",type:"Short"},512:{name:"JPEGProc",type:"Long"},513:{name:"JPEGInterchangeFormat",type:"Long"},514:{name:"JPEGInterchangeFormatLength",type:"Long"},515:{name:"JPEGRestartInterval",type:"Short"},517:{name:"JPEGLosslessPredictors",type:"Short"},518:{name:"JPEGPointTransforms",type:"Short"},519:{name:"JPEGQTables",type:"Long"},520:{name:"JPEGDCTables",type:"Long"},521:{name:"JPEGACTables",type:"Long"},529:{name:"YCbCrCoefficients",type:"Rational"},530:{name:"YCbCrSubSampling",type:"Short"},531:{name:"YCbCrPositioning",type:"Short"},532:{name:"ReferenceBlackWhite",type:"Rational"},700:{name:"XMLPacket",type:"Byte"},18246:{name:"Rating",type:"Short"},18249:{name:"RatingPercent",type:"Short"},32781:{name:"ImageID",type:"Ascii"},33421:{name:"CFARepeatPatternDim",type:"Short"},33422:{name:"CFAPattern",type:"Byte"},33423:{name:"BatteryLevel",type:"Rational"},33432:{name:"Copyright",type:"Ascii"},33434:{name:"ExposureTime",type:"Rational"},34377:{name:"ImageResources",type:"Byte"},34665:{name:"ExifTag",type:"Long"},34675:{name:"InterColorProfile",type:"Undefined"},34853:{name:"GPSTag",type:"Long"},34857:{name:"Interlace",type:"Short"},34858:{name:"TimeZoneOffset",type:"Long"},34859:{name:"SelfTimerMode",type:"Short"},37387:{name:"FlashEnergy",type:"Rational"},37388:{name:"SpatialFrequencyResponse",type:"Undefined"},37389:{name:"Noise",type:"Undefined"},37390:{name:"FocalPlaneXResolution",type:"Rational"},37391:{name:"FocalPlaneYResolution",type:"Rational"},37392:{name:"FocalPlaneResolutionUnit",type:"Short"},37393:{name:"ImageNumber",type:"Long"},37394:{name:"SecurityClassification",type:"Ascii"},37395:{name:"ImageHistory",type:"Ascii"},37397:{name:"ExposureIndex",type:"Rational"},37398:{name:"TIFFEPStandardID",type:"Byte"},37399:{name:"SensingMethod",type:"Short"},40091:{name:"XPTitle",type:"Byte"},40092:{name:"XPComment",type:"Byte"},40093:{name:"XPAuthor",type:"Byte"},40094:{name:"XPKeywords",type:"Byte"},40095:{name:"XPSubject",type:"Byte"},50341:{name:"PrintImageMatching",type:"Undefined"},50706:{name:"DNGVersion",type:"Byte"},50707:{name:"DNGBackwardVersion",type:"Byte"},50708:{name:"UniqueCameraModel",type:"Ascii"},50709:{name:"LocalizedCameraModel",type:"Byte"},50710:{name:"CFAPlaneColor",type:"Byte"},50711:{name:"CFALayout",type:"Short"},50712:{name:"LinearizationTable",type:"Short"},50713:{name:"BlackLevelRepeatDim",type:"Short"},50714:{name:"BlackLevel",type:"Rational"},50715:{name:"BlackLevelDeltaH",type:"SRational"},50716:{name:"BlackLevelDeltaV",type:"SRational"},50717:{name:"WhiteLevel",type:"Short"},50718:{name:"DefaultScale",type:"Rational"},50719:{name:"DefaultCropOrigin",type:"Short"},50720:{name:"DefaultCropSize",type:"Short"},50721:{name:"ColorMatrix1",type:"SRational"},50722:{name:"ColorMatrix2",type:"SRational"},50723:{name:"CameraCalibration1",type:"SRational"},50724:{name:"CameraCalibration2",type:"SRational"},50725:{name:"ReductionMatrix1",type:"SRational"},50726:{name:"ReductionMatrix2",type:"SRational"},50727:{name:"AnalogBalance",type:"Rational"},50728:{name:"AsShotNeutral",type:"Short"},50729:{name:"AsShotWhiteXY",type:"Rational"},50730:{name:"BaselineExposure",type:"SRational"},50731:{name:"BaselineNoise",type:"Rational"},50732:{name:"BaselineSharpness",type:"Rational"},50733:{name:"BayerGreenSplit",type:"Long"},50734:{name:"LinearResponseLimit",type:"Rational"},50735:{name:"CameraSerialNumber",type:"Ascii"},50736:{name:"LensInfo",type:"Rational"},50737:{name:"ChromaBlurRadius",type:"Rational"},50738:{name:"AntiAliasStrength",type:"Rational"},50739:{name:"ShadowScale",type:"SRational"},50740:{name:"DNGPrivateData",type:"Byte"},50741:{name:"MakerNoteSafety",type:"Short"},50778:{name:"CalibrationIlluminant1",type:"Short"},50779:{name:"CalibrationIlluminant2",type:"Short"},50780:{name:"BestQualityScale",type:"Rational"},50781:{name:"RawDataUniqueID",type:"Byte"},50827:{name:"OriginalRawFileName",type:"Byte"},50828:{name:"OriginalRawFileData",type:"Undefined"},50829:{name:"ActiveArea",type:"Short"},50830:{name:"MaskedAreas",type:"Short"},50831:{name:"AsShotICCProfile",type:"Undefined"},50832:{name:"AsShotPreProfileMatrix",type:"SRational"},50833:{name:"CurrentICCProfile",type:"Undefined"},50834:{name:"CurrentPreProfileMatrix",type:"SRational"},50879:{name:"ColorimetricReference",type:"Short"},50931:{name:"CameraCalibrationSignature",type:"Byte"},50932:{name:"ProfileCalibrationSignature",type:"Byte"},50934:{name:"AsShotProfileName",type:"Byte"},50935:{name:"NoiseReductionApplied",type:"Rational"},50936:{name:"ProfileName",type:"Byte"},50937:{name:"ProfileHueSatMapDims",type:"Long"},50938:{name:"ProfileHueSatMapData1",type:"Float"},50939:{name:"ProfileHueSatMapData2",type:"Float"},50940:{name:"ProfileToneCurve",type:"Float"},50941:{name:"ProfileEmbedPolicy",type:"Long"},50942:{name:"ProfileCopyright",type:"Byte"},50964:{name:"ForwardMatrix1",type:"SRational"},50965:{name:"ForwardMatrix2",type:"SRational"},50966:{name:"PreviewApplicationName",type:"Byte"},50967:{name:"PreviewApplicationVersion",type:"Byte"},50968:{name:"PreviewSettingsName",type:"Byte"},50969:{name:"PreviewSettingsDigest",type:"Byte"},50970:{name:"PreviewColorSpace",type:"Long"},50971:{name:"PreviewDateTime",type:"Ascii"},50972:{name:"RawImageDigest",type:"Undefined"},50973:{name:"OriginalRawFileDigest",type:"Undefined"},50974:{name:"SubTileBlockSize",type:"Long"},50975:{name:"RowInterleaveFactor",type:"Long"},50981:{name:"ProfileLookTableDims",type:"Long"},50982:{name:"ProfileLookTableData",type:"Float"},51008:{name:"OpcodeList1",type:"Undefined"},51009:{name:"OpcodeList2",type:"Undefined"},51022:{name:"OpcodeList3",type:"Undefined"}},Exif:{33434:{name:"ExposureTime",type:"Rational"},33437:{name:"FNumber",type:"Rational"},34850:{name:"ExposureProgram",type:"Short"},34852:{name:"SpectralSensitivity",type:"Ascii"},34855:{name:"ISOSpeedRatings",type:"Short"},34856:{name:"OECF",type:"Undefined"},34864:{name:"SensitivityType",type:"Short"},34865:{name:"StandardOutputSensitivity",type:"Long"},34866:{name:"RecommendedExposureIndex",type:"Long"},34867:{name:"ISOSpeed",type:"Long"},34868:{name:"ISOSpeedLatitudeyyy",type:"Long"},34869:{name:"ISOSpeedLatitudezzz",type:"Long"},36864:{name:"ExifVersion",type:"Undefined"},36867:{name:"DateTimeOriginal",type:"Ascii"},36868:{name:"DateTimeDigitized",type:"Ascii"},37121:{name:"ComponentsConfiguration",type:"Undefined"},37122:{name:"CompressedBitsPerPixel",type:"Rational"},37377:{name:"ShutterSpeedValue",type:"SRational"},37378:{name:"ApertureValue",type:"Rational"},37379:{name:"BrightnessValue",type:"SRational"},37380:{name:"ExposureBiasValue",type:"SRational"},37381:{name:"MaxApertureValue",type:"Rational"},37382:{name:"SubjectDistance",type:"Rational"},37383:{name:"MeteringMode",type:"Short"},37384:{name:"LightSource",type:"Short"},37385:{name:"Flash",type:"Short"},37386:{name:"FocalLength",type:"Rational"},37396:{name:"SubjectArea",type:"Short"},37500:{name:"MakerNote",type:"Undefined"},37510:{name:"UserComment",type:"Ascii"},37520:{name:"SubSecTime",type:"Ascii"},37521:{name:"SubSecTimeOriginal",type:"Ascii"},37522:{name:"SubSecTimeDigitized",type:"Ascii"},40960:{name:"FlashpixVersion",type:"Undefined"},40961:{name:"ColorSpace",type:"Short"},40962:{name:"PixelXDimension",type:"Long"},40963:{name:"PixelYDimension",type:"Long"},40964:{name:"RelatedSoundFile",type:"Ascii"},40965:{name:"InteroperabilityTag",type:"Long"},41483:{name:"FlashEnergy",type:"Rational"},41484:{name:"SpatialFrequencyResponse",type:"Undefined"},41486:{name:"FocalPlaneXResolution",type:"Rational"},41487:{name:"FocalPlaneYResolution",type:"Rational"},41488:{name:"FocalPlaneResolutionUnit",type:"Short"},41492:{name:"SubjectLocation",type:"Short"},41493:{name:"ExposureIndex",type:"Rational"},41495:{name:"SensingMethod",type:"Short"},41728:{name:"FileSource",type:"Undefined"},41729:{name:"SceneType",type:"Undefined"},41730:{name:"CFAPattern",type:"Undefined"},41985:{name:"CustomRendered",type:"Short"},41986:{name:"ExposureMode",type:"Short"},41987:{name:"WhiteBalance",type:"Short"},41988:{name:"DigitalZoomRatio",type:"Rational"},41989:{name:"FocalLengthIn35mmFilm",type:"Short"},41990:{name:"SceneCaptureType",type:"Short"},41991:{name:"GainControl",type:"Short"},41992:{name:"Contrast",type:"Short"},41993:{name:"Saturation",type:"Short"},41994:{name:"Sharpness",type:"Short"},41995:{name:"DeviceSettingDescription",type:"Undefined"},41996:{name:"SubjectDistanceRange",type:"Short"},42016:{name:"ImageUniqueID",type:"Ascii"},42032:{name:"CameraOwnerName",type:"Ascii"},42033:{name:"BodySerialNumber",type:"Ascii"},42034:{name:"LensSpecification",type:"Rational"},42035:{name:"LensMake",type:"Ascii"},42036:{name:"LensModel",type:"Ascii"},42037:{name:"LensSerialNumber",type:"Ascii"},42240:{name:"Gamma",type:"Rational"}},GPS:{0:{name:"GPSVersionID",type:"Byte"},1:{name:"GPSLatitudeRef",type:"Ascii"},2:{name:"GPSLatitude",type:"Rational"},3:{name:"GPSLongitudeRef",type:"Ascii"},4:{name:"GPSLongitude",type:"Rational"},5:{name:"GPSAltitudeRef",type:"Byte"},6:{name:"GPSAltitude",type:"Rational"},7:{name:"GPSTimeStamp",type:"Rational"},8:{name:"GPSSatellites",type:"Ascii"},9:{name:"GPSStatus",type:"Ascii"},10:{name:"GPSMeasureMode",type:"Ascii"},11:{name:"GPSDOP",type:"Rational"},12:{name:"GPSSpeedRef",type:"Ascii"},13:{name:"GPSSpeed",type:"Rational"},14:{name:"GPSTrackRef",type:"Ascii"},15:{name:"GPSTrack",type:"Rational"},16:{name:"GPSImgDirectionRef",type:"Ascii"},17:{name:"GPSImgDirection",type:"Rational"},18:{name:"GPSMapDatum",type:"Ascii"},19:{name:"GPSDestLatitudeRef",type:"Ascii"},20:{name:"GPSDestLatitude",type:"Rational"},21:{name:"GPSDestLongitudeRef",type:"Ascii"},22:{name:"GPSDestLongitude",type:"Rational"},23:{name:"GPSDestBearingRef",type:"Ascii"},24:{name:"GPSDestBearing",type:"Rational"},25:{name:"GPSDestDistanceRef",type:"Ascii"},26:{name:"GPSDestDistance",type:"Rational"},27:{name:"GPSProcessingMethod",type:"Undefined"},28:{name:"GPSAreaInformation",type:"Undefined"},29:{name:"GPSDateStamp",type:"Ascii"},30:{name:"GPSDifferential",type:"Short"},31:{name:"GPSHPositioningError",type:"Rational"}},Interop:{1:{name:"InteroperabilityIndex",type:"Ascii"}}};u["0th"]=u.Image,u["1st"]=u.Image,f.TAGS=u,f.ImageIFD={ProcessingSoftware:11,NewSubfileType:254,SubfileType:255,ImageWidth:256,ImageLength:257,BitsPerSample:258,Compression:259,PhotometricInterpretation:262,Threshholding:263,CellWidth:264,CellLength:265,FillOrder:266,DocumentName:269,ImageDescription:270,Make:271,Model:272,StripOffsets:273,Orientation:274,SamplesPerPixel:277,RowsPerStrip:278,StripByteCounts:279,XResolution:282,YResolution:283,PlanarConfiguration:284,GrayResponseUnit:290,GrayResponseCurve:291,T4Options:292,T6Options:293,ResolutionUnit:296,TransferFunction:301,Software:305,DateTime:306,Artist:315,HostComputer:316,Predictor:317,WhitePoint:318,PrimaryChromaticities:319,ColorMap:320,HalftoneHints:321,TileWidth:322,TileLength:323,TileOffsets:324,TileByteCounts:325,SubIFDs:330,InkSet:332,InkNames:333,NumberOfInks:334,DotRange:336,TargetPrinter:337,ExtraSamples:338,SampleFormat:339,SMinSampleValue:340,SMaxSampleValue:341,TransferRange:342,ClipPath:343,XClipPathUnits:344,YClipPathUnits:345,Indexed:346,JPEGTables:347,OPIProxy:351,JPEGProc:512,JPEGInterchangeFormat:513,JPEGInterchangeFormatLength:514,JPEGRestartInterval:515,JPEGLosslessPredictors:517,JPEGPointTransforms:518,JPEGQTables:519,JPEGDCTables:520,JPEGACTables:521,YCbCrCoefficients:529,YCbCrSubSampling:530,YCbCrPositioning:531,ReferenceBlackWhite:532,XMLPacket:700,Rating:18246,RatingPercent:18249,ImageID:32781,CFARepeatPatternDim:33421,CFAPattern:33422,BatteryLevel:33423,Copyright:33432,ExposureTime:33434,ImageResources:34377,ExifTag:34665,InterColorProfile:34675,GPSTag:34853,Interlace:34857,TimeZoneOffset:34858,SelfTimerMode:34859,FlashEnergy:37387,SpatialFrequencyResponse:37388,Noise:37389,FocalPlaneXResolution:37390,FocalPlaneYResolution:37391,FocalPlaneResolutionUnit:37392,ImageNumber:37393,SecurityClassification:37394,ImageHistory:37395,ExposureIndex:37397,TIFFEPStandardID:37398,SensingMethod:37399,XPTitle:40091,XPComment:40092,XPAuthor:40093,XPKeywords:40094,XPSubject:40095,PrintImageMatching:50341,DNGVersion:50706,DNGBackwardVersion:50707,UniqueCameraModel:50708,LocalizedCameraModel:50709,CFAPlaneColor:50710,CFALayout:50711,LinearizationTable:50712,BlackLevelRepeatDim:50713,BlackLevel:50714,BlackLevelDeltaH:50715,BlackLevelDeltaV:50716,WhiteLevel:50717,DefaultScale:50718,DefaultCropOrigin:50719,DefaultCropSize:50720,ColorMatrix1:50721,ColorMatrix2:50722,CameraCalibration1:50723,CameraCalibration2:50724,ReductionMatrix1:50725,ReductionMatrix2:50726,AnalogBalance:50727,AsShotNeutral:50728,AsShotWhiteXY:50729,BaselineExposure:50730,BaselineNoise:50731,BaselineSharpness:50732,BayerGreenSplit:50733,LinearResponseLimit:50734,CameraSerialNumber:50735,LensInfo:50736,ChromaBlurRadius:50737,AntiAliasStrength:50738,ShadowScale:50739,DNGPrivateData:50740,MakerNoteSafety:50741,CalibrationIlluminant1:50778,CalibrationIlluminant2:50779,BestQualityScale:50780,RawDataUniqueID:50781,OriginalRawFileName:50827,OriginalRawFileData:50828,ActiveArea:50829,MaskedAreas:50830,AsShotICCProfile:50831,AsShotPreProfileMatrix:50832,CurrentICCProfile:50833,CurrentPreProfileMatrix:50834,ColorimetricReference:50879,CameraCalibrationSignature:50931,ProfileCalibrationSignature:50932,AsShotProfileName:50934,NoiseReductionApplied:50935,ProfileName:50936,ProfileHueSatMapDims:50937,ProfileHueSatMapData1:50938,ProfileHueSatMapData2:50939,ProfileToneCurve:50940,ProfileEmbedPolicy:50941,ProfileCopyright:50942,ForwardMatrix1:50964,ForwardMatrix2:50965,PreviewApplicationName:50966,PreviewApplicationVersion:50967,PreviewSettingsName:50968,PreviewSettingsDigest:50969,PreviewColorSpace:50970,PreviewDateTime:50971,RawImageDigest:50972,OriginalRawFileDigest:50973,SubTileBlockSize:50974,RowInterleaveFactor:50975,ProfileLookTableDims:50981,ProfileLookTableData:50982,OpcodeList1:51008,OpcodeList2:51009,OpcodeList3:51022,NoiseProfile:51041},f.ExifIFD={ExposureTime:33434,FNumber:33437,ExposureProgram:34850,SpectralSensitivity:34852,ISOSpeedRatings:34855,OECF:34856,SensitivityType:34864,StandardOutputSensitivity:34865,RecommendedExposureIndex:34866,ISOSpeed:34867,ISOSpeedLatitudeyyy:34868,ISOSpeedLatitudezzz:34869,ExifVersion:36864,DateTimeOriginal:36867,DateTimeDigitized:36868,ComponentsConfiguration:37121,CompressedBitsPerPixel:37122,ShutterSpeedValue:37377,ApertureValue:37378,BrightnessValue:37379,ExposureBiasValue:37380,MaxApertureValue:37381,SubjectDistance:37382,MeteringMode:37383,LightSource:37384,Flash:37385,FocalLength:37386,SubjectArea:37396,MakerNote:37500,UserComment:37510,SubSecTime:37520,SubSecTimeOriginal:37521,SubSecTimeDigitized:37522,FlashpixVersion:40960,ColorSpace:40961,PixelXDimension:40962,PixelYDimension:40963,RelatedSoundFile:40964,InteroperabilityTag:40965,FlashEnergy:41483,SpatialFrequencyResponse:41484,FocalPlaneXResolution:41486,FocalPlaneYResolution:41487,FocalPlaneResolutionUnit:41488,SubjectLocation:41492,ExposureIndex:41493,SensingMethod:41495,FileSource:41728,SceneType:41729,CFAPattern:41730,CustomRendered:41985,ExposureMode:41986,WhiteBalance:41987,DigitalZoomRatio:41988,FocalLengthIn35mmFilm:41989,SceneCaptureType:41990,GainControl:41991,Contrast:41992,Saturation:41993,Sharpness:41994,DeviceSettingDescription:41995,SubjectDistanceRange:41996,ImageUniqueID:42016,CameraOwnerName:42032,BodySerialNumber:42033,LensSpecification:42034,LensMake:42035,LensModel:42036,LensSerialNumber:42037,Gamma:42240},f.GPSIFD={GPSVersionID:0,GPSLatitudeRef:1,GPSLatitude:2,GPSLongitudeRef:3,GPSLongitude:4,GPSAltitudeRef:5,GPSAltitude:6,GPSTimeStamp:7,GPSSatellites:8,GPSStatus:9,GPSMeasureMode:10,GPSDOP:11,GPSSpeedRef:12,GPSSpeed:13,GPSTrackRef:14,GPSTrack:15,GPSImgDirectionRef:16,GPSImgDirection:17,GPSMapDatum:18,GPSDestLatitudeRef:19,GPSDestLatitude:20,GPSDestLongitudeRef:21,GPSDestLongitude:22,GPSDestBearingRef:23,GPSDestBearing:24,GPSDestDistanceRef:25,GPSDestDistance:26,GPSProcessingMethod:27,GPSAreaInformation:28,GPSDateStamp:29,GPSDifferential:30,GPSHPositioningError:31},f.InteropIFD={InteroperabilityIndex:1},f.GPSHelper={degToDmsRational:function(e){var t=e%1*60,a=t%1*60,i=Math.floor(e),n=Math.floor(t),r=Math.round(100*a);return[[i,1],[n,1],[r,100]]}},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=f),exports.piexif=f):window.piexif=f}();
/*!
 * bootstrap-fileinput v5.1.3
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2020, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */
(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    if (typeof module === "object" && module.exports) {
      //noinspection NpmUsedModulesInstalled
      module.exports = factory(require("jquery"));
    } else {
      factory(window.jQuery);
    }
  }
})(function ($) {
  "use strict";

  $.fn.fileinputLocales = {};
  $.fn.fileinputThemes = {};

  String.prototype.setTokens = function (replacePairs) {
    var str = this.toString(),
      key,
      re;
    for (key in replacePairs) {
      if (replacePairs.hasOwnProperty(key)) {
        re = new RegExp("{" + key + "}", "g");
        str = str.replace(re, replacePairs[key]);
      }
    }
    return str;
  };

  if (!Array.prototype.flatMap) {
    // polyfill flatMap
    Array.prototype.flatMap = function (lambda) {
      return [].concat(this.map(lambda));
    };
  }

  var $h, FileInput;

  // fileinput helper object for all global variables and internal helper methods
  $h = {
    FRAMES: ".kv-preview-thumb",
    SORT_CSS: "file-sortable",
    INIT_FLAG: "init-",
    OBJECT_PARAMS:
      '<param name="controller" value="true" />\n' +
      '<param name="allowFullScreen" value="true" />\n' +
      '<param name="allowScriptAccess" value="always" />\n' +
      '<param name="autoPlay" value="false" />\n' +
      '<param name="autoStart" value="false" />\n' +
      '<param name="quality" value="high" />\n',
    DEFAULT_PREVIEW:
      '<div class="file-preview-other">\n' +
      '<span class="{previewFileIconClass}">{previewFileIcon}</span>\n' +
      "</div>",
    MODAL_ID: "kvFileinputModal",
    MODAL_EVENTS: ["show", "shown", "hide", "hidden", "loaded"],
    logMessages: {
      ajaxError: "{status}: {error}. Error Details: {text}.",
      badDroppedFiles: "Error scanning dropped files!",
      badExifParser: "Error loading the piexif.js library. {details}",
      badInputType:
        'The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.',
      exifWarning:
        'To avoid this warning, either set "autoOrientImage" to "false" OR ensure you have loaded ' +
        'the "piexif.js" library correctly on your page before the "fileinput.js" script.',
      invalidChunkSize:
        'Invalid upload chunk size: "{chunkSize}". Resumable uploads are disabled.',
      invalidThumb: 'Invalid thumb frame with id: "{id}".',
      noResumableSupport:
        "The browser does not support resumable or chunk uploads.",
      noUploadUrl:
        'The "uploadUrl" is not set. Ajax uploads and resumable uploads have been disabled.',
      retryStatus:
        "Retrying upload for chunk # {chunk} for {filename}... retry # {retry}.",
      chunkQueueError:
        "Could not push task to ajax pool for chunk index # {index}.",
      resumableMaxRetriesReached:
        "Maximum resumable ajax retries ({n}) reached.",
      resumableRetryError:
        "Could not retry the resumable request (try # {n})... aborting.",
      resumableAborting: "Aborting / cancelling the resumable request.",
    },
    objUrl: window.URL || window.webkitURL,
    now: function () {
      return new Date().getTime();
    },
    round: function (num) {
      num = parseFloat(num);
      return isNaN(num) ? 0 : Math.floor(Math.round(num));
    },
    getArray: function (obj) {
      var i,
        arr = [],
        len = (obj && obj.length) || 0;
      for (i = 0; i < len; i++) {
        arr.push(obj[i]);
      }
      return arr;
    },
    getFileRelativePath: function (file) {
      /** @namespace file.relativePath */
      /** @namespace file.webkitRelativePath */
      return String(
        file.newPath ||
          file.relativePath ||
          file.webkitRelativePath ||
          $h.getFileName(file) ||
          null
      );
    },
    getFileId: function (file, generateFileId) {
      var relativePath = $h.getFileRelativePath(file);
      if (typeof generateFileId === "function") {
        return generateFileId(file);
      }
      if (!file) {
        return null;
      }
      if (!relativePath) {
        return null;
      }
      return file.size + "_" + relativePath.replace(/\s/gim, "_");
    },
    getFrameSelector: function (id, selector) {
      selector = selector || "";
      return '[id="' + id + '"]' + selector;
    },
    getZoomSelector: function (id, selector) {
      return $h.getFrameSelector("zoom-" + id, selector);
    },
    getFrameElement: function ($element, id, selector) {
      return $element.find($h.getFrameSelector(id, selector));
    },
    getZoomElement: function ($element, id, selector) {
      return $element.find($h.getZoomSelector(id, selector));
    },
    getElapsed: function (seconds) {
      var delta = seconds,
        out = "",
        result = {},
        structure = {
          year: 31536000,
          month: 2592000,
          week: 604800, // uncomment row to ignore
          day: 86400, // feel free to add your own row
          hour: 3600,
          minute: 60,
          second: 1,
        };
      $h.getObjectKeys(structure).forEach(function (key) {
        result[key] = Math.floor(delta / structure[key]);
        delta -= result[key] * structure[key];
      });
      $.each(result, function (key, value) {
        if (value > 0) {
          out += (out ? " " : "") + value + key.substring(0, 1);
        }
      });
      return out;
    },
    debounce: function (func, delay) {
      var inDebounce;
      return function () {
        var args = arguments,
          context = this;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(function () {
          func.apply(context, args);
        }, delay);
      };
    },
    stopEvent: function (e) {
      e.stopPropagation();
      e.preventDefault();
    },
    getFileName: function (file) {
      /** @namespace file.fileName */
      return file ? file.fileName || file.name || "" : ""; // some confusion in different versions of Firefox
    },
    createObjectURL: function (data) {
      if ($h.objUrl && $h.objUrl.createObjectURL && data) {
        return $h.objUrl.createObjectURL(data);
      }
      return "";
    },
    revokeObjectURL: function (data) {
      if ($h.objUrl && $h.objUrl.revokeObjectURL && data) {
        $h.objUrl.revokeObjectURL(data);
      }
    },
    compare: function (input, str, exact) {
      return input !== undefined && (exact ? input === str : input.match(str));
    },
    isIE: function (ver) {
      var div, status;
      // check for IE versions < 11
      if (navigator.appName !== "Microsoft Internet Explorer") {
        return false;
      }
      if (ver === 10) {
        return new RegExp("msie\\s" + ver, "i").test(navigator.userAgent);
      }
      div = document.createElement("div");
      div.innerHTML = "<!--[if IE " + ver + "]> <i></i> <![endif]-->";
      status = div.getElementsByTagName("i").length;
      document.body.appendChild(div);
      div.parentNode.removeChild(div);
      return status;
    },
    canOrientImage: function ($el) {
      var $img = $(document.createElement("img"))
          .css({ width: "1px", height: "1px" })
          .insertAfter($el),
        flag = $img.css("image-orientation");
      $img.remove();
      return !!flag;
    },
    canAssignFilesToInput: function () {
      var input = document.createElement("input");
      try {
        input.type = "file";
        input.files = null;
        return true;
      } catch (err) {
        return false;
      }
    },
    getDragDropFolders: function (items) {
      var i,
        item,
        len = items ? items.length : 0,
        folders = 0;
      if (len > 0 && items[0].webkitGetAsEntry()) {
        for (i = 0; i < len; i++) {
          item = items[i].webkitGetAsEntry();
          if (item && item.isDirectory) {
            folders++;
          }
        }
      }
      return folders;
    },
    initModal: function ($modal) {
      var $body = $("body");
      if ($body.length) {
        $modal.appendTo($body);
      }
    },
    isFunction: function (v) {
      return typeof v === "function";
    },
    isEmpty: function (value, trim) {
      return (
        value === undefined ||
        value === null ||
        (!$h.isFunction(value) &&
          (value.length === 0 || (trim && $.trim(value) === "")))
      );
    },
    isArray: function (a) {
      return (
        Array.isArray(a) ||
        Object.prototype.toString.call(a) === "[object Array]"
      );
    },
    ifSet: function (needle, haystack, def) {
      def = def || "";
      return haystack && typeof haystack === "object" && needle in haystack
        ? haystack[needle]
        : def;
    },
    cleanArray: function (arr) {
      if (!(arr instanceof Array)) {
        arr = [];
      }
      return arr.filter(function (e) {
        return e !== undefined && e !== null;
      });
    },
    spliceArray: function (arr, index, reverseOrder) {
      var i,
        j = 0,
        out = [],
        newArr;
      if (!(arr instanceof Array)) {
        return [];
      }
      newArr = $.extend(true, [], arr);
      if (reverseOrder) {
        newArr.reverse();
      }
      for (i = 0; i < newArr.length; i++) {
        if (i !== index) {
          out[j] = newArr[i];
          j++;
        }
      }
      if (reverseOrder) {
        out.reverse();
      }
      return out;
    },
    getNum: function (num, def) {
      def = def || 0;
      if (typeof num === "number") {
        return num;
      }
      if (typeof num === "string") {
        num = parseFloat(num);
      }
      return isNaN(num) ? def : num;
    },
    hasFileAPISupport: function () {
      return !!(window.File && window.FileReader);
    },
    hasDragDropSupport: function () {
      var div = document.createElement("div");
      /** @namespace div.draggable */
      /** @namespace div.ondragstart */
      /** @namespace div.ondrop */
      return (
        !$h.isIE(9) &&
        (div.draggable !== undefined ||
          (div.ondragstart !== undefined && div.ondrop !== undefined))
      );
    },
    hasFileUploadSupport: function () {
      return $h.hasFileAPISupport() && window.FormData;
    },
    hasBlobSupport: function () {
      try {
        return !!window.Blob && Boolean(new Blob());
      } catch (e) {
        return false;
      }
    },
    hasArrayBufferViewSupport: function () {
      try {
        return new Blob([new Uint8Array(100)]).size === 100;
      } catch (e) {
        return false;
      }
    },
    hasResumableUploadSupport: function () {
      /** @namespace Blob.prototype.webkitSlice */
      /** @namespace Blob.prototype.mozSlice */
      return (
        $h.hasFileUploadSupport() &&
        $h.hasBlobSupport() &&
        $h.hasArrayBufferViewSupport() &&
        (!!Blob.prototype.webkitSlice ||
          !!Blob.prototype.mozSlice ||
          !!Blob.prototype.slice ||
          false)
      );
    },
    dataURI2Blob: function (dataURI) {
      var BlobBuilder =
          window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MozBlobBuilder ||
          window.MSBlobBuilder,
        canBlob = $h.hasBlobSupport(),
        byteStr,
        arrayBuffer,
        intArray,
        i,
        mimeStr,
        bb,
        canProceed =
          (canBlob || BlobBuilder) &&
          window.atob &&
          window.ArrayBuffer &&
          window.Uint8Array;
      if (!canProceed) {
        return null;
      }
      if (dataURI.split(",")[0].indexOf("base64") >= 0) {
        byteStr = atob(dataURI.split(",")[1]);
      } else {
        byteStr = decodeURIComponent(dataURI.split(",")[1]);
      }
      arrayBuffer = new ArrayBuffer(byteStr.length);
      intArray = new Uint8Array(arrayBuffer);
      for (i = 0; i < byteStr.length; i += 1) {
        intArray[i] = byteStr.charCodeAt(i);
      }
      mimeStr = dataURI.split(",")[0].split(":")[1].split(";")[0];
      if (canBlob) {
        return new Blob(
          [$h.hasArrayBufferViewSupport() ? intArray : arrayBuffer],
          { type: mimeStr }
        );
      }
      bb = new BlobBuilder();
      bb.append(arrayBuffer);
      return bb.getBlob(mimeStr);
    },
    arrayBuffer2String: function (buffer) {
      if (window.TextDecoder) {
        return new TextDecoder("utf-8").decode(buffer);
      }
      var array = Array.prototype.slice.apply(new Uint8Array(buffer)),
        out = "",
        i = 0,
        len,
        c,
        char2,
        char3;
      len = array.length;
      while (i < len) {
        c = array[i++];
        switch (
          c >> 4 // jshint ignore:line
        ) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            // 0xxxxxxx
            out += String.fromCharCode(c);
            break;
          case 12:
          case 13:
            // 110x xxxx   10xx xxxx
            char2 = array[i++];
            out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f)); // jshint ignore:line
            break;
          case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode(
              ((c & 0x0f) << 12) | // jshint ignore:line
              ((char2 & 0x3f) << 6) | // jshint ignore:line
                ((char3 & 0x3f) << 0)
            ); // jshint ignore:line
            break;
        }
      }
      return out;
    },
    isHtml: function (str) {
      var a = document.createElement("div");
      a.innerHTML = str;
      for (var c = a.childNodes, i = c.length; i--; ) {
        if (c[i].nodeType === 1) {
          return true;
        }
      }
      return false;
    },
    isSvg: function (str) {
      return (
        str.match(/^\s*<\?xml/i) &&
        (str.match(/<!DOCTYPE svg/i) || str.match(/<svg/i))
      );
    },
    getMimeType: function (signature, contents, type) {
      switch (signature) {
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
          return "image/jpeg";
        case "89504e47":
          return "image/png";
        case "47494638":
          return "image/gif";
        case "49492a00":
          return "image/tiff";
        case "52494646":
          return "image/webp";
        case "66747970":
          return "video/3gp";
        case "4f676753":
          return "video/ogg";
        case "1a45dfa3":
          return "video/mkv";
        case "000001ba":
        case "000001b3":
          return "video/mpeg";
        case "3026b275":
          return "video/wmv";
        case "25504446":
          return "application/pdf";
        case "25215053":
          return "application/ps";
        case "504b0304":
        case "504b0506":
        case "504b0508":
          return "application/zip";
        case "377abcaf":
          return "application/7z";
        case "75737461":
          return "application/tar";
        case "7801730d":
          return "application/dmg";
        default:
          switch (signature.substring(0, 6)) {
            case "435753":
              return "application/x-shockwave-flash";
            case "494433":
              return "audio/mp3";
            case "425a68":
              return "application/bzip";
            default:
              switch (signature.substring(0, 4)) {
                case "424d":
                  return "image/bmp";
                case "fffb":
                  return "audio/mp3";
                case "4d5a":
                  return "application/exe";
                case "1f9d":
                case "1fa0":
                  return "application/zip";
                case "1f8b":
                  return "application/gzip";
                default:
                  return contents && !contents.match(/[^\u0000-\u007f]/)
                    ? "application/text-plain"
                    : type;
              }
          }
      }
    },
    addCss: function ($el, css) {
      $el.removeClass(css).addClass(css);
    },
    getElement: function (options, param, value) {
      return $h.isEmpty(options) || $h.isEmpty(options[param])
        ? value
        : $(options[param]);
    },
    createElement: function (str, tag) {
      tag = tag || "div";
      return $($.parseHTML("<" + tag + ">" + str + "</" + tag + ">"));
    },
    uniqId: function () {
      return (
        new Date().getTime() + Math.floor(Math.random() * Math.pow(10, 15))
      ).toString(36);
    },
    cspBuffer: {
      CSP_ATTRIB: "data-csp-01928735", // a randomly named temporary attribute to store the CSP elem id
      domElementsStyles: {},
      stash: function (htmlString) {
        var self = this,
          outerDom = $.parseHTML("<div>" + htmlString + "</div>"),
          $el = $(outerDom);
        $el.find("[style]").each(function (key, elem) {
          var $elem = $(elem),
            styleString = $elem.attr("style"),
            id = $h.uniqId(),
            styles = {};
          if (styleString && styleString.length) {
            if (styleString.indexOf(";") === -1) {
              styleString += ";";
            }
            styleString
              .slice(0, styleString.length - 1)
              .split(";")
              .map(function (str) {
                str = str.split(":");
                if (str[0]) {
                  styles[str[0]] = str[1] ? str[1] : "";
                }
              });
            self.domElementsStyles[id] = styles;
            $elem.removeAttr("style").attr(self.CSP_ATTRIB, id);
          }
        });
        $el.filter("*").removeAttr("style"); // make sure all style attr are removed
        var values = Object.values
          ? Object.values(outerDom)
          : Object.keys(outerDom).map(function (itm) {
              return outerDom[itm];
            });
        return values
          .flatMap(function (elem) {
            return elem.innerHTML;
          })
          .join("");
      },
      apply: function (domElement) {
        var self = this,
          $el = $(domElement);
        $el.find("[" + self.CSP_ATTRIB + "]").each(function (key, elem) {
          var $elem = $(elem),
            id = $elem.attr(self.CSP_ATTRIB),
            styles = self.domElementsStyles[id];
          if (styles) {
            $elem.css(styles);
          }
          $elem.removeAttr(self.CSP_ATTRIB);
        });
        self.domElementsStyles = {};
      },
    },
    setHtml: function ($elem, htmlString) {
      var buf = $h.cspBuffer;
      $elem.html(buf.stash(htmlString));
      buf.apply($elem);
      return $elem;
    },
    htmlEncode: function (str, undefVal) {
      if (str === undefined) {
        return undefVal || null;
      }
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    },
    replaceTags: function (str, tags) {
      var out = str;
      if (!tags) {
        return out;
      }
      $.each(tags, function (key, value) {
        if (typeof value === "function") {
          value = value();
        }
        out = out.split(key).join(value);
      });
      return out;
    },
    cleanMemory: function ($thumb) {
      var data = $thumb.is("img")
        ? $thumb.attr("src")
        : $thumb.find("source").attr("src");
      $h.revokeObjectURL(data);
    },
    findFileName: function (filePath) {
      var sepIndex = filePath.lastIndexOf("/");
      if (sepIndex === -1) {
        sepIndex = filePath.lastIndexOf("\\");
      }
      return filePath.split(filePath.substring(sepIndex, sepIndex + 1)).pop();
    },
    checkFullScreen: function () {
      return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
    },
    toggleFullScreen: function (maximize) {
      var doc = document,
        de = doc.documentElement,
        isFullScreen = $h.checkFullScreen();
      if (de && maximize && !isFullScreen) {
        if (de.requestFullscreen) {
          de.requestFullscreen();
        } else {
          if (de.msRequestFullscreen) {
            de.msRequestFullscreen();
          } else {
            if (de.mozRequestFullScreen) {
              de.mozRequestFullScreen();
            } else {
              if (de.webkitRequestFullscreen) {
                de.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            }
          }
        }
      } else {
        if (isFullScreen) {
          if (doc.exitFullscreen) {
            doc.exitFullscreen();
          } else {
            if (doc.msExitFullscreen) {
              doc.msExitFullscreen();
            } else {
              if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
              } else {
                if (doc.webkitExitFullscreen) {
                  doc.webkitExitFullscreen();
                }
              }
            }
          }
        }
      }
    },
    moveArray: function (arr, oldIndex, newIndex, reverseOrder) {
      var newArr = $.extend(true, [], arr);
      if (reverseOrder) {
        newArr.reverse();
      }
      if (newIndex >= newArr.length) {
        var k = newIndex - newArr.length;
        while (k-- + 1) {
          newArr.push(undefined);
        }
      }
      newArr.splice(newIndex, 0, newArr.splice(oldIndex, 1)[0]);
      if (reverseOrder) {
        newArr.reverse();
      }
      return newArr;
    },
    closeButton: function (css) {
      css = css ? "close " + css : "close";
      return (
        '<button type="button" class="' +
        css +
        '" aria-label="Close">\n' +
        '  <span aria-hidden="true">&times;</span>\n' +
        "</button>"
      );
    },
    getRotation: function (value) {
      switch (value) {
        case 2:
          return "rotateY(180deg)";
        case 3:
          return "rotate(180deg)";
        case 4:
          return "rotate(180deg) rotateY(180deg)";
        case 5:
          return "rotate(270deg) rotateY(180deg)";
        case 6:
          return "rotate(90deg)";
        case 7:
          return "rotate(90deg) rotateY(180deg)";
        case 8:
          return "rotate(270deg)";
        default:
          return "";
      }
    },
    setTransform: function (el, val) {
      if (!el) {
        return;
      }
      el.style.transform = val;
      el.style.webkitTransform = val;
      el.style["-moz-transform"] = val;
      el.style["-ms-transform"] = val;
      el.style["-o-transform"] = val;
    },
    getObjectKeys: function (obj) {
      var keys = [];
      if (obj) {
        $.each(obj, function (key) {
          keys.push(key);
        });
      }
      return keys;
    },
    getObjectSize: function (obj) {
      return $h.getObjectKeys(obj).length;
    },
    /**
     * Small dependency injection for the task manager
     * https://gist.github.com/fearphage/4341799
     */
    whenAll: function (array) {
      var s = [].slice,
        resolveValues =
          arguments.length === 1 && $h.isArray(array)
            ? array
            : s.call(arguments),
        deferred = $.Deferred(),
        i,
        failed = 0,
        value,
        length = resolveValues.length,
        remaining = length,
        rejectContexts,
        rejectValues,
        resolveContexts,
        updateFunc;
      rejectContexts = rejectValues = resolveContexts = Array(length);
      updateFunc = function (index, contexts, values) {
        return function () {
          if (values !== resolveValues) {
            failed++;
          }
          deferred.notifyWith(
            (contexts[index] = this),
            (values[index] = s.call(arguments))
          );
          if (!--remaining) {
            deferred[(!failed ? "resolve" : "reject") + "With"](
              contexts,
              values
            );
          }
        };
      };
      for (i = 0; i < length; i++) {
        if ((value = resolveValues[i]) && $.isFunction(value.promise)) {
          value
            .promise()
            .done(updateFunc(i, resolveContexts, resolveValues))
            .fail(updateFunc(i, rejectContexts, rejectValues));
        } else {
          deferred.notifyWith(this, value);
          --remaining;
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    },
  };
  FileInput = function (element, options) {
    var self = this;
    self.$element = $(element);
    self.$parent = self.$element.parent();
    if (!self._validate()) {
      return;
    }
    self.isPreviewable = $h.hasFileAPISupport();
    self.isIE9 = $h.isIE(9);
    self.isIE10 = $h.isIE(10);
    if (self.isPreviewable || self.isIE9) {
      self._init(options);
      self._listen();
    }
    self.$element.removeClass("file-loading");
  };

  FileInput.prototype = {
    constructor: FileInput,
    _cleanup: function () {
      var self = this;
      self.reader = null;
      self.clearFileStack();
      self.fileBatchCompleted = true;
      self.isError = false;
      self.isDuplicateError = false;
      self.isPersistentError = false;
      self.cancelling = false;
      self.paused = false;
      self.lastProgress = 0;
      self._initAjax();
    },
    _isAborted: function () {
      var self = this;
      return self.cancelling || self.paused;
    },
    _initAjax: function () {
      var self = this,
        tm = (self.taskManager = {
          pool: {},
          addPool: function (id) {
            return (tm.pool[id] = new tm.TasksPool(id));
          },
          getPool: function (id) {
            return tm.pool[id];
          },
          addTask: function (id, logic) {
            // add standalone task directly from task manager
            return new tm.Task(id, logic);
          },
          TasksPool: function (id) {
            var tp = this;
            tp.id = id;
            tp.cancelled = false;
            tp.cancelledDeferrer = $.Deferred();
            tp.tasks = {};
            tp.addTask = function (id, logic) {
              return (tp.tasks[id] = new tm.Task(id, logic));
            };
            tp.size = function () {
              return $h.getObjectSize(tp.tasks);
            };
            tp.run = function (maxThreads) {
              var i = 0,
                failed = false,
                task,
                tasksList = $h.getObjectKeys(tp.tasks).map(function (key) {
                  return tp.tasks[key];
                }),
                tasksDone = [],
                deferred = $.Deferred(),
                enqueue,
                callback;

              if (tp.cancelled) {
                tp.cancelledDeferrer.resolve();
                return deferred.reject();
              }
              // if run all at once
              if (!maxThreads) {
                var tasksDeferredList = $h
                  .getObjectKeys(tp.tasks)
                  .map(function (key) {
                    return tp.tasks[key].deferred;
                  });
                // when all are done
                $h.whenAll(tasksDeferredList)
                  .done(function () {
                    var argv = $h.getArray(arguments);
                    if (!tp.cancelled) {
                      deferred.resolve.apply(null, argv);
                      tp.cancelledDeferrer.reject();
                    } else {
                      deferred.reject.apply(null, argv);
                      tp.cancelledDeferrer.resolve();
                    }
                  })
                  .fail(function () {
                    var argv = $h.getArray(arguments);
                    deferred.reject.apply(null, argv);
                    if (!tp.cancelled) {
                      tp.cancelledDeferrer.reject();
                    } else {
                      tp.cancelledDeferrer.resolve();
                    }
                  });
                // run all tasks
                $.each(tp.tasks, function (id) {
                  task = tp.tasks[id];
                  task.run();
                });
                return deferred;
              }
              enqueue = function (task) {
                $.when(task.deferred)
                  .fail(function () {
                    failed = true;
                    callback.apply(null, arguments);
                  })
                  .always(callback);
              };
              callback = function () {
                var argv = $h.getArray(arguments);
                // notify a task just ended
                deferred.notify(argv);
                tasksDone.push(argv);
                if (tp.cancelled) {
                  deferred.reject.apply(null, tasksDone);
                  tp.cancelledDeferrer.resolve();
                  return;
                }
                if (tasksDone.length === tp.size()) {
                  if (failed) {
                    deferred.reject.apply(null, tasksDone);
                  } else {
                    deferred.resolve.apply(null, tasksDone);
                  }
                }
                // if there are any tasks remaining
                if (tasksList.length) {
                  task = tasksList.shift();
                  enqueue(task);
                  task.run();
                }
              };
              // run the first "maxThreads" tasks
              while (tasksList.length && i++ < maxThreads) {
                task = tasksList.shift();
                enqueue(task);
                task.run();
              }
              return deferred;
            };
            tp.cancel = function () {
              tp.cancelled = true;
              return tp.cancelledDeferrer;
            };
          },
          Task: function (id, logic) {
            var tk = this;
            tk.id = id;
            tk.deferred = $.Deferred();
            tk.logic = logic;
            tk.context = null;
            tk.run = function () {
              var argv = $h.getArray(arguments);
              argv.unshift(tk.deferred); // add deferrer as first argument
              logic.apply(tk.context, argv); // run task
              return tk.deferred; // return deferrer
            };
            tk.runWithContext = function (context) {
              tk.context = context;
              return tk.run();
            };
          },
        });
      self.ajaxQueue = [];
      self.ajaxRequests = [];
      self.ajaxAborted = false;
    },
    _init: function (options, refreshMode) {
      var self = this,
        f,
        $el = self.$element,
        $cont,
        t,
        tmp;
      self.options = options;
      self.canOrientImage = $h.canOrientImage($el);
      $.each(options, function (key, value) {
        switch (key) {
          case "minFileCount":
          case "maxFileCount":
          case "maxTotalFileCount":
          case "minFileSize":
          case "maxFileSize":
          case "maxFilePreviewSize":
          case "resizeImageQuality":
          case "resizeIfSizeMoreThan":
          case "progressUploadThreshold":
          case "initialPreviewCount":
          case "zoomModalHeight":
          case "minImageHeight":
          case "maxImageHeight":
          case "minImageWidth":
          case "maxImageWidth":
            self[key] = $h.getNum(value);
            break;
          default:
            self[key] = value;
            break;
        }
      });
      if (
        self.maxTotalFileCount > 0 &&
        self.maxTotalFileCount < self.maxFileCount
      ) {
        self.maxTotalFileCount = self.maxFileCount;
      }
      if (self.rtl) {
        // swap buttons for rtl
        tmp = self.previewZoomButtonIcons.prev;
        self.previewZoomButtonIcons.prev = self.previewZoomButtonIcons.next;
        self.previewZoomButtonIcons.next = tmp;
      }
      // validate chunk threads to not exceed maxAjaxThreads
      if (
        !isNaN(self.maxAjaxThreads) &&
        self.maxAjaxThreads < self.resumableUploadOptions.maxThreads
      ) {
        self.resumableUploadOptions.maxThreads = self.maxAjaxThreads;
      }
      self._initFileManager();
      if (typeof self.autoOrientImage === "function") {
        self.autoOrientImage = self.autoOrientImage();
      }
      if (typeof self.autoOrientImageInitial === "function") {
        self.autoOrientImageInitial = self.autoOrientImageInitial();
      }
      if (!refreshMode) {
        self._cleanup();
      }
      self.duplicateErrors = [];
      self.$form = $el.closest("form");
      self._initTemplateDefaults();
      self.uploadFileAttr = !$h.isEmpty($el.attr("name"))
        ? $el.attr("name")
        : "file_data";
      t = self._getLayoutTemplate("progress");
      self.progressTemplate = t.replace("{class}", self.progressClass);
      self.progressInfoTemplate = t.replace("{class}", self.progressInfoClass);
      self.progressPauseTemplate = t.replace(
        "{class}",
        self.progressPauseClass
      );
      self.progressCompleteTemplate = t.replace(
        "{class}",
        self.progressCompleteClass
      );
      self.progressErrorTemplate = t.replace(
        "{class}",
        self.progressErrorClass
      );
      self.isDisabled = $el.attr("disabled") || $el.attr("readonly");
      if (self.isDisabled) {
        $el.attr("disabled", true);
      }
      self.isClickable =
        self.browseOnZoneClick &&
        self.showPreview &&
        (self.dropZoneEnabled || !$h.isEmpty(self.defaultPreviewContent));
      self.isAjaxUpload =
        $h.hasFileUploadSupport() && !$h.isEmpty(self.uploadUrl);
      self.dropZoneEnabled = $h.hasDragDropSupport() && self.dropZoneEnabled;
      if (!self.isAjaxUpload) {
        self.dropZoneEnabled =
          self.dropZoneEnabled && $h.canAssignFilesToInput();
      }
      self.slug =
        typeof options.slugCallback === "function"
          ? options.slugCallback
          : self._slugDefault;
      self.mainTemplate = self.showCaption
        ? self._getLayoutTemplate("main1")
        : self._getLayoutTemplate("main2");
      self.captionTemplate = self._getLayoutTemplate("caption");
      self.previewGenericTemplate = self._getPreviewTemplate("generic");
      if (
        !self.imageCanvas &&
        self.resizeImage &&
        (self.maxImageWidth || self.maxImageHeight)
      ) {
        self.imageCanvas = document.createElement("canvas");
        self.imageCanvasContext = self.imageCanvas.getContext("2d");
      }
      if ($h.isEmpty($el.attr("id"))) {
        $el.attr("id", $h.uniqId());
      }
      self.namespace = ".fileinput_" + $el.attr("id").replace(/-/g, "_");
      if (self.$container === undefined) {
        self.$container = self._createContainer();
      } else {
        self._refreshContainer();
      }
      $cont = self.$container;
      self.$dropZone = $cont.find(".file-drop-zone");
      self.$progress = $cont.find(".kv-upload-progress");
      self.$btnUpload = $cont.find(".fileinput-upload");
      self.$captionContainer = $h.getElement(
        options,
        "elCaptionContainer",
        $cont.find(".file-caption")
      );
      self.$caption = $h.getElement(
        options,
        "elCaptionText",
        $cont.find(".file-caption-name")
      );
      if (!$h.isEmpty(self.msgPlaceholder)) {
        f = $el.attr("multiple") ? self.filePlural : self.fileSingle;
        self.$caption.attr(
          "placeholder",
          self.msgPlaceholder.replace("{files}", f)
        );
      }
      self.$captionIcon = self.$captionContainer.find(".file-caption-icon");
      self.$previewContainer = $h.getElement(
        options,
        "elPreviewContainer",
        $cont.find(".file-preview")
      );
      self.$preview = $h.getElement(
        options,
        "elPreviewImage",
        $cont.find(".file-preview-thumbnails")
      );
      self.$previewStatus = $h.getElement(
        options,
        "elPreviewStatus",
        $cont.find(".file-preview-status")
      );
      self.$errorContainer = $h.getElement(
        options,
        "elErrorContainer",
        self.$previewContainer.find(".kv-fileinput-error")
      );
      self._validateDisabled();
      if (!$h.isEmpty(self.msgErrorClass)) {
        $h.addCss(self.$errorContainer, self.msgErrorClass);
      }
      if (!refreshMode) {
        self._resetErrors();
        self.$errorContainer.hide();
        self.previewInitId = "thumb-" + $el.attr("id");
        self._initPreviewCache();
        self._initPreview(true);
        self._initPreviewActions();
        if (self.$parent.hasClass("file-loading")) {
          self.$container.insertBefore(self.$parent);
          self.$parent.remove();
        }
      } else {
        if (!self._errorsExist()) {
          self.$errorContainer.hide();
        }
      }
      self._setFileDropZoneTitle();
      if ($el.attr("disabled")) {
        self.disable();
      }
      self._initZoom();
      if (self.hideThumbnailContent) {
        $h.addCss(self.$preview, "hide-content");
      }
    },
    _initFileManager: function () {
      var self = this;
      self.uploadStartTime = $h.now();
      self.fileManager = {
        stack: {},
        filesProcessed: [],
        errors: [],
        loadedImages: {},
        totalImages: 0,
        totalFiles: null,
        totalSize: null,
        uploadedSize: 0,
        stats: {},
        initStats: function (id) {
          var data = { started: $h.now() };
          if (id) {
            self.fileManager.stats[id] = data;
          } else {
            self.fileManager.stats = data;
          }
        },
        getUploadStats: function (id, loaded, total) {
          var fm = self.fileManager,
            started = id
              ? (fm.stats[id] && fm.stats[id].started) || $h.now()
              : self.uploadStartTime;
          var elapsed = ($h.now() - started) / 1000,
            speeds = [
              "B/s",
              "KB/s",
              "MB/s",
              "GB/s",
              "TB/s",
              "PB/s",
              "EB/s",
              "ZB/s",
              "YB/s",
            ],
            bps = elapsed ? loaded / elapsed : 0,
            bitrate = self._getSize(bps, speeds),
            pendingBytes = total - loaded,
            out = {
              fileId: id,
              started: started,
              elapsed: elapsed,
              loaded: loaded,
              total: total,
              bps: bps,
              bitrate: bitrate,
              pendingBytes: pendingBytes,
            };
          if (id) {
            fm.stats[id] = out;
          } else {
            fm.stats = out;
          }
          return out;
        },
        exists: function (id) {
          return $.inArray(id, self.fileManager.getIdList()) !== -1;
        },
        count: function () {
          return self.fileManager.getIdList().length;
        },
        total: function () {
          var fm = self.fileManager;
          if (!fm.totalFiles) {
            fm.totalFiles = fm.count();
          }
          return fm.totalFiles;
        },
        getTotalSize: function () {
          var fm = self.fileManager;
          if (fm.totalSize) {
            return fm.totalSize;
          }
          fm.totalSize = 0;
          $.each(self.fileManager.stack, function (id, f) {
            var size = parseFloat(f.size);
            fm.totalSize += isNaN(size) ? 0 : size;
          });
          return fm.totalSize;
        },
        add: function (file, id) {
          if (!id) {
            id = self.fileManager.getId(file);
          }
          if (!id) {
            return;
          }
          self.fileManager.stack[id] = {
            file: file,
            name: $h.getFileName(file),
            relativePath: $h.getFileRelativePath(file),
            size: file.size,
            nameFmt: self._getFileName(file, ""),
            sizeFmt: self._getSize(file.size),
          };
        },
        remove: function ($thumb) {
          var id = $thumb.attr("data-fileid");
          if (id) {
            self.fileManager.removeFile(id);
          }
        },
        removeFile: function (id) {
          delete self.fileManager.stack[id];
          delete self.fileManager.loadedImages[id];
        },
        move: function (idFrom, idTo) {
          var result = {},
            stack = self.fileManager.stack;
          if ((!idFrom && !idTo) || idFrom === idTo) {
            return;
          }
          $.each(stack, function (k, v) {
            if (k !== idFrom) {
              result[k] = v;
            }
            if (k === idTo) {
              result[idFrom] = stack[idFrom];
            }
          });
          self.fileManager.stack = result;
        },
        list: function () {
          var files = [];
          $.each(self.fileManager.stack, function (k, v) {
            if (v && v.file) {
              files.push(v.file);
            }
          });
          return files;
        },
        isPending: function (id) {
          return (
            $.inArray(id, self.fileManager.filesProcessed) === -1 &&
            self.fileManager.exists(id)
          );
        },
        isProcessed: function () {
          var filesProcessed = true,
            fm = self.fileManager;
          $.each(fm.stack, function (id) {
            if (fm.isPending(id)) {
              filesProcessed = false;
            }
          });
          return filesProcessed;
        },
        clear: function () {
          var fm = self.fileManager;
          self.isDuplicateError = false;
          self.isPersistentError = false;
          fm.totalFiles = null;
          fm.totalSize = null;
          fm.uploadedSize = 0;
          fm.stack = {};
          fm.errors = [];
          fm.filesProcessed = [];
          fm.stats = {};
          fm.clearImages();
        },
        clearImages: function () {
          self.fileManager.loadedImages = {};
          self.fileManager.totalImages = 0;
        },
        addImage: function (id, config) {
          self.fileManager.loadedImages[id] = config;
        },
        removeImage: function (id) {
          delete self.fileManager.loadedImages[id];
        },
        getImageIdList: function () {
          return $h.getObjectKeys(self.fileManager.loadedImages);
        },
        getImageCount: function () {
          return self.fileManager.getImageIdList().length;
        },
        getId: function (file) {
          return self._getFileId(file);
        },
        getIndex: function (id) {
          return self.fileManager.getIdList().indexOf(id);
        },
        getThumb: function (id) {
          var $thumb = null;
          self._getThumbs().each(function () {
            var $t = $(this);
            if ($t.attr("data-fileid") === id) {
              $thumb = $t;
            }
          });
          return $thumb;
        },
        getThumbIndex: function ($thumb) {
          var id = $thumb.attr("data-fileid");
          return self.fileManager.getIndex(id);
        },
        getIdList: function () {
          return $h.getObjectKeys(self.fileManager.stack);
        },
        getFile: function (id) {
          return self.fileManager.stack[id] || null;
        },
        getFileName: function (id, fmt) {
          var file = self.fileManager.getFile(id);
          if (!file) {
            return "";
          }
          return fmt ? file.nameFmt || "" : file.name || "";
        },
        getFirstFile: function () {
          var ids = self.fileManager.getIdList(),
            id = ids && ids.length ? ids[0] : null;
          return self.fileManager.getFile(id);
        },
        setFile: function (id, file) {
          if (self.fileManager.getFile(id)) {
            self.fileManager.stack[id].file = file;
          } else {
            self.fileManager.add(file, id);
          }
        },
        setProcessed: function (id) {
          self.fileManager.filesProcessed.push(id);
        },
        getProgress: function () {
          var total = self.fileManager.total(),
            filesProcessed = self.fileManager.filesProcessed.length;
          if (!total) {
            return 0;
          }
          return Math.ceil((filesProcessed / total) * 100);
        },
        setProgress: function (id, pct) {
          var f = self.fileManager.getFile(id);
          if (!isNaN(pct) && f) {
            f.progress = pct;
          }
        },
      };
    },
    _setUploadData: function (fd, config) {
      var self = this;
      $.each(config, function (key, value) {
        var param = self.uploadParamNames[key] || key;
        if ($h.isArray(value)) {
          fd.append(param, value[0], value[1]);
        } else {
          fd.append(param, value);
        }
      });
    },
    _initResumableUpload: function () {
      var self = this,
        opts = self.resumableUploadOptions,
        logs = $h.logMessages,
        rm,
        fm = self.fileManager;
      if (!self.enableResumableUpload) {
        return;
      }
      if (opts.fallback !== false && typeof opts.fallback !== "function") {
        opts.fallback = function (s) {
          s._log(logs.noResumableSupport);
          s.enableResumableUpload = false;
        };
      }
      if (!$h.hasResumableUploadSupport() && opts.fallback !== false) {
        opts.fallback(self);
        return;
      }
      if (!self.uploadUrl && self.enableResumableUpload) {
        self._log(logs.noUploadUrl);
        self.enableResumableUpload = false;
        return;
      }
      opts.chunkSize = parseFloat(opts.chunkSize);
      if (opts.chunkSize <= 0 || isNaN(opts.chunkSize)) {
        self._log(logs.invalidChunkSize, { chunkSize: opts.chunkSize });
        self.enableResumableUpload = false;
        return;
      }
      rm = self.resumableManager = {
        init: function (id, f, index) {
          rm.logs = [];
          rm.stack = [];
          rm.error = "";
          rm.id = id;
          rm.file = f.file;
          rm.fileName = f.name;
          rm.fileIndex = index;
          rm.completed = false;
          rm.lastProgress = 0;
          if (self.showPreview) {
            rm.$thumb = fm.getThumb(id) || null;
            rm.$progress = rm.$btnDelete = null;
            if (rm.$thumb && rm.$thumb.length) {
              rm.$progress = rm.$thumb.find(".file-thumb-progress");
              rm.$btnDelete = rm.$thumb.find(".kv-file-remove");
            }
          }
          rm.chunkSize = opts.chunkSize * 1024;
          rm.chunkCount = rm.getTotalChunks();
        },
        setAjaxError: function (jqXHR, textStatus, errorThrown, isTest) {
          if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
            errorThrown = jqXHR.responseJSON.error.toString();
          }
          if (!isTest) {
            rm.error = errorThrown;
          }
          if (opts.showErrorLog) {
            self._log(logs.ajaxError, {
              status: jqXHR.status,
              error: errorThrown,
              text: jqXHR.responseText || "",
            });
          }
        },
        reset: function () {
          rm.stack = [];
          rm.chunksProcessed = {};
        },
        setProcessed: function (status) {
          var id = rm.id,
            msg,
            $thumb = rm.$thumb,
            $prog = rm.$progress,
            hasThumb = $thumb && $thumb.length,
            params = {
              id: hasThumb ? $thumb.attr("id") : "",
              index: fm.getIndex(id),
              fileId: id,
            };
          rm.completed = true;
          rm.lastProgress = 0;
          if (hasThumb) {
            $thumb.removeClass("file-uploading");
          }
          if (status === "success") {
            fm.uploadedSize += rm.file.size;
            if (self.showPreview) {
              self._setProgress(101, $prog);
              self._setThumbStatus($thumb, "Success");
              self._initUploadSuccess(rm.chunksProcessed[id].data, $thumb);
            }
            fm.removeFile(id);
            delete rm.chunksProcessed[id];
            self._raise("fileuploaded", [
              params.id,
              params.index,
              params.fileId,
            ]);
            if (fm.isProcessed()) {
              self._setProgress(101);
            }
          } else {
            if (status !== "cancel") {
              if (self.showPreview) {
                self._setThumbStatus($thumb, "Error");
                self._setPreviewError($thumb, true);
                self._setProgress(101, $prog, self.msgProgressError);
                self._setProgress(101, self.$progress, self.msgProgressError);
                self.cancelling = true;
              }
              if (
                !self.$errorContainer.find(
                  'li[data-file-id="' + params.fileId + '"]'
                ).length
              ) {
                msg = self.msgResumableUploadRetriesExceeded.setTokens({
                  file: rm.fileName,
                  max: opts.maxRetries,
                  error: rm.error,
                });
                self._showFileError(msg, params);
              }
            }
          }
          if (fm.isProcessed()) {
            rm.reset();
          }
        },
        check: function () {
          var status = true;
          $.each(rm.logs, function (index, value) {
            if (!value) {
              status = false;
              return false;
            }
          });
        },
        processedResumables: function () {
          var logs = rm.logs,
            i,
            count = 0;
          if (!logs || !logs.length) {
            return 0;
          }
          for (i = 0; i < logs.length; i++) {
            if (logs[i] === true) {
              count++;
            }
          }
          return count;
        },
        getUploadedSize: function () {
          var size = rm.processedResumables() * rm.chunkSize;
          return size > rm.file.size ? rm.file.size : size;
        },
        getTotalChunks: function () {
          var chunkSize = parseFloat(rm.chunkSize);
          if (!isNaN(chunkSize) && chunkSize > 0) {
            return Math.ceil(rm.file.size / chunkSize);
          }
          return 0;
        },
        getProgress: function () {
          var chunksProcessed = rm.processedResumables(),
            total = rm.chunkCount;
          if (total === 0) {
            return 0;
          }
          return Math.ceil((chunksProcessed / total) * 100);
        },
        checkAborted: function (intervalId) {
          if (self._isAborted()) {
            clearInterval(intervalId);
            self.unlock();
          }
        },
        upload: function () {
          var ids = fm.getIdList(),
            flag = "new",
            intervalId;
          intervalId = setInterval(function () {
            var id;
            rm.checkAborted(intervalId);
            if (flag === "new") {
              self.lock();
              flag = "processing";
              id = ids.shift();
              fm.initStats(id);
              if (fm.stack[id]) {
                rm.init(id, fm.stack[id], fm.getIndex(id));
                rm.processUpload();
              }
            }
            if (!fm.isPending(id) && rm.completed) {
              flag = "new";
            }
            if (fm.isProcessed()) {
              var $initThumbs = self.$preview.find(".file-preview-initial");
              if ($initThumbs.length) {
                $h.addCss($initThumbs, $h.SORT_CSS);
                self._initSortable();
              }
              clearInterval(intervalId);
              self._clearFileInput();
              self.unlock();
              setTimeout(function () {
                var data = self.previewCache.data;
                if (data) {
                  self.initialPreview = data.content;
                  self.initialPreviewConfig = data.config;
                  self.initialPreviewThumbTags = data.tags;
                }
                self._raise("filebatchuploadcomplete", [
                  self.initialPreview,
                  self.initialPreviewConfig,
                  self.initialPreviewThumbTags,
                  self._getExtraData(),
                ]);
              }, self.processDelay);
            }
          }, self.processDelay);
        },
        uploadResumable: function () {
          var i,
            pool,
            tm = self.taskManager,
            total = rm.chunkCount;
          pool = tm.addPool(rm.id);
          for (i = 0; i < total; i++) {
            rm.logs[i] = !!(
              rm.chunksProcessed[rm.id] && rm.chunksProcessed[rm.id][i]
            );
            if (!rm.logs[i]) {
              rm.pushAjax(i, 0);
            }
          }
          pool
            .run(opts.maxThreads)
            .done(function () {
              rm.setProcessed("success");
            })
            .fail(function () {
              rm.setProcessed(pool.cancelled ? "cancel" : "error");
            });
        },
        processUpload: function () {
          var fd,
            f,
            id = rm.id,
            fnBefore,
            fnSuccess,
            fnError,
            fnComplete,
            outData;
          if (!opts.testUrl) {
            rm.uploadResumable();
            return;
          }
          fd = new FormData();
          f = fm.stack[id];
          self._setUploadData(fd, {
            fileId: id,
            fileName: f.fileName,
            fileSize: f.size,
            fileRelativePath: f.relativePath,
            chunkSize: rm.chunkSize,
            chunkCount: rm.chunkCount,
          });
          fnBefore = function (jqXHR) {
            outData = self._getOutData(fd, jqXHR);
            self._raise("filetestbeforesend", [id, fm, rm, outData]);
          };
          fnSuccess = function (data, textStatus, jqXHR) {
            outData = self._getOutData(fd, jqXHR, data);
            var pNames = self.uploadParamNames,
              chunksUploaded = pNames.chunksUploaded || "chunksUploaded",
              params = [id, fm, rm, outData];
            if (!data[chunksUploaded] || !$h.isArray(data[chunksUploaded])) {
              self._raise("filetesterror", params);
            } else {
              if (!rm.chunksProcessed[id]) {
                rm.chunksProcessed[id] = {};
              }
              $.each(data[chunksUploaded], function (key, index) {
                rm.logs[index] = true;
                rm.chunksProcessed[id][index] = true;
              });
              rm.chunksProcessed[id].data = data;
              self._raise("filetestsuccess", params);
            }
            rm.uploadResumable();
          };
          fnError = function (jqXHR, textStatus, errorThrown) {
            outData = self._getOutData(fd, jqXHR);
            self._raise("filetestajaxerror", [id, fm, rm, outData]);
            rm.setAjaxError(jqXHR, textStatus, errorThrown, true);
            rm.uploadResumable();
          };
          fnComplete = function () {
            self._raise("filetestcomplete", [id, fm, rm, self._getOutData(fd)]);
          };
          self._ajaxSubmit(
            fnBefore,
            fnSuccess,
            fnComplete,
            fnError,
            fd,
            id,
            rm.fileIndex,
            opts.testUrl
          );
        },
        pushAjax: function (index, retry) {
          var tm = self.taskManager,
            pool = tm.getPool(rm.id);
          pool.addTask(pool.size() + 1, function (deferrer) {
            // use fifo chunk stack
            var arr = rm.stack.shift(),
              index;
            index = arr[0];
            if (
              !rm.chunksProcessed[rm.id] ||
              !rm.chunksProcessed[rm.id][index]
            ) {
              rm.sendAjax(index, arr[1], deferrer);
            } else {
              self._log(logs.chunkQueueError, { index: index });
            }
          });
          rm.stack.push([index, retry]);
        },
        sendAjax: function (index, retry, deferrer) {
          var f,
            chunkSize = rm.chunkSize,
            id = rm.id,
            file = rm.file,
            $thumb = rm.$thumb,
            msgs = $h.logMessages,
            $btnDelete = rm.$btnDelete,
            logError = function (msg, tokens) {
              if (tokens) {
                msg = msg.setTokens(tokens);
              }
              msg = "Error processing resumable ajax request. " + msg;
              self._log(msg);
              deferrer.reject(msg);
            };
          if (rm.chunksProcessed[id] && rm.chunksProcessed[id][index]) {
            return;
          }
          if (retry > opts.maxRetries) {
            logError(msgs.resumableMaxRetriesReached, { n: opts.maxRetries });
            rm.setProcessed("error");
            return;
          }
          var fd,
            outData,
            fnBefore,
            fnSuccess,
            fnError,
            fnComplete,
            slice = file.slice
              ? "slice"
              : file.mozSlice
              ? "mozSlice"
              : file.webkitSlice
              ? "webkitSlice"
              : "slice",
            blob = file[slice](chunkSize * index, chunkSize * (index + 1));
          fd = new FormData();
          f = fm.stack[id];
          self._setUploadData(fd, {
            chunkCount: rm.chunkCount,
            chunkIndex: index,
            chunkSize: chunkSize,
            chunkSizeStart: chunkSize * index,
            fileBlob: [blob, rm.fileName],
            fileId: id,
            fileName: rm.fileName,
            fileRelativePath: f.relativePath,
            fileSize: file.size,
            retryCount: retry,
          });
          if (rm.$progress && rm.$progress.length) {
            rm.$progress.show();
          }
          fnBefore = function (jqXHR) {
            outData = self._getOutData(fd, jqXHR);
            if (self.showPreview) {
              if (!$thumb.hasClass("file-preview-success")) {
                self._setThumbStatus($thumb, "Loading");
                $h.addCss($thumb, "file-uploading");
              }
              $btnDelete.attr("disabled", true);
            }
            self._raise("filechunkbeforesend", [
              id,
              index,
              retry,
              fm,
              rm,
              outData,
            ]);
          };
          fnSuccess = function (data, textStatus, jqXHR) {
            if (self._isAborted()) {
              logError(msgs.resumableAborting);
              return;
            }
            outData = self._getOutData(fd, jqXHR, data);
            var paramNames = self.uploadParamNames,
              chunkIndex = paramNames.chunkIndex || "chunkIndex",
              params = [id, index, retry, fm, rm, outData];
            if (data.error) {
              if (opts.showErrorLog) {
                self._log(logs.retryStatus, {
                  retry: retry + 1,
                  filename: rm.fileName,
                  chunk: index,
                });
              }
              rm.pushAjax(index, retry + 1);
              rm.error = data.error;
              self._raise("filechunkerror", params);
            } else {
              rm.logs[data[chunkIndex]] = true;
              if (!rm.chunksProcessed[id]) {
                rm.chunksProcessed[id] = {};
              }
              rm.chunksProcessed[id][data[chunkIndex]] = true;
              rm.chunksProcessed[id].data = data;
              deferrer.resolve.call(null, data);
              self._raise("filechunksuccess", params);
              rm.check();
            }
          };
          fnError = function (jqXHR, textStatus, errorThrown) {
            if (self._isAborted()) {
              logError(msgs.resumableAborting);
              return;
            }
            outData = self._getOutData(fd, jqXHR);
            rm.setAjaxError(jqXHR, textStatus, errorThrown);
            self._raise("filechunkajaxerror", [
              id,
              index,
              retry,
              fm,
              rm,
              outData,
            ]);
            rm.pushAjax(index, retry + 1); // push another task
            logError(msgs.resumableRetryError, { n: retry - 1 }); // resolve the current task
          };
          fnComplete = function () {
            if (!self._isAborted()) {
              self._raise("filechunkcomplete", [
                id,
                index,
                retry,
                fm,
                rm,
                self._getOutData(fd),
              ]);
            }
          };
          self._ajaxSubmit(
            fnBefore,
            fnSuccess,
            fnComplete,
            fnError,
            fd,
            id,
            rm.fileIndex
          );
        },
      };
      rm.reset();
    },
    _initTemplateDefaults: function () {
      var self = this,
        tMain1,
        tMain2,
        tPreview,
        tFileIcon,
        tClose,
        tCaption,
        tBtnDefault,
        tBtnLink,
        tBtnBrowse,
        tModalMain,
        tModal,
        tProgress,
        tSize,
        tFooter,
        tActions,
        tActionDelete,
        tActionUpload,
        tActionDownload,
        tActionZoom,
        tActionDrag,
        tIndicator,
        tTagBef,
        tTagBef1,
        tTagBef2,
        tTagAft,
        tGeneric,
        tHtml,
        tImage,
        tText,
        tOffice,
        tGdocs,
        tVideo,
        tAudio,
        tFlash,
        tObject,
        tPdf,
        tOther,
        tStyle,
        tZoomCache,
        vDefaultDim,
        tStats;
      tMain1 =
        "{preview}\n" +
        '<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n' +
        '<div class="input-group {class}">\n' +
        "  {caption}\n" +
        '<div class="input-group-btn input-group-append">\n' +
        "      {remove}\n" +
        "      {cancel}\n" +
        "      {pause}\n" +
        "      {upload}\n" +
        "      {browse}\n" +
        "    </div>\n" +
        "</div>";
      tMain2 =
        '{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n' +
        "{remove}\n{cancel}\n{upload}\n{browse}\n";
      tPreview =
        '<div class="file-preview {class}">\n' +
        "  {close}" +
        '  <div class="{dropClass} clearfix">\n' +
        '    <div class="file-preview-thumbnails clearfix">\n' +
        "    </div>\n" +
        '    <div class="file-preview-status text-center text-success"></div>\n' +
        '    <div class="kv-fileinput-error"></div>\n' +
        "  </div>\n" +
        "</div>";
      tClose = $h.closeButton("fileinput-remove");
      tFileIcon = '<i class="glyphicon glyphicon-file"></i>';
      // noinspection HtmlUnknownAttribute
      tCaption =
        '<div class="file-caption form-control {class}">\n' +
        '  <span class="file-caption-icon"></span>\n' +
        '  <input class="file-caption-name">\n' +
        "</div>";
      //noinspection HtmlUnknownAttribute
      tBtnDefault =
        '<button type="{type}" tabindex="0" title="{title}" class="{css}" ' +
        "{status}>{icon} {label}</button>";
      //noinspection HtmlUnknownTarget,HtmlUnknownAttribute
      tBtnLink =
        '<a href="{href}" tabindex="0" title="{title}" class="{css}" {status}>{icon} {label}</a>';
      //noinspection HtmlUnknownAttribute
      tBtnBrowse =
        '<div tabindex="0" class="{css}" {status}>{icon} {label}</div>';
      tModalMain =
        '<div id="' +
        $h.MODAL_ID +
        '" class="file-zoom-dialog modal fade" ' +
        'tabindex="-1" aria-labelledby="' +
        $h.MODAL_ID +
        'Label"></div>';
      tModal =
        '<div class="modal-dialog modal-lg{rtl}" role="document">\n' +
        '  <div class="modal-content">\n' +
        '    <div class="modal-header">\n' +
        '      <h5 class="modal-title">{heading}</h5>\n' +
        '      <span class="kv-zoom-title"></span>\n' +
        '      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
        "    </div>\n" +
        '    <div class="modal-body">\n' +
        '      <div class="floating-buttons"></div>\n' +
        '      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n' +
        "{prev} {next}\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</div>\n";
      tProgress =
        '<div class="progress">\n' +
        '    <div class="{class}" role="progressbar"' +
        ' aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n' +
        "        {status}\n" +
        "     </div>\n" +
        "</div>{stats}";
      tStats =
        '<div class="text-info file-upload-stats">' +
        '<span class="pending-time">{pendingTime}</span> ' +
        '<span class="upload-speed">{uploadSpeed}</span>' +
        "</div>";
      tSize = " <samp>({sizeText})</samp>";
      tFooter =
        '<div class="file-thumbnail-footer">\n' +
        '    <div class="file-footer-caption" title="{caption}">\n' +
        '        <div class="file-caption-info">{caption}</div>\n' +
        '        <div class="file-size-info">{size}</div>\n' +
        "    </div>\n" +
        "    {progress}\n{indicator}\n{actions}\n" +
        "</div>";
      tActions =
        '<div class="file-actions">\n' +
        '    <div class="file-footer-buttons">\n' +
        "        {download} {upload} {delete} {zoom} {other}" +
        "    </div>\n" +
        "</div>\n" +
        "{drag}\n" +
        '<div class="clearfix"></div>';
      //noinspection HtmlUnknownAttribute
      tActionDelete =
        '<button type="button" class="kv-file-remove {removeClass}" ' +
        'title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n';
      tActionUpload =
        '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">' +
        "{uploadIcon}</button>";
      tActionDownload =
        '<a class="kv-file-download {downloadClass}" title="{downloadTitle}" ' +
        'href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>';
      tActionZoom =
        '<button type="button" class="kv-file-zoom {zoomClass}" ' +
        'title="{zoomTitle}">{zoomIcon}</button>';
      tActionDrag =
        '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>';
      tIndicator =
        '<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>';
      tTagBef =
        '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}"' +
        ' data-fileid="{fileid}" data-template="{template}"';
      tTagBef1 = tTagBef + '><div class="kv-file-content">\n';
      tTagBef2 = tTagBef + ' title="{caption}"><div class="kv-file-content">\n';
      tTagAft = "</div>{footer}\n{zoomCache}</div>\n";
      tGeneric = "{content}\n";
      tStyle = " {style}";
      tHtml =
        '<div class="kv-preview-data file-preview-html" title="{caption}"' +
        tStyle +
        ">{data}</div>\n";
      tImage =
        '<img src="{data}" class="file-preview-image kv-preview-data" title="{title}" ' +
        'alt="{alt}"' +
        tStyle +
        ">\n";
      tText =
        '<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly' +
        tStyle +
        ">" +
        "{data}</textarea>\n";
      tOffice =
        '<iframe class="kv-preview-data file-preview-office" ' +
        'src="https://view.officeapps.live.com/op/embed.aspx?src={data}"' +
        tStyle +
        "></iframe>";
      tGdocs =
        '<iframe class="kv-preview-data file-preview-gdocs" ' +
        'src="https://docs.google.com/gview?url={data}&embedded=true"' +
        tStyle +
        "></iframe>";
      tVideo =
        '<video class="kv-preview-data file-preview-video" controls' +
        tStyle +
        ">\n" +
        '<source src="{data}" type="{type}">\n' +
        $h.DEFAULT_PREVIEW +
        "\n</video>\n";
      tAudio =
        '<!--suppress ALL --><audio class="kv-preview-data file-preview-audio" controls' +
        tStyle +
        '>\n<source src="{data}" ' +
        'type="{type}">\n' +
        $h.DEFAULT_PREVIEW +
        "\n</audio>\n";
      tFlash =
        '<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash"' +
        tStyle +
        ">\n";
      tPdf =
        '<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf"' +
        tStyle +
        ">\n";
      tObject =
        '<object class="kv-preview-data file-preview-object file-object {typeCss}" ' +
        'data="{data}" type="{type}"' +
        tStyle +
        ">\n" +
        '<param name="movie" value="{caption}" />\n' +
        $h.OBJECT_PARAMS +
        " " +
        $h.DEFAULT_PREVIEW +
        "\n</object>\n";
      tOther =
        '<div class="kv-preview-data file-preview-other-frame"' +
        tStyle +
        ">\n" +
        $h.DEFAULT_PREVIEW +
        "\n</div>\n";
      tZoomCache =
        '<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>';
      vDefaultDim = { width: "100%", height: "100%", "min-height": "480px" };
      if (self._isPdfRendered()) {
        tPdf = self.pdfRendererTemplate.replace(
          "{renderer}",
          self._encodeURI(self.pdfRendererUrl)
        );
      }
      self.defaults = {
        layoutTemplates: {
          main1: tMain1,
          main2: tMain2,
          preview: tPreview,
          close: tClose,
          fileIcon: tFileIcon,
          caption: tCaption,
          modalMain: tModalMain,
          modal: tModal,
          progress: tProgress,
          stats: tStats,
          size: tSize,
          footer: tFooter,
          indicator: tIndicator,
          actions: tActions,
          actionDelete: tActionDelete,
          actionUpload: tActionUpload,
          actionDownload: tActionDownload,
          actionZoom: tActionZoom,
          actionDrag: tActionDrag,
          btnDefault: tBtnDefault,
          btnLink: tBtnLink,
          btnBrowse: tBtnBrowse,
          zoomCache: tZoomCache,
        },
        previewMarkupTags: {
          tagBefore1: tTagBef1,
          tagBefore2: tTagBef2,
          tagAfter: tTagAft,
        },
        previewContentTemplates: {
          generic: tGeneric,
          html: tHtml,
          image: tImage,
          text: tText,
          office: tOffice,
          gdocs: tGdocs,
          video: tVideo,
          audio: tAudio,
          flash: tFlash,
          object: tObject,
          pdf: tPdf,
          other: tOther,
        },
        allowedPreviewTypes: [
          "image",
          "html",
          "text",
          "video",
          "audio",
          "flash",
          "pdf",
          "object",
        ],
        previewTemplates: {},
        previewSettings: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%",
          },
          html: { width: "213px", height: "160px" },
          text: { width: "213px", height: "160px" },
          office: { width: "213px", height: "160px" },
          gdocs: { width: "213px", height: "160px" },
          video: { width: "213px", height: "160px" },
          audio: { width: "100%", height: "30px" },
          flash: { width: "213px", height: "160px" },
          object: { width: "213px", height: "160px" },
          pdf: { width: "100%", height: "160px", position: "relative" },
          other: { width: "213px", height: "160px" },
        },
        previewSettingsSmall: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%",
          },
          html: { width: "100%", height: "160px" },
          text: { width: "100%", height: "160px" },
          office: { width: "100%", height: "160px" },
          gdocs: { width: "100%", height: "160px" },
          video: { width: "100%", height: "auto" },
          audio: { width: "100%", height: "30px" },
          flash: { width: "100%", height: "auto" },
          object: { width: "100%", height: "auto" },
          pdf: { width: "100%", height: "160px" },
          other: { width: "100%", height: "160px" },
        },
        previewZoomSettings: {
          image: {
            width: "auto",
            height: "auto",
            "max-width": "100%",
            "max-height": "100%",
          },
          html: vDefaultDim,
          text: vDefaultDim,
          office: {
            width: "100%",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px",
          },
          gdocs: {
            width: "100%",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px",
          },
          video: { width: "auto", height: "100%", "max-width": "100%" },
          audio: { width: "100%", height: "30px" },
          flash: { width: "auto", height: "480px" },
          object: {
            width: "auto",
            height: "100%",
            "max-width": "100%",
            "min-height": "480px",
          },
          pdf: vDefaultDim,
          other: { width: "auto", height: "100%", "min-height": "480px" },
        },
        mimeTypeAliases: {
          "video/quicktime": "video/mp4",
        },
        fileTypeSettings: {
          image: function (vType, vName) {
            return (
              ($h.compare(vType, "image.*") &&
                !$h.compare(vType, /(tiff?|wmf)$/i)) ||
              $h.compare(vName, /\.(gif|png|jpe?g)$/i)
            );
          },
          html: function (vType, vName) {
            return (
              $h.compare(vType, "text/html") ||
              $h.compare(vName, /\.(htm|html)$/i)
            );
          },
          office: function (vType, vName) {
            return (
              $h.compare(vType, /(word|excel|powerpoint|office)$/i) ||
              $h.compare(vName, /\.(docx?|xlsx?|pptx?|pps|potx?)$/i)
            );
          },
          gdocs: function (vType, vName) {
            return (
              $h.compare(
                vType,
                /(word|excel|powerpoint|office|iwork-pages|tiff?)$/i
              ) ||
              $h.compare(
                vName,
                /\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i
              )
            );
          },
          text: function (vType, vName) {
            return (
              $h.compare(vType, "text.*") ||
              $h.compare(vName, /\.(xml|javascript)$/i) ||
              $h.compare(vName, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)
            );
          },
          video: function (vType, vName) {
            return (
              $h.compare(vType, "video.*") &&
              ($h.compare(vType, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) ||
                $h.compare(vName, /\.(og?|mp4|webm|mp?g|mov|3gp)$/i))
            );
          },
          audio: function (vType, vName) {
            return (
              $h.compare(vType, "audio.*") &&
              ($h.compare(vName, /(ogg|mp3|mp?g|wav)$/i) ||
                $h.compare(vName, /\.(og?|mp3|mp?g|wav)$/i))
            );
          },
          flash: function (vType, vName) {
            return (
              $h.compare(vType, "application/x-shockwave-flash", true) ||
              $h.compare(vName, /\.(swf)$/i)
            );
          },
          pdf: function (vType, vName) {
            return (
              $h.compare(vType, "application/pdf", true) ||
              $h.compare(vName, /\.(pdf)$/i)
            );
          },
          object: function () {
            return true;
          },
          other: function () {
            return true;
          },
        },
        fileActionSettings: {
          showRemove: true,
          showUpload: true,
          showDownload: true,
          showZoom: true,
          showDrag: true,
          removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
          removeClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          removeErrorClass: "btn btn-sm btn-kv btn-danger",
          removeTitle: "Remove file",
          uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
          uploadClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          uploadTitle: "Upload file",
          uploadRetryIcon: '<i class="glyphicon glyphicon-repeat"></i>',
          uploadRetryTitle: "Retry upload",
          downloadIcon: '<i class="glyphicon glyphicon-download"></i>',
          downloadClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          downloadTitle: "Download file",
          zoomIcon: '<i class="glyphicon glyphicon-zoom-in"></i>',
          zoomClass: "btn btn-sm btn-kv btn-default btn-outline-secondary",
          zoomTitle: "View Details",
          dragIcon: '<i class="glyphicon glyphicon-move"></i>',
          dragClass: "text-info",
          dragTitle: "Move / Rearrange",
          dragSettings: {},
          indicatorNew:
            '<i class="glyphicon glyphicon-plus-sign text-warning"></i>',
          indicatorSuccess:
            '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
          indicatorError:
            '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
          indicatorLoading:
            '<i class="glyphicon glyphicon-hourglass text-muted"></i>',
          indicatorPaused:
            '<i class="glyphicon glyphicon-pause text-primary"></i>',
          indicatorNewTitle: "Not uploaded yet",
          indicatorSuccessTitle: "Uploaded",
          indicatorErrorTitle: "Upload Error",
          indicatorLoadingTitle: "Uploading &hellip;",
          indicatorPausedTitle: "Upload Paused",
        },
      };
      $.each(self.defaults, function (key, setting) {
        if (key === "allowedPreviewTypes") {
          if (self.allowedPreviewTypes === undefined) {
            self.allowedPreviewTypes = setting;
          }
          return;
        }
        self[key] = $.extend(true, {}, setting, self[key]);
      });
      self._initPreviewTemplates();
    },
    _initPreviewTemplates: function () {
      var self = this,
        tags = self.previewMarkupTags,
        tagBef,
        tagAft = tags.tagAfter;
      $.each(self.previewContentTemplates, function (key, value) {
        if ($h.isEmpty(self.previewTemplates[key])) {
          tagBef = tags.tagBefore2;
          if (
            key === "generic" ||
            key === "image" ||
            key === "html" ||
            key === "text"
          ) {
            tagBef = tags.tagBefore1;
          }
          if (self._isPdfRendered() && key === "pdf") {
            tagBef = tagBef.replace(
              "kv-file-content",
              "kv-file-content kv-pdf-rendered"
            );
          }
          self.previewTemplates[key] = tagBef + value + tagAft;
        }
      });
    },
    _initPreviewCache: function () {
      var self = this;
      self.previewCache = {
        data: {},
        init: function () {
          var content = self.initialPreview;
          if (content.length > 0 && !$h.isArray(content)) {
            content = content.split(self.initialPreviewDelimiter);
          }
          self.previewCache.data = {
            content: content,
            config: self.initialPreviewConfig,
            tags: self.initialPreviewThumbTags,
          };
        },
        count: function (skipNull) {
          if (!self.previewCache.data || !self.previewCache.data.content) {
            return 0;
          }
          if (skipNull) {
            var chk = self.previewCache.data.content.filter(function (n) {
              return n !== null;
            });
            return chk.length;
          }
          return self.previewCache.data.content.length;
        },
        get: function (i, isDisabled) {
          var ind = $h.INIT_FLAG + i,
            data = self.previewCache.data,
            config = data.config[i],
            content = data.content[i],
            out,
            $tmp,
            cat,
            ftr,
            fname,
            ftype,
            frameClass,
            asData = $h.ifSet(
              "previewAsData",
              config,
              self.initialPreviewAsData
            ),
            a = config
              ? { title: config.title || null, alt: config.alt || null }
              : { title: null, alt: null },
            parseTemplate = function (
              cat,
              dat,
              fname,
              ftype,
              ftr,
              ind,
              fclass,
              t
            ) {
              var fc =
                  " file-preview-initial " +
                  $h.SORT_CSS +
                  (fclass ? " " + fclass : ""),
                id = self.previewInitId + "-" + ind,
                fileId = (config && config.fileId) || id;
              /** @namespace config.zoomData */
              return self._generatePreviewTemplate(
                cat,
                dat,
                fname,
                ftype,
                id,
                fileId,
                false,
                null,
                fc,
                ftr,
                ind,
                t,
                a,
                (config && config.zoomData) || dat
              );
            };
          if (!content || !content.length) {
            return "";
          }
          isDisabled = isDisabled === undefined ? true : isDisabled;
          cat = $h.ifSet(
            "type",
            config,
            self.initialPreviewFileType || "generic"
          );
          fname = $h.ifSet("filename", config, $h.ifSet("caption", config));
          ftype = $h.ifSet("filetype", config, cat);
          ftr = self.previewCache.footer(
            i,
            isDisabled,
            (config && config.size) || null
          );
          frameClass = $h.ifSet("frameClass", config);
          if (asData) {
            out = parseTemplate(
              cat,
              content,
              fname,
              ftype,
              ftr,
              ind,
              frameClass
            );
          } else {
            out = parseTemplate(
              "generic",
              content,
              fname,
              ftype,
              ftr,
              ind,
              frameClass,
              cat
            ).setTokens({ content: data.content[i] });
          }
          if (data.tags.length && data.tags[i]) {
            out = $h.replaceTags(out, data.tags[i]);
          }
          /** @namespace config.frameAttr */
          if (!$h.isEmpty(config) && !$h.isEmpty(config.frameAttr)) {
            $tmp = $h.createElement(out);
            $tmp.find(".file-preview-initial").attr(config.frameAttr);
            out = $tmp.html();
            $tmp.remove();
          }
          return out;
        },
        clean: function (data) {
          data.content = $h.cleanArray(data.content);
          data.config = $h.cleanArray(data.config);
          data.tags = $h.cleanArray(data.tags);
          self.previewCache.data = data;
        },
        add: function (content, config, tags, append) {
          var data = self.previewCache.data,
            index;
          if (!content || !content.length) {
            return 0;
          }
          index = content.length - 1;
          if (!$h.isArray(content)) {
            content = content.split(self.initialPreviewDelimiter);
          }
          if (append && data.content) {
            index = data.content.push(content[0]) - 1;
            data.config[index] = config;
            data.tags[index] = tags;
          } else {
            data.content = content;
            data.config = config;
            data.tags = tags;
          }
          self.previewCache.clean(data);
          return index;
        },
        set: function (content, config, tags, append) {
          var data = self.previewCache.data,
            i,
            chk;
          if (!content || !content.length) {
            return;
          }
          if (!$h.isArray(content)) {
            content = content.split(self.initialPreviewDelimiter);
          }
          chk = content.filter(function (n) {
            return n !== null;
          });
          if (!chk.length) {
            return;
          }
          if (data.content === undefined) {
            data.content = [];
          }
          if (data.config === undefined) {
            data.config = [];
          }
          if (data.tags === undefined) {
            data.tags = [];
          }
          if (append) {
            for (i = 0; i < content.length; i++) {
              if (content[i]) {
                data.content.push(content[i]);
              }
            }
            for (i = 0; i < config.length; i++) {
              if (config[i]) {
                data.config.push(config[i]);
              }
            }
            for (i = 0; i < tags.length; i++) {
              if (tags[i]) {
                data.tags.push(tags[i]);
              }
            }
          } else {
            data.content = content;
            data.config = config;
            data.tags = tags;
          }
          self.previewCache.clean(data);
        },
        unset: function (index) {
          var chk = self.previewCache.count(),
            rev = self.reversePreviewOrder;
          if (!chk) {
            return;
          }
          if (chk === 1) {
            self.previewCache.data.content = [];
            self.previewCache.data.config = [];
            self.previewCache.data.tags = [];
            self.initialPreview = [];
            self.initialPreviewConfig = [];
            self.initialPreviewThumbTags = [];
            return;
          }
          self.previewCache.data.content = $h.spliceArray(
            self.previewCache.data.content,
            index,
            rev
          );
          self.previewCache.data.config = $h.spliceArray(
            self.previewCache.data.config,
            index,
            rev
          );
          self.previewCache.data.tags = $h.spliceArray(
            self.previewCache.data.tags,
            index,
            rev
          );
          var data = $.extend(true, {}, self.previewCache.data);
          self.previewCache.clean(data);
        },
        out: function () {
          var html = "",
            caption,
            len = self.previewCache.count(),
            i,
            content;
          if (len === 0) {
            return { content: "", caption: "" };
          }
          for (i = 0; i < len; i++) {
            content = self.previewCache.get(i);
            html = self.reversePreviewOrder ? content + html : html + content;
          }
          caption = self._getMsgSelected(len);
          return { content: html, caption: caption };
        },
        footer: function (i, isDisabled, size) {
          var data = self.previewCache.data || {};
          if ($h.isEmpty(data.content)) {
            return "";
          }
          if ($h.isEmpty(data.config) || $h.isEmpty(data.config[i])) {
            data.config[i] = {};
          }
          isDisabled = isDisabled === undefined ? true : isDisabled;
          var config = data.config[i],
            caption = $h.ifSet("caption", config),
            a,
            width = $h.ifSet("width", config, "auto"),
            url = $h.ifSet("url", config, false),
            key = $h.ifSet("key", config, null),
            fileId = $h.ifSet("fileId", config, null),
            fs = self.fileActionSettings,
            initPreviewShowDel = self.initialPreviewShowDelete || false,
            downloadInitialUrl = !self.initialPreviewDownloadUrl
              ? ""
              : self.initialPreviewDownloadUrl +
                "?key=" +
                key +
                (fileId ? "&fileId=" + fileId : ""),
            dUrl = config.downloadUrl || downloadInitialUrl,
            dFil = config.filename || config.caption || "",
            initPreviewShowDwl = !!dUrl,
            sDel = $h.ifSet("showRemove", config, initPreviewShowDel),
            sDwl = $h.ifSet(
              "showDownload",
              config,
              $h.ifSet("showDownload", fs, initPreviewShowDwl)
            ),
            sZm = $h.ifSet("showZoom", config, $h.ifSet("showZoom", fs, true)),
            sDrg = $h.ifSet("showDrag", config, $h.ifSet("showDrag", fs, true)),
            dis = url === false && isDisabled;
          sDwl = sDwl && config.downloadUrl !== false && !!dUrl;
          a = self._renderFileActions(
            config,
            false,
            sDwl,
            sDel,
            sZm,
            sDrg,
            dis,
            url,
            key,
            true,
            dUrl,
            dFil
          );
          return self._getLayoutTemplate("footer").setTokens({
            progress: self._renderThumbProgress(),
            actions: a,
            caption: caption,
            size: self._getSize(size),
            width: width,
            indicator: "",
          });
        },
      };
      self.previewCache.init();
    },
    _isPdfRendered: function () {
      var self = this,
        useLib = self.usePdfRenderer,
        flag = typeof useLib === "function" ? useLib() : !!useLib;
      return flag && self.pdfRendererUrl;
    },
    _handler: function ($el, event, callback) {
      var self = this,
        ns = self.namespace,
        ev = event.split(" ").join(ns + " ") + ns;
      if (!$el || !$el.length) {
        return;
      }
      $el.off(ev).on(ev, callback);
    },
    _encodeURI: function (vUrl) {
      var self = this;
      return self.encodeUrl ? encodeURI(vUrl) : vUrl;
    },
    _log: function (msg, tokens) {
      var self = this,
        id = self.$element.attr("id");
      if (!self.showConsoleLogs) {
        return;
      }
      if (id) {
        msg = '"' + id + '": ' + msg;
      }
      msg = "bootstrap-fileinput: " + msg;
      if (typeof tokens === "object") {
        msg = msg.setTokens(tokens);
      }
      if (window.console && typeof window.console.log !== "undefined") {
        window.console.log(msg);
      } else {
        window.alert(msg);
      }
    },
    _validate: function () {
      var self = this,
        status = self.$element.attr("type") === "file";
      if (!status) {
        self._log($h.logMessages.badInputType);
      }
      return status;
    },
    _errorsExist: function () {
      var self = this,
        $err,
        $errList = self.$errorContainer.find("li");
      if ($errList.length) {
        return true;
      }
      $err = $h.createElement(self.$errorContainer.html());
      $err.find(".kv-error-close").remove();
      $err.find("ul").remove();
      return !!$.trim($err.text()).length;
    },
    _errorHandler: function (evt, caption) {
      var self = this,
        err = evt.target.error,
        showError = function (msg) {
          self._showError(msg.replace("{name}", caption));
        };
      /** @namespace err.NOT_FOUND_ERR */
      /** @namespace err.SECURITY_ERR */
      /** @namespace err.NOT_READABLE_ERR */
      if (err.code === err.NOT_FOUND_ERR) {
        showError(self.msgFileNotFound);
      } else {
        if (err.code === err.SECURITY_ERR) {
          showError(self.msgFileSecured);
        } else {
          if (err.code === err.NOT_READABLE_ERR) {
            showError(self.msgFileNotReadable);
          } else {
            if (err.code === err.ABORT_ERR) {
              showError(self.msgFilePreviewAborted);
            } else {
              showError(self.msgFilePreviewError);
            }
          }
        }
      }
    },
    _addError: function (msg) {
      var self = this,
        $error = self.$errorContainer;
      if (msg && $error.length) {
        $h.setHtml($error, self.errorCloseButton + msg);
        self._handler($error.find(".kv-error-close"), "click", function () {
          setTimeout(function () {
            if (self.showPreview && !self.getFrames().length) {
              self.clear();
            }
            $error.fadeOut("slow");
          }, self.processDelay);
        });
      }
    },
    _setValidationError: function (css) {
      var self = this;
      css = (css ? css + " " : "") + "has-error";
      self.$container.removeClass(css).addClass("has-error");
      $h.addCss(self.$captionContainer, "is-invalid");
    },
    _resetErrors: function (fade) {
      var self = this,
        $error = self.$errorContainer;
      if (self.isPersistentError) {
        return;
      }
      self.isError = false;
      self.$container.removeClass("has-error");
      self.$captionContainer.removeClass("is-invalid");
      $error.html("");
      if (fade) {
        $error.fadeOut("slow");
      } else {
        $error.hide();
      }
    },
    _showFolderError: function (folders) {
      var self = this,
        $error = self.$errorContainer,
        msg;
      if (!folders) {
        return;
      }
      if (!self.isAjaxUpload) {
        self._clearFileInput();
      }
      msg = self.msgFoldersNotAllowed.replace("{n}", folders);
      self._addError(msg);
      self._setValidationError();
      $error.fadeIn(self.fadeDelay);
      self._raise("filefoldererror", [folders, msg]);
    },
    _showFileError: function (msg, params, event) {
      var self = this,
        $error = self.$errorContainer,
        ev = event || "fileuploaderror",
        fId = (params && params.fileId) || "",
        e =
          params && params.id
            ? '<li data-thumb-id="' +
              params.id +
              '" data-file-id="' +
              fId +
              '">' +
              msg +
              "</li>"
            : "<li>" + msg + "</li>";

      if ($error.find("ul").length === 0) {
        self._addError("<ul>" + e + "</ul>");
      } else {
        $error.find("ul").append(e);
      }
      $error.fadeIn(self.fadeDelay);
      self._raise(ev, [params, msg]);
      self._setValidationError("file-input-new");
      return true;
    },
    _showError: function (msg, params, event) {
      var self = this,
        $error = self.$errorContainer,
        ev = event || "fileerror";
      params = params || {};
      params.reader = self.reader;
      self._addError(msg);
      $error.fadeIn(self.fadeDelay);
      self._raise(ev, [params, msg]);
      if (!self.isAjaxUpload) {
        self._clearFileInput();
      }
      self._setValidationError("file-input-new");
      self.$btnUpload.attr("disabled", true);
      return true;
    },
    _noFilesError: function (params) {
      var self = this,
        label = self.minFileCount > 1 ? self.filePlural : self.fileSingle,
        msg = self.msgFilesTooLess
          .replace("{n}", self.minFileCount)
          .replace("{files}", label),
        $error = self.$errorContainer;
      msg = "<li>" + msg + "</li>";
      if ($error.find("ul").length === 0) {
        self._addError("<ul>" + msg + "</ul>");
      } else {
        $error.find("ul").append(msg);
      }
      self.isError = true;
      self._updateFileDetails(0);
      $error.fadeIn(self.fadeDelay);
      self._raise("fileerror", [params, msg]);
      self._clearFileInput();
      self._setValidationError();
    },
    _parseError: function (operation, jqXHR, errorThrown, fileName) {
      /** @namespace jqXHR.responseJSON */
      var self = this,
        errMsg = $.trim(errorThrown + ""),
        textPre,
        errText,
        text;
      errText =
        jqXHR.responseJSON && jqXHR.responseJSON.error
          ? jqXHR.responseJSON.error.toString()
          : "";
      text = errText ? errText : jqXHR.responseText;
      if (self.cancelling && self.msgUploadAborted) {
        errMsg = self.msgUploadAborted;
      }
      if (self.showAjaxErrorDetails && text) {
        if (errText) {
          errMsg = $.trim(errText + "");
        } else {
          text = $.trim(text.replace(/\n\s*\n/g, "\n"));
          textPre = text.length ? "<pre>" + text + "</pre>" : "";
          errMsg += errMsg ? textPre : text;
        }
      }
      if (!errMsg) {
        errMsg = self.msgAjaxError.replace("{operation}", operation);
      }
      self.cancelling = false;
      return fileName ? "<b>" + fileName + ": </b>" + errMsg : errMsg;
    },
    _parseFileType: function (type, name) {
      var self = this,
        isValid,
        vType,
        cat,
        i,
        types = self.allowedPreviewTypes || [];
      if (type === "application/text-plain") {
        return "text";
      }
      for (i = 0; i < types.length; i++) {
        cat = types[i];
        isValid = self.fileTypeSettings[cat];
        vType = isValid(type, name) ? cat : "";
        if (!$h.isEmpty(vType)) {
          return vType;
        }
      }
      return "other";
    },
    _getPreviewIcon: function (fname) {
      var self = this,
        ext,
        out = null;
      if (fname && fname.indexOf(".") > -1) {
        ext = fname.split(".").pop();
        if (self.previewFileIconSettings) {
          out =
            self.previewFileIconSettings[ext] ||
            self.previewFileIconSettings[ext.toLowerCase()] ||
            null;
        }
        if (self.previewFileExtSettings) {
          $.each(self.previewFileExtSettings, function (key, func) {
            if (self.previewFileIconSettings[key] && func(ext)) {
              out = self.previewFileIconSettings[key];
              //noinspection UnnecessaryReturnStatementJS
              return;
            }
          });
        }
      }
      return out || self.previewFileIcon;
    },
    _parseFilePreviewIcon: function (content, fname) {
      var self = this,
        icn = self._getPreviewIcon(fname),
        out = content;
      if (out.indexOf("{previewFileIcon}") > -1) {
        out = out.setTokens({
          previewFileIconClass: self.previewFileIconClass,
          previewFileIcon: icn,
        });
      }
      return out;
    },
    _raise: function (event, params) {
      var self = this,
        e = $.Event(event);
      if (params !== undefined) {
        self.$element.trigger(e, params);
      } else {
        self.$element.trigger(e);
      }
      if (e.isDefaultPrevented() || e.result === false) {
        return false;
      }
      switch (event) {
        // ignore these events
        case "filebatchuploadcomplete":
        case "filebatchuploadsuccess":
        case "fileuploaded":
        case "fileclear":
        case "filecleared":
        case "filereset":
        case "fileerror":
        case "filefoldererror":
        case "fileuploaderror":
        case "filebatchuploaderror":
        case "filedeleteerror":
        case "filecustomerror":
        case "filesuccessremove":
          break;
        // receive data response via `filecustomerror` event`
        default:
          if (!self.ajaxAborted) {
            self.ajaxAborted = e.result;
          }
          break;
      }
      return true;
    },
    _listenFullScreen: function (isFullScreen) {
      var self = this,
        $modal = self.$modal,
        $btnFull,
        $btnBord;
      if (!$modal || !$modal.length) {
        return;
      }
      $btnFull = $modal && $modal.find(".btn-fullscreen");
      $btnBord = $modal && $modal.find(".btn-borderless");
      if (!$btnFull.length || !$btnBord.length) {
        return;
      }
      $btnFull.removeClass("active").attr("aria-pressed", "false");
      $btnBord.removeClass("active").attr("aria-pressed", "false");
      if (isFullScreen) {
        $btnFull.addClass("active").attr("aria-pressed", "true");
      } else {
        $btnBord.addClass("active").attr("aria-pressed", "true");
      }
      if ($modal.hasClass("file-zoom-fullscreen")) {
        self._maximizeZoomDialog();
      } else {
        if (isFullScreen) {
          self._maximizeZoomDialog();
        } else {
          $btnBord.removeClass("active").attr("aria-pressed", "false");
        }
      }
    },
    _listen: function () {
      var self = this,
        $el = self.$element,
        $form = self.$form,
        $cont = self.$container,
        fullScreenEv,
        $cap,
        fn;
      self._handler($el, "click", function (e) {
        if ($el.hasClass("file-no-browse")) {
          if ($el.data("zoneClicked")) {
            $el.data("zoneClicked", false);
          } else {
            e.preventDefault();
          }
        }
      });
      self._handler($el, "change", $.proxy(self._change, self));
      if (self.showBrowse) {
        self._handler(self.$btnFile, "click", $.proxy(self._browse, self));
      }
      $cap = $cont.find(".file-caption-name");
      fn = function () {
        return false;
      };
      self._handler(
        $cont.find(".fileinput-remove:not([disabled])"),
        "click",
        $.proxy(self.clear, self)
      );
      self._handler(
        $cont.find(".fileinput-cancel"),
        "click",
        $.proxy(self.cancel, self)
      );
      self._handler(
        $cont.find(".fileinput-pause"),
        "click",
        $.proxy(self.pause, self)
      );
      self._handler($cap, "keydown", daIgnoreAllButTab);
      self._handler($cap, "paste", fn);
      self._initDragDrop();
      self._handler($form, "reset", $.proxy(self.clear, self));
      if (!self.isAjaxUpload) {
        self._handler($form, "submit", $.proxy(self._submitForm, self));
      }
      self._handler(
        self.$container.find(".fileinput-upload"),
        "click",
        $.proxy(self._uploadClick, self)
      );
      self._handler($(window), "resize", function () {
        self._listenFullScreen(
          screen.width === window.innerWidth &&
            screen.height === window.innerHeight
        );
      });
      fullScreenEv =
        "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange";
      self._handler($(document), fullScreenEv, function () {
        self._listenFullScreen($h.checkFullScreen());
      });
      self._autoFitContent();
      self._initClickable();
      self._refreshPreview();
    },
    _autoFitContent: function () {
      var width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        self = this,
        config =
          width < 400
            ? self.previewSettingsSmall || self.defaults.previewSettingsSmall
            : self.previewSettings || self.defaults.previewSettings,
        sel;
      $.each(config, function (cat, settings) {
        sel = ".file-preview-frame .file-preview-" + cat;
        self.$preview
          .find(sel + ".kv-preview-data," + sel + " .kv-preview-data")
          .css(settings);
      });
    },
    _scanDroppedItems: function (item, files, path) {
      path = path || "";
      var self = this,
        i,
        dirReader,
        readDir,
        errorHandler = function (e) {
          self._log($h.logMessages.badDroppedFiles);
          self._log(e);
        };
      if (item.isFile) {
        item.file(function (file) {
          if (path) {
            file.newPath = path + file.name;
          }
          files.push(file);
        }, errorHandler);
      } else {
        if (item.isDirectory) {
          dirReader = item.createReader();
          readDir = function () {
            dirReader.readEntries(function (entries) {
              if (entries && entries.length > 0) {
                for (i = 0; i < entries.length; i++) {
                  self._scanDroppedItems(
                    entries[i],
                    files,
                    path + item.name + "/"
                  );
                }
                // recursively call readDir() again, since browser can only handle first 100 entries.
                readDir();
              }
              return null;
            }, errorHandler);
          };
          readDir();
        }
      }
    },
    _initDragDrop: function () {
      var self = this,
        $zone = self.$dropZone;
      if (self.dropZoneEnabled && self.showPreview) {
        self._handler(
          $zone,
          "dragenter dragover",
          $.proxy(self._zoneDragEnter, self)
        );
        self._handler($zone, "dragleave", $.proxy(self._zoneDragLeave, self));
        self._handler($zone, "drop", $.proxy(self._zoneDrop, self));
        self._handler(
          $(document),
          "dragenter dragover drop",
          self._zoneDragDropInit
        );
      }
    },
    _zoneDragDropInit: function (e) {
      e.stopPropagation();
      e.preventDefault();
    },
    _zoneDragEnter: function (e) {
      var self = this,
        dataTransfer = e.originalEvent.dataTransfer,
        hasFiles = $.inArray("Files", dataTransfer.types) > -1;
      self._zoneDragDropInit(e);
      if (self.isDisabled || !hasFiles) {
        e.originalEvent.dataTransfer.effectAllowed = "none";
        e.originalEvent.dataTransfer.dropEffect = "none";
        return;
      }
      if (
        self._raise("fileDragEnter", {
          sourceEvent: e,
          files: dataTransfer.types.Files,
        })
      ) {
        $h.addCss(self.$dropZone, "file-highlighted");
      }
    },
    _zoneDragLeave: function (e) {
      var self = this;
      self._zoneDragDropInit(e);
      if (self.isDisabled) {
        return;
      }
      if (self._raise("fileDragLeave", { sourceEvent: e })) {
        self.$dropZone.removeClass("file-highlighted");
      }
    },
    _zoneDrop: function (e) {
      /** @namespace e.originalEvent.dataTransfer */
      var self = this,
        i,
        $el = self.$element,
        dataTransfer = e.originalEvent.dataTransfer,
        files = dataTransfer.files,
        items = dataTransfer.items,
        folders = $h.getDragDropFolders(items),
        processFiles = function () {
          if (!self.isAjaxUpload) {
            self.changeTriggered = true;
            $el.get(0).files = files;
            setTimeout(function () {
              self.changeTriggered = false;
              $el.trigger("change" + self.namespace);
            }, self.processDelay);
          } else {
            self._change(e, files);
          }
          self.$dropZone.removeClass("file-highlighted");
        };
      e.preventDefault();
      if (self.isDisabled || $h.isEmpty(files)) {
        return;
      }
      if (!self._raise("fileDragDrop", { sourceEvent: e, files: files })) {
        return;
      }
      if (folders > 0) {
        if (!self.isAjaxUpload) {
          self._showFolderError(folders);
          return;
        }
        files = [];
        for (i = 0; i < items.length; i++) {
          var item = items[i].webkitGetAsEntry();
          if (item) {
            self._scanDroppedItems(item, files);
          }
        }
        setTimeout(function () {
          processFiles();
        }, 500);
      } else {
        processFiles();
      }
    },
    _uploadClick: function (e) {
      var self = this,
        $btn = self.$container.find(".fileinput-upload"),
        $form,
        isEnabled =
          !$btn.hasClass("disabled") && $h.isEmpty($btn.attr("disabled"));
      if (e && e.isDefaultPrevented()) {
        return;
      }
      if (!self.isAjaxUpload) {
        if (isEnabled && $btn.attr("type") !== "submit") {
          $form = $btn.closest("form");
          // downgrade to normal form submit if possible
          if ($form.length) {
            $form.trigger("submit");
          }
          e.preventDefault();
        }
        return;
      }
      e.preventDefault();
      if (isEnabled) {
        self.upload();
      }
    },
    _submitForm: function () {
      var self = this;
      return self._isFileSelectionValid() && !self._abort({});
    },
    _clearPreview: function () {
      var self = this,
        $thumbs = self.showUploadedThumbs
          ? self.getFrames(":not(.file-preview-success)")
          : self.getFrames();
      $thumbs.each(function () {
        var $thumb = $(this);
        $thumb.remove();
      });
      if (!self.getFrames().length || !self.showPreview) {
        self._resetUpload();
      }
      self._validateDefaultPreview();
    },
    _initSortable: function () {
      var self = this,
        $el = self.$preview,
        settings,
        selector = "." + $h.SORT_CSS,
        $cont,
        $body = $("body"),
        $html = $("html"),
        rev = self.reversePreviewOrder,
        Sortable = window.Sortable,
        beginGrab,
        endGrab;
      if (!Sortable || $el.find(selector).length === 0) {
        return;
      }
      $cont = $body.length ? $body : $html.length ? $html : self.$container;
      beginGrab = function () {
        $cont.addClass("file-grabbing");
      };
      endGrab = function () {
        $cont.removeClass("file-grabbing");
      };
      settings = {
        handle: ".drag-handle-init",
        dataIdAttr: "data-fileid",
        animation: 600,
        draggable: selector,
        scroll: false,
        forceFallback: true,
        onChoose: beginGrab,
        onStart: beginGrab,
        onUnchoose: endGrab,
        onEnd: endGrab,
        onSort: function (e) {
          var oldIndex = e.oldIndex,
            newIndex = e.newIndex,
            i = 0,
            len = self.initialPreviewConfig.length,
            exceedsLast = len > 0 && newIndex >= len,
            $item = $(e.item),
            $first;
          if (exceedsLast) {
            newIndex = len - 1;
          }
          self.initialPreview = $h.moveArray(
            self.initialPreview,
            oldIndex,
            newIndex,
            rev
          );
          self.initialPreviewConfig = $h.moveArray(
            self.initialPreviewConfig,
            oldIndex,
            newIndex,
            rev
          );
          self.previewCache.init();
          self.getFrames(".file-preview-initial").each(function () {
            $(this).attr("data-fileindex", $h.INIT_FLAG + i);
            i++;
          });
          if (exceedsLast) {
            $first = self.getFrames(":not(.file-preview-initial):first");
            if ($first.length) {
              $item.slideUp(function () {
                $item.insertBefore($first).slideDown();
              });
            }
          }
          self._raise("filesorted", {
            previewId: $item.attr("id"),
            oldIndex: oldIndex,
            newIndex: newIndex,
            stack: self.initialPreviewConfig,
          });
        },
      };
      $.extend(true, settings, self.fileActionSettings.dragSettings);
      if (self.sortable) {
        self.sortable.destroy();
      }
      self.sortable = Sortable.create($el[0], settings);
    },
    _setPreviewContent: function (content) {
      var self = this;
      $h.setHtml(self.$preview, content);
      self._autoFitContent();
    },
    _initPreviewImageOrientations: function () {
      var self = this,
        i = 0,
        canOrientImage = self.canOrientImage;
      if (!self.autoOrientImageInitial && !canOrientImage) {
        return;
      }
      self.getFrames(".file-preview-initial").each(function () {
        var $thumb = $(this),
          $img,
          $zoomImg,
          id,
          config = self.initialPreviewConfig[i];
        /** @namespace config.exif */
        if (config && config.exif && config.exif.Orientation) {
          id = $thumb.attr("id");
          $img = $thumb.find(">.kv-file-content img");
          $zoomImg = self._getZoom(id, " >.kv-file-content img");
          if (canOrientImage) {
            $img.css(
              "image-orientation",
              self.autoOrientImageInitial ? "from-image" : "none"
            );
          } else {
            self.setImageOrientation(
              $img,
              $zoomImg,
              config.exif.Orientation,
              $thumb
            );
          }
        }
        i++;
      });
    },
    _initPreview: function (isInit) {
      var self = this,
        cap = self.initialCaption || "",
        out;
      if (!self.previewCache.count(true)) {
        self._clearPreview();
        if (isInit) {
          self._setCaption(cap);
        } else {
          self._initCaption();
        }
        return;
      }
      out = self.previewCache.out();
      cap = isInit && self.initialCaption ? self.initialCaption : out.caption;
      self._setPreviewContent(out.content);
      self._setInitThumbAttr();
      self._setCaption(cap);
      self._initSortable();
      if (!$h.isEmpty(out.content)) {
        self.$container.removeClass("file-input-new");
      }
      self._initPreviewImageOrientations();
    },
    _getZoomButton: function (type) {
      var self = this,
        label = self.previewZoomButtonIcons[type],
        css = self.previewZoomButtonClasses[type],
        title = ' title="' + (self.previewZoomButtonTitles[type] || "") + '" ',
        params =
          title +
          (type === "close" ? ' data-dismiss="modal" aria-hidden="true"' : "");
      if (
        type === "fullscreen" ||
        type === "borderless" ||
        type === "toggleheader"
      ) {
        params +=
          ' data-toggle="button" aria-pressed="false" autocomplete="off"';
      }
      return (
        '<button type="button" class="' +
        css +
        " btn-" +
        type +
        '"' +
        params +
        ">" +
        label +
        "</button>"
      );
    },
    _getModalContent: function () {
      var self = this;
      return self._getLayoutTemplate("modal").setTokens({
        rtl: self.rtl ? " kv-rtl" : "",
        zoomFrameClass: self.frameClass,
        heading: self.msgZoomModalHeading,
        prev: self._getZoomButton("prev"),
        next: self._getZoomButton("next"),
        toggleheader: self._getZoomButton("toggleheader"),
        fullscreen: self._getZoomButton("fullscreen"),
        borderless: self._getZoomButton("borderless"),
        close: self._getZoomButton("close"),
      });
    },
    _listenModalEvent: function (event) {
      var self = this,
        $modal = self.$modal,
        getParams = function (e) {
          return {
            sourceEvent: e,
            previewId: $modal.data("previewId"),
            modal: $modal,
          };
        };
      $modal.on(event + ".bs.modal", function (e) {
        var $btnFull = $modal.find(".btn-fullscreen"),
          $btnBord = $modal.find(".btn-borderless");
        if ($modal.data("fileinputPluginId") === self.$element.attr("id")) {
          self._raise("filezoom" + event, getParams(e));
        }
        if (event === "shown") {
          $btnBord.removeClass("active").attr("aria-pressed", "false");
          $btnFull.removeClass("active").attr("aria-pressed", "false");
          if ($modal.hasClass("file-zoom-fullscreen")) {
            self._maximizeZoomDialog();
            if ($h.checkFullScreen()) {
              $btnFull.addClass("active").attr("aria-pressed", "true");
            } else {
              $btnBord.addClass("active").attr("aria-pressed", "true");
            }
          }
        }
      });
    },
    _initZoom: function () {
      var self = this,
        $dialog,
        modalMain = self._getLayoutTemplate("modalMain"),
        modalId = "#" + $h.MODAL_ID;
      if (!self.showPreview) {
        return;
      }
      self.$modal = $(modalId);
      if (!self.$modal || !self.$modal.length) {
        $dialog = $h
          .createElement($h.cspBuffer.stash(modalMain))
          .insertAfter(self.$container);
        self.$modal = $(modalId).insertBefore($dialog);
        $h.cspBuffer.apply(self.$modal);
        $dialog.remove();
      }
      $h.initModal(self.$modal);
      self.$modal.html($h.cspBuffer.stash(self._getModalContent()));
      $h.cspBuffer.apply(self.$modal);
      $.each($h.MODAL_EVENTS, function (key, event) {
        self._listenModalEvent(event);
      });
    },
    _initZoomButtons: function () {
      var self = this,
        previewId = self.$modal.data("previewId") || "",
        $first,
        $last,
        thumbs = self.getFrames().toArray(),
        len = thumbs.length,
        $prev = self.$modal.find(".btn-prev"),
        $next = self.$modal.find(".btn-next");
      if (thumbs.length < 2) {
        $prev.hide();
        $next.hide();
        return;
      } else {
        $prev.show();
        $next.show();
      }
      if (!len) {
        return;
      }
      $first = $(thumbs[0]);
      $last = $(thumbs[len - 1]);
      $prev.removeAttr("disabled");
      $next.removeAttr("disabled");
      if ($first.length && $first.attr("id") === previewId) {
        $prev.attr("disabled", true);
      }
      if ($last.length && $last.attr("id") === previewId) {
        $next.attr("disabled", true);
      }
    },
    _maximizeZoomDialog: function () {
      var self = this,
        $modal = self.$modal,
        $head = $modal.find(".modal-header:visible"),
        $foot = $modal.find(".modal-footer:visible"),
        $body = $modal.find(".modal-body"),
        h = $(window).height(),
        diff = 0;
      $modal.addClass("file-zoom-fullscreen");
      if ($head && $head.length) {
        h -= $head.outerHeight(true);
      }
      if ($foot && $foot.length) {
        h -= $foot.outerHeight(true);
      }
      if ($body && $body.length) {
        diff = $body.outerHeight(true) - $body.height();
        h -= diff;
      }
      $modal.find(".kv-zoom-body").height(h);
    },
    _resizeZoomDialog: function (fullScreen) {
      var self = this,
        $modal = self.$modal,
        $btnFull = $modal.find(".btn-fullscreen"),
        $btnBord = $modal.find(".btn-borderless");
      if ($modal.hasClass("file-zoom-fullscreen")) {
        $h.toggleFullScreen(false);
        if (!fullScreen) {
          if (!$btnFull.hasClass("active")) {
            $modal.removeClass("file-zoom-fullscreen");
            self.$modal
              .find(".kv-zoom-body")
              .css("height", self.zoomModalHeight);
          } else {
            $btnFull.removeClass("active").attr("aria-pressed", "false");
          }
        } else {
          if (!$btnFull.hasClass("active")) {
            $modal.removeClass("file-zoom-fullscreen");
            self._resizeZoomDialog(true);
            if ($btnBord.hasClass("active")) {
              $btnBord.removeClass("active").attr("aria-pressed", "false");
            }
          }
        }
      } else {
        if (!fullScreen) {
          self._maximizeZoomDialog();
          return;
        }
        $h.toggleFullScreen(true);
      }
      $modal.focus();
    },
    _setZoomContent: function ($frame, animate) {
      var self = this,
        $content,
        tmplt,
        body,
        title,
        $body,
        $dataEl,
        config,
        previewId = $frame.attr("id"),
        $zoomPreview = self._getZoom(previewId),
        $modal = self.$modal,
        $tmp,
        $btnFull = $modal.find(".btn-fullscreen"),
        $btnBord = $modal.find(".btn-borderless"),
        cap,
        size,
        $btnTogh = $modal.find(".btn-toggleheader");
      tmplt = $zoomPreview.attr("data-template") || "generic";
      $content = $zoomPreview.find(".kv-file-content");
      body = $content.length ? $content.html() : "";
      cap = $frame.data("caption") || "";
      size = $frame.data("size") || "";
      title = cap + " " + size;
      $modal
        .find(".kv-zoom-title")
        .attr("title", $("<div/>").html(title).text())
        .html(title);
      $body = $modal.find(".kv-zoom-body");
      $modal.removeClass("kv-single-content");
      if (animate) {
        $tmp = $body.addClass("file-thumb-loading").clone().insertAfter($body);
        $h.setHtml($body, body).hide();
        $tmp.fadeOut("fast", function () {
          $body.fadeIn("fast", function () {
            $body.removeClass("file-thumb-loading");
          });
          $tmp.remove();
        });
      } else {
        $h.setHtml($body, body);
      }
      config = self.previewZoomSettings[tmplt];
      if (config) {
        $dataEl = $body.find(".kv-preview-data");
        $h.addCss($dataEl, "file-zoom-detail");
        $.each(config, function (key, value) {
          $dataEl.css(key, value);
          if (
            ($dataEl.attr("width") && key === "width") ||
            ($dataEl.attr("height") && key === "height")
          ) {
            $dataEl.removeAttr(key);
          }
        });
      }
      $modal.data("previewId", previewId);
      self._handler($modal.find(".btn-prev"), "click", function () {
        self._zoomSlideShow("prev", previewId);
      });
      self._handler($modal.find(".btn-next"), "click", function () {
        self._zoomSlideShow("next", previewId);
      });
      self._handler($btnFull, "click", function () {
        self._resizeZoomDialog(true);
      });
      self._handler($btnBord, "click", function () {
        self._resizeZoomDialog(false);
      });
      self._handler($btnTogh, "click", function () {
        var $header = $modal.find(".modal-header"),
          $floatBar = $modal.find(".modal-body .floating-buttons"),
          ht,
          $actions = $header.find(".kv-zoom-actions"),
          resize = function (height) {
            var $body = self.$modal.find(".kv-zoom-body"),
              h = self.zoomModalHeight;
            if ($modal.hasClass("file-zoom-fullscreen")) {
              h = $body.outerHeight(true);
              if (!height) {
                h = h - $header.outerHeight(true);
              }
            }
            $body.css("height", height ? h + height : h);
          };
        if ($header.is(":visible")) {
          ht = $header.outerHeight(true);
          $header.slideUp("slow", function () {
            $actions.find(".btn").appendTo($floatBar);
            resize(ht);
          });
        } else {
          $floatBar.find(".btn").appendTo($actions);
          $header.slideDown("slow", function () {
            resize();
          });
        }
        $modal.focus();
      });
      self._handler($modal, "keydown", function (e) {
        var key = e.which || e.keyCode,
          $prev = $(this).find(".btn-prev"),
          $next = $(this).find(".btn-next"),
          vId = $(this).data("previewId"),
          vPrevKey = self.rtl ? 39 : 37,
          vNextKey = self.rtl ? 37 : 39;
        if (key === vPrevKey && $prev.length && !$prev.attr("disabled")) {
          self._zoomSlideShow("prev", vId);
        }
        if (key === vNextKey && $next.length && !$next.attr("disabled")) {
          self._zoomSlideShow("next", vId);
        }
      });
    },
    _showModal: function ($frame) {
      var self = this,
        $modal = self.$modal;
      if (!$frame || !$frame.length) {
        return;
      }
      $h.initModal($modal);
      $h.setHtml($modal, self._getModalContent());
      self._setZoomContent($frame);
      $modal.data("fileinputPluginId", self.$element.attr("id"));
      $modal.modal("show");
      self._initZoomButtons();
    },
    _zoomPreview: function ($btn) {
      var self = this,
        $frame;
      if (!$btn.length) {
        throw "Cannot zoom to detailed preview!";
      }
      $frame = $btn.closest($h.FRAMES);
      self._showModal($frame);
    },
    _zoomSlideShow: function (dir, previewId) {
      var self = this,
        $btn = self.$modal.find(".kv-zoom-actions .btn-" + dir),
        $targFrame,
        i,
        $thumb,
        thumbsData = self.getFrames().toArray(),
        thumbs = [],
        len = thumbsData.length,
        out;
      if ($btn.attr("disabled")) {
        return;
      }
      for (i = 0; i < len; i++) {
        $thumb = $(thumbsData[i]);
        if (
          $thumb &&
          $thumb.length &&
          $thumb.find(".kv-file-zoom:visible").length
        ) {
          thumbs.push(thumbsData[i]);
        }
      }
      len = thumbs.length;
      for (i = 0; i < len; i++) {
        if ($(thumbs[i]).attr("id") === previewId) {
          out = dir === "prev" ? i - 1 : i + 1;
          break;
        }
      }
      if (out < 0 || out >= len || !thumbs[out]) {
        return;
      }
      $targFrame = $(thumbs[out]);
      if ($targFrame.length) {
        self._setZoomContent($targFrame, true);
      }
      self._initZoomButtons();
      self._raise("filezoom" + dir, {
        previewId: previewId,
        modal: self.$modal,
      });
    },
    _initZoomButton: function () {
      var self = this;
      self.$preview.find(".kv-file-zoom").each(function () {
        var $el = $(this);
        self._handler($el, "click", function () {
          self._zoomPreview($el);
        });
      });
    },
    _inputFileCount: function () {
      return this.$element[0].files.length;
    },
    _refreshPreview: function () {
      var self = this,
        files;
      if (
        (!self._inputFileCount() && !self.isAjaxUpload) ||
        !self.showPreview ||
        !self.isPreviewable
      ) {
        return;
      }
      if (self.isAjaxUpload) {
        if (self.fileManager.count() > 0) {
          files = $.extend(true, {}, self.fileManager.stack);
          self.fileManager.clear();
          self._clearFileInput();
        } else {
          files = self.$element[0].files;
        }
      } else {
        files = self.$element[0].files;
      }
      if (files && files.length) {
        self.readFiles(files);
        self._setFileDropZoneTitle();
      }
    },
    _clearObjects: function ($el) {
      $el.find("video audio").each(function () {
        this.pause();
        $(this).remove();
      });
      $el.find("img object div").each(function () {
        $(this).remove();
      });
    },
    _clearFileInput: function () {
      var self = this,
        $el = self.$element,
        $srcFrm,
        $tmpFrm,
        $tmpEl;
      if (!self._inputFileCount()) {
        return;
      }
      $srcFrm = $el.closest("form");
      $tmpFrm = $(document.createElement("form"));
      $tmpEl = $(document.createElement("div"));
      $el.before($tmpEl);
      if ($srcFrm.length) {
        $srcFrm.after($tmpFrm);
      } else {
        $tmpEl.after($tmpFrm);
      }
      $tmpFrm.append($el).trigger("reset");
      $tmpEl.before($el).remove();
      $tmpFrm.remove();
    },
    _resetUpload: function () {
      var self = this;
      self.uploadStartTime = $h.now();
      self.uploadCache = [];
      self.$btnUpload.removeAttr("disabled");
      self._setProgress(0);
      self._hideProgress();
      self._resetErrors(false);
      self._initAjax();
      self.fileManager.clearImages();
      self._resetCanvas();
      if (self.overwriteInitial) {
        self.initialPreview = [];
        self.initialPreviewConfig = [];
        self.initialPreviewThumbTags = [];
        self.previewCache.data = {
          content: [],
          config: [],
          tags: [],
        };
      }
    },
    _resetCanvas: function () {
      var self = this;
      if (self.canvas && self.imageCanvasContext) {
        self.imageCanvasContext.clearRect(
          0,
          0,
          self.canvas.width,
          self.canvas.height
        );
      }
    },
    _hasInitialPreview: function () {
      var self = this;
      return !self.overwriteInitial && self.previewCache.count(true);
    },
    _resetPreview: function () {
      var self = this,
        out,
        cap,
        $div,
        hasSuc = self.showUploadedThumbs,
        hasErr = !self.removeFromPreviewOnError,
        includeProcessed = (hasSuc || hasErr) && self.isDuplicateError;
      if (self.previewCache.count(true)) {
        out = self.previewCache.out();
        if (includeProcessed) {
          $div = $h.createElement("").insertAfter(self.$container);
          self.getFrames().each(function () {
            var $thumb = $(this);
            if (
              (hasSuc && $thumb.hasClass("file-preview-success")) ||
              (hasErr && $thumb.hasClass("file-preview-error"))
            ) {
              $div.append($thumb);
            }
          });
        }
        self._setPreviewContent(out.content);
        self._setInitThumbAttr();
        cap = self.initialCaption ? self.initialCaption : out.caption;
        self._setCaption(cap);
        if (includeProcessed) {
          $div.contents().appendTo(self.$preview);
          $div.remove();
        }
      } else {
        self._clearPreview();
        self._initCaption();
      }
      if (self.showPreview) {
        self._initZoom();
        self._initSortable();
      }
      self.isDuplicateError = false;
    },
    _clearDefaultPreview: function () {
      var self = this;
      self.$preview.find(".file-default-preview").remove();
    },
    _validateDefaultPreview: function () {
      var self = this;
      if (!self.showPreview || $h.isEmpty(self.defaultPreviewContent)) {
        return;
      }
      self._setPreviewContent(
        '<div class="file-default-preview">' +
          self.defaultPreviewContent +
          "</div>"
      );
      self.$container.removeClass("file-input-new");
      self._initClickable();
    },
    _resetPreviewThumbs: function (isAjax) {
      var self = this,
        out;
      if (isAjax) {
        self._clearPreview();
        self.clearFileStack();
        return;
      }
      if (self._hasInitialPreview()) {
        out = self.previewCache.out();
        self._setPreviewContent(out.content);
        self._setInitThumbAttr();
        self._setCaption(out.caption);
        self._initPreviewActions();
      } else {
        self._clearPreview();
      }
    },
    _getLayoutTemplate: function (t) {
      var self = this,
        template = self.layoutTemplates[t];
      if ($h.isEmpty(self.customLayoutTags)) {
        return template;
      }
      return $h.replaceTags(template, self.customLayoutTags);
    },
    _getPreviewTemplate: function (t) {
      var self = this,
        templates = self.previewTemplates,
        template = templates[t] || templates.other;
      if ($h.isEmpty(self.customPreviewTags)) {
        return template;
      }
      return $h.replaceTags(template, self.customPreviewTags);
    },
    _getOutData: function (formdata, jqXHR, responseData, filesData) {
      var self = this;
      jqXHR = jqXHR || {};
      responseData = responseData || {};
      filesData = filesData || self.fileManager.list();
      return {
        formdata: formdata,
        files: filesData,
        filenames: self.filenames,
        filescount: self.getFilesCount(),
        extra: self._getExtraData(),
        response: responseData,
        reader: self.reader,
        jqXHR: jqXHR,
      };
    },
    _getMsgSelected: function (n) {
      var self = this,
        strFiles = n === 1 ? self.fileSingle : self.filePlural;
      return n > 0
        ? self.msgSelected.replace("{n}", n).replace("{files}", strFiles)
        : self.msgNoFilesSelected;
    },
    _getFrame: function (id, skipWarning) {
      var self = this,
        $frame = $h.getFrameElement(self.$preview, id);
      if (self.showPreview && !skipWarning && !$frame.length) {
        self._log($h.logMessages.invalidThumb, { id: id });
      }
      return $frame;
    },
    _getZoom: function (id, selector) {
      var self = this,
        $frame = $h.getZoomElement(self.$preview, id, selector);
      if (self.showPreview && !$frame.length) {
        self._log($h.logMessages.invalidThumb, { id: id });
      }
      return $frame;
    },
    _getThumbs: function (css) {
      css = css || "";
      return this.getFrames(":not(.file-preview-initial)" + css);
    },
    _getThumbId: function (fileId) {
      var self = this;
      return self.previewInitId + "-" + fileId;
    },
    _getExtraData: function (fileId, index) {
      var self = this,
        data = self.uploadExtraData;
      if (typeof self.uploadExtraData === "function") {
        data = self.uploadExtraData(fileId, index);
      }
      return data;
    },
    _initXhr: function (xhrobj, fileId) {
      var self = this,
        fm = self.fileManager,
        func = function (event) {
          var pct = 0,
            total = event.total,
            loaded = event.loaded || event.position,
            stats = fm.getUploadStats(fileId, loaded, total);
          /** @namespace event.lengthComputable */
          if (event.lengthComputable && !self.enableResumableUpload) {
            pct = $h.round((loaded / total) * 100);
          }
          if (fileId) {
            self._setFileUploadStats(fileId, pct, stats);
          } else {
            self._setProgress(pct, null, null, self._getStats(stats));
          }
          self._raise("fileajaxprogress", [stats]);
        };
      if (xhrobj.upload) {
        if (self.progressDelay) {
          func = $h.debounce(func, self.progressDelay);
        }
        xhrobj.upload.addEventListener("progress", func, false);
      }
      return xhrobj;
    },
    _initAjaxSettings: function () {
      var self = this;
      self._ajaxSettings = $.extend(true, {}, self.ajaxSettings);
      self._ajaxDeleteSettings = $.extend(true, {}, self.ajaxDeleteSettings);
    },
    _mergeAjaxCallback: function (funcName, srcFunc, type) {
      var self = this,
        settings = self._ajaxSettings,
        flag = self.mergeAjaxCallbacks,
        targFunc;
      if (type === "delete") {
        settings = self._ajaxDeleteSettings;
        flag = self.mergeAjaxDeleteCallbacks;
      }
      targFunc = settings[funcName];
      if (flag && typeof targFunc === "function") {
        if (flag === "before") {
          settings[funcName] = function () {
            targFunc.apply(this, arguments);
            srcFunc.apply(this, arguments);
          };
        } else {
          settings[funcName] = function () {
            srcFunc.apply(this, arguments);
            targFunc.apply(this, arguments);
          };
        }
      } else {
        settings[funcName] = srcFunc;
      }
    },
    _ajaxSubmit: function (
      fnBefore,
      fnSuccess,
      fnComplete,
      fnError,
      formdata,
      fileId,
      index,
      vUrl
    ) {
      var self = this,
        settings,
        defaults,
        data,
        ajaxTask;
      if (!self._raise("filepreajax", [formdata, fileId, index])) {
        return;
      }
      formdata.append("initialPreview", JSON.stringify(self.initialPreview));
      formdata.append(
        "initialPreviewConfig",
        JSON.stringify(self.initialPreviewConfig)
      );
      formdata.append(
        "initialPreviewThumbTags",
        JSON.stringify(self.initialPreviewThumbTags)
      );
      self._initAjaxSettings();
      self._mergeAjaxCallback("beforeSend", fnBefore);
      self._mergeAjaxCallback("success", fnSuccess);
      self._mergeAjaxCallback("complete", fnComplete);
      self._mergeAjaxCallback("error", fnError);
      vUrl = vUrl || self.uploadUrlThumb || self.uploadUrl;
      if (typeof vUrl === "function") {
        vUrl = vUrl();
      }
      data = self._getExtraData(fileId, index) || {};
      if (typeof data === "object") {
        $.each(data, function (key, value) {
          formdata.append(key, value);
        });
      }
      defaults = {
        xhr: function () {
          var xhrobj = $.ajaxSettings.xhr();
          return self._initXhr(xhrobj, fileId);
        },
        url: self._encodeURI(vUrl),
        type: "POST",
        dataType: "json",
        data: formdata,
        cache: false,
        processData: false,
        contentType: false,
      };
      settings = $.extend(true, {}, defaults, self._ajaxSettings);
      ajaxTask = self.taskManager.addTask(fileId + "-" + index, function () {
        var self = this.self,
          config,
          xhr;
        config = self.ajaxQueue.shift();
        xhr = $.ajax(config);
        self.ajaxRequests.push(xhr);
      });
      self.ajaxQueue.push(settings);
      ajaxTask.runWithContext({ self: self });
    },
    _mergeArray: function (prop, content) {
      var self = this,
        arr1 = $h.cleanArray(self[prop]),
        arr2 = $h.cleanArray(content);
      self[prop] = arr1.concat(arr2);
    },
    _initUploadSuccess: function (out, $thumb, allFiles) {
      var self = this,
        append,
        data,
        index,
        $div,
        $newCache,
        content,
        config,
        tags,
        id,
        i;
      if (
        !self.showPreview ||
        typeof out !== "object" ||
        $.isEmptyObject(out)
      ) {
        self._resetCaption();
        return;
      }
      if (out.initialPreview !== undefined && out.initialPreview.length > 0) {
        self.hasInitData = true;
        content = out.initialPreview || [];
        config = out.initialPreviewConfig || [];
        tags = out.initialPreviewThumbTags || [];
        append = out.append === undefined || out.append;
        if (content.length > 0 && !$h.isArray(content)) {
          content = content.split(self.initialPreviewDelimiter);
        }
        if (content.length) {
          self._mergeArray("initialPreview", content);
          self._mergeArray("initialPreviewConfig", config);
          self._mergeArray("initialPreviewThumbTags", tags);
        }
        if ($thumb !== undefined) {
          if (!allFiles) {
            index = self.previewCache.add(
              content[0],
              config[0],
              tags[0],
              append
            );
            data = self.previewCache.get(index, false);
            $div = $h.createElement(data).hide().appendTo($thumb);
            $newCache = $div.find(".kv-zoom-cache");
            if ($newCache && $newCache.length) {
              $newCache.appendTo($thumb);
            }
            $thumb.fadeOut("slow", function () {
              var $newThumb = $div.find(".file-preview-frame");
              if ($newThumb && $newThumb.length) {
                $newThumb
                  .insertBefore($thumb)
                  .fadeIn("slow")
                  .css("display:inline-block");
              }
              self._initPreviewActions();
              self._clearFileInput();
              $thumb.remove();
              $div.remove();
              self._initSortable();
            });
          } else {
            id = $thumb.attr("id");
            i = self._getUploadCacheIndex(id);
            if (i !== null) {
              self.uploadCache[i] = {
                id: id,
                content: content[0],
                config: config[0] || [],
                tags: tags[0] || [],
                append: append,
              };
            }
          }
        } else {
          self.previewCache.set(content, config, tags, append);
          self._initPreview();
          self._initPreviewActions();
        }
      }
      self._resetCaption();
    },
    _getUploadCacheIndex: function (id) {
      var self = this,
        i,
        len = self.uploadCache.length,
        config;
      for (i = 0; i < len; i++) {
        config = self.uploadCache[i];
        if (config.id === id) {
          return i;
        }
      }
      return null;
    },
    _initSuccessThumbs: function () {
      var self = this;
      if (!self.showPreview) {
        return;
      }
      self._getThumbs($h.FRAMES + ".file-preview-success").each(function () {
        var $thumb = $(this),
          $remove = $thumb.find(".kv-file-remove");
        $remove.removeAttr("disabled");
        self._handler($remove, "click", function () {
          var id = $thumb.attr("id"),
            out = self._raise("filesuccessremove", [
              id,
              $thumb.attr("data-fileindex"),
            ]);
          $h.cleanMemory($thumb);
          if (out === false) {
            return;
          }
          $thumb.fadeOut("slow", function () {
            $thumb.remove();
            if (!self.getFrames().length) {
              self.reset();
            }
          });
        });
      });
    },
    _updateInitialPreview: function () {
      var self = this,
        u = self.uploadCache;
      if (self.showPreview) {
        $.each(u, function (key, setting) {
          self.previewCache.add(
            setting.content,
            setting.config,
            setting.tags,
            setting.append
          );
        });
        if (self.hasInitData) {
          self._initPreview();
          self._initPreviewActions();
        }
      }
    },
    _uploadSingle: function (i, id, isBatch) {
      var self = this,
        fm = self.fileManager,
        count = fm.count(),
        formdata = new FormData(),
        outData,
        previewId = self._getThumbId(id),
        $thumb,
        chkComplete,
        $btnUpload,
        $btnDelete,
        hasPostData = count > 0 || !$.isEmptyObject(self.uploadExtraData),
        uploadFailed,
        $prog,
        fnBefore,
        errMsg,
        fnSuccess,
        fnComplete,
        fnError,
        updateUploadLog,
        op = self.ajaxOperations.uploadThumb,
        fileObj = fm.getFile(id),
        params = { id: previewId, index: i, fileId: id },
        fileName = self.fileManager.getFileName(id, true);
      if (self.enableResumableUpload) {
        // not enabled for resumable uploads
        return;
      }
      if (self.showPreview) {
        $thumb = self.fileManager.getThumb(id);
        $prog = $thumb.find(".file-thumb-progress");
        $btnUpload = $thumb.find(".kv-file-upload");
        $btnDelete = $thumb.find(".kv-file-remove");
        $prog.show();
      }
      if (
        count === 0 ||
        !hasPostData ||
        (self.showPreview && $btnUpload && $btnUpload.hasClass("disabled")) ||
        self._abort(params)
      ) {
        return;
      }
      updateUploadLog = function () {
        if (!uploadFailed) {
          fm.removeFile(id);
        } else {
          fm.errors.push(id);
        }
        fm.setProcessed(id);
        if (fm.isProcessed()) {
          self.fileBatchCompleted = true;
          chkComplete();
        }
      };
      chkComplete = function () {
        var $initThumbs;
        if (!self.fileBatchCompleted) {
          return;
        }
        setTimeout(function () {
          var triggerReset = fm.count() === 0,
            errCount = fm.errors.length;
          self._updateInitialPreview();
          self.unlock(triggerReset);
          if (triggerReset) {
            self._clearFileInput();
          }
          $initThumbs = self.$preview.find(".file-preview-initial");
          if (self.uploadAsync && $initThumbs.length) {
            $h.addCss($initThumbs, $h.SORT_CSS);
            self._initSortable();
          }
          self._raise("filebatchuploadcomplete", [
            fm.stack,
            self._getExtraData(),
          ]);
          if (!self.retryErrorUploads || errCount === 0) {
            fm.clear();
          }
          self._setProgress(101);
          self.ajaxAborted = false;
        }, self.processDelay);
      };
      fnBefore = function (jqXHR) {
        outData = self._getOutData(formdata, jqXHR);
        fm.initStats(id);
        self.fileBatchCompleted = false;
        if (!isBatch) {
          self.ajaxAborted = false;
        }
        if (self.showPreview) {
          if (!$thumb.hasClass("file-preview-success")) {
            self._setThumbStatus($thumb, "Loading");
            $h.addCss($thumb, "file-uploading");
          }
          $btnUpload.attr("disabled", true);
          $btnDelete.attr("disabled", true);
        }
        if (!isBatch) {
          self.lock();
        }
        if (fm.errors.indexOf(id) !== -1) {
          delete fm.errors[id];
        }
        self._raise("filepreupload", [outData, previewId, i]);
        $.extend(true, params, outData);
        if (self._abort(params)) {
          jqXHR.abort();
          if (!isBatch) {
            self._setThumbStatus($thumb, "New");
            $thumb.removeClass("file-uploading");
            $btnUpload.removeAttr("disabled");
            $btnDelete.removeAttr("disabled");
            self.unlock();
          }
          self._setProgressCancelled();
        }
      };
      fnSuccess = function (data, textStatus, jqXHR) {
        var pid =
          self.showPreview && $thumb.attr("id") ? $thumb.attr("id") : previewId;
        outData = self._getOutData(formdata, jqXHR, data);
        $.extend(true, params, outData);
        setTimeout(function () {
          if ($h.isEmpty(data) || $h.isEmpty(data.error)) {
            if (self.showPreview) {
              self._setThumbStatus($thumb, "Success");
              $btnUpload.hide();
              self._initUploadSuccess(data, $thumb, isBatch);
              self._setProgress(101, $prog);
            }
            self._raise("fileuploaded", [outData, pid, i]);
            if (!isBatch) {
              self.fileManager.remove($thumb);
            } else {
              updateUploadLog();
            }
          } else {
            uploadFailed = true;
            errMsg = self._parseError(
              op,
              jqXHR,
              self.msgUploadError,
              self.fileManager.getFileName(id)
            );
            self._showFileError(errMsg, params);
            self._setPreviewError($thumb, true);
            if (!self.retryErrorUploads) {
              $btnUpload.hide();
            }
            if (isBatch) {
              updateUploadLog();
            }
            self._setProgress(
              101,
              self._getFrame(pid).find(".file-thumb-progress"),
              self.msgUploadError
            );
          }
        }, self.processDelay);
      };
      fnComplete = function () {
        if (self.showPreview) {
          $btnUpload.removeAttr("disabled");
          $btnDelete.removeAttr("disabled");
          $thumb.removeClass("file-uploading");
        }
        if (!isBatch) {
          self.unlock(false);
          self._clearFileInput();
        } else {
          chkComplete();
        }
        self._initSuccessThumbs();
      };
      fnError = function (jqXHR, textStatus, errorThrown) {
        errMsg = self._parseError(
          op,
          jqXHR,
          errorThrown,
          self.fileManager.getFileName(id)
        );
        uploadFailed = true;
        setTimeout(function () {
          var $prog;
          if (isBatch) {
            updateUploadLog();
          }
          self.fileManager.setProgress(id, 100);
          self._setPreviewError($thumb, true);
          if (!self.retryErrorUploads) {
            $btnUpload.hide();
          }
          $.extend(true, params, self._getOutData(formdata, jqXHR));
          self._setProgress(
            101,
            self.$progress,
            self.msgAjaxProgressError.replace("{operation}", op)
          );
          $prog =
            self.showPreview && $thumb
              ? $thumb.find(".file-thumb-progress")
              : "";
          self._setProgress(101, $prog, self.msgUploadError);
          self._showFileError(errMsg, params);
        }, self.processDelay);
      };
      formdata.append(self.uploadFileAttr, fileObj.file, fileName);
      self._setUploadData(formdata, { fileId: id });
      self._ajaxSubmit(
        fnBefore,
        fnSuccess,
        fnComplete,
        fnError,
        formdata,
        id,
        i
      );
    },
    _uploadBatch: function () {
      var self = this,
        fm = self.fileManager,
        total = fm.total(),
        params = {},
        fnBefore,
        fnSuccess,
        fnError,
        fnComplete,
        hasPostData = total > 0 || !$.isEmptyObject(self.uploadExtraData),
        errMsg,
        setAllUploaded,
        formdata = new FormData(),
        op = self.ajaxOperations.uploadBatch;
      if (total === 0 || !hasPostData || self._abort(params)) {
        return;
      }
      setAllUploaded = function () {
        self.fileManager.clear();
        self._clearFileInput();
      };
      fnBefore = function (jqXHR) {
        self.lock();
        fm.initStats();
        var outData = self._getOutData(formdata, jqXHR);
        self.ajaxAborted = false;
        if (self.showPreview) {
          self._getThumbs().each(function () {
            var $thumb = $(this),
              $btnUpload = $thumb.find(".kv-file-upload"),
              $btnDelete = $thumb.find(".kv-file-remove");
            if (!$thumb.hasClass("file-preview-success")) {
              self._setThumbStatus($thumb, "Loading");
              $h.addCss($thumb, "file-uploading");
            }
            $btnUpload.attr("disabled", true);
            $btnDelete.attr("disabled", true);
          });
        }
        self._raise("filebatchpreupload", [outData]);
        if (self._abort(outData)) {
          jqXHR.abort();
          self._getThumbs().each(function () {
            var $thumb = $(this),
              $btnUpload = $thumb.find(".kv-file-upload"),
              $btnDelete = $thumb.find(".kv-file-remove");
            if ($thumb.hasClass("file-preview-loading")) {
              self._setThumbStatus($thumb, "New");
              $thumb.removeClass("file-uploading");
            }
            $btnUpload.removeAttr("disabled");
            $btnDelete.removeAttr("disabled");
          });
          self._setProgressCancelled();
        }
      };
      fnSuccess = function (data, textStatus, jqXHR) {
        /** @namespace data.errorkeys */
        var outData = self._getOutData(formdata, jqXHR, data),
          key = 0,
          $thumbs = self._getThumbs(":not(.file-preview-success)"),
          keys =
            $h.isEmpty(data) || $h.isEmpty(data.errorkeys)
              ? []
              : data.errorkeys;

        if ($h.isEmpty(data) || $h.isEmpty(data.error)) {
          self._raise("filebatchuploadsuccess", [outData]);
          setAllUploaded();
          if (self.showPreview) {
            $thumbs.each(function () {
              var $thumb = $(this);
              self._setThumbStatus($thumb, "Success");
              $thumb.removeClass("file-uploading");
              $thumb.find(".kv-file-upload").hide().removeAttr("disabled");
            });
            self._initUploadSuccess(data);
          } else {
            self.reset();
          }
          self._setProgress(101);
        } else {
          if (self.showPreview) {
            $thumbs.each(function () {
              var $thumb = $(this);
              $thumb.removeClass("file-uploading");
              $thumb.find(".kv-file-upload").removeAttr("disabled");
              $thumb.find(".kv-file-remove").removeAttr("disabled");
              if (keys.length === 0 || $.inArray(key, keys) !== -1) {
                self._setPreviewError($thumb, true);
                if (!self.retryErrorUploads) {
                  $thumb.find(".kv-file-upload").hide();
                  self.fileManager.remove($thumb);
                }
              } else {
                $thumb.find(".kv-file-upload").hide();
                self._setThumbStatus($thumb, "Success");
                self.fileManager.remove($thumb);
              }
              if (
                !$thumb.hasClass("file-preview-error") ||
                self.retryErrorUploads
              ) {
                key++;
              }
            });
            self._initUploadSuccess(data);
          }
          errMsg = self._parseError(op, jqXHR, self.msgUploadError);
          self._showFileError(errMsg, outData, "filebatchuploaderror");
          self._setProgress(101, self.$progress, self.msgUploadError);
        }
      };
      fnComplete = function () {
        self.unlock();
        self._initSuccessThumbs();
        self._clearFileInput();
        self._raise("filebatchuploadcomplete", [
          self.fileManager.stack,
          self._getExtraData(),
        ]);
      };
      fnError = function (jqXHR, textStatus, errorThrown) {
        var outData = self._getOutData(formdata, jqXHR);
        errMsg = self._parseError(op, jqXHR, errorThrown);
        self._showFileError(errMsg, outData, "filebatchuploaderror");
        self.uploadFileCount = total - 1;
        if (!self.showPreview) {
          return;
        }
        self._getThumbs().each(function () {
          var $thumb = $(this);
          $thumb.removeClass("file-uploading");
          if (self.fileManager.getFile($thumb.attr("data-fileid"))) {
            self._setPreviewError($thumb);
          }
        });
        self._getThumbs().removeClass("file-uploading");
        self._getThumbs(" .kv-file-upload").removeAttr("disabled");
        self._getThumbs(" .kv-file-delete").removeAttr("disabled");
        self._setProgress(
          101,
          self.$progress,
          self.msgAjaxProgressError.replace("{operation}", op)
        );
      };
      var ctr = 0;
      $.each(self.fileManager.stack, function (key, data) {
        if (!$h.isEmpty(data.file)) {
          formdata.append(
            self.uploadFileAttr,
            data.file,
            data.nameFmt || "untitled_" + ctr
          );
        }
        ctr++;
      });
      self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError, formdata);
    },
    _uploadExtraOnly: function () {
      var self = this,
        params = {},
        fnBefore,
        fnSuccess,
        fnComplete,
        fnError,
        formdata = new FormData(),
        errMsg,
        op = self.ajaxOperations.uploadExtra;
      if (self._abort(params)) {
        return;
      }
      fnBefore = function (jqXHR) {
        self.lock();
        var outData = self._getOutData(formdata, jqXHR);
        self._raise("filebatchpreupload", [outData]);
        self._setProgress(50);
        params.data = outData;
        params.xhr = jqXHR;
        if (self._abort(params)) {
          jqXHR.abort();
          self._setProgressCancelled();
        }
      };
      fnSuccess = function (data, textStatus, jqXHR) {
        var outData = self._getOutData(formdata, jqXHR, data);
        if ($h.isEmpty(data) || $h.isEmpty(data.error)) {
          self._raise("filebatchuploadsuccess", [outData]);
          self._clearFileInput();
          self._initUploadSuccess(data);
          self._setProgress(101);
        } else {
          errMsg = self._parseError(op, jqXHR, self.msgUploadError);
          self._showFileError(errMsg, outData, "filebatchuploaderror");
        }
      };
      fnComplete = function () {
        self.unlock();
        self._clearFileInput();
        self._raise("filebatchuploadcomplete", [
          self.fileManager.stack,
          self._getExtraData(),
        ]);
      };
      fnError = function (jqXHR, textStatus, errorThrown) {
        var outData = self._getOutData(formdata, jqXHR);
        errMsg = self._parseError(op, jqXHR, errorThrown);
        params.data = outData;
        self._showFileError(errMsg, outData, "filebatchuploaderror");
        self._setProgress(
          101,
          self.$progress,
          self.msgAjaxProgressError.replace("{operation}", op)
        );
      };
      self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError, formdata);
    },
    _deleteFileIndex: function ($frame) {
      var self = this,
        ind = $frame.attr("data-fileindex"),
        rev = self.reversePreviewOrder;
      if (ind.substring(0, 5) === $h.INIT_FLAG) {
        ind = parseInt(ind.replace($h.INIT_FLAG, ""));
        self.initialPreview = $h.spliceArray(self.initialPreview, ind, rev);
        self.initialPreviewConfig = $h.spliceArray(
          self.initialPreviewConfig,
          ind,
          rev
        );
        self.initialPreviewThumbTags = $h.spliceArray(
          self.initialPreviewThumbTags,
          ind,
          rev
        );
        self.getFrames().each(function () {
          var $nFrame = $(this),
            nInd = $nFrame.attr("data-fileindex");
          if (nInd.substring(0, 5) === $h.INIT_FLAG) {
            nInd = parseInt(nInd.replace($h.INIT_FLAG, ""));
            if (nInd > ind) {
              nInd--;
              $nFrame.attr("data-fileindex", $h.INIT_FLAG + nInd);
            }
          }
        });
      }
    },
    _resetCaption: function () {
      var self = this;
      setTimeout(function () {
        var cap,
          n,
          chk = self.previewCache.count(true),
          len = self.fileManager.count(),
          file,
          incomplete = ":not(.file-preview-success):not(.file-preview-error)",
          hasThumb = self.showPreview && self.getFrames(incomplete).length;
        if (len === 0 && chk === 0 && !hasThumb) {
          self.reset();
        } else {
          n = chk + len;
          if (n > 1) {
            cap = self._getMsgSelected(n);
          } else {
            file = self.fileManager.getFirstFile();
            cap = file ? file.nameFmt : "_";
          }
          self._setCaption(cap);
        }
      }, self.processDelay);
    },
    _initFileActions: function () {
      var self = this;
      if (!self.showPreview) {
        return;
      }
      self._initZoomButton();
      self.getFrames(" .kv-file-remove").each(function () {
        var $el = $(this),
          $frame = $el.closest($h.FRAMES),
          hasError,
          id = $frame.attr("id"),
          ind = $frame.attr("data-fileindex"),
          status;
        self._handler($el, "click", function () {
          status = self._raise("filepreremove", [id, ind]);
          if (status === false || !self._validateMinCount()) {
            return false;
          }
          hasError = $frame.hasClass("file-preview-error");
          $h.cleanMemory($frame);
          $frame.fadeOut("slow", function () {
            self.fileManager.remove($frame);
            self._clearObjects($frame);
            $frame.remove();
            if (id && hasError) {
              self.$errorContainer
                .find('li[data-thumb-id="' + id + '"]')
                .fadeOut("fast", function () {
                  $(this).remove();
                  if (!self._errorsExist()) {
                    self._resetErrors();
                  }
                });
            }
            self._clearFileInput();
            self._resetCaption();
            self._raise("fileremoved", [id, ind]);
          });
        });
      });
      self.getFrames(" .kv-file-upload").each(function () {
        var $el = $(this);
        self._handler($el, "click", function () {
          var $frame = $el.closest($h.FRAMES),
            fileId = $frame.attr("data-fileid");
          self._hideProgress();
          if (
            $frame.hasClass("file-preview-error") &&
            !self.retryErrorUploads
          ) {
            return;
          }
          self._uploadSingle(self.fileManager.getIndex(fileId), fileId, false);
        });
      });
    },
    _initPreviewActions: function () {
      var self = this,
        $preview = self.$preview,
        deleteExtraData = self.deleteExtraData || {},
        btnRemove = $h.FRAMES + " .kv-file-remove",
        settings = self.fileActionSettings,
        origClass = settings.removeClass,
        errClass = settings.removeErrorClass,
        resetProgress = function () {
          var hasFiles = self.isAjaxUpload
            ? self.previewCache.count(true)
            : self._inputFileCount();
          if (!self.getFrames().length && !hasFiles) {
            self._setCaption("");
            self.reset();
            self.initialCaption = "";
          }
        };
      self._initZoomButton();
      $preview.find(btnRemove).each(function () {
        var $el = $(this),
          vUrl = $el.data("url") || self.deleteUrl,
          vKey = $el.data("key"),
          errMsg,
          fnBefore,
          fnSuccess,
          fnError,
          op = self.ajaxOperations.deleteThumb;
        if ($h.isEmpty(vUrl) || vKey === undefined) {
          return;
        }
        if (typeof vUrl === "function") {
          vUrl = vUrl();
        }
        var $frame = $el.closest($h.FRAMES),
          cache = self.previewCache.data,
          settings,
          params,
          config,
          fileName,
          extraData,
          index = $frame.attr("data-fileindex");
        index = parseInt(index.replace($h.INIT_FLAG, ""));
        config =
          $h.isEmpty(cache.config) && $h.isEmpty(cache.config[index])
            ? null
            : cache.config[index];
        extraData =
          $h.isEmpty(config) || $h.isEmpty(config.extra)
            ? deleteExtraData
            : config.extra;
        fileName = (config && (config.filename || config.caption)) || "";
        if (typeof extraData === "function") {
          extraData = extraData();
        }
        params = { id: $el.attr("id"), key: vKey, extra: extraData };
        fnBefore = function (jqXHR) {
          self.ajaxAborted = false;
          self._raise("filepredelete", [vKey, jqXHR, extraData]);
          if (self._abort()) {
            jqXHR.abort();
          } else {
            $el.removeClass(errClass);
            $h.addCss($frame, "file-uploading");
            $h.addCss($el, "disabled " + origClass);
          }
        };
        fnSuccess = function (data, textStatus, jqXHR) {
          var n, cap;
          if (!$h.isEmpty(data) && !$h.isEmpty(data.error)) {
            params.jqXHR = jqXHR;
            params.response = data;
            errMsg = self._parseError(op, jqXHR, self.msgDeleteError, fileName);
            self._showFileError(errMsg, params, "filedeleteerror");
            $frame.removeClass("file-uploading");
            $el.removeClass("disabled " + origClass).addClass(errClass);
            resetProgress();
            return;
          }
          $frame.removeClass("file-uploading").addClass("file-deleted");
          $frame.fadeOut("slow", function () {
            index = parseInt(
              $frame.attr("data-fileindex").replace($h.INIT_FLAG, "")
            );
            self.previewCache.unset(index);
            self._deleteFileIndex($frame);
            n = self.previewCache.count(true);
            cap = n > 0 ? self._getMsgSelected(n) : "";
            self._setCaption(cap);
            self._raise("filedeleted", [vKey, jqXHR, extraData]);
            self._clearObjects($frame);
            $frame.remove();
            resetProgress();
          });
        };
        fnError = function (jqXHR, textStatus, errorThrown) {
          var errMsg = self._parseError(op, jqXHR, errorThrown, fileName);
          params.jqXHR = jqXHR;
          params.response = {};
          self._showFileError(errMsg, params, "filedeleteerror");
          $frame.removeClass("file-uploading");
          $el.removeClass("disabled " + origClass).addClass(errClass);
          resetProgress();
        };
        self._initAjaxSettings();
        self._mergeAjaxCallback("beforeSend", fnBefore, "delete");
        self._mergeAjaxCallback("success", fnSuccess, "delete");
        self._mergeAjaxCallback("error", fnError, "delete");
        settings = $.extend(
          true,
          {},
          {
            url: self._encodeURI(vUrl),
            type: "POST",
            dataType: "json",
            data: $.extend(true, {}, { key: vKey }, extraData),
          },
          self._ajaxDeleteSettings
        );
        self._handler($el, "click", function () {
          if (!self._validateMinCount()) {
            return false;
          }
          self.ajaxAborted = false;
          self._raise("filebeforedelete", [vKey, extraData]);
          if (self.ajaxAborted instanceof Promise) {
            self.ajaxAborted.then(function (result) {
              if (!result) {
                $.ajax(settings);
              }
            });
          } else {
            if (!self.ajaxAborted) {
              $.ajax(settings);
            }
          }
        });
      });
    },
    _hideFileIcon: function () {
      var self = this;
      if (self.overwriteInitial) {
        self.$captionContainer.removeClass("icon-visible");
      }
    },
    _showFileIcon: function () {
      var self = this;
      $h.addCss(self.$captionContainer, "icon-visible");
    },
    _getSize: function (bytes, sizes) {
      var self = this,
        size = parseFloat(bytes),
        i,
        func = self.fileSizeGetter,
        out;
      if (!$.isNumeric(bytes) || !$.isNumeric(size)) {
        return "";
      }
      if (typeof func === "function") {
        out = func(size);
      } else {
        if (size === 0) {
          out = "0.00 B";
        } else {
          i = Math.floor(Math.log(size) / Math.log(1024));
          if (!sizes) {
            sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
          }
          out = (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
        }
      }
      return self._getLayoutTemplate("size").replace("{sizeText}", out);
    },
    _getFileType: function (ftype) {
      var self = this;
      return self.mimeTypeAliases[ftype] || ftype;
    },
    _generatePreviewTemplate: function (
      cat,
      data,
      fname,
      ftype,
      previewId,
      fileId,
      isError,
      size,
      frameClass,
      foot,
      ind,
      templ,
      attrs,
      zoomData
    ) {
      var self = this,
        caption = self.slug(fname),
        prevContent,
        zoomContent = "",
        styleAttribs = "",
        screenW =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        config,
        title = caption,
        alt = caption,
        typeCss = "type-default",
        getContent,
        footer =
          foot || self._renderFileFooter(cat, caption, size, "auto", isError),
        forcePrevIcon = self.preferIconicPreview,
        forceZoomIcon = self.preferIconicZoomPreview,
        newCat = forcePrevIcon ? "other" : cat;
      config =
        screenW < 400
          ? self.previewSettingsSmall[newCat] ||
            self.defaults.previewSettingsSmall[newCat]
          : self.previewSettings[newCat] ||
            self.defaults.previewSettings[newCat];
      if (config) {
        $.each(config, function (key, val) {
          styleAttribs += key + ":" + val + ";";
        });
      }
      getContent = function (c, d, zoom, frameCss) {
        var id = zoom ? "zoom-" + previewId : previewId,
          tmplt = self._getPreviewTemplate(c),
          css = (frameClass || "") + " " + frameCss;
        if (self.frameClass) {
          css = self.frameClass + " " + css;
        }
        if (zoom) {
          css = css.replace(" " + $h.SORT_CSS, "");
        }
        tmplt = self._parseFilePreviewIcon(tmplt, fname);
        if (c === "text") {
          d = $h.htmlEncode(d);
        }
        if (cat === "object" && !ftype) {
          $.each(self.defaults.fileTypeSettings, function (key, func) {
            if (key === "object" || key === "other") {
              return;
            }
            if (func(fname, ftype)) {
              typeCss = "type-" + key;
            }
          });
        }
        if (!$h.isEmpty(attrs)) {
          if (attrs.title !== undefined && attrs.title !== null) {
            title = attrs.title;
          }
          if (attrs.alt !== undefined && attrs.alt !== null) {
            title = attrs.alt;
          }
        }
        return tmplt.setTokens({
          previewId: id,
          caption: caption,
          title: title,
          alt: alt,
          frameClass: css,
          type: self._getFileType(ftype),
          fileindex: ind,
          fileid: fileId || "",
          typeCss: typeCss,
          footer: footer,
          data: d,
          template: templ || cat,
          style: styleAttribs ? 'style="' + styleAttribs + '"' : "",
        });
      };
      ind = ind || previewId.slice(previewId.lastIndexOf("-") + 1);
      if (self.fileActionSettings.showZoom) {
        zoomContent = getContent(
          forceZoomIcon ? "other" : cat,
          zoomData ? zoomData : data,
          true,
          "kv-zoom-thumb"
        );
      }
      zoomContent =
        "\n" +
        self
          ._getLayoutTemplate("zoomCache")
          .replace("{zoomContent}", zoomContent);
      if (typeof self.sanitizeZoomCache === "function") {
        zoomContent = self.sanitizeZoomCache(zoomContent);
      }
      prevContent = getContent(
        forcePrevIcon ? "other" : cat,
        data,
        false,
        "kv-preview-thumb"
      );
      return prevContent.setTokens({ zoomCache: zoomContent });
    },
    _addToPreview: function ($preview, content) {
      var self = this,
        $el;
      content = $h.cspBuffer.stash(content);
      $el = self.reversePreviewOrder
        ? $preview.prepend(content)
        : $preview.append(content);
      $h.cspBuffer.apply($preview);
      return $el;
    },
    _previewDefault: function (file, isDisabled) {
      var self = this,
        $preview = self.$preview;
      if (!self.showPreview) {
        return;
      }
      var fname = $h.getFileName(file),
        ftype = file ? file.type : "",
        content,
        size = file.size || 0,
        caption = self._getFileName(file, ""),
        isError = isDisabled === true && !self.isAjaxUpload,
        data = $h.createObjectURL(file),
        fileId = self.fileManager.getId(file),
        previewId = self._getThumbId(fileId);
      self._clearDefaultPreview();
      content = self._generatePreviewTemplate(
        "other",
        data,
        fname,
        ftype,
        previewId,
        fileId,
        isError,
        size
      );
      self._addToPreview($preview, content);
      self._setThumbAttr(previewId, caption, size);
      if (isDisabled === true && self.isAjaxUpload) {
        self._setThumbStatus(self._getFrame(previewId), "Error");
      }
    },
    _previewFile: function (i, file, theFile, data, fileInfo) {
      if (!this.showPreview) {
        return;
      }
      var self = this,
        fname = $h.getFileName(file),
        ftype = fileInfo.type,
        caption = fileInfo.name,
        cat = self._parseFileType(ftype, fname),
        content,
        $preview = self.$preview,
        fsize = file.size || 0,
        iData =
          cat === "text" || cat === "html" || cat === "image"
            ? theFile.target.result
            : data,
        fileId = self.fileManager.getId(file),
        previewId = self._getThumbId(fileId);
      /** @namespace window.DOMPurify */
      if (cat === "html" && self.purifyHtml && window.DOMPurify) {
        iData = window.DOMPurify.sanitize(iData);
      }
      content = self._generatePreviewTemplate(
        cat,
        iData,
        fname,
        ftype,
        previewId,
        fileId,
        false,
        fsize
      );
      self._clearDefaultPreview();
      self._addToPreview($preview, content);
      var $thumb = self._getFrame(previewId);
      self._validateImageOrientation(
        $thumb.find("img"),
        file,
        previewId,
        fileId,
        caption,
        ftype,
        fsize,
        iData
      );
      self._setThumbAttr(previewId, caption, fsize);
      self._initSortable();
    },
    _setThumbAttr: function (id, caption, size) {
      var self = this,
        $frame = self._getFrame(id);
      if ($frame.length) {
        size = size && size > 0 ? self._getSize(size) : "";
        $frame.data({ caption: caption, size: size });
      }
    },
    _setInitThumbAttr: function () {
      var self = this,
        data = self.previewCache.data,
        len = self.previewCache.count(true),
        config,
        caption,
        size,
        previewId;
      if (len === 0) {
        return;
      }
      for (var i = 0; i < len; i++) {
        config = data.config[i];
        previewId = self.previewInitId + "-" + $h.INIT_FLAG + i;
        caption = $h.ifSet("caption", config, $h.ifSet("filename", config));
        size = $h.ifSet("size", config);
        self._setThumbAttr(previewId, caption, size);
      }
    },
    _slugDefault: function (text) {
      // noinspection RegExpRedundantEscape
      return $h.isEmpty(text, true)
        ? ""
        : String(text).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
    },
    _updateFileDetails: function (numFiles, skipRaiseEvent) {
      var self = this,
        $el = self.$element,
        label,
        n,
        log,
        nFiles,
        file,
        name =
          ($h.isIE(9) && $h.findFileName($el.val())) ||
          ($el[0].files[0] && $el[0].files[0].name);
      if (!name && self.fileManager.count() > 0) {
        file = self.fileManager.getFirstFile();
        label = file.nameFmt;
      } else {
        label = name ? self.slug(name) : "_";
      }
      n = self.isAjaxUpload ? self.fileManager.count() : numFiles;
      nFiles = self.previewCache.count(true) + n;
      log = n === 1 ? label : self._getMsgSelected(nFiles);
      if (self.isError) {
        self.$previewContainer.removeClass("file-thumb-loading");
        self.$previewStatus.html("");
        self.$captionContainer.removeClass("icon-visible");
      } else {
        self._showFileIcon();
      }
      self._setCaption(log, self.isError);
      self.$container.removeClass("file-input-new file-input-ajax-new");
      if (!skipRaiseEvent) {
        self._raise("fileselect", [numFiles, label]);
      }
      if (self.previewCache.count(true)) {
        self._initPreviewActions();
      }
    },
    _setThumbStatus: function ($thumb, status) {
      var self = this;
      if (!self.showPreview) {
        return;
      }
      var icon = "indicator" + status,
        msg = icon + "Title",
        css = "file-preview-" + status.toLowerCase(),
        $indicator = $thumb.find(".file-upload-indicator"),
        config = self.fileActionSettings;
      $thumb.removeClass(
        "file-preview-success file-preview-error file-preview-paused file-preview-loading"
      );
      if (status === "Success") {
        $thumb.find(".file-drag-handle").remove();
      }
      $h.setHtml($indicator, config[icon]);
      $indicator.attr("title", config[msg]);
      $thumb.addClass(css);
      if (status === "Error" && !self.retryErrorUploads) {
        $thumb.find(".kv-file-upload").attr("disabled", true);
      }
    },
    _setProgressCancelled: function () {
      var self = this;
      self._setProgress(101, self.$progress, self.msgCancelled);
    },
    _setProgress: function (p, $el, error, stats) {
      var self = this;
      $el = $el || self.$progress;
      if (!$el.length) {
        return;
      }
      var pct = Math.min(p, 100),
        out,
        pctLimit = self.progressUploadThreshold,
        t = p <= 100 ? self.progressTemplate : self.progressCompleteTemplate,
        template =
          pct < 100
            ? self.progressTemplate
            : error
            ? self.paused
              ? self.progressPauseTemplate
              : self.progressErrorTemplate
            : t;
      if (p >= 100) {
        stats = "";
      }
      if (!$h.isEmpty(template)) {
        if (pctLimit && pct > pctLimit && p <= 100) {
          out = template.setTokens({
            percent: pctLimit,
            status: self.msgUploadThreshold,
          });
        } else {
          out = template.setTokens({
            percent: pct,
            status: p > 100 ? self.msgUploadEnd : pct + "%",
          });
        }
        stats = stats || "";
        out = out.setTokens({ stats: stats });
        $h.setHtml($el, out);
        if (error) {
          $h.setHtml($el.find('[role="progressbar"]'), error);
        }
      }
    },
    _hasFiles: function () {
      var el = this.$element[0];
      return !!(el && el.files && el.files.length);
    },
    _setFileDropZoneTitle: function () {
      var self = this,
        $zone = self.$container.find(".file-drop-zone"),
        title = self.dropZoneTitle,
        strFiles;
      if (self.isClickable) {
        strFiles = $h.isEmpty(self.$element.attr("multiple"))
          ? self.fileSingle
          : self.filePlural;
        title += self.dropZoneClickTitle.replace("{files}", strFiles);
      }
      $zone.find("." + self.dropZoneTitleClass).remove();
      if (
        !self.showPreview ||
        $zone.length === 0 ||
        self.fileManager.count() > 0 ||
        !self.dropZoneEnabled ||
        self.previewCache.count() > 0 ||
        (!self.isAjaxUpload && self._hasFiles())
      ) {
        return;
      }
      if (
        $zone.find($h.FRAMES).length === 0 &&
        $h.isEmpty(self.defaultPreviewContent)
      ) {
        $zone.prepend(
          '<div class="' + self.dropZoneTitleClass + '">' + title + "</div>"
        );
      }
      self.$container.removeClass("file-input-new");
      $h.addCss(self.$container, "file-input-ajax-new");
    },
    _getStats: function (stats) {
      var self = this,
        pendingTime,
        t;
      if (!self.showUploadStats || !stats || !stats.bitrate) {
        return "";
      }
      t = self._getLayoutTemplate("stats");
      pendingTime =
        !stats.elapsed || !stats.bps
          ? self.msgCalculatingTime
          : self.msgPendingTime.setTokens({
              time: $h.getElapsed(Math.ceil(stats.pendingBytes / stats.bps)),
            });

      return t.setTokens({
        uploadSpeed: stats.bitrate,
        pendingTime: pendingTime,
      });
    },
    _setResumableProgress: function (pct, stats, $thumb) {
      var self = this,
        rm = self.resumableManager,
        obj = $thumb ? rm : self,
        $prog = $thumb ? $thumb.find(".file-thumb-progress") : null;
      if (obj.lastProgress === 0) {
        obj.lastProgress = pct;
      }
      if (pct < obj.lastProgress) {
        pct = obj.lastProgress;
      }
      self._setProgress(pct, $prog, null, self._getStats(stats));
      obj.lastProgress = pct;
    },
    _toggleResumableProgress: function (template, message) {
      var self = this,
        $progress = self.$progress;
      if ($progress && $progress.length) {
        $h.setHtml(
          $progress,
          template.setTokens({
            percent: 101,
            status: message,
            stats: "",
          })
        );
      }
    },
    _setFileUploadStats: function (id, pct, stats) {
      var self = this,
        $prog = self.$progress;
      if (!self.showPreview && (!$prog || !$prog.length)) {
        return;
      }
      var fm = self.fileManager,
        rm = self.resumableManager,
        $thumb = fm.getThumb(id),
        pctTot,
        totUpSize = 0,
        totSize = fm.getTotalSize(),
        totStats = $.extend(true, {}, stats);
      if (self.enableResumableUpload) {
        var loaded = stats.loaded,
          currUplSize = rm.getUploadedSize(),
          currTotSize = rm.file.size,
          totLoaded;
        loaded += currUplSize;
        totLoaded = fm.uploadedSize + loaded;
        pct = $h.round((100 * loaded) / currTotSize);
        stats.pendingBytes = currTotSize - currUplSize;
        self._setResumableProgress(pct, stats, $thumb);
        pctTot = Math.floor((100 * totLoaded) / totSize);
        totStats.pendingBytes = totSize - totLoaded;
        self._setResumableProgress(pctTot, totStats);
      } else {
        fm.setProgress(id, pct);
        $prog =
          $thumb && $thumb.length ? $thumb.find(".file-thumb-progress") : null;
        self._setProgress(pct, $prog, null, self._getStats(stats));
        $.each(fm.stats, function (id, cfg) {
          totUpSize += cfg.loaded;
        });
        totStats.pendingBytes = totSize - totUpSize;
        pctTot = $h.round((totUpSize / totSize) * 100);
        self._setProgress(pctTot, null, null, self._getStats(totStats));
      }
    },
    _validateMinCount: function () {
      var self = this,
        len = self.isAjaxUpload
          ? self.fileManager.count()
          : self._inputFileCount();
      if (
        self.validateInitialCount &&
        self.minFileCount > 0 &&
        self._getFileCount(len - 1) < self.minFileCount
      ) {
        self._noFilesError({});
        return false;
      }
      return true;
    },
    _getFileCount: function (fileCount, includeInitial) {
      var self = this,
        addCount = 0;
      if (includeInitial === undefined) {
        includeInitial = self.validateInitialCount && !self.overwriteInitial;
      }
      if (includeInitial) {
        addCount = self.previewCache.count(true);
        fileCount += addCount;
      }
      return fileCount;
    },
    _getFileId: function (file) {
      return $h.getFileId(file, this.generateFileId);
    },
    _getFileName: function (file, defaultValue) {
      var self = this,
        fileName = $h.getFileName(file);
      return fileName ? self.slug(fileName) : defaultValue;
    },
    _getFileNames: function (skipNull) {
      var self = this;
      return self.filenames.filter(function (n) {
        return skipNull ? n !== undefined : n !== undefined && n !== null;
      });
    },
    _setPreviewError: function ($thumb, keepFile) {
      var self = this,
        removeFrame = self.removeFromPreviewOnError && !self.retryErrorUploads;
      if (!keepFile || removeFrame) {
        self.fileManager.remove($thumb);
      }
      if (!self.showPreview) {
        return;
      }
      if (removeFrame) {
        $thumb.remove();
        return;
      } else {
        self._setThumbStatus($thumb, "Error");
      }
      self._refreshUploadButton($thumb);
    },
    _refreshUploadButton: function ($thumb) {
      var self = this,
        $btn = $thumb.find(".kv-file-upload"),
        cfg = self.fileActionSettings,
        icon = cfg.uploadIcon,
        title = cfg.uploadTitle;
      if (!$btn.length) {
        return;
      }
      if (self.retryErrorUploads) {
        icon = cfg.uploadRetryIcon;
        title = cfg.uploadRetryTitle;
      }
      $btn.attr("title", title);
      $h.setHtml($btn, icon);
    },
    _checkDimensions: function (i, chk, $img, $thumb, fname, type, params) {
      var self = this,
        msg,
        dim,
        tag = chk === "Small" ? "min" : "max",
        limit = self[tag + "Image" + type],
        $imgEl,
        isValid;
      if ($h.isEmpty(limit) || !$img.length) {
        return;
      }
      $imgEl = $img[0];
      dim =
        type === "Width"
          ? $imgEl.naturalWidth || $imgEl.width
          : $imgEl.naturalHeight || $imgEl.height;
      isValid = chk === "Small" ? dim >= limit : dim <= limit;
      if (isValid) {
        return;
      }
      msg = self["msgImage" + type + chk].setTokens({
        name: fname,
        size: limit,
      });
      self._showFileError(msg, params);
      self._setPreviewError($thumb);
    },
    _getExifObj: function (data) {
      var self = this,
        exifObj,
        error = $h.logMessages.exifWarning;
      if (
        data.slice(0, 23) !== "data:image/jpeg;base64," &&
        data.slice(0, 22) !== "data:image/jpg;base64,"
      ) {
        exifObj = null;
        return;
      }
      try {
        exifObj = window.piexif ? window.piexif.load(data) : null;
      } catch (err) {
        exifObj = null;
        error = (err && err.message) || "";
      }
      if (!exifObj) {
        self._log($h.logMessages.badExifParser, { details: error });
      }
      return exifObj;
    },
    setImageOrientation: function ($img, $zoomImg, value, $thumb) {
      var self = this,
        invalidImg = !$img || !$img.length,
        invalidZoomImg = !$zoomImg || !$zoomImg.length,
        $mark,
        isHidden = false,
        $div,
        zoomOnly =
          invalidImg && $thumb && $thumb.attr("data-template") === "image",
        ev;
      if (invalidImg && invalidZoomImg) {
        return;
      }
      ev = "load.fileinputimageorient";
      if (zoomOnly) {
        $img = $zoomImg;
        $zoomImg = null;
        $img.css(self.previewSettings.image);
        $div = $(document.createElement("div")).appendTo(
          $thumb.find(".kv-file-content")
        );
        $mark = $(document.createElement("span")).insertBefore($img);
        $img
          .css("visibility", "hidden")
          .removeClass("file-zoom-detail")
          .appendTo($div);
      } else {
        isHidden = !$img.is(":visible");
      }
      $img.off(ev).on(ev, function () {
        if (isHidden) {
          self.$preview.removeClass("hide-content");
          $thumb.find(".kv-file-content").css("visibility", "hidden");
        }
        var img = $img[0],
          zoomImg = $zoomImg && $zoomImg.length ? $zoomImg[0] : null,
          h = img.offsetHeight,
          w = img.offsetWidth,
          r = $h.getRotation(value);
        if (isHidden) {
          $thumb.find(".kv-file-content").css("visibility", "visible");
          self.$preview.addClass("hide-content");
        }
        $img.data("orientation", value);
        if (zoomImg) {
          $zoomImg.data("orientation", value);
        }
        if (value < 5) {
          $h.setTransform(img, r);
          $h.setTransform(zoomImg, r);
          return;
        }
        var offsetAngle = Math.atan(w / h),
          origFactor = Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2)),
          scale = !origFactor
            ? 1
            : h / Math.cos(Math.PI / 2 + offsetAngle) / origFactor,
          s = " scale(" + Math.abs(scale) + ")";
        $h.setTransform(img, r + s);
        $h.setTransform(zoomImg, r + s);
        if (zoomOnly) {
          $img
            .css("visibility", "visible")
            .insertAfter($mark)
            .addClass("file-zoom-detail");
          $mark.remove();
          $div.remove();
        }
      });
    },
    _validateImageOrientation: function (
      $img,
      file,
      previewId,
      fileId,
      caption,
      ftype,
      fsize,
      iData
    ) {
      var self = this,
        exifObj,
        value,
        autoOrientImage = self.autoOrientImage,
        selector;
      if (self.canOrientImage) {
        $img.css("image-orientation", autoOrientImage ? "from-image" : "none");
        return;
      }
      selector = $h.getZoomSelector(previewId, " img");
      exifObj = autoOrientImage ? self._getExifObj(iData) : null;
      value = exifObj ? exifObj["0th"][piexif.ImageIFD.Orientation] : null; // jshint ignore:line
      if (!value) {
        self._validateImage(
          previewId,
          fileId,
          caption,
          ftype,
          fsize,
          iData,
          exifObj
        );
        return;
      }
      self.setImageOrientation(
        $img,
        $(selector),
        value,
        self._getFrame(previewId)
      );
      self._raise("fileimageoriented", { $img: $img, file: file });
      self._validateImage(
        previewId,
        fileId,
        caption,
        ftype,
        fsize,
        iData,
        exifObj
      );
    },
    _validateImage: function (
      previewId,
      fileId,
      fname,
      ftype,
      fsize,
      iData,
      exifObj
    ) {
      var self = this,
        $preview = self.$preview,
        params,
        w1,
        w2,
        $thumb = self._getFrame(previewId),
        i = $thumb.attr("data-fileindex"),
        $img = $thumb.find("img");
      fname = fname || "Untitled";
      $img
        .one("load", function () {
          w1 = $thumb.width();
          w2 = $preview.width();
          if (w1 > w2) {
            $img.css("width", "100%");
          }
          params = { ind: i, id: previewId, fileId: fileId };
          self._checkDimensions(
            i,
            "Small",
            $img,
            $thumb,
            fname,
            "Width",
            params
          );
          self._checkDimensions(
            i,
            "Small",
            $img,
            $thumb,
            fname,
            "Height",
            params
          );
          if (!self.resizeImage) {
            self._checkDimensions(
              i,
              "Large",
              $img,
              $thumb,
              fname,
              "Width",
              params
            );
            self._checkDimensions(
              i,
              "Large",
              $img,
              $thumb,
              fname,
              "Height",
              params
            );
          }
          self._raise("fileimageloaded", [previewId]);
          self.fileManager.addImage(fileId, {
            ind: i,
            img: $img,
            thumb: $thumb,
            pid: previewId,
            typ: ftype,
            siz: fsize,
            validated: false,
            imgData: iData,
            exifObj: exifObj,
          });
          $thumb.data("exif", exifObj);
          self._validateAllImages();
        })
        .one("error", function () {
          self._raise("fileimageloaderror", [previewId]);
        })
        .each(function () {
          if (this.complete) {
            $(this).trigger("load");
          } else {
            if (this.error) {
              $(this).trigger("error");
            }
          }
        });
    },
    _validateAllImages: function () {
      var self = this,
        counter = { val: 0 },
        numImgs = self.fileManager.getImageCount(),
        fsize,
        minSize = self.resizeIfSizeMoreThan;
      if (numImgs !== self.fileManager.totalImages) {
        return;
      }
      self._raise("fileimagesloaded");
      if (!self.resizeImage) {
        return;
      }
      $.each(self.fileManager.loadedImages, function (id, config) {
        if (!config.validated) {
          fsize = config.siz;
          if (fsize && fsize > minSize * 1000) {
            self._getResizedImage(id, config, counter, numImgs);
          }
          config.validated = true;
        }
      });
    },
    _getResizedImage: function (id, config, counter, numImgs) {
      var self = this,
        img = $(config.img)[0],
        width = img.naturalWidth,
        height = img.naturalHeight,
        blob,
        ratio = 1,
        maxWidth = self.maxImageWidth || width,
        maxHeight = self.maxImageHeight || height,
        isValidImage = !!(width && height),
        chkWidth,
        chkHeight,
        canvas = self.imageCanvas,
        dataURI,
        context = self.imageCanvasContext,
        type = config.typ,
        pid = config.pid,
        ind = config.ind,
        $thumb = config.thumb,
        throwError,
        msg,
        exifObj = config.exifObj,
        exifStr,
        file,
        params,
        evParams;
      throwError = function (msg, params, ev) {
        if (self.isAjaxUpload) {
          self._showFileError(msg, params, ev);
        } else {
          self._showError(msg, params, ev);
        }
        self._setPreviewError($thumb);
      };
      file = self.fileManager.getFile(id);
      params = { id: pid, index: ind, fileId: id };
      evParams = [id, pid, ind];
      if (
        !file ||
        !isValidImage ||
        (width <= maxWidth && height <= maxHeight)
      ) {
        if (isValidImage && file) {
          self._raise("fileimageresized", evParams);
        }
        counter.val++;
        if (counter.val === numImgs) {
          self._raise("fileimagesresized");
        }
        if (!isValidImage) {
          throwError(self.msgImageResizeError, params, "fileimageresizeerror");
          return;
        }
      }
      type = type || self.resizeDefaultImageType;
      chkWidth = width > maxWidth;
      chkHeight = height > maxHeight;
      if (self.resizePreference === "width") {
        ratio = chkWidth
          ? maxWidth / width
          : chkHeight
          ? maxHeight / height
          : 1;
      } else {
        ratio = chkHeight
          ? maxHeight / height
          : chkWidth
          ? maxWidth / width
          : 1;
      }
      self._resetCanvas();
      width *= ratio;
      height *= ratio;
      canvas.width = width;
      canvas.height = height;
      try {
        context.drawImage(img, 0, 0, width, height);
        dataURI = canvas.toDataURL(type, self.resizeQuality);
        if (exifObj) {
          exifStr = window.piexif.dump(exifObj);
          dataURI = window.piexif.insert(exifStr, dataURI);
        }
        blob = $h.dataURI2Blob(dataURI);
        self.fileManager.setFile(id, blob);
        self._raise("fileimageresized", evParams);
        counter.val++;
        if (counter.val === numImgs) {
          self._raise("fileimagesresized", [undefined, undefined]);
        }
        if (!(blob instanceof Blob)) {
          throwError(self.msgImageResizeError, params, "fileimageresizeerror");
        }
      } catch (err) {
        counter.val++;
        if (counter.val === numImgs) {
          self._raise("fileimagesresized", [undefined, undefined]);
        }
        msg = self.msgImageResizeException.replace("{errors}", err.message);
        throwError(msg, params, "fileimageresizeexception");
      }
    },
    _showProgress: function () {
      var self = this;
      if (self.$progress && self.$progress.length) {
        self.$progress.show();
      }
    },
    _hideProgress: function () {
      var self = this;
      if (self.$progress && self.$progress.length) {
        self.$progress.hide();
      }
    },
    _initBrowse: function ($container) {
      var self = this,
        $el = self.$element;
      if (self.showBrowse) {
        self.$btnFile = $container.find(".btn-file").append($el);
      } else {
        $el.appendTo($container).attr("tabindex", -1);
        $h.addCss($el, "file-no-browse");
      }
    },
    _initClickable: function () {
      var self = this,
        $zone,
        $tmpZone;
      if (!self.isClickable) {
        return;
      }
      $zone = self.$dropZone;
      if (!self.isAjaxUpload) {
        $tmpZone = self.$preview.find(".file-default-preview");
        if ($tmpZone.length) {
          $zone = $tmpZone;
        }
      }

      $h.addCss($zone, "clickable");
      $zone.attr("tabindex", -1);
      self._handler($zone, "click", function (e) {
        var $tar = $(e.target);
        if (
          !$(self.elErrorContainer + ":visible").length &&
          (!$tar.parents(".file-preview-thumbnails").length ||
            $tar.parents(".file-default-preview").length)
        ) {
          self.$element.data("zoneClicked", true).trigger("click");
          $zone.blur();
        }
      });
    },
    _initCaption: function () {
      var self = this,
        cap = self.initialCaption || "";
      if (self.overwriteInitial || $h.isEmpty(cap)) {
        self.$caption.val("");
        return false;
      }
      self._setCaption(cap);
      return true;
    },
    _setCaption: function (content, isError) {
      var self = this,
        title,
        out,
        icon,
        n,
        cap,
        file;
      if (!self.$caption.length) {
        return;
      }
      self.$captionContainer.removeClass("icon-visible");
      if (isError) {
        title = $("<div>" + self.msgValidationError + "</div>").text();
        n = self.fileManager.count();
        if (n) {
          file = self.fileManager.getFirstFile();
          cap = n === 1 && file ? file.nameFmt : self._getMsgSelected(n);
        } else {
          cap = self._getMsgSelected(self.msgNo);
        }
        out = $h.isEmpty(content) ? cap : content;
        icon =
          '<span class="' +
          self.msgValidationErrorClass +
          '">' +
          self.msgValidationErrorIcon +
          "</span>";
      } else {
        if ($h.isEmpty(content)) {
          return;
        }
        title = $("<div>" + content + "</div>").text();
        out = title;
        icon = self._getLayoutTemplate("fileIcon");
      }
      self.$captionContainer.addClass("icon-visible");
      self.$caption.attr("title", title).val(out);
      $h.setHtml(self.$captionIcon, icon);
    },
    _createContainer: function () {
      var self = this,
        attribs = {
          class: "file-input file-input-new" + (self.rtl ? " kv-rtl" : ""),
        },
        $container = $h.createElement($h.cspBuffer.stash(self._renderMain()));
      $h.cspBuffer.apply($container);
      $container.insertBefore(self.$element).attr(attribs);
      self._initBrowse($container);
      if (self.theme) {
        $container.addClass("theme-" + self.theme);
      }
      return $container;
    },
    _refreshContainer: function () {
      var self = this,
        $container = self.$container,
        $el = self.$element;
      $el.insertAfter($container);
      $h.setHtml($container, self._renderMain());
      self._initBrowse($container);
      self._validateDisabled();
    },
    _validateDisabled: function () {
      var self = this;
      self.$caption.attr({ readonly: self.isDisabled });
    },
    _renderMain: function () {
      var self = this,
        dropCss = self.dropZoneEnabled
          ? " file-drop-zone"
          : "file-drop-disabled",
        close = !self.showClose ? "" : self._getLayoutTemplate("close"),
        preview = !self.showPreview
          ? ""
          : self
              ._getLayoutTemplate("preview")
              .setTokens({ class: self.previewClass, dropClass: dropCss }),
        css = self.isDisabled
          ? self.captionClass + " file-caption-disabled"
          : self.captionClass,
        caption = self.captionTemplate.setTokens({
          class: css + " kv-fileinput-caption",
        });
      return self.mainTemplate.setTokens({
        class:
          self.mainClass +
          (!self.showBrowse && self.showCaption ? " no-browse" : ""),
        preview: preview,
        close: close,
        caption: caption,
        upload: self._renderButton("upload"),
        remove: self._renderButton("remove"),
        cancel: self._renderButton("cancel"),
        pause: self._renderButton("pause"),
        browse: self._renderButton("browse"),
      });
    },
    _renderButton: function (type) {
      var self = this,
        tmplt = self._getLayoutTemplate("btnDefault"),
        css = self[type + "Class"],
        title = self[type + "Title"],
        icon = self[type + "Icon"],
        label = self[type + "Label"],
        status = self.isDisabled ? " disabled" : "",
        btnType = "button";
      switch (type) {
        case "remove":
          if (!self.showRemove) {
            return "";
          }
          break;
        case "cancel":
          if (!self.showCancel) {
            return "";
          }
          css += " kv-hidden";
          break;
        case "pause":
          if (!self.showPause) {
            return "";
          }
          css += " kv-hidden";
          break;
        case "upload":
          if (!self.showUpload) {
            return "";
          }
          if (self.isAjaxUpload && !self.isDisabled) {
            tmplt = self
              ._getLayoutTemplate("btnLink")
              .replace("{href}", self.uploadUrl);
          } else {
            btnType = "submit";
          }
          break;
        case "browse":
          if (!self.showBrowse) {
            return "";
          }
          tmplt = self._getLayoutTemplate("btnBrowse");
          break;
        default:
          return "";
      }

      css +=
        type === "browse"
          ? " btn-file"
          : " fileinput-" + type + " fileinput-" + type + "-button";
      if (!$h.isEmpty(label)) {
        label =
          ' <span class="' + self.buttonLabelClass + '">' + label + "</span>";
      }
      return tmplt.setTokens({
        type: btnType,
        css: css,
        title: title,
        status: status,
        icon: icon,
        label: label,
      });
    },
    _renderThumbProgress: function () {
      var self = this;
      return (
        '<div class="file-thumb-progress kv-hidden">' +
        self.progressInfoTemplate.setTokens({
          percent: 101,
          status: self.msgUploadBegin,
          stats: "",
        }) +
        "</div>"
      );
    },
    _renderFileFooter: function (cat, caption, size, width, isError) {
      var self = this,
        config = self.fileActionSettings,
        rem = config.showRemove,
        drg = config.showDrag,
        upl = config.showUpload,
        zoom = config.showZoom,
        out,
        params,
        template = self._getLayoutTemplate("footer"),
        tInd = self._getLayoutTemplate("indicator"),
        ind = isError ? config.indicatorError : config.indicatorNew,
        title = isError ? config.indicatorErrorTitle : config.indicatorNewTitle,
        indicator = tInd.setTokens({ indicator: ind, indicatorTitle: title });
      size = self._getSize(size);
      params = {
        type: cat,
        caption: caption,
        size: size,
        width: width,
        progress: "",
        indicator: indicator,
      };
      if (self.isAjaxUpload) {
        params.progress = self._renderThumbProgress();
        params.actions = self._renderFileActions(
          params,
          upl,
          false,
          rem,
          zoom,
          drg,
          false,
          false,
          false
        );
      } else {
        params.actions = self._renderFileActions(
          params,
          false,
          false,
          false,
          zoom,
          drg,
          false,
          false,
          false
        );
      }
      out = template.setTokens(params);
      out = $h.replaceTags(out, self.previewThumbTags);
      return out;
    },
    _renderFileActions: function (
      cfg,
      showUpl,
      showDwn,
      showDel,
      showZoom,
      showDrag,
      disabled,
      url,
      key,
      isInit,
      dUrl,
      dFile
    ) {
      var self = this;
      if (!cfg.type && isInit) {
        cfg.type = "image";
      }
      if (self.enableResumableUpload) {
        showUpl = false;
      } else {
        if (typeof showUpl === "function") {
          showUpl = showUpl(cfg);
        }
      }
      if (typeof showDwn === "function") {
        showDwn = showDwn(cfg);
      }
      if (typeof showDel === "function") {
        showDel = showDel(cfg);
      }
      if (typeof showZoom === "function") {
        showZoom = showZoom(cfg);
      }
      if (typeof showDrag === "function") {
        showDrag = showDrag(cfg);
      }
      if (!showUpl && !showDwn && !showDel && !showZoom && !showDrag) {
        return "";
      }
      var vUrl = url === false ? "" : ' data-url="' + url + '"',
        btnZoom = "",
        btnDrag = "",
        css,
        vKey = key === false ? "" : ' data-key="' + key + '"',
        btnDelete = "",
        btnUpload = "",
        btnDownload = "",
        template = self._getLayoutTemplate("actions"),
        config = self.fileActionSettings,
        otherButtons = self.otherActionButtons.setTokens({
          dataKey: vKey,
          key: key,
        }),
        removeClass = disabled
          ? config.removeClass + " disabled"
          : config.removeClass;
      if (showDel) {
        btnDelete = self._getLayoutTemplate("actionDelete").setTokens({
          removeClass: removeClass,
          removeIcon: config.removeIcon,
          removeTitle: config.removeTitle,
          dataUrl: vUrl,
          dataKey: vKey,
          key: key,
        });
      }
      if (showUpl) {
        btnUpload = self._getLayoutTemplate("actionUpload").setTokens({
          uploadClass: config.uploadClass,
          uploadIcon: config.uploadIcon,
          uploadTitle: config.uploadTitle,
        });
      }
      if (showDwn) {
        btnDownload = self._getLayoutTemplate("actionDownload").setTokens({
          downloadClass: config.downloadClass,
          downloadIcon: config.downloadIcon,
          downloadTitle: config.downloadTitle,
          downloadUrl: dUrl || self.initialPreviewDownloadUrl,
        });
        btnDownload = btnDownload.setTokens({ filename: dFile, key: key });
      }
      if (showZoom) {
        btnZoom = self._getLayoutTemplate("actionZoom").setTokens({
          zoomClass: config.zoomClass,
          zoomIcon: config.zoomIcon,
          zoomTitle: config.zoomTitle,
        });
      }
      if (showDrag && isInit) {
        css = "drag-handle-init " + config.dragClass;
        btnDrag = self._getLayoutTemplate("actionDrag").setTokens({
          dragClass: css,
          dragTitle: config.dragTitle,
          dragIcon: config.dragIcon,
        });
      }
      return template.setTokens({
        delete: btnDelete,
        upload: btnUpload,
        download: btnDownload,
        zoom: btnZoom,
        drag: btnDrag,
        other: otherButtons,
      });
    },
    _browse: function (e) {
      var self = this;
      if ((e && e.isDefaultPrevented()) || !self._raise("filebrowse")) {
        return;
      }
      if (self.isError && !self.isAjaxUpload) {
        self.clear();
      }
      if (self.focusCaptionOnBrowse) {
        self.$captionContainer.focus();
      }
    },
    _change: function (e) {
      var self = this;
      if (self.changeTriggered) {
        return;
      }
      var $el = self.$element,
        isDragDrop = arguments.length > 1,
        isAjaxUpload = self.isAjaxUpload,
        tfiles,
        files = isDragDrop ? arguments[1] : $el[0].files,
        ctr = self.fileManager.count(),
        total,
        initCount,
        len,
        isSingleUpl = $h.isEmpty($el.attr("multiple")),
        maxCount = !isAjaxUpload && isSingleUpl ? 1 : self.maxFileCount,
        maxTotCount = self.maxTotalFileCount,
        inclAll = maxTotCount > 0 && maxTotCount > maxCount,
        flagSingle = isSingleUpl && ctr > 0,
        throwError = function (mesg, file, previewId, index) {
          var p1 = $.extend(true, {}, self._getOutData(null, {}, {}, files), {
              id: previewId,
              index: index,
            }),
            p2 = { id: previewId, index: index, file: file, files: files };
          self.isPersistentError = true;
          return isAjaxUpload
            ? self._showFileError(mesg, p1)
            : self._showError(mesg, p2);
        },
        maxCountCheck = function (n, m, all) {
          var msg = all ? self.msgTotalFilesTooMany : self.msgFilesTooMany;
          msg = msg.replace("{m}", m).replace("{n}", n);
          self.isError = throwError(msg, null, null, null);
          self.$captionContainer.removeClass("icon-visible");
          self._setCaption("", true);
          self.$container.removeClass("file-input-new file-input-ajax-new");
        };
      self.reader = null;
      self._resetUpload();
      self._hideFileIcon();
      if (self.dropZoneEnabled) {
        self.$container
          .find(".file-drop-zone ." + self.dropZoneTitleClass)
          .remove();
      }
      if (!isAjaxUpload) {
        if (e.target && e.target.files === undefined) {
          files = e.target.value
            ? [{ name: e.target.value.replace(/^.+\\/, "") }]
            : [];
        } else {
          files = e.target.files || {};
        }
      }
      tfiles = files;
      if ($h.isEmpty(tfiles) || tfiles.length === 0) {
        if (!isAjaxUpload) {
          self.clear();
        }
        self._raise("fileselectnone");
        return;
      }
      self._resetErrors();
      len = tfiles.length;
      initCount = isAjaxUpload ? self.fileManager.count() + len : len;
      total = self._getFileCount(initCount, inclAll ? false : undefined);
      if (maxCount > 0 && total > maxCount) {
        if (!self.autoReplace || len > maxCount) {
          maxCountCheck(
            self.autoReplace && len > maxCount ? len : total,
            maxCount
          );
          return;
        }
        if (total > maxCount) {
          self._resetPreviewThumbs(isAjaxUpload);
        }
      } else {
        if (inclAll) {
          total = self._getFileCount(initCount, true);
          if (maxTotCount > 0 && total > maxTotCount) {
            if (!self.autoReplace || len > maxCount) {
              maxCountCheck(
                self.autoReplace && len > maxTotCount ? len : total,
                maxTotCount,
                true
              );
              return;
            }
            if (total > maxCount) {
              self._resetPreviewThumbs(isAjaxUpload);
            }
          }
        }
        if (!isAjaxUpload || flagSingle) {
          self._resetPreviewThumbs(false);
          if (flagSingle) {
            self.clearFileStack();
          }
        } else {
          if (
            isAjaxUpload &&
            ctr === 0 &&
            (!self.previewCache.count(true) || self.overwriteInitial)
          ) {
            self._resetPreviewThumbs(true);
          }
        }
      }
      self.readFiles(tfiles);
    },
    _abort: function (params) {
      var self = this,
        data;
      if (
        self.ajaxAborted &&
        typeof self.ajaxAborted === "object" &&
        self.ajaxAborted.message !== undefined
      ) {
        data = $.extend(true, {}, self._getOutData(null), params);
        data.abortData = self.ajaxAborted.data || {};
        data.abortMessage = self.ajaxAborted.message;
        self._setProgress(101, self.$progress, self.msgCancelled);
        self._showFileError(self.ajaxAborted.message, data, "filecustomerror");
        self.cancel();
        return true;
      }
      return !!self.ajaxAborted;
    },
    _resetFileStack: function () {
      var self = this,
        i = 0;
      self._getThumbs().each(function () {
        var $thumb = $(this),
          ind = $thumb.attr("data-fileindex"),
          pid = $thumb.attr("id");
        if (ind === "-1" || ind === -1) {
          return;
        }
        if (!self.fileManager.getFile($thumb.attr("data-fileid"))) {
          $thumb.attr({ "data-fileindex": i });
          i++;
        } else {
          $thumb.attr({ "data-fileindex": "-1" });
        }
        self._getZoom(pid).attr({
          "data-fileindex": $thumb.attr("data-fileindex"),
        });
      });
    },
    _isFileSelectionValid: function (cnt) {
      var self = this;
      cnt = cnt || 0;
      if (self.required && !self.getFilesCount()) {
        self.$errorContainer.html("");
        self._showFileError(self.msgFileRequired);
        return false;
      }
      if (
        self.minFileCount > 0 &&
        self._getFileCount(cnt) < self.minFileCount
      ) {
        self._noFilesError({});
        return false;
      }
      return true;
    },
    _canPreview: function (file) {
      var self = this;
      if (
        !file ||
        !self.showPreview ||
        !self.$preview ||
        !self.$preview.length
      ) {
        return false;
      }
      var name = file.name || "",
        type = file.type || "",
        size = (file.size || 0) / 1000,
        cat = self._parseFileType(type, name),
        allowedTypes,
        allowedMimes,
        allowedExts,
        skipPreview,
        types = self.allowedPreviewTypes,
        mimes = self.allowedPreviewMimeTypes,
        exts = self.allowedPreviewExtensions || [],
        dTypes = self.disabledPreviewTypes,
        dMimes = self.disabledPreviewMimeTypes,
        dExts = self.disabledPreviewExtensions || [],
        maxSize =
          (self.maxFilePreviewSize && parseFloat(self.maxFilePreviewSize)) || 0,
        expAllExt = new RegExp("\\.(" + exts.join("|") + ")$", "i"),
        expDisExt = new RegExp("\\.(" + dExts.join("|") + ")$", "i");
      allowedTypes = !types || types.indexOf(cat) !== -1;
      allowedMimes = !mimes || mimes.indexOf(type) !== -1;
      allowedExts = !exts.length || $h.compare(name, expAllExt);
      skipPreview =
        (dTypes && dTypes.indexOf(cat) !== -1) ||
        (dMimes && dMimes.indexOf(type) !== -1) ||
        (dExts.length && $h.compare(name, expDisExt)) ||
        (maxSize && !isNaN(maxSize) && size > maxSize);
      return !skipPreview && (allowedTypes || allowedMimes || allowedExts);
    },
    addToStack: function (file, id) {
      this.fileManager.add(file, id);
    },
    clearFileStack: function () {
      var self = this;
      self.fileManager.clear();
      self._initResumableUpload();
      if (self.enableResumableUpload) {
        if (self.showPause === null) {
          self.showPause = true;
        }
        if (self.showCancel === null) {
          self.showCancel = false;
        }
      } else {
        self.showPause = false;
        if (self.showCancel === null) {
          self.showCancel = true;
        }
      }
      return self.$element;
    },
    getFileStack: function () {
      return this.fileManager.stack;
    },
    getFileList: function () {
      return this.fileManager.list();
    },
    getFilesCount: function (includeInitial) {
      var self = this,
        len = self.isAjaxUpload
          ? self.fileManager.count()
          : self._inputFileCount();
      if (includeInitial) {
        len += self.previewCache.count(true);
      }
      return self._getFileCount(len);
    },
    readFiles: function (files) {
      this.reader = new FileReader();
      var self = this,
        reader = self.reader,
        $container = self.$previewContainer,
        $status = self.$previewStatus,
        msgLoading = self.msgLoading,
        msgProgress = self.msgProgress,
        previewInitId = self.previewInitId,
        numFiles = files.length,
        settings = self.fileTypeSettings,
        readFile,
        fileTypes = self.allowedFileTypes,
        typLen = fileTypes ? fileTypes.length : 0,
        fileExt = self.allowedFileExtensions,
        strExt = $h.isEmpty(fileExt) ? "" : fileExt.join(", "),
        throwError = function (msg, file, previewId, index, fileId) {
          var $thumb,
            p1 = $.extend(true, {}, self._getOutData(null, {}, {}, files), {
              id: previewId,
              index: index,
              fileId: fileId,
            }),
            p2 = {
              id: previewId,
              index: index,
              fileId: fileId,
              file: file,
              files: files,
            };
          self._previewDefault(file, true);
          $thumb = self._getFrame(previewId, true);
          if (self.isAjaxUpload) {
            setTimeout(function () {
              readFile(index + 1);
            }, self.processDelay);
          } else {
            self.unlock();
            numFiles = 0;
          }
          if (self.removeFromPreviewOnError && $thumb.length) {
            $thumb.remove();
          } else {
            self._initFileActions();
            $thumb.find(".kv-file-upload").remove();
          }
          self.isPersistentError = true;
          self.isError = self.isAjaxUpload
            ? self._showFileError(msg, p1)
            : self._showError(msg, p2);
          self._updateFileDetails(numFiles);
        };
      self.fileManager.clearImages();
      $.each(files, function (key, file) {
        var func = self.fileTypeSettings.image;
        if (func && func(file.type)) {
          self.fileManager.totalImages++;
        }
      });
      readFile = function (i) {
        var $error = self.$errorContainer,
          errors,
          fm = self.fileManager;
        if (i >= numFiles) {
          self.unlock();
          if (self.duplicateErrors.length) {
            errors = "<li>" + self.duplicateErrors.join("</li><li>") + "</li>";
            if ($error.find("ul").length === 0) {
              $h.setHtml(
                $error,
                self.errorCloseButton + "<ul>" + errors + "</ul>"
              );
            } else {
              $error.find("ul").append(errors);
            }
            $error.fadeIn(self.fadeDelay);
            self._handler($error.find(".kv-error-close"), "click", function () {
              $error.fadeOut(self.fadeDelay);
            });
            self.duplicateErrors = [];
          }
          if (self.isAjaxUpload) {
            self._raise("filebatchselected", [fm.stack]);
            if (fm.count() === 0 && !self.isError) {
              self.reset();
            }
          } else {
            self._raise("filebatchselected", [files]);
          }
          $container.removeClass("file-thumb-loading");
          $status.html("");
          return;
        }
        self.lock(true);
        var file = files[i],
          previewId = previewInitId + "-" + self._getFileId(file),
          fSizeKB,
          j,
          msg,
          fnText = settings.text,
          fnImage = settings.image,
          fnHtml = settings.html,
          typ,
          chk,
          typ1,
          typ2,
          caption = self._getFileName(file, ""),
          fileSize = ((file && file.size) || 0) / 1000,
          fileExtExpr = "",
          previewData = $h.createObjectURL(file),
          fileCount = 0,
          strTypes = "",
          fileId,
          canLoad,
          fileReaderAborted = false,
          func,
          knownTypes = 0,
          isText,
          isHtml,
          isImage,
          txtFlag,
          processFileLoaded = function () {
            var msg = msgProgress.setTokens({
              index: i + 1,
              files: numFiles,
              percent: 50,
              name: caption,
            });
            setTimeout(function () {
              $status.html(msg);
              self._updateFileDetails(numFiles);
              readFile(i + 1);
            }, self.processDelay);
            if (
              self._raise("fileloaded", [file, previewId, i, reader]) &&
              self.isAjaxUpload
            ) {
              fm.add(file);
            }
          };
        if (!file) {
          return;
        }
        fileId = fm.getId(file);
        if (typLen > 0) {
          for (j = 0; j < typLen; j++) {
            typ1 = fileTypes[j];
            typ2 = self.msgFileTypes[typ1] || typ1;
            strTypes += j === 0 ? typ2 : ", " + typ2;
          }
        }
        if (caption === false) {
          readFile(i + 1);
          return;
        }
        if (caption.length === 0) {
          msg = self.msgInvalidFileName.replace(
            "{name}",
            $h.htmlEncode($h.getFileName(file), "[unknown]")
          );
          throwError(msg, file, previewId, i, fileId);
          return;
        }
        if (!$h.isEmpty(fileExt)) {
          fileExtExpr = new RegExp("\\.(" + fileExt.join("|") + ")$", "i");
        }
        fSizeKB = fileSize.toFixed(2);
        if (
          (self.isAjaxUpload && fm.exists(fileId)) ||
          self._getFrame(previewId, true).length
        ) {
          var p2 = {
            id: previewId,
            index: i,
            fileId: fileId,
            file: file,
            files: files,
          };
          msg = self.msgDuplicateFile.setTokens({
            name: caption,
            size: fSizeKB,
          });
          if (self.isAjaxUpload) {
            self.duplicateErrors.push(msg);
            self.isDuplicateError = true;
            self._raise("fileduplicateerror", [
              file,
              fileId,
              caption,
              fSizeKB,
              previewId,
              i,
            ]);
            readFile(i + 1);
            self._updateFileDetails(numFiles);
          } else {
            self._showError(msg, p2);
            self.unlock();
            numFiles = 0;
            self._clearFileInput();
            self.reset();
            self._updateFileDetails(numFiles);
          }
          return;
        }
        if (self.maxFileSize > 0 && fileSize > self.maxFileSize) {
          msg = self.msgSizeTooLarge.setTokens({
            name: caption,
            size: fSizeKB,
            maxSize: self.maxFileSize,
          });
          throwError(msg, file, previewId, i, fileId);
          return;
        }
        if (
          self.minFileSize !== null &&
          fileSize <= $h.getNum(self.minFileSize)
        ) {
          msg = self.msgSizeTooSmall.setTokens({
            name: caption,
            size: fSizeKB,
            minSize: self.minFileSize,
          });
          throwError(msg, file, previewId, i, fileId);
          return;
        }
        if (!$h.isEmpty(fileTypes) && $h.isArray(fileTypes)) {
          for (j = 0; j < fileTypes.length; j += 1) {
            typ = fileTypes[j];
            func = settings[typ];
            fileCount +=
              !func || typeof func !== "function"
                ? 0
                : func(file.type, $h.getFileName(file))
                ? 1
                : 0;
          }
          if (fileCount === 0) {
            msg = self.msgInvalidFileType.setTokens({
              name: caption,
              types: strTypes,
            });
            throwError(msg, file, previewId, i, fileId);
            return;
          }
        }
        if (
          fileCount === 0 &&
          !$h.isEmpty(fileExt) &&
          $h.isArray(fileExt) &&
          !$h.isEmpty(fileExtExpr)
        ) {
          chk = $h.compare(caption, fileExtExpr);
          fileCount += $h.isEmpty(chk) ? 0 : chk.length;
          if (fileCount === 0) {
            msg = self.msgInvalidFileExtension.setTokens({
              name: caption,
              extensions: strExt,
            });
            throwError(msg, file, previewId, i, fileId);
            return;
          }
        }
        if (!self._canPreview(file)) {
          canLoad =
            self.isAjaxUpload &&
            self._raise("filebeforeload", [file, i, reader]);
          if (self.isAjaxUpload && canLoad) {
            fm.add(file);
          }
          if (self.showPreview && canLoad) {
            $container.addClass("file-thumb-loading");
            self._previewDefault(file);
            self._initFileActions();
          }
          setTimeout(function () {
            if (canLoad) {
              self._updateFileDetails(numFiles);
            }
            readFile(i + 1);
            self._raise("fileloaded", [file, previewId, i]);
          }, 10);
          return;
        }
        isText = fnText(file.type, caption);
        isHtml = fnHtml(file.type, caption);
        isImage = fnImage(file.type, caption);
        $status.html(
          msgLoading.replace("{index}", i + 1).replace("{files}", numFiles)
        );
        $container.addClass("file-thumb-loading");
        reader.onerror = function (evt) {
          self._errorHandler(evt, caption);
        };
        reader.onload = function (theFile) {
          var hex,
            fileInfo,
            uint,
            byte,
            bytes = [],
            contents,
            mime,
            readTextImage = function (textFlag) {
              var newReader = new FileReader();
              newReader.onerror = function (theFileNew) {
                self._errorHandler(theFileNew, caption);
              };
              newReader.onload = function (theFileNew) {
                if (
                  self.isAjaxUpload &&
                  !self._raise("filebeforeload", [file, i, reader])
                ) {
                  fileReaderAborted = true;
                  self._resetCaption();
                  reader.abort();
                  $status.html("");
                  $container.removeClass("file-thumb-loading");
                  self.enable();
                  return;
                }
                self._previewFile(i, file, theFileNew, previewData, fileInfo);
                self._initFileActions();
                processFileLoaded();
              };
              if (textFlag) {
                newReader.readAsText(file, self.textEncoding);
              } else {
                newReader.readAsDataURL(file);
              }
            };
          fileInfo = { name: caption, type: file.type };
          $.each(settings, function (k, f) {
            if (
              k !== "object" &&
              k !== "other" &&
              typeof f === "function" &&
              f(file.type, caption)
            ) {
              knownTypes++;
            }
          });
          if (knownTypes === 0) {
            // auto detect mime types from content if no known file types detected
            uint = new Uint8Array(theFile.target.result);
            for (j = 0; j < uint.length; j++) {
              byte = uint[j].toString(16);
              bytes.push(byte);
            }
            hex = bytes.join("").toLowerCase().substring(0, 8);
            mime = $h.getMimeType(hex, "", "");
            if ($h.isEmpty(mime)) {
              // look for ascii text content
              contents = $h.arrayBuffer2String(reader.result);
              mime = $h.isSvg(contents)
                ? "image/svg+xml"
                : $h.getMimeType(hex, contents, file.type);
            }
            fileInfo = { name: caption, type: mime };
            isText = fnText(mime, "");
            isHtml = fnHtml(mime, "");
            isImage = fnImage(mime, "");
            txtFlag = isText || isHtml;
            if (txtFlag || isImage) {
              readTextImage(txtFlag);
              return;
            }
          }
          if (
            self.isAjaxUpload &&
            !self._raise("filebeforeload", [file, i, reader])
          ) {
            fileReaderAborted = true;
            self._resetCaption();
            reader.abort();
            $status.html("");
            $container.removeClass("file-thumb-loading");
            self.enable();
            return;
          }
          self._previewFile(i, file, theFile, previewData, fileInfo);
          self._initFileActions();
          processFileLoaded();
        };
        reader.onprogress = function (data) {
          if (data.lengthComputable) {
            var fact = (data.loaded / data.total) * 100,
              progress = Math.ceil(fact);
            msg = msgProgress.setTokens({
              index: i + 1,
              files: numFiles,
              percent: progress,
              name: caption,
            });
            setTimeout(function () {
              if (!fileReaderAborted) {
                $status.html(msg);
              }
            }, self.processDelay);
          }
        };
        if (isText || isHtml) {
          reader.readAsText(file, self.textEncoding);
        } else {
          if (isImage) {
            reader.readAsDataURL(file);
          } else {
            reader.readAsArrayBuffer(file);
          }
        }
      };

      readFile(0);
      self._updateFileDetails(numFiles, true);
    },
    lock: function (selectMode) {
      var self = this,
        $container = self.$container;
      self._resetErrors();
      self.disable();
      if (!selectMode && self.showCancel) {
        $container.find(".fileinput-cancel").show();
      }
      if (!selectMode && self.showPause) {
        $container.find(".fileinput-pause").show();
      }
      self._raise("filelock", [self.fileManager.stack, self._getExtraData()]);
      return self.$element;
    },
    unlock: function (reset) {
      var self = this,
        $container = self.$container;
      if (reset === undefined) {
        reset = true;
      }
      self.enable();
      $container.removeClass("is-locked");
      if (self.showCancel) {
        $container.find(".fileinput-cancel").hide();
      }
      if (self.showPause) {
        $container.find(".fileinput-pause").hide();
      }
      if (reset) {
        self._resetFileStack();
      }
      self._raise("fileunlock", [self.fileManager.stack, self._getExtraData()]);
      return self.$element;
    },
    resume: function () {
      var self = this,
        flag = false,
        rm = self.resumableManager;
      if (!self.enableResumableUpload) {
        return self.$element;
      }
      if (self.paused) {
        self._toggleResumableProgress(
          self.progressPauseTemplate,
          self.msgUploadResume
        );
      } else {
        flag = true;
      }
      self.paused = false;
      if (flag) {
        self._toggleResumableProgress(
          self.progressInfoTemplate,
          self.msgUploadBegin
        );
      }
      setTimeout(function () {
        rm.upload();
      }, self.processDelay);
      return self.$element;
    },
    pause: function () {
      var self = this,
        rm = self.resumableManager,
        xhr = self.ajaxRequests,
        len = xhr.length,
        i,
        pct = rm.getProgress(),
        actions = self.fileActionSettings,
        tm = self.taskManager,
        pool = tm.getPool(rm.id);
      if (!self.enableResumableUpload) {
        return self.$element;
      } else {
        if (pool) {
          pool.cancel();
        }
      }
      self._raise("fileuploadpaused", [self.fileManager, rm]);
      if (len > 0) {
        for (i = 0; i < len; i += 1) {
          self.paused = true;
          xhr[i].abort();
        }
      }
      if (self.showPreview) {
        self._getThumbs().each(function () {
          var $thumb = $(this),
            fileId = $thumb.attr("data-fileid"),
            t = self._getLayoutTemplate("stats"),
            stats,
            $indicator = $thumb.find(".file-upload-indicator");
          $thumb.removeClass("file-uploading");
          if ($indicator.attr("title") === actions.indicatorLoadingTitle) {
            self._setThumbStatus($thumb, "Paused");
            stats = t.setTokens({
              pendingTime: self.msgPaused,
              uploadSpeed: "",
            });
            self.paused = true;
            self._setProgress(
              pct,
              $thumb.find(".file-thumb-progress"),
              pct + "%",
              stats
            );
          }
          if (!self.fileManager.getFile(fileId)) {
            $thumb
              .find(".kv-file-remove")
              .removeClass("disabled")
              .removeAttr("disabled");
          }
        });
      }
      self._setProgress(101, self.$progress, self.msgPaused);
      return self.$element;
    },
    cancel: function () {
      var self = this,
        xhr = self.ajaxRequests,
        rm = self.resumableManager,
        tm = self.taskManager,
        pool = rm ? tm.getPool(rm.id) : undefined,
        len = xhr.length,
        i;

      if (self.enableResumableUpload && pool) {
        pool.cancel().done(function () {
          self._setProgressCancelled();
        });
        rm.reset();
        self._raise("fileuploadcancelled", [self.fileManager, rm]);
      } else {
        self._raise("fileuploadcancelled", [self.fileManager]);
      }
      self._initAjax();
      if (len > 0) {
        for (i = 0; i < len; i += 1) {
          self.cancelling = true;
          xhr[i].abort();
        }
      }
      self._getThumbs().each(function () {
        var $thumb = $(this),
          fileId = $thumb.attr("data-fileid"),
          $prog = $thumb.find(".file-thumb-progress");
        $thumb.removeClass("file-uploading");
        self._setProgress(0, $prog);
        $prog.hide();
        if (!self.fileManager.getFile(fileId)) {
          $thumb
            .find(".kv-file-upload")
            .removeClass("disabled")
            .removeAttr("disabled");
          $thumb
            .find(".kv-file-remove")
            .removeClass("disabled")
            .removeAttr("disabled");
        }
        self.unlock();
      });
      setTimeout(function () {
        self._setProgressCancelled();
      }, self.processDelay);
      return self.$element;
    },
    clear: function () {
      var self = this,
        cap;
      if (!self._raise("fileclear")) {
        return;
      }
      self.$btnUpload.removeAttr("disabled");
      self
        ._getThumbs()
        .find("video,audio,img")
        .each(function () {
          $h.cleanMemory($(this));
        });
      self._clearFileInput();
      self._resetUpload();
      self.clearFileStack();
      self.isDuplicateError = false;
      self.isPersistentError = false;
      self._resetErrors(true);
      if (self._hasInitialPreview()) {
        self._showFileIcon();
        self._resetPreview();
        self._initPreviewActions();
        self.$container.removeClass("file-input-new");
      } else {
        self._getThumbs().each(function () {
          self._clearObjects($(this));
        });
        if (self.isAjaxUpload) {
          self.previewCache.data = {};
        }
        self.$preview.html("");
        cap =
          !self.overwriteInitial && self.initialCaption.length > 0
            ? self.initialCaption
            : "";
        self.$caption.attr("title", "").val(cap);
        $h.addCss(self.$container, "file-input-new");
        self._validateDefaultPreview();
      }
      if (self.$container.find($h.FRAMES).length === 0) {
        if (!self._initCaption()) {
          self.$captionContainer.removeClass("icon-visible");
        }
      }
      self._hideFileIcon();
      if (self.focusCaptionOnClear) {
        self.$captionContainer.focus();
      }
      self._setFileDropZoneTitle();
      self._raise("filecleared");
      return self.$element;
    },
    reset: function () {
      var self = this;
      if (!self._raise("filereset")) {
        return;
      }
      self.lastProgress = 0;
      self._resetPreview();
      self.$container.find(".fileinput-filename").text("");
      $h.addCss(self.$container, "file-input-new");
      if (self.getFrames().length) {
        self.$container.removeClass("file-input-new");
      }
      self.clearFileStack();
      self._setFileDropZoneTitle();
      return self.$element;
    },
    disable: function () {
      var self = this,
        $container = self.$container;
      self.isDisabled = true;
      self._raise("filedisabled");
      self.$element.attr("disabled", "disabled");
      $container.addClass("is-locked");
      $h.addCss($container.find(".btn-file"), "disabled");
      $container
        .find(".kv-fileinput-caption")
        .addClass("file-caption-disabled");
      $container
        .find(
          ".fileinput-remove, .fileinput-upload, .file-preview-frame button"
        )
        .attr("disabled", true);
      self._initDragDrop();
      return self.$element;
    },
    enable: function () {
      var self = this,
        $container = self.$container;
      self.isDisabled = false;
      self._raise("fileenabled");
      self.$element.removeAttr("disabled");
      $container.removeClass("is-locked");
      $container
        .find(".kv-fileinput-caption")
        .removeClass("file-caption-disabled");
      $container
        .find(
          ".fileinput-remove, .fileinput-upload, .file-preview-frame button"
        )
        .removeAttr("disabled");
      $container.find(".btn-file").removeClass("disabled");
      self._initDragDrop();
      return self.$element;
    },
    upload: function () {
      var self = this,
        fm = self.fileManager,
        totLen = fm.count(),
        i,
        outData,
        hasExtraData = !$.isEmptyObject(self._getExtraData());
      if (
        !self.isAjaxUpload ||
        self.isDisabled ||
        !self._isFileSelectionValid(totLen)
      ) {
        return;
      }
      self.lastProgress = 0;
      self._resetUpload();
      if (totLen === 0 && !hasExtraData) {
        self._showFileError(self.msgUploadEmpty);
        return;
      }
      self.cancelling = false;
      self._showProgress();
      self.lock();
      if (totLen === 0 && hasExtraData) {
        self._setProgress(2);
        self._uploadExtraOnly();
        return;
      }
      if (self.enableResumableUpload) {
        return self.resume();
      }
      if (self.uploadAsync || self.enableResumableUpload) {
        outData = self._getOutData(null);
        self._raise("filebatchpreupload", [outData]);
        self.fileBatchCompleted = false;
        self.uploadCache = [];
        $.each(self.getFileStack(), function (id) {
          var previewId = self._getThumbId(id);
          self.uploadCache.push({
            id: previewId,
            content: null,
            config: null,
            tags: null,
            append: true,
          });
        });
        self.$preview.find(".file-preview-initial").removeClass($h.SORT_CSS);
        self._initSortable();
      }
      self._setProgress(2);
      self.hasInitData = false;
      if (self.uploadAsync) {
        i = 0;
        $.each(fm.stack, function (id) {
          self._uploadSingle(i, id, true);
          i++;
        });
        return;
      }
      self._uploadBatch();
      return self.$element;
    },
    destroy: function () {
      var self = this,
        $form = self.$form,
        $cont = self.$container,
        $el = self.$element,
        ns = self.namespace;
      $(document).off(ns);
      $(window).off(ns);
      if ($form && $form.length) {
        $form.off(ns);
      }
      if (self.isAjaxUpload) {
        self._clearFileInput();
      }
      self._cleanup();
      self._initPreviewCache();
      $el.insertBefore($cont).off(ns).removeData();
      $cont.off().remove();
      return $el;
    },
    refresh: function (options) {
      var self = this,
        $el = self.$element;
      if (typeof options !== "object" || $h.isEmpty(options)) {
        options = self.options;
      } else {
        options = $.extend(true, {}, self.options, options);
      }
      self._init(options, true);
      self._listen();
      return $el;
    },
    zoom: function (frameId) {
      var self = this,
        $frame = self._getFrame(frameId);
      self._showModal($frame);
    },
    getExif: function (frameId) {
      var self = this,
        $frame = self._getFrame(frameId);
      return ($frame && $frame.data("exif")) || null;
    },
    getFrames: function (cssFilter) {
      var self = this,
        $frames;
      cssFilter = cssFilter || "";
      $frames = self.$preview.find($h.FRAMES + cssFilter);
      if (self.reversePreviewOrder) {
        $frames = $($frames.get().reverse());
      }
      return $frames;
    },
    getPreview: function () {
      var self = this;
      return {
        content: self.initialPreview,
        config: self.initialPreviewConfig,
        tags: self.initialPreviewThumbTags,
      };
    },
  };

  $.fn.fileinput = function (option) {
    if (!$h.hasFileAPISupport() && !$h.isIE(9)) {
      return;
    }
    var args = Array.apply(null, arguments),
      retvals = [];
    args.shift();
    this.each(function () {
      var self = $(this),
        data = self.data("fileinput"),
        options = typeof option === "object" && option,
        theme = options.theme || self.data("theme"),
        l = {},
        t = {},
        lang =
          options.language ||
          self.data("language") ||
          $.fn.fileinput.defaults.language ||
          "en",
        opt;
      if (!data) {
        if (theme) {
          t = $.fn.fileinputThemes[theme] || {};
        }
        if (lang !== "en" && !$h.isEmpty($.fn.fileinputLocales[lang])) {
          l = $.fn.fileinputLocales[lang] || {};
        }
        opt = $.extend(
          true,
          {},
          $.fn.fileinput.defaults,
          t,
          $.fn.fileinputLocales.en,
          l,
          options,
          self.data()
        );
        data = new FileInput(this, opt);
        self.data("fileinput", data);
      }

      if (typeof option === "string") {
        retvals.push(data[option].apply(data, args));
      }
    });
    switch (retvals.length) {
      case 0:
        return this;
      case 1:
        return retvals[0];
      default:
        return retvals;
    }
  };

  var IFRAME_ATTRIBS =
    'class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}';

  $.fn.fileinput.defaults = {
    language: "en",
    showCaption: true,
    showBrowse: true,
    showPreview: true,
    showRemove: true,
    showUpload: true,
    showUploadStats: true,
    showCancel: null,
    showPause: null,
    showClose: true,
    showUploadedThumbs: true,
    showConsoleLogs: false,
    browseOnZoneClick: false,
    autoReplace: false,
    autoOrientImage: function () {
      // applicable for JPEG images only and non ios safari
      var ua = window.navigator.userAgent,
        webkit = !!ua.match(/WebKit/i),
        iOS = !!ua.match(/iP(od|ad|hone)/i),
        iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
      return !iOSSafari;
    },
    autoOrientImageInitial: true,
    required: false,
    rtl: false,
    hideThumbnailContent: false,
    encodeUrl: true,
    focusCaptionOnBrowse: true,
    focusCaptionOnClear: true,
    generateFileId: null,
    previewClass: "",
    captionClass: "",
    frameClass: "krajee-default",
    mainClass: "file-caption-main",
    mainTemplate: null,
    purifyHtml: true,
    fileSizeGetter: null,
    initialCaption: "",
    initialPreview: [],
    initialPreviewDelimiter: "*$$*",
    initialPreviewAsData: false,
    initialPreviewFileType: "image",
    initialPreviewConfig: [],
    initialPreviewThumbTags: [],
    previewThumbTags: {},
    initialPreviewShowDelete: true,
    initialPreviewDownloadUrl: "",
    removeFromPreviewOnError: false,
    deleteUrl: "",
    deleteExtraData: {},
    overwriteInitial: true,
    sanitizeZoomCache: function (content) {
      var $container = $h.createElement(content);
      $container
        .find("input,textarea,select,datalist,form,.file-thumbnail-footer")
        .remove();
      return $container.html();
    },
    previewZoomButtonIcons: {
      prev: '<i class="glyphicon glyphicon-triangle-left"></i>',
      next: '<i class="glyphicon glyphicon-triangle-right"></i>',
      toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>',
      fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>',
      borderless: '<i class="glyphicon glyphicon-resize-full"></i>',
      close: '<i class="glyphicon glyphicon-remove"></i>',
    },
    previewZoomButtonClasses: {
      prev: "btn btn-navigate",
      next: "btn btn-navigate",
      toggleheader: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      fullscreen: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      borderless: "btn btn-sm btn-kv btn-default btn-outline-secondary",
      close: "btn btn-sm btn-kv btn-default btn-outline-secondary",
    },
    previewTemplates: {},
    previewContentTemplates: {},
    preferIconicPreview: false,
    preferIconicZoomPreview: false,
    allowedFileTypes: null,
    allowedFileExtensions: null,
    allowedPreviewTypes: undefined,
    allowedPreviewMimeTypes: null,
    allowedPreviewExtensions: null,
    disabledPreviewTypes: undefined,
    disabledPreviewExtensions: [
      "msi",
      "exe",
      "com",
      "zip",
      "rar",
      "app",
      "vb",
      "scr",
    ],
    disabledPreviewMimeTypes: null,
    defaultPreviewContent: null,
    customLayoutTags: {},
    customPreviewTags: {},
    previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
    previewFileIconClass: "file-other-icon",
    previewFileIconSettings: {},
    previewFileExtSettings: {},
    buttonLabelClass: "hidden-xs",
    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
    browseClass: "btn btn-primary",
    removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
    removeClass: "btn btn-default btn-secondary",
    cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
    cancelClass: "btn btn-default btn-secondary",
    pauseIcon: '<i class="glyphicon glyphicon-pause"></i>',
    pauseClass: "btn btn-default btn-secondary",
    uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
    uploadClass: "btn btn-default btn-secondary",
    uploadUrl: null,
    uploadUrlThumb: null,
    uploadAsync: true,
    uploadParamNames: {
      chunkCount: "chunkCount",
      chunkIndex: "chunkIndex",
      chunkSize: "chunkSize",
      chunkSizeStart: "chunkSizeStart",
      chunksUploaded: "chunksUploaded",
      fileBlob: "fileBlob",
      fileId: "fileId",
      fileName: "fileName",
      fileRelativePath: "fileRelativePath",
      fileSize: "fileSize",
      retryCount: "retryCount",
    },
    maxAjaxThreads: 5,
    fadeDelay: 800,
    processDelay: 100,
    queueDelay: 10, // must be lesser than process delay
    progressDelay: 0, // must be lesser than process delay
    enableResumableUpload: false,
    resumableUploadOptions: {
      fallback: null,
      testUrl: null, // used for checking status of chunks/ files previously / partially uploaded
      chunkSize: 2 * 1024, // in KB
      maxThreads: 4,
      maxRetries: 3,
      showErrorLog: true,
    },
    uploadExtraData: {},
    zoomModalHeight: 480,
    minImageWidth: null,
    minImageHeight: null,
    maxImageWidth: null,
    maxImageHeight: null,
    resizeImage: false,
    resizePreference: "width",
    resizeQuality: 0.92,
    resizeDefaultImageType: "image/jpeg",
    resizeIfSizeMoreThan: 0, // in KB
    minFileSize: 0,
    maxFileSize: 0,
    maxFilePreviewSize: 25600, // 25 MB
    minFileCount: 0,
    maxFileCount: 0,
    maxTotalFileCount: 0,
    validateInitialCount: false,
    msgValidationErrorClass: "text-danger",
    msgValidationErrorIcon:
      '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
    msgErrorClass: "file-error-message",
    progressThumbClass: "progress-bar progress-bar-striped active",
    progressClass:
      "progress-bar bg-success progress-bar-success progress-bar-striped active",
    progressInfoClass:
      "progress-bar bg-info progress-bar-info progress-bar-striped active",
    progressCompleteClass: "progress-bar bg-success progress-bar-success",
    progressPauseClass:
      "progress-bar bg-primary progress-bar-primary progress-bar-striped active",
    progressErrorClass: "progress-bar bg-danger progress-bar-danger",
    progressUploadThreshold: 99,
    previewFileType: "image",
    elCaptionContainer: null,
    elCaptionText: null,
    elPreviewContainer: null,
    elPreviewImage: null,
    elPreviewStatus: null,
    elErrorContainer: null,
    errorCloseButton: $h.closeButton("kv-error-close"),
    slugCallback: null,
    dropZoneEnabled: true,
    dropZoneTitleClass: "file-drop-zone-title",
    fileActionSettings: {},
    otherActionButtons: "",
    textEncoding: "UTF-8",
    ajaxSettings: {},
    ajaxDeleteSettings: {},
    showAjaxErrorDetails: true,
    mergeAjaxCallbacks: false,
    mergeAjaxDeleteCallbacks: false,
    retryErrorUploads: true,
    reversePreviewOrder: false,
    usePdfRenderer: function () {
      var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
      return (
        !!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i) || isIE11
      );
    },
    pdfRendererUrl: "",
    pdfRendererTemplate: "<iframe " + IFRAME_ATTRIBS + "></iframe>",
  };

  // noinspection HtmlUnknownAttribute
  $.fn.fileinputLocales.en = {
    fileSingle: "file",
    filePlural: "files",
    browseLabel: "Browse &hellip;",
    removeLabel: "Remove",
    removeTitle: "Clear all unprocessed files",
    cancelLabel: "Cancel",
    cancelTitle: "Abort ongoing upload",
    pauseLabel: "Pause",
    pauseTitle: "Pause ongoing upload",
    uploadLabel: "Upload",
    uploadTitle: "Upload selected files",
    msgNo: "No",
    msgNoFilesSelected: "No files selected",
    msgCancelled: "Cancelled",
    msgPaused: "Paused",
    msgPlaceholder: "Select {files} ...",
    msgZoomModalHeading: "Detailed Preview",
    msgFileRequired: "You must select a file to upload.",
    msgSizeTooSmall:
      'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
    msgSizeTooLarge:
      'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
    msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
    msgFilesTooMany:
      "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
    msgTotalFilesTooMany:
      "You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).",
    msgFileNotFound: 'File "{name}" not found!',
    msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
    msgFileNotReadable: 'File "{name}" is not readable.',
    msgFilePreviewAborted: 'File preview aborted for "{name}".',
    msgFilePreviewError: 'An error occurred while reading the file "{name}".',
    msgInvalidFileName:
      'Invalid or unsupported characters in file name "{name}".',
    msgInvalidFileType:
      'Invalid type for file "{name}". Only "{types}" files are supported.',
    msgInvalidFileExtension:
      'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
    msgFileTypes: {
      image: "image",
      html: "HTML",
      text: "text",
      video: "video",
      audio: "audio",
      flash: "flash",
      pdf: "PDF",
      object: "object",
    },
    msgUploadAborted: "The file upload was aborted",
    msgUploadThreshold: "Processing &hellip;",
    msgUploadBegin: "Initializing &hellip;",
    msgUploadEnd: "Done",
    msgUploadResume: "Resuming upload &hellip;",
    msgUploadEmpty: "No valid data available for upload.",
    msgUploadError: "Upload Error",
    msgDeleteError: "Delete Error",
    msgProgressError: "Error",
    msgValidationError: "Validation Error",
    msgLoading: "Loading file {index} of {files} &hellip;",
    msgProgress:
      "Loading file {index} of {files} - {name} - {percent}% completed.",
    msgSelected: "{n} {files} selected",
    msgFoldersNotAllowed:
      "Drag & drop files only! {n} folder(s) dropped were skipped.",
    msgImageWidthSmall:
      'Width of image file "{name}" must be at least {size} px.',
    msgImageHeightSmall:
      'Height of image file "{name}" must be at least {size} px.',
    msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
    msgImageHeightLarge:
      'Height of image file "{name}" cannot exceed {size} px.',
    msgImageResizeError: "Could not get the image dimensions to resize.",
    msgImageResizeException:
      "Error while resizing the image.<pre>{errors}</pre>",
    msgAjaxError:
      "Something went wrong with the {operation} operation. Please try again later!",
    msgAjaxProgressError: "{operation} failed",
    msgDuplicateFile:
      'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
    msgResumableUploadRetriesExceeded:
      "Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>",
    msgPendingTime: "{time} remaining",
    msgCalculatingTime: "calculating time remaining",
    ajaxOperations: {
      deleteThumb: "file delete",
      uploadThumb: "file upload",
      uploadBatch: "batch file upload",
      uploadExtra: "form data upload",
    },
    dropZoneTitle: "Drag & drop files here &hellip;",
    dropZoneClickTitle: "<br>(or click to select {files})",
    previewZoomButtonTitles: {
      prev: "View previous file",
      next: "View next file",
      toggleheader: "Toggle header",
      fullscreen: "Toggle full screen",
      borderless: "Toggle borderless mode",
      close: "Close detailed preview",
    },
  };

  $.fn.fileinput.Constructor = FileInput;

  /**
   * Convert automatically file inputs with class 'file' into a bootstrap fileinput control.
   */
  $(document).ready(function () {
    var $input = $("input.file[type=file]");
    if ($input.length) {
      $input.fileinput();
    }
  });
});

/*!
 * bootstrap-fileinput v5.1.3
 * http://plugins.krajee.com/file-input
 *
 * Font Awesome 5 icon theme configuration for bootstrap-fileinput. Requires font awesome 5 assets to be loaded.
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2020, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD-3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */!function(a){"use strict";a.fn.fileinputThemes.fas={fileActionSettings:{removeIcon:'<i class="fas fa-trash-alt"></i>',uploadIcon:'<i class="fas fa-upload"></i>',uploadRetryIcon:'<i class="fas fa-redo-alt"></i>',downloadIcon:'<i class="fas fa-download"></i>',zoomIcon:'<i class="fas fa-search-plus"></i>',dragIcon:'<i class="fas fa-arrows-alt"></i>',indicatorNew:'<i class="fas fa-plus-circle text-warning"></i>',indicatorSuccess:'<i class="fas fa-check-circle text-success"></i>',indicatorError:'<i class="fas fa-exclamation-circle text-danger"></i>',indicatorLoading:'<i class="fas fa-hourglass text-muted"></i>',indicatorPaused:'<i class="fa fa-pause text-info"></i>'},layoutTemplates:{fileIcon:'<i class="fas fa-file kv-caption-icon"></i> '},previewZoomButtonIcons:{prev:'<i class="fas fa-caret-left fa-lg"></i>',next:'<i class="fas fa-caret-right fa-lg"></i>',toggleheader:'<i class="fas fa-fw fa-arrows-alt-v"></i>',fullscreen:'<i class="fas fa-fw fa-arrows-alt"></i>',borderless:'<i class="fas fa-fw fa-external-link-alt"></i>',close:'<i class="fas fa-fw fa-times"></i>'},previewFileIcon:'<i class="fas fa-file"></i>',browseIcon:'<i class="fas fa-folder-open"></i>',removeIcon:'<i class="fas fa-trash-alt"></i>',cancelIcon:'<i class="fas fa-ban"></i>',pauseIcon:'<i class="fas fa-pause"></i>',uploadIcon:'<i class="fas fa-upload"></i>',msgValidationErrorIcon:'<i class="fas fa-exclamation-circle"></i> '}}(window.jQuery);

if (typeof $ == "undefined") {
  var $ = jQuery.noConflict();
}
var daCtx,
  daColor = "#000";

var daTheWidth;
var daAspectRatio;
var daTheBorders;
var daWaiter;
var daWaitLimit;
var daIsEmpty;

function daInitializeSignature() {
  daAspectRatio = 0.4;
  daTheBorders = 30;
  daWaiter = 0;
  daWaitLimit = 2;
  daIsEmpty = 1;
  setTimeout(function () {
    if (!isCanvasSupported()) {
      daPost({ da_success: 0, da_ajax: 1 });
    }
    daNewCanvas();
    $(document).on("touchmove", function (event) {
      event.preventDefault();
    });
  }, 500);
  $(window).on("resize", function () {
    daResizeCanvas();
  });
  $(window).on("orientationchange", function () {
    daResizeCanvas();
  });

  // $(".dasigpalette").click(function(){
  //   $(".dasigpalette").css("border-color", "#777");
  //   $(".dasigpalette").css("border-style", "solid");
  //   $(this).css("border-color", "#fff");
  //   $(this).css("border-style", "dashed");
  //   daColor = $(this).css("background-color");
  //   daCtx.beginPath();
  //   daCtx.lineJoin="round";
  //   daCtx.strokeStyle = daColor;
  //   daCtx.fillStyle = daColor;
  // });
  $(".dasigclear").click(function (e) {
    e.preventDefault();
    daNewCanvas();
    return false;
  });
  $(".dasigsave").click(function (e) {
    e.preventDefault();
    if (daIsEmpty && document.getElementById("da_sig_required").value == "1") {
      $("#daerrormess").removeClass("dasignotshowing");
      setTimeout(function () {
        $("#daerrormess").addClass("dasignotshowing");
      }, 3000);
    } else {
      $(".dasigclear").attr("disabled", true);
      $(".dasigsave").attr("disabled", true);
      daSaveCanvas();
    }
    return false;
  });
}

// function to setup a new canvas for drawing

function daResizeCanvas() {
  //var cheight = $(window).height()-($("#sigheader").height() + $("#sigtoppart").height() + $("#sigbottompart").height());
  setTimeout(function () {
    daNewCanvas();
  }, 200);
  //console.log("I resized");
  return;
  // var cheight = $(window).width()*daAspectRatio;
  // if (cheight > $(window).height()-theTop){
  //   cheight = $(window).height()-theTop;
  // }
  // if (cheight > 350){
  //   cheight = 350;
  // }
  // var cwidth = $(window).width() - daTheBorders;

  // $("#sigcontent").height(cheight);
  // //$("#sigcontent").css('top', ($("#sigheader").height() + $("#sigtoppart").height()) + "px");
  // //$("#sigbottompart").css('top', (cheight) + "px");
  // $("#sigcanvas").width(cwidth);
  // $("#sigcanvas").height(cheight);
  // theTop = $("#sigcanvas").offset().top;
  // theLeft = $("#sigcanvas").offset().left;
  // daTheWidth = cwidth/100.0;
  // if (daTheWidth < 1){
  //   daTheWidth = 1;
  // }
  // return;
}

function daSaveCanvas() {
  var dataURL = document.getElementById("dasigcanvas").toDataURL();
  //console.log(dataURL)
  daSpinnerTimeout = setTimeout(daShowSpinner, 1000);
  daPost({ da_success: 1, da_the_image: dataURL, da_ajax: 1 });
}

function daNewCanvas() {
  //console.log("running daNewCanvas");
  var cwidth = $(window).width() - daTheBorders;
  var contentwidth = $("#dasigpage").outerWidth(true);
  if (cwidth > contentwidth) {
    cwidth = contentwidth;
  }
  var cheight = cwidth * daAspectRatio;
  var otherHeights =
    $("#dasigheader").outerHeight(true) +
    $("#dasigtoppart").outerHeight(true) +
    $("#dasigmidpart").outerHeight(true) +
    $("#dasigbottompart").outerHeight(true);
  //console.log("height is " + $(window).height());
  //console.log("otherHeights are " + otherHeights);
  if (cheight > $(window).height() - otherHeights) {
    cheight = $(window).height() - otherHeights;
  }
  if (cheight > 275) {
    cheight = 275;
  }
  $("#dasigcontent").height(cheight);
  var canvas =
    '<canvas id="dasigcanvas" width="' +
    cwidth +
    'px" height="' +
    cheight +
    'px"></canvas>';
  $("#dasigcontent").html(canvas);
  //theTop = $("#sigcanvas").offset().top;
  //theLeft = $("#sigcanvas").offset().left;
  daTheWidth = cwidth / 100.0;
  if (daTheWidth < 1) {
    daTheWidth = 1;
  }

  // setup canvas
  // daCtx=document.getElementById("sigcanvas").getContext("2d");
  $("#dasigcanvas").each(function () {
    daCtx = $(this)[0].getContext("2d");
    daCtx.strokeStyle = daColor;
    daCtx.lineWidth = daTheWidth;
  });

  // setup to trigger drawing on mouse or touch
  $("#dasigcanvas").drawTouch();
  $("#dasigcanvas").drawPointer();
  $("#dasigcanvas").drawMouse();
  //$(document).on("touchend", function(event){event.preventDefault();});
  //$(document).on("touchcancel", function(event){event.preventDefault();});
  //$(document).on("touchstart", function(event){event.preventDefault();});
  //$("meta[name=viewport]").attr('content', "width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=0");
  daIsEmpty = 1;
  setTimeout(function () {
    if (daJsEmbed) {
      $(daTargetDiv)[0].scrollTo(0, 1);
      if (daSteps > 1) {
        $(daTargetDiv)[0].scrollIntoView();
      }
    } else {
      window.scrollTo(0, 1);
    }
  }, 10);
}

// prototype to	start drawing on touch using canvas moveTo and lineTo
$.fn.drawTouch = function () {
  var start = function (e) {
    e = e.originalEvent;
    x = e.changedTouches[0].pageX - $("#dasigcanvas").offset().left;
    y = e.changedTouches[0].pageY - $("#dasigcanvas").offset().top;
    daCtx.beginPath();
    daCtx.arc(x, y, 0.5 * daTheWidth, 0, 2 * Math.PI);
    daCtx.fill();
    daCtx.beginPath();
    daCtx.lineJoin = "round";
    daCtx.moveTo(x, y);
    if (daIsEmpty) {
      $(".dasigsave").prop("disabled", false);
      daIsEmpty = 0;
    }
  };
  var move = function (e) {
    e.preventDefault();
    if (daWaiter % daWaitLimit == 0) {
      e = e.originalEvent;
      x = e.changedTouches[0].pageX - $("#dasigcanvas").offset().left;
      y = e.changedTouches[0].pageY - $("#dasigcanvas").offset().top;
      daCtx.lineTo(x, y);
      daCtx.stroke();
      if (daIsEmpty) {
        daIsEmpty = 0;
      }
    }
    daWaiter++;
    //daCtx.fillRect(x-0.5*daTheWidth,y-0.5*daTheWidth,daTheWidth,daTheWidth);
    //daCtx.beginPath();
    //daCtx.arc(x, y, 0.5*daTheWidth, 0, 2*Math.PI);
    //daCtx.fill();
  };
  var moveline = function (e) {
    daWaiter = 0;
    move(e);
  };
  var dot = function (e) {
    e.preventDefault();
    e = e.originalEvent;
    daCtx.lineJoin = "round";
    x = e.pageX - $("#dasigcanvas").offset().left;
    y = e.pageY - $("#dasigcanvas").offset().top;
    daCtx.beginPath();
    daCtx.arc(x, y, 0.5 * daTheWidth, 0, 2 * Math.PI);
    daCtx.fill();
    daCtx.moveTo(x, y);
    if (daIsEmpty) {
      daIsEmpty = 0;
    }
    //daCtx.fillRect(x-0.5*daTheWidth,y-0.5*daTheWidth,daTheWidth,daTheWidth);
    //console.log("Got click");
  };
  $(this).on("click", dot);
  $(this).on("touchend", moveline);
  $(this).on("touchcancel", moveline);
  $(this).on("touchstart", start);
  $(this).on("touchmove", move);
};

// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
$.fn.drawPointer = function () {
  var start = function (e) {
    e = e.originalEvent;
    daCtx.beginPath();
    daCtx.lineJoin = "round";
    x = e.pageX - $("#dasigcanvas").offset().left;
    y = e.pageY - $("#dasigcanvas").offset().top;
    daCtx.moveTo(x, y);
    if (daIsEmpty) {
      daIsEmpty = 0;
    }
    //daCtx.arc(x, y, 0.5*daTheWidth, 0, 2*Math.PI);
    //daCtx.fill();
  };
  var move = function (e) {
    e.preventDefault();
    if (daWaiter % daWaitLimit == 0) {
      e = e.originalEvent;
      x = e.pageX - $("#dasigcanvas").offset().left;
      y = e.pageY - $("#dasigcanvas").offset().top;
      daCtx.lineTo(x, y);
      daCtx.stroke();
      daCtx.beginPath();
      daCtx.arc(x, y, 0.5 * daTheWidth, 0, 2 * Math.PI);
      daCtx.fill();
      daCtx.beginPath();
      daCtx.moveTo(x, y);
      if (daIsEmpty) {
        daIsEmpty = 0;
      }
    }
    //daWaiter++;
  };
  var moveline = function (e) {
    daWaiter = 0;
    move(e);
  };
  $(this).on("MSPointerDown", start);
  $(this).on("MSPointerMove", move);
  $(this).on("MSPointerUp", moveline);
};

// prototype to	start drawing on mouse using canvas moveTo and lineTo
$.fn.drawMouse = function () {
  var clicked = 0;
  var start = function (e) {
    clicked = 1;
    x = e.pageX - $("#dasigcanvas").offset().left;
    y = e.pageY - $("#dasigcanvas").offset().top;
    daCtx.beginPath();
    daCtx.arc(x, y, 0.5 * daTheWidth, 0, 2 * Math.PI);
    daCtx.fill();
    daCtx.beginPath();
    daCtx.lineJoin = "round";
    daCtx.moveTo(x, y);
    if (daIsEmpty) {
      daIsEmpty = 0;
    }
  };
  var move = function (e) {
    if (clicked && daWaiter % daWaitLimit == 0) {
      x = e.pageX - $("#dasigcanvas").offset().left;
      y = e.pageY - $("#dasigcanvas").offset().top;
      daCtx.lineTo(x, y);
      daCtx.stroke();
      daCtx.beginPath();
      daCtx.arc(x, y, 0.5 * daTheWidth, 0, 2 * Math.PI);
      daCtx.fill();
      daCtx.beginPath();
      daCtx.moveTo(x, y);
      if (daIsEmpty) {
        daIsEmpty = 0;
      }
    }
    //daWaiter++;
  };
  var stop = function (e) {
    daWaiter = 0;
    move(e);
    clicked = 0;
    return true;
  };
  $(this).on("mousedown", start);
  $(this).on("mousemove", move);
  $(window).on("mouseup", stop);
};

function daPost(params) {
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var hiddenField = document.getElementById(key);
      if (hiddenField != null) {
        hiddenField.setAttribute("value", params[key]);
      } else {
        console.log("Key does not exist: " + key);
        return;
      }
    }
  }
  $("#dasigform").submit();
  return;
}

function isCanvasSupported() {
  var elem = document.createElement("canvas");
  return !!(elem.getContext && elem.getContext("2d"));
}

var daAutocomplete = Object();

function daInitAutocomplete(ids) {
  var timePeriod = 0;
  try {
    google;
  } catch (e) {
    timePeriod = 1000;
  }
  setTimeout(function () {
    for (var i = 0; i < ids.length; ++i) {
      var id = ids[i];
      daAutocomplete[
        id
      ] = new google.maps.places.Autocomplete(document.getElementById(id), {
        types: ["address"],
      });
      daAutocomplete[id].setFields(["address_components"]);
      google.maps.event.addListener(
        daAutocomplete[id],
        "place_changed",
        daFillInAddressFor(id)
      );
    }
  }, timePeriod);
}

function daFillInAddressFor(id) {
  return function () {
    daFillInAddress(id);
  };
}

function daInitMap(daMapInfo) {
  var timePeriod = 0;
  try {
    google;
  } catch (e) {
    timePeriod = 1000;
  }
  setTimeout(function () {
    maps = [];
    var map_info_length = daMapInfo.length;
    for (var i = 0; i < map_info_length; i++) {
      the_map = daMapInfo[i];
      var bounds = new google.maps.LatLngBounds();
      maps[i] = daAddMap(i, the_map.center.latitude, the_map.center.longitude);
      marker_length = the_map.markers.length;
      if (marker_length == 1) {
        show_marker = true;
      } else {
        show_marker = false;
      }
      for (var j = 0; j < marker_length; j++) {
        var new_marker = daAddMarker(maps[i], the_map.markers[j], show_marker);
        bounds.extend(new_marker.getPosition());
      }
      if (marker_length > 1) {
        maps[i].map.fitBounds(bounds);
      }
    }
  }, timePeriod);
}

function daAddMap(map_num, center_lat, center_lon) {
  var map = new google.maps.Map(document.getElementById("map" + map_num), {
    zoom: 11,
    center: new google.maps.LatLng(center_lat, center_lon),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  var infowindow = new google.maps.InfoWindow();
  return { map: map, infowindow: infowindow };
}
function daAddMarker(map, marker_info, show_marker) {
  var marker;
  if (marker_info.icon) {
    if (marker_info.icon.path) {
      marker_info.icon.path = google.maps.SymbolPath[marker_info.icon.path];
    }
  } else {
    marker_info.icon = null;
  }
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(
      marker_info.latitude,
      marker_info.longitude
    ),
    map: map.map,
    icon: marker_info.icon,
  });
  if (marker_info.info) {
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, info) {
        return function () {
          map.infowindow.setContent(info);
          map.infowindow.open(map.map, marker);
        };
      })(marker, marker_info.info)
    );
  }
  if (show_marker) {
    map.infowindow.setContent(marker_info.info);
    map.infowindow.open(map.map, marker);
  }
  return marker;
}

function daFillInAddress(origId) {
  var id;
  if (daVarLookupRev[origId]) {
    id = daVarLookupRev[origId];
  } else {
    id = origId;
  }
  var base_varname = atob(id).replace(/.address$/, "");
  base_varname = base_varname.replace(/[\[\]]/g, ".");
  var re = new RegExp("^" + base_varname + "\\.(.*)");
  var componentForm = {
    locality: "long_name",
    sublocality: "long_name",
    administrative_area_level_3: "long_name",
    administrative_area_level_2: "long_name",
    administrative_area_level_1: "short_name",
    country: "short_name",
    postal_code: "short_name",
  };
  var componentTrans = {
    locality: "city",
    administrative_area_level_2: "county",
    administrative_area_level_1: "state",
    country: "country",
    postal_code: "zip",
  };

  var fields_to_fill = [
    "address",
    "city",
    "county",
    "state",
    "zip",
    "neighborhood",
    "sublocality",
    "administrative_area_level_3",
    "postal_code",
  ];
  var id_for_part = {};
  $("input, select").each(function () {
    var the_id = $(this).attr("id");
    if (typeof the_id !== typeof undefined && the_id !== false) {
      try {
        var field_name = atob($(this).attr("id"));
        if (field_name.indexOf("_field_") == 0) {
          field_name = atob(daVarLookupRev[$(this).attr("id")]);
        }
        var m = re.exec(field_name);
        if (m.length > 0) {
          id_for_part[m[1]] = $(this).attr("id");
        }
      } catch (e) {}
    }
  });
  var place = daAutocomplete[origId].getPlace();
  if (
    typeof id_for_part["address"] != "undefined" &&
    document.getElementById(id_for_part["address"]) != null
  ) {
    document.getElementById(id_for_part["address"]).value = "";
  }

  for (var component in fields_to_fill) {
    if (
      typeof id_for_part[component] != "undefined" &&
      document.getElementById(id_for_part[component]) != null
    ) {
      document.getElementById(id_for_part[component]).value = "";
    }
  }

  var street_number;
  var route;
  var savedValues = {};

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    savedValues[addressType] = place.address_components[i]["long_name"];
    if (addressType == "street_number") {
      street_number = place.address_components[i]["short_name"];
    }
    if (addressType == "route") {
      route = place.address_components[i]["long_name"];
    }
    if (
      componentForm[addressType] &&
      id_for_part[componentTrans[addressType]] &&
      typeof id_for_part[componentTrans[addressType]] != "undefined" &&
      document.getElementById(id_for_part[componentTrans[addressType]]) != null
    ) {
      var val = place.address_components[i][componentForm[addressType]];
      if (typeof val != "undefined") {
        document.getElementById(
          id_for_part[componentTrans[addressType]]
        ).value = val;
      }
      if (componentTrans[addressType] != addressType) {
        val = place.address_components[i]["long_name"];
        if (
          typeof val != "undefined" &&
          typeof id_for_part[addressType] != "undefined" &&
          document.getElementById(id_for_part[addressType]) != null
        ) {
          document.getElementById(id_for_part[addressType]).value = val;
        }
      }
    } else if (
      id_for_part[addressType] &&
      typeof id_for_part[addressType] != "undefined" &&
      document.getElementById(id_for_part[addressType]) != null
    ) {
      var val = place.address_components[i]["long_name"];
      if (typeof val != "undefined") {
        document.getElementById(id_for_part[addressType]).value = val;
      }
    }
  }
  if (
    typeof id_for_part["address"] != "undefined" &&
    document.getElementById(id_for_part["address"]) != null
  ) {
    var the_address = "";
    if (typeof street_number != "undefined") {
      the_address += street_number + " ";
    }
    if (typeof route != "undefined") {
      the_address += route;
    }
    document.getElementById(id_for_part["address"]).value = the_address;
  }
  if (
    typeof id_for_part["city"] != "undefined" &&
    document.getElementById(id_for_part["city"]) != null
  ) {
    if (
      document.getElementById(id_for_part["city"]).value == "" &&
      typeof savedValues["sublocality_level_1"] != "undefined"
    ) {
      document.getElementById(id_for_part["city"]).value =
        savedValues["sublocality_level_1"];
    }
    if (
      document.getElementById(id_for_part["city"]).value == "" &&
      typeof savedValues["neighborhood"] != "undefined"
    ) {
      document.getElementById(id_for_part["city"]).value =
        savedValues["neighborhood"];
    }
    if (
      document.getElementById(id_for_part["city"]).value == "" &&
      typeof savedValues["administrative_area_level_3"] != "undefined"
    ) {
      document.getElementById(id_for_part["city"]).value =
        savedValues["administrative_area_level_3"];
    }
  }
}

function daGeolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      });
      for (var id in daAutocomplete) {
        if (daAutocomplete.hasOwnProperty(id)) {
          daAutocomplete[id].setBounds(circle.getBounds());
        }
      }
    });
  }
}

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":i(t))&&(e=t,t=void 0),e=e||{};var r,n=s(t),a=n.source,p=n.id,f=n.path,l=h[p]&&f in h[p].nsps,d=e.forceNew||e["force new connection"]||!1===e.multiplex||l;return d?(u("ignoring socket cache for %s",a),r=c(a,e)):(h[p]||(u("new io instance for %s",a),h[p]=c(a,e)),r=h[p]),n.query&&!e.query?e.query=n.query:e&&"object"===i(e.query)&&(e.query=o(e.query)),r.socket(n.path,e)}function o(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(1),a=r(7),c=r(17),u=r(3)("socket.io-client");t.exports=e=n;var h=e.managers={};e.protocol=a.protocol,e.connect=n,e.Manager=r(17),e.Socket=r(44)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var s=n.host.indexOf(":")!==-1,a=s?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+a+":"+n.port,n.href=n.protocol+"://"+a+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2),i=r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,r){(function(n){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof n&&"env"in n)return n.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=r(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,r(4))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(h===setTimeout)return setTimeout(t,0);if((h===r||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):g=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++g<e;)l&&l[g].run();g=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var h,p,f=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:r}catch(t){h=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(t){p=n}}();var l,d=[],y=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=s[c];r=o.call(t,i),s.splice(c,1),c--}return r}),s=e.formatArgs.apply(t,s);var h=o.log||e.log||console.log.bind(console);h.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(6),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return r(t);if("number"===i&&isNaN(t)===!1)return e.long?o(t):n(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){function n(){}function o(t){var r="",n=!1;return r+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(r+=t.attachments,r+="-"),t.nsp&&"/"!=t.nsp&&(n=!0,r+=t.nsp),null!=t.id&&(n&&(r+=",",n=!1),r+=t.id),null!=t.data&&(n&&(r+=","),r+=f.stringify(t.data)),p("encoded %j as %s",t,r),r}function i(t,e){function r(t){var r=d.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}d.removeBlobs(t,r)}function s(){this.reconstructor=null}function a(t){var r={},n=0;if(r.type=Number(t.charAt(0)),null==e.types[r.type])return h();if(e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type){for(var o="";"-"!=t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!=t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"==t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","==i)break;if(r.nsp+=i,n==t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n==t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),p("decoded %s as %j",t,r),r}function c(t,e){try{t.data=f.parse(e)}catch(t){return h()}return t}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error"}}var p=r(8)("socket.io-parser"),f=r(11),l=r(13),d=r(14),y=r(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=s,n.prototype.encode=function(t,r){if(p("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,r);else{var n=o(t);r([n])}},l(s.prototype),s.prototype.add=function(t){var r;if("string"==typeof t)r=a(t),e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type?(this.reconstructor=new u(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){var t;try{t=e.storage.debug}catch(t){}return t}function c(){try{return window.localStorage}catch(t){}}e=t.exports=r(9),e.log=i,e.formatArgs=o,e.save=s,e.load=a,e.useColors=n,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(a())},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());var s=Array.prototype.slice.call(arguments);s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;a++;var o=e.formatters[n];if("function"==typeof o){var i=s[a];r=o.call(t,i),s.splice(a,1),a--}return r}),"function"==typeof e.formatArgs&&(s=e.formatArgs.apply(t,s));var c=o.log||e.log||console.log.bind(console);c.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(10),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){return e=e||{},"string"==typeof t?r(t):e.long?o(t):n(t)}},function(t,e,r){(function(t,r){var n=!1;(function(){function o(t,e){function r(t){if(r[t]!==g)return r[t];var o;if("bug-string-char-index"==t)o="a"!="a"[0];else if("json"==t)o=r("json-stringify")&&r("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var c=e.stringify,h="function"==typeof c&&b;if(h){(s=function(){return 1}).toJSON=s;try{h="0"===c(0)&&"0"===c(new n)&&'""'==c(new i)&&c(v)===g&&c(g)===g&&c()===g&&"1"===c(s)&&"[1]"==c([s])&&"[null]"==c([g])&&"null"==c(null)&&"[null,null,null]"==c([g,v,null])&&c({a:[s,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===c(null,s)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new u(-1))}catch(t){h=!1}}o=h}if("json-parse"==t){var p=e.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){s=p(a);var f=5==s.a.length&&1===s.a[0];if(f){try{f=!p('"\t"')}catch(t){}if(f)try{f=1!==p("01")}catch(t){}if(f)try{f=1!==p("1.")}catch(t){}}}}catch(t){f=!1}o=f}}return r[t]=!!o}t||(t=c.Object()),e||(e=c.Object());var n=t.Number||c.Number,i=t.String||c.String,a=t.Object||c.Object,u=t.Date||c.Date,h=t.SyntaxError||c.SyntaxError,p=t.TypeError||c.TypeError,f=t.Math||c.Math,l=t.JSON||c.JSON;"object"==typeof l&&l&&(e.stringify=l.stringify,e.parse=l.parse);var d,y,g,m=a.prototype,v=m.toString,b=new u(-0xc782b5b800cec);try{b=b.getUTCFullYear()==-109252&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}catch(t){}if(!r("json")){var w="[object Function]",k="[object Date]",x="[object Number]",A="[object String]",C="[object Array]",B="[object Boolean]",S=r("bug-string-char-index");if(!b)var T=f.floor,E=[0,31,59,90,120,151,181,212,243,273,304,334],_=function(t,e){return E[e]+365*(t-1970)+T((t-1969+(e=+(e>1)))/4)-T((t-1901+e)/100)+T((t-1601+e)/400)};if((d=m.hasOwnProperty)||(d=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=v?d=function(t){var e=this.__proto__,r=t in(this.__proto__=null,this);return this.__proto__=e,r}:(e=r.constructor,d=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,d.call(this,t)}),y=function(t,e){var r,n,o,i=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,n=new r;for(o in n)d.call(n,o)&&i++;return r=n=null,i?y=2==i?function(t,e){var r,n={},o=v.call(t)==w;for(r in t)o&&"prototype"==r||d.call(n,r)||!(n[r]=1)||!d.call(t,r)||e(r)}:function(t,e){var r,n,o=v.call(t)==w;for(r in t)o&&"prototype"==r||!d.call(t,r)||(n="constructor"===r)||e(r);(n||d.call(t,r="constructor"))&&e(r)}:(n=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],y=function(t,e){var r,o,i=v.call(t)==w,a=!i&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||d;for(r in t)i&&"prototype"==r||!a.call(t,r)||e(r);for(o=n.length;r=n[--o];a.call(t,r)&&e(r));}),y(t,e)},!r("json-stringify")){var N={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},j="000000",O=function(t,e){return(j+(e||0)).slice(-t)},P="\\u00",R=function(t){for(var e='"',r=0,n=t.length,o=!S||n>10,i=o&&(S?t.split(""):t);r<n;r++){var s=t.charCodeAt(r);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=N[s];break;default:if(s<32){e+=P+O(2,s.toString(16));break}e+=o?i[r]:t.charAt(r)}}return e+'"'},D=function(t,e,r,n,o,i,s){var a,c,u,h,f,l,m,b,w,S,E,N,j,P,q,U;try{a=e[t]}catch(t){}if("object"==typeof a&&a)if(c=v.call(a),c!=k||d.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=x&&c!=A&&c!=C||d.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(_){for(f=T(a/864e5),u=T(f/365.2425)+1970-1;_(u+1,0)<=f;u++);for(h=T((f-_(u,0))/30.42);_(u,h+1)<=f;h++);f=1+f-_(u,h),l=(a%864e5+864e5)%864e5,m=T(l/36e5)%24,b=T(l/6e4)%60,w=T(l/1e3)%60,S=l%1e3}else u=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),m=a.getUTCHours(),b=a.getUTCMinutes(),w=a.getUTCSeconds(),S=a.getUTCMilliseconds();a=(u<=0||u>=1e4?(u<0?"-":"+")+O(6,u<0?-u:u):O(4,u))+"-"+O(2,h+1)+"-"+O(2,f)+"T"+O(2,m)+":"+O(2,b)+":"+O(2,w)+"."+O(3,S)+"Z"}else a=null;if(r&&(a=r.call(e,t,a)),null===a)return"null";if(c=v.call(a),c==B)return""+a;if(c==x)return a>-1/0&&a<1/0?""+a:"null";if(c==A)return R(""+a);if("object"==typeof a){for(P=s.length;P--;)if(s[P]===a)throw p();if(s.push(a),E=[],q=i,i+=o,c==C){for(j=0,P=a.length;j<P;j++)N=D(j,a,r,n,o,i,s),E.push(N===g?"null":N);U=E.length?o?"[\n"+i+E.join(",\n"+i)+"\n"+q+"]":"["+E.join(",")+"]":"[]"}else y(n||a,function(t){var e=D(t,a,r,n,o,i,s);e!==g&&E.push(R(t)+":"+(o?" ":"")+e)}),U=E.length?o?"{\n"+i+E.join(",\n"+i)+"\n"+q+"}":"{"+E.join(",")+"}":"{}";return s.pop(),U}};e.stringify=function(t,e,r){var n,o,i,a;if(s[typeof e]&&e)if((a=v.call(e))==w)o=e;else if(a==C){i={};for(var c,u=0,h=e.length;u<h;c=e[u++],a=v.call(c),(a==A||a==x)&&(i[c]=1));}if(r)if((a=v.call(r))==x){if((r-=r%1)>0)for(n="",r>10&&(r=10);n.length<r;n+=" ");}else a==A&&(n=r.length<=10?r:r.slice(0,10));return D("",(c={},c[""]=t,c),o,i,n,"",[])}}if(!r("json-parse")){var q,U,M=i.fromCharCode,L={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw q=U=null,h()},H=function(){for(var t,e,r,n,o,i=U,s=i.length;q<s;)switch(o=i.charCodeAt(q)){case 9:case 10:case 13:case 32:q++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=S?i.charAt(q):i[q],q++,t;case 34:for(t="@",q++;q<s;)if(o=i.charCodeAt(q),o<32)I();else if(92==o)switch(o=i.charCodeAt(++q)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=L[o],q++;break;case 117:for(e=++q,r=q+4;q<r;q++)o=i.charCodeAt(q),o>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||I();t+=M("0x"+i.slice(e,q));break;default:I()}else{if(34==o)break;for(o=i.charCodeAt(q),e=q;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++q);t+=i.slice(e,q)}if(34==i.charCodeAt(q))return q++,t;I();default:if(e=q,45==o&&(n=!0,o=i.charCodeAt(++q)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(q+1),o>=48&&o<=57)&&I(),n=!1;q<s&&(o=i.charCodeAt(q),o>=48&&o<=57);q++);if(46==i.charCodeAt(q)){for(r=++q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}if(o=i.charCodeAt(q),101==o||69==o){for(o=i.charCodeAt(++q),43!=o&&45!=o||q++,r=q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}return+i.slice(e,q)}if(n&&I(),"true"==i.slice(q,q+4))return q+=4,!0;if("false"==i.slice(q,q+5))return q+=5,!1;if("null"==i.slice(q,q+4))return q+=4,null;I()}return"$"},z=function(t){var e,r;if("$"==t&&I(),"string"==typeof t){if("@"==(S?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=H(),"]"!=t;r||(r=!0))r&&(","==t?(t=H(),"]"==t&&I()):I()),","==t&&I(),e.push(z(t));return e}if("{"==t){for(e={};t=H(),"}"!=t;r||(r=!0))r&&(","==t?(t=H(),"}"==t&&I()):I()),","!=t&&"string"==typeof t&&"@"==(S?t.charAt(0):t[0])&&":"==H()||I(),e[t.slice(1)]=z(H());return e}I()}return t},J=function(t,e,r){var n=X(t,e,r);n===g?delete t[e]:t[e]=n},X=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if(v.call(o)==C)for(n=o.length;n--;)J(o,n,r);else y(o,function(t){J(o,t,r)});return r.call(t,e,o)};e.parse=function(t,e){var r,n;return q=0,U=""+t,r=z(H()),"$"!=H()&&I(),q=U=null,e&&v.call(e)==w?X((n={},n[""]=r,n),"",e):r}}}return e.runInContext=o,e}var i="function"==typeof n&&n.amd,s={function:!0,object:!0},a=s[typeof e]&&e&&!e.nodeType&&e,c=s[typeof window]&&window||this,u=a&&s[typeof t]&&t&&!t.nodeType&&"object"==typeof r&&r;if(!u||u.global!==u&&u.window!==u&&u.self!==u||(c=u),a&&!i)o(c,a);else{var h=c.JSON,p=c.JSON3,f=!1,l=o(c,c.JSON3={noConflict:function(){return f||(f=!0,c.JSON=h,c.JSON3=p,h=p=null),l}});c.JSON={parse:l.parse,stringify:l.stringify}}i&&n(function(){return l})}).call(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function r(t){if(t)return n(t)}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){var n=r(15),o=r(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(o(t)){var i={_placeholder:!0,num:r.length};return r.push(t),i}if(n(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){var s={};for(var c in t)s[c]=e(t[c]);return s}return t}var r=[],i=t.data,s=t;return s.data=e(i),s.attachments=r.length,{packet:s,buffers:r}},e.reconstructPacket=function(t,e){function r(t){if(t&&t._placeholder){var o=e[t.num];return o}if(n(t)){for(var i=0;i<t.length;i++)t[i]=r(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=r(t[s]);return t}return t}return t.data=r(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,r){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var h=new FileReader;h.onload=function(){u?u[c]=this.result:a=this.result,--s||r(a)},h.readAsArrayBuffer(e)}else if(n(e))for(var p=0;p<e.length;p++)i(e[p],p,e);else if(e&&"object"==typeof e&&!o(e))for(var f in e)i(e[f],f,e)}var s=0,a=e;i(a),s||r(a)}}).call(e,function(){return this}())},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){(function(e){function r(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=r}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){return this instanceof n?(t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new c.Encoder,this.decoder=new c.Decoder,this.autoConnect=e.autoConnect!==!1,void(this.autoConnect&&this.open())):new n(t,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(18),s=r(44),a=r(35),c=r(7),u=r(46),h=r(47),p=r(3)("socket.io-client:manager"),f=r(42),l=r(48),d=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=u(r,"open",function(){n.onopen(),t&&t()}),s=u(r,"error",function(e){if(p("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var c=setTimeout(function(){p("connect attempt timed out after %d",a),o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(u(t,"data",h(this,"ondata"))),this.subs.push(u(t,"ping",h(this,"onping"))),this.subs.push(u(t,"pong",h(this,"onpong"))),this.subs.push(u(t,"error",h(this,"onerror"))),this.subs.push(u(t,"close",h(this,"onclose"))),this.subs.push(u(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~f(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.engine.id}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(19)},function(t,e,r){t.exports=r(20),t.exports.parser=r(27)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),
this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized?null:r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(21),s=r(35),a=r(3)("engine.io-client:socket"),c=r(42),u=r(27),h=r(2),p=r(43),f=r(36);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=u.protocol,n.Socket=n,n.Transport=r(26),n.transports=r(21),n.parser=r(27),n.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var r=new i[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return r},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;p=p||e}p||(a('probe transport "%s" opened',t),h.send([{type:"ping",data:"probe"}]),h.once("packet",function(e){if(!p)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){p||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(h),h.send([{type:"upgrade"}]),f.emit("upgrade",h),h=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var r=new Error("probe error");r.transport=h.name,f.emit("upgradeError",r)}}))}function r(){p||(p=!0,u(),h.close(),h=null)}function o(e){var n=new Error("probe error: "+e);n.transport=h.name,r(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",n)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){h&&t.name!==h.name&&(a('"%s" works - aborting "%s"',t.name,h.name),r())}function u(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var h=this.createTransport(t,{probe:1}),p=!1,f=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",c),h.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(p(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){a("socket error %j",t),n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~c(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var u="https:"===location.protocol,h=location.port;h||(h=u?443:80),n=e.hostname!==location.hostname||h!==e.port,a=e.secure!==u}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(22),i=r(24),s=r(39),a=r(40);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(23);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}else this.extraHeaders=t.extraHeaders}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(22),c=r(25),u=r(35),h=r(37),p=r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){p("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{p("xhr open %s: %s",this.method,this.uri),r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if(this.supportsBinary&&(r.responseType="arraybuffer"),"POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},p("xhr data %s",this.data),r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(t){}if("application/octet-stream"===e)t=this.xhr.response||this.xhr.responseText;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){for(var r=new Uint8Array(this.xhr.response),n=[],o=0,i=r.length;o<i;o++)n.push(r[o]);t=String.fromCharCode.apply(null,n)}else t=this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(26),i=r(36),s=r(27),a=r(37),c=r(38),u=r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(22),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){u("paused"),r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(u("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){u("pre-pause polling complete"),--n||e()})),this.writable||(u("we are currently writing - waiting to pause"),n++,this.once("drain",function(){u("pre-pause writing complete"),--n||e()}))}else e()},n.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this;u("polling got data %s",t);var r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(27),i=r(35);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(m)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t)}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,h=r(28),p=r(29),f=r(30),l=r(31),d=r(32);t&&t.ArrayBuffer&&(u=r(33));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),m=y||g;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),w={type:"error",data:"parser error"},k=r(34);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(k&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var u=v[e.type];return void 0!==e.data&&(u+=i?d.encode(String(e.data)):String(e.data)),a(""+u)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(k&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return w;if("string"==typeof t){if("b"==t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===r&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!u)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=u.decode(t.substr(1));return"blob"===e&&k&&(n=new k([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!0,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=p(t);return r&&s?k&&!m?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""==t)return n(w,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"!=h)a+=h;else{if(""==a||a!=(i=Number(a)))return n(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(w,0,1);if(s.length){if(o=e.decodePacket(s,r,!0),w.type==o.type&&w.data==o.data)return n(w,0,1);var p=n(o,c+i,u);if(!1===p)return}c+=i,a=""}}return""!=a?n(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new k(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[],s=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],u="",h=1;255!=a[h];h++){if(u.length>310){s=!0;break}u+=a[h]}if(s)return n(w,0,1);o=f(o,2+u.length),u=parseInt(u);var p=f(o,0,u);if(c)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var l=new Uint8Array(p);p="";for(var h=0;h<l.length;h++)p+=String.fromCharCode(l[h])}i.push(p),o=f(o,u)}var d=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){function r(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(o(t)){for(var n=0;n<t.length;n++)if(r(t[n]))return!0}else if(t&&"object"==typeof t){t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON());for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0}return!1}return r(t)}var o=r(15);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=b(e>>>10&1023|55296),e=56320|1023&e),o+=b(e);return o}function c(t,e){return b(t>>e&63|128)}function u(t){if(0==(4294967168&t))return b(t);var e="";return 0==(4294965248&t)?e=b(t>>6&31|192):0==(4294901760&t)?(e=b(t>>12&15|224),e+=c(t,6)):0==(4292870144&t)&&(e=b(t>>18&7|240),e+=c(t,12),e+=c(t,6)),e+=b(63&t|128)}function h(t){for(var e,r=s(t),n=r.length,o=-1,i="";++o<n;)e=r[o],i+=u(e);return i}function p(){if(v>=m)throw Error("Invalid byte index");var t=255&g[v];if(v++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function f(){var t,e,r,n,o;if(v>m)throw Error("Invalid byte index");if(v==m)return!1;if(t=255&g[v],v++,0==(128&t))return t;if(192==(224&t)){var e=p();if(o=(31&t)<<6|e,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=p(),r=p(),o=(15&t)<<12|e<<6|r,o>=2048)return o;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=p(),r=p(),n=p(),o=(15&t)<<18|e<<12|r<<6|n,o>=65536&&o<=1114111))return o;throw Error("Invalid WTF-8 detected")}function l(t){g=s(t),m=g.length,v=0;for(var e,r=[];(e=f())!==!1;)r.push(e);return a(r)}var d="object"==typeof e&&e,y=("object"==typeof t&&t&&t.exports==d&&t,"object"==typeof o&&o);y.global!==y&&y.window!==y||(i=y);var g,m,v,b=String.fromCharCode,w={version:"1.0.0",encode:h,decode:l};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),p=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],p[u++]=n<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return h}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(u=0,i=t):t+"."+r(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(25),s=r(37);t.exports=o;var a,c=/\n/g,u=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),h=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=h,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(u,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r();
}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.usingBrowserWebSocket||(f=o),i.call(this,t)}var o,i=r(26),s=r(27),a=r(36),c=r(37),u=r(38),h=r(3)("engine.io-client:websocket"),p=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=r(41)}catch(t){}var f=p;f||"undefined"!=typeof window||(f=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?new f(t):new f(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){h("websocket closed before onclose event")}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(s,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(i,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o=r(7),i=r(35),s=r(45),a=r(46),c=r(47),u=r(3)("socket.io-client:socket"),h=r(29);t.exports=e=n;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;i(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(p.hasOwnProperty(t))return f.apply(this,arguments),this;var e=s(arguments),r=o.EVENT;h(e)&&(r=o.BINARY_EVENT);var n={type:r,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},n.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=s(arguments);u("sending ack %j",n);var i=h(n)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});
/*!
 * LABELAUTY jQuery Plugin
 *
 * @file: jquery-labelauty.js
 * @author: Francisco Neves (@fntneves)
 * @site: www.francisconeves.com
 * @license: MIT License
 */

// Edited by Jonathan Pyle, 2018-2019

(function( $ ){
    $.fn.labelauty = function( options ){
        /*
         * Our default settings
         * Hope you don't need to change anything, with these settings
         */
        var settings = $.extend({
            // Development Mode
            // This will activate console debug messages
            development: false,

            // Trigger Class
            // This class will be used to apply styles
            class: "labelauty",

            // Use icon?
            // If false, then only a text label represents the input
            icon: true,

            // Use text label ?
            // If false, then only an icon represents the input
            label: true,

            // Separator between labels' messages
            // If you use this separator for anything, choose a new one
            separator: "|",

            // Default Checked Message
            // This message will be visible when input is checked
            checked_label: "Checked",

            // Default UnChecked Message
            // This message will be visible when input is unchecked
            unchecked_label: "Unchecked",

            // Force random ID's
            // Replace original ID's with random ID's,
            force_random_id: false,

            // Minimum Label Width
            // This value will be used to apply a minimum width to the text labels
            minimum_width: false,

            // Use the greatest width between two text labels ?
            // If this has a true value, then label width will be the greatest between labels
            same_width: true
        }, options);

        /*
         * Let's create the core function
         * It will try to cover all settings and mistakes of using
         */
        return this.each(function(){
            var $object = $( this );
            var selected = $object.is(':checked');
            var type = $object.attr('type');
            var use_icons = true;
            var use_labels = true;
            var labels;
            var labels_object;
            var input_id;

            //Get the aria label from the input element
            var aria_label = $object.attr( "aria-label" );

            // Hide the object form screen readers
            $object.attr( "aria-hidden", true );

            // Test if object is a check input
            // Don't mess me up, come on
            if( $object.is( ":checkbox" ) === false && $object.is( ":radio" ) === false )
                return this;

            // Add "labelauty" class to all checkboxes
            // So you can apply some custom styles
            $object.addClass( settings.class );

            // Get the value of "data-labelauty" attribute
            // Then, we have the labels for each case (or not, as we will see)
            labels = $object.attr( "data-labelauty" );

            use_labels = settings.label;
            use_icons = settings.icon;

            // It's time to check if it's going to the right way
            // Null values, more labels than expected or no labels will be handled here
            if( use_labels === true ){
                if( labels == null || labels.length === 0 ){
                    // If attribute has no label and we want to use, then use the default labels
                    labels_object = [settings.unchecked_label, settings.checked_label]
                }
                else{
                    // Ok, ok, it's time to split Checked and Unchecked labels
                    // We split, by the "settings.separator" option
                    labels_object = labels.split( settings.separator );

                    // Now, let's check if exist _only_ two labels
                    // If there's more than two, then we do not use labels :(
                    // Else, do some additional tests
                    if( labels_object.length > 2 ){
                        use_labels = false;
                        debug( settings.development, "There's more than two labels. LABELAUTY will not use labels." );
                    }
                    else{
                        // If there's just one label (no split by "settings.separator"), it will be used for both cases
                        // Here, we have the possibility of use the same label for both cases
                        if( labels_object.length === 1 )
                            debug( settings.development, "There's just one label. LABELAUTY will use this one for both cases." );
                    }
                }
            }

            /*
             * Let's begin the beauty
             */

            // Start hiding ugly checkboxes
            // Obviously, we don't need native checkboxes :O
            $object.css({ display : "none" });

            // We don't need more data-labelauty attributes!
            // Ok, ok, it's just for beauty improvement
            $object.removeAttr( "data-labelauty" );

            // Now, grab checkbox ID Attribute for "label" tag use
            // If there's no ID Attribute, then generate a new one
            input_id = $object.attr( "id" );

            if( settings.force_random_id || input_id == null || input_id.trim() === ""){
                var input_id_number = 1 + Math.floor( Math.random() * 1024000 );
                input_id = "labelauty-" + input_id_number;

                // Is there any element with this random ID ?
                // If exists, then increment until get an unused ID
                while( $( input_id ).length !== 0 ){
                    input_id_number++;
                    input_id = "labelauty-" + input_id_number;
                    debug( settings.development, "Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again." );
                }

                $object.attr( "id", input_id );
            }

            // Now, add necessary tags to make this work
            // Here, we're going to test some control variables and act properly

            var element = jQuery(create( input_id, aria_label, selected, type, labels_object, use_labels, use_icons ));

            if ($object.is(':checked')){
                $(element).addClass("btn-primary");
                $(element).removeClass("btn-light");
                $(element).attr('aria-checked', true);
            }
            else{
                $(element).removeClass("btn-primary");
                $(element).addClass("btn-light");
                $(element).attr('aria-checked', false);
            }
            var the_name = $object.attr('name');
            if (type == 'radio'){
                $object.on('change', function(){
                    $object.parents("fieldset").first().find('.da-has-error').remove();
                    $('input.labelauty[type="radio"]').each(function(){
                        if ($(this).attr('name') == the_name){
                            if ($(this).is(':checked')){
				$(this).next().addClass("btn-primary");
				$(this).next().removeClass("btn-light");
				$(this).next().attr('aria-checked', true);
                            }
                            else{
				$(this).next().removeClass("btn-primary");
				$(this).next().addClass("btn-light");
				$(this).next().attr('aria-checked', false);
                            }
                        }
                    });
                });
            }
            else{
                $object.on('change', function(){
                    $object.parents("fieldset").first().find('.da-has-error').remove();
                    if($(this).is(':checked')){
                        $(this).next().addClass("btn-primary");
                        $(this).next().removeClass("btn-light");
                        $(this).next().attr('aria-checked', true);
                    }
                    else{
                        $(this).next().removeClass("btn-primary");
                        $(this).next().addClass("btn-light");
                        $(this).next().attr('aria-checked', false);
                    }
                });
            }

            element.keypress(function(event){
                $object.parents("fieldset").first().find('.da-has-error').remove();
                var theCode = event.which || event.keyCode;
                if(theCode === 32 || theCode === 13){
                    event.preventDefault();
                    if($object.is(':checked')){
                        $(this).addClass("btn-primary");
                        $(this).removeClass("btn-light");
                        $object.prop('checked', false);
                        $(this).attr('aria-checked', true);
                    }
                    else{
                        $(this).addClass("btn-primary");
                        $(this).removeClass("btn-light");
                        $object.prop('checked', true);
                        $(this).attr('aria-checked', false);
                    }
                    $object.trigger('change');
                }
            });

            $object.after(element);

            // Now, add "min-width" to label
            // Let's say the truth, a fixed width is more beautiful than a variable width
            if( settings.minimum_width !== false )
                $object.next( "label[for='" + input_id + "']" ).css({ "min-width": settings.minimum_width });

            // Now, add "min-width" to label
            // Let's say the truth, a fixed width is more beautiful than a variable width
            if( settings.same_width != false && settings.label == true ){
                var label_object = $object.next( "label[for='" + input_id + "']" );
                var unchecked_width = getRealWidth(label_object.find( "span.labelauty-unchecked" ));
                var checked_width = getRealWidth(label_object.find( "span.labelauty-checked" ));

                if( unchecked_width > checked_width )
                    label_object.find( "span.labelauty-checked" ).width( unchecked_width );
                else
                    label_object.find( "span.labelauty-unchecked" ).width( checked_width );
            }
        });
    };

    /*
     * Tricky code to work with hidden elements, like tabs.
     * Note: This code is based on jquery.actual plugin.
     * https://github.com/dreamerslab/jquery.actual
     */
    function getRealWidth( element ){
        var width = 0;
        var $target = element;
        var css_class = 'hidden_element';

        $target = $target.clone().attr('class', css_class).appendTo('body');
        width = $target.width(true);
        $target.remove();

        return width;
    }

    function debug( debug, message ){
        if( debug && window.console && window.console.log )
            window.console.log( "jQuery-LABELAUTY: " + message );
    }

    function decode_html ( text ){
        text = text.replace(/&amp;/g, '&');
        text = text.replace(/&lt;/g, '<');
        text = text.replace(/&gt;/g, '>');
        text = text.replace(/&quot;/g, '"');
        return(text);
    }
    function create( input_id, aria_label, selected, type, messages_object, label, icon ){
        var block;
        var unchecked_message;
        var checked_message;
        var aria = "";

        if( messages_object == null )
            unchecked_message = checked_message = "";
        else{
            unchecked_message = messages_object[0];

            // If checked message is null, then put the same text of unchecked message
            if( messages_object[1] == null )
                checked_message = unchecked_message;
            else
                checked_message = messages_object[1];
        }
        var uncheck_icon;
        if (type == 'checkbox'){
            uncheck_icon = '<i class="far fa-square fa-fw"></i>';
        }
        else{
            uncheck_icon = '<i class="far fa-circle fa-fw"></i>';
        }

        if(aria_label == null)
            aria = "";
        else
            aria = 'tabindex="0" role="' + type + '" aria-checked="' + selected + '" aria-label="' + aria_label + '"';

        if( label == true && icon == true){
            block = '<label class="btn-light" for="' + input_id + '" ' + aria + '>' +
                '<span class="labelauty-unchecked-image text-muted">' + uncheck_icon + '</span>' +
                '<span class="labelauty-unchecked">' + decode_html(unchecked_message) + '</span>' +
                '<span class="labelauty-checked-image"><i class="fas fa-check fa-fw"></i></span>' +
                '<span class="labelauty-checked">' + decode_html(checked_message) + '</span>' +
                '</label>';
        }
        else if( label == true ){
            block = '<label class="btn-light" for="' + input_id + '" ' + aria + '>' +
                '<span class="labelauty-unchecked">' + decode_html(unchecked_message) + '</span>' +
                '<span class="labelauty-checked">' + decode_html(checked_message) + '</span>' +
                '</label>';
        }
        else{
            block = '<label class="btn-light" for="' + input_id + '" ' + aria + '>' +
                '<span class="labelauty-unchecked-image text-muted">' + uncheck_icon + '</span>' +
                '<span class="labelauty-checked-image"><i class="fas fa-check fa-fw"></i></span>' +
                '</label>';
        }

        return block;
    }

}( jQuery ));

/* =============================================================
 * bootstrap-combobox.js v1.1.8
 * =============================================================
 * Copyright 2012 Daniel Farrell
 * Modified 2018 for docassemble by Jonathan Pyle
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

(function( $ ) {

 "use strict";

 /* COMBOBOX PUBLIC CLASS DEFINITION
  * ================================ */

  var Combobox = function ( element, options ) {
    this.options = $.extend({}, $.fn.combobox.defaults, options);
    this.template = this.options.template || this.template
    this.$source = $(element);
    this.$container = this.setup();
    this.$element = this.$container.find('input[type=text]');
    this.$target = this.$container.find('input[type=hidden]');
    if (this.$source.attr('disabled') !== undefined){
      this.$target.prop('disabled', true);
    }
    this.$button = this.$container.find('.dacomboboxtoggle');
    this.$menu = $(this.options.menu).appendTo('body');
    this.matcher = this.options.matcher || this.matcher;
    this.sorter = this.options.sorter || this.sorter;
    this.highlighter = this.options.highlighter || this.highlighter;
    this.clearIfNoMatch = this.options.clearIfNoMatch;
    this.shown = false;
    this.selected = false;
    this.refresh();
    this.transferAttributes();
    this.listen();
  };

  Combobox.prototype = {

    constructor: Combobox

  , setup: function () {
      //console.log('setup');
      var combobox = $(this.template());
      this.$source.before(combobox);
      this.$source.hide();
      return combobox;
    }

  , disable: function() {
      //console.log('disable');
      this.$element.prop('disabled', true);
      this.$button.attr('disabled', true);
      this.disabled = true;
      this.$container.addClass('combobox-disabled');
    }

  , enable: function() {
      //console.log('enable');
      this.$element.prop('disabled', false);
      this.$button.attr('disabled', false);
      this.disabled = false;
      this.$container.removeClass('combobox-disabled');
    }
  , parse: function () {
      //console.log('parse');
      var that = this
        , map = {}
        , source = []
        , selected = false
        , selectedValue = '';
      this.$source.find('option').each(function() {
        var option = $(this);
        if (option.val() === '') {
          that.options.placeholder = option.text();
          return;
        }
        map[option.text()] = option.val();
        source.push(option.text());
        if (option.prop('selected')) {
          selected = option.text();
          selectedValue = option.val();
        }
      })
      this.map = map;
      if (selected) {
        this.$element.val(selected);
        this.$target.val(selectedValue);
        this.$container.addClass('combobox-selected');
        this.selected = true;
      }
      return source;
    }

  , transferAttributes: function() {
    //console.log('transferAttributes');
    this.options.placeholder = this.$source.attr('data-placeholder') || this.options.placeholder
    if(this.options.appendId !== "undefined") {
    	this.$element.attr('id', this.$source.attr('id') + this.options.appendId);
        daComboBoxes[this.$element.attr('id')] = this;
    }
    this.$element.attr('placeholder', this.options.placeholder)
    this.$target.prop('name', this.$source.prop('name'))
    this.$target.val(this.$source.val())
    this.$source.removeAttr('name')  // Remove from source otherwise form will pass parameter twice.
    this.$element.attr('required', this.$source.attr('required'))
    this.$element.attr('rel', this.$source.attr('rel'))
    this.$element.attr('title', this.$source.attr('title'))
    this.$element.attr('class', this.$source.attr('class'))
    this.$element.attr('tabindex', this.$source.attr('tabindex'))
    this.$source.removeAttr('tabindex')
    if (this.$source.attr('disabled') !== undefined)
      this.disable();
  }

  , select: function () {
      //console.log('select');
      var val = this.$menu.find('.active').attr('data-value');
      this.$container.parent().find('.da-has-error').remove();
      this.$element.val(this.updater(val)).trigger('change');
      this.$target.val(this.map[val]).trigger('change');
      this.$source.val(this.map[val]).trigger('change');
      this.$container.addClass('combobox-selected');
      this.selected = true;
      return this.hide();
    }

  , updater: function (item) {
      //console.log('updater');
      return item;
    }

  , show: function () {
      //console.log('show');
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      });

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show();

      $('.dropdown-menu').on('mousedown', $.proxy(this.scrollSafety, this));

      this.shown = true;
      return this;
    }

  , hide: function () {
      //console.log('hide');
      this.$menu.hide();
      $('.dropdown-menu').off('mousedown', $.proxy(this.scrollSafety, this));
      this.$element.on('blur', $.proxy(this.blur, this));
      this.shown = false;
      return this;
    }

  , lookup: function (event) {
      //console.log('lookup');
      this.query = this.$element.val();
      return this.process(this.source);
    }

  , process: function (items) {
      //console.log('process');
      var that = this;

      items = $.grep(items, function (item) {
        return that.matcher(item);
      })

      items = this.sorter(items);

      if (!items.length) {
        return this.shown ? this.hide() : this;
      }

      return this.render(items.slice(0, this.options.items)).show();
    }

  , template: function() {
      //console.log('template');
      if (this.options.bsVersion == '2') {
        return '<div class="combobox-container"><input type="hidden" /> <div class="input-append"> <input type="text" autocomplete="off" /> <span class="add-on dropdown-toggle" data-dropdown="dropdown"> <span class="caret"/> <i class="icon-remove"/> </span> </div> </div>'
      } else {
        return '<div class="combobox-container"> <input type="hidden" /> <div class="input-group"> <input type="text" autocomplete="off" /> <div class="input-group-append"> <button class="btn btn-outline-secondary dacomboboxtoggle" data-toggle="dropdown" type="button"><span class="fas fa-caret-down"></span><span class="fas fa-times"></span></button> </div> </div>'
      }
    }

  , matcher: function (item) {
      //console.log('matcher');
      return ~item.toLowerCase().indexOf(this.query.toLowerCase());
    }

  , sorter: function (items) {
      //console.log('sorter');
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item;

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) {beginswith.push(item);}
        else if (~item.indexOf(this.query)) {caseSensitive.push(item);}
        else {caseInsensitive.push(item);}
      }

      return beginswith.concat(caseSensitive, caseInsensitive);
    }

  , highlighter: function (item) {
      //console.log('highlighter');
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>';
      })
    }

  , render: function (items) {
      //console.log('render');
      var that = this;

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item);
        i.html(that.highlighter(item));
        return i[0];
      })

      items.first().addClass('active');
      this.$menu.html(items);
      return this;
    }

  , next: function (event) {
      //console.log('next');
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next();

      if (!next.length) {
        next = $(this.$menu.find('a')[0]);
      }

      next.addClass('active');
    }

  , prev: function (event) {
      //console.log('prev');
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev();

      if (!prev.length) {
        prev = this.$menu.find('a').last();
      }

      prev.addClass('active');
    }

  , toggle: function () {
    //console.log('toggle');
    if (!this.disabled) {
      if (this.$container.hasClass('combobox-selected')) {
        this.clearTarget();
        this.triggerChange();
        this.clearElement();
      } else {
        if (this.shown) {
          this.hide();
        } else {
          this.clearElement();
          this.lookup();
        }
      }
    }
  }

  , scrollSafety: function(e) {
      //console.log('scrollsafety');
      if (e.target.tagName == 'UL') {
          this.$element.off('blur');
      }
  }
  , clearElement: function () {
    //console.log('clearElement');
    this.$element.val('').focus();
  }

  , clearTarget: function () {
    //console.log('clearTarget');
    this.$source.val('');
    this.$target.val('');
    this.$container.removeClass('combobox-selected');
    this.selected = false;
  }

  , triggerChange: function () {
    //console.log('triggerChange');
    this.$source.trigger('change');
  }

  , refresh: function () {
    //console.log('refresh');
    this.source = this.parse();
    this.options.items = this.source.length;
  }

  , listen: function () {
      //console.log('listen');
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('change',   $.proxy(this.change, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this));

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this));
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'a', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'a', $.proxy(this.mouseleave, this));

      this.$button
        .on('click', $.proxy(this.toggle, this));
    }

  , eventSupported: function(eventName) {
      //console.log('eventSupported');
      var isSupported = eventName in this.$element;
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;');
        isSupported = typeof this.$element[eventName] === 'function';
      }
      return isSupported;
    }

  , move: function (e) {
      //console.log('move');
      if (!this.shown) {return;}

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault();
          break;

        case 38: // up arrow
          e.preventDefault();
          this.prev();
          this.fixMenuScroll();
          break;

        case 40: // down arrow
          e.preventDefault();
          this.next();
          this.fixMenuScroll();
          break;
      }

      e.stopPropagation();
    }

  , fixMenuScroll: function(){
      //console.log('fixMenuScroll');
      var active = this.$menu.find('.active');
      if(active.length){
          var top = active.position().top;
          var bottom = top + active.height();
          var scrollTop = this.$menu.scrollTop();
          var menuHeight = this.$menu.height();
          if(bottom > menuHeight){
              this.$menu.scrollTop(scrollTop + bottom - menuHeight);
          } else if(top < 0){
              this.$menu.scrollTop(scrollTop + top);
          }
      }
  }

  , keydown: function (e) {
      //console.log('keyDown');
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27]);
      this.move(e);
    }

  , keypress: function (e) {
      //console.log('keyPress');
      if (this.suppressKeyPressRepeat) {return;}
      this.move(e);
    }

  , keyup: function (e) {
      //console.log('keyUp');
      switch(e.keyCode) {
        case 40: // down arrow
         if (!this.shown){
           this.toggle();
         }
         break;
        case 39: // right arrow
        case 38: // up arrow
        case 37: // left arrow
        case 36: // home
        case 35: // end
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break;

        case 9: // tab
        case 13: // enter
          if (!this.shown) {return;}
          this.select();
          break;

        case 27: // escape
          if (!this.shown) {return;}
          this.hide();
          break;

        default:
          this.clearTarget();
          this.$target.val(this.$element.val());
          this.lookup();
      }

      e.stopPropagation();
      e.preventDefault();
  }

  , focus: function (e) {
      //console.log('focus');
      this.focused = true;
  }

  , blur: function (e) {
      //console.log('blur');
      var that = this;
      this.focused = false;
      var val = this.$element.val();
      if (this.clearIfNoMatch && !this.selected && val !== '' ) {
        this.$element.val('');
        this.$source.val('').trigger('change');
        this.$target.val('').trigger('change');
      }
      if (!this.selected){
        this.$target.val(val).trigger('change');
      }
      if (!this.mousedover && this.shown) {setTimeout(function () { that.hide(); }, 200);}
    }

  , click: function (e) {
      //console.log('click');
      e.stopPropagation();
      e.preventDefault();
      daFetchAjaxTimeoutFetchAfter = false;
      daFetchAcceptIncoming = false;
      this.select();
      this.$element.focus();
    }

  , mouseenter: function (e) {
      //console.log('mouseenter');
      this.mousedover = true;
      this.$menu.find('.active').removeClass('active');
      $(e.currentTarget).addClass('active');
    }

  , mouseleave: function (e) {
      //console.log('mouseleave');
      this.mousedover = false;
    }
  };

  /* COMBOBOX PLUGIN DEFINITION
   * =========================== */
  $.fn.combobox = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('combobox')
        , options = typeof option == 'object' && option;
      if(!data) {$this.data('combobox', (data = new Combobox(this, options)));}
      if (typeof option == 'string') {data[option]();}
    });
  };

  $.fn.combobox.defaults = {
    bsVersion: '4'
    , menu: '<div class="typeahead typeahead-long dropdown-menu"></div>'
    , item: '<a href="#" class="dropdown-item"></a>'
    , appendId: 'combobox'
    , clearIfNoMatch: false
  };

  $.fn.combobox.Constructor = Combobox;

}( window.jQuery ));

