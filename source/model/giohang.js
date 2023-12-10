const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    mail: {
      type: String,
      required: true,
    },
    masp: {
      type: String,
      required: true,
    },
    sl: {
      type: Number,
      required: true
    },
  }, { timestamps: true });
  
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;