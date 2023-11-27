(function(){"use strict";var e={4456:function(e,t,a){var n=a(9199);const o=e=>((0,n.dD)("data-v-f92d7c1c"),e=e(),(0,n.Cn)(),e),s={class:"bg-white dark:bg-black"},i={class:"navbar navbar-light bg-light fixed-top flex-row bg-transparent text-black dark:text-white pointer-events-none"},r={class:"container-fluid grid justify-between"},l={class:"navbar-nav justify-content-start flex-md-nowrap py-1 px-3 bg-white rounded d-none d-md-flex flex-row pointer-events-auto"},c={class:"nav-item pe-3"},d={class:"nav-item pe-3"},u={class:"nav-item pe-3"},f={class:"nav-item pe-3"},m={key:0,class:"nav-item pe-3"},v={class:"py-1 px-1 bg-white rounded rounded-s-full"},p={class:"logo-name","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},g={class:"logo-image"},b=["src"],h={class:"logo_name pe-3 d-none d-md-flex userName me-3",id:"userName"},w={key:0,class:"logo_uid pe-3 d-none d-md-flex userId",id:"userId"},k={class:"offcanvas offcanvas-end text-black",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},_=o((()=>(0,n._)("div",{class:"offcanvas-header"},[(0,n._)("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"DIARY MUSIC -- 记事簿音乐"),(0,n._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1))),y={class:"offcanvas-body"},x={class:"logo-name mb-3"},N={class:"logo-image"},j=["src"],I={class:"logo_name userName me-3",id:"userNameoc"},U={key:0,class:"logo_uid userId",id:"userIdoc"},C=o((()=>(0,n._)("div",{class:"separator"},null,-1))),S={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},L={class:"nav-item"},T={class:"nav-item"},A=o((()=>(0,n._)("li",{class:"nav-item"},[(0,n._)("a",{class:"nav-link",href:"https://www.beatarray.com/label/DiaryMusic"},"我们的「节奏阵列」主页")],-1))),O={class:"nav-item"},D={class:"nav-item pe-3"},E={class:"nav-item pe-3"},W=o((()=>(0,n._)("div",{class:"toast-container position-fixed p-3 bottom-0 end-0 text-black"},null,-1))),P=o((()=>(0,n._)("div",{class:"modal fade",id:"broadcast",tabindex:"-1","data-bs-backdrop":"static","data-bs-keyboard":"false",role:"dialog","aria-labelledby":"modalTitleId","aria-hidden":"true"},[(0,n._)("div",{class:"modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm",role:"document"},[(0,n._)("div",{class:"modal-content"},[(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title mth",id:"modalTitleId"}),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),(0,n._)("div",{class:"modal-body mtb"}),(0,n._)("div",{class:"modal-footer justify-content-start"},[(0,n._)("p",null,[(0,n.Uk)("发布者："),(0,n._)("span",{class:"passOwner"})])])])])],-1))),q=o((()=>(0,n._)("footer",null,null,-1)));function M(e,t,a,o,M,Y){const B=(0,n.up)("router-link"),z=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("nav",i,[(0,n._)("div",r,[(0,n._)("ul",l,[(0,n._)("li",c,[(0,n.Wm)(B,{class:"nav-link active text-black dark:text-white","aria-current":"page",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("主页")])),_:1})]),(0,n._)("li",d,[(0,n.Wm)(B,{class:"nav-link text-black dark:text-white",to:"/intro"},{default:(0,n.w5)((()=>[(0,n.Uk)("节奏阵列展示页面")])),_:1})]),(0,n._)("li",u,[(0,n.Wm)(B,{class:"nav-link text-black dark:text-white",to:"/passage"},{default:(0,n.w5)((()=>[(0,n.Uk)("文章")])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(B,{class:"nav-link text-black dark:text-white",to:"/chat"},{default:(0,n.w5)((()=>[(0,n.Uk)("站内聊天")])),_:1})]),M.isAdmin?((0,n.wg)(),(0,n.iD)("li",m,[(0,n.Wm)(B,{class:"nav-link text-black dark:text-white",to:"/backstage"},{default:(0,n.w5)((()=>[(0,n.Uk)("后台管理")])),_:1})])):(0,n.kq)("",!0)]),(0,n._)("div",v,[(0,n._)("div",p,[(0,n._)("div",g,[(0,n._)("img",{src:M.user.ava,alt:"",id:"userAvatar",class:"userAvatar"},null,8,b)]),(0,n._)("span",h,(0,n.zw)(M.user.name),1),M.isLogin?((0,n.wg)(),(0,n.iD)("span",w,"UID: "+(0,n.zw)(M.user.uid),1)):(0,n.kq)("",!0)])])])]),(0,n._)("div",k,[_,(0,n._)("div",y,[(0,n._)("div",x,[(0,n._)("div",N,[(0,n._)("img",{src:M.user.ava,alt:"",id:"userAvataroc",class:"userAvatar"},null,8,j)]),(0,n._)("span",I,(0,n.zw)(M.user.name),1),M.isLogin?((0,n.wg)(),(0,n.iD)("span",U,"UID: "+(0,n.zw)(M.user.uid),1)):(0,n.kq)("",!0)]),M.isLogin?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(B,{to:"changeInfo",class:"me-3"},{default:(0,n.w5)((()=>[(0,n.Uk)("修改信息")])),_:1}),(0,n.Wm)(B,{to:"my",class:"me-3"},{default:(0,n.w5)((()=>[(0,n.Uk)("个人中心")])),_:1}),(0,n._)("a",{onClick:t[0]||(t[0]=(...e)=>Y.logout&&Y.logout(...e)),class:"signoutBtn b"},"退出登录")],64)):((0,n.wg)(),(0,n.j4)(B,{key:1,to:"login",class:"me-3"},{default:(0,n.w5)((()=>[(0,n.Uk)("登录")])),_:1})),C,(0,n._)("ul",S,[(0,n._)("li",L,[(0,n.Wm)(B,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("主页")])),_:1})]),(0,n._)("li",T,[(0,n.Wm)(B,{class:"nav-link",to:"/intro"},{default:(0,n.w5)((()=>[(0,n.Uk)("嵌入展示「节奏阵列」 页面")])),_:1})]),A,(0,n._)("li",O,[(0,n.Wm)(B,{class:"nav-link",to:"/passage"},{default:(0,n.w5)((()=>[(0,n.Uk)("文章")])),_:1})]),(0,n._)("li",D,[(0,n.Wm)(B,{class:"nav-link",to:"/chat"},{default:(0,n.w5)((()=>[(0,n.Uk)("站内聊天")])),_:1})]),(0,n._)("li",E,[(0,n.Wm)(B,{class:"nav-link",to:"/backstage"},{default:(0,n.w5)((()=>[(0,n.Uk)("后台管理")])),_:1})])])])]),(0,n.Wm)(z),W,P,q])}var Y=a(7387),B=a.n(Y);function z(){var e=[].slice.call(document.querySelectorAll(".toast")),t=e.map((function(e){return new bootstrap.Toast(e)}));t[t.length-1].show()}if(B()(".offcanvas a").on("click",(()=>{console.log("test"),B()("button[data-bs-dismiss=offcanvas]").click()})),"Notification"in window)if("granted"===Notification.permission){new Notification("Hi there!")}else"denied"!==Notification.permission&&Notification.requestPermission().then((e=>{if("granted"===e){new Notification("Hi there!")}}));else alert("This browser does not support desktop notification");var F={data(){return{cont:null,user:{name:"未登录",ava:"res/default.png",uid:""},isLogin:!1,isAdmin:!1}},methods:{getInfo(){fetch("/api/getUserInfo",{headers:{Token:localStorage.token}}).then((e=>e.json())).then((e=>{if(200==e.status){var t=null===e.data.alia?e.data.username:e.data.alia;this.user={name:t,ava:e.data.avatar,uid:e.data.id},this.isLogin=0==e.guest,1==e.guest&&setTimeout((()=>{B()('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="true" data-bs-autohide="false">\n                        <div class="toast-header">\n                            <img src="" class="rounded me-2" alt="">\n                            <strong class="me-auto">提示</strong>\n                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n                        </div>\n                        <div class="toast-body">\n                            建议您登录到Diary Music 官网来体验官网的完整功能。\n                            <div class="mt-2 pt-2 border-top">\n                                <a href="#/login" class="me-3">前往登录</a>\n                            </div>\n                        </div>\n                    </div>').appendTo(".toast-container"),z();var e=0;B()(".time").text(e+"秒前"),setInterval((()=>{e++,e>59?B()(".time").text(parseInt(e/60)+"分钟前"):B()(".time").text(e+"秒前")}),1e3)}),1e3)}else localStorage.setItem("token",e.token),fetch("/api/getUserInfo",{headers:{Token:localStorage.token}}).then((e=>e.json())).then((e=>{if(200==e.status)var t=null===e.data.alia?e.data.username:e.data.alia;this.user={name:t,ava:e.data.avatar,uid:e.data.id},this.isLogin=0==e.guest}))}))},logout(){fetch("/api/logout").then((e=>e.json())).then((e=>localStorage.token=200==e.status?e.token:void 0)),location.hash="/login",this.getInfo()}},created(){},mounted(){this.getInfo()}},H=a(89);const Z=(0,H.Z)(F,[["render",M],["__scopeId","data-v-f92d7c1c"]]);var K=Z,R=a(2483);const G={class:"w-screen h-100 flex items-center justify-center px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12"},J=(0,n._)("div",{class:"lg:mx-auto lg:max-w-2xl"},null,-1),Q=[J];function V(e,t,a,o,s,i){return(0,n.wg)(),(0,n.iD)("section",G,Q)}var X={data(){return{}}};const $=(0,H.Z)(X,[["render",V]]);var ee=$;const te=[{path:"/",name:"home",component:ee},{path:"/login",name:"login",component:()=>Promise.all([a.e(970),a.e(768)]).then(a.bind(a,3768))},{path:"/song/:sid",component:()=>Promise.all([a.e(452),a.e(936)]).then(a.bind(a,2536)),props:!0},{path:"/register",name:"register",component:()=>Promise.all([a.e(970),a.e(813)]).then(a.bind(a,2813))},{path:"/my",name:"my",component:()=>a.e(910).then(a.bind(a,8910))},{path:"/intro",component:()=>Promise.all([a.e(452),a.e(713)]).then(a.bind(a,408))}],ae=(0,R.p7)({history:(0,R.r5)(),routes:te});var ne=ae,oe=a(7139),se=(0,oe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),ie=a(4806),re=a.n(ie),le=!1,ce=0;const de=re().throttle((function(){window.scrollY<ce?document.querySelector("nav.navbar").classList.remove("nav-wrap"):window.scrollY>200&&!le&&document.querySelector("nav.navbar").classList.add("nav-wrap"),console.log(window.scrollY),console.log(ce),ce=window.scrollY}),200),ue=re().throttle((function(){document.querySelector("nav.navbar").classList.remove("nav-wrap")}));window.addEventListener("scroll",de),window.addEventListener("hashchange",ue),(0,n.ri)(K).use(se).use(ne).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],s=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{452:"3955a1ba",713:"dd34c8b3",768:"ebcce952",813:"e6373db0",910:"dc20f82d",936:"7ecad1c8",970:"0e8f72b8"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{713:"a5b48ced",768:"375bca58",813:"375bca58",936:"69cdf921"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dm:";a.l=function(n,o,s,i){if(e[n])e[n].push(o);else{var r,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+s),r.src=n),e[n]=[o];var f=function(t,a){r.onerror=r.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=r,s.parentNode&&s.parentNode.removeChild(s),o(l)}};return s.onerror=s.onload=i,s.href=t,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===e||s===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],s=o.getAttribute("data-href");if(s===e||s===t)return o}},n=function(n){return new Promise((function(o,s){var i=a.miniCssF(n),r=a.p+i;if(t(i,r))return o();e(n,r,null,o,s)}))},o={143:0};a.f.miniCss=function(e,t){var a={713:1,768:1,813:1,936:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var s=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=s);var i=a.p+a.u(t),r=new Error,l=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",r.name="ChunkLoadError",r.type=s,r.request=i,o[1](r)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],r=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var d=l(a)}for(t&&t(n);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self["webpackChunkdm"]=self["webpackChunkdm"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4456)}));n=a.O(n)})();
//# sourceMappingURL=app.a03defc3.js.map