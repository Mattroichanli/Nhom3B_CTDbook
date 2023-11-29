const mongoose = require("mongoose")
const express = require('express')
const path = require('path')
const connect = require('./database/database')

const webRoute = require('./route/web')
const productRoute = require('./route/productRoute')

const app = express()
const port = 3001

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//config static files
app.use(express.static(path.join(__dirname, 'public')))

connect().then( () => {
   app.listen(port, () => {
      console.log(`Server running at port: ${port}`);
    })
  })
  .then( () => {
    app.use('/', webRoute)
    app.get('/createProduct', productRoute)
    app.get('/products',productRoute)
    app.get('/product/:name',productRoute)
    app.get('/products/KimDong',productRoute)
    app.get('/products/NhaNam',productRoute)
    app.get('/products/sachmoi',productRoute)
    
  }).catch((error) => {
    console.error(error);
  });