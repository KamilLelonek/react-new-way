import React from "react";

import OfferRequest from "../models/offer_request"

class OfferDetailsComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="collapsible-header active"><i className="mdi-image-filter-drama"></i>First</div>
        <div className="collapsible-body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    )
  }
}

OfferDetailsComponent.propTypes = { offerRequest: React.PropTypes.instanceOf(OfferRequest) };

export default OfferDetailsComponent
