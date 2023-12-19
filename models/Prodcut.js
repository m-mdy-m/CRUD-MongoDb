const getDb = require("../database/database").getDataBase;
class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  async save() {
    const db = await getDb();
    return db.collection("products").insertOne(this);
  }
}

module.exports = Product;
