const users = require("./models/users");
const Products = require("./models/products");
const express = require("express");
var app = express();
const db = require("./connection");
const User = require("./models/users.js");
const myParser = require("body-parser");
app.use(myParser.urlencoded({extended: true}));
const session = require("express-session");
app.use(session({secret:"test"}));
app.listen(3000);

// var u1 = new users.create("28.04.1977","Dejan", "Drvoshanski", "drvosdd@gmail.com", "078", "Macedonia", "password");

app.post("/register", (req, res, next) => {
    var birthDay = req.body.birthDay;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var country = req.body.country;
    var password = req.body.password;

    let user = new User({
        birthDay: birthDay,
        firstName: firstName,
        lastName: lastName,
        email: email,
        telephone: telephone,
        country: country,
        password: password     
    });

    user.save(function(err){
        if(err) {
            return next(err);
        }
        res.send("User saved");
    })

})

app.get("/", (req,res) => {
    res.send("Hello");
})


// app.post("/login", (req,res) => {
//     var email = req.body.emailLogin;
//     var password = req.body.passwordLogin;

//     // database checks
//     req.session.user = email;

//     // response to FE
// })

app.post("/addProduct", (req,res,next) => {
    // if(req.session.email){
        var pName = req.body.pName;
        var pDescription = req.body.pDescription;
        var pType = req.body.pType;
        var pDate = req.body.pDate;
        var price = req.body.price;
        var userEmail = req.session.email;

        // var p = new product.create(pName,pDescription,pType,pDate,price,userEmail);

        let product = new Product ({
            pName: pName,
            pDescription: pDescription,
            pType: pType,
            pDate: pDate,
            price: price,
            userEmail: userEmail
        });

        product.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send("Product saved");
        })
    });

    

        //send response to FE
    // }
    // else {
    //     res.status(403).send("Access denied");
//     }


app.get("/product", (req,res,next) => {
    Products.find({}, function(err, products){
        if(err) {
            return next(err);
        }
        res.send(products);
    })
})

app.put("/products/:id", (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) {
        return next(err);
      }
      res.send("Product updated.");
    });
  });
  
  app.delete("/products/:id", (req, res, next) => {
    Product.deleteOne(req.params._id, function(err) {
      if (err) {
        return next(err);
      }
      res.send("Product deleted.");
    });
  });