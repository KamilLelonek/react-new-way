import React                 from "react";
import { getData }           from "../../common/request";
import OfferRequest          from "../../models/offer_request"
import OfferRequestComponent from "./components/offer_request_component"
import NoDataComponent       from "./components/no_data_component"

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
    let element = this.offerRequests.length === 0 ? <NoDataComponent /> : this.offerRequests
    return (
      <div className="container">
        { element }
      </div>
    );
  }
};

AllOfferRequests.propTypes    = { data: React.PropTypes.object };
AllOfferRequests.defaultProps = { "offer-requests": [] };

export default AllOfferRequests;
