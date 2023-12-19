const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/crud";

let db;

const connect = async () => {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db();
  return client;
};

const getDataBase = async () => {
  if (db) {
    return db;
  }
  throw "no database";
};

exports.connect = connect;
exports.getDataBase = getDataBase;
