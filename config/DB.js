const mongoose = require('mongoose');


const mongoDb = async()=>{
    const connect = await mongoose.connect('mongodb_url');
    console.log('Mongoodb Connected');
};

module.exports = mongoDb;


