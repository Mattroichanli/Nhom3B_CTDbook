const mongoose = require("mongoose")
<<<<<<< HEAD
=======
const SP = require('../model/ttsp')
>>>>>>> demo
const uri = "mongodb+srv://nhom3b:nhom3b@cluster0.mlensdg.mongodb.net/CTDbook?retryWrites=true&w=majority";

async function connectToDatabase() {
    try {
<<<<<<< HEAD
      //console.log('Đang chạy...')
=======
>>>>>>> demo
      let connection = await mongoose.connect(uri)
      console.log('Connected to Database');
    } catch (err) {
      console.error('Failed to connect to Database:', err);
    }
  }
<<<<<<< HEAD
=======
  async function searchProducts() {
    try {
      await connectToDatabase(); // Kết nối đến cơ sở dữ liệu
      const name = 'vua'; 
      const regex = new RegExp(name, 'i');
      const products = await SP.find({ tensach: { $regex: regex } })
      // Tìm các sản phẩm có từ khóa 'vua' trong trường 'tensach'
      /*const products = await SP.find({ tensach: { $regex: /vua/i } });*/
  
      console.log('Danh sách sản phẩm có từ khóa "vua" trong trường "tensach":', products);
    } catch (err) {
      console.error('Lỗi:', err);

    }
  }
  
/*async function searchProducts() {
  try {
    await connectToDatabase(); // Kết nối đến cơ sở dữ liệu

    // Tìm các sản phẩm có từ khóa 'vua' trong trường 'tensach'
    const products = await SanPham.find({ tensach: { $regex: /vua/i } });

    console.log('Danh sách sản phẩm có từ khóa "vua" trong trường "tensach":', products);
  } catch (err) {
    console.error('Lỗi:', err);
  }
}

searchProducts(); // Thực hiện tìm kiếm sản phẩm*/

  //searchProducts();
>>>>>>> demo
module.exports = connectToDatabase