//var users=require('./user.json')
//citamo iz fajla
const fs = require('fs');
/*
*   funkcija koja provjerava da li vec postoji takav user,
*   ako postoji vraca true ako ne vraca false,
*
*   funkcija koristi input podatke i pristupa tabeli user
*/
var checkUser = function(user, func){
    const dbUser = fs.readFileSync('./db/user.json');
    var users = JSON.parse(dbUser);
    console.log(user);
    var obj=users.users.find(e=>{
            if(user.username==e.username && user.password==e.password)return true
            else return false
        }
    );
    if(obj){func(true)}else{console.log('nije nasao ime');func(false)}
}

var check = function(authx,func){
    const dbUser = fs.readFileSync('./db/user.json');
    var users = JSON.parse(dbUser);
    var obj=users.users.find(e=>{
            if(authx==e.username)return true
            else return false
        }
    );
    if(obj){func(true)}else{console.log('nije nasao ime');func(false)}
}
//ovo je za enkripciju passworda prilikom registracije bi se password na ovaj nacin sacuvao i svaki put bismo poredili heseve passworda iz baze i korisnikovog pri loginu
//nisam je pozivala nigdje jer mi je hardkodirana baza
var encrypt = (password)=>{
    var hash = crypto.createHash('sha256');


    hash.update(password);
    return hash.digest('hex');
}

module.exports = {
    checkUser,
    check


};