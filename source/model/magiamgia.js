const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maSchema = new Schema({
    ma: {
      type: String,
      required: true,
    },
    phantram: {
      type: Number,
      required: true,
    },
    sl: {
        type: Number,
        required: true,
    },
  }, { timestamps: true });
  
const MaGiam = mongoose.model('MaGiam', maSchema);

module.exports = MaGiam;