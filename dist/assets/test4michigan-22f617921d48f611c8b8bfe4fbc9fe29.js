"use strict"
define("test4michigan/app",["exports","test4michigan/resolver","ember-load-initializers","test4michigan/config/environment"],function(e,t,i,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,i.default)(n,a.default.modulePrefix)
var r=n
e.default=r}),define("test4michigan/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{showPerson:function(e){alert(e)}}})
e.default=t}),define("test4michigan/helpers/app-version",["exports","test4michigan/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function a(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.default.APP.version,r=a.versionOnly||a.hideSha,o=a.shaOnly||a.hideVersion,l=null
return r&&(a.showExtended&&(l=n.match(i.versionExtendedRegExp)),l||(l=n.match(i.versionRegExp))),o&&(l=n.match(i.shaRegExp)),l?l[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var n=Ember.Helper.helper(a)
e.default=n}),define("test4michigan/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("test4michigan/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("test4michigan/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","test4michigan/config/environment"],function(e,t,i){var a,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(a=i.default.APP.name,n=i.default.APP.version)
var r={name:"App Version",initialize:(0,t.default)(a,n)}
e.default=r}),define("test4michigan/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("test4michigan/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("test4michigan/initializers/export-application-global",["exports","test4michigan/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var a,n=t.default.exportApplicationGlobal
a="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var a={name:"export-application-global",initialize:i}
e.default=a}),define("test4michigan/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("test4michigan/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("test4michigan/router",["exports","test4michigan/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.route("scientists")})
var a=i
e.default=a}),define("test4michigan/routes/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})
e.default=t}),define("test4michigan/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test4michigan/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"ENbQ71Nb",block:'{"symbols":[],"statements":[[7,"h1"],[9],[0,"PeopleTracker"],[10],[0,"\\n\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"test4michigan/templates/application.hbs"}})
e.default=t}),define("test4michigan/templates/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"SRZQ761Z",block:'{"symbols":["person"],"statements":[[7,"h2"],[9],[1,[22,0,["title"]],false],[10],[0,"\\n\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[22,0,["people"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[1,[22,1,[]],false],[3,"action",[[22,0,[]],"showPerson",[22,1,[]]]],[10],[0,"\\n"]],"parameters":[1]},null],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"test4michigan/templates/components/people-list.hbs"}})
e.default=t}),define("test4michigan/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"MR+NqtcI",block:'{"symbols":[],"statements":[[5,"people-list",[],[["@title","@people"],["List of Scientists",[22,0,["model"]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"test4michigan/templates/scientists.hbs"}})
e.default=t}),define("test4michigan/config/environment",[],function(){try{var e="test4michigan/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(unescape(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("test4michigan/app").default.create({name:"test4michigan",version:"0.0.0+4b1abd88"})
