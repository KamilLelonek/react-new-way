import React from "react";

import Delivery from "../models/delivery"

class DeliveryComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header"><i className="mdi-image-filter-drama"></i>DeliveryComponent</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </div>
    )
  }
}

DeliveryComponent.propTypes = { delivery: React.PropTypes.instanceOf(Delivery) };

export default DeliveryComponent;
