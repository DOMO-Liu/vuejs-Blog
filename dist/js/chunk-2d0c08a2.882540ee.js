(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c08a2"],{"41e4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"blog-sort content-left blog-container"},[e("div",{staticClass:"categories-header"},[e("h1",{staticClass:"categories-header-title"},[t._v(" "+t._s(t.sortId)+" ")])]),e("ul",t._l(t.articles,(function(s){return e("li",{key:s.id,staticClass:"blog-list-title"},[e("div",[e("div",{staticClass:"point"}),e("span",{staticClass:"meta"},[e("span",{staticClass:"blog-title-timeago"},[t._v(t._s(t._f("moment")(s.date,"MM"))+"-"+t._s(t._f("moment")(s.date,"D")))])]),e("router-link",{staticClass:"blog-title-title",attrs:{to:"/vuejs-Blog/dist/articles/"+s.articleId+"/content"}},[t._v(" "+t._s(s.title)+" ")])],1)])})),0)])},i=[],l={data:function(){return{articles:[],sortId:""}},beforeRouteEnter:function(t,s,e){e((function(s){s.setDataByParams(t.params)}))},methods:{setDataByParams:function(t){this.sortId=t.sortId,this.articles=this.$store.getters.getArticlesBySort(t.sortId)}}},o=l,r=e("2877"),n=Object(r["a"])(o,a,i,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0c08a2.882540ee.js.map