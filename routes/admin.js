const express = require('express')
const route = express.Router()
const adminControllers = require('../controllers/admin')

route.get('/dashboard', adminControllers.getDashboard )


route.post('/dashboard/:prodId', adminControllers.deleteProd)
module.exports = route