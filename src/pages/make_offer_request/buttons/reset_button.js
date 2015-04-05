import React from "react";

class ResetButton extends React.Component {
  render() {
    return (
      <button id="btn-reset" className="btn waves-effect waves-light red accent-2" type="reset" name="action" onClick={ this.props.reset }>
        Reset
        <i className="mdi-navigation-close right"></i>
      </button>
    );
  }
};

ResetButton.propTypes = { reset: React.PropTypes.func };

export default ResetButton;
