import React  from "react";
import Router from "react-router";

let { Route, DefaultRoute, RouteHandler, Link } = Router;

export default class Navbar extends React.Component {
  render() {
    return(
      <nav className="light-blue darken-2">
        <a href="/" className="brand-logo">React New Way</a>
        <ul>
          <li className="right hide-on-med-and-down"><Link to="make-offer-request">Make offer request</Link></li>
          <li className="right hide-on-med-and-down"><Link to="offer-requests">Offer requests</Link></li>
        </ul>
      </nav>
    )
  }
}
