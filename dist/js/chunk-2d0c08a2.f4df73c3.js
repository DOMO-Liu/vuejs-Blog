(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c08a2"],{"41e4":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-container categories-header "},[e("div",{staticClass:"content-left"},[e("h1",{staticClass:"article-header"},[t._v(" "+t._s(t.sortId)+" ")]),e("ul",t._l(t.articles,(function(s){return e("li",{key:s.id,staticClass:"blog-list-title"},[e("div",[e("div",{staticClass:"point"}),e("span",{staticClass:"meta"},[e("span",{staticClass:"blog-title-timeago"},[t._v(t._s(t._f("moment")(s.date,"MM"))+"-"+t._s(t._f("moment")(s.date,"DD")))])]),e("router-link",{staticClass:"blog-title-title",attrs:{to:"/vuejs-Blog/dist/articles/"+s.articleId+"/content"}},[t._v(" "+t._s(s.title)+" ")])],1)])})),0)])])},i=[],n={data:function(){return{articles:[],sortId:""}},beforeRouteEnter:function(t,s,e){e((function(s){s.setDataByParams(t.params)}))},methods:{setDataByParams:function(t){this.sortId=t.sortId,this.articles=this.$store.getters.getArticlesBySort(t.sortId)}}},l=n,r=e("2877"),o=Object(r["a"])(l,a,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0c08a2.f4df73c3.js.map