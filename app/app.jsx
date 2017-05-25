var React = require('react');
var ReactDOM = require('react-dom');
// es6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// ini sama aja kyk gini
// var Route = require('react-router').Route;
// var Router = require('react-router').Router; dst
// nama var nya harus sama persis dgn atribut obj
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

// load foundation
// css! itu buat nge load css
// style! itu buat inject cssnya ke style
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {/* kalo /about yang dirender jadi About */}
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      {/*  ini IndexRoute jadi defaultnya kalo gk dikasih path,
      jadi kalo cuma localhost:3000/ doang yang dirender itu Weather */}
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
// prop history itu wajib ada di Router
// path itu urlnya, sedangkan component itu apa yang di render di url itu
// contoh: <Route path="/" component={Main}>, kalo localhost:3000/ brarti ngerender component Main
// component itu nunjukin apa aja yang dirender
