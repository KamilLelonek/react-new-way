import React from "react";

import DeliveryComponent     from "./delivery_component";
import ProductComponent      from "./product_component";
import CompanyComponent      from "./company_component";
import CustomerComponent     from "./customer_component";
import OfferDetailsComponent from "./offer_details_component";

import OfferRequest from "../models/offer_request"

class OfferRequestComponent extends React.Component {
  componentDidMount() {
    $(React.findDOMNode(this)).collapsible();
  }

  render() {
    return(
      <ul className="collapsible" data-collapsible="expandable">
        <OfferDetailsComponent offerRequest = { this.props.offerRequest } />
        <DeliveryComponent     delivery     = { this.props.offerRequest.delivery } />
        <ProductComponent      products     = { this.props.offerRequest.products } />
        <CompanyComponent      company      = { this.props.offerRequest.company } />
        <CustomerComponent     customer     = { this.props.offerRequest.customer } />
      </ul>
    )
  }
}

OfferRequestComponent.propTypes = { offerRequest: React.PropTypes.instanceOf(OfferRequest) };

export default OfferRequestComponent
