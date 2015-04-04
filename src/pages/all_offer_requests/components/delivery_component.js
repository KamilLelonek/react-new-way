import React from "react";

import Delivery from "../../../models/delivery"

class DeliveryComponent extends React.Component {
  render() {
    return(
      <li>
        <div className="collapsible-header">
          <i className="mdi-maps-local-shipping"></i>
          DeliveryComponent
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            <a className="collection-item">Name<span className="badge">{ this.props.delivery.name }</span></a>
            <a className="collection-item">Description<span className="badge">{ this.props.delivery.description }</span></a>
          </ul>
        </div>
      </li>
    )
  }
}

DeliveryComponent.propTypes = { delivery: React.PropTypes.instanceOf(Delivery) };

export default DeliveryComponent;
