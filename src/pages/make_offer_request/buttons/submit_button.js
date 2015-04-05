import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <button id="btn-submit" className="btn waves-effect waves-light light-blue accent-3" type="submit" name="action" onClick={ this.props.submit }>
        Submit
        <i className="mdi-navigation-check right"></i>
      </button>
    );
  }
};

SubmitButton.propTypes = { submit: React.PropTypes.func };

export default SubmitButton;
