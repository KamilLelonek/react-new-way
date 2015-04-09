import React             from "react/addons";
import stubRouterContext from "./stub_router_context";
import AppRouter         from "../../src/router";
import { RouteHandler }  from "react-router";

let { TestUtils } = React.addons;

describe("AppRouter Router", function() {
  let appRouterComponent;

  beforeEach(function() {
    let StubbedAppRouter = stubRouterContext(AppRouter);
    appRouterComponent   = TestUtils.renderIntoDocument(<StubbedAppRouter />);
  });

  it("should return routes", function() {
    let routes = AppRouter.getRoutes();
    expect(routes).to.exist;
  });

  it("should render with anchor tag in navigation", function() {
    let links = TestUtils.scryRenderedDOMComponentsWithTag(appRouterComponent, "a");

    expect(links).to.have.length.of.at.least(2);

    let linkTitles = links.map(function(link) {
      return link.getDOMNode().textContent;
    });

    expect(linkTitles).to.include('Make offer request');
    expect(linkTitles).to.include('Offer requests');
  });

  it("should include <RouterHandler> component", function() {
    let handler = TestUtils.findRenderedComponentWithType(appRouterComponent, RouteHandler);
    expect(handler).to.exist;
  });
});
