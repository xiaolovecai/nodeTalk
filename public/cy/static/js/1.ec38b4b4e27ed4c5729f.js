webpackJsonp([1,4],{12:function(t,e,n){var i,o;n(37),i=n(77);var s=n(66);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=i},22:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".collection-tip{margin-top:20px}","",{version:3,sources:["/./src/views/Collection.vue"],names:[],mappings:"AACA,gBACE,eAAiB,CAClB",file:"Collection.vue",sourcesContent:["\n.collection-tip {\n  margin-top: 20px;\n}\n"],sourceRoot:"webpack://"}])},37:function(t,e,n){var i=n(22);"string"==typeof i&&(i=[[t.id,i,""]]);n(4)(i,{});i.locals&&(t.exports=i.locals)},66:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"collection-tip"},[e("loading")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}]},[t.listData.length?e("other-list",{attrs:{listData:t.listData}}):e("div",{staticClass:"text-center collection-tip"},[t._v("暂无收藏")]),t._v(" ")])])},staticRenderFns:[]}},77:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),s=i(o),a=n(1),r=i(a),c=n(11),l=i(c),u=n(5),d=i(u);e.default={data:function(){return{listData:[],isLoading:!0}},mounted:function(){var t=this,e=this,n=r.default.user();n&&n.userName&&s.default.getCollectionTopics(n.userName).then(function(n){e.listData=n.body.data,t.isLoading=!1})},components:{otherList:l.default,loading:d.default}}}});
//# sourceMappingURL=1.ec38b4b4e27ed4c5729f.js.map