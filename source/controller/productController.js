const SP = require('../model/ttsp');

const productController = {
    async sachmoi(req, res) {
      const latestProducts = await SP.find()
                                     .sort({ createdAt: -1 }) // Sắp xếp theo trường createdAt giảm dần để lấy sản phẩm mới nhất
      res.render('test_sachmoi', { spmois: latestProducts, title: 'Sách mới', pageTitle: 'SÁCH MỚI'});
    },
    async sachbanchay(req, res) {
      const latestProducts = await SP.find()
                                     .sort({ luotban: -1 }) // Sắp xếp theo trường luotban giảm dần để lấy sản phẩm bán nhiều nhất
      res.render('test_sachmoi', { spmois: latestProducts, title: 'Sách bán chạy', pageTitle: 'SÁCH BÁN CHẠY'});
    },
    async tieuthuyet(req, res) {
      SP.find({danhmuc: 'tieuthuyet'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Tiểu thuyết', pageTitle: 'TIỂU THUYẾT'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async tntv(req, res) {
      SP.find({danhmuc: 'tntv'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Truyện ngắn - Tản văn', pageTitle: 'TRUYỆN NGẮN-TẢN VĂN'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async lightnovel(req, res) {
      SP.find({danhmuc: 'lightnovel'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Light novel', pageTitle: 'LIGHT NOVEL'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async truyentranh(req, res) {
      SP.find({danhmuc: 'truyentranh'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Truyện tranh', pageTitle: 'TRUYỆN TRANH'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async sgk(req, res) {
      SP.find({danhmuc: 'sgk'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Sách giáo khoa', pageTitle: 'SÁCH GIÁO KHOA'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async luyenthi(req, res) {
      SP.find({danhmuc: 'luyenthi'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'Luyện thi', pageTitle: 'SÁCH LUYỆN THI'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async nxbkimdong(req, res) {
      SP.find({nxb: 'Kim Đồng'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'NXB Kim Đồng', pageTitle: 'NXB KIM ĐỒNG'});
        })
        .catch(err => {
          console.log(err);
        });
    },
    async nxbnhanam(req, res) {
      SP.find({nxb: 'Nhã Nam'})
      .then(result => {
          res.render('test_sachmoi', { spmois: result, title: 'NXB Nhã Nam', pageTitle: 'NXB NHÃ NAM'});
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
        res.render('search', { spmois: result, title: 'Tìm kiếm', key:name});
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
            res.render('tt', {sp: result, title: result.tensach });
          })
          .catch(err => {
            console.log(err);
          });
      }
}

module.exports = productController;
