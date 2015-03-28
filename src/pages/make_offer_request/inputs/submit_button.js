import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <button className="btn waves-effect waves-light" type="submit" name="action" onClick={ this.props.clearInputs }>
        Submit
        <i className="mdi-content-send right"></i>
      </button>
    );
  }
};

SubmitButton.propTypes = { clearInputs: React.PropTypes.func };

export default SubmitButton;
