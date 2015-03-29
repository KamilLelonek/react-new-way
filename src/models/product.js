import Category from "./category";

export default class Product {
  constructor(id, quantity, category) {
    this.id       = id;
    this.quantity = quantity;
    this.category = category;
  }

  static buildFromJson(productJson) {
    let category = Category.buildFromJson(productJson['category']);
    return new Product(
      productJson['id'],
      productJson['quantity'],
      category
    );
  }
}
