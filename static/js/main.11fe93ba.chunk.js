(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(49),i=a.n(o),l=a(16),c=a(14),s=a(51),m=(a(63),a(64),a(7)),u=a(8),p=a(10),d=a(9),v=a(11),f=(a(65),a(18)),E=a(6);f.b.add(E.e,E.b,E.d,E.h,E.a,E.g,E.f,E.c);var b=a(52),h=a.n(b),D=function(){var e=["up","suits","casa+de+papel","friends","orange+is+the+new+black","prison+break","Breaking+Bad","young+sheldon","unreal"];return function(t){e.forEach(function(e){h.a.get("https://www.omdbapi.com/?t=".concat(e,"&apikey=8fb1ba1")).then(function(e){var a;t((a=e.data,{type:"SET_MOVIE_LIST",payload:{Title:M(a.Title),Poster:a.Poster,Year:a.Year,Runtime:a.Runtime,Genre:a.Genre,Director:a.Director,imdbID:a.imdbID}}))}).catch(function(e){return console.log(e)})})}},M=function(e){if(e){var t=/([a-z]|\s)/i;return e.toLowerCase().split("").filter(function(e){return t.test(e)}).join("").split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" ")}},y=(a(86),a(39),a(19),a(3)),O=function(e){return r.a.createElement("div",{className:"movieButtonsContainer"},r.a.createElement("button",{className:"blueMovieButton",onClick:e.clickedEdit},r.a.createElement(y.a,{className:"imageIcon",icon:"pen"}),"Edit"),r.a.createElement("button",{className:"redMovieButton",onClick:e.clickedDelete},r.a.createElement(y.a,{className:"imageIcon",icon:"trash"}),"Delete"))},T=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movieLayout",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},r.a.createElement("div",{className:"posterContainer",style:{backgroundImage:"url(".concat(this.props.poster,")")}},this.props.poster?null:r.a.createElement("div",{className:"noPoster"},r.a.createElement(y.a,{className:"imageIcons",icon:"image"}))),r.a.createElement("div",{className:"movieData"},r.a.createElement("div",{className:"movieTitle"},this.props.title),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement(y.a,{className:"dataIcon",icon:"calendar"}),r.a.createElement("span",null,"Year: "),this.props.year," |",r.a.createElement(y.a,{className:"dataIcon",icon:"stopwatch"}),r.a.createElement("span",null,"Runtime: "),this.props.runtime),r.a.createElement("p",null,r.a.createElement("span",null,"Genre:"),r.a.createElement("br",null),this.props.genre),r.a.createElement("p",null,r.a.createElement("span",null,"Director: "),r.a.createElement("br",null),this.props.director)),r.a.createElement(O,{clickedEdit:this.props.formOpen,clickedDelete:this.props.deleteMovie}))}}]),t}(n.Component),g=(a(87),a(4)),I=a.n(g),R=function(e,t){var a={};return I.a.isEmpty(e.Title)?a.Title="your Movie title is valuable":I.a.isAlpha(I.a.blacklist(e.Title,", ."))?function(e,t){if(t.find(function(t){return t.Title===e.Title}).imdbID!==e.imdbID)return!0}(e,t)&&(a.Title="hiiii this movie is alreay here...."):a.Title="Title may contain only letters",I.a.isEmpty(e.Year)?a.Year="your Movie year realesed is valuable":/(\b(19|[2-9][0-9])\d{2})$/.test(e.Year)||(a.Year="movie year must be later then 1900"),I.a.isEmpty(e.Genre)?a.Genre="what about the movie genre ?":I.a.isAlpha(I.a.blacklist(e.Genre,", "))||(a.Genre="Genre may contain only letters"),I.a.isEmpty(e.Runtime)?a.Runtime="what about the movie Runtime?":I.a.isInt(e.Runtime)||(a.Runtime="the Runtime must be in minutes only"),I.a.isEmpty(e.Director)?a.Director="what about the Director ?":I.a.isAlpha(I.a.blacklist(e.Director,"/ , ."))||(a.Director="Director name may contain letters only"),a},N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(){var e={Title:a.title.current.value,Year:a.year.current.value,Genre:a.genre.current.value,Runtime:a.runtime.current.value,Director:a.director.current.value,imdbID:a.props.selectedMovieData.imdbID,Poster:a.props.selectedMovieData.Poster};a.props.selectedMovieData.imdbID?a.props.onSubmitEditMovie(e):a.props.onSubmitNewMovie(e),a.props.onFormCancel()},a.formValidation=function(e){e.preventDefault();var t={Title:a.title.current.value,Year:a.year.current.value,Genre:a.genre.current.value,Runtime:a.runtime.current.value,Director:a.director.current.value,imdbID:a.props.selectedMovieData.imdbID},n=R(t,a.props.moviesList);a.props.validateForm(n),0===Object.keys(n).length&&a.onSubmit(e)},a.title=r.a.createRef(),a.year=r.a.createRef(),a.genre=r.a.createRef(),a.runtime=r.a.createRef(),a.director=r.a.createRef(),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"formLayout"},this.props.selectedMovieData.Poster?r.a.createElement("img",{className:"formPoster",src:this.props.selectedMovieData.Poster,alt:this.props.selectedMovieData.Title}):r.a.createElement("div",{className:"formPoster"},r.a.createElement(y.a,{className:"imageIcons",icon:"image"})),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("p",null,"* movie Title:",r.a.createElement("span",null,this.props.errors.Title)),r.a.createElement("input",{label:"Title",defaultValue:this.props.selectedMovieData.Title,ref:this.title,placeholder:"please type movie title"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Year Realsed:",r.a.createElement("span",null,this.props.errors.Year)),r.a.createElement("input",{label:"Year",defaultValue:this.props.selectedMovieData.Year,ref:this.year,placeholder:"Years in numbers"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Run Time:",r.a.createElement("span",null,this.props.errors.Runtime)),r.a.createElement("input",{label:"RunTime",defaultValue:this.props.selectedMovieData.Runtime,ref:this.runtime,placeholder:"Runtime in numbers"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Genere:",r.a.createElement("span",null,this.props.errors.Genre)),r.a.createElement("input",{label:"Genere",defaultValue:this.props.selectedMovieData.Genre,ref:this.genre,placeholder:"movie genere"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Director:",r.a.createElement("span",null,this.props.errors.Director)),r.a.createElement("input",{label:"Director",defaultValue:this.props.selectedMovieData.Director,ref:this.director,placeholder:"name of the movie director"}),r.a.createElement("div",{className:"formButtons"},r.a.createElement("button",{onClick:function(t){return e.formValidation(t,!0)}},r.a.createElement(y.a,{icon:"check"})," Submit changes"),r.a.createElement("p",{className:"cancelButton",onClick:this.props.onFormCancel},"cancel")))))}}]),t}(n.Component),j=Object(l.b)(function(e){return{moviesList:e.moviesList.moviesDataList,errors:e.formValidation.errors}},function(e){return{validateForm:function(t){return e({type:"FORM_ERROR",payload:t})},onSubmitEditMovie:function(t){return e({type:"EDIT_MOVIE_SUBMIT",payload:{Title:M((a=t).Title),Poster:a.Poster,Year:a.Year,Runtime:a.Runtime,Genre:a.Genre,Director:a.Director,imdbID:a.imdbID}});var a},onSubmitNewMovie:function(t){return e({type:"ADD_MOVIE_SUBMIT",payload:{Title:M((a=t).Title),Poster:a.Poster,Year:a.Year,Runtime:a.Runtime,Genre:a.Genre,Director:a.Director,imdbID:a.imdbID}});var a}}})(N),k=(a(148),a(149),function(e){return r.a.createElement("div",{className:"backdrop",onClick:function(){return e.closeModal()}})}),L=function(e){return e.modalOpen?r.a.createElement(n.Fragment,null,r.a.createElement(k,{closeModal:e.modalClose}),r.a.createElement("div",{className:"modal"},r.a.createElement("button",{className:"modalCloseButton",onClick:e.modalClose},r.a.createElement(y.a,{className:"imageIcon",icon:"times"})),e.children)):null},w=function(e){return r.a.createElement("div",{className:"addMovieLayout",onClick:e.formOpen},r.a.createElement("div",{className:"posterContainer"},r.a.createElement(y.a,{className:"addMovieIcon",icon:"plus"})),r.a.createElement("div",{className:"newMovieTitle"},"Add new movie"),r.a.createElement("div",{className:"NewMovieTitleMobile"},"Add new movie"))},C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).formEditOpen=function(e,t){a.setState({formMode:!a.state.formMode,selectedMovie:e,modalMode:!a.state.modalMode,modalType:"form",formType:t})},a.togglePopUp=function(){a.setState({formMode:!a.state.formMode,modalMode:!a.state.modalMode,modalType:""})},a.formCancel=function(){a.togglePopUp(),a.props.clearFormErrors()},a.deleteApprovel=function(e){a.setState({modalMode:!a.state.modalMode,movieToDelete:e,modalType:"delete"})},a.deleteApproved=function(){a.togglePopUp(),a.props.deleteMovie(a.state.movieToDelete.imdbID)},a.modalMode=function(){if(a.state.modalMode){if("form"===a.state.modalType)return r.a.createElement(j,{selectedMovieData:a.state.selectedMovie,onFormCancel:a.formCancel});if("delete"===a.state.modalType)return r.a.createElement("div",{class:"deleteApprovalMessage"},r.a.createElement("p",null,"Are you sure you want to remove the title"),r.a.createElement("h3",{style:{margin:"0px 0px 25px 0px"}}," ",a.state.movieToDelete.Title," ?"),r.a.createElement("div",{className:"popUpFooter"},r.a.createElement("button",{className:"blueMovieButton",onClick:a.deleteApproved},"yep, please delete it for me"),r.a.createElement("button",{className:"redMovieButton",onClick:a.togglePopUp},"ooooops")))}},a.state={formMode:!1,selectedMovie:{},modalMode:!1,modalType:"",formType:"",movieToDelete:{}},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.setMovieList()}},{key:"render",value:function(){var e=this,t=this.props.moviesList.map(function(t){return r.a.createElement(T,{key:t.imdbID?t.imdbID:t.Title,title:t.Title,poster:t.Poster,year:t.Year,runtime:t.Runtime,genre:t.Genre,director:t.Director,formOpen:function(){return e.formEditOpen(t,"editForm")},deleteMovie:function(){return e.deleteApprovel(t)}})});return r.a.createElement("div",{className:"movieList"},r.a.createElement(w,{formOpen:function(){return e.formEditOpen({},"newForm")}}),t,r.a.createElement(L,{modalOpen:this.state.modalMode,modalClose:this.togglePopUp},this.modalMode()))}}]),t}(n.Component),_=Object(l.b)(function(e){return{moviesList:e.moviesList.moviesDataList}},function(e){return{setMovieList:function(){return e(D())},deleteMovie:function(t){return e({type:"DELETE_MOVIE",payload:t})},clearFormErrors:function(){return e({type:"CLEAR_FORM_ERROR"})}}})(C),S=(a(150),a(53)),G=a.n(S),P=function(){return r.a.createElement("header",null,r.a.createElement("img",{src:G.a,alt:"logo"}))},Y=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement(_,null))}}]),t}(n.Component),V=a(31),B=a(12),F={moviesDataList:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIE_LIST":return Object(B.a)({},e,{moviesDataList:[t.payload].concat(Object(V.a)(e.moviesDataList))});case"EDIT_MOVIE_SUBMIT":return Object(B.a)({},e,{moviesDataList:e.moviesDataList.map(function(e){return e.imdbID===t.payload.imdbID?t.payload:e})});case"ADD_MOVIE_SUBMIT":return Object(B.a)({},e,{moviesDataList:[t.payload].concat(Object(V.a)(e.moviesDataList))});case"DELETE_MOVIE":return Object(B.a)({},e,{moviesDataList:e.moviesDataList.filter(function(e){return e.imdbID!==t.payload})});default:return e}},U={errors:{Title:"",Year:"",Genre:"",Runtime:"",Director:""}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORM_ERROR":return Object(B.a)({},e,{errors:t.payload});case"CLEAR_FORM_ERROR":return Object(B.a)({},e,{errors:{}});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=Object(c.c)({moviesList:A,formValidation:x}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,W=Object(c.e)(H,J(Object(c.a)(function(e){return function(e){return function(t){return e(t)}}},s.a)));i.a.render(r.a.createElement(l.a,{store:W},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t,a){},39:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo-moviesDataList.1c8e1103.png"},54:function(e,t,a){e.exports=a(151)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.11fe93ba.chunk.js.map