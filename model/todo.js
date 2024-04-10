const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name:{
        type:String
    },
    duration:{
        type:Number
    }
},{timestamps:true});

module.exports = mongoose.model('todo',TodoSchema);

