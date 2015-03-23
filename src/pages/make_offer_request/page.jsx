import React from "react";
import { getData } from "../../common/request";

import ProductsInput        from "./inputs/products_input"
import DeliveryInput        from "./inputs/delivery_input"
import CustomerDetailsInput from "./inputs/customer_details_input"
import CompanyDetailsInput  from "./inputs/company_details_input"

export default class MakeOfferRequest extends React.Component {
  static fetchData() {
    return Promise.all([
      getData("/ingredients"),
      getData("/categories"),
      getData("/deliveries"),
    ]);
  }

  componentWillMount() {
    [this.ingredients, this.categories, this.deliveries] = this.props.data["make-offer-request"];
  }

  render() {
    return (
      <div id="make-offer-request-page" className="container">
        <CustomerDetailsInput />
        <CompanyDetailsInput />
        <ProductsInput categories={ this.categories } />
        <DeliveryInput deliveries={ this.deliveries } />
        <button className="btn waves-effect waves-light" type="submit" name="action">
          Submit
          <i className="mdi-content-send right"></i>
        </button>
      </div>
    );
  }
};
