const {MongoClient } = require("mongodb")


const url = "mongodb://localhost:27017/CRUD"

let db;

const connect = async ()=>{
    try{
        const client = await MongoClient.connect(url)
        db = client.db()
        console.log('connect database');
        return client
    }catch(e){
        console.log('cannot connect ', e);
    }
}

const getDataBase = async()=>{
    if(db){
        return db
    }
    throw 'no database'
}

exports.connect = connect
exports.getDataBase = getDataBase
