const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const connect = require('./database/database')

const webRoute = require('./route/homeRoute')
const userRoute = require('./route/userRoute')
const productRoute = require('./route/productRoute')

// express app
const app = express();
const port = 3000

// register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

//middleware
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
app.use(express.urlencoded({ extended: true }));

// connect to mongodb & listen for requests
connect().then( () => {
  app.listen(port, () => {
     console.log(`Server running at port: ${port}`);
   })
 })
 .then( () => {
   app.get('/', webRoute)
   app.get('/main', webRoute)
   app.get('/signup', userRoute)
   app.post('/signup', userRoute)
   app.post('/login', userRoute)
   app.get('/login', userRoute)

   app.get('/sachmoi', productRoute)
   app.get('/sachbanchay', productRoute)
   app.get('/nxbkimdong', productRoute)
   app.get('/nxbnhanam',productRoute)
   app.get("/tieuthuyet", productRoute);
   app.get("/tntv", productRoute);
   app.get("/lightnovel", productRoute);
   app.get("/truyentranh", productRoute);
   app.get("/sgk", productRoute);
   app.get("/luyenthi", productRoute);
   app.get('/add-sp', productRoute)
   app.get('/search/:name', productRoute)
   app.get('/main/:id', productRoute)
 }).catch((error) => {
   console.error(error);
 });
/*
//TEST
app.get('/try', (req, res) => {        
  SP.find({danhmuc: 'sachmoi'})
  .then(result => {
      res.send(result);
      //res.render('tt', { sp: result, title: result.tensach });
    })
    .catch(err => {
      console.log(err);
    });
});*/