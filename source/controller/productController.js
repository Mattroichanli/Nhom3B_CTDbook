const Products = require("../model/productModel")
//const connect = require("../database/database")

const productController = {
  async createProduct(req, res) { 
      const blog = new Products({
        tensach:"Cây cam ngọt của tôi",
        anhbia:"https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_1-390x510.jpg",
        nxb:"Hội Nhà Văn",
        tacgia:"José Mauro de Vasconcelos",
        dinhdang:"Bìa mềm",
        mota: "Tác giả: José Mauro de Vasconcelos\nNgười Dịch: Nguyễn Bích Lan, Tô Yến Ly\nNXB: Hội Nhà Văn\nNăm XB: 2020\nTrọng lượng (gr): 280\nKích Thước: 20 x 14.5 cm\nSố trang: 244\nHình thức: Bìa Mềm\n“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng sống... một tác phẩm kinh điển của Brazil.” - Booklist\n“Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi nào.” - The National\nHãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt người ta trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi.\nCó hề gì đâu bao nhiêu là hắt hủi, đánh mắng, vì Zezé đã có một người bạn đặc biệt để trút nỗi lòng: cây cam ngọt nơi vườn sau. Và cả một người bạn nữa, bằng xương bằng thịt, một ngày kia xuất hiện, cho cậu bé nhạy cảm khôn sớm biết thế nào là trìu mến, thế nào là nỗi đau, và mãi mãi thay đổi cuộc đời cậu.\nMở đầu bằng những thanh âm trong sáng và kết thúc lắng lại trong những nốt trầm hoài niệm, Cây cam ngọt của tôi khiến ta nhận ra vẻ đẹp thực sự của cuộc sống đến từ những điều giản dị như bông hoa trắng của cái cây sau nhà, và rằng cuộc đời thật khốn khổ nếu thiếu đi lòng yêu thương và niềm trắc ẩn. Cuốn sách kinh điển này bởi thế không ngừng khiến trái tim người đọc khắp thế giới thổn thức, kể từ khi ra mắt lần đầu năm 1968 tại Brazil.\nTÁC GIẢ:\nJOSÉ MAURO DE VASCONCELOS (1920-1984) là nhà văn người Brazil. Sinh ra trong một gia đình nghèo ở ngoại ô Rio de Janeiro, lớn lên ông phải làm đủ nghề để kiếm sống. Nhưng với tài kể chuyện thiên bẩm, trí nhớ phi thường, trí tưởng tượng tuyệt vời cùng vốn sống phong phú, José cảm thấy trong mình thôi thúc phải trở thành nhà văn nên đã bắt đầu sáng tác năm 22 tuổi. Tác phẩm nổi tiếng nhất của ông là tiểu thuyết mang màu sắc tự truyện Cây cam ngọt của tôi. Cuốn sách được đưa vào chương trình tiểu học của Brazil, được bán bản quyền cho hai mươi quốc gia và chuyển thể thành phim điện ảnh. Ngoài ra, José còn rất thành công trong vai trò diễn viên điện ảnh và biên kịch.",
        soluong:10,
        giatien:86400,
        giagoc:108000,
      });
      blog.save().then((result) => {
        res.send(result)
        console.log('add product')
      }).catch((err) => {
        console.log(err);
      });
  },
  async getAllProducts(req, res) {
    Products.find()
    .then((result) => {
      res.send(result)
      console.log('get all products')
    }).catch((err) => {
      console.erro(err);
    });
  },
  async getProductByName(req, res) {
    const { name } = req.params; // Lấy tên sản phẩm từ request 
    try {
      const product = await Products.findOne({ tensach: name }); // Tìm sản phẩm theo tên
      if (!product) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
      res.json(product); // Gửi thông tin sản phẩm về cho client
      console.log('get product by name');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  async getProductKimDong(req, res) {
    try {
      const product = await Products.findOne({ nxb: 'Kim Đồng' }); // Tìm sản phẩm nxb Kim Đồng
      if (!product) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
      res.json(product);
      console.log('get product KimDong');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  async getProductNhaNam(req, res) {
    try {
      const product = await Products.findOne({ nxb: 'Nhã Nam' }); // Tìm sản phẩm nxb Nhã Nam
      if (!product) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
      res.json(product);
      console.log('get product NhaNam');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },
  async getLatestProducts(req, res) {
    try {
      // Truy vấn và sắp xếp sản phẩm theo thời gian tạo mới nhất
      const latestProducts = await Products.find()
        .sort({ createdAt: -1 }) // Sắp xếp theo trường createdAt giảm dần để lấy sản phẩm mới nhất
        .limit(4); // Giới hạn kết quả trả về là 4 sản phẩm
      res.json(latestProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};
module.exports = productController;
