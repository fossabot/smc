(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["root-Home-vue"],{"2db4":function(t,s,e){"use strict";e("ca71");var i=e("a9ad"),a=e("f2e7"),o=e("fe6c"),n=e("58df"),r=e("d9bd");s["a"]=Object(n["a"])(i["a"],a["a"],Object(o["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(r["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"5d8a":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{attrs:{fluid:"","grid-list-md":"","fill-height":""}},[e("v-layout",{attrs:{wrap:"","align-space-around":"","justify-center":"",row:"","fill-height":""}},[t.$vuetify.breakpoint.smAndDown?e("v-flex",[e("v-card",[e("base-searchbar",{staticClass:"pa-3"})],1)],1):t._e(),e("v-flex",{attrs:{xs12:""}},[e("material-card",{attrs:{color:"white",dark:!1}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md6:"",sm12:""}},[e("h2",{staticClass:"title font-weight-light"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("Recently uploaded"))+"\n\t\t\t\t\t\t")]),e("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-md":""}},[e("v-layout",{attrs:{wrap:""}},t._l(t.results,function(s,i){return e("v-flex",{key:i,attrs:{sm6:"",xs12:"",md12:"",lg6:""}},[e("material-results-card",t._b({attrs:{title:s.name,subTitle:s.name_trans,index:i}},"material-results-card",s,!1))],1)}),1)],1)],1),e("v-flex",{attrs:{md6:"",sm12:""}},[e("h2",{staticClass:"title font-weight-light mb-3"},[t._v("\n\t\t\t\t\t\t\tNotifications Style\n\t\t\t\t\t\t")]),e("material-notification",{staticClass:"mb-3",attrs:{color:"info"}},[t._v("This is a plain notification")]),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:""}},[t._v("This is a notification with close\n\t\t\t\t\t\t\tbutton.")]),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:"",icon:"mdi-bell-plus"}},[t._v("This is a notification with close button and\n\t\t\t\t\t\t\ticon.")]),e("material-notification",{staticClass:"mb-3",attrs:{color:"info",dismissible:"",icon:"mdi-bell-plus"}},[t._v("\n\t\t\t\t\t\t\tThis is a notification with close button and icon and have many\n\t\t\t\t\t\t\tlines. You can see that the icon and the close button are always\n\t\t\t\t\t\t\tvertically aligned. This is a beautiful notification. So you\n\t\t\t\t\t\t\tdon't have to worry about the style.\n\t\t\t\t\t\t")])],1)],1),e("div",{staticClass:"text-xs-center"},[e("h2",{staticClass:"title font-weight-light mb-2"},[t._v("Notification Places")]),e("span",{staticClass:"subheading font-weight-light grey--text"},[t._v("Click to view notifications")])]),e("v-container",{attrs:{"grid-list-lg":""}},[e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(s){return t.snack("top","left")}}},[t._v("Top Left")])],1),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(s){return t.snack("top")}}},[t._v("Top Center")])],1)],1),e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(s){return t.snack("top","right")}}},[t._v("Top Right")])],1),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(s){return t.snack("bottom","left")}}},[t._v("Bottom Left")])],1)],1),e("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(s){return t.snack("bottom")}}},[t._v("Bottom Center")])],1),e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-btn",{attrs:{block:"",color:"success"},on:{click:function(s){return t.snack("bottom","right")}}},[t._v("Bottom Right")])],1)],1)],1),e("v-snackbar",{attrs:{color:t.color,bottom:t.bottom,top:t.top,left:t.left,right:t.right,dark:""},model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[e("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("mdi-bell-plus")]),e("div",[t._v("\n\t\t\t\t\t\tWelcome to\n\t\t\t\t\t\t"),e("b",[t._v("Vue Material Dashboard")]),t._v(" - a beautiful freebie for every web\n\t\t\t\t\t\tdeveloper.\n\t\t\t\t\t")]),e("v-icon",{attrs:{size:"16"},on:{click:function(s){t.snackbar=!1}}},[t._v("mdi-close-circle")])],1)],1)],1)],1)],1)},a=[],o=(e("8e6e"),e("ac6a"),e("456d"),e("7514"),e("bd86")),n=e("0631"),r=e.n(n),c=e("2f62");function l(t){for(var s=1;s<arguments.length;s++)if(s%2){var e=null!=arguments[s]?arguments[s]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(s){Object(o["a"])(t,s,e[s])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[s]));return t}var u={beforeRouteLeave:function(t,s,e){this.showMenu(!1),e()},data:function(){return{color:null,colors:["purple","info","success","warning","error"],top:!0,bottom:!1,left:!1,right:!1,snackbar:!1,results:[]}},created:function(){this.getRecent()},methods:l({},Object(c["d"])("rightClickMenu",["showMenu"]),{snack:function(){this.top=!1,this.bottom=!1,this.left=!1,this.right=!1;for(var t=arguments.length,s=new Array(t),e=0;e<t;e++)s[e]=arguments[e];for(var i=0,a=s;i<a.length;i++){var o=a[i];this[o]=!0}this.color=this.colors[Math.floor(Math.random()*this.colors.length)],this.snackbar=!0},getRecent:function(){var t=this,s=new r.a.Query("ShimoBed");s.descending("updatedAt"),s.limit(20),s.find().then(function(s){t.results=s.map(function(t){return t.toJSON()}),console.log(s)})}})},h=u,f=e("2877"),v=e("6544"),b=e.n(v),m=e("8336"),d=e("b0af"),p=e("a523"),k=e("0e8f"),g=e("132d"),w=e("a722"),y=e("2db4"),_=Object(f["a"])(h,i,a,!1,null,null,null);s["default"]=_.exports;b()(_,{VBtn:m["a"],VCard:d["a"],VContainer:p["a"],VFlex:k["a"],VIcon:g["a"],VLayout:w["a"],VSnackbar:y["a"]})},ca71:function(t,s,e){}}]);