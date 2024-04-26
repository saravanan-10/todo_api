const Users = require("../model/users");
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res, next) => {
    console.log(req.body);
    console.log(req.file);

    try{
        await Users.create({...req.body, profile_image:req.file.path});
        res.status(200).json({
            success:true
        })
    } catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }

}

exports.usersList = async(req, res, next) => {
    try{
        const userList = await Users.find();
        res.status(200).json({
            success:true,
            data:userList,
            count:userList.length
        })
    } catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }
}

exports.login = async(req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    try{
        const userListByEmail = await Users.findOne({email:email});
        console.log(userListByEmail);
        if(userListByEmail){
            if(userListByEmail.password===password){

                let id = userListByEmail._id;
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
                const token = jwt.sign({id:id}, jwtSecretKey, {expiresIn:process.env.JWT_EXPIRY});

                res.status(200).json({
                    success:true,
                    auth_token: token
                })
            }else{
                res.status(300).json({
                    success:false,
                    err:'Invaild Password'
                })
            }
        }else{
            res.status(300).json({
                success:false,
                err:'Invaild Email'
            })
        }
    } catch(error){
        res.status(400).json({
            success:false,
            error
        })
    }
}