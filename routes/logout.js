var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.clearCookie("authx");
    console.log('brisanje kolacica');
    res.redirect('/login');
});

module.exports = router;
