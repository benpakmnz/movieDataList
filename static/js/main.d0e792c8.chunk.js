(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),l=a(14),c=a(11),s=a(44),u=(a(56),a(57),a(4)),m=a(5),d=a(8),p=a(6),v=a(7),f=(a(58),a(45)),h=a.n(f),E=(a(78),a(10)),b=(a(79),a(80),function(e){return r.a.createElement("div",{className:"movieButtonsContainer",style:{display:e.displayMode}},r.a.createElement("button",{onClick:e.clickedEdit},"Edit"),r.a.createElement("button",{onClick:e.clickedDelete},"Delete"),r.a.createElement("p",null,e.name))}),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMouseHover=a.handleMouseHover.bind(Object(E.a)(Object(E.a)(a))),a.state={isHovering:!1},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"handleMouseHover",value:function(){this.setState(this.toggleHoverState)}},{key:"toggleHoverState",value:function(e){return{isHovering:!e.isHovering}}},{key:"render",value:function(){return r.a.createElement("div",{className:"movieLayout",onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},r.a.createElement("div",{className:"posterContainer",style:{backgroundImage:"url(".concat(this.props.poster,")")}}),r.a.createElement("div",{className:"movieData"},r.a.createElement("div",{className:"movieTitle"},this.props.title),r.a.createElement("p",null,r.a.createElement("span",null,"Year:")," ",this.props.year," | ",r.a.createElement("span",null,"Runtime: ")," ",this.props.runtime),r.a.createElement("p",null,r.a.createElement("span",null,"Genre:"),r.a.createElement("br",null),this.props.genre),r.a.createElement("p",null,r.a.createElement("span",null,"Director: "),r.a.createElement("br",null),this.props.director)),r.a.createElement(b,{clickedEdit:this.props.formOpen,clickedDelete:this.props.deleteMovie,displayMode:(this.state.isHovering,"unset")}))}}]),t}(n.Component),y=(a(81),a(2)),O=a.n(y),D=function(e){var t={};return O.a.isEmpty(e.Title)?t.Title="your Movie title is valuable":O.a.isAlpha(O.a.blacklist(e.Title,", ."))||(t.Title="Title may contain only letters"),O.a.isEmpty(e.Year)&&(t.Year="your Movie year realesed is valuable"),O.a.isEmpty(e.Genre)?t.Genre="what about the movie genre ?":O.a.isAlpha(O.a.blacklist(e.Genre,", ."))||(t.Genre="Genre may contain only letters"),O.a.isEmpty(e.Runtime)?t.Runtime="what about the movie Runtime?":O.a.isInt(e.Runtime)||(t.Runtime="the Runtime must be in minutes only"),O.a.isEmpty(e.Director)?t.Director="what about the Director ?":O.a.isAlpha(O.a.blacklist(e.Director,", ."))||(t.Director="Director name may contain letters only"),t},g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t={Title:a.title.current.value,Year:a.year.current.value,Genre:a.genre.current.value,Runtime:a.runtime.current.value,Director:a.director.current.value,imdbID:a.props.selectedMovieData.imdbID,Poster:a.props.selectedMovieData.Poster};a.props.handleSubmit(t),a.props.onFormCancel()},a.formValidation=function(e,t){if(e.preventDefault(),t){var n={Title:a.title.current.value,Year:a.year.current.value,Genre:a.genre.current.value,Runtime:a.runtime.current.value,Director:a.director.current.value},r=D(n);a.props.validateForm(r),0===Object.keys(a.props.errors).length&&a.onSubmit(e)}else a.onSubmit(e)},a.title=r.a.createRef(),a.year=r.a.createRef(),a.genre=r.a.createRef(),a.runtime=r.a.createRef(),a.director=r.a.createRef(),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"formLayout"},r.a.createElement("img",{src:this.props.selectedMovieData.Poster,alt:this.props.selectedMovieData.Title}),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("p",null,"* movie Title:",r.a.createElement("span",null,this.props.errors.Title)),r.a.createElement("input",{label:"Title",defaultValue:this.props.selectedMovieData.Title,ref:this.title,placeholder:"please type movie title"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Year Realsed:",r.a.createElement("span",null,this.props.errors.Year)),r.a.createElement("input",{label:"Year",defaultValue:this.props.selectedMovieData.Year,ref:this.year,placeholder:"Years in numbers"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Run Time:",r.a.createElement("span",null,this.props.errors.Runtime)),r.a.createElement("input",{label:"RunTime",defaultValue:this.props.selectedMovieData.Runtime,ref:this.runtime,placeholder:"Runtime in numbers"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Genere:",r.a.createElement("span",null,this.props.errors.Genre)),r.a.createElement("input",{label:"Genere",defaultValue:this.props.selectedMovieData.Genre,ref:this.genre,placeholder:"movie genere"})),r.a.createElement("div",null,r.a.createElement("p",null,"* Director:",r.a.createElement("span",null,this.props.errors.Director)),r.a.createElement("input",{label:"Director",defaultValue:this.props.selectedMovieData.Director,ref:this.director,placeholder:"name of the movie director"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.formValidation(t,!0)}},"Submit changes"),r.a.createElement("button",{onClick:this.props.onFormCancel},"cancel"))))}}]),t}(n.Component),R=Object(l.b)(function(e){return{moviesList:e.moviesList.moviesDataList,errors:e.formValidation.errors}},function(e){return{validateForm:function(t){return e({type:"FORMERROR",payload:t})}}})(g),j=(a(142),a(143),function(e){return r.a.createElement("div",{className:"backdrop",onClick:function(){return e.closeModal()}})}),k=function(e){return e.modalOpen?r.a.createElement(n.Fragment,null,r.a.createElement(j,{closeModal:e.modalClose}," "),r.a.createElement("div",{className:"modal"},e.children)):null},T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).formEditOpen=function(e){a.setState({formMode:!a.state.formMode,modalMode:!a.state.modalMode,selectedMovieId:e})},a.togglePopUp=function(){a.setState({formMode:!a.state.formMode,modalMode:!a.state.modalMode})},a.FormCancel=function(){a.setState({formMode:!a.state.formMode,modalMode:!a.state.modalMode}),a.props.clearFormErrors()},a.onSubmitForm=function(e){a.props.onSubmit(e),a.togglePopUp()},a.deleteApprovel=function(e){a.setState({idToDelete:e,modalMode:!a.modalMode,alertMessage:!a.alertMessage})},a.state={formMode:!1,selectedMovieId:"",modalMode:!1,alertMessage:!1},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.setMovieList()}},{key:"render",value:function(){var e=this,t=this.props.moviesList.map(function(t){return r.a.createElement(M,{key:t.imdbID,title:t.Title,poster:t.Poster,year:t.Year,runtime:t.Runtime,genre:t.Genre,director:t.Director,formOpen:function(){return e.formEditOpen(t)},deleteMovie:function(){return e.props.deleteMovie(t.imdbID)}})});return r.a.createElement("div",{className:"movieList"},r.a.createElement(M,null),t,r.a.createElement(k,{modalOpen:this.state.modalMode,modalClose:this.togglePopUp},this.state.formMode?r.a.createElement(R,{selectedMovieData:this.state.selectedMovieId,onFormCancel:this.FormCancel,handleSubmit:this.onSubmitForm}):null))}}]),t}(n.Component),L=Object(l.b)(function(e){return{moviesList:e.moviesList.moviesDataList}},function(e){return{setMovieList:function(){return e(function(){var e=["up","suits","casa+de+papel","friends","orange+is+the+new+black","prison+break","Breaking+Bad","young+sheldon","unreal"];return function(t){e.forEach(function(e){h.a.get("http://www.omdbapi.com/?t=".concat(e,"&apikey=8fb1ba1")).then(function(e){t({type:"SET_MOVIELIST",payload:e.data})}).catch(function(e){return console.log(e)})})}}())},onSubmit:function(t){return e({type:"FORM_SUBMIT",payload:t})},deleteMovie:function(t){return e({type:"DELETE_MOVIE",payload:t})},clearFormErrors:function(){return e({type:"CLEARFORMERROR"})}}})(T),S=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(L,null))}}]),t}(n.Component),w=a(46),I=a(12),C={moviesDataList:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIELIST":return Object(I.a)({},e,{moviesDataList:[t.payload].concat(Object(w.a)(e.moviesDataList))});case"FORM_SUBMIT":return Object(I.a)({},e,{moviesDataList:e.moviesDataList.map(function(e){return e.imdbID===t.payload.imdbID?t.payload:e})});case"DELETE_MOVIE":return Object(I.a)({},e,{moviesDataList:e.moviesDataList.filter(function(e){return e.imdbID!==t.payload})});default:return e}},G={errors:{Title:"",Year:"",Genre:"",Runtime:"",Director:""}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORMERROR":return Object(I.a)({},e,{errors:t.payload});case"CLEARFORMERROR":return Object(I.a)({},e,{errors:{Title:"",Year:"",Genre:"",Runtime:"",Director:""}});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=Object(c.c)({moviesList:F,formValidation:V}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,H=Object(c.e)(Y,_(Object(c.a)(function(e){return function(e){return function(t){return e(t)}}},s.a)));i.a.render(r.a.createElement(l.a,{store:H},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){e.exports=a(144)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.d0e792c8.chunk.js.map