export default class Delivery {
  constructor(id, name, description) {
    this.id          = id;
    this.name        = name;
    this.description = description;
  }

  static buildFromJson(deliveryJson) {
    return new Delivery(
      deliveryJson['id'],
      deliveryJson['name'],
      deliveryJson['description']
    );
  }
}
