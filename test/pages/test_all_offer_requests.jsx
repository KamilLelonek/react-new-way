import React from "react/addons";

let { TestUtils } = React.addons;

import AllOfferRequests from "../../src/pages/all_offer_requests/page"

let mockData = [{
  dump: {
    id: "0b144ee2-9065-475c-9951-a9d1dfeb4a54",
    delivery: {
      id: "2993a641-891f-49cb-ab15-b8388d6a54e8",
      name: "express",
      description: "Delivery by the next business day."
      },
    products: [
        {
        id: "e5822305-6fe5-4fc4-abd3-2e3407bb0622",
        category: {
          id: "3f35d3cf-bb40-4b94-a1b1-1804e46ee5b9",
          name: "grande",
          oz_capacity: 16
          },
        quantity: 8,
        category_id: "3f35d3cf-bb40-4b94-a1b1-1804e46ee5b9"
        }
      ],
    delivery_id: "2993a641-891f-49cb-ab15-b8388d6a54e8",
    company_name: "Hane, Macejkovic and Jacobson",
    company_phone: "748-449-2666",
    customer_name: "Wade Hudson",
    customer_email: "rylee_ryan@torphyboehm.info",
    company_address: "Trinidad and Tobago"
  }
}]


describe("AllOfferRequests page", function() {
  it("should render empty component without data offer requests", function() {
    let data                  = { "offer-requests": [] };
    let homePageComponent     = TestUtils.renderIntoDocument(<AllOfferRequests data={ data } />);
    let noOfferRequestMessage = TestUtils.findRenderedDOMComponentWithTag(homePageComponent, "span");

    expect(noOfferRequestMessage.getDOMNode().textContent).to.equal('There are no offer requests made so far.');
  });

  it("should render offer requests with filled data", function() {
    let data                  = { "offer-requests": mockData };
    let homePageComponent     = TestUtils.renderIntoDocument(<AllOfferRequests data={ data } />);

    expect(homePageComponent.offerRequests.length).to.eq(mockData.length)
  });
});
