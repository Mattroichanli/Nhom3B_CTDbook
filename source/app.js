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
 }).catch((error) => {
   console.error(error);
 });


//TEST
const Cart = require('./model/giohang');
const Don = require('./model/magiamgia');
app.get('/try', async (req, res) => { 
  const newDon = new Don({
    ma: 'CT',
    phantram: 10,
    sl: 10,
  });
  
  // Lưu đơn hàng vào cơ sở dữ liệu
  newDon.save()
    .then(savedDon => {
      console.log('Đơn hàng đã được lưu:', savedDon);
    })
    .catch(error => {
      console.error('Lỗi khi lưu đơn hàng:', error);
    });
});


/*
app.get('/giohang', (req, res) => {
  res.render('giohang.ejs', {title: 'Giỏ hàng'});
  err = '';
});
app.get('/thanhtoan1', (req, res) => {
  res.render('thanhtoan1.ejs', {title: 'Thanh toán'});
  err = '';
});

app.get('/thanhtoan2', (req, res) => {
  res.render('thanhtoan2.ejs', {title: 'Thanh toán'});
  err = '';
});*/