require("./stylesheets/main.sass")
require('sugar');

import "babel-core/polyfill";

/**
 * Given a set of routes call #fetchData() on all Route Handlers that define that static method.
 * This is the main mechanism by which a route handler (page) requests its data.
 *
 * @example Defining a route handler that requests data
 *
 *  class SomePage extends React.Component {
 *    static fetchData() {
 *      return getData({
 *        data: {...}
 *      })
 *    }
 *  }
 *
 *  Given a Route handler:
 *    <Route name="some-page" handler={ SomePage } />
 *
 *  when it becomes activated, it will be passed a { data } prop containing the response:
 *    <SomePage data="..." />
 *
 * @param  {[Route]} routes list of activated routes
 *
 * @return {Promise} data containing responses mapped by route name
 */
let fetchDataFromPages = function(routes) {
  let data = {};
  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData().then(response => {
        data[route.name] = response;
      })
    })
  ).then(() => data);
}

import AppRouter from "./router";

import Router from "react-router";
import React  from "react";

// Start the router
Router.run(AppRouter.getRoutes(), function(Handler, state) {
  fetchDataFromPages(state.routes).then((data) => {
    React.render(<Handler data={ data } />, document.getElementById("app"));
  });
});
