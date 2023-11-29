const Products = require("../model/productModel")
//const connect = require("../database/database")

const productController = {
  async createProduct(req, res) { 
      const blog = new Products({
        tensach: 'Qua đêm ở nhà các vua Nguyễn',
        anhbia: 'https://salt.tikicdn.com/ts/product/af/12/87/383cca16a583776e4762b106d2b6b1c0.jpg',
        nxb: 'Hội Nhà Văn',
        tacgia: 'Nguyễn Ngọc Tiến',
        dinhdang : 'Bìa mềm',
        mota:
        "Tác giả: Nguyễn Ngọc Tiến\nNXB: Hội Nhà Văn\nNăm xuất bản: 2023\nTrọng lượng: 500 gr\nKích Thước: 20.5 x 14 x 1.5 cm\nSố trang: 318\nĐịnh dang: Bìa Mềm\nQua đêm ở nhà các vua Nguyễn là cuốn sách tập hợp các bài viết thể hiện quan điểm, suy ngẫm của tác giả Nguyễn Ngọc Tiến về lịch sử, văn hóa, xã hội Việt Nam trong quá khứ cũng như trong hiện tại. Trong bài viết “Qua đêm ở nhà các vua Nguyễn”, tác giả kể lại một lần đặc biệt khi có cơ hội được nghỉ lại trong Hoàng Thành Huế và tác giả đã chọn nằm nghỉ ngay trên nền điện Càn Thành. Nền điện này xưa kia từng là cấm cung sang trọng và lộng lẫy, dùng làm chỗ nghỉ của các vua nhà Nguyễn, nhưng nay chỉ còn là một nền đất hoang lạnh. Trong bối cảnh và không gian đặc biệt đó, tác giả có cơ hội suy ngẫm về lịch sử, từ đó liên tưởng và suy ngẫm về hiện tại, về thế thái nhân tình. Nguyễn Ngọc Tiến viết về Hà Nội nhiều và hay, điều đó nhiều người đã biết và phong cho ông danh xưng nhà Hà Nội học. Nhưng Nguyễn Ngọc Tiến còn viết rộng hơn thế, ông viết về đất nước mình cũng phong phú và thú vị không kém. Đất nước trên trang viết của ông có khi nhọc nhằn và đau khổ theo chân những người đồng bào chạy dịch Covid từ Nam ra Bắc, lại có khi phong tình quyến rũ trong hương vị của “mắm Nghệ, lòng giòn, rượu ngon, cơm trắng”. Đất nước trong suy tư của Nguyễn Ngọc Tiến có những vang bóng và suy tàn của những giá trị văn hóa, có những huyền thoại của lịch sử anh hùng và bao điều nhũng loạn của thời buổi rối ren.",
        soluong: 10,
        giatien: 96000,
        giagoc: 120000,
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
};
module.exports = productController;
