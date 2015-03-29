import React from "react";

import Delivery from "../../../models/delivery"

class DeliveryInput extends React.Component {
  resetState() {
    let element = document.getElementById("delivery_option");
    element.value = this.props.deliveries.first.id;
  }

  getDeliveryID() {
    return document.getElementById("delivery_option").value;
  }

  componentWillMount() {
    this.deliveries =
      this.props.deliveries.map(
        delivery =>
          <option value={ delivery.id } key={ delivery.id }>{ delivery.name }</option>
      )
  }

  componentDidMount() {
    $(React.findDOMNode(this)).find("select").material_select();
  }

  render() {
    return (
      <div>
        <label>Delivery</label>
        <select id="delivery_option" defaultValue="Select delivery">
          { this.deliveries }
        </select>
      </div>
    );
  }
};

DeliveryInput.propTypes = { deliveries: React.PropTypes.array };

export default DeliveryInput;
