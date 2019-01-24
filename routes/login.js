var express = require('express');
var router = express.Router();
var dbLogic = require('../db/dbLogic');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req, res, next) {
    var currentUser = {
        username: req.body.username,
        password: req.body.password
    }
//korisnik se loguje
    //provjerimo da li ga ima u bazi
    //ako ima damo mu kolacic
    //pa redirect na njegov profil
    //ako nema u bazi
    //redirectamo na home
    dbLogic.checkUser(currentUser, function (e) {
        if (e) {
            //ima ga u bazi mozemo mu dati kolac
            res.cookie('authx', req.body.username);
            console.log('kreiran kolac redirecta');
            res.redirect('/profile');
        } else {
            //nema ga u bazi logujte se opet
            res.redirect('/')
        }
    })






});

module.exports = router;
