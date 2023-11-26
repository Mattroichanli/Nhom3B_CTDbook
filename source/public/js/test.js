const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginFormPractice")mongodb + srv://nhom3b:nhom3b@cluster0.mlensdg.mongodb.net/?retryWrites=true&w=majority
    .then(() => {
    console.log('mongoose connected');
})
    .catch((e) => {
        console.log('failed');
    })

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LogInCollection = new mongoose.model('LogInCollection', logInSchema)

module.exports = LogInCollection