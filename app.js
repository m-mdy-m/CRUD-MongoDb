const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
app.use('view engine', 'ejs')
app.use('views','views')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , "public")))

app.listen(3000,()=>{
    console.log('server run on port 3000');
})
