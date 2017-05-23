const React = require('react');
const Nav = require('Nav');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {/* ini buat render semua children yang ada di IndexRoute */}
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
      </div>
);


module.exports = Main;
