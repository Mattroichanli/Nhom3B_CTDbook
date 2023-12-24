const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loveSchema = new Schema({
    mail: {
      type: String,
      required: true,
    },
    masp: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
const Love = mongoose.model('Love', loveSchema);

module.exports = Love;