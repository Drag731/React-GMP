module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/",r.w={},r(r.s="MRYV")}({"+xd4":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getQuery=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r("pJjz"),o=r("5v02"),i={search:"",sortBy:o.DEFAULT_SORT,searchBy:o.DEFAULT_SEARCH};t.getQuery=function(e){var t=e.filter,r=t.search,n=t.searchBy,a=t.sortBy;return"genres"===n&&""!==r&&(r=r[0].toUpperCase()+r.slice(1)),"?search="+r+"&searchBy="+n+"&sortBy="+a+"&sortOrder=desc"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case a.SET_SORT_BY:return n({},e,{sortBy:t.payload});case a.SET_SEARCH_BY:return n({},e,{searchBy:t.payload});case a.SEARCH_MOVIE:return n({},e,{search:t.search});default:return e}}},"/82+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};r("5T7r");t.default=function(){return o.default.createElement("div",{className:"b-not-found"},o.default.createElement("div",{className:"b-not-found__wrap"},o.default.createElement("span",{className:"b-not-found__text"},"No films found")))}},"/tf0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilterBlockTest=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=p(r("cDcd")),o=r("h74D"),i=r("rKB8"),c=p(r("GdEl")),u=p(r("0Gzf")),s=r("pJjz"),l=r("+xd4"),d=r("1Odv"),f=r("r6xJ");function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return v.call(r),r.handlePop=r.handlePop.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"componentWillReceiveProps",value:function(e){this.props.sortBy!==e.sortBy&&(this.props.fetchMovies(e.query),this.setUrlParams(e))}},{key:"componentWillMount",value:function(){this.props.staticContext&&this.props.staticContext.isServer||addEventListener("popstate",this.handlePop),this.props.staticContext||""===this.props.location.search||this.transitionToURL(),this.props.total||this.props.fetchMovies(this.props.location.search)}},{key:"componentWillUnmount",value:function(){removeEventListener("popstate",this.handlePop)}},{key:"handlePop",value:function(){""!==this.props.location.search&&this.transitionToURL(),this.props.fetchMovies(this.props.location.search)}},{key:"render",value:function(){var e=this.props,t=e.search,r=e.total,n=e.searchBy,o=e.sortBy;return a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,{handleSearch:this.handleSearch,handleSearchButton:this.handleSearchButton,handleTitleSearch:this.handleTitleSearch,handleGenresSearch:this.handleGenresSearch,handleEnterPress:this.handleEnterPress,search:t,searchBy:n}),a.default.createElement(c.default,{total:r,handleReleaseDateSort:this.handleReleaseDateSort,handleRatingSort:this.handleRatingSort,sortBy:o}))}}]),t}(),v=function(){var e=this;this.handleSearch=function(t){e.props.handleSearch(t)},this.handleSearchButton=function(){e.props.handleSearchButton(),e.props.fetchMovies(e.props.query),e.setUrlParams()},this.setUrlParams=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props;t.history.push({pathname:t.location.pathname,search:t.query})},this.handleTitleSearch=function(){e.props.setSearchBy("title")},this.handleGenresSearch=function(){e.props.setSearchBy("genres")},this.handleReleaseDateSort=function(){e.props.setSortBy("release_date")},this.handleRatingSort=function(){e.props.setSortBy("vote_average")},this.handleEnterPress=function(t){13===t.keyCode&&(e.props.handleEnterPress(),e.props.fetchMovies(e.props.query),e.setUrlParams())},this.transitionToURL=function(){var t=new URLSearchParams(e.props.location.search);e.props.setSearchBy(t.get("searchBy")),e.props.setSortBy(t.get("sortBy")),e.props.handleSearch(t.get("search"))}};t.default=(0,o.connect)(function(e){return{total:(0,f.getTotal)(e),query:(0,l.getQuery)(e),search:e.filter.search,searchBy:e.filter.searchBy,sortBy:e.filter.sortBy}},function(e){return(0,i.bindActionCreators)({handleSearch:function(e){return(0,s.handleSearch)(e)},setSearchBy:function(e){return(0,s.setSearchBy)(e)},setSortBy:function(e){return(0,s.setSortBy)(e)},handleSearchButton:function(){return(0,s.handleSearchButton)()},handleEnterPress:function(){return(0,s.handleEnterPress)()},fetchMovies:function(e){return(0,d.fetchMovies)(e)}},e)})(h);t.FilterBlockTest=h},"07vq":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("V+jL"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.movies,r=e.handleGoToDescriptionPage;return n.default.createElement("div",{className:"movie-items"},t&&t.map(function(e){return n.default.createElement(a.default,{item:e,key:e.id,handleGoToDescriptionPage:r})}))}},"0Gzf":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r("cDcd")),a=c(r("frg8")),o=c(r("Qaj8")),i=c(r("E53v"));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.handleSearch,r=e.handleSearchButton,c=e.handleTitleSearch,u=e.handleEnterPress,s=e.handleGenresSearch,l=e.search,d=e.searchBy;return n.default.createElement("div",{className:"main-page__header b-header"},n.default.createElement(a.default,{description:!1}),n.default.createElement(o.default,{handleSearch:t,handleEnterPress:u,search:l}),n.default.createElement(i.default,{handleTitleSearch:c,handleGenresSearch:s,handleSearchButton:r,search:l,searchBy:d}))}},"19aK":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("rKB8"),a=c(r("r6xJ")),o=c(r("+xd4")),i=c(r("HXPF"));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.combineReducers)({movies:a.default,filter:o.default,description:i.default})},"1Odv":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.goToDescription=t.receiveMoviesState=t.fetchMovies=t.FETCH_MOVIES=t.GO_TO_DESCRIPTION=t.ADD_MOVIES=void 0,t.receiveMoviesDB=f,t.watchFetchMovies=p,t.moviesSaga=h;var n=r("RmXt"),a=r("K8x0"),o=regeneratorRuntime.mark(f),i=regeneratorRuntime.mark(p),c=regeneratorRuntime.mark(h),u=t.ADD_MOVIES="ADD_MOVIES",s=t.GO_TO_DESCRIPTION="GO_TO_DESCRIPTION",l=t.FETCH_MOVIES="FETCH_MOVIES",d=(t.fetchMovies=function(e){return{type:l,query:e}},t.receiveMoviesState=function(e){return{type:u,payload:e}});t.goToDescription=function(){return{type:s}};function f(e){var t,r=e.query;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.call)(a.getMovies,r);case 2:return t=e.sent,e.next=5,(0,n.put)(d(t));case 5:case"end":return e.stop()}},o,this)}function p(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.takeLatest)("FETCH_MOVIES",f);case 2:case"end":return e.stop()}},i,this)}function h(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.all)([p()]);case 2:case"end":return e.stop()}},c,this)}},"1fKG":function(e,t){e.exports=require("redux-saga")},"2ii+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.handler,r=e.children,n=e.style,a=e.className,i=void 0===a?"":a;return o.default.createElement("button",{onClick:t,style:n,className:i},r)}},"5T7r":function(e,t){},"5v02":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DEFAULT_SORT="release_date",t.DEFAULT_SEARCH="title"},"64fX":function(e,t){},"6qGl":function(e,t){},"71L/":function(e,t){},"7ITC":function(e,t){e.exports=require("react-dom/server")},"8Vax":function(e,t){e.exports=require("babel-polyfill")},"9ClG":function(e,t){e.exports=require("react-hot-loader")},BlXX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};r("xTqy");t.default=function(){return o.default.createElement("div",{className:"b-not-found"},o.default.createElement("div",{className:"b-not-found__wrap"},o.default.createElement("span",{className:"b-not-found__text"},"404 Page not found")))}},E53v:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("2ii+"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.handleTitleSearch,r=e.handleGenresSearch,o=e.handleSearchButton,i=e.searchBy,c=e.search;return n.default.createElement("div",{className:"b-header__choice choice-flex"},n.default.createElement("div",{className:"choice-flex__item"},n.default.createElement("span",{className:"b-header__choice-text"},"search by"),n.default.createElement(a.default,{handler:t,className:"title"===i?"b-header__button_active":"b-header__button"},"title"),n.default.createElement(a.default,{handler:r,className:"genres"===i?"b-header__button_active":"b-header__button"},"genres")),n.default.createElement("div",{className:"choice-flex__item"},n.default.createElement(a.default,{handler:o,style:{background:""===c?"#ccc":"red",pointerEvents:""===c?"none":"auto"}},"search")))}},GdEl:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.handleReleaseDateSort,r=e.handleRatingSort,n=e.total,a=e.sortBy;return o.default.createElement("div",{className:"main-page__result b-result"},o.default.createElement("div",{className:"b-result__text-wrap"},o.default.createElement("span",{className:"b-result__text"},n," movies found")),o.default.createElement("div",{className:"b-result__sort-wrap"},o.default.createElement("span",{className:"b-result__sort-text"},"Sort by:"),o.default.createElement("span",{onClick:t,className:"release_date"===a?"b-result__sort-item_active":"b-result__sort-item"},"release date"),o.default.createElement("span",{onClick:r,className:"vote_average"===a?"b-result__sort-item_active":"b-result__sort-item"},"rating")))}},HXPF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGenre=t.getMovies=t.getMovie=t.getIsLoadingMovie=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r("g+Vg"),o=r("1Odv"),i={genres:[],isLoadingMovie:!0,movie:{},movies:[]};t.getIsLoadingMovie=function(e){return e.description.isLoadingMovie},t.getMovie=function(e){return e.description.movie},t.getMovies=function(e){return e.description.movies},t.getGenre=function(e){return e.description.genres};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case a.ADD_MOVIE:return n({},e,{isLoadingMovie:!1,movie:t.payload,genres:t.payload.genres});case a.FETCH_MOVIE:return n({},e,{isLoadingMovie:!0});case o.ADD_MOVIES:return n({},e,{movies:t.payload.data});case a.CHANGE_LOADING:case o.GO_TO_DESCRIPTION:return n({},e,{isLoadingMovie:!0});default:return e}}},JQVm:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.poster_path,r=e.title,n=e.tagline,a=e.release_date,i=e.runtime,c=e.overview;return o.default.createElement("div",{className:"b-header-info"},o.default.createElement("div",{className:"b-header-info__img"},o.default.createElement("img",{src:t,className:"b-header-info__img-pic",alt:""})),o.default.createElement("div",{className:"b-header-info__about"},o.default.createElement("div",{className:"b-header-info__about-title"},r),n&&o.default.createElement("div",{className:"b-header-info__about-tagline"},n),o.default.createElement("div",{className:"b-header-info__about-year b-year"},o.default.createElement("span",{className:"b-year__release-date"},a),o.default.createElement("span",{className:"b-year__runtime"},i)),o.default.createElement("div",null,c)))}},K8x0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMovie=t.getMovies=void 0;var n,a=r("zr5I"),o=(n=a)&&n.__esModule?n:{default:n};t.getMovies=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.default.get("http://react-cdp-api.herokuapp.com/movies"+e).then(function(e){return e.data})},t.getMovie=function(e){return o.default.get("http://react-cdp-api.herokuapp.com/movies/"+e).then(function(e){return e.data})}},MRYV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientStats;return function(e,r){var l=(0,s.default)(),d={isServer:!0},f=n.default.createElement(u.default,{context:d,location:e.url,Router:o.StaticRouter,store:l});l.runSaga().done.then(function(){var e=(0,a.renderToString)(f),n=(0,i.flushChunkNames)(),o=(0,c.default)(t,{chunkNames:n}),u=o.js,s=o.styles,p=o.cssHash;o.scripts,o.styleshets;if(d.url)return r.writeHead(302,{Location:d.url}),void r.end();var h=l.getState();r.send(function(e,t,r,n,a,o,i){return'\n      <!doctype html>\n      <html>\n        <head>\n          <meta charset=utf-8>\n          <title>React Server Side Rendering</title>\n          <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n          '+n+'\n        </head>\n        <body>\n          <div id="root">'+e+"</div>\n          <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n            window.PRELOADED_STATE = "+JSON.stringify(t).replace(/</g,"\\<")+"\n          <\/script>\n          \n          "+a+"\n          "+r+"\n        </body>\n      </html>\n  "}(e,h,u,s,p))}),(0,a.renderToString)(f),l.close()}};var n=l(r("cDcd")),a=r("7ITC"),o=r("oncg"),i=r("gare"),c=l(r("UhNb")),u=l(r("qzys")),s=l(r("y9aR"));function l(e){return e&&e.__esModule?e:{default:e}}},"Mm+R":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("cDcd"),i=(n=o)&&n.__esModule?n:{default:n};var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={hasError:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.default.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}();t.default=c},Qaj8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){var t=e.handleSearch,r=e.handleEnterPress,n=e.search;return o.default.createElement("div",{className:"b-header__search"},o.default.createElement("span",{className:"b-header__search-title"},"find your movie"),o.default.createElement("input",{onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return r(e)},className:"b-header__search-input",type:"search",placeholder:"search",value:n}))}},RmXt:function(e,t){e.exports=require("redux-saga/effects")},UhNb:function(e,t){e.exports=require("webpack-flush-chunks")},"V+jL":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n},i=r("oncg");t.default=function(e){var t=e.item,r=e.handleGoToDescriptionPage;return o.default.createElement("div",{className:"movie-items__item b-item"},o.default.createElement("div",{className:"b-item__img-wrap"},o.default.createElement("img",{className:"b-item__img-pic",src:t.poster_path,alt:""})),o.default.createElement("div",{className:"b-item__title-wrap"},o.default.createElement(i.Link,{to:"/filmzilla/description/"+t.id,className:"b-item__title-link",onClick:r},o.default.createElement("span",{className:"b-item__title-text"},t.title)),o.default.createElement("span",{className:"b-item__title-year"},t.release_date)),o.default.createElement("div",{className:"b-item__ganre-wrap"},o.default.createElement("span",{className:"b-item__ganre-text"},t.genres.join(" & "))))}},"W+0S":function(e,t){e.exports=require("isomorphic-fetch")},W9uJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DescriptionPageTest=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=v(r("cDcd")),o=r("h74D"),i=r("rKB8"),c=v(r("Mm+R")),u=v(r("frg8")),s=v(r("07vq")),l=v(r("JQVm")),d=v(r("BlXX")),f=r("g+Vg"),p=r("HXPF"),h=r("1Odv");function v(e){return e&&e.__esModule?e:{default:e}}r("6qGl");var _=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleGoSearchPage=function(){r.props.goToSearch()},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"componentWillMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.fetchMovies()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.id;t&&this.props.match.params.id!==t&&(this.props.changeIsLoading(),this.props.fetchMovie(t),this.props.fetchMovies("?"+e.genres[0]))}},{key:"render",value:function(){var e=this.props.movie;return a.default.createElement(c.default,null,a.default.createElement(a.default.Fragment,null,this.props.isLoadingMovie?"Loading...":e.genres?a.default.createElement("div",{className:"description-page container"},a.default.createElement("div",{className:"description-page__header b-header"},a.default.createElement(u.default,{description:!0,handleGoSearchPage:this.handleGoSearchPage}),a.default.createElement(l.default,this.props.movie)),a.default.createElement("div",{className:"description-page__genre-result"},"Film by ",this.props.genres[0]," genre"),a.default.createElement(s.default,{movies:this.props.movies})):a.default.createElement(d.default,null)))}}]),t}();t.default=(0,o.connect)(function(e){return{movie:(0,p.getMovie)(e),genres:(0,p.getGenre)(e),isLoadingMovie:(0,p.getIsLoadingMovie)(e),movies:(0,p.getMovies)(e)}},function(e){return(0,i.bindActionCreators)({changeIsLoading:function(){return(0,f.changeIsLoading)()},goToSearch:function(){return(0,f.goToSearch)()},fetchMovie:function(e){return(0,f.fetchMovie)(e)},fetchMovies:function(){return(0,h.fetchMovies)()}},e)})(_);t.DescriptionPageTest=_},YhH6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rootSaga=void 0;var n=r("RmXt"),a=r("1Odv"),o=r("g+Vg"),i=regeneratorRuntime.mark(c);function c(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.all)([(0,a.moviesSaga)(),(0,o.descriptionSaga)()]);case 2:case"end":return e.stop()}},i,this)}t.rootSaga=c},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},cDcd:function(e,t){e.exports=require("react")},frg8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n},i=r("oncg");r("71L/");t.default=function(e){var t=e.description,r=e.handleGoSearchPage;return o.default.createElement("div",{className:"b-header__logo-wrap"},o.default.createElement("h1",{className:"b-header__logo-text"},"Filmzilla"),t&&o.default.createElement(i.Link,{to:"/filmzilla",className:"b-header__logo-link",onClick:r},"search"))}},"g+Vg":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.receiveMovieState=t.fetchMovie=t.goToSearch=t.changeIsLoading=t.FETCH_MOVIE=t.GO_TO_SEARCH=t.CHANGE_LOADING=t.ADD_MOVIE=void 0,t.receiveMovieDB=p,t.watchFetchMovie=h,t.descriptionSaga=v;var n=r("RmXt"),a=r("K8x0"),o=regeneratorRuntime.mark(p),i=regeneratorRuntime.mark(h),c=regeneratorRuntime.mark(v),u=t.ADD_MOVIE="ADD_MOVIE",s=t.CHANGE_LOADING="CHANGE_LOADING",l=t.GO_TO_SEARCH="GO_TO_SEARCH",d=t.FETCH_MOVIE="FETCH_MOVIE",f=(t.changeIsLoading=function(){return{type:s}},t.goToSearch=function(){return{type:l}},t.fetchMovie=function(e){return{type:d,id:e}},t.receiveMovieState=function(e){return{type:u,payload:e}});function p(e){var t,r=e.id;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.call)(a.getMovie,r);case 2:return t=e.sent,e.next=5,(0,n.put)(f(t));case 5:case"end":return e.stop()}},o,this)}function h(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.takeLatest)("FETCH_MOVIE",p);case 2:case"end":return e.stop()}},i,this)}function v(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.all)([h()]);case 2:case"end":return e.stop()}},c,this)}},gare:function(e,t){e.exports=require("react-universal-component/server")},h74D:function(e,t){e.exports=require("react-redux")},lE3a:function(e,t){},oncg:function(e,t){e.exports=require("react-router-dom")},pJjz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.SEARCH_MOVIE="SEARCH_MOVIE",a=t.SET_SORT_BY="SET_SORT_BY",o=t.SET_SEARCH_BY="SET_SEARCH_BY",i=t.SEARCH_BUTTON="SEARCH_BUTTON",c=t.PRESS_ENTER_BUTTON="PRESS_ENTER_BUTTON";t.handleSearch=function(e){return{type:n,search:e}},t.handleSearchButton=function(){return{type:i}},t.handleEnterPress=function(){return{type:c}},t.setSearchBy=function(e){return{type:o,payload:e}},t.setSortBy=function(e){return{type:a,payload:e}}},qzys:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),r("W+0S"),r("8Vax");var n=d(r("cDcd")),a=r("9ClG"),o=r("oncg"),i=r("h74D"),c=d(r("xOdi")),u=d(r("W9uJ")),s=d(r("s4cb")),l=d(r("BlXX"));function d(e){return e&&e.__esModule?e:{default:e}}r("lE3a");var f=function(e){var t=e.Router,r=e.location,a=e.context,d=e.store;return n.default.createElement(i.Provider,{store:d},n.default.createElement(t,{location:r,context:a},n.default.createElement(n.default.Fragment,null,n.default.createElement(o.Switch,null,n.default.createElement(o.Route,{exact:!0,path:"/filmzilla",component:c.default}),n.default.createElement(o.Route,{path:"/filmzilla/description/:id",component:u.default}),n.default.createElement(o.Route,{path:"*",component:l.default})),n.default.createElement(s.default,null))))};f.defaultProps={location:null,context:null},t.default=(0,a.hot)(e)(f)}).call(this,r("YuTi")(e))},r6xJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTotal=t.getData=t.getIsLoadingMovies=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r("1Odv"),o=r("pJjz"),i=r("g+Vg"),c={movies:[],total:0,isLoadingMovies:!0};t.getIsLoadingMovies=function(e){return e.movies.isLoadingMovies},t.getData=function(e){return e.movies.movies},t.getTotal=function(e){return e.movies.total};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case a.ADD_MOVIES:return n({},e,{isLoadingMovies:!1,movies:t.payload.data,total:t.payload.total});case a.FETCH_MOVIES:return n({},e,{isLoadingMovies:!0});case o.SEARCH_BUTTON:case i.GO_TO_SEARCH:case o.SET_SORT_BY:case o.PRESS_ENTER_BUTTON:return n({},e);default:return e}}},rKB8:function(e,t){e.exports=require("redux")},s4cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("cDcd"),o=(n=a)&&n.__esModule?n:{default:n};r("64fX");t.default=function(){return o.default.createElement("div",{className:"footer"},o.default.createElement("div",{className:"footer__wrap"},o.default.createElement("span",{className:"footer__text"},"Filmzilla")))}},xOdi:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainPageTest=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r("cDcd")),o=r("h74D"),i=f(r("Mm+R")),c=f(r("07vq")),u=f(r("/82+")),s=f(r("/tf0")),l=r("1Odv"),d=r("r6xJ");function f(e){return e&&e.__esModule?e:{default:e}}r("z7kh");var p={goToDescription:function(){return(0,l.goToDescription)()}},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleGoToDescriptionPage=function(){r.props.goToDescription()},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.movies,r=e.total,n=e.isLoadingMovies;return a.default.createElement(i.default,null,a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"main-page container"},a.default.createElement(s.default,this.props),n?"Loading...":r?a.default.createElement(c.default,{movies:t,handleGoToDescriptionPage:this.handleGoToDescriptionPage}):a.default.createElement(u.default,null))))}}]),t}();t.default=(0,o.connect)(function(e){return{movies:(0,d.getData)(e),total:(0,d.getTotal)(e),isLoadingMovies:(0,d.getIsLoadingMovies)(e)}},p)(h);t.MainPageTest=h},xTqy:function(e,t){},y9aR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("rKB8"),a=u(r("19aK")),o=r("1fKG"),i=u(o),c=r("YhH6");function u(e){return e&&e.__esModule?e:{default:e}}var s=(0,i.default)(),l=function(e){return e};process.browser,t.default=function(e){var t=(0,n.createStore)(a.default,e,(0,n.compose)((0,n.applyMiddleware)(s),l));return s.run(c.rootSaga),t.runSaga=function(){return s.run(c.rootSaga)},t.close=function(){return t.dispatch(o.END)},t}},z7kh:function(e,t){},zr5I:function(e,t){e.exports=require("axios")}});