import React from "react";

export default class CompanyDetailsInput extends React.Component {
  resetState() {
    console.log(this + " resetState");
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
