const React = require('react');
// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Test</h3>
//     );
//   }
// });
var {Link} = require('react-router');

var Examples = (props) => (
  <div>
    <h1 className="text-center page-title">Example</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to="/?location=Jakarta">Jakarta</Link>
      </li>
      <li>
        <Link to="/?location=Tangerang">Tangerang</Link>
      </li>
    </ol>
  </div>
);

module.exports = Examples;
