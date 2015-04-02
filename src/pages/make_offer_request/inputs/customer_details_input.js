import React from "react";

import { clearInput } from "../services/clear_input";
import Customer       from "../../../models/customer"

export default class CustomerDetailsInput extends React.Component {
  resetState() {
    clearInput('customer_name');
    clearInput('customer_email');
  }

  getCustomerDetails() {
    return new Customer(this.customerName.value, this.customerEmail.value);
  }

  validate() {
    return new Promise(
             (resolve, reject) => {
               if (!this.customerName.value) {
                 reject("Customer name must be filled!");
               } else if (!this.customerEmail.value) {
                 reject("Customer email must be filled!");
               } else {
                 resolve();
               }
             }
           );
  }

  componentDidMount() {
    this.customerName  = document.getElementById('customer_name');
    this.customerEmail = document.getElementById('customer_email');
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
          <input id="customer_email" type="email" className="validate" />
          <label htmlFor="customer_email">Customer Email</label>
        </div>
      </div>
    );
  }
};
