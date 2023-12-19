const express = require('express')

const route = express.Router()

const homeControllers = require('../controllers/home')
route.get('/', homeControllers.getHome)

module.exports = route