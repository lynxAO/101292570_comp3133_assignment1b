const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        lovercase: true,
        rquired: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lovercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
    }
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;