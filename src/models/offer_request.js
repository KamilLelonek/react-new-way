import Delivery from "./delivery";
import Product  from "./product";
import Company  from "./company";
import Customer from "./customer";

export default class OfferRequest {
  constructor(id, delivery, products, company, customer) {
    this.id       = id;
    this.delivery = delivery;
    this.products = products;
    this.company  = company;
    this.customer = customer;
  }

  static buildFromJson(offerRequestJson) {
    let delivery = Delivery.buildFromJson(offerRequestJson['delivery']);
    let products = offerRequestJson['products'].map(productJson => Product.buildFromJson(productJson));
    let company  = Company.buildFromJson(offerRequestJson);
    let customer = Customer.buildFromJson(offerRequestJson);

    return new OfferRequest(
      offerRequestJson['id'],
      delivery,
      products,
      company,
      customer
    );
  }
}
