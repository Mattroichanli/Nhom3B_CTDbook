const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
router.get('/sachmoi', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'sachmoi.html'));
});
router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});
router.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'signup.html'));
});

router.get('/thongtin', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'thongtin.html'));
});

/*
router.get('/sachmoi', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/sachmoi.html'));
});

router.get('/sachbanchay', (req, res) => {
    res.send('sach ban chay\n');
});

router.get('/giohang', (req, res) => {
    res.send('gio hang\n');
});

router.get('/thanhtoan', (req, res) => {
    res.send('thanh toan\n');
});*/

module.exports = router