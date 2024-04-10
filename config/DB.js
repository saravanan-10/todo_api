const mongoose = require('mongoose');


const mongoDb = async()=>{
    const connect = await mongoose.connect('mongodb+srv://saravanakumar719:nodelearning@cluster0.v7zkocc.mongodb.net/todo');
    console.log('Mongoodb Connected');
};

module.exports = mongoDb;


