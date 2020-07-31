const express = require('express')
const app = express()
const bd = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = bd

app.listen(3000, () => {
    console.log('back top')
})