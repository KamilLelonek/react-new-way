import React                 from "react";
import { getData }           from "../../common/request";
import OfferRequest          from "./models/offer_request"
import OfferRequestComponent from "./components/offer_request_component"

class AllOfferRequests extends React.Component {
  static fetchData() {
    return getData("/offer_requests");
  }

  componentWillMount() {
    this.offerRequests = this.props.data["offer-requests"].map(
      offerRequestJsonObject => {
        let offerRequest = OfferRequest.buildFromJson(offerRequestJsonObject.dump);
        return <OfferRequestComponent key={ offerRequest.id } offerRequest={ offerRequest } />;
      }
    )
  }

  render() {
    return (
      <div>
        { this.offerRequests }
      </div>
    );
  }
};

AllOfferRequests.propTypes    = { data: React.PropTypes.object };
AllOfferRequests.defaultProps = { "offer-requests": [] };

export default AllOfferRequests;
