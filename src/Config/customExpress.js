//Imports
const express = require('express')
const cors = require('cors')

//Configs
const app = express()

//Import DB
const db = require('../infra/sqlite-db')

//Import Rotas
const rotasBebidas = require('../controller/bebidas')

//Middlewares
app.use(express.json())
app.use(cors())

//usando rotas
rotasBebidas(app, db)

module.exports = app