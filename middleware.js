//ukljucimo dbLogic jer ce nam trebati da pozivamo te funkcije da provjerimo da li imamo user iz cookie-a
//const db = require("../dbLogic");
var dbLogic= require('./db/dbLogic')
var authorization = function(req, res, next){
    console.log('provjera rute');
    if(req.cookies.authx){
        if(req.path == '/' || req.path == '/login'){
            res.redirect('/profile');

        }else {
            //provjeriti da li ima taj uzer iz kolacica ikako u bazi
            dbLogic.check(req.cookies.authx, function(e){
                if(e){next();}else{
                    res.clearCookie("authx");
                    next();
                    //ocistiti kolacic i redirest na home jer tog usera nema u bazi a nekako ima kolacic
                }
            })


        }
    }else{
        if(req.path != '/'&& req.path != '/login'){
            res.redirect('/');
            next();
        }else{
            next();
        }
    }

}

module.exports = authorization;