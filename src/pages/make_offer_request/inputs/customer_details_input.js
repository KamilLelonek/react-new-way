import React from "react";

import { clearInput } from "../../../common/clear_input";

export default class CustomerDetailsInput extends React.Component {
  resetState() {
    clearInput('customer_name');
    clearInput('customer_email');
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
