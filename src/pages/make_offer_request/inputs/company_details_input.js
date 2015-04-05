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
    return new Company(this.companyName.value, this.companyPhone.value, this.companyAddress.value);
  }

  validate() {
    return new Promise(
             (resolve, reject) => {
               if (!this.companyName.value) {
                 reject("Comapny name must be filled!");
               } else if (!this.companyPhone.value) {
                 reject("Company phone must be filled!");
               } else if (!this.companyAddress.value) {
                 reject("Company address must be filled!");
               } else {
                 resolve();
               }
             }
           );
  }

  componentDidMount() {
    this.companyName    = document.getElementById('company_name');
    this.companyPhone   = document.getElementById('company_phone');
    this.companyAddress = document.getElementById('company_address');
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
            <input id="company_phone" type="tel" className="validate" />
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
