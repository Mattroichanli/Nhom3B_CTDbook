const SP = require('../model/ttsp');
const {getKh} = require('./userController');

const homeController = {
    async root(req, res) {
        res.redirect('/main');
    },
    async home(req, res) {
        SP.find()
        .then(result => {
            res.render('test_index', { sps: result, title: 'Trang chủ', kh: getKh()});
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = homeController;