export default class Category {
  constructor(id, name, oz_capacity) {
    this.id          = id;
    this.name        = name;
    this.oz_capacity = oz_capacity;
  }

  static buildFromJson(categoryJson) {
    return new Category(
      categoryJson['id'],
      categoryJson['name'],
      categoryJson['oz_capacity']
    );
  }
}
