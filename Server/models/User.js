// const mongoose = require('mongoose');
 
// const UserSchema = new mongoose.Schema({

//     name : String,
//     email : String,
//     password : String,

//     role : {
//         type : String,
//         default :"visitor"
//     }

// })

// const UserModel = mongoose.model("users",UserSchema)
// module.exports = UserModel


import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
