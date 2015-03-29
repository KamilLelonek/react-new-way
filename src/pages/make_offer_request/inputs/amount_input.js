import React from "react";

export default class AmountInput extends React.Component {
  getQuantity() {
    let $element = $(React.findDOMNode(this));
    let $range   = $element.find("input");
    let value    = parseInt($range.val());
    return value;
  }

  render() {
    return (
      <p className="range-field">
        <input type="range" min="1" max="10" />
      </p>
    );
  }
}
