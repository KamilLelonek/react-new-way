import React from "react/addons";

let { TestUtils } = React.addons;

import Footer from "../../src/components/footer";

describe("Footer", function() {
  it("should render footer with current year", function() {
    let footer      = TestUtils.renderIntoDocument(<Footer />);
    let copyright   = TestUtils.findRenderedDOMComponentWithClass(footer, "current-year");
    let currentYear = new Date().getFullYear();

    expect(copyright.getDOMNode().textContent).to.contain(currentYear);
  });
});
