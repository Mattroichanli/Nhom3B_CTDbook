const SP = require('../model/ttsp');
const Cart = require('../model/giohang');
const { userController, setKh, getKh, setMail, getMail} = require('./userController');

let err = ''

const productController = {
    async sachmoi(req, res) {
      const latestProducts = await SP.find()
                                     .sort({ createdAt: -1 }) // Sắp xếp theo trường createdAt giảm dần để lấy sản phẩm mới nhất
      res.render('test_sachmoi', { spmois: latestProducts, title: 'Sách mới', pageTitle: 'SÁCH MỚI', kh: getKh()});
    },
    async sachbanchay(req, res) {
      //const latestProducts = await SP.find()
      //                               .sort({ luotban: -1 }) // Sắp xếp theo trường luotban giảm dần để lấy sản phẩm bán nhiều nhất
      //res.render('test_sachmoi', { spmois: latestProducts, title: 'Sách bán chạy', pageTitle: 'SÁCH BÁN CHẠY'});

      SP.find({danhmuc: 'sachmoi'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Sách bán chạy', pageTitle: 'SÁCH BÁN CHẠY', kh: getKh()});
        })
        .catch(err => {
          console.log(err);
        });
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
      const regex = new RegExp(name, 'i');
      await SP.find({ 
        $or: [
            { tensach: { $regex: regex } }, // Điều kiện 1: tìm kiếm trong trường tensach
            { id: { $regex: regex } } // Điều kiện 2: tìm kiếm trong trường ip
        ]
    })
      .then(result => {
        res.render('search', { spmois: result, title: 'Tìm kiếm', kh: getKh()});
      })
      .catch(err => {
        console.log(err);
      });
    },
    /*async addNewProduct(req, res) {
        const sp = new SP({
            id: 'hoikivanitastap9',
            tensach: 'Hồi Kí Vanitas - Tập 9',
            masp: '0017',
            danhmuc: 'truyentranh',
            nxb: 'Kim Đồng',
            tacgia: 'Jun Mochizuki',
            namxb: 2022,
            dichgia: 'Ruyuha Kyouka',
            giagoc: '36.000 đ',
            giagiam: '34.200 đ',
            phantram: '5%',
            trongluong: 250,
            kichthuoc: '18 x 13 cm',
            sotrang: 196,
            bia: 'Bìa mềm',
            img_small1: 'https://cdn0.fahasa.com/media/catalog/product/h/o/hoi-ki-vanitas---tap-9.jpg',
            img_small2: 'https://cdn0.fahasa.com/media/catalog/product/h/o/hoi_ki_vanitas_-_tap_9.jpg',
            img_small3: 'https://down-vn.img.susercontent.com/file/23ed1291fa64059339f4213b3abf6590',
            img_small4: 'https://down-vn.img.susercontent.com/file/ffd208b41dddb913597f2631d53bfed7',
            img_small5: 'https://salt.tikicdn.com/cache/600x600/ts/product/71/bc/9f/5d9c724a8b852d7b4c5b396132bd255e.jpg',
            mota: 'Sau khi bị dụ đến cái bẫy do Mikhail giăng sẵn, Noé đã bị ép uống máu rồi nhìn vào kí ức của cậu ta. Trước mắt anh hiện lên chặng đường gặp gỡ và chia li giữa “Vampire Mặt Trăng Xanh”, Vanitas và Mikhail… Chỉ là Noé không được vạch trần bóng tối khuất sau vầng trăng ấy.<br><br>“Tôi nhất định phải hạ con Vampire đó”.',
         })

          sp.save()
            .then(result => {
              res.send(result);
            })
            .catch(err => {
              console.log(err);
            });
    },*/

    async ttsp(req, res) {
        const url = req.params.id; 
        SP.findOne({id: url})
        .then(result => {
            res.render('tt', {sp: result, title: result.tensach , err: err, kh: getKh(), mail: getMail()});
            err = '';
          })
          .catch(err => {
            console.log(err);
          });
    },

    /*-----Giỏ hàng-----*/
    async themgio(req, res) {
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
}

module.exports = productController;
