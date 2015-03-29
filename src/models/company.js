export default class Company {
  constructor(name, phone, address) {
    this.name    = name;
    this.phone   = phone;
    this.address = address;
  }

  static buildFromJson(offerRequestJson) {
    return new Company(
      offerRequestJson['company_name'],
      offerRequestJson['company_phone'],
      offerRequestJson['company_address']
    );
  }
}
