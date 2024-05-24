/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{435:function(t,e,n){"use strict";var r={props:{text:{type:String,require:!0},redirect:{type:String,require:!0}}},o=n(45),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn--primary type--uppercase",attrs:{href:t.redirect+"/"}},[n("span",{staticClass:"btn__text"},[t._v(" "+t._s(t.text)+" ")])])}),[],!1,null,null,null);e.a=component.exports},437:function(t,e,n){(function(e){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=2)}([function(t,e,n){n(6);var r=n(7)(n(4),n(8),null,null);t.exports=r.exports},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r={strings:{type:Array,required:!1,default:function(){return["Hello World!"]}},stringsElement:{type:String,required:!1,default:null},typeSpeed:{type:Number,required:!1,default:50},startDelay:{type:Number,required:!1,default:0},backSpeed:{type:Number,required:!1,default:0},smartBackspace:{type:Boolean,required:!1,default:!0},shuffle:{type:Boolean,required:!1,default:!1},backDelay:{type:Number,required:!1,default:700},fadeOut:{type:Boolean,required:!1,default:!1},fadeOutClass:{type:String,required:!1,default:"typed-fade-out"},fadeOutDelay:{type:Number,required:!1,default:500},loop:{type:Boolean,required:!1,default:!1},loopCount:{type:Number,required:!1,default:1/0},showCursor:{type:Boolean,required:!1,default:!0},cursorChar:{type:String,required:!1,default:"|"},autoInsertCss:{type:Boolean,required:!1,default:!0},attr:{type:String,required:!1,default:null},bindInputFocusEvents:{type:Boolean,required:!1,default:!1},contentType:{type:String,required:!1,default:"html"}},o=function(t,e){return e.onComplete=function(){t.$emit("onComplete")},e.preStringTyped=function(){t.$emit("preStringTyped")},e.onStringTyped=function(){t.$emit("onStringTyped")},e.onLastStringBackspaced=function(){t.$emit("onLastStringBackspaced")},e.onTypingPaused=function(){t.$emit("onTypingPaused")},e.onTypingResumed=function(){t.$emit("onTypingResumed")},e.onReset=function(){t.$emit("onReset")},e.onStop=function(){t.$emit("onStop")},e.onStart=function(){t.$emit("onStart")},e.onDestroy=function(){t.$emit("onDestroy")},e}},function(t,n,r){"use strict";function o(t){t.component("vue-typed-js",c.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=o;var l=r(0),c=r.n(l);r.d(n,"VueTypedJs",(function(){return c.a}));var d={version:"0.1.2",install:o};n.default=d;var h=null;"undefined"!=typeof window?h=window.Vue:void 0!==e&&(h=e.Vue),h&&h.use(d)},function(t,e,n){(function(t){var n,r,o,l,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};l=function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),l=n(3),c=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),o.initializer.load(this,n,e),this.begin()}return r(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=l.htmlParser.typeHtmlChars(t,e,n);var r=0,c=t.substr(e);if("^"===c.charAt(0)&&/^\^\d+/.test(c)){var d=1;d+=(c=/\d+/.exec(c)[0]).length,r=parseInt(c),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+d),n.toggleBlinking(!0)}if("`"===c.charAt(0)){for(;"`"!==t.substr(e+o).charAt(0)&&(o++,!(e+o>t.length)););var h=t.substring(0,e),f=t.substring(h.length+1,e+o),m=t.substring(e+o+1);t=h+f+m,o--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e===t.length?n.doneTyping(t,e):n.keepTyping(t,e,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var r=t.substr(0,e);this.replaceText(r),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=l.htmlParser.backSpaceHtmlChars(t,e,n);var r=t.substr(0,e);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),r)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){if(this.cursor&&!this.pause.status&&this.cursorBlinking!==t){this.cursorBlinking=t;var e=t?"infinite":0;this.cursor.style.animationIterationCount=e}}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=c,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),d=(r=c)&&r.__esModule?r:{default:r},h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return l(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=o({},d.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(s){return s.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var r=Array.prototype.slice.apply(t.stringsElement.children),l=r.length;if(l)for(var i=0;i<l;i+=1){var c=r[i];t.strings.push(c.innerHTML.trim())}}for(var i in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[i]=i;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&t.showCursor&&t.fadeOut){var e=document.createElement("style");e.type="text/css";var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=h;var f=new h;e.initializer=f},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if("<"===r||"&"===r){var o;for(o="<"===r?">":";";t.substr(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var r=t.substr(e).charAt(0);if(">"===r||";"===r){var o;for(o=">"===r?"<":"&";t.substr(e-1).charAt(0)!==o&&!(--e<0););e--}return e}}]),t}();e.default=r;var o=new r;e.htmlParser=o}])},"object"===c(e)&&"object"===c(t)?t.exports=l():(r=[],void 0!==(o="function"==typeof(n=l)?n.apply(e,r):n)&&(t.exports=o))}).call(e,n(5)(t))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n.n(r),l=n(1);e.default={name:"vue-typed-js",props:l.a,data:function(){return{typedObj:null}},methods:{throwError:function(t){throw new TypeError(t)},initTypedJS:function(){var t=this.$refs.typedElement.querySelector(".typing");if(this.$slots.default.length>1)this.throwError("Just one child element allowed inside <"+this.$options.name+"> component.");else if(1===this.$slots.default.length){var e=this.$props;e=n.i(l.b)(this,e),this.typedObj=new o.a(t,e)}}},mounted:function(){this.initTypedJS()}}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){},function(t,e){t.exports=function(t,e,n,r){var o,l=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,l=t.default);var d="function"==typeof l?l.options:l;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),n&&(d._scopeId=n),r){var h=d.computed||(d.computed={});Object.keys(r).forEach((function(t){var e=r[t];h[t]=function(){return e}}))}return{esModule:o,exports:l,options:d}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"typedElement",staticClass:"typed-element"},[t._t("default")],2)},staticRenderFns:[]}}])}).call(this,n(55))},448:function(t,e,n){"use strict";(function(t){var r=n(7),o=(n(24),n(47),n(46),n(495)),l=n(504),c=n(449),d=n(505),h=n(435);e.a={components:{HomeTyped:l.a,HomeCallToActionGranim:c.a,Tool:d.a,Button:h.a},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.app,t.params,!(r=t.payload)){e.next=5;break}return e.abrupt("return",{testimonials:r,services:r,whyUs:r});case 5:return e.next=7,n.$axios.$get(n.$urls.testimonials);case 7:return o=e.sent,e.next=10,n.$axios.$get(n.$urls.services);case 10:return l=e.sent,e.next=13,n.$axios.$get(n.$urls.whyUsHome);case 13:return c=e.sent,e.abrupt("return",{testimonials:o.data,services:l.data,whyUs:c.data});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{direction:"left"}},head:function(){return{title:o.a.title,meta:[{name:"description",content:o.a.description},{name:"title",content:o.a.title},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+"/"},{property:"og:title",content:o.a.title},{property:"og:description",content:o.a.description},{property:"og:image",content:t.env.BASE_URL+"/img/logo.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:"@improwised"},{property:"twitter:creator",content:"@improwised"},{property:"twitter:title",content:o.a.title},{property:"twitter:description",content:o.a.description},{property:"twitter:image",content:t.env.BASE_URL+"/img/logo.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+"/"}]}}}}).call(this,n(119))},449:function(t,e,n){"use strict";var r=n(453),o=n.n(r),l={name:"GranimElement",data:function(){return{GObj:Object}},mounted:function(){this.GObj=new o.a({element:this.$refs.granimCanvas,name:"basic-gradient",direction:"left-right",opacity:[1,1],states:{"default-state":{gradients:[["#4876BD","#5448BD"],["#8F48BD","#BD48B1"]],transitionSpeed:1e3}}})}},c=n(45),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"granimCanvas",attrs:{id:"granim-canvas"}})}),[],!1,null,null,null);e.a=component.exports},455:function(t,e,n){},495:function(t,e,n){"use strict";e.a={title:"Cloud Infrastructure, SAAS Application Development Company | Technology Consultancy",description:"Let us help you with cloud infrastructure and SAAS software development services to create revenue channels. Our technical support, IT Managed Services will let you focus on your strength while we are managing your software and IT assets."}},496:function(t,e,n){"use strict";var r=n(437),o=n.n(r);n.d(e,"default",(function(){return o.a}));n(497)},497:function(t,e,n){},498:function(t,e,n){"use strict";n(455)},504:function(t,e,n){"use strict";var r=n(2),o=n(496),l=n(435);r.a.use(o.default);var c={components:{Button:l.a}},d=n(45),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h6",{staticClass:"type--uppercase"},[t._v("We are Improwised Technologies.")]),t._v(" "),n("h1",{staticClass:"d-none"},[t._v("\n    We help you engineer great products. We help you build applications for\n    the cloud. We help you make the most of next-gen tech. We help you realize\n    your product ideas.\n  ")]),t._v(" "),n("div",{staticClass:"typed-headline"},[n("vue-typed-js",{attrs:{strings:["engineer great products.","build applications for the cloud.","make the most of next-gen tech.","realize your product ideas."],"type-speed":100,loop:!0,"show-cursor":!1}},[n("div",[n("span",{staticClass:"h1 inline-block"},[t._v("We help you")]),t._v(" "),n("span",{staticClass:"h1 inline-block typed-text typed-text--cursor color--primary typing"})])]),t._v(" "),n("p",{staticClass:"lead"},[t._v("Your remote technology team.")]),t._v(" "),n("Button",{attrs:{text:"Get in touch with us",redirect:"/contact"}})],1)])}),[],!1,null,null,null);e.a=component.exports},505:function(t,e,n){"use strict";var r={props:{image:{type:String,require:!0},name:{type:String,require:!0}}},o=(n(498),n(45)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3 col-md-2 col-xs-6 col-lg-2 col-6 tool"},[n("div",{staticClass:"boxed boxed--border text-center"},[n("img",{staticClass:"lazyload",attrs:{src:t.image,alt:t.name,title:t.name,loading:"lazy"}}),t._v(" "),n("h3",{staticClass:"h6 remove-height"},[t._v(t._s(t.name))])])])}),[],!1,null,"40025795",null);e.a=component.exports},518:function(t,e,n){"use strict";n.r(e);var r=n(448).a,o=n(45),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("section",{staticClass:"text-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("HomeTyped")],1)])]),t._v(" "),t.services&&t.services.length?n("section",{staticClass:"bg--secondary services space--xs",attrs:{id:"services"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.services,(function(e,r){return n("div",{key:r,staticClass:"col-md-6 col-sm-12"},[n("div",{staticClass:"feature feature-3 boxed boxed--lg boxed--border text-center"},[e.icon?n("i",{class:"icon icon--lg color--primary "+e.icon}):n("i",{class:"icon icon--lg color--primary icon-Optimization"}),t._v(" "),n("a",{attrs:{href:"/services/"+e.slug+"/"}},[n("h2",{staticClass:"h4"},[t._v(t._s(e.title))])]),t._v(" "),n("p",[t._v(t._s(e.short_description))])])])})),0)])]):t._e(),t._v(" "),t.whyUs&&t.whyUs.length?n("section",{staticClass:"features-style space--xs",attrs:{id:"whyUs"}},[n("div",{staticClass:"container"},[t._m(1),t._v(" "),t.whyUs&&t.whyUs.length?n("div",{staticClass:"row"},t._l(t.whyUs,(function(e,r){return n("div",{key:r,staticClass:"col-sm-6"},[n("div",{staticClass:"feature feature-5 boxed boxed--sm boxed--border"},[e.icon?n("i",{class:"icon "+e.icon+" icon--lg"}):n("i",{class:"icon icon-Gears icon--lg"}),t._v(" "),n("div",{staticClass:"feature__body"},[n("h2",{staticClass:"h5"},[t._v(t._s(e.title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(e.description)}})])])])})),0):t._e()])]):t._e(),t._v(" "),n("section",{staticClass:"bg--secondary text-center technologies space--xs",attrs:{id:"toolBox"}},[n("div",{staticClass:"container"},[t._m(2),t._v(" "),n("div",{staticClass:"row text-center justify-content-center"},[t._m(3),t._v(" "),n("Tool",{attrs:{image:"img/technologies/go.png",name:"Go"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/laravel.png",name:"Laravel"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/node.png",name:"Node Js"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/python.png",name:"Python"}}),t._v(" "),t._m(4),t._v(" "),n("Tool",{attrs:{image:"img/technologies/postgresql-icon.svg",name:"PostgreSQL"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/mariadb-icon.svg",name:"MariaDB"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/mysql-icon.svg",name:"MySQL"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/redis.png",name:"Redis"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/mongodb-icon.svg",name:"MongoDB"}}),t._v(" "),t._m(5),t._v(" "),n("Tool",{attrs:{image:"img/technologies/linux.png",name:"Linux"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/docker.png",name:"Docker"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/kubernetes.svg",name:"Kubernetes"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/helm.png",name:"Helm"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/terraform.svg",name:"Terraform"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/nginx.png",name:"Nginx"}}),t._v(" "),t._m(6),t._v(" "),n("Tool",{attrs:{image:"img/technologies/amazon-web-services-icon.svg",name:"Amazon Web Services"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/google_cloud_platform.png",name:"Google Cloud Platform"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/digital_ocean.png",name:"DigitalOcean"}}),t._v(" "),t._m(7),t._v(" "),n("Tool",{attrs:{image:"img/technologies/js.png",name:"JavaScript"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/vuejs.png",name:"Vue.js"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/react.png",name:"React"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/angular.png",name:"Angular.js"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/bootstrap.png",name:"Bootstrap"}}),t._v(" "),t._m(8),t._v(" "),n("Tool",{attrs:{image:"img/technologies/github.png",name:"Github"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/gitlab.png",name:"GitLab"}}),t._v(" "),n("Tool",{attrs:{image:"img/technologies/circleci-icon.svg",name:"Circle ci"}})],1)])]),t._v(" "),t.testimonials&&t.testimonials.length?n("section",{staticClass:"space--sm text-center services"},[n("div",{staticClass:"container"},[t._m(9),t._v(" "),n("div",{staticClass:"row"},t._l(t.testimonials,(function(e,r){return n("div",{key:r,staticClass:"col-lg-4 col-md-6 mb-2"},[n("div",{staticClass:"testimonial testimonial-home boxed boxed--sm boxed--border"},[n("div",{staticClass:"verticle-middle"},[n("div",{staticClass:"testimonial-text contentbox"},[t._v("\n                “"+t._s(e.quote)+"”\n              ")]),t._v(" "),n("div",{staticClass:"testimonial-detail clearfix"},[n("h2",{staticClass:"testimonial-name h4"},[t._v(t._s(e.author))]),t._v(" "),n("span",[t._v(t._s(e.author_designation))])])])])])})),0)])]):t._e(),t._v(" "),n("section",{staticClass:"space--xs imagebg",attrs:{"data-gradient-bg":"#4876BD,#5448BD,#8F48BD,#BD48B1"}},[n("HomeCallToActionGranim"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(10),t._v(" "),n("div",{staticClass:"col-sm-3 text-right text-center-xs"},[n("Button",{attrs:{text:"Contact Us",redirect:"/contact"}})],1)])])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-5 text-center"},[n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0"},[t._v("Our Services")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-5 text-center"},[n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0"},[t._v("Why Us")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0"},[t._v("Our Toolbox")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0 h3"},[n("strong",[t._v("Backend")])]),t._v(" "),n("div",{staticClass:"dlab-separator-outer"},[n("div",{staticClass:"dlab-separator style-liner"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0 h3"},[n("strong",[t._v("Databases")])]),t._v(" "),n("div",{staticClass:"dlab-separator-outer"},[n("div",{staticClass:"dlab-separator style-liner"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0 h3"},[n("strong",[t._v("Infrastructure")])]),t._v(" "),n("div",{staticClass:"dlab-separator-outer"},[n("div",{staticClass:"dlab-separator style-liner"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0 h3"},[n("strong",[t._v("Cloud")])]),t._v(" "),n("div",{staticClass:"dlab-separator-outer"},[n("div",{staticClass:"dlab-separator style-liner"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0 h3"},[n("strong",[t._v("Frontend")])]),t._v(" "),n("div",{staticClass:"dlab-separator-outer"},[n("div",{staticClass:"dlab-separator style-liner"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0 h3"},[n("strong",[t._v("Other")])]),t._v(" "),n("div",{staticClass:"dlab-separator-outer"},[n("div",{staticClass:"dlab-separator style-liner"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mb-5"},[n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0"},[t._v("Testimonials")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-9 d-flex align-items-center"},[n("h2",{staticClass:"lead m-0"},[t._v("\n            We will do our best to answer you within 24 hours or less.\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=0085f2d.js.map