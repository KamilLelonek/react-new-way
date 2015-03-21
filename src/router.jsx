import React  from "react";
import Router from "react-router";

import AllOfferRequests from "./pages/all_offer_requests/page";
import MakeOfferRequest from "./pages/make_offer_request/page";
import Footer           from "./components/footer";
import Navbar           from "./components/navbar";

let { Route, DefaultRoute, RouteHandler, Link } = Router;

export default class AppRouter extends React.Component {
  static getRoutes() {
    return (
      <Route          name="app" path="/"       handler={ AppRouter } >
        <DefaultRoute name="offer-requests"     handler={ AllOfferRequests } />
        <Route        name="make-offer-request" handler={ MakeOfferRequest } />
      </Route>
    );
  }

  render() {
    return (
      <div id="container">
        <Navbar/>
        <main>
          <RouteHandler {...this.props} />
        </main>
        <Footer/>
      </div>
    );
  }
};
