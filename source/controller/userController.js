const KH = require('../model/kh');

//Các biến toàn cục
let kh = '', err = ''

const userController = {
    async login(req, res) {
        res.render('test_login', {title: 'Login', err: err});
        err = '';
    },
    async signup(req, res) {
        res.render('test_signup', {title: 'SignUp', err: err});
        err = '';
    },
    async postLogin(req, res) {
        KH.findOne({ mail: req.body.mail, password: req.body.password })
        .then(result => {
            if (result != null){
              kh = result.username;
              res.redirect('/main');
            }
            else {
              err = "Please try again. Email or Password are wrong!!!";
              res.redirect('/login');
            }
        })
        .catch(err => {
            console.log(err);
        });
    },
    async postSignup(req, res) {
        if (req.body.password == req.body.password1) {
            KH.findOne({ mail: req.body.mail})
                  .then(result => {
                    if (result == null ){
                      const kh = new KH({
                        mail: req.body.mail,
                        password: req.body.password,
                        username: req.body.username,
                      })            
                      kh.save();
                      err = "Welcome! Please login to start! Let's go!!!";
                      res.redirect('/login');
                    }
                    else {
                      err = "Sorry this Email has already signup before. Try another one or Login!";
                      res.redirect('/signup');
                    }
                  })
          }  
          else {
            res.render('test_signup', {title: 'SignUp', err: 'Err: Your passwords are not the same.'});
          }
    }
}

module.exports = userController;