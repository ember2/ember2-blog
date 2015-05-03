define("ember2-blog/adapters/application",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].FirebaseAdapter.extend({firebase:new window.Firebase("https://ember2-blog.firebaseio.com")})}),define("ember2-blog/app",["exports","ember","ember/resolver","ember/load-initializers","ember2-blog/config/environment"],function(e,t,a,r,n){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](d,n["default"].modulePrefix),e["default"]=d}),define("ember2-blog/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({init:function(){this.set("post",t["default"].Object.create())},sortProperties:["createdDate"],sortAscending:!1,actions:{createPost:function(){var e=this.store.createRecord("post",{title:this.get("post.title"),content:this.get("post.content"),author:"James",createdDate:new Date});e.save()}}})}),define("ember2-blog/initializers/app-version",["exports","ember2-blog/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!n){var i=r(d.toString());a["default"].libraries.register(i,t["default"].APP.version),n=!0}}}}),define("ember2-blog/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){"use strict";e["default"]=t["default"]}),define("ember2-blog/initializers/export-application-global",["exports","ember","ember2-blog/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("ember2-blog/models/post",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({title:t["default"].attr("string"),author:t["default"].attr("string"),createdDate:t["default"].attr("date"),content:t["default"].attr("string")})}),define("ember2-blog/router",["exports","ember","ember2-blog/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});e["default"]=r.map(function(){})}),define("ember2-blog/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("post")}})}),define("ember2-blog/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","title");var r=e.createTextNode("James' Ember 2 Blog");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("hr");e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("h3"),r=e.createTextNode("Create a New Post");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode("\n      ");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode("\n      ");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode("\n        ");e.appendChild(r,n);var n=e.createElement("button"),d=e.createTextNode("Publish");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.content,i=n.get,o=n.inline,l=n.element;r.detectNamespace(a);var c;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(c=this.build(r),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=r.cloneNode(this.cachedFragment,!0))):c=this.build(r);var p=r.childAt(c,[8]),s=r.childAt(p,[5,1]),h=r.createMorphAt(c,4,4,a),u=r.createMorphAt(r.childAt(p,[1]),1,1),m=r.createMorphAt(r.childAt(p,[3]),1,1);return d(t,h,e,"outlet"),o(t,u,e,"input",[],{value:i(t,e,"post.title"),placeholder:"Title"}),o(t,m,e,"textarea",[],{value:i(t,e,"post.content"),placeholder:"Content"}),l(t,s,e,"action",["createPost"],{}),c}}}())}),define("ember2-blog/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("h2"),r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("p"),r=e.createComment("");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("i"),r=e.createTextNode("(Posted on ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(" by ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode(")");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n    ");e.appendChild(t,a);var a=e.createElement("hr");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.content;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var o=r.childAt(i,[7]),l=r.createMorphAt(r.childAt(i,[3]),0,0),c=r.createMorphAt(r.childAt(i,[5]),0,0),p=r.createMorphAt(o,1,1),s=r.createMorphAt(o,3,3);return d(t,l,e,"post.title"),d(t,c,e,"post.content"),d(t,p,e,"post.createdDate"),d(t,s,e,"post.author"),i}}}();return{isHTMLBars:!0,revision:"Ember@1.11.1",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,d=a.hooks,i=d.get,o=d.block;n.detectNamespace(r);var l;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(l=this.build(n),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=n.cloneNode(this.cachedFragment,!0))):l=this.build(n);var c=n.createMorphAt(l,0,0,r);return n.insertBoundary(l,null),n.insertBoundary(l,0),o(a,c,t,"each",[i(a,t,"model.content")],{keyword:"post"},e,null),l}}}())}),define("ember2-blog/config/environment",["ember"],function(e){var t="ember2-blog";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("ember2-blog/tests/test-helper"):require("ember2-blog/app")["default"].create({name:"ember2-blog",version:"0.0.0.9d91e251"});