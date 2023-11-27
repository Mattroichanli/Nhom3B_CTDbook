const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    tensach: {
      type: String,
      trim: true,
      required: true,
    },
    anhbia: {
      type: Number,
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
    dinhdang: {
        type: String,
        trim: true,
        required: true,
    },
    soluong: {
      type: Number,
      default: 1,
    },
    mota: {
        type: String,
        trim: true,
        required: true,
    },
    giagoc: {
        type: Number,
        default: 0,
    },
    giatien: {
        type: Number,
        default: 0,
    },
    ngaythem: {
        type: Date,
        default: new Date('2023-01-01'),
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
