

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
        unique: true,
    },
    jobtitle: {
        type: String,
    },
    gender: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('User', userSchema);
module.exports=User;
