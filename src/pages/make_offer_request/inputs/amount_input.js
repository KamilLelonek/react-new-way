import React from "react";

export default class AmountInput extends React.Component {
  resetState() {
    console.log(this + " resetState");
  }

  render() {
    return (
      <form action="#">
        <p className="range-field">
          <input type="range" min="1" max="10" />
        </p>
      </form>
    );
  }
}
