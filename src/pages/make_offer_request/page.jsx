import React from "react/addons";

import { getData } from "../../common/request";

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

  componentDidMount() {
    let references  = this.refs;
    this.components = Object.keys(references).map(reference_name => references[reference_name]);
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

  submit() {
    this.validate().then(
      this.validationSuccessful.bind(this),
      (reason) => Materialize.toast(reason, 1000, 'rounded')
    );
  }

  validate() {
    return Promise.all([
      this.refs["customer_details"].validate(),
      this.refs["company_details"].validate(),
      this.refs["products"].validate()
    ]);
  }

  validationSuccessful() {
    this.sendData().then(
      this.submissionSuccessful.bind(this),
      this.submissionUnsuccessful.bind(this)
    );
  }

  sendData() {
    let customerDetails         = this.refs["customer_details"].getCustomerDetails();
    let companyDetails          = this.refs["company_details"].getCompanyDetails();
    let deliveryID              = this.refs["delivery"].getDeliveryID();
    let products                = this.refs["products"].getProducts();
    let makeOfferRequestService = new MakeOfferRequestService(customerDetails, companyDetails, products, deliveryID)

    this.toggleSpinner(true);

    return makeOfferRequestService.call();
  }

  submissionSuccessful() {
    this.toggleSpinner(false);
    this.resetForm();
    Materialize.toast("Your request was submitted!", 2000, 'rounded');
  }

  submissionUnsuccessful(reason) {
    this.toggleSpinner(false);
    Materialize.toast(JSON.stringify(reason), 2000, 'rounded');
  }

  resetForm() {
    this.components.forEach(c => c.resetState());
  }

  toggleSpinner(show) {
    this.setState(React.addons.update(this.state, { $merge: { loading: show } }));
  }
}
