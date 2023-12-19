const getDb = require("../database/database").getDataBase;
const mongodb = require("mongodb");
class Product {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this._id = new mongodb.ObjectId(id)
  }
  async save() {
    let dbUp ;
    const db = await getDb();
    if (this._id) {
      dbUp = await db.collection('products').updateOne({_id : this._id}, {$set : this})
    }else{
      dbUp =  db.collection("products").insertOne(this);
    }
    return dbUp
  }
  static async fetch() {
    const db = await getDb();
    return db.collection("products").find().toArray();
  }

  static async findById(id) {
    const db = await getDb();
    const objectId = mongodb.ObjectId;
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
