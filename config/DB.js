const mongoose = require('mongoose');


const mongoDb = async()=>{
    const connect = await mongoose.connect(process.env.MONGO_DB_URI); 
    console.log('Mongoodb Connected');
};

module.exports = mongoDb;


