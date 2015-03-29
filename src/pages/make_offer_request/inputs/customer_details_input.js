import React from "react";

import { clearInput } from "../services/clear_input";
import Customer       from "../../../models/customer"

export default class CustomerDetailsInput extends React.Component {
  resetState() {
    clearInput('customer_name');
    clearInput('customer_email');
  }

  getCustomerDetails() {
    let customerName  = document.getElementById('customer_name').value;
    let customerEmail = document.getElementById('customer_email').value;
    return new Customer(customerName, customerEmail);
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s6">
          <i className="mdi-action-account-circle prefix"></i>
          <input id="customer_name" type="text" className="validate" />
          <label htmlFor="customer_name">Customer Name</label>
        </div>
        <div className="input-field col s6">
          <i className="mdi-communication-email prefix"></i>
          <input id="customer_email" type="tel" className="validate" />
          <label htmlFor="customer_email">Customer Email</label>
        </div>
      </div>
    );
  }
};
