(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Dashboard-vue"],{"0832":function(t,e,i){},"3a2f":function(t,e,i){"use strict";i("60e8");var s=i("b64a"),n=i("163b"),a=i("c69d"),r=i("30d4"),o=i("b8d7"),l=i("98a1"),c=i("80d2"),h=i("d9bd");function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-tooltip",mixins:[s["a"],n["a"],a["a"],r["a"],o["a"],l["a"]],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,n=this.isAttached?e.offsetLeft:e.left,a=0;return this.top||this.bottom||s?a=n+e.width/2-i.width/2:(this.left||this.right)&&(a=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),this.calcXOverflow(a,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=this.isAttached?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=s+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=s+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),this.calcYOverflow(n+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(c["c"])(this.maxWidth),minWidth:Object(c["c"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===Object(c["l"])(this,"activator",!0)&&Object(h["a"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if("scoped"===Object(c["l"])(this,"activator")){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,i=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},u(e,this.contentClass,!0),u(e,"menuable__content__active",this.isActive),u(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[i]),this.genActivator()])}}},"58dbb":function(t,e,i){},"60e8":function(t,e,i){},7277:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{md12:"",sm12:"",lg4:""}},[i("material-chart-card",{attrs:{data:t.dailySalesChart.data,options:t.dailySalesChart.options,color:"info",type:"Line"}},[i("h4",{staticClass:"title font-weight-light"},[t._v("Daily Sales")]),i("p",{staticClass:"category d-inline-flex font-weight-light"},[i("v-icon",{attrs:{color:"green",small:""}},[t._v("\n            mdi-arrow-up\n          ")]),i("span",{staticClass:"green--text"},[t._v("55%")]),t._v(" \n          increase in today's sales\n        ")],1),i("template",{slot:"actions"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-clock-outline\n          ")]),i("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated 4 minutes ago")])],1)],2)],1),i("v-flex",{attrs:{md12:"",sm12:"",lg4:""}},[i("material-chart-card",{attrs:{data:t.emailsSubscriptionChart.data,options:t.emailsSubscriptionChart.options,"responsive-options":t.emailsSubscriptionChart.responsiveOptions,color:"red",type:"Bar"}},[i("h4",{staticClass:"title font-weight-light"},[t._v("Email Subscription")]),i("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("Last Campaign Performance")]),i("template",{slot:"actions"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-clock-outline\n          ")]),i("span",{staticClass:"caption grey--text font-weight-light"},[t._v("updated 10 minutes ago")])],1)],2)],1),i("v-flex",{attrs:{md12:"",sm12:"",lg4:""}},[i("material-chart-card",{attrs:{data:t.dataCompletedTasksChart.data,options:t.dataCompletedTasksChart.options,color:"green",type:"Line"}},[i("h3",{staticClass:"title font-weight-light"},[t._v("Completed Tasks")]),i("p",{staticClass:"category d-inline-flex font-weight-light"},[t._v("Last Last Campaign Performance")]),i("template",{slot:"actions"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            mdi-clock-outline\n          ")]),i("span",{staticClass:"caption grey--text font-weight-light"},[t._v("campaign sent 26 minutes ago")])],1)],2)],1),i("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[i("material-stats-card",{attrs:{color:"green",icon:"mdi-store",title:"Revenue",value:"$34,245","sub-icon":"mdi-calendar","sub-text":"Last 24 Hours"}})],1),i("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[i("material-stats-card",{attrs:{color:"orange",icon:"mdi-content-copy",title:"Used Space",value:"49/50","small-value":"GB","sub-icon":"mdi-alert","sub-icon-color":"error","sub-text":"Get More Space...","sub-text-color":"text-primary"}})],1),i("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[i("material-stats-card",{attrs:{color:"red",icon:"mdi-information-outline",title:"Fixed Issues",value:"75","sub-icon":"mdi-tag","sub-text":"Tracked from Github"}})],1),i("v-flex",{attrs:{sm6:"",xs12:"",md6:"",lg3:""}},[i("material-stats-card",{attrs:{color:"info",icon:"mdi-twitter",title:"Followers",value:"+245","sub-icon":"mdi-update","sub-text":"Just Updated"}})],1),i("v-flex",{attrs:{md12:"",lg6:""}},[i("material-card",{attrs:{color:"orange",title:"Employee Stats",text:"New employees on 15th September, 2016"}},[i("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[i("span",{staticClass:"font-weight-light text-warning text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.index,n=e.item;return[i("td",[t._v(t._s(s+1))]),i("td",[t._v(t._s(n.name))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(n.salary))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(n.country))]),i("td",{staticClass:"text-xs-right"},[t._v(t._s(n.city))])]}}])})],1)],1),i("v-flex",{attrs:{md12:"",lg6:""}},[i("material-card",{staticClass:"card-tabs",attrs:{color:"green"}},[i("v-flex",{attrs:{slot:"header"},slot:"header"},[i("v-tabs",{attrs:{color:"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("span",{staticClass:"subheading font-weight-light mr-3",staticStyle:{"align-self":"center"}},[t._v("Tasks:")]),i("v-tab",{staticClass:"mr-3"},[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-bug")]),t._v("\n              Bugs\n            ")],1),i("v-tab",{staticClass:"mr-3"},[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-code-tags")]),t._v("\n              Website\n            ")],1),i("v-tab",[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-cloud")]),t._v("\n              Server\n            ")],1)],1)],1),i("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(3,function(e){return i("v-tab-item",{key:e},[i("v-list",{attrs:{"three-line":""}},[i("v-list-tile",{on:{click:function(e){return t.complete(0)}}},[i("v-list-tile-action",[i("v-checkbox",{attrs:{value:t.list[0],color:"green"}})],1),i("v-list-tile-title",[t._v('\n                  Sign contract for "What are conference organized afraid of?"\n                ')]),i("div",{staticClass:"d-flex"},[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"success",icon:""},slot:"activator"},[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),i("span",[t._v("Edit")])],1),i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[i("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),i("span",[t._v("Close")])],1)],1)],1),i("v-divider"),i("v-list-tile",{on:{click:function(e){return t.complete(1)}}},[i("v-list-tile-action",[i("v-checkbox",{attrs:{value:t.list[1],color:"success"}})],1),i("v-list-tile-title",[t._v("\n                  Lines From Great Russian Literature? Or E-mails From My Boss?\n                ")]),i("div",{staticClass:"d-flex"},[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"success",icon:""},slot:"activator"},[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),i("span",[t._v("Edit")])],1),i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[i("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),i("span",[t._v("Close")])],1)],1)],1),i("v-divider"),i("v-list-tile",{on:{click:function(e){return t.complete(2)}}},[i("v-list-tile-action",[i("v-checkbox",{attrs:{value:t.list[2],color:"success"}})],1),i("v-list-tile-title",[t._v("\n                  Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                ")]),i("div",{staticClass:"d-flex"},[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"success",icon:""},slot:"activator"},[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),i("span",[t._v("Edit")])],1),i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[i("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),i("span",[t._v("Close")])],1)],1)],1)],1)],1)}),1)],1)],1)],1)],1)},n=[],a={data:function(){return{dailySalesChart:{data:{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}},dataCompletedTasksChart:{data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{lineSmooth:this.$chartist.Interpolation.cardinal({tension:0}),low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},emailsSubscriptionChart:{data:{labels:["Ja","Fe","Ma","Ap","Mai","Ju","Jul","Au","Se","Oc","No","De"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Name",value:"name"},{sortable:!1,text:"Salary",value:"salary",align:"right"},{sortable:!1,text:"Country",value:"country",align:"right"},{sortable:!1,text:"City",value:"city",align:"right"}],items:[{name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],tabs:0,list:{0:!1,1:!1,2:!1}}},methods:{complete:function(t){this.list[t]=!this.list[t]}}},r=a,o=i("2877"),l=i("6544"),c=i.n(l),h=i("8336"),u=i("ac7c"),d=i("a523"),f=i("8fea"),v=i("ce7e6"),p=i("0e8f"),m=i("132d"),g=i("a722"),b=i("8860"),w=i("ba95"),y=i("40fe"),x=i("5d23"),C=i("2464"),_=i("0d01"),T=i("6a18"),I=i("80d2"),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},O={name:"v-tab",mixins:[_["a"],Object(C["a"])("tabGroup"),T["a"]],props:{ripple:{type:[Boolean,Object],default:!0}},computed:{classes:function(){return V({"v-tabs__item":!0,"v-tabs__item--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),this.$emit("click",t),this.to||this.toggle()},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick(function(){Object(I["j"])(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.data,s=this.disabled?"div":e.tag;return i.ref="link",t("div",{staticClass:"v-tabs__div"},[t(s,i,this.$slots.default)])}},$=i("3e79"),S=i("c341"),k=i("58df"),A=Object(k["a"])($["a"],Object(C["a"])("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:S["a"]},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(I["c"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,s=this.windowGroup.isBooted;s&&(this.done=e),requestAnimationFrame(function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=Object(I["c"])(t.clientHeight),!s&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}}),B=i("d9bd"),L=A.extend({name:"v-tab-item",props:{id:String},render:function(t){var e=A.options.render.call(this,t);return this.id&&(Object(B["d"])("id","value",this),e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id),e}}),E=(i("f413"),i("58dbb"),i("a026"));function M(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return E["default"].extend({name:"proxyable",model:{prop:t,event:e},props:M({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:M({},t,function(t){this.internalLazyValue=t})})}var j=W(),R=j,z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},P=Object(k["a"])(R,T["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return z({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,i){return t.toggleMethod(t.getValue(e,i))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(B["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,i)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==i}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex(function(e){return e===t});this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),D=(P.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),{computed:{activeTab:function(){if(this.selectedItems.length)return this.selectedItems[0]},containerStyles:function(){return this.height?{height:parseInt(this.height,10)+"px"}:null},hasArrows:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint},sliderStyles:function(){return{left:this.sliderLeft+"px",transition:null!=this.sliderLeft?null:"none",width:this.sliderWidth+"px"}}}}),N=(i("0832"),P.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:S["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex(function(e,i){return t.internalValue===t.getValue(e,i)})},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick(function(){return t.isBooted=!0})},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}})),G=N.extend({name:"v-tabs-items",inject:{registerItems:{default:null},tabProxy:{default:null},unregisterItems:{default:null}},props:{cycle:Boolean},watch:{internalValue:function(t){this.tabProxy&&this.tabProxy(t)}},created:function(){this.registerItems&&this.registerItems(this.changeModel)},beforeDestroy:function(){this.unregisterItems&&this.unregisterItems()},methods:{changeModel:function(t){this.internalValue=t},getValue:function(t,e){return t.id?t.id:N.options.methods.getValue.call(this,t,e)},next:function(){(this.cycle||this.internalIndex!==this.items.length-1)&&N.options.methods.next.call(this)},prev:function(){(this.cycle||0!==this.internalIndex)&&N.options.methods.prev.call(this)}}}),F=i("b64a"),X={name:"v-tabs-slider",mixins:[F["a"]],render:function(t){return t("div",this.setBackgroundColor(this.color||"accent",{staticClass:"v-tabs__slider"}))}},H=i("9d26"),q={methods:{genBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs__bar",class:this.themeClasses,ref:"bar"}),[this.genTransition("prev"),this.genWrapper(this.genContainer(t)),this.genTransition("next")])},genContainer:function(t){return this.$createElement("div",{staticClass:"v-tabs__container",class:{"v-tabs__container--align-with-title":this.alignWithTitle,"v-tabs__container--centered":this.centered,"v-tabs__container--fixed-tabs":this.fixedTabs,"v-tabs__container--grow":this.grow,"v-tabs__container--icons-and-text":this.iconsAndText,"v-tabs__container--overflow":this.isOverflowing,"v-tabs__container--right":this.right},style:this.containerStyles,ref:"container"},t)},genIcon:function(t){var e=this;return this.hasArrows&&this[t+"IconVisible"]?this.$createElement(H["a"],{staticClass:"v-tabs__icon v-tabs__icon--"+t,props:{disabled:!this[t+"IconVisible"]},on:{click:function(){return e.scrollTo(t)}}},this[t+"Icon"]):null},genItems:function(t,e){return t.length>0?t:e.length?this.$createElement(G,e):null},genTransition:function(t){return this.$createElement("transition",{props:{name:"fade-transition"}},[this.genIcon(t)])},genWrapper:function(t){var e=this;return this.$createElement("div",{staticClass:"v-tabs__wrapper",class:{"v-tabs__wrapper--show-arrows":this.hasArrows},ref:"wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}]},[t])},genSlider:function(t){return t.length||(t=[this.$createElement(X,{props:{color:this.sliderColor}})]),this.$createElement("div",{staticClass:"v-tabs__slider-wrapper",style:this.sliderStyles},t)}}},J={props:{activeClass:{type:String,default:"v-tabs__item--active"},alignWithTitle:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0,validator:function(t){return!isNaN(parseInt(t))}},hideSlider:Boolean,iconsAndText:Boolean,mandatory:{type:Boolean,default:!0},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:{type:String,default:"accent"},value:[Number,String]}},Y={methods:{newOffset:function(t){var e=this.$refs.wrapper.clientWidth;return"prev"===t?Math.max(this.scrollOffset-e,0):Math.min(this.scrollOffset+e,this.$refs.container.clientWidth-e)},onTouchStart:function(t){this.startX=this.scrollOffset+t.touchstartX,this.$refs.container.style.transition="none",this.$refs.container.style.willChange="transform"},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs.container,e=this.$refs.wrapper,i=t.clientWidth-e.clientWidth;t.style.transition=null,t.style.willChange=null,this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)}}},K={watch:{activeTab:function(t,e){this.setOverflow(),t&&(this.tabItems&&this.tabItems(this.getValue(t,this.items.indexOf(t))),null!=e&&this.updateTabsView())},alignWithTitle:"callSlider",centered:"callSlider",fixedTabs:"callSlider",hasArrows:function(t){t||(this.scrollOffset=0)},internalValue:function(t){this.$listeners["input"]&&this.$emit("input",t)},lazyValue:"updateTabs",right:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize",scrollOffset:function(t){this.$refs.container.style.transform="translateX("+-t+"px)",this.hasArrows&&(this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon())}}},U=i("b57a"),Z=i("0d3d"),Q=i("bfc5"),tt=P.extend({name:"v-tabs",directives:{Resize:Z["a"],Touch:S["a"]},mixins:[F["a"],U["a"],D,J,q,Y,K,T["a"]],provide:function(){return{tabGroup:this,tabProxy:this.tabProxy,registerItems:this.registerItems,unregisterItems:this.unregisterItems}},data:function(){return{bar:[],content:[],isOverflowing:!1,nextIconVisible:!1,prevIconVisible:!1,resizeTimeout:null,scrollOffset:0,sliderWidth:null,sliderLeft:null,startX:0,tabItems:null,transitionTime:300,widths:{bar:0,container:0,wrapper:0}}},watch:{items:"onResize",tabs:"onResize"},mounted:function(){this.init()},methods:{checkIcons:function(){this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon()},checkPrevIcon:function(){return this.scrollOffset>0},checkNextIcon:function(){return this.widths.container>this.scrollOffset+this.widths.wrapper},callSlider:function(){var t=this;if(this.hideSlider||!this.activeTab)return!1;var e=this.activeTab;this.$nextTick(function(){e&&e.$el&&(t.sliderWidth=e.$el.scrollWidth,t.sliderLeft=e.$el.offsetLeft)})},init:function(){this.$listeners["input"]&&Object(B["d"])("@input","@change",this)},onResize:function(){if(!this._isDestroyed){this.setWidths();var t=this.isBooted?this.transitionTime:0;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateTabsView,t)}},overflowCheck:function(t,e){this.isOverflowing&&e(t)},scrollTo:function(t){this.scrollOffset=this.newOffset(t)},setOverflow:function(){this.isOverflowing=this.widths.bar<this.widths.container},setWidths:function(){var t=this.$refs.bar?this.$refs.bar.clientWidth:0,e=this.$refs.container?this.$refs.container.clientWidth:0,i=this.$refs.wrapper?this.$refs.wrapper.clientWidth:0;this.widths={bar:t,container:e,wrapper:i},this.setOverflow()},parseNodes:function(){for(var t=[],e=[],i=[],s=[],n=(this.$slots.default||[]).length,a=0;a<n;a++){var r=this.$slots.default[a];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":i.push(r);break;case"v-tabs-items":e.push(r);break;case"v-tab-item":t.push(r);break;default:s.push(r)}else s.push(r)}return{tab:s,slider:i,items:e,item:t}},registerItems:function(t){this.tabItems=t,t(this.internalValue)},unregisterItems:function(){this.tabItems=null},updateTabsView:function(){this.callSlider(),this.scrollIntoView(),this.checkIcons()},scrollIntoView:function(){if(this.activeTab){if(!this.isOverflowing)return this.scrollOffset=0;var t=this.widths.wrapper+this.scrollOffset,e=this.activeTab.$el,i=e.clientWidth,s=e.offsetLeft,n=i+s,a=.3*i;this.activeTab===this.items[this.items.length-1]&&(a=0),s<this.scrollOffset?this.scrollOffset=Math.max(s-a,0):t<n&&(this.scrollOffset-=t-n-a)}},tabProxy:function(t){this.internalValue=t}},render:function(t){var e=this.parseNodes(),i=e.tab,s=e.slider,n=e.items,a=e.item;return t("div",{staticClass:"v-tabs",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar([this.hideSlider?null:this.genSlider(s),i]),t(Q["a"],{props:{dark:this.theme.isDark,light:!this.theme.isDark}},[this.genItems(n,a)])])}}),et=i("3a2f"),it=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=it.exports;c()(it,{VBtn:h["a"],VCheckbox:u["a"],VContainer:d["a"],VDataTable:f["a"],VDivider:v["a"],VFlex:p["a"],VIcon:m["a"],VLayout:g["a"],VList:b["a"],VListTile:w["a"],VListTileAction:y["a"],VListTileTitle:x["b"],VTab:O,VTabItem:L,VTabs:tt,VTabsItems:G,VTooltip:et["a"]})},f413:function(t,e,i){}}]);