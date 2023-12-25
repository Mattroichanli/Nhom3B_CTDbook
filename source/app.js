const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); /* mới-muangay */

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
app.use(bodyParser.json()); /* mới-muangay */

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

   /* mới */
   app.get('/giohang', productRoute)
   app.post('/main/:id', productRoute)
   app.delete('/giohang/:masp', productRoute)
   app.post('/giohang',productRoute)
   app.get('/thanhtoan', productRoute)
   app.post('/thanhtoan1', productRoute) /*muangay*/
   app.post('/thanhtoan', productRoute) /*magiagia*/
   app.post('/thanhtoan2', productRoute) /*thanhtoan*/
   app.get('/thanhtoan2', productRoute) /*thanhtoan step2*/
   app.get('/yeuthich', productRoute) 
   app.delete('/yeuthich/:masp', productRoute)
   app.post('/yeuthich/:masp', productRoute)
   app.get('/yeuthich/:masp', productRoute)
   app.delete('/boyeuthich/:masp', productRoute)
   /*pay*/
   app.post('/pay', productRoute)
   app.get('/success', productRoute)
   app.get('/cancel', productRoute)

 }).catch((error) => {
   console.error(error);
 });

