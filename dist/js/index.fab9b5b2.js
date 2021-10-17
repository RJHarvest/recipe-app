(function(t){function e(e){for(var a,n,c=e[0],o=e[1],d=e[2],m=0,u=[];m<c.length;m++)n=c[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,c=1;c<r.length;c++){var o=r[c];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={index:0},s=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/recipe-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=o;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"096e":function(t,e,r){t.exports=r.p+"img/breakfast.b4501200.png"},"2e9f":function(t,e,r){t.exports=r.p+"img/logo-small-transparent.247f068f.png"},"34b3":function(t,e,r){},"49c8":function(t,e,r){t.exports=r.p+"img/tacos.79c0ff9c.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],n={name:"App"},c=n,o=(r("034f"),r("2877")),d=Object(o["a"])(c,i,s,!1,null,null,null),l=d.exports,m=r("43f9"),u=r.n(m),p=r("8c4f"),v=r("130e"),f=r("bc3a"),h=r.n(f),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),t._m(0),a("div",{staticClass:"md-layout md-gutter test"},[a("div",{staticClass:"md-layout-item md-size-33"},[a("md-card",{attrs:{"md-with-hover":""}},[a("md-card-header",[a("md-card-media",{attrs:{"md-medium":""}},[a("img",{attrs:{src:r("e94c"),alt:"quesadilla"}})]),a("md-card-header-text",[a("div",{staticClass:"md-title"},[t._v("Mexican Cuisine")]),a("div",{staticClass:"md-subhead"},[t._v("Get recipe of cuisines around the world")]),a("md-button",{staticClass:"md-icon-button",attrs:{to:"/cuisine?filter=mexican"}},[a("md-icon",{staticClass:"md-size-2x"},[t._v("play_circle")])],1)],1)],1)],1)],1),a("div",{staticClass:"md-layout-item md-size-33"},[a("md-card",{attrs:{"md-with-hover":""}},[a("md-card-header",[a("md-card-media",{attrs:{"md-medium":""}},[a("img",{attrs:{src:r("7f14"),alt:"chicken kebabs"}})]),a("md-card-header-text",[a("div",{staticClass:"md-title"},[t._v("Chicken Recipes")]),a("div",{staticClass:"md-subhead"},[t._v("Get recipe based on an ingredient")]),a("md-button",{staticClass:"md-icon-button",attrs:{to:"/recipe?filter=chicken"}},[a("md-icon",{staticClass:"md-size-2x"},[t._v("play_circle")])],1)],1)],1)],1)],1),a("div",{staticClass:"md-layout-item md-size-33"},[a("md-card",{attrs:{"md-with-hover":""}},[a("md-card-header",[a("md-card-media",{attrs:{"md-medium":""}},[a("img",{attrs:{src:r("096e"),alt:"breakfast"}})]),a("md-card-header-text",[a("div",{staticClass:"md-title"},[t._v("Breakfast Meals")]),a("div",{staticClass:"md-subhead"},[t._v("Get different categories of recipes")]),a("md-button",{staticClass:"md-icon-button",attrs:{to:"/meal?filter=breakfast"}},[a("md-icon",{staticClass:"md-size-2x"},[t._v("play_circle")])],1)],1)],1)],1)],1)])],1)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-40 text"},[a("h1",{staticClass:"title"},[t._v("Become Your Own Chef")]),a("h3",{staticClass:"subtitle"},[t._v("Last destination to find recipes or your food addiction")])]),a("div",{staticClass:"md-layout-item md-size-60"},[a("img",{attrs:{src:r("49c8"),alt:"tacos"}})])])}],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{attrs:{"md-elevation":"0"}},[a("div",{staticClass:"md-toolbar-section-start"},[a("img",{staticClass:"logo",attrs:{src:r("2e9f"),alt:"logo"}}),a("md-button",{attrs:{to:"/"}},[t._v("Home")]),a("md-button",{attrs:{to:"/cuisine"}},[t._v("Cuisine")]),a("md-button",{attrs:{to:"/recipe"}},[t._v("Recipes")]),a("md-button",{attrs:{to:"/meal"}},[t._v("Meals")])],1),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("search")])],1)],1)])},y=[],w={name:"navbar"},C=w,x=(r("b289"),Object(o["a"])(C,_,y,!1,null,"916187fe",null)),k=x.exports,R={name:"home",components:{Navbar:k}},z=R,O=(r("8cb1"),Object(o["a"])(z,g,b,!1,null,"3bc701a8",null)),j=O.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"recipe-section"},[r("md-snackbar",{attrs:{"md-position":"center","md-duration":"4000","md-active":t.showError},on:{"update:mdActive":function(e){t.showError=e},"update:md-active":function(e){t.showError=e}}},[r("span",[t._v(t._s(t.error))])]),r("md-drawer",{attrs:{"md-active":t.showFilters,"md-swipeable":""},on:{"update:mdActive":function(e){t.showFilters=e},"update:md-active":function(e){t.showFilters=e}}},[r("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[r("span",{staticClass:"md-title"},[t._v("Filter By Cuisne")])]),r("md-list",t._l(t.areas,(function(e,a){return r("md-list-item",{key:a,on:{click:function(r){return t.getRecipes(e.strArea)}}},[r("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.strArea))])])})),1)],1),r("div",{staticClass:"md-layout md-alignment-center-center"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("md-button",{on:{click:function(e){t.showFilters=!0}}},[t._v("Filters")])],1),t.isLoading?r("div",{staticClass:"md-layout-item md-size-100"},[r("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":5,"md-mode":"indeterminate"}})],1):r("div",{staticClass:"md-layout-item md-layout"},[t.recipes?t._l(t.recipes,(function(e){return r("div",{key:e.idMeal,staticClass:"md-layout-item md-size-33"},[r("md-card",[r("md-card-media-cover",{attrs:{"md-text-scrim":""}},[r("md-card-media",[r("img",{attrs:{src:e.strMealThumb,alt:e.strMeal,loading:"lazy"}})]),r("md-card-area",[r("md-card-header",[r("span",{staticClass:"md-title"},[t._v(t._s(e.strMeal))])]),r("md-card-actions",[r("md-button",{attrs:{to:t.getRecipeLink(e.idMeal)}},[t._v("View")])],1)],1)],1)],1)],1)})):r("div",{staticClass:"md-layout-item md-size-100"},[r("md-empty-state",{attrs:{"md-icon":"no_meals","md-label":"No Recipes Found","md-description":"Select a cuisine to display a list of recipes."}},[r("md-button",{staticClass:"md-primary md-raised",on:{click:function(e){t.showFilters=!0}}},[t._v("Select a cuisine")])],1)],1)],2)])],1)],1)},E=[],M=r("1da1"),L=(r("96cf"),r("4de4"),{name:"recipe",components:{Navbar:k},data:function(){return{areas:[],recipes:null,isLoading:!1,showError:!1,showFilters:!1,error:null}},mounted:function(){this.getAreas(),this.getRecipes(this.$route.query.filter)},methods:{getAreas:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("list.php?a=list");case 3:r=e.sent,t.areas=r.data.meals,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0,t.showError=!0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getRecipes:function(){var t=arguments,e=this;return Object(M["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"",r.prev=1,e.isLoading=!0,r.next=5,e.axios.get("filter.php?a=".concat(a));case 5:i=r.sent,e.recipes=i.data.meals,r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),e.error=r.t0,e.showError=!0;case 13:e.showFilters=!1,e.isLoading=!1;case 15:case"end":return r.stop()}}),r,null,[[1,9]])})))()},getRecipeLink:function(t){return"/detail/".concat(t)}}}),$=L,I=(r("c289"),Object(o["a"])($,F,E,!1,null,"4edaf4b6",null)),N=I.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"recipe-section"},[r("md-snackbar",{attrs:{"md-position":"center","md-duration":"4000","md-active":t.showError},on:{"update:mdActive":function(e){t.showError=e},"update:md-active":function(e){t.showError=e}}},[r("span",[t._v(t._s(t.error))])]),r("md-drawer",{attrs:{"md-active":t.showFilters,"md-swipeable":""},on:{"update:mdActive":function(e){t.showFilters=e},"update:md-active":function(e){t.showFilters=e}}},[r("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[r("span",{staticClass:"md-title"},[t._v("Filter By Ingredients")])]),r("md-list",t._l(t.ingredients,(function(e){return r("md-list-item",{key:e.idIngredient,on:{click:function(r){return t.getRecipes(e.strIngredient)}}},[r("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.strIngredient))])])})),1)],1),r("div",{staticClass:"md-layout md-alignment-center-center"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("md-button",{on:{click:function(e){t.showFilters=!0}}},[t._v("Filters")])],1),t.isLoading?r("div",{staticClass:"md-layout-item md-size-100"},[r("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":5,"md-mode":"indeterminate"}})],1):r("div",{staticClass:"md-layout-item md-layout"},[t.recipes?t._l(t.recipes,(function(e){return r("div",{key:e.idMeal,staticClass:"md-layout-item md-size-33"},[r("md-card",[r("md-card-media-cover",{attrs:{"md-text-scrim":""}},[r("md-card-media",[r("img",{attrs:{src:e.strMealThumb,alt:e.strMeal}})]),r("md-card-area",[r("md-card-header",[r("span",{staticClass:"md-title"},[t._v(t._s(e.strMeal))])]),r("md-card-actions",[r("md-button",{attrs:{to:t.getRecipeLink(e.idMeal)}},[t._v("View")])],1)],1)],1)],1)],1)})):r("div",{staticClass:"md-layout-item md-size-100"},[r("md-empty-state",{attrs:{"md-icon":"no_meals","md-label":"No Recipes Found","md-description":"Select an ingredient to display a list of recipes."}},[r("md-button",{staticClass:"md-primary md-raised",on:{click:function(e){t.showFilters=!0}}},[t._v("Select an ingredient")])],1)],1)],2)])],1)],1)},A=[],T={name:"recipe",components:{Navbar:k},data:function(){return{ingredients:[],recipes:[],isLoading:!1,showError:!1,showFilters:!1,error:null}},mounted:function(){this.getIngredients(),this.getRecipes(this.$route.query.filter)},methods:{getIngredients:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("list.php?i=list");case 3:r=e.sent,t.ingredients=r.data.meals,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0,t.isError=!0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getRecipes:function(){var t=arguments,e=this;return Object(M["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"",r.prev=1,e.isLoading=!0,r.next=5,e.axios.get("filter.php?i=".concat(a));case 5:i=r.sent,e.recipes=i.data.meals,e.isLoading=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](1),e.error=r.t0,e.isError=!0;case 14:e.showFilters=!1,e.isLoading=!1;case 16:case"end":return r.stop()}}),r,null,[[1,10]])})))()},getRecipeLink:function(t){return"/detail/".concat(t)}}},P=T,B=(r("9107"),Object(o["a"])(P,S,A,!1,null,"687cb57a",null)),q=B.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"recipe-section"},[r("md-snackbar",{attrs:{"md-position":"center","md-active":t.showError},on:{"update:mdActive":function(e){t.showError=e},"update:md-active":function(e){t.showError=e}}},[r("span",[t._v(t._s(t.error))])]),r("md-drawer",{attrs:{"md-active":t.showFilters,"md-swipeable":""},on:{"update:mdActive":function(e){t.showFilters=e},"update:md-active":function(e){t.showFilters=e}}},[r("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[r("span",{staticClass:"md-title"},[t._v("Filter By Categories")])]),r("md-list",t._l(t.categories,(function(e,a){return r("md-list-item",{key:a,on:{click:function(r){return t.getRecipes(e.strCategory)}}},[r("span",{staticClass:"md-list-item-text"},[t._v(t._s(e.strCategory))])])})),1)],1),r("div",{staticClass:"md-layout md-alignment-center-center"},[r("div",{staticClass:"md-layout-item md-size-100"},[r("md-button",{on:{click:function(e){t.showFilters=!0}}},[t._v("Filters")])],1),t.isLoading?r("div",{staticClass:"md-layout-item md-size-100"},[r("md-progress-spinner",{attrs:{"md-diameter":100,"md-stroke":5,"md-mode":"indeterminate"}})],1):r("div",{staticClass:"md-layout-item md-layout"},[t.recipes?t._l(t.recipes,(function(e){return r("div",{key:e.idMeal,staticClass:"md-layout-item md-size-33"},[r("md-card",[r("md-card-media-cover",{attrs:{"md-text-scrim":""}},[r("md-card-media",[r("img",{attrs:{src:e.strMealThumb,alt:e.strMeal,loading:"lazy"}})]),r("md-card-area",[r("md-card-header",[r("span",{staticClass:"md-title"},[t._v(t._s(e.strMeal))])]),r("md-card-actions",[r("md-button",{attrs:{to:t.getRecipeLink(e.idMeal)}},[t._v("View Recipe")])],1)],1)],1)],1)],1)})):r("div",{staticClass:"md-layout-item md-size-100"},[r("md-empty-state",{attrs:{"md-icon":"no_meals","md-label":"No Recipes Found","md-description":"Select a category to display a list of recipes."}},[r("md-button",{staticClass:"md-primary md-raised",on:{click:function(e){t.showFilters=!0}}},[t._v("Select an category")])],1)],1)],2)])],1)],1)},G=[],D={name:"recipe",components:{Navbar:k},data:function(){return{categories:[],recipes:[],isLoading:!1,showError:!1,showFilters:!1,error:null}},mounted:function(){this.getCategories(),this.getRecipes(this.$route.query.filter)},methods:{getCategories:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("list.php?c=list");case 3:r=e.sent,t.categories=r.data.meals,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.error=e.t0,t.isError=!0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getRecipes:function(){var t=arguments,e=this;return Object(M["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"",r.prev=1,e.isLoading=!0,r.next=5,e.axios.get("filter.php?c=".concat(a));case 5:i=r.sent,e.recipes=i.data.meals,r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](1),e.error=r.t0,e.isError=!0;case 13:e.showFilters=!1,e.isLoading=!1;case 15:case"end":return r.stop()}}),r,null,[[1,9]])})))()},getRecipeLink:function(t){return"/detail/".concat(t)}}},J=D,Y=(r("7c70"),Object(o["a"])(J,V,G,!1,null,"447fb8ae",null)),H=Y.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"detail md-layout md-gutter"},[r("div",{staticClass:"md-layout-item md-large-size-100 md-xsmall-size-100"},[r("md-button",{staticClass:"md-raised md-dense back",on:{click:function(e){return t.$router.back()}}},[t._v("Back")])],1),r("div",{staticClass:"md-layout-item md-large-size-33 md-xsmall-size-100"},[r("h1",{staticClass:"title"},[t._v(t._s(t.recipe.strMeal))]),r("img",{attrs:{src:t.recipe.strMealThumb,alt:t.recipe.strMeal}}),r("div",{staticClass:"extra-buttons"},[r("md-button",{attrs:{href:t.recipe.strYoutube,target:"__blank",rel:"noopener noreferrer"}},[t._v("Video")]),r("md-button",{attrs:{href:t.recipe.strSource,target:"__blank",rel:"noopener noreferrer"}},[t._v("Source")])],1)]),r("div",{staticClass:"md-layout-item md-layout md-gutter md-large-size-66 md-xsmall-size-100"},[r("div",{staticClass:"md-layout-item md-size-100 header"},[r("h1",[t._v("Ingredients")]),r("md-divider")],1),t._l(t.recipe.ingredients,(function(e,a){return r("div",{key:a,staticClass:"md-layout-item md-large-size-25 md-xsmall-size-50 ingredients"},[r("li",[t._v(t._s(e.measurement)+" "+t._s(e.ingredient))])])})),r("div",{staticClass:"md-layout-item md-size-100 header"},[r("h1",[t._v("Instructions")]),r("md-divider")],1),r("div",{staticClass:"md-layout-item md-size-100"},[r("ol",{staticClass:"instructions"},t._l(t.recipe.instructions,(function(e,a){return r("li",{key:a},[t._v(t._s(e))])})),0)])],2)])],1)},K=[],Q=r("5530"),W=(r("d81d"),r("4fad"),r("caad"),r("2532"),r("498a"),r("ac1f"),r("1276"),{name:"recipe-details",components:{Navbar:k},data:function(){return{recipe:{}}},mounted:function(){console.log(this.$router),this.getRecipe(this.$route.params.mealId)},methods:{getRecipe:function(t){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.get("lookup.php?i=".concat(t));case 3:a=r.sent,i=e.formatRecipeDataObject(a.data.meals[0]),e.recipe=i,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log("Error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},formatRecipeDataObject:function(t){for(var e=Object.entries(t).filter((function(t){return t[0].includes("strIngredient")&&t[1]&&""!==t[1].trim()})).map((function(t){return t[1]})),r=Object.entries(t).filter((function(t){return t[0].includes("strMeasure")&&t[1]&&""!==t[1].trim()})).map((function(t){return t[1]})),a=[],i=0;i<e.length;i++)a.push({ingredient:e[i],measurement:r[i]});var s=Object(Q["a"])(Object(Q["a"])({},t),{},{ingredients:a,tags:t.strTags&&t.strTags.split(","),instructions:t.strInstructions&&t.strInstructions.split("\r\n")});return s}}}),X=W,Z=(r("67a3"),Object(o["a"])(X,U,K,!1,null,"015942f0",null)),tt=Z.exports,et=[{path:"/",component:j},{path:"/cuisine",component:N},{path:"/recipe",component:q},{path:"/meal",component:H},{path:"/detail/:mealId",component:tt}],rt=et,at=(r("51de"),r("e094"),new p["a"]({routes:rt}));a["default"].config.productionTip=!1,a["default"].use(p["a"]),a["default"].use(u.a),a["default"].use(v["a"],h.a),a["default"].axios.defaults.baseURL="https://www.themealdb.com/api/json/v1/1/",new a["default"]({render:function(t){return t(l)},router:at}).$mount("#app")},"659e":function(t,e,r){},"67a3":function(t,e,r){"use strict";r("659e")},"6eec":function(t,e,r){},"7c70":function(t,e,r){"use strict";r("a3cd")},"7f14":function(t,e,r){t.exports=r.p+"img/chicken-kebabs.dee054ae.png"},"85ec":function(t,e,r){},"8cb1":function(t,e,r){"use strict";r("aed9")},9107:function(t,e,r){"use strict";r("c0a8")},a3cd:function(t,e,r){},aed9:function(t,e,r){},b289:function(t,e,r){"use strict";r("34b3")},c0a8:function(t,e,r){},c289:function(t,e,r){"use strict";r("6eec")},e94c:function(t,e,r){t.exports=r.p+"img/quesadilla.34e03ba0.png"}});
//# sourceMappingURL=index.fab9b5b2.js.map