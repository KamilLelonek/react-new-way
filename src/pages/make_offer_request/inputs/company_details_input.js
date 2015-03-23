import React from "react";

export default class CompanyDetailsInput extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
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
              <input id="address" type="text" className="validate" />
              <label htmlFor="address">Address</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
};
