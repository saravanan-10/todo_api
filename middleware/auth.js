const jwt = require('jsonwebtoken');
const Users = require("../model/users");

module.exports = async(req, res, next) => {
    try{
        const token = req.headers.authorization;
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodeToken.id);

        if(decodeToken.id){
            const userById = await Users.findOne({_id:decodeToken.id});
            if(userById){
                next()
            } else {
                res.status(600).json({
                    success:false,
                    err:'unauthorize'
                })
            } 
        }
        
    } catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }
}