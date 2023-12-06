<<<<<<< HEAD
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/LoginFormPractice")//mongodb + srv://nhom3b:nhom3b@cluster0.mlensdg.mongodb.net/?retryWrites=true&w=majority"
    .then(() => {
    console.log('mongoose connected');
})
    .catch((e) => {
        console.log('failed');
    })
=======
////Chi gửi ----------------

>>>>>>> demo


const { MongoClient, ServerApiVersion, Db, DBRef } = require('mongodb');
const uri = "mongodb+srv://nhom3b:nhom3b@cluster0.mlensdg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error:', err);
  }
}

async function getDataFromMongoDB() {
    try {
        const database = client.db('CTDbook'); //chọn database
        const collection = database.collection('sanpham'); //chọn collection khachhang sanpham

        const result = await collection.find({ /* Điều kiện truy vấn */ }).toArray();

        console.log('Data from MongoDB:', result);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        client.close();
        console.log('Connection to MongoDB closed');
    }
}
connectToMongoDB();
getDataFromMongoDB();