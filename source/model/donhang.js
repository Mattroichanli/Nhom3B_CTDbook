const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donhangSchema = new Schema({
    mail: {
      type: String,
      required: true,
    },
    hoten: {
      type: String,
      required: true,
    },
    sdt: {
      type: String,
      required: true
    },
    diachi: {
        type: String,
        required: true
    },
    sanphams: [{
        type: String,
        required: true,
    }],
    sl: [{
        type: Number,
        required: true,
    }],
    tongtien: {
        type: String,
        required: true
    },
    ship: {
      type: String,
      required: true,
    },
    payID: {
      type: String,
      required: false,
    },
  }, { timestamps: true });
  
const Don = mongoose.model('Don', donhangSchema);

module.exports = Don;