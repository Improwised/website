(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{433:function(t,e,o){"use strict";var n={props:{blogList:{type:Array,required:!0}}},l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},t._l(t.blogList,(function(e,n){return o("div",{key:n,staticClass:"col-lg-4 col-md-6 mb-1"},[o("article",{staticClass:"feature feature-3 blog-feature boxed boxed--border m-1"},[o("div",{staticClass:"feature__body"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",{staticClass:"pb-5",domProps:{innerHTML:t._s(e.description)}}),t._v(" "),o("span",{staticClass:"font-14 blog_sub_details_left"},[t._v(t._s(t._f("formatDateTime")(e.date_created)))]),t._v(" "),e.content&&e.content.length?o("a",{staticClass:"float-right blog_sub_details_right",attrs:{href:"/blog/"+e.slug}},[t._v("\n          Read More\n        ")]):t._e()])])])})),0)}),[],!1,null,null,null);e.a=component.exports},443:function(t,e,o){"use strict";(function(t){var n=o(7),l=(o(26),o(56),o(46),o(433));e.a={components:{Blog:l.a},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},layout:"theme",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,title,l,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.app,n=t.params,title=n.slug,e.next=4,o.$axios.$get(o.$urls.blog(title));case 4:return(l=e.sent).data[0].content=o.$unescapeHTML(l.data[0].content),l.data[0].content=o.$dImage(l.data[0].content),e.next=9,o.$gist(l.data[0].content);case 9:return l.data[0].content=e.sent,e.next=12,o.$axios.$get(o.$urls.blogothers(title));case 12:return r=e.sent,e.abrupt("return",{blog:l.data[0],blogList:r.data});case 14:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrlPath:window.location.href}},head:function(){return{title:this.blog&&this.blog.seo_title||"",meta:[{name:"description",content:this.blog&&this.blog.seo_description||""},{name:"title",content:this.blog&&this.blog.seo_title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:this.blog&&this.blog.seo_title||""},{property:"og:description",content:this.blog&&this.blog.seo_description||""},{property:"og:image",content:t.env.BASE_URL+"/img/logo.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:"@improwised"},{property:"twitter:creator",content:"@improwised"},{property:"twitter:title",content:this.blog&&this.blog.seo_title||""},{property:"twitter:description",content:this.blog&&this.blog.seo_description||""},{property:"twitter:image",content:t.env.BASE_URL+"/img/logo.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css"}]}},methods:{strippedHtml:function(t){return t.replace(/(<([^>]+)>)/gi,"")}}}}).call(this,o(119))},506:function(t,e,o){"use strict";o.r(e);var n=o(443).a,l=o(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-container blog-style"},[o("section",{staticClass:"space--xs"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-12"},[t.blog?o("article",[o("div",{staticClass:"article__title text-left"},[t.blog.title?o("h1",{staticClass:"h2"},[t._v(t._s(t.blog.title))]):t._e(),t._v(" "),o("div",{staticClass:"show-featured author_block"},[o("div",{staticClass:"post-desc w-100"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6"},[t._v("\n                      Published Date "+t._s(t._f("formatDateTime")(t.blog.date_updated))+"\n                    ")])])])])]),t._v(" "),o("div",{staticClass:"blogdesc"},[t.blog.description?o("div",[o("p",{domProps:{innerHTML:t._s(t.blog.description)}})]):t._e(),t._v(" "),t.blog.content?o("div",{domProps:{innerHTML:t._s(t.blog.content)}}):t._e()]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"article__share mt-0"},[o("h4",[o("span",{staticClass:"text-muted font-20"},t._l(t.blog.tags,(function(e,n){return o("span",{key:n},[o("span",{staticClass:"badge badge-secondary"},[t._v("\n                      "+t._s(e.tags_id.name))]),t._v(" "),n+1<t.blog.tags.length?o("span"):t._e()])})),0)])]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"article__share mt-0"},[o("ul",{staticClass:"social-list list-inline list--hover blog_social"},[o("li",{staticClass:"list-inline-item mr-0"},[o("ShareNetwork",{attrs:{network:"email",title:""+t.blog.title,url:""+t.baseUrlPath,description:""+t.strippedHtml(t.blog.description)}},[o("i",{staticClass:"socicon socicon-google icon icon--xs"})])],1),t._v(" "),o("li",{staticClass:"list-inline-item mr-0"},[o("ShareNetwork",{attrs:{network:"linkedin",title:""+t.blog.title,url:""+t.baseUrlPath,description:""+t.strippedHtml(t.blog.description)}},[o("i",{staticClass:"socicon socicon-linkedin icon icon--xs"})])],1),t._v(" "),o("li",{staticClass:"list-inline-item mr-0"},[o("ShareNetwork",{attrs:{network:"twitter",title:""+t.blog.title,url:""+t.baseUrlPath}},[o("i",{staticClass:"socicon socicon-twitter icon icon--xs"})])],1),t._v(" "),o("li",{staticClass:"list-inline-item mr-0"},[o("ShareNetwork",{attrs:{network:"facebook",title:""+t.blog.title,description:""+t.strippedHtml(t.blog.description),url:""+t.baseUrlPath,quote:""+t.blog.title,hashtags:"blog"}},[o("i",{staticClass:"socicon socicon-facebook icon icon--xs"})])],1),t._v(" "),o("li",{staticClass:"list-inline-item mr-0"},[o("ShareNetwork",{attrs:{network:"whatsapp",url:""+t.baseUrlPath,title:""+t.blog.title,description:""+t.strippedHtml(t.blog.description)}},[o("i",{staticClass:"socicon socicon-whatsapp icon icon--xs"})])],1)])])]):o("div",[o("h3",[t._v("No Records Found")])])])])])]),t._v(" "),t.blogList&&t.blogList.length?o("section",{staticClass:"space--sm services boxed--border bg--secondary"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("Blog",{attrs:{"blog-list":t.blogList}})],1)]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row text-center mb-3"},[o("div",{staticClass:"col-sm-12"},[o("h2",[t._v("Recent Blogs")])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=e0015a9.js.map