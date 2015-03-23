import React from "react";

export default class CustomerDetailsInput extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="mdi-action-account-circle prefix"></i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">Customer Name</label>
            </div>
            <div className="input-field col s6">
              <i className="mdi-communication-email prefix"></i>
              <input id="icon_email" type="tel" className="validate" />
              <label htmlFor="icon_email">Customer Email</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
};
