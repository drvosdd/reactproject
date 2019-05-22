// let allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', "*");
//     next();
// }
// app.use(allowCrossDomain);

// api.post("/newproduct", (req, res, next) => {
//     var productname = req.body.productname;
//     var desc = req.body.desc;
//     var type = req.body.type;
//     var date = req.body.date;
//     var price = req.body.price;
//     var userEmail = req.body.userEmail;

//     let newproduct = new Product({
//         productname: productname,
//         desc: desc,
//         type: type,
//         date: date,
//         price: price,
//         userEmail: userEmail
//     });

//     api.post("/register", (req, res, next) => {
//         var firstname = req.body.firstname;
//         var lastname = req.body.lastname;
//         var email = req.body.email;
//         var date = req.body.date;
//         var telephone = req.body.telephone;
//         var country = req.body.country;
//         var password = req.body.password;

//         let user = new User({
//             firstname: firstname,
//             lastname: lastname,
//             email: email,
//             date: date,
//             telephone: telephone,
//             country: country,
//             password: password
//         });

// constructor(props) {
//     super(props);

//     this.state = {
//         firstname: "",
//         lastname: "",
//         email: "",
//         birthdate: "",
//         telephone: "",
//         country: "",
//         password: "",
//     }

//     this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
//     this.RegisterUser = this.RegisterUser.bind(this);
// }

// RegisterUser() {
//     let data = {
//         "firstname": this.state.firstname,
//         "lastname": this.state.lastname,
//         "email": this.state.email,
//         "birthdate": this.state.birthdate,
//         "telephone": this.state.telephone,
//         "country": this.state.country,
//         "password": this.state.password,
//     }

//     fetch("http://localhost:3000/register", {
//         mode: "cors",
//         method: "POST",
//         body: JSON.stringify({
//             "firstname": "Mario",
//             "lastname": "Petkovski",
//             "email": "mario5etkovski@gmail.com",
//             "birthdate": "18.07.1993",
//             "telephone": "54654654",
//             "country": "Macedonia",
//             "password": "mario123",
//         }),

//     })
//         .then((res) => console.log("REGISTER RESULT: ", res))
//         .catch((err) => console.error(err));

// }

// HandleFieldsChange(e) {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }

