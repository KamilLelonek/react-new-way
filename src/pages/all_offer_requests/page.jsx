import React from "react";
import { getData } from "../../common/request";

export default class AllOfferRequests extends React.Component {
  static fetchData() {
    return getData("/offer_requests");
  }

  componentWillMount() {
    console.log("[AllOfferRequests] will mount with server response: ", this.props.data);
  }

  render() {
    let offerRequests = this.props.data["offer-requests"];
    let title = offerRequests;

    return (
      <div id="offer-requests-page">
        <h1>{ title }</h1>
      </div>
    );
  }
};
