import React from "react/addons";

import { getData, postData } from "../../common/request";

import ProductsInput           from "./inputs/products_input";
import DeliveryInput           from "./inputs/delivery_input";
import CustomerDetailsInput    from "./inputs/customer_details_input";
import CompanyDetailsInput     from "./inputs/company_details_input";
import SubmitButton            from "./buttons/submit_button";
import Spinner                 from "./components/spinner";
import MakeOfferRequestService from "./services/make_offer_request"

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
    this.state = { categories, deliveries, loading: false };
  }

  submit() {
    /**
      1. Validate input
      2. Show progress // this.toggleSpinner(true);
      3. Send data
      4. Show result
      5. Reset form // this.resetForm();
    */
    this.sendData();
  }

  sendData() {
    let customerDetails         = this.refs["customer_details"].getCustomerDetails();
    let companyDetails          = this.refs["company_details"].getCompanyDetails();
    let products                = this.refs["products"].getProducts();
    let delivery                = this.refs["delivery"].getDelivery();
    let makeOfferRequestService = new MakeOfferRequestService(customerDetails, companyDetails, products, delivery)
  }

  resetForm() {
    let references = this.refs;
    Object.keys(references).forEach((reference_name) => references[reference_name].resetState());
  }

  toggleSpinner(show) {
    this.setState(React.addons.update(this.state, { $merge: { loading: show } }));
  }

  render() {
    let component = this.state.loading ?
      <Spinner />
    :
      <from>
        <CustomerDetailsInput ref="customer_details" />
        <CompanyDetailsInput  ref="company_details"  />
        <ProductsInput        ref="products"         categories={ this.state.categories }  />
        <DeliveryInput        ref="delivery"         deliveries={ this.state.deliveries }  />
        <SubmitButton                                submit=    { this.submit.bind(this) } />
      </from>;

    return(
      <div id="make-offer-request-page" className="container">
        { component }
      </div>
    );
  }
}
