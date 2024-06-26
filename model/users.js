const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    profile_image:{
        type:String
    }
},{timestamp:true});

module.exports = mongoose.model('users', UsersSchema);