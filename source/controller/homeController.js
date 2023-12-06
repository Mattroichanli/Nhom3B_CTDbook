const SP = require('../model/ttsp');

let kh = ''
const homeController = {
    async root(req, res) {
        res.redirect('/main');
    },
    async home(req, res) {
        SP.find()
        .then(result => {
            res.render('test_index', { sps: result, title: 'Trang chủ', kh: kh});
        })
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = homeController;