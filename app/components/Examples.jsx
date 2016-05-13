var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Welcome to examples page!</p>
      <ol>
        <li>
          <Link to='/?location=Singapore'>Singapore</Link>
        </li>
        <li>
          <Link to='/?location=China'>China</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Examples;
