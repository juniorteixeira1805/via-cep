const routes = require('express').Router()

const cepController = require('../Controllers/cep/index')

routes.post('/register', cepController.store)

module.exports = routes
