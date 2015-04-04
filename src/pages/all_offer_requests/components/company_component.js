import React from "react";

import Company from "../../../models/company"

class CompanyComponent extends React.Component {
  render() {
    return(
      <li>
        <div className="collapsible-header">
          <i className="mdi-communication-business"></i>
          CompanyComponent
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            <a className="collection-item">Name<span className="badge">{ this.props.company.name }</span></a>
            <a className="collection-item">Phone<span className="badge">{ this.props.company.phone }</span></a>
            <a className="collection-item">Address<span className="badge">{ this.props.company.address }</span></a>
          </ul>
        </div>
      </li>
    )
  }
}

CompanyComponent.propTypes = { company: React.PropTypes.instanceOf(Company) };

export default CompanyComponent;
