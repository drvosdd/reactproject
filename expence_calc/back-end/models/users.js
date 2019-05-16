// exports.create = function (birthDay, firstName, lastName, email, telephone, country, password) {
//     this.birthDay = birthDay;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.telephone = telephone;
//     this.country = country;
//     this.password = password;
// }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    birthDay: {type: Date, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: email, required: true},
    telephone: {type: Number, required: true},
    country: {type: String, required: true},
    password: {type: password, required: true}
})

var User = mongoose.model("User", userSchema);

module.exports = User;