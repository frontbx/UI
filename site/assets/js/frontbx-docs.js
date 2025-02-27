// Prismjs
/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+markup-templating+php+sass+scss&plugins=toolbar+copy-to-clipboard */
window.Prism = window.Prism || {};
Prism.manual = true;
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",a={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:a,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:a}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},a.inside=e.languages.bash;for(var s=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=n.variable[1].inside,i=0;i<s.length;i++)o[s[i]]=e.languages.bash[s[i]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism);
!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var g=i[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var l=o[r],s=t.tokenStack[l],f="string"==typeof g?g:g.content,p=n(a,l),k=f.indexOf(p);if(k>-1){++r;var m=f.substring(0,k),d=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),h=f.substring(k+p.length),v=[];m&&v.push.apply(v,c([m])),v.push(d),h&&v.push.apply(v,c([h])),"string"==typeof g?i.splice.apply(i,[u,1].concat(v)):g.content=v}}else g.content&&c(g.content)}return i}(t.tokens)}}}})}(Prism);
!function(e){var a=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],i=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,n=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,s=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:a,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:i,operator:n,punctuation:s};var l={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},r=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:l}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:l}}];e.languages.insertBefore("php","variable",{string:r,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:a,string:r,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:i,operator:n,punctuation:s}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",(function(a){/<\?/.test(a.code)&&e.languages["markup-templating"].buildPlaceholders(a,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"php")}))}(Prism);
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete e.languages.sass.atrule;var r=/\$[-\w]+|#\{\$[-\w]+\}/,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:r,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:r,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;

// Highlighter
/**
 * Highlight code manually so it's registered to frontbx's DOM
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);
    const [find, on, off, add_class, remove_class, closest, attr, dom_element, extend] = frontbx.import(['find', 'on', 'off', 'add_class', 'remove_class', 'closest', 'attr', 'dom_element', 'extend']).from('_');

    Prism.hooks.add('before-sanity-check', function (env)
    {
  		env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, '\n');
  		env.code = env.element.textContent;
	});

    const Highlighter = function()
    {        
        this.super('pre > code[class*=language-]');
    }

    Highlighter.prototype.bind = function(block)
    {
    	let lang = block.className.trim().split(' ').shift().trim();

    	let div = dom_element({tag: 'div', class: 'fbx-code-snippet'});
    	
    	let pre = closest(block, 'pre');

    	pre.parentNode.replaceChild(div, pre);

       	div.appendChild(pre);

    	attr(pre, 'data-lang', lang);

        Prism.highlightElement(block);

        let copyBtn = dom_element({tag: 'button', type: 'button', role: 'button', class: 'btn-unstyled fbx-clipboard tooltipped tooltipped-ne', dataTooltip: 'Copy to clipboard'}, div, dom_element({tag: 'span', class: 'fa fa-copy'}));

        on(copyBtn, 'click', this._clipboard, this);

        add_class(div, block.className.replaceAll(' ', ','));
    }

    Highlighter.prototype._clipboard = async function(e, btn)
    {
    	let pre  = find('pre', closest(btn, 'div'));
    	let text = pre.innerText.trim();

    	try
    	{
	    	await navigator.clipboard.writeText(text);

	      	add_class(btn, 'copied');

	      	setTimeout(() => remove_class(btn, 'copied'), 3000);
	    }
	    catch (err){ }
    }

    Highlighter.prototype.unbind = function(block)
    {
        let div     = closest(block, 'div');
        let copyBtn = find('.fbx-clipboard', div);
        let code    = block.innerText;

        if (copyBtn) off(copyBtn, 'click', this._clipboard, this);

        block.innerHTML = ''; 
        block.innerText = code;

        div.parentNode.replaceChild(block.parentNode, div);

        copyBtn.parentNode.removeChild(copyBtn);
    }

    frontbx.dom().register('Highlighter', extend(Component, Highlighter), true);

}());

// Menu / drawer
/**
 * Docs Drawer
 *
 */
(function()
{
	const [find, toggle_class, remove_class, attr, width, on, off, trigger_event, extend] = frontbx.import(['find','toggle_class','remove_class','attr','width', 'on', 'off', 'trigger_event','extend']).from('_');

	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const menu = find('#docs-menu');
	
	var drawer;

	if (menu)
	{
		drawer = frontbx.Drawer({
		    content : menu,
		    state: 'collapsed,',
		    swipeable : false,
		    classes: 'docs-drawer',
		    callbackClose: () => remove_class(find('.js-docs-drawer-trigger'), 'active')
		});
		
		attr(menu, 'style', false);

		frontbx.set('docs-drawer', drawer);
	}

    const DocDrawer = function()
    {
    	this._desktopContainer = find('.desktop-menu');

    	this._mobileContainer = find('.docs-drawer .js-drawer-dialog');

    	this._menuElem = find('#docs-menu');

        this.super('.js-docs-drawer-trigger');
    }

    DocDrawer.prototype.bind = function(trigger)
    {    	
    	on(trigger, 'click', this._toggleDrawer, this);

    	on(window, 'resize', this.resize(), this);

    	trigger_event(window, 'resize');
    }

    DocDrawer.prototype.unbind = function(trigger)
    {
    	off(trigger, 'click', this._toggleDrawer, this);

    	off(window, 'resize', this.resize(), this);
    }

    DocDrawer.prototype._toggleDrawer = function(e, trigger)
    {
    	toggle_class(trigger, 'active');

    	drawer.opened() ? drawer.close() : drawer.open();
    }

    DocDrawer.prototype.scroll = function()
    {
    	return throttle(() =>
    	{
    		let x = width(window);

	        if (x < 992 && this.inMain)
	        {
	            this._mobileContainer.appendChild(this._menuElem);

	            this.inMain = false;
	        }
	        else if (x > 992 && !this.inMain)
	        {
	        	this._desktopContainer.appendChild(this._menuElem);

	        	this.inMain = true;
	        }

    	}, 100);
    }

    DocDrawer.prototype.resize = function()
    {
    	return throttle(() =>
    	{
    		let x = width(window);

	        if (x < 992 && this.inMain)
	        {
	            this._mobileContainer.appendChild(this._menuElem);

	            this.inMain = false;
	        }
	        else if (x > 992 && !this.inMain)
	        {
	        	this._desktopContainer.appendChild(this._menuElem);

	        	this.inMain = true;
	        }

    	}, 100);
    }

    frontbx.dom().register('DocDrawer', extend(Component, DocDrawer), true);

}());

/**
 * Active classes on docs menu.
 *
 */
(function()
{
	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const [on, off, find, find_all, each, has_class, add_class, remove_class, extend] = frontbx.import(['on','off','find','find_all','each','has_class','add_class','remove_class', 'extend']).from('_');

	const DocsMenu = function()
    {
    	this._mounted = false;

        this.super('.js-docs-menu-link');

        on(window, 'popstate', this._initActiveLink, this);
    }

    DocsMenu.prototype.bind = function(link)
    {    	
    	on(link, 'click', this._toggleItem, this);

    	if (!this._mounted)
    	{
    		this._mounted = true;

    		this._initActiveLink();
    	}
    }

    DocsMenu.prototype.unbind = function(link)
    {
    	off(link, 'click', this._toggleItem, this);

    	this._mounted = false;
    }

    DocsMenu.prototype._toggleItem = function(e, a)
    {
    	let active = find('.menu-item.active');

    	if (active) remove_class(active, 'active');

    	add_class(a.parentNode, 'active');

    	frontbx.get('docs-drawer').close();
    }

    DocsMenu.prototype._initActiveLink = function(e)
    {
    	let location = window.location.href;

    	if (location.includes('#')) location = location.split('#').shift();

    	if (location.includes('?')) location = location.split('?').shift();

    	each(this._DOMElements, (i, link) =>
    	{
    		let href = link.href;

    		if (href === location)
    		{
    			add_class(link.parentNode, 'active');
    		}
    		else if (has_class(link.parentNode, 'active'))
    		{
    			remove_class(link.parentNode, 'active');
    		}
    	});
    }

    frontbx.dom().register('DocsMenu', extend(Component, DocsMenu), true);

}());


// Demo
/**
 * Fast Demo component
 *
 */
(function()
{
	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const [on, off, is_array_last, extend] = frontbx.import(['on','off','is_array_last','extend']).from('_');

	let GUIID = 0;

    const DemoComponent = function()
    {
    	this.bound = false;

        this.super(this.selector);
    }

    DemoComponent.prototype.bind = function(node)
    {
        on(node, 'click', this._handler, this);

        this.bound = true;
    }

    DemoComponent.prototype.unbind = function(node)
    {        
        off(node, 'click', this._handler, this);
        
        if (this.unbinder) this.unbinder();
    }

    DemoComponent.prototype._handler = function(e, node)
    {
        return this.handler.call(this, e, node);
    }

    function docsDemo(selector, handler, unbinder)
   	{
   		let demo = extend(Component, DemoComponent);

   		demo.prototype.selector = selector;

   		demo.prototype.handler = handler;

   		demo.prototype.unbinder = unbinder;

   		demo.prototype._ = frontbx._();

   		frontbx.Dom().register(`_DOCS_DEMO_${GUIID++}`, demo);
   	}

    frontbx.set('docsDemo', docsDemo);

})();

// Highlighter
/**
 * Converts article link menu to waypoints
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);
    const [find, add_class, remove_class, extend]  = frontbx.import(['find','add_class','remove_class','extend']).from('_');

    const ArticleWaypoints = function()
    {        
        this.super('.docs-body > h1 + p + hr + ul li a, .docs-body > h1 + p + p + hr + ul li a, .docs-body > h1 + p + p + p + hr + ul li a');
    }

    ArticleWaypoints.prototype.bind = function(link)
    {       
        add_class(link, 'js-waypoint-trigger');

        frontbx.dom().refresh('WayPoints', link.parentNode);
    }

    ArticleWaypoints.prototype.unbind = function(link)
    {
        remove_class(link, 'js-waypoint-trigger');
    }

    frontbx.dom().register('ArticleWaypoints', extend(Component, ArticleWaypoints), true);

}());

/**
 * Converts article table's to responsive
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);
    const [add_class, dom_element, extend]  = frontbx.import(['add_class','dom_element','extend']).from('_');

    const ArticleTables = function()
    {        
        this.super('.docs-body > table');
    }

    ArticleTables.prototype.bind = function(table)
    {       
        let wrapper = dom_element({tag: 'div', class: 'table-responsive'});

        table.parentNode.replaceChild(wrapper, table);

        wrapper.appendChild(table);

         add_class(table, 'table, table-minimal');
    }

    ArticleTables.prototype.unbind = function(table)
    {
        
    }

    frontbx.dom().register('ArticleTables', extend(Component, ArticleTables), true);

}());


/**
 * Add anchor links to articles
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);
    const [find, dom_element, remove_from_dom, extend]  = frontbx.import(['find','dom_element','remove_from_dom','extend']).from('_');

    const ArticleTitles = function()
    {        
        this.super('.docs-body > h1, .docs-body > h2, .docs-body > h3, .docs-body > h4, .docs-body > h5, .docs-body > h6');
    }

    ArticleTitles.prototype.bind = function(title)
    {       
        let a = find('> a', title);

        if (a && a.id)
        {
            a.className = 'anchor-link js-waypoint-trigger';

            a.innerHTML = '#';
        }
        else
        {
            dom_element({tag: 'a', class: 'anchor-link js-waypoint-trigger', href: `#${title.id}`, ariaLabel: `Link to this section: ${title.innerText.trim()}`}, title, '#');  
        }
        
        frontbx.dom().refresh('WayPoints', title);
    }

    ArticleTitles.prototype.unbind = function(title)
    {
        let a = find('.js-waypoint-trigger', title);

        if (a) remove_from_dom(a);
    }

    frontbx.dom().register('ArticleTitles', extend(Component, ArticleTitles), true);

}());

/**
 * Blockquotes in articles
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);
    const [add_class, extend] = frontbx.import(['add_class', 'extend']).from('_');

    const BQs = function()
    {        
        this.super('.docs-body > blockquote');
    }

    BQs.prototype.bind = function(blockquote)
    {
       	add_class(blockquote, 'bq-info');
    }

    BQs.prototype.unbind = function(blockquote)
    {
    	
    }

    frontbx.dom().register('BQs', extend(Component, BQs), true);

}());

// Theme
/**
 * Theme switcher
 *
 */
(function()
{
	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const [find_all, each, on, off, attr, add_class, remove_class, extend] = frontbx.import(['find_all','each','on','off', 'attr','add_class','remove_class','extend']).from('_');

	const ThemeSwitcher = function()
    {
    	let theme = localStorage.getItem('fbx-docs-base-theme') || 'light';

    	localStorage.setItem('fbx-docs-base-theme', theme);

    	this._setTheme(theme);

        this.super('.js-docs-theme-menu');
    }

    ThemeSwitcher.prototype.bind = function(list)
    {
    	on(list, 'frontbx:menu:selected', this._toggleTheme, this);	
    }

    ThemeSwitcher.prototype.unbind = function(list)
    {
        off(list, 'frontbx:menu:selected', this._toggleTheme, this);	
    }

    ThemeSwitcher.prototype._toggleTheme = function(e)
    {
    	let list = e.detail.DOMElement;

    	let theme = attr(e.detail.item, 'data-theme');

    	this._setTheme(theme);

    	this._theme = theme;

    	localStorage.setItem('fbx-docs-base-theme', theme);
    }

    ThemeSwitcher.prototype._setTheme = function(theme)
    {
    	if (theme === 'dark')
    	{
    		add_class(document.documentElement, 'fbx-darkmode');
    	}
    	else if (theme === 'auto')
    	{
    		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    		{
    			add_class(document.documentElement, 'fbx-darkmode');
    		}
    		else
    		{
    			remove_class(document.documentElement, 'fbx-darkmode');
    		}
    	}
    	else
    	{
    		remove_class(document.documentElement, 'fbx-darkmode');
    	}
    }

    const InitialThemeLinks = function()
    {
    	this._theme = localStorage.getItem('fbx-docs-base-theme') || 'light';

        this.super('.js-docs-theme-menu > li');
    }

    InitialThemeLinks.prototype.bind = function(item)
    {
    	let theme = attr(item, 'data-theme');

    	theme === this._theme ? add_class(item, 'selected') : remove_class(item, 'selected');

    }

    InitialThemeLinks.prototype.unbind = function(item)
    {
    	remove_class(item, 'selected')
    }

    frontbx.dom().register('ThemeSwitcher', extend(Component, ThemeSwitcher), true);

    frontbx.dom().register('InitialThemeLinks', extend(Component, InitialThemeLinks), true);

}());


// Color picker
/**
 * Docs color theme
 *
 */
(function()
{
    const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

    const [find, in_dom, dom_element, extend] = frontbx.import(['find','in_dom','dom_element','extend']).from('_');

    const ThemeColor = function()
    {
        this._theme = localStorage.getItem('fbx-docs-color-theme') || 'var(--fbx-color-beetroot)';

        this._stylesheet;

        this.super('body');
    }

    ThemeColor.prototype.bind = function()
    {
        this._appendStyles();
    }

    ThemeColor.prototype.undbind = function()
    {
        if (!in_dom(this._stylesheet))
        {
            this._stylesheet.inner_HTML = '';

            this._stylesheet.innerText = '';

            this._stylesheet = false;
        }
    }

    ThemeColor.prototype.theme = function()
    {
        return this._theme;
    }

    ThemeColor.prototype._appendStyles = function()
    {
        let styles = this.styles();

        if (this._stylesheet && this._stylesheet.innerText.trim() === styles) return;

        let style = dom_element({tag: 'style'}, null, styles);

        if (this._stylesheet)
        {
            find('head').replaceChild(style, this._stylesheet);
        }
        else
        {
            find('head').appendChild(style);
        }

        this._stylesheet = style;
    }

    ThemeColor.prototype.styles = function()
    {       
        let shade = this._theme.replace('--fbx-color-', '--fbx-docs-').replace(')', '').replace('var(', '').trim();

        return `:root {
    --fbx-theme-primary: ${this._theme};
    --fbx-theme-primary-rgb: ${this._theme.replace(')', '-rgb)')};
    --fbx-theme-primary-100: var(${shade}-100);
    --fbx-theme-primary-200: var(${shade}-200);
    --fbx-theme-primary-300: var(${shade}-300);
    --fbx-theme-primary-400: var(${shade}-400);
    --fbx-theme-primary-500: var(${shade}-500);
    --fbx-theme-primary-600: var(${shade}-600);
    --fbx-theme-primary-700: var(${shade}-700);
    --fbx-theme-primary-800: var(${shade}-800);
    --fbx-theme-primary-900: var(${shade}-900);
}`.trim();
    }

    ThemeColor.prototype.setTheme = function(theme)
    {
        localStorage.setItem('fbx-docs-color-theme', theme);

        this._theme = theme;

        this._appendStyles();
    }

    frontbx.dom().register('ThemeColor', extend(Component, ThemeColor), true);

}());

/**
 * Docs color playground
 *
 */
(function()
{
	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const [on, off, each, attr, find, add_class, remove_class, extend] = frontbx.import(['on','off', 'each', 'attr','find','add_class','remove_class','extend']).from('_');

	const ColorPlayground = function()
    {        
        this.super('.js-docs-playground-swatches .docs-swatch');
    }

    ColorPlayground.prototype.bind = function(swatch)
    {
    	on(swatch, 'click', this._makeSelection, this);

    	if (!this.mounted)
    	{
    		this.mounted = true;

    		this._codeWrapper = find('.js-docs-playground-code');

    		this._codeEl = find('.js-docs-playground-code code');

    		this._setDefaultSwatch();
    	}
    }

    ColorPlayground.prototype.unbind = function(swatch)
    {
        off(swatch, 'click', this._makeSelection, this);

        this.mounted = false;
    }

    ColorPlayground.prototype._setDefaultSwatch = function()
    {
    	let theme = frontbx.dom().component('ThemeColor');

    	let color = theme.theme();

    	each(this._DOMElements, (i, swatch) =>
    	{
    		if (attr(swatch, 'data-swatch') === color)
    		{
    			add_class(swatch, 'active');

    			this._codeEl.innerHTML = theme.styles();

    			frontbx.dom().refresh('Highlighter', this._codeWrapper);

    			return false;
    		}
    	});
    }

    ColorPlayground.prototype._makeSelection = function(e, swatch)
    {
    	let theme  = frontbx.dom().component('ThemeColor');
        let color  = attr(swatch, 'data-swatch');
    	let active = find('.js-docs-playground-swatches .docs-swatch.active');

    	if (active) remove_class(active, 'active');

    	add_class(swatch, 'active');

    	theme.setTheme(color);

    	this._codeEl.innerText = '';
    			
    	this._codeEl.innerHTML = theme.styles();

    	frontbx.dom().refresh('Highlighter', this._codeWrapper);
    }

    frontbx.dom().register('ColorPlayground', extend(Component, ColorPlayground), true);

}());




// Demos
/**
 * Modal Demos
 *
 */
(function()
{
	frontbx.DocsDemo('.js-modal-trigger-1', () => 
	    frontbx.Modal({
	        title            : 'Use X\'s location service?',
	        content          : 'Let X help apps determine location. This means sending anonymous location data to X, even when no apps are running.',
	        cancelBtn        : 'Disagree',
	        confirmBtn       : 'Agree',
	    })
	);

	let demo2Content = `<div class="card col col-lg-4">
        <div class="card-header">
            <div class="card-header-left">
                <div class="avatar">
                    <img data-src="../../assets/img/trump-avatar.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-avatar_thumb.jpg" />
                </div>
            </div>
            <div class="card-header-content p5">
                <div class="text-bold">The Don</div>
                <div class="color-gray font-italic">Make America Great Again</div>
            </div>
        </div>
        <div class="card-media">
            <img data-src="../../assets/img/trump-hero.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-hero_thumb.jpg" />
        </div>
        <div class="card-block">
            <h4 class="card-title">This Is MAGA Country</h4>
            <p>Veniam laboris do sit sunt dolore incididunt fugiat id enim ut ullamco enim deserunt fugiat.</p>
        </div>
    </div>`;

	frontbx.DocsDemo('.js-modal-trigger-2', () => frontbx.Modal({
        content : demo2Content,
        custom: true,
        closeAnywhere: true
    }));


	let options =
	{
        title            : 'Use X\'s location service?',
        content          : 'Lorem ipsum officia dolore id incididunt in est ut amet reprehenderit non ut pariatur esse do dolore nisi ut ut veniam minim sed ut fugiat exercitation eiusmod duis laboris consectetur anim id quis proident proident qui laboris cillum velit in sit consequat mollit et elit ut esse minim sit et mollit dolore dolor est dolor ea exercitation aliqua officia tempor dolore sit nulla in qui est ut minim sit dolore commodo in dolor in sed exercitation duis labore anim ut sed in id consequat anim aliquip incididunt irure cupidatat nisi dolore in sunt ullamco qui commodo ut magna tempor ut eu in id mollit laboris excepteur irure sint et elit commodo cillum cillum nostrud dolor nulla sint nostrud veniam do aliquip consequat eiusmod fugiat officia dolor reprehenderit dolore eu dolor veniam sed dolor eu in mollit magna voluptate et ullamco incididunt esse esse aliquip ut elit nisi.Lorem ipsum proident cupidatat sed eiusmod est id occaecat eiusmod ut fugiat ut tempor ut esse exercitation sint est minim nulla in amet commodo dolore incididunt adipisicing est mollit tempor mollit tempor in non laboris officia proident reprehenderit fugiat adipisicing voluptate mollit labore cupidatat amet do non pariatur in id cupidatat deserunt sint tempor do dolor qui occaecat id cillum amet incididunt duis esse id incididunt ea duis voluptate nisi dolor proident consequat adipisicing elit ullamco sit eiusmod dolor excepteur sed ut officia sit pariatur ut incididunt ullamco excepteur pariatur in qui nulla excepteur ut veniam elit officia elit amet irure sed dolore dolore amet sit veniam incididunt commodo est sit mollit consequat sed cupidatat labore deserunt minim commodo dolore excepteur reprehenderit est labore est exercitation exercitation nostrud ad officia mollit consequat ea laborum et ullamco veniam cillum ad eiusmod veniam velit irure voluptate cillum quis anim enim voluptate in consectetur incididunt est proident nulla eiusmod excepteur et quis ea labore cillum nisi deserunt ad deserunt sed adipisicing sed dolore ut anim et duis sunt occaecat adipisicing.Mollit in commodo ut amet in nostrud id nostrud quis occaecat mollit ut mollit enim labore dolor nostrud occaecat sint non veniam sint do in consectetur excepteur magna nisi magna consectetur nisi enim ea ad occaecat veniam dolore fugiat exercitation tempor deserunt velit et ad proident deserunt adipisicing fugiat deserunt sint commodo tempor proident sint irure in ullamco dolore ex cillum quis sit in fugiat reprehenderit dolor mollit veniam nulla aliquip magna excepteur culpa veniam tempor amet do voluptate sint officia eiusmod est ut occaecat ea minim ut sunt quis enim est non veniam qui quis quis consequat qui do laborum nostrud cillum fugiat aute eu consectetur reprehenderit elit dolore dolore sint consequat non non ut esse laborum ut dolor in ea nostrud eiusmod duis aute irure dolor proident sit aliqua laboris qui labore ex aliquip cupidatat officia consectetur reprehenderit aliqua consectetur sunt cillum proident aute ullamco mollit ea consectetur mollit elit veniam dolor consectetur quis in est laborum sint nulla ad laborum in dolor dolor consectetur laborum id minim ut labore voluptate sit deserunt qui fugiat ullamco proident velit sunt ut ex occaecat.In consectetur cillum sed culpa nisi culpa consectetur amet laborum aute in cupidatat in consequat incididunt cupidatat tempor in laborum non mollit ex in sed duis duis sit veniam enim nisi dolore tempor adipisicing eu adipisicing veniam ea tempor sed ut aute est ullamco incididunt anim cillum esse nisi labore nostrud voluptate irure officia velit qui et eiusmod deserunt enim minim mollit proident culpa ut minim do velit eu ut enim ex nostrud eiusmod sunt esse consectetur cillum deserunt aliqua aute laboris sunt dolor voluptate excepteur ut ut qui velit aliquip et duis laborum eiusmod dolor aute aliqua ex velit dolor incididunt consequat do fugiat non tempor ut consectetur est do magna ad deserunt elit magna mollit eu laboris ad tempor occaecat fugiat laborum pariatur reprehenderit laborum sit enim cupidatat officia esse labore eu magna magna nostrud in ut nulla occaecat mollit laborum dolore labore fugiat.',
        cancelBtn        : 'Disagree',
        confirmBtn       : 'Agree',
    };

    frontbx.DocsDemo('.js-modal-trigger-3', () => frontbx.Modal({...options, scroll: 'modal'}));
    frontbx.DocsDemo('.js-modal-trigger-4', () => frontbx.Modal({...options, scroll: 'content'}));

	frontbx.DocsDemo('.js-modal-trigger-5', () => frontbx.Modal({
        title : 'Subscribe for $1?',
        content : 'Subscribe for $1 and get all my posts for free!',
        cancelBtn : 'Nah',
        confirmBtn : 'YES!',
        classes: 'custom-modal',
        overlay: false,
        closeAnywhere: false,
    }));

	const [dom_element] = frontbx.import(['dom_element']).from('_');

    const blurb = dom_element({tag: 'p', class: 'pole-xs pole-s', innerText: 'To subscribe to this website, please enter your email address here. We will send updates occasionally.'});

    const form = dom_element({tag: 'div', class: 'form-field row underlined'}, null, [
        dom_element({tag: 'input', name: 'email', type: 'email', placeholder: 'Your email address', class: 'js-modal-input'}),
        dom_element({tag: 'label', for: 'email', innerText: 'Email'}),
    ]);

    frontbx.DocsDemo('.js-modal-trigger-6', function()
    {
        frontbx.Modal({
            title: 'Subscribe',
            content: [blurb.cloneNode(true), form.cloneNode(true)],
            cancelBtn : 'Cancel',
            confirmBtn : 'Subscribe',
            callbackOpen: (modal) => this._.find('.js-modal-input', modal).focus(),
        })
    });

}());

/**
 * Menu insert demo
 *
 */
(function()
{
	let options =
	{
	    dense: false,
	    selectable: true,
	    ellipsis: false,
	    items:
	    [
	        'Item One',
	        {
	            left: '<span class="fa fa-inbox"></span>',
	            body: 'Item Two',
	            right: '<span class="label">4</span>',
	        },
	        {
	            left: '<span class="fa fa-flag"></span>',
	            body: 'Item Two',
	            right: '<span class="label">3</span>',
	        }
	    ]
	};

    frontbx.DocsDemo('.js-insert-trigger', (e, btn) => frontbx.Dom().create('Menu', options, document.querySelector('.js-insert-container')))

}());

/**
 * Insert table demo
 *
 */
(function()
{
	let options =
    {
        head: ['Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'],
        rows:
        [
            ['Frozen yoghurt', 159, 6.0, 24, 4.0],
            ['Ice cream sandwich', 237, 9.0, 37, 4.3],
            ['Eclair', 262, 16.0, 24, 6.0],
            ['Cupcake', 305, 3.7, 67, 4.3],
            ['Gingerbread', 356, 16.0, 49, 3.9],
        ]
    };

    const [find] = frontbx.import(['find']).from('_');

    frontbx.DocsDemo('.js-insert-table-btn', () => frontbx.Dom().create('Table', options, find('.js-insert-table-container')));

}());

/**
 * Insert list demo
 *
 */
(function()
{
    let options =
    {
        dense: false,
        selectable: true,
        ellipsis: false,
        items:
        [
            'Option One',
            {
                left: '<span class="fa fa-sun"></span>',
                body: 'Option Two'
            },
            {
                left: '<span class="fa fa-sun"></span>',
                body: 'Option 3',
                right: '<span class="fa fa-user"></span>',
            }
        ]
    };

    const [find] = frontbx.import(['find']).from('_');

    frontbx.DocsDemo('.js-insert-list-btn', () => frontbx.Dom().create('List', options, find('.js-insert-list-container')));

}());



/**
 * Lazyload image demos
 *
 */
(function()
{
    const [each, find_all, closest, add_class, has_class] = frontbx.import(['each', 'find_all', 'closest', 'add_class', 'has_class']).from('_');

    frontbx.DocsDemo('.js-lazy-demo .js-lazy-demo-trigger', (i, btn) =>
    {        
        let wrapper = closest(btn, '.js-lazy-demo');

        let imgs = find_all('.js-lazy-demo-img', wrapper);

        each(imgs, (i, img) =>
        {
            if (!has_class(img, 'js-lazyload'))
            {
                add_class(img, 'js-lazyload');

                frontbx.dom().refresh('LazyLoad', wrapper);
            }
        });  
    });

}());

/**
 * Insert image demo
 *
 */
(function()
{
    let inserted = false;
	let options =
	{
		src: '../../assets/img/trump-hero.jpg',
		alt: 'Trump',
		lazy: true,
		ratio: '1/1',
		background: false,
	};

	const [find] = frontbx.import(['find']).from('_');

	frontbx.DocsDemo('.js-insert-img-btn', () => frontbx.Dom().create('Image', options, find('.js-insert-img-container')));

}());

/**
 * Refresh lazyload image demo
 *
 */
(function()
{
	const [find] = frontbx.import(['find']).from('_');

	const img = '<div class="avatar avatar-xl"><img alt="Trump" data-src="../../assets/img/trump-avatar.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-avatar_thumb.jpg" /></div>';

	frontbx.DocsDemo('.js-refresh-lazyload-btn', () =>
	{
		let container = find('.js-refresh-lazyload-container');

		container.innerHTML += img;

		frontbx.dom().refresh('LazyLoad', container);
	});

}());

/**
 * Skeletons sandbox demo
 *
 */
(function()
{
	const [find, form_values, each, has_class, add_class, remove_class] = frontbx.import(['find','form_values','each','has_class','add_class','remove_class']).from('_');

	let skeletons = [];

	frontbx.DocsDemo('.js-insert-skeletons', function()
    {
    	const DOMElementform = find('.js-skeleton-form');
	    const DOMElementCard = find('.js-skeleton-card');

	    if (has_class(find('.js-destroy-skeletons', DOMElementform), 'active')) return false;

       	let form    = form_values(DOMElementform);
        let height  = form.variant === 'block' ? '100px' : null;
        let options = { count: form.count, height: height, variant: `${form.style} ${form.variant} ${form.textblock}`.trim() };
        
        skeletons.push(frontbx.Skeleton(DOMElementCard, options));

        return false;

    }, () => skeletons = []);

    frontbx.DocsDemo('.js-destroy-skeletons', function(e, btn)
    {
    	if (has_class(btn, 'active') || skeletons.length === 0) return false;

        add_class(btn, 'active');

        each(skeletons, (i, skeleton) => skeleton.fade_out(() => remove_class(btn, 'active')));

        skeletons = [];

        return false;
    });

}());

/**
 * Skeletons Demos.
 *
 */
(function()
{
	const Component = frontbx.Component(frontbx.IMPORT_AS_REF);

	const [find, each, on, off, extend] = frontbx.import(['find','each','on','off','extend']).from('_');

	const contents = 
    {
        '.js-card-header-left' : '<div class="avatar"><img class="img-responsive js-lazyload lazyload grayscale lazy-loaded" src="../../assets/img/trump-avatar.jpg"></div>',
        '.js-card-header-content' : '<div class="text-bold">The Don</div><div class="color-gray font-italic small">Make America Great Again</div>',
        '.js-card-media' : '<img data-src="../../assets/img/trump-hero.jpg" class="img-responsive js-lazyload lazyload grayscale" src="../../assets/img/trump-hero_thumb.jpg" />',
        '.js-card-title' : '<h5 class="text-bold">MAGA Country</h5>',
        '.js-card-text' : '<p>Veniam laboris do sit sunt dolore incididunt fugiat id enim ut ullamco enim deserunt fugiat.</p>',
    };
    
    let options =
    [
        { selector: '.js-card-header-left', variant: 'circle wave', width: '40px',height: '40px'},
        { selector: '.js-card-header-content', variant: 'text-block', lines: 2},
        { selector: '.js-card-media', variant: 'block wave', aspectratio: '16/9'},
        { selector: '.js-card-title', variant: 'h5'},
        { selector: '.js-card-text', variant: 'text-block', lines: 2},
    ];

	const SkeletonLoader = function()
    {   
    	this.loaded = false;

    	this.skeleton = null;

        this.super('.js-skeleton-loader-card');
    }

    SkeletonLoader.prototype.bind = function(node)
    {
    	this.cardWrapper = find('.js-skeleton-loader-card');

    	this.triggerLoad = find('.js-load-content');

    	this.triggerReset = find('.js-reset-skeletons');

    	on(this.triggerLoad, 'click', () => 
    	{
    		if (this.loaded) return;

    		this.skeleton.load(contents);

        	frontbx.dom().refresh('LazyLoad', this.cardWrapper);

        	this.loaded = true;
    	});
    	
    	on(this.triggerReset, 'click', () => 
    	{
	        this.loaded = false;

	        this.makeSkeletons();
	    });

        this.makeSkeletons();
    }

    SkeletonLoader.prototype.unbind = function(node)
    {
    	this.loaded = false;

    	this.skeleton = null;

    	off(this.triggerLoad);

    	off(this.triggerReset);
    }

    SkeletonLoader.prototype.makeSkeletons = function()
    {
    	each(options, (i, option) => find(option.selector, this.cardWrapper).innerHTML = '' );

        this.skeleton = frontbx.Skeleton(this.cardWrapper, options);
   	}

    frontbx.dom().register('SkeletonLoader', extend(Component, SkeletonLoader), true);

})();

/**
 * Animate demos
 *
 */
(function()
{
    const [find, animate] = frontbx.import(['find', 'animate']).from('_');

    frontbx.DocsDemo('.js-animate-css-trigger', () =>
        animate(find('.js-animate-css-example'),
        {
            width: 
            {
                to : '500px',
                duration: 1000,
            },
            height: 
            {
                to : '200px',
                duration: 1000,
            },
            backgroundColor: 
            {
                to : '#b324ea',
                duration: 2000,
            },
            
        })
    );

    frontbx.DocsDemo('.js-animate-trigger', () =>
        animate(find('.js-animate-example'),
        {
            width: 
            {
                to : '500px',
                duration: 1000,
            },
            height: 
            {
                to : '200px',
                duration: 1000,
            },
            backgroundColor: 
            {
                to : '#b324ea',
                duration: 2000,
            },
            
        })
    );

}());

/**
 * Form validation demo
 *
 */
(function()
{
	/* Helpers */
	const [find, closest, has_class, add_class, remove_class] = frontbx.import(['find', 'closest', 'has_class', 'add_class', 'remove_class']).from('_');

	// Instantiate validator and cache vars
	let fakeAjax;
	let validator;

	frontbx.DocsDemo('.js-form-validatior-btn', (e, submitBtn) =>
	{
		if (validator) validator.destroy();

		validator = frontbx.FormValidator(closest(submitBtn, 'form'));

	    // Don't submit if the form if it is being submitted
	    if (has_class(submitBtn, 'active')) return false;

	    // Validate to the form
	    let valid = validator.validate();

	    console.log('Running validation....');
	    console.log(`Form is [${valid ? 'valid' : 'invalid'}]`);

	    // Clear fake ajax timeout
	    clearTimeout(fakeAjax);

	    // Validation
	    if (valid)
	    {
	    	console.log(`Submitting form over Ajax...`);

	    	add_class(submitBtn, 'active');

	    	// Fake result from ajax
	    	var result = validator.form().result;

	        // Here you would send a real ajax request
	        fakeAjax = setTimeout(function()
	        { 
	            validator.showResult(result);

	            remove_class(submitBtn, 'active');

	        }, 1500);
	    }
	    
	    // Return false stop form submitting...
	    return false;
	});

}());

/**
 * Notification Demos.
 *
 */
(function()
{
	frontbx.DocsDemo('.js-notif-trigger-1', () => frontbx.Notification({
            text  : 'Hello! I\'m a notification.',
        })
    );
    frontbx.DocsDemo('.js-notif-trigger-2', () => frontbx.Notification(
    {
        btn  : 'Dismiss',
        text : 'Hello! I\'m a notification.',
    }));
    frontbx.DocsDemo('.js-notif-trigger-3', () => frontbx.Notification(
    {
        icon : 'bell',
        text : 'Hello! I\'m a notification.',
    }));
    frontbx.DocsDemo('.js-notif-trigger-4', () => frontbx.Notification(
    {
        btn        : 'Danger',
        btnVariant : 'danger',
        text       : 'Hello! I\'m a notification.',
    }));
    frontbx.DocsDemo('.js-notif-trigger-5', () => frontbx.Notification(
    {
        icon : 'bell',
        text : 'Hello! I\'m a notification.',
        closebtn: true
    }));
    frontbx.DocsDemo('.js-notif-trigger-6', () => frontbx.Notification(
    {
        icon    : 'check',
        variant : 'primary',
        text    : 'Hello! I\'m a notification.',
    }));
    frontbx.DocsDemo('.js-notif-trigger-7', () => frontbx.Notification(
    {
        icon       : 'bell',
        stacked    : true,
        btn        : '<button type="button" class="btn btn-pure btn-sm" aria-label="cancel">Cancel</button><button type="button" class="btn btn-primary btn-sm" aria-label="Confirm">Confirm</button>',
        text       : '<p class="text-bold">Lorem ipsum laboris cupidatat in enim sunt?</p><p style="opacity: 0.9;">In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.</p>',
    }));
    frontbx.DocsDemo('.js-notif-trigger-8', () => frontbx.Notification(
    {
        responsive : true,
        btn        : 'Confirm',
        text       : '<p class="text-bold">Lorem ipsum laboris cupidatat in enim sunt?</p><p style="opacity: 0.9;">In proident nostrud exercitation elit irure id consequat consequat nulla sunt nulla dolore officia est.</p>',
    }));
    frontbx.DocsDemo('.js-notif-trigger-9', () => frontbx.Notification(
    {
        icon       : 'bell',
        dense      : false,
        text       : 'Eiusmod ullamco cupidatat culpa amet sit nostrud veniam consectetur quis labore duis duis ut occaecat sint.',
    }));
    
    frontbx.DocsDemo('.js-notif-trigger-10', () => frontbx.Notification(
    {
        text: 'Hello! You need to click me to dismiss.',
        timeout: false,
    }));
    frontbx.DocsDemo('.js-notif-trigger-11', function()
    {
        let start = 10;
        let i     = 1;
        let timer = setInterval(() => this._.find('.js-time', notif.domElement()).innerText = (start - i++), 1000);

        let notif = frontbx.Notification(
        {
            text: 'Hello! I\'ll disappear in <span class="js-time">10</span> seconds.',
            timeout: 10000,
            callbackDismiss: () => clearInterval(timer)
        });
    });
    frontbx.DocsDemo('.js-notif-triggers-pos', (e, trigger) =>
    {
        frontbx.Notification({
            text: 'Hello! I\'m a notification.',
            position: trigger.innerText.trim()
        })
    });

}());

/**
 * Drawer Demos.
 *
 */
(function()
{
	const DRAWER_MENU = '<ul class="menu"><li><span class="item-left"><span class="fa fa-inbox color-gray-500"></span></span><span class="item-body">Inbox</span><span class="item-right"><span class="label">4</span></span>  </li>  <li><span class="item-left"><span class="fa fa-flag color-gray-500"></span></span><span class="item-body">Flagged</span><span class="item-right"><span class="label">23</span></span>  </li>  <li><span class="item-left"><span class="fa fa-note-sticky color-gray-500"></span></span><span class="item-body">Drafts</span><span class="item-right"><span class="label">3</span></span>  </li>  <li><span class="item-left"><span class="fa fa-paper-plane color-gray-500"></span></span><span class="item-body">Sent</span><span class="item-right"><span class="status status-xs"></span></span>  </li>  <li><span class="item-left"><span class="fa fa-circle-minus color-gray-500"></span></span><span class="item-body">Junk</span><span class="item-right"><span class="status status-xs status-warning"></span></span>  </li>  <li><span class="item-left"><span class="fa fa-trash color-gray-500"></span></span><span class="item-body">Trash</span><span class="item-right"><span class="status status-xs status-danger"></span></span>  </li> </ul>';
    
    let drawer1;
    let drawer2;

    frontbx.DocsDemo('.js-dw-trigger-1', () =>
    {        
        if (drawer2) drawer2 = drawer2.destroy();

        if (drawer1) return drawer1.open();

        drawer1 = frontbx.Drawer({ content : DRAWER_MENU });

    }, () => drawer1 ? drawer1 = drawer1.destroy() : null);

    
    frontbx.DocsDemo('.js-dw-trigger-2, .js-dw-trigger-3, .js-dw-trigger-4, .js-dw-trigger-5', (e, btn) =>
    {
        if (drawer1) drawer1 = drawer1.destroy();

        drawer2 = frontbx.Drawer({ direction : btn.innerText.toLowerCase().trim(), content : DRAWER_MENU });

    }, () => drawer2 ? drawer2 = drawer2.destroy() : null);

    const [on] = frontbx.import(['on']).from('_');

    on(window, 'frontbx:pjax:start', () => 
    {
        if (drawer1) drawer1 = drawer1.destroy();
        if (drawer2) drawer2 = drawer2.destroy();
    });

}());

/**
 * Backdrop Demos.
 *
 */
(function()
{
	const SKELETONS = 
	[
	    { lines: 1, variant: 'block-h3' },
	    { lines: 6, variant: 'text-block' },
	    { lines: 1, variant: 'block-h4' },
	    { lines: 3, variant: 'text-block' },
	];

    let backdrop1;
    let backdrop2;

    frontbx.DocsDemo('.js-bd-trigger-1', () =>
    {        
        if (backdrop2) backdrop2 = backdrop2.destroy();

        if (backdrop1) return backdrop1.closed() ? backdrop1.open() : backdrop1.close();

        backdrop1 = frontbx.Backdrop(
	    {
	        callbackBuilt: (container, drawer, overlay) => {
	            let pad = frontbx._().dom_element({tag: 'div', class: 'pad-20',}, frontbx._().find('.js-drawer-dialog', container));
	            frontbx.Skeleton(pad, SKELETONS)
	        },
	        state: 'collapsed',
	    });

        backdrop1.open();

    }, () => backdrop1 ? backdrop1 = backdrop1.destroy() : null);
   
    frontbx.DocsDemo('.js-bd-trigger-2', () =>
    {       
        if (backdrop1) backdrop1 = backdrop1.destroy();

        if (backdrop2) return backdrop2.closed() ? backdrop2.open() : backdrop2.close();
        
        backdrop2 = frontbx.Backdrop(
	    {
	        callbackBuilt: (container, drawer, overlay) => {
	            let pad = frontbx._().dom_element({tag: 'div', class: 'pad-20',}, frontbx._().find('.js-drawer-dialog', container));
	            frontbx.Skeleton(pad, SKELETONS)
	        },
	        state: 'collapsed',
	        pushbody: true,
	    });
        backdrop2.open();

    }, () => backdrop2 ? backdrop2 = backdrop2.destroy() : null);

    const [on] = frontbx.import(['on']).from('_');

    on(window, 'frontbx:pjax:start', () => 
    {
        if (backdrop1) backdrop1 = backdrop1.destroy();
        if (backdrop2) backdrop2 = backdrop2.destroy();
    });
    
}());

/**
 * Frontdrop Demos.
 *
 */
(function()
{
	const SKELETONS = 
	[
	    { lines: 1, variant: 'block-h3' },
	    { lines: 6, variant: 'text-block' },
	    { lines: 1, variant: 'block-h4' },
	    { lines: 8, variant: 'text-block' },
	];

    let frontdrop1;
    let frontdrop2;

    frontbx.DocsDemo('.js-fd-trigger-1', () =>
    {
        if (frontdrop2) frontdrop2 = frontdrop2.destroy();

        if (frontdrop1) return frontdrop1.closed() ? frontdrop1.open() : frontdrop1.close();
        
        frontdrop1 = frontbx.Frontdrop(
        {
            callbackBuilt: (container, drawer, overlay) => frontbx.Skeleton(frontbx._().find('.card-block .container-fluid', container), SKELETONS),
            state: 'collapsed'
        });

        frontdrop1.open();

    }, () => frontdrop1 ? frontdrop1 = frontdrop1.destroy() : null );

    
    frontbx.DocsDemo('.js-fd-trigger-2', () =>
    {
        if (frontdrop1) frontdrop1 = frontdrop1.destroy();

        if (frontdrop2) return frontdrop2.closed() ? frontdrop2.open() : frontdrop2.close();
        
        frontdrop2 = frontbx.Frontdrop(
        {
            callbackBuilt: (container, drawer, overlay) => frontbx.Skeleton(frontbx._().find('.card-block .container-fluid', container), SKELETONS),
            state: 'collapsed',
            confirmBtn: 'Confirm Choice',
        });

        frontdrop2.open();

    }, () => frontdrop2 ? frontdrop2 = frontdrop2.destroy() : null);

    const [on] = frontbx.import(['on']).from('_');

    on(window, 'frontbx:pjax:start', () => 
    {
        if (frontdrop1) frontdrop1 = frontdrop1.destroy();
        if (frontdrop2) frontdrop2 = frontdrop2.destroy();
    });

}());

/**
 * Range insert demo
 *
 */
(function()
{
    let inserted = false;

    let options =
    {
        min: 0,
        max: 100,
        value: 50,
        step: 1,
        labeled: false,
        indicators: false,
    };

    frontbx.DocsDemo('.js-insert-range-btn', (e, btn) =>
    {
        if (!inserted)
        {
            frontbx.Dom().create('RangeSlider', options, document.querySelector('.js-insert-range-container'))
            
            inserted = true;    
        }
    }, () => inserted = false);

}());

/**
 * Popover insert demo
 *
 */
(function()
{
    const [on] = frontbx.import(['on']).from('_');

    let popover;

    let options =
    {
        min: 0,
        max: 100,
        value: 50,
        step: 1,
        labeled: false,
        indicators: false,
    };

    frontbx.DocsDemo('.js-docs-popover-trigger', (e, btn) =>
    {
        if (!popover)
        {
            popover = frontbx.Popover(
            {
                variant: 'info',
                direction: 'top-left',
                animation: 'fade',
                title: 'Hello World!',
                content: 'Laboris nostrud excepteur nostrud sit anim eiusmod occaecat in elit reprehenderit ex ad occaecat anim sint irure est sunt.',
                event: 'click',
                classes: 'my-popover',
                trigger: btn
            });

            window.addEventListener('click', () =>
            {
                
            });
        }
    });

    on(window, 'frontbx:pjax:start', () => 
    {
        if (popover)
        {
            popover.destroy();

            popover = null;
        }
    });

}());

