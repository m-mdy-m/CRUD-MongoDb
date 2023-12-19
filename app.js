const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const database = require('./database/database').connect
app.set('view engine', 'ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , "public")))


const start = async ()=>{
    try{
        await database()
        app.listen(3000,()=>{
            console.log('server run on port 3000');
        })
    }catch(e){
        console.log('cannot connect data base ', e);
    }
}

start()