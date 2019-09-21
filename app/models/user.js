// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    local: {
        email: String,
        password: String,
        role: String
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String,
        role: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String,
        role: String
    }

});

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
