(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SearchResults-vue"],{e9a0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},e._l(e.results,function(t,n){return r("v-flex",{key:n,attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[r("material-results-card",e._b({},"material-results-card",t,!1))],1)}),1)],1)},a=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62");r("a18c");function o(e){for(var t=1;t<arguments.length;t++)if(t%2){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Object(s["a"])(e,t,r[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}var l={mounted:function(){console.log(this.$route.query);var e=this.$route.query;e.key&&this.searchByKey({key:e.key})},data:function(){return{}},computed:o({},Object(c["e"])("search",["results"])),methods:o({},Object(c["b"])("search",["searchByKey"]),{complete:function(e){this.list[e]=!this.list[e]}})},u=l,i=r("2877"),f=r("6544"),y=r.n(f),b=r("a523"),h=r("0e8f"),p=r("a722"),d=Object(i["a"])(u,n,a,!1,null,null,null);t["default"]=d.exports;y()(d,{VContainer:b["a"],VFlex:h["a"],VLayout:p["a"]})}}]);