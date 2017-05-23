const React = require('react');
var {Link, IndexLink} = require('react-router');
// IndexLink itu khusus buat IndexRoute, biar stylingnya gk idup terus

// pake link karena dia punya property activeClassName, jadi kalo urlnya lagi aktif bisa dikasih styling
// var Nav = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <h2>Nav</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//       </div>
//     );
//   }
// });
//

var Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
};

module.exports = Nav;
