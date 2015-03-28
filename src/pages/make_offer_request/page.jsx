import React from "react";

import { getData, postData } from "../../common/request";

import ProductsInput        from "./inputs/products_input"
import DeliveryInput        from "./inputs/delivery_input"
import CustomerDetailsInput from "./inputs/customer_details_input"
import CompanyDetailsInput  from "./inputs/company_details_input"
import SubmitButton         from "./inputs/submit_button"

export default class MakeOfferRequest extends React.Component {
  static fetchData() {
    return Promise.all([
      getData("/categories"),
      getData("/deliveries"),
    ]);
  }

  constructor(props) {
    super(props);
    this.setInitialState();
  }

  setInitialState() {
    let [categories, deliveries] = this.props.data["make-offer-request"];
    this.state = { categories, deliveries };
  }

  clearInputs() {
    /**
      1. Validate input
      2. Show progress
      3. Send date
      4. Show result
      5. Reset form
    */

    this.resetForm();
  }

  resetForm() {
    let references = this.refs;
    Object.keys(references).forEach((reference_name) => references[reference_name].resetState());
  }

  render() {
    return (
      <div id="make-offer-request-page" className="container">
        <from>
          <CustomerDetailsInput ref="customer_details" key="customer_details" />
          <CompanyDetailsInput  ref="company_details"  key="company_details"  />
          <ProductsInput        ref="products"         key="products"         categories={ this.state.categories } />
          <DeliveryInput        ref="delivery"         key="delivery"         deliveries={ this.state.deliveries } />
          <SubmitButton clearInputs={ this.clearInputs.bind(this) } />
        </from>
      </div>
    );
  }
};
