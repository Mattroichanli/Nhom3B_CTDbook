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

   /* mới */
   app.get('/giohang', productRoute)
   app.post('/main/:id', productRoute)

 }).catch((error) => {
   console.error(error);
 });


//TEST
const Cart = require('./model/giohang');
app.get('/try', async (req, res) => { 
  mail = 'doanthianhduong.20@gmail.com';
  masp = '0003';
  sl = 1;
  Cart.findOne({ mail, masp})
    .then(result => {
      console.log(result);
      if (result != null)
      {
        Cart.findOneAndUpdate({mail,masp}, {sl: result.sl+sl}, { new: true })
        .then(updatedRecord => {
          if (updatedRecord) {
            // Bản ghi đã được cập nhật
            res.send(updatedRecord);
          } else {
            // Không tìm thấy bản ghi để cập nhật
            res.send('Không tìm thấy bản ghi để cập nhật');
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
      else
      {
        const cart = new Cart({mail,masp,sl});            
        cart.save();
      }
    })
    .catch(err => {
      console.log(err);
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