webpackJsonp([5,4],[function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=n(6),i=s(a),o=n(17),r=s(o),c=n(93),l=s(c),u=n(88),d=n(46),f=s(d),p=n(50),v=s(p),h=n(52),_=s(h),m=n(51),g=s(m),b=n(53),k=s(b);n(45),n(40),i.default.use(r.default),i.default.use(l.default),i.default.use(u.InfiniteScroll),i.default.component(u.Spinner.name,u.Spinner);var C=function(t){n.e(3,function(){t(n(14))})},w=function(t){n.e(0,function(){t(n(10))})},y=function(t){n.e(2,function(){t(n(13))})},x=function(t){n.e(1,function(){t(n(12))})},M=[{path:"/",component:C},{path:"/Hello/:id",component:v.default,children:[{path:"/Home",component:w},{path:"/Collection",component:x},{path:"/Msg",component:y}]},{path:"/Motif/:id",component:_.default},{path:"/Login",component:g.default},{path:"/Personal/:name",component:k.default}],R=new r.default({routes:M});i.default.http.interceptors.push(function(t,e){e(function(t){404===t.status&&(alert(t.body.error_msg),R.replace("/"))})}),new i.default({el:"#app",router:R,template:"<App/>",components:{App:f.default}})},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(84),i=s(a);e.default={setItem:function(t,e){window.sessionStorage.setItem(t,(0,i.default)(e))},getItem:function(t){return JSON.parse(window.sessionStorage.getItem(t))},user:function(){return this.getItem("user")}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),i=s(a),o=n(17),r=s(o),c=n(1),l=s(c);i.default.use(r.default);var u="https://cnodejs.org/api/v1/";e.default={getTopics:function(t){return i.default.http.get(u+"topics",t)},getMotif:function(t){var e=l.default.user(),n="";return e&&e.token&&(n=e.token),i.default.http.get(u+"topic/"+t,{params:{accesstoken:n}})},postAccessToken:function(t){return i.default.http.post(u+"accesstoken",{accesstoken:t})},getCollectionTopics:function(t){return i.default.http.get(u+"topic_collect/"+t)},getUser:function(t){return i.default.http.get(u+"user/"+t)},postCollection:function(t,e,n){return n?i.default.http.post(u+"/topic_collect/de_collect",{accesstoken:e,topic_id:t}):i.default.http.post(u+"/topic_collect/collect",{accesstoken:e,topic_id:t})},postReplyUps:function(t,e){return i.default.http.post(u+"reply/"+t+"/ups",{accesstoken:e})},postReply:function(t){return i.default.http.post(u+"topic/"+t.topic_id+"/replies",{accesstoken:t.token,content:t.content,reply_id:t.reply_id})},postTopics:function(t){return i.default.http.post(u+"topics",{accesstoken:t.token,content:t.content,title:t.title,tab:t.tab})},getMessages:function(t){return i.default.http.get(u+"messages",{params:{accesstoken:t}})},getMsgCount:function(t){return i.default.http.get(u+"message/count",{params:{accesstoken:t}})},postMsgMark_all:function(t){return i.default.http.post(u+"message/mark_all",{accesstoken:t})}}},,,function(t,e,n){var s,a;n(38);var i=n(67);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},,function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=n(6),i=s(a);i.default.filter("tab-filter",function(t){switch(t){case"ask":t="问答";break;case"share":t="分享";break;case"job":t="招聘";break;default:t="无标签"}return t}),i.default.filter("title-filter",function(t){switch(t){case"/home":t="首页";break;case"/collection":t="收藏";break;case"/msg":t="消息";break;default:t="首页"}return t}),i.default.filter("time-filter",function(t){var e=Date.parse(new Date(t)),n=Date.parse(new Date),s=n-e;if(s<=0)return"刚刚";var a=31104e6,i=2592e6,o=864e5,r=Math.floor(s/a);if(r)return r+"年前";var c=s%a,l=Math.floor(c/i);if(l)return l+"月前";var u=c%i,d=Math.floor(u/o);if(d)return d+"天前";var f=u%o,p=Math.floor(f/36e5);if(p)return p+"小时前";var v=f%36e5,h=Math.floor(v/6e4);return h?h+"分钟前":"刚刚"})},function(t,e,n){var s,a;n(28),s=n(74);var i=n(56);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e){},,function(t,e,n){var s,a;n(26),s=n(72);var i=n(54);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){},function(t,e){},,,function(t,e){},function(t,e){},,function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var s,a,i=n(60);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(27),s=n(73);var i=n(55);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},,function(t,e,n){var s,a;n(35),s=n(76);var i=n(64);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(32),s=n(78);var i=n(61);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(36),s=n(79);var i=n(65);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(31),s=n(80);var i=n(59);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(29),s=n(82);var i=n(57);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"list"},t._l(t.listData,function(n){return e("div",{key:"item.id",staticClass:"list-cell",on:{click:function(e){t.goMotif(n.id)}}},[e("h4",{staticClass:"cell-title"},[t._v("\n      "+t._s(n.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"cell-msg"},[e("div",{staticClass:"user-icon"},[e("img",{attrs:{src:n.author.avatar_url}})]),t._v(" "),e("p",{staticClass:"user-name"},[t._v(t._s(n.author.loginname))]),t._v(" "),e("p",{staticClass:"cell-tab"},[e("span",[t._v("最后回复:"+t._s(t._f("time-filter")(n.last_reply_at)))])])]),t._v(" "),e("div",{staticClass:"height-10"})])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("transition",{attrs:{name:"article"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isWrite,expression:"isWrite"}],staticClass:"write-article-box"},[e("header",{attrs:{id:"header"}},[e("div",{staticClass:"left-icon back-icon",on:{click:t.closeWrite}}),t._v(" "),e("span",[t._v("发布")]),t._v(" ")]),t._v(" "),e("div",{staticClass:"write-header"},[e("div",{staticClass:"write-title"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入标题..."},domProps:{value:t._s(t.title)},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"write-tab"},[e("p",{staticClass:"gray"},[t._v("请选择标签：")]),t._v(" "),e("div",{staticClass:"text-center"},[e("span",{class:{"write-tab-active":"share"===t.writeTab},on:{click:function(e){t.writeTab="share"}}},[t._v("分享")]),t._v(" "),e("span",{class:{"write-tab-active":"ask"===t.writeTab},on:{click:function(e){t.writeTab="ask"}}},[t._v("问答")]),t._v(" "),e("span",{class:{"write-tab-active":"job"===t.writeTab},on:{click:function(e){t.writeTab="job"}}},[t._v("招聘")])])])]),t._v(" "),e("div",{staticClass:"write-content"},[e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"内容..."},domProps:{value:t._s(t.content)},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"write-footer"},[e("button",{staticClass:"btn closeBtn",on:{click:t.closeWrite}},[t._v("取消")]),t._v(" "),e("button",{staticClass:"btn postBtn",on:{click:t.postArticle}},[t._v("发布")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("header",{attrs:{id:"header"}},[e("div",{staticClass:"left-icon back-icon",on:{click:t.back}}),t._v(" "),e("span",[t._v(t._s(t.title))]),t._v(" "),t.rightText?e("div",{staticClass:"right-icon reply-btn",on:{click:t.rightBtn}},[t._v(t._s(t.rightText))]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{attrs:{id:"content"}},[e("back-header",{attrs:{title:"个人中心",rightText:t.rightBtn,backData:"go"},on:{rightBtn:t.rightBtnClick}}),t._v(" "),t.personalComplete&&t.collectionComplete?e("loading"):e("div",[e("div",{staticClass:"personal-info"},[e("div",{staticClass:"personal-icon"},[e("img",{attrs:{src:t.personalData.avatar_url}})]),t._v(" "),e("div",{staticClass:"personal-information"},[e("p",{staticClass:"personal-name"},[t._v(t._s(t.personalData.loginname))]),t._v(" "),e("p",[t._v("注册于:"+t._s(t._f("time-filter")(t.personalData.create_at)))])]),t._v(" "),e("p",{staticClass:"personal-score"},[t._v("积分:"+t._s(t.personalData.score))])]),t._v(" "),e("table",{staticClass:"personal-nav",attrs:{width:"100%"}},[e("tbody",[e("tr",[e("td",{class:{"personal-active":"reply"==t.tab},on:{click:function(e){t.tabNav("reply")}}},[t._v("回复")]),t._v(" "),e("td",{class:{"personal-active":"theme"==t.tab},on:{click:function(e){t.tabNav("theme")}}},[t._v("主题")]),t._v(" "),e("td",{class:{"personal-active":"collection"==t.tab},on:{click:function(e){t.tabNav("collection")}}},[t._v("收藏")])])])]),t._v(" "),t.listData.length?e("other-list",{attrs:{listData:t.listData}}):e("div",{staticClass:"text-center margin-top-20"},[t._v("暂无内容")]),t._v(" ")]),t._v(" ")])},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{class:{a:t.showRepliesBox},attrs:{id:"content"}},[e("back-header",{attrs:{title:"主题",rightText:"回复",backData:"go"},on:{rightBtn:t.rightBtnClick}}),t._v(" "),t.isShow?e("loading"):e("div",[e("div",{staticClass:"motif-top"},[e("h3",{staticClass:"text-center"},[t._v(t._s(t.data.title))]),t._v(" "),e("div",[e("div",{staticClass:"author-icon"},[e("img",{attrs:{src:t.author.avatar_url}})]),t._v(" "),e("div",{on:{click:function(e){t.goPersonal(t.author.loginname)}}},[e("div",{staticClass:"text-right"},[t._v("\n            作者:"+t._s(t.author.loginname)+"\n          ")]),t._v(" "),e("div",{staticClass:"text-right time-tab"},[t._v("发表于:"+t._s(t._f("time-filter")(t.data.create_at))+" "),e("span",{staticClass:"tab"},[t._v("#"+t._s(t._f("tab-filter")(t.data.tab))+"#")])])])]),t._v(" "),e("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.data.content)}}),t._v(" "),e("div",{staticClass:"text-right collect-btn"},[t.allowCollectBtn?e("button",{staticClass:"btn",class:[t.data.is_collect?"notCollect":"alrCollect"],on:{click:function(e){t.collectBtn(t.data.is_collect)}}},[t._v(t._s(t.data.is_collect?"已收藏":"收藏"))]):e("button",{staticClass:"btn",class:[t.data.is_collect?"notCollect":"alrCollect"]},[t._v(t._s(t.data.is_collect?"已收藏":"收藏"))]),t._v(" ")])]),t._v(" "),e("div",{staticClass:"replies"},t._l(t.repliesData,function(n,s){return e("div",{staticClass:"replies-cell"},[e("div",{staticClass:"user-icon",on:{click:function(e){t.goPersonal(n.author.loginname)}}},[e("img",{attrs:{src:n.author.avatar_url}})]),t._v(" "),e("div",{staticClass:"replies-text"},[e("div",{staticClass:"author",attrs:{index:"#"+(s+1)}},[e("span",[t._v(t._s(n.author.loginname))]),t._v(" "+t._s(t._f("time-filter")(n.create_at)))]),t._v(" "),e("div",{staticClass:"markdown-body replies-body",domProps:{innerHTML:t._s(n.content)}})]),t._v(" "),e("div",{staticClass:"text-right replies-footer"},[e("span",{staticClass:"fabulous fabulous-icon",class:{"onFabulous-icon":n.ups.indexOf(t.userId)!=-1},on:{click:function(e){t.upsBtn(n)}}},[t._v(t._s(n.ups.length?n.ups.length:" "))]),t._v(" "),e("span",{staticClass:"replies-icon",on:{click:function(e){t.repliesClick(n)}}},[t._v(" ")])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showRepliesBox,expression:"showRepliesBox"}],staticClass:"replies-mask",on:{click:function(e){e.target===e.currentTarget&&t.closeReplies(e)}}}),t._v(" "),e("transition",{attrs:{name:"replies"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showRepliesBox,expression:"showRepliesBox"}],staticClass:"replies-box"},[e("div",{staticClass:"textarea"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.replies.text,expression:"replies.text"}],domProps:{value:t._s(t.replies.text)},on:{input:function(e){e.target.composing||(t.replies.text=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"text-right replies-btn"},[e("button",{staticClass:"btn",on:{click:function(e){t.goReplies(t.replies)}}},[t._v("回复")])])])])]),t._v(" ")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("router-view")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"relative"},[e("header",{attrs:{id:"header"}},[e("div",{staticClass:"left-icon menu-icon",on:{click:function(e){t.openMenu()}}}),t._v(" "),e("span",[t._v(t._s(t._f("title-filter")(t.title)))]),t._v(" "),e("div",{staticClass:"right-icon edit-icon",on:{click:t.openWrite}})]),t._v(" "),e("div",{attrs:{id:"content"}},[e("router-view")]),t._v(" "),e("menu-nav",{attrs:{isShow:t.isShow},on:{closeMask:t.closeMenu}}),t._v(" "),e("post-article",{attrs:{isWrite:t.isWrite},on:{closeWrite:t.closeWrite}})])},staticRenderFns:[]}},,,function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMaskShow,expression:"isMaskShow"}],staticClass:"mask",on:{click:function(e){e.target===e.currentTarget&&t.closeMask(e)}}},[e("transition",{attrs:{name:"menu"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{id:"menu"}},[e("div",{staticClass:"menu-user",on:{click:t.userClick}},[e("div",{staticClass:"menu-userIcon",style:t.styleIcon}),t._v(" "),e("p",{staticClass:"userName"},[t._v(t._s(t.user.userName?t.user.userName:"未登录"))])]),t._v(" "),e("div",{staticClass:"menu-list"},[e("div",{staticClass:"menu-list-cell home-icon",class:{"menu-active":"/home"==t.menuTab},on:{click:function(e){t.menuCellClick("home")}}},[t._v("首页")]),t._v(" "),e("div",{staticClass:"menu-list-cell collection-icon",class:{"menu-active":"/collection"==t.menuTab},on:{click:function(e){t.menuCellClick("collection")}}},[t._v("收藏")]),t._v(" "),e("div",{staticClass:"menu-list-cell msg-icon",class:{"menu-active":"/msg"==t.menuTab},on:{click:function(e){t.menuCellClick("msg")}}},[t._v("消息\n          "),t.msgCount>0?e("span",{staticClass:"msgCount"},[t._v(t._s(t.msgCount))]):t._e()])]),t._v(" "),e("a",{staticClass:"me",attrs:{href:"https://github.com/Cyer/vue2.0-cnode",target:"_Blank"}},[t._v("@Cyer")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"login-bg"},[e("back-header",{attrs:{title:"登陆",rightText:"",backData:"go"}}),t._v(" "),e("div",{staticClass:"login-from"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],attrs:{type:"text",placeholder:"Access Token"},domProps:{value:t._s(t.token)},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn",on:{click:t.loginClick}},[t._v("登 陆")])])])},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this;t.$createElement,t._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"spinner"},[e("div",{staticClass:"double-bounce1"}),t._v(" "),e("div",{staticClass:"double-bounce2"})])}]}},,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["listData"],methods:{goMotif:function(t){this.$router.push("/motif/"+t)}}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=s(a),o=n(1),r=s(o);e.default={props:["isWrite"],data:function(){return{writeTab:"share",title:"",content:""}},methods:{closeWrite:function(){this.$emit("closeWrite")},postArticle:function(){var t=this,e=this,n=r.default.user();if(n&&n.token){var s={token:n.token,tab:e.writeTab,title:e.title,content:e.content};i.default.postTopics(s).then(function(e){e.body.success?(document.body.style.overflow="scroll",t.$router.push("/motif/"+e.body.topic_id)):alert("发布失败")},function(t){alert(t.body.error_msg)})}else alert("token错误,请重新登录")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","rightText","backData"],methods:{back:function(){"go"===this.backData?this.$router.go(-1):"replace"===this.backData.type&&this.$router.replace(this.backData.url)},rightBtn:function(){this.$emit("rightBtn")}}}},,function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),i=s(a);n(7);var o=n(2),r=s(o);e.default={props:["isShow"],data:function(){return{isMaskShow:!1,user:{},styleIcon:{},menuTab:this.$route.path,msgCount:0}},methods:{closeMask:function(){this.$emit("closeMask","")},userClick:function(){var t=this;t.user.userName?t.$router.push("/personal/"+t.user.userName):t.$router.push("/login")},menuCellClick:function(t){if("home"!=t){var e=i.default.user();if(!e)return void this.$router.push("/login")}"msg"===t&&(this.msgCount=0),this.menuTab="/"+t,this.$emit("closeMask",t),this.$router.push("/"+t)}},mounted:function(){var t=this;i.default.getItem("user")&&(t.user=i.default.getItem("user"),t.styleIcon={"background-image":'url("'+t.user.avatar_url+'")'},r.default.getMsgCount(t.user.token).then(function(e){t.msgCount=e.body.data}))},watch:{isShow:function(t,e){var n=this;t?n.isMaskShow=t:!function(){var e=setTimeout(function(){n.isMaskShow=t,clearTimeout(e)},250)}()}}}},,function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(49),i=s(a),o=n(47),r=s(o),c=n(1),l=s(c);e.default={data:function(){return{isShow:!1,isWrite:!1,title:this.$route.path}},methods:{openMenu:function(){this.isShow=!0},closeMenu:function(){this.isShow=!1},openWrite:function(){var t=l.default.user();t&&t.id?(this.isWrite=!0,document.body.style.overflow="hidden"):this.$router.push("/login")},closeWrite:function(){document.body.style.overflow="scroll",this.isWrite=!1}},mounted:function(){},watch:{$route:function(t,e){this.title=t.path}},components:{menuNav:i.default,postArticle:r.default}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),i=s(a),o=n(2),r=s(o),c=n(1),l=s(c);e.default={data:function(){return{token:""}},methods:{loginClick:function(){var t=this;r.default.postAccessToken(t.token).then(function(e){var n={token:t.token,avatar_url:e.body.avatar_url,id:e.body.id,userName:e.body.loginname};l.default.setItem("user",n),t.$router.go(-1)},function(t){alert(t.body.error_msg)})}},mounted:function(){},components:{backHeader:i.default}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),i=s(a),o=n(8),r=s(o);n(7);var c=n(5),l=s(c),u=n(1),d=s(u);e.default={data:function(){return{data:{},author:{},isShow:!0,allowCollectBtn:!0,userId:"",showRepliesBox:!1,replies:{text:"",id:""},repliesData:[]}},methods:{goPersonal:function(t){this.$router.push("/personal/"+t)},collectBtn:function(t){var e=this;e.allowCollectBtn=!1;var n=d.default.user();n&&n.token?i.default.postCollection(e.$route.params.id,n.token,t).then(function(n){n.body.success&&(e.data.is_collect=!t,e.allowCollectBtn=!0)}):this.$router.push("/login")},upsBtn:function(t){var e=d.default.user();e&&e.id?!function(){var n=t.ups.indexOf(e.id);i.default.postReplyUps(t.id,e.token).then(function(s){n===-1?t.ups.push(e.id):t.ups.splice(n,1)},function(t){alert(t.body.error_msg)})}():this.$router.push("/login")},repliesClick:function(t){var e=this;e.replies.text="",e.replies.id="";var n=d.default.user();n&&n.id?(t&&(e.replies.text="@"+t.author.loginname+" ",e.replies.id=t.id),e.showRepliesBox=!0):e.$router.push("/login")},rightBtnClick:function(){this.repliesClick()},closeReplies:function(){this.showRepliesBox=!1},goReplies:function(t){var e=this,n=d.default.user();if(t.text){e.showRepliesBox=!1;var s={topic_id:e.$route.params.id,token:n.token,content:t.text,reply_id:t.id};i.default.postReply(s).then(function(t){e.getMotifContent()})}},getMotifContent:function(){var t=this;i.default.getMotif(t.$route.params.id).then(function(e){var n=e.body.data;t.data=n,t.author=n.author,t.repliesData=n.replies,t.isShow=!1})}},mounted:function(){var t=this;t.isShow=!0;var e=d.default.user();e&&e.id&&(t.userId=e.id),t.getMotifContent()},components:{backHeader:r.default,loading:l.default}}},,function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),i=s(a),o=n(2),r=s(o),c=n(1),l=s(c);n(7);var u=n(11),d=s(u),f=n(5),p=s(f);e.default={data:function(){return{rightBtn:"",personalData:{},tab:"reply",listData:[],collectionTopics:[],personalComplete:!0,collectionComplete:!0}},methods:{rightBtnClick:function(){sessionStorage.clear(),this.$router.push("/")},tabNav:function(t){var e=this;if(e.tab!==t)switch(e.tab=t,t){case"reply":e.listData=e.personalData.recent_replies;break;case"theme":e.listData=e.personalData.recent_topics;break;case"collection":e.listData=e.collectionTopics}}},mounted:function(){var t=this,e=l.default.user(),n=t.$route.params.name;r.default.getUser(n).then(function(e){t.personalData=e.body.data,t.listData=t.personalData.recent_replies,t.personalComplete=!1}),r.default.getCollectionTopics(n).then(function(e){t.collectionTopics=e.body.data,t.collectionComplete=!1}),e&&e.userName===n&&(t.rightBtn="退出")},components:{backHeader:i.default,otherList:d.default,loading:p.default}}},,,,,,,,,,,,function(t,e){}]);
//# sourceMappingURL=app.3660221df4f9fdbb7e06.js.map