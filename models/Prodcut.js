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
  static isValidID(id){
    return /^[0-9\w]{24}$/.test(id)
  }
  static async findById(id) {
    const db = await getDb();
  }
}

module.exports = Product;
