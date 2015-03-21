import React from "react";
import { getData } from "../../common/request";

export default class MakeOfferRequest extends React.Component {
  static fetchData() {
    return Promise.all([
      getData("/ingredients"),
      getData("/categories"),
      getData("/deliveries"),
    ]);
  }

  componentWillMount() {
    console.log("[MakeOfferRequest] will mount with server response: ", this.props.data["make-offer-request"]);
  }

  render() {
    let [ingredients, categories, deliveries] = this.props.data["make-offer-request"];

    let title = ingredients;

    return (
      <div id="make-offer-request-page">
        <h1>{ title }</h1>
      </div>
    );
  }
};
