import React from "react";

import { clearInput } from "../services/clear_input";
import Company        from "../../../models/company"

export default class CompanyDetailsInput extends React.Component {
  resetState() {
    clearInput('company_name');
    clearInput('company_phone');
    clearInput('company_address');
  }

  getCompanyDetails() {
    let companyName    = document.getElementById('company_name').value;
    let companyPhone   = document.getElementById('company_phone').value;
    let companyAddress = document.getElementById('company_address').value;
    return new Company(companyName, companyPhone, companyAddress);
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <i className="mdi-editor-format-color-text prefix"></i>
            <input id="company_name" type="text" className="validate" />
            <label htmlFor="company_name">Company Name</label>
          </div>
          <div className="input-field col s6">
            <i className="mdi-communication-phone prefix"></i>
            <input id="company_phone" type="text" className="validate" />
            <label htmlFor="company_phone">Company Phone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="mdi-communication-business prefix"></i>
            <input id="company_address" type="text" className="validate" />
            <label htmlFor="company_address">Address</label>
          </div>
        </div>
      </div>
    );
  }
}
