import React from "react";

import Company from "../models/company"

class CompanyComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header"><i className="mdi-image-filter-drama"></i>CompanyComponent</div>
        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </div>
    )
  }
}

CompanyComponent.propTypes = { company: React.PropTypes.instanceOf(Company) };

export default CompanyComponent;
