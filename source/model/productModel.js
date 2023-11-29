const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ProductsSchema = new Schema(
  {
    tensach: {
      type: String,
      trim: true,
      required: true,
    },
    anhbia: {
      type: String,
      trim: true,
      required: true,
    },
    nxb: {
      type: String,
      trim: true,
      required: true,
    },
    tacgia: {
      type: String, 
      trim: true,
      required: true,
    },
    dinhdang : {
      type: String,
      trim: true,
      required: true,
    },
    mota: {
      type: String,
      trim: true,
      required: true,
    },
    soluong: {
      type: Number,
      required: true,
    },
    giatien: {
      type: Number,
      required: true,
    },
    giagoc: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Products", ProductsSchema);