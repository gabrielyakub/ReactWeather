var React = require('react');


var ErrorModal = React.createClass({
// PropType itu buat spesifikasi tipe data dari property dan untuk
// ngasih tau itu required ato gk -> buat validasi (Prop Validation)
    propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
    },
  getDefaultProps: function(){
    return {
      title: 'Error'
    }
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;

    return (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }

});

module.exports = ErrorModal;
