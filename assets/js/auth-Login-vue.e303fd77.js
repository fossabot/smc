(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth-Login-vue"],{5326:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-5 col-md-7"},[a("div",{staticClass:"card bg-secondary shadow border-0"},[a("div",{staticClass:"card-header bg-transparent pb-5"},[a("div",{staticClass:"text-muted text-center mt-2 mb-3 font-weight-bolder"},[a("small",[t._v(t._s(t.$t("Sign in with")))])]),a("div",{staticClass:"btn-wrapper text-center"},[a("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[a("span",{staticClass:"btn-inner--icon"},[a("img",{attrs:{src:t.$baseUrl+"img/icons/common/github.svg"}})]),a("span",{staticClass:"btn-inner--text"},[t._v("Github")])]),a("a",{staticClass:"btn btn-neutral btn-icon",attrs:{href:"#"}},[a("span",{staticClass:"btn-inner--icon"},[a("img",{attrs:{src:t.$baseUrl+"img/icons/common/google.svg"}})]),a("span",{staticClass:"btn-inner--text"},[t._v("Google")])])])]),a("div",{staticClass:"card-body px-lg-5 py-lg-5"},[a("div",{staticClass:"text-center text-muted mb-4 font-weight-bolder"},[a("small",[t._v(t._s(t.$t("Or sign up with credentials")))])]),a("form",{attrs:{role:"form"}},[a("base-input",{staticClass:"input-group-alternative mb-3",attrs:{placeholder:t.$t("Username")+t.$t("or")+t.$t("Email"),"addon-left-icon":"ni ni-single-02"},model:{value:t.model.username,callback:function(s){t.$set(t.model,"username",s)},expression:"model.username"}}),a("base-input",{staticClass:"input-group-alternative",attrs:{placeholder:t.$t("Password"),type:"password","addon-left-icon":"ni ni-lock-circle-open"},model:{value:t.model.password,callback:function(s){t.$set(t.model,"password",s)},expression:"model.password"}}),a("base-checkbox",{staticClass:"custom-control-alternative"},[a("span",{staticClass:"text-muted font-weight-bolder"},[t._v(t._s(t.$t("Remember me")))])]),a("div",{staticClass:"text-center"},[a("base-button",{staticClass:"my-4",attrs:{type:"primary"},on:{click:function(s){return t.login()}}},[t._v(t._s(t.$t("Sign in")))])],1)],1)])]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-6"},[a("a",{staticClass:"text-light font-weight-bolder",attrs:{href:"#"}},[a("small",[t._v(t._s(t.$t("Forgot password?")))])])]),a("div",{staticClass:"col-6 text-right font-weight-bolder"},[a("router-link",{staticClass:"text-light",attrs:{to:"/register"}},[a("small",[t._v(t._s(t.$t("Create new account")))])])],1)])])])},n=[],i=a("fa20"),l=(a("2f62"),a("5118"),{name:"login",data:function(){return{model:{username:"",password:""}}},methods:{login:function(){Object(i["a"])(this)}}}),r=l,o=a("2877"),c=Object(o["a"])(r,e,n,!1,null,null,null);s["default"]=c.exports}}]);