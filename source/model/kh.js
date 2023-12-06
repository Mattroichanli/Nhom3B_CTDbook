const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*mail
password
tenkh
diachi
sdt
*/
const khSchema = new Schema({
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  tenkh: {
    type: String,
    required: false
  },
  diachi: {
    type: String,
    required: false
  },
  sdt: {
    type: Number,
    required: false
  },
}, { timestamps: true });

const KhachHang = mongoose.model('CacKhachHang', khSchema);
module.exports = KhachHang;


/*------Thêm 1 kh--------
app.get('/add-kh', (req, res) => {
  const kh = new KH({
    mail: '',
    password: '',
    username: '',
    tenkh: '',
    diachi: '',
    sdt:
  })

  kh.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});*/