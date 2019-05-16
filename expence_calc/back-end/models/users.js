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

var usersSchema = new Schema ({
    birthDay: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    telephone: {type: String, required: true},
    country: {type: String, required: true},
    password: {type: String, required: true}
})

var User = mongoose.model("User", usersSchema);

module.exports = User;

