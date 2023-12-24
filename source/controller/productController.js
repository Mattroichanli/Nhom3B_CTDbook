const SP = require('../model/ttsp');
const Cart = require('../model/giohang');
const Don = require('../model/donhang');
const Ma = require('../model/magiamgia');
const Love = require('../model/yeuthich');
const { userController, setKh, getKh, setMail, getMail} = require('./userController');

let err = ''
let key = '', muangay = true; /*giohang*/

const productController = {
    async sachmoi(req, res) {
      const latestProducts = await SP.find()
                                     .sort({ createdAt: -1 }) // Sắp xếp theo trường createdAt giảm dần để lấy sản phẩm mới nhất
      res.render('test_sachmoi', { spmois: latestProducts, title: 'Sách mới', pageTitle: 'SÁCH MỚI', kh: getKh()});
    },
    async sachbanchay(req, res) {
      const latestProducts = await SP.find()
                                     .sort({ luotban: -1 }) // Sắp xếp theo trường luotban giảm dần để lấy sản phẩm bán nhiều nhất
      res.render('test_sachmoi', { spmois: latestProducts, title: 'Sách bán chạy', pageTitle: 'SÁCH BÁN CHẠY'});
    },
    async tieuthuyet(req, res) {
      SP.find({danhmuc: 'tieuthuyet'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Tiểu thuyết', pageTitle: 'TIỂU THUYẾT', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async tntv(req, res) {
      SP.find({danhmuc: 'tntv'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Truyện ngắn - Tản văn', pageTitle: 'TRUYỆN NGẮN-TẢN VĂN', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async lightnovel(req, res) {
      SP.find({danhmuc: 'lightnovel'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Light novel', pageTitle: 'LIGHT NOVEL', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async truyentranh(req, res) {
      SP.find({danhmuc: 'truyentranh'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Truyện tranh', pageTitle: 'TRUYỆN TRANH', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async sgk(req, res) {
      SP.find({danhmuc: 'sgk'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Sách giáo khoa', pageTitle: 'SÁCH GIÁO KHOA', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async luyenthi(req, res) {
      SP.find({danhmuc: 'luyenthi'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Luyện thi', pageTitle: 'SÁCH LUYỆN THI', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async nxbkimdong(req, res) {
      SP.find({nxb: 'Kim Đồng'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'NXB Kim Đồng', pageTitle: 'NXB KIM ĐỒNG', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async nxbnhanam(req, res) {
      SP.find({nxb: 'Nhã Nam'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'NXB Nhã Nam', pageTitle: 'NXB NHÃ NAM', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async search(req, res) {
      const name = req.params.name;
      const words = name.split(' '); // Tách name thành các từ cách nhau bởi dấu cách
      
      const conditions = words.map(word => ({
          $or: [
              { tensach: { $regex: new RegExp(word, 'i') } }, // Tìm kiếm từng từ trong trường tensach
              { id: { $regex: new RegExp(word, 'i') } } // Tìm kiếm từng từ trong trường id
          ]
      }));
      // $or để kết hợp các điều kiện tìm kiếm
      const searchQuery = { $or: conditions };
      
      // Tìm kiếm trong collection
      await SP.find(searchQuery)
      .then(result => {
        res.render('search', { spmois: result, title: 'Tìm kiếm', key:name, kh: getKh()});
      })
      .catch(err => {
        console.log(err);
      });
    },
    async addNewProduct(req, res) {
      const sp = new SP({
        id: 'hoangtube',
        tensach: 'Hoàng Tử Bé',
        masp: '0022',
        danhmuc: 'tntv',
        nxb: 'Kim Đồng',
        tacgia: 'Antoine De Saint-Exupéry',
        namxb: 2022,
        dichgia: 'Nguyễn Thành Long',
        giagoc: '35.000 đ',
        giagiam: '33.250 đ',
        phantram: '5%',
        trongluong: 120,
        kichthuoc: '19 x 13 x 0.7 cm',
        sotrang: 112,
        bia: 'Bìa mềm',
        img_small1: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244868999.jpg',
        img_small2: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/hoang_tu_be_tai_ban_2022/2022_11_11_14_12_20_1-390x510.jpg',
        img_small3: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/hoang_tu_be_tai_ban_2022/2022_11_11_14_12_20_5-390x510.jpg',
        img_small4: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/hoang_tu_be_tai_ban_2022/2022_11_11_14_12_20_2-390x510.jpg',
        img_small5: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/hoang_tu_be_tai_ban_2022/2022_11_11_14_12_20_3-390x510.jpg',
        mota: '“...Cậu hoàng tử chợp mắt ngủ, tôi bế em lên vòng tay tôi và lại lên đường. Lòng tôi xúc động. Tôi có cảm giác như trên Mặt Đất này không có gì mong manh hơn. Nhờ ánh sáng trăng, tôi nhìn thấy vầng trán nhợt nhạt ấy, đôi mắt nhắm nghiền các lẵng tóc run rẩy trước gió, và tôi nghĩ thầm: "Cái mà ta nhìn thấy đây chỉ là cái vỏ. Cái quan trọng nhất thì không nhìn thấy được..." ANTOINE DE SAINT-EXUPÉRY<br><br>“Hoàng tử bé ngắn mà mãnh liệt... biểu hiện nỗi đau của nhà văn và tư tưởng triết học của ông về ý nghĩa của sự có mặt ở trên đời, nỗi khát khao không thể nào vơi được về lòng nhân ái, về sự cảm thông giữa những con người...” - Dịch giả NGUYỄN THÀNH LONG',
        luotban: 4,
        })
        sp.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
      },
    async ttsp(req, res) {
        const url = req.params.id; 
        SP.findOne({id: url})
        .then(result => {
            SP.find({danhmuc: result.danhmuc})
            .then(splq => {
              res.render('tt', {sp: result, splq: splq, title: result.tensach , err: err, kh: getKh(), mail: getMail()});
              err = '';
            })
          })
          .catch(err => {
            console.log(err);
          });
    },

    /*-----Giỏ hàng-----*/ 
    async themgio(req, res) {
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const mail = getMail();
      key = getRandomNumber(1, 1000000000000);
      console.log(key);
      if (mail == '') {
        const cart = new Cart({ mail: 'no'+ key, masp: req.body.masp, sl: req.body.sl});            
          cart.save()
            .then(savedCart => {    
              res.redirect('/thanhtoan');
            })
            .catch(err => {
              console.log(err);
            });
      } 
      else {
        const sl = parseInt(req.body.sl, 10);
        const filter = { mail: req.body.mail, masp: req.body.masp};

        Cart.findOne(filter)
        .then(result => {
          if (result != null)
          {
            Cart.findOneAndUpdate(filter, {sl: result.sl+sl}, { new: true })
            .then(updatedRecord => { 
                err = 'No';           
                res.redirect(`/main/${req.body.id}`);
            })
            .catch(err => {
              err = 'Yes';
              res.redirect(`/main/${req.body.id}`);
            });
          }
          else
          {
            const cart = new Cart({ mail: req.body.mail, masp: req.body.masp, sl: req.body.sl});            
            cart.save()
              .then(savedCart => {
                err = 'No';             
                res.redirect(`/main/${req.body.id}`);
              })
              .catch(err => {
                err = 'Yes';
                res.redirect(`/main/${req.body.id}`);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
      }  
    }, 
    async giohang(req, res) {
      const mail = getMail();
      if (mail == '') {
        err = 'No Mail';
        res.render('giohang', {title: 'Giỏ hàng', err: err, kh: getKh()});
        err = '';
      } 
      else {
        let allSP = [];
        Cart.find({mail: mail})
        .then(result => {
          return Promise.all(result.map(async r => {
            // Thực hiện cuộc gọi để lấy thông tin sản phẩm và giữ lại thông tin số lượng
            const infoSP = await SP.findOne({ masp: r.masp });
            const infoFull = { ...infoSP.toObject(), sl: r.sl };
            return infoFull;
          }));
        })
        .then(resultsArray => {
          allSP = resultsArray;
          res.render('giohang', { sps: allSP, title: 'Giỏ hàng', err: err, kh: getKh()});
        })  
        .catch(err => {
          console.log(err);
        });
      }          
    },
    async xoasp(req, res) {
      const masp = req.params.masp;
      const mail = getMail();

      Cart.findOneAndDelete({mail: mail, masp: masp})
      .then(result => {
        res.json({ redirect: '/giohang' });
      })
      .catch(err => {
        console.log(err);
      });
    },
    async capnhatgio(req, res) {
      const mail = getMail();
      const cartData = req.body;

      // Duyệt qua từng sản phẩm trong cartData
      Object.keys(cartData).forEach(async masp => {
        const soluong = parseInt(cartData[masp]);

        // Cập nhật số lượng trong cơ sở dữ liệu
        try {
          await Cart.findOneAndUpdate({mail, masp}, { sl: soluong },  { new: true })
          .then(updatedRecord => { 
            res.redirect('/giohang');
          });
        } catch (error) {
          console.error(`Lỗi khi cập nhật số lượng cho sản phẩm ${masp}: ${error}`);
        }
      });
    },    
    async muangay(req, res) {
      muangay = true;
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const mail = getMail();
      key = getRandomNumber(1, 1000000000000);
      const cart = new Cart({ mail: 'no'+ key, masp: req.body.masp, sl: req.body.sl});            
        cart.save()
          .then(savedCart => {    
            res.json({ redirect: '/thanhtoan' });
          })
          .catch(err => {
            console.log(err);
          });
    },    
    async magiamgia(req, res) {
      Ma.findOne({ma: req.body.ma})
        .then(result => {
            if (result != null){
              res.json({ thongbao: 'ok', phantram: result.phantram });
            } else {
              res.json({ thongbao: 'no' });
            }          
          })
          .catch(err => {
            console.log(err);
          });
    }, 
    async thanhtoan(req, res) {
      const mail = getMail();
      if (muangay) {
        err = '';
        console.log(err);
        Cart.find({mail: 'no'+key})
            .then(result => {
              return Promise.all(result.map(async r => {
                // Thực hiện cuộc gọi để lấy thông tin sản phẩm và giữ lại thông tin số lượng
                const infoSP = await SP.findOne({ masp: r.masp });
                const infoFull = { ...infoSP.toObject(), sl: r.sl };
                return infoFull;
              }));
            })
            .then(resultsArray => {
              allSP = resultsArray;
              res.render('thanhtoan1', { sps: allSP, title: 'Thanh toán', err: err, kh: getKh()});
              muangay = false;
              err = '';
              return Cart.findOneAndDelete({mail: 'no'+key});
            })
            .catch(err => {
              console.log(err);
            });       
      } 
      else {
        Cart.find({mail: mail})
        .then(result => {
          err = 'Mail'; /*để hiển thị Login? */
          if (result != null)
          {
            let allSP = [];
            Cart.find({mail: mail})
            .then(result => {
              return Promise.all(result.map(async r => {
                // Thực hiện cuộc gọi để lấy thông tin sản phẩm và giữ lại thông tin số lượng
                const infoSP = await SP.findOne({ masp: r.masp });
                const infoFull = { ...infoSP.toObject(), sl: r.sl };
                return infoFull;
              }));
            })
            .then(resultsArray => {
              allSP = resultsArray;
              res.render('thanhtoan1', { sps: allSP, title: 'Thanh toán', err: err, kh: getKh()});
              err = '';
            })
            .catch(err => {
              console.log(err);
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
      }  
    },
    async thanhtoan2(req, res) {
      var ship = '';
      if (req.body.tinh == "HCM")
        ship = "25.000 đ";
      else
        ship = "35.000 đ";

      const masp = Object.keys(req.body).filter(key => !['ma', 'tong', 'hoten', 'mail', 'sdt', 'diachi', 'tinh', 'huyen', 'xa'].includes(key));
      const sl = masp.map(maspKey => req.body[maspKey]);
      
      const don = new Don({
        mail: req.body.mail,
        hoten: req.body.hoten,
        sdt: req.body.sdt,
        diachi: req.body.diachi + ", " + req.body.xa + ", " + req.body.huyen + ", " + req.body.tinh,
        tongtien: req.body.tong,
        sanphams: masp,
        sl: sl,
        ma: req.body.ma,
        ship: ship,
      })           
      don.save();
      res.redirect('/thanhtoan2');
    },
    async pttt(req, res) {      
      res.render('thanhtoan2', {title: 'Thanh toán', kh: getKh()});
    },    

    /*Yêu thích*/
    async yeuthich(req, res) {
      const mail = getMail();
      if (mail == '') {
        err = 'No Mail';
        res.render('yeuthich', {title: 'Yêu thích', err: err, kh: getKh()});
        err = '';
      } 
      else {
        let allSP = [];
        Love.find({mail: mail})
        .then(result => {
          return Promise.all(result.map(async r => {
            // Thực hiện cuộc gọi để lấy thông tin sản phẩm
            const infoSP = await SP.findOne({ masp: r.masp });
            return infoSP.toObject();
          }));
        })
        .then(resultsArray => {
          allSP = resultsArray;
          res.render('yeuthich', { sps: allSP, title: 'Yêu thích', err: err, kh: getKh()});
        })  
        .catch(err => {
          console.log(err);
        });
      }     
         
    },    
    async boyeuthich(req, res) {
      const masp = req.params.masp; 
      const mail = getMail();

      Love.findOneAndDelete({mail: mail, masp: masp})      
      .catch(err => {
        console.log(err);
      }); 
    }, 
    async themyeuthich(req, res) {
      const love = new Love({ mail: req.body.mail, masp: req.body.masp});            
  
      love.save()
      .catch(err => {
        console.log(err);
      }); 
    },
    async ktrayeuthich(req, res) {
      const masp = req.params.masp; 
      const mail = getMail();
      const filter = { mail: mail, masp: masp};

      Love.findOne(filter)
      .then(result => {
        if (result != null)
        {
          res.json({thongbao: 'loved'});
        }
        else
        {
          res.json({thongbao: 'noloved'});
        }
      })
      .catch(err => {
        console.log(err);
      });       
    }, 
    async xoaspyt(req, res) {
      const masp = req.params.masp; 
      const mail = getMail();

      Love.findOneAndDelete({mail: mail, masp: masp})  
      .then(result => {
        res.json({redirect: '/yeuthich'});
      })    
      .catch(err => {
        console.log(err);
      }); 
    },    
}

module.exports = productController;
