(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{432:function(t,e,n){"use strict";var r=n(12);n(91),n(27),n(92),n(10),n(20),n(38),n(119),n(30),n(26),n(24),n(21),n(35),n(36);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{title:{type:String,default:null}},computed:{crumbs:function(){var t=this,e=this.$route.fullPath,n=e.startsWith("/")?e.substring(1).split("/"):e.split("/"),c=[],path="";return n.forEach((function(param,e){path="".concat(path,"/").concat(param);var n=t.$router.match(path);null!==n.name&&c.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({title:t.$titlecase(param)},n))})),c}}},l=c,m=n(45),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"breadcrumbs"},[n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t._l(t.crumbs,(function(e,r){return n("li",{key:r},[r<t.crumbs.length-1?n("NuxtLink",{attrs:{to:e.path}},[t._v(t._s(t.$route.fullPath===e.path&&null!==t.title?t.title:e.title))]):n("span",[t._v(t._s(t.$route.fullPath===e.path&&null!==t.title?t.title:e.title))])],1)}))],2)}),[],!1,null,null,null);e.a=component.exports},435:function(t,e,n){"use strict";(function(t){var r=n(7),o=(n(46),n(432));e.a={components:{Breadcrumb:o.a},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,t.params,e.next=3,n.$axios.$get(n.$urls.aboutUs);case 3:return r=e.sent,e.next=6,n.$axios.$get(n.$urls.whyus);case 6:return o=e.sent,e.next=9,n.$axios.$get(n.$urls.meetTeam);case 9:return c=e.sent,e.abrupt("return",{aboutUs:r.data,whyUs:o.data,meetTeam:c.data});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.aboutUs.seo_title,meta:[{name:"title",content:this.aboutUs.seo_title},{name:"description",content:this.aboutUs.seo_description},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path},{property:"og:title",content:this.aboutUs.seo_title},{property:"og:description",content:this.aboutUs.seo_description},{property:"og:image",content:t.env.BASE_URL+"/img/logo.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:"@improwised"},{property:"twitter:creator",content:"@improwised"},{property:"twitter:title",content:this.aboutUs.seo_title},{property:"twitter:description",content:this.aboutUs.seo_description},{property:"twitter:image",content:t.env.BASE_URL+"/img/logo.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path}]}}}}).call(this,n(148))},498:function(t,e,n){"use strict";n.r(e);var r=n(435).a,o=n(45),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container about-us"},[n("section",{staticClass:"text-center heroUnit"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-10 col-md-8"},[n("h1",{},[t._v("Our Story")]),t._v(" "),n("Breadcrumb",{staticClass:"m-0"})],1)])])]),t._v(" "),t.aboutUs?n("section",{staticClass:"text-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-left lead",domProps:{innerHTML:t._s(t.aboutUs.content)}})])])]):t._e(),t._v(" "),t.meetTeam&&t.meetTeam.length?n("section",{staticClass:"bg--secondary"},[n("div",{staticClass:"d-flex flex-wrap align-items-center justify-content-center"},[t._m(0),t._v(" "),t._l(t.meetTeam,(function(e,r){return n("div",{key:r,staticClass:"m-1"},[n("div",{staticClass:"testimonial testimonial-2"},[n("div",{staticClass:"testimonial__body boxed boxed--border bg--secondary"},[e.image?n("nuxt-img",{attrs:{src:t.$urls.assets(e.image.id),alt:e.name,title:e.name,format:"jpeg",loading:"lazy"}}):t._e(),t._v(" "),n("div",{staticClass:"testimonial__image m-0 text-center"},[n("h5",[t._v(t._s(e.name))]),t._v(" "),e.designation?n("span",[t._v(t._s(e.designation))]):t._e(),t._v(" "),n("br"),t._v(" "),e.linkedin?n("a",{staticClass:"teamicon",attrs:{href:e.linkedin,title:e.name,target:"_blank"}},[n("i",{staticClass:"socicon socicon-linkedin icon icon--small pt-2"})]):t._e()])],1)])])}))],2)]):t._e(),t._v(" "),t.whyUs&&t.whyUs.length?n("section",{staticClass:"whyUS space--xs"},[n("div",{staticClass:"container"},[t._m(1),t._v(" "),n("div",{staticClass:"row"},t._l(t.whyUs,(function(e,r){return n("div",{key:r,staticClass:"col-sm-6"},[n("div",{staticClass:"feature boxed boxed--lg boxed--border"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("hr"),t._v(" "),n("div",{domProps:{innerHTML:t._s(e.content)}})])])})),0)])]):t._e(),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-12 mb-5 text-center"},[n("h2",{staticClass:"m-0"},[t._v("Meet the Team")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row text-center mb-5"},[n("div",{staticClass:"col-sm-12"},[n("h2",{staticClass:"mb-0"},[t._v("Why us?")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[n("div",{staticClass:"cta"},[n("h2",[t._v("Want to know more about us?")]),t._v(" "),n("a",{staticClass:"btn btn--primary type--uppercase",attrs:{href:"/contact",title:"contact"}},[n("span",{staticClass:"btn__text"},[t._v(" Get in Touch ")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=579d4e0.js.map