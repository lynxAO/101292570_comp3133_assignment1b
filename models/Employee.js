const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        lovercase: true
    },
    last_name: {
        type: String,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
        default: 0.0,
        validate(value) {
            if (value < 0.0){
                throw new Error("Do not enter negative salary")
            }
        }
    }
})

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;