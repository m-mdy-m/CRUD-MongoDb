const express = require('express')

const route = express.Router()


route.get('/', (req,res)=>{
    res.render('home.ejs',{
        path:req.path
    })
})

module.exports = route