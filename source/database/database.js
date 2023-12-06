const mongoose = require("mongoose")
const uri = "mongodb+srv://nhom3b:nhom3b@cluster0.mlensdg.mongodb.net/CTDbook?retryWrites=true&w=majority";

async function connectToDatabase() {
    try {
      let connection = await mongoose.connect(uri)
      console.log('Connected to Database');
    } catch (err) {
      console.error('Failed to connect to Database:', err);
    }
  }
module.exports = connectToDatabase