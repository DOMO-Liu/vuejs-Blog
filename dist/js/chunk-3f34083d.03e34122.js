(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f34083d"],{"7a9d":function(t,e,i){},e369:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog-container creat"},[i("div",{staticClass:"blog-pages"},[i("h2",{staticClass:"text-center"},[t._v(t._s(t.articleId?"编辑文章":"创作文章"))]),i("hr"),i("div",{attrs:{"data-validator-form":""}},[i("div",{staticClass:"form-group creat-header"},[i("div",{directives:[{name:"dropdown",rawName:"v-dropdown"}],staticClass:"creat-sort form-control"},[t._v(" "+t._s(t.sortId)+" "),i("div",{staticClass:"caret-a"}),i("div",{staticClass:"dropdown-menu creat-menu"},t._l(t.creat,(function(e){return i("div",{key:e.id,staticClass:"creat-sort-item",on:{click:function(i){t.sortId=e}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("input",{directives:[{name:"validator",rawName:"v-validator:blur.required",value:{title:"标题"},expression:"{ title: '标题' }",arg:"blur",modifiers:{required:!0}},{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],staticClass:"form-control create-title",attrs:{type:"text",placeholder:"请填写标题"},domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value.trim())},t.saveTitle],blur:function(e){return t.$forceUpdate()}}})]),t._m(0),i("br"),i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn-primary",attrs:{type:"submit"},on:{click:t.post}},[t._v("发 布")])])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("textarea",{attrs:{id:"editor"}})])}],s=(i("498a"),i("ebfb")),o=i.n(s),n=i("1487"),l=i.n(n),c=i("e8ec");window.hljs=l.a;var d={name:"Create",data:function(){return{title:"",content:"",wordcount:0,articleId:"",creat:["日记本","分享境","闲言语","创作集","事件薄"],sortId:"日记本"}},beforeRouteEnter:function(t,e,i){i((function(t){t.setArticleId(t.$route.params.articleId)}))},beforeRouteLeave:function(t,e,i){this.clearData(),i()},watch:{$route:function(t){this.clearData(),this.setArticleId(t.params.articleId)}},mounted:function(){var t=this,e=new o.a({element:document.querySelector("#editor"),placeholder:"请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。",spellChecker:!1,autoDownloadFontAwesome:!1,autosave:{enabled:!0,uniqueId:"DOMO-Blog"},renderingConfig:{codeSyntaxHighlighting:!0}});e.codemirror.on("change",(function(){t.content=e.value(),t.wordcount=e.value().length})),this.simplemde=e},methods:{saveTitle:function(){c["a"].setItem("smde_title",this.title)},fillContent:function(t){var e=this.simplemde,i=c["a"].getItem("smde_title");if(void 0!==t){var a=this.$store.getters.getArticleById(t);if(a){var r=a.title,s=a.content;this.title=i||r,this.content=e.value()||s,e.value(this.content)}}else this.title=i,this.content=e.value()},post:function(){var t=this.title,e=this.content,i=this.wordcount,a=this.sortId;if(""!==t&&""!==e.trim()){var r={title:t,content:e,wordcount:i,sortId:a};this.$store.dispatch("post",{article:r,articleId:this.articleId}),this.clearData()}},clearData:function(){this.title="",c["a"].removeItem("smde_title"),this.simplemde.value(""),this.simplemde.clearAutosavedValue()},setArticleId:function(t){var e=c["a"].getItem("articleId");void 0!==t&&t!==e&&this.clearData(),this.articleId=t,this.fillContent(t),c["a"].setItem("articleId",t)}}},u=d,m=(i("e4bc"),i("2877")),v=Object(m["a"])(u,a,r,!1,null,"d1defd38",null);e["default"]=v.exports},e4bc:function(t,e,i){"use strict";var a=i("7a9d"),r=i.n(a);r.a}}]);
//# sourceMappingURL=chunk-3f34083d.03e34122.js.map