import React from "react";

import Customer from "../models/customer"

class CustomerComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header"><i className="mdi-image-filter-drama"></i>CustomerComponent</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </div>
    )
  }
}

CustomerComponent.propTypes = { customer: React.PropTypes.instanceOf(Customer) };

export default CustomerComponent;
