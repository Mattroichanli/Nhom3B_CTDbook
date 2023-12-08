const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*tensach
masp
nxb
tacgia
namxb
dichgia
giagoc
giagiam
phantram
trongluong
kichthuoc
sotrang
bia*/
const spSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  tensach: {
    type: String,
    required: true,
  },
  masp: {
    type: String,
    required: true,
  },
  danhmuc: {
    type: String,
    required: true,
  },
  nxb: {
    type: String,
    required: true
  },
  tacgia: {
    type: String,
    required: true
  },
  namxb: {
    type: Number,
    required: true
  },
  dichgia: {
    type: String,
    required: true
  },
  giagoc: {
    type: String,
    required: true
  },
  giagiam: {
    type: String,
    required: true
  },
  phantram: {
    type: String,
    required: true
  },
  trongluong: {
    type: Number,
    required: true
  },
  kichthuoc: {
    type: String,
    required: true
  },
  sotrang: {
    type: Number,
    required: true
  },
  bia: {
    type: String,
    required: true
  },
  img_small1: {
    type: String,
    required: true
  },
  img_small2: {
    type: String,
    required: true
  },
  img_small3: {
    type: String,
    required: true
  },
  img_small4: {
    type: String,
    required: false
  },
  img_small5: {
    type: String,
    required: false
  },
  mota: {
    type: String,
    required: true
  },
  luotban: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const SanPham = mongoose.model('CacSanPham', spSchema);
module.exports = SanPham;


/*------Thêm 1 ttsp--------
app.get('/add-sp', (req, res) => {
  const sp = new SP({
    id: '',
    tensach: '',
    masp: '',
    danhmuc: '',
    nxb: '',
    tacgia: '',
    namxb: ,
    dichgia: '',
    giagoc: '',
    giagiam: '',
    phantram: '',
    trongluong: ,
    kichthuoc: '',
    sotrang: ,
    bia: '',
    img_small1: '',
    img_small2: '',
    img_small3: '',
    img_small4: '',
    img_small5: '',
    mota: '',
  })

  sp.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});*/