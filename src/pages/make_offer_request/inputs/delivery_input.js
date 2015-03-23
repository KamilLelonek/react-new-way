import React from "react";

class DeliveryInput extends React.Component {
  componentWillMount() {
    this.deliveries =
      this.props.deliveries.map(
        delivery =>
          <option value={ delivery.id } key={ delivery.id }>{ delivery.name }</option>
      )
  }

  componentDidMount() {
    $(React.findDOMNode(this)).find('select').material_select();
  }

  render() {
    return (
      <div>
        <label>Delivery</label>
        <select defaultValue="Select delivery">
          { this.deliveries }
        </select>
      </div>
    );
  }
};

DeliveryInput.propTypes = { deliveries: React.PropTypes.array };

export default DeliveryInput;