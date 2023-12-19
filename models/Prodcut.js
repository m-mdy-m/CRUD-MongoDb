const getDb = require("../database/database").getDataBase;
const mongodb = require("mongodb");
class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  async save() {
    const db = await getDb();
    return db.collection("products").insertOne(this);
  }
  static isValidID(id) {
    return /^[0-9\w]{24}$/.test(id);
  }
  static async fetch() {
    const db = await getDb();
    return db.collection("products").find().toArray();
  }

  static async findById(id) {
    const db = await getDb();
    const objectId = mongodb.ObjectId;
    if (!this.isValidID(id)) {
      return new Error("invalid id");
    }
    try {
      return db.collection("products").findOne({ _id: new objectId(id) });
    } catch (err) {
      console.log("err =>", err);
    }
  }
  static async deleteById(id){
    const db = await getDb()
    const objectId = mongodb.ObjectId;
    const deleting = await db.collection('products').deleteOne({_id : new objectId(id)})
    console.log('delete user =>', deleting);
    return deleting
  }
}

module.exports = Product;
