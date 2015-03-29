import React from "react";

import Customer from "../../../models/customer"

class CustomerComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header">
          <i className="mdi-social-person"></i>
          CustomerComponent
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            <a className="collection-item">Name<span className="badge">{ this.props.customer.name }</span></a>
            <a className="collection-item">Email<span className="badge">{ this.props.customer.email }</span></a>
          </ul>
        </div>
      </div>
    )
  }
}

CustomerComponent.propTypes = { customer: React.PropTypes.instanceOf(Customer) };

export default CustomerComponent;
