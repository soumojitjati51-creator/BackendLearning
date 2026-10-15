const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');


async function registerUser(req,res){
    const{username,email,password,role="user"}=req.body;
    const isUserAlreadyExists= await userModel.findOne({
        $or:[
            { username },
            {email}
        ]
    })
    if(isUserAlreadyExists){
        return res.status(409).json({message:"User already exists"})
    }

    const hash=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username,
        email,
        password:hash,
        role
    })

    const token=jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)

    res.cookie("token",token)
    res.status(201).json({
        message:"User registered successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
        }
    })
}

async function loginUser(req,res){
    const {username,email,password}=req.body;
    const user=await userModel.findOne({
        $or:[
            {username},
            {email},
        ]
    })

    if(!user){
        return res.status(401).json({
            message:"invalid credential"
        })
    }
     // bcrypt.compare() internally hashes the plain-text password using the salt stored in the database hash and checks whether it matches the stored hash.it does not explicit hash logic as new logic can create different salting & may behave wrong
    const isPasswordValid=await bcrypt.compare(password,user.password)//first password is from user and 2nd one is of user's saved in db, this comopare function comapres this two passwords

    if(!isPasswordValid){
        return res.status(401).json({
            message:"invalid credential"
        })
    }

    const token=jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET);
    res.cookie("token",token);
    res.status(200).json({
        message:"user logged in successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
        }
    })
}

async function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out successfully"
    })
}
module.exports={registerUser,loginUser,logoutUser}