(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/82+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("q1tI"),o=(r=n)&&r.__esModule?r:{default:r};a("5T7r");t.default=function(){return o.default.createElement("div",{className:"b-not-found"},o.default.createElement("div",{className:"b-not-found__wrap"},o.default.createElement("span",{className:"b-not-found__text"},"No films found")))}},"/tf0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilterBlockTest=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=h(a("q1tI")),o=a("/MKj"),l=a("ANjH"),s=h(a("GdEl")),i=h(a("0Gzf")),c=a("pJjz"),u=a("+xd4"),d=a("1Odv"),f=a("r6xJ");function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return m.call(a),a.handlePop=a.handlePop.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){this.props.sortBy!==e.sortBy&&(this.props.fetchMovies(e.query),this.setUrlParams(e))}},{key:"componentWillMount",value:function(){this.props.staticContext&&this.props.staticContext.isServer||addEventListener("popstate",this.handlePop),this.props.staticContext||""===this.props.location.search||this.transitionToURL(),this.props.total||this.props.fetchMovies(this.props.location.search)}},{key:"componentWillUnmount",value:function(){removeEventListener("popstate",this.handlePop)}},{key:"handlePop",value:function(){""!==this.props.location.search&&this.transitionToURL(),this.props.fetchMovies(this.props.location.search)}},{key:"render",value:function(){var e=this.props,t=e.search,a=e.total,r=e.searchBy,o=e.sortBy;return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.default,{handleSearch:this.handleSearch,handleSearchButton:this.handleSearchButton,handleTitleSearch:this.handleTitleSearch,handleGenresSearch:this.handleGenresSearch,handleEnterPress:this.handleEnterPress,search:t,searchBy:r}),n.default.createElement(s.default,{total:a,handleReleaseDateSort:this.handleReleaseDateSort,handleRatingSort:this.handleRatingSort,sortBy:o}))}}]),t}(),m=function(){var e=this;this.handleSearch=function(t){e.props.handleSearch(t)},this.handleSearchButton=function(){e.props.handleSearchButton(),e.props.fetchMovies(e.props.query),e.setUrlParams()},this.setUrlParams=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props;t.history.push({pathname:t.location.pathname,search:t.query})},this.handleTitleSearch=function(){e.props.setSearchBy("title")},this.handleGenresSearch=function(){e.props.setSearchBy("genres")},this.handleReleaseDateSort=function(){e.props.setSortBy("release_date")},this.handleRatingSort=function(){e.props.setSortBy("vote_average")},this.handleEnterPress=function(t){13===t.keyCode&&(e.props.handleEnterPress(),e.props.fetchMovies(e.props.query),e.setUrlParams())},this.transitionToURL=function(){var t=new URLSearchParams(e.props.location.search);e.props.setSearchBy(t.get("searchBy")),e.props.setSortBy(t.get("sortBy")),e.props.handleSearch(t.get("search"))}};t.default=(0,o.connect)(function(e){return{total:(0,f.getTotal)(e),query:(0,u.getQuery)(e),search:e.filter.search,searchBy:e.filter.searchBy,sortBy:e.filter.sortBy}},function(e){return(0,l.bindActionCreators)({handleSearch:function(e){return(0,c.handleSearch)(e)},setSearchBy:function(e){return(0,c.setSearchBy)(e)},setSortBy:function(e){return(0,c.setSortBy)(e)},handleSearchButton:function(){return(0,c.handleSearchButton)()},handleEnterPress:function(){return(0,c.handleEnterPress)()},fetchMovies:function(e){return(0,d.fetchMovies)(e)}},e)})(p);t.FilterBlockTest=p},"07vq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a("q1tI")),n=o(a("V+jL"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.movies,a=e.handleGoToDescriptionPage;return r.default.createElement("div",{className:"movie-items"},t&&t.map(function(e){return r.default.createElement(n.default,{item:e,key:e.id,handleGoToDescriptionPage:a})}))}},"0Gzf":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a("q1tI")),n=s(a("frg8")),o=s(a("Qaj8")),l=s(a("E53v"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.handleSearch,a=e.handleSearchButton,s=e.handleTitleSearch,i=e.handleEnterPress,c=e.handleGenresSearch,u=e.search,d=e.searchBy;return r.default.createElement("div",{className:"main-page__header b-header"},r.default.createElement(n.default,{description:!1}),r.default.createElement(o.default,{handleSearch:t,handleEnterPress:i,search:u}),r.default.createElement(l.default,{handleTitleSearch:s,handleGenresSearch:c,handleSearchButton:a,search:u,searchBy:d}))}},"2ii+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("q1tI"),o=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.handler,a=e.children,r=e.style,n=e.className,l=void 0===n?"":n;return o.default.createElement("button",{onClick:t,style:r,className:l},a)}},"5T7r":function(e,t,a){},"71L/":function(e,t,a){},E53v:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a("q1tI")),n=o(a("2ii+"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.handleTitleSearch,a=e.handleGenresSearch,o=e.handleSearchButton,l=e.searchBy,s=e.search;return r.default.createElement("div",{className:"b-header__choice choice-flex"},r.default.createElement("div",{className:"choice-flex__item"},r.default.createElement("span",{className:"b-header__choice-text"},"search by"),r.default.createElement(n.default,{handler:t,className:"title"===l?"b-header__button_active":"b-header__button"},"title"),r.default.createElement(n.default,{handler:a,className:"genres"===l?"b-header__button_active":"b-header__button"},"genres")),r.default.createElement("div",{className:"choice-flex__item"},r.default.createElement(n.default,{handler:o,style:{background:""===s?"#ccc":"red",pointerEvents:""===s?"none":"auto"}},"search")))}},GdEl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("q1tI"),o=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.handleReleaseDateSort,a=e.handleRatingSort,r=e.total,n=e.sortBy;return o.default.createElement("div",{className:"main-page__result b-result"},o.default.createElement("div",{className:"b-result__text-wrap"},o.default.createElement("span",{className:"b-result__text"},r," movies found")),o.default.createElement("div",{className:"b-result__sort-wrap"},o.default.createElement("span",{className:"b-result__sort-text"},"Sort by:"),o.default.createElement("span",{onClick:t,className:"release_date"===n?"b-result__sort-item_active":"b-result__sort-item"},"release date"),o.default.createElement("span",{onClick:a,className:"vote_average"===n?"b-result__sort-item_active":"b-result__sort-item"},"rating")))}},"Mm+R":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a("q1tI"),l=(r=o)&&r.__esModule?r:{default:r};var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={hasError:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),n(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.default.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}();t.default=s},Qaj8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("q1tI"),o=(r=n)&&r.__esModule?r:{default:r};t.default=function(e){var t=e.handleSearch,a=e.handleEnterPress,r=e.search;return o.default.createElement("div",{className:"b-header__search"},o.default.createElement("span",{className:"b-header__search-title"},"find your movie"),o.default.createElement("input",{onChange:function(e){return t(e.target.value)},onKeyDown:function(e){return a(e)},className:"b-header__search-input",type:"search",placeholder:"search",value:r}))}},"V+jL":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("q1tI"),o=(r=n)&&r.__esModule?r:{default:r},l=a("eO8H");t.default=function(e){var t=e.item,a=e.handleGoToDescriptionPage;return o.default.createElement("div",{className:"movie-items__item b-item"},o.default.createElement("div",{className:"b-item__img-wrap"},o.default.createElement("img",{className:"b-item__img-pic",src:t.poster_path,alt:""})),o.default.createElement("div",{className:"b-item__title-wrap"},o.default.createElement(l.Link,{to:"/filmzilla/description/"+t.id,className:"b-item__title-link",onClick:a},o.default.createElement("span",{className:"b-item__title-text"},t.title)),o.default.createElement("span",{className:"b-item__title-year"},t.release_date)),o.default.createElement("div",{className:"b-item__ganre-wrap"},o.default.createElement("span",{className:"b-item__ganre-text"},t.genres.join(" & "))))}},frg8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a("q1tI"),o=(r=n)&&r.__esModule?r:{default:r},l=a("eO8H");a("71L/");t.default=function(e){var t=e.description,a=e.handleGoSearchPage;return o.default.createElement("div",{className:"b-header__logo-wrap"},o.default.createElement("h1",{className:"b-header__logo-text"},"Filmzilla"),t&&o.default.createElement(l.Link,{to:"/filmzilla",className:"b-header__logo-link",onClick:a},"search"))}},xOdi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MainPageTest=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=f(a("q1tI")),o=a("/MKj"),l=f(a("Mm+R")),s=f(a("07vq")),i=f(a("/82+")),c=f(a("/tf0")),u=a("1Odv"),d=a("r6xJ");function f(e){return e&&e.__esModule?e:{default:e}}a("z7kh");var h={goToDescription:function(){return(0,u.goToDescription)()}},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleGoToDescriptionPage=function(){a.props.goToDescription()},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.total,r=e.isLoadingMovies;return n.default.createElement(l.default,null,n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:"main-page container"},n.default.createElement(c.default,this.props),r?"Loading...":a?n.default.createElement(s.default,{movies:t,handleGoToDescriptionPage:this.handleGoToDescriptionPage}):n.default.createElement(i.default,null))))}}]),t}();t.default=(0,o.connect)(function(e){return{movies:(0,d.getData)(e),total:(0,d.getTotal)(e),isLoadingMovies:(0,d.getIsLoadingMovies)(e)}},h)(p);t.MainPageTest=p},z7kh:function(e,t,a){}}]);