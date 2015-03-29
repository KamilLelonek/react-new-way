import React from "react";

import OfferRequest from "../../../models/offer_request"

class OfferDetailsComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header active">
          <i className="mdi-action-assignment"></i>
          Offer Request
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            <a className="collection-item">ID<span className="badge">{ this.props.offerRequest.id }</span></a>
          </ul>
        </div>
      </div>
    )
  }
}

OfferDetailsComponent.propTypes = { offerRequest: React.PropTypes.instanceOf(OfferRequest) };

export default OfferDetailsComponent
