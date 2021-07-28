//Imports
const express = require('express')

//Configs
const app = express()


//Import DB
const db = require('../infra/sqlite-db')

//Import Rotas
const rotasBebidas = require('../controller/bebidas')


//Middlewares
app.use(express.json())

//usando rotas
rotasBebidas(app, db)

module.exports = app