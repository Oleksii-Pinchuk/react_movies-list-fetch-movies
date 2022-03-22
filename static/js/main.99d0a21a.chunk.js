(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(6),i=c.n(s),n=(c(12),c(7)),a=c(2),l=c(1),r=(c(13),c(14),c(15),c(0)),j=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(j,{movie:e},e.imdbID)}))})},d=(c(17),function(e){var t=e.onAddMovie,c=Object(l.useState)(""),s=Object(a.a)(c,2),i=s[0],n=s[1],o=Object(l.useState)(null),d=Object(a.a)(o,2),m=d[0],b=d[1],u=Object(l.useState)(!1),h=Object(a.a)(u,2),O=h[0],v=h[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",value:i,onChange:function(e){n(e.target.value),v(!1)}})})]}),O&&Object(r.jsx)("p",{className:" help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){var e;(e=i,fetch("".concat("http://www.omdbapi.com/?apikey=65e33bea&t=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.Error?null:e}))).then((function(e){e?b(e):(v(!0),b(null))}))},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){m&&(t(m),n(""),b(null))},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),m&&Object(r.jsx)(j,{movie:m})]})]})}),m=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(d,{onAddMovie:function(e){c.some((function(t){return t.imdbID===e.imdbID}))||s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.99d0a21a.chunk.js.map