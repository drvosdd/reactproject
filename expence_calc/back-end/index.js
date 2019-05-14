const users = require("./models/users");
const products = require("./models/products");
const express = require("express");
var app = express();
const myParser = require("body-parser");
app.use(myParser.urlencoded({extended: true}));
const session = require("express-session");
app.use(session({secret:"test"}));

var u1 = new users.create("28.04.1977","Dejan", "Drvoshanski", "drvosdd@gmail.com", "078", "Macedonia", "password");

app.post("/register", (req, res) => {
    var birthDay = req.body.birthDay;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var password = req.body.password;

    var newUser = new users.create(firstName, lastName, email, birthDay, telephone, country, password);
})


app.post("/login", (req,res) => {
    var email = req.body.emailLogin;
    var password = req.body.passwordLogin;

    // database checks
    req.session.user = email;

    // response to FE
})

app.post("/addProduct", (req,res) => {
    if(req.session.email){
        var pName = req.body.pName;
        var pDescription = req.body.pDescription;
        var pType = req.body.pType;
        var pDate = req.body.pDate;
        var price = req.body.price;
        var userEmail = req.session.email;

        var p = new product.create(pName,pDescription,pType,pDate,price,userEmail);

        //send response to FE
    }
    else {
        res.status(403).send("Access denied");
    }

})