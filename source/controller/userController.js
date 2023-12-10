const KH = require('../model/kh');

//Các biến toàn cục
let kh = '', err = '', mail = ''
//Username
const setKh = (value) => {
  kh = value;
};
const getKh = () => {
  return kh;
};
//Mail
const setMail = (value) => {
  mail = value;
};
const getMail = () => {
  return mail;
};

const userController = {
    async login(req, res) {
        setKh('');
        res.render('test_login', {title: 'Login', err: err, kh: getKh()});
        err = '';
    },
    async signup(req, res) {
        setKh('');
        res.render('test_signup', {title: 'SignUp', err: err, kh: getKh()});
        err = '';
    },
    async postLogin(req, res) {
      try {
          const result = await KH.findOne({ mail: req.body.mail, password: req.body.password });
  
          if (result !== null) {
              setKh(result.username);
              setMail(result.mail);
              console.log(mail);
              res.redirect('/main');
          } else {
              err = "Please try again. Email or Password are wrong!!!";
              res.redirect('/login');
          }
      } catch (error) {
          console.log(error);
          // Xử lý lỗi nếu cần
          res.status(500).send("Internal Server Error");
      }
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
            res.render('test_signup', {title: 'SignUp', err: 'Err: Your passwords are not the same.', kh: getKh()});
            err = '';
          }
    }
}

module.exports = {userController,setKh,getKh,setMail,getMail};