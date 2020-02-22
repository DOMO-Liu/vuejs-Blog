(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ec70988"],{"935e":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-v"},[e("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(a){t.msgShow=a}}}),e("div",{staticClass:"panel panel-default"},[t._m(0),e("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(a){a.target.composing||(t.username=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("确认密码")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(a){a.target.composing||(t.cpassword=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("图片验证码")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(a){a.target.composing||(t.captcha=a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}})]),e("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[e("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),e("span",{on:{click:t.register}},[t._m(1)])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[t._v("请注册")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v("注册 ")])}],i=(e("b0c0"),e("4160"),e("a15b"),e("d81d"),e("159b"),e("2909")),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",e="",s=[];try{s=Object(i["a"])(Array(t)).map((function(){return a[Math.floor(Math.random()*a.length)]}))}catch(r){console.log("错误")}return s.forEach((function(t){e+='<span class="flex1 hcenter">'.concat(t,"</span>")})),s=s.join(""),{tpl:e,captcha:s}},n={name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=o(),a=t.tpl,e=t.captcha;this.captchaTpl=a,this.localCaptcha=e},register:function(t){var a=this;this.$nextTick((function(){var e="submit"===t.target.type?t.target:t.target.parentElement;e.canSubmit&&a.submit()}))},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/".concat(this.username,".png")},a=this.$store.state.user;a&&a.name===t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=e,this.msgShow=!1,this.$nextTick((function(){a.msgShow=!0}))}}},c=n,l=e("2877"),p=Object(l["a"])(c,s,r,!1,null,null,null);a["default"]=p.exports},a15b:function(t,a,e){"use strict";var s=e("23e7"),r=e("44ad"),i=e("fc6a"),o=e("a640"),n=[].join,c=r!=Object,l=o("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(t){return n.call(i(this),void 0===t?",":t)}})}}]);
//# sourceMappingURL=chunk-0ec70988.e6b461ab.js.map