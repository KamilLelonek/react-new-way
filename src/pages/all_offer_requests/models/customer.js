export default class Customer {
  constructor(name, email) {
    this.name  = name;
    this.email = email;
  }

  static buildFromJson(offerRequestJson) {
    return new Customer(
      offerRequestJson['customer_name'],
      offerRequestJson['customer_email']
    );
  }
}
