const React = require('react');


// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// kalo cuma punya RENDER METHOD bisa kyk gini
var About = function(props){
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p className="text-center">Welcome to about page</p>
    </div>
  );
};

// bisa juga arrow function

// var About = (props) => {
//   return (
//     <h3>About Component</h3>
//   );
// };

// var About = (props) => (
//   <h3>About Component</h3>
// );


module.exports = About;
