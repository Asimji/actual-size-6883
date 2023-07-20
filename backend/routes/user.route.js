const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklist = require("../blacklist");

require("dotenv").config()

const userRouter=express.Router();

userRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email });
  
      if (user) {
        return res.status(200).json({ msg: `${user.name} already exists` });
      }
  
      bcrypt.hash(password, 3, async function (err, hash) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
  
        try {
          const newUser = new userModel({ name, email, password: hash });
          await newUser.save();
          res.status(200).json({ user: newUser, msg: newUser.name });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  userRouter.post("/signin",async(req,res)=>{
    const {email,password}=req.body;
    
    try {
        const user=await userModel.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                // result == true
                if(result){
                    var token = jwt.sign({ ...user }, process.env.SecretKey);
                    res.status(200).json({msg:`Welcome ${user.name} You are Now Login`,token})
                }
                else{
                    res.status(400).json({msg:"Incorrect Password"})
                }
            });
        }
        else{
            res.status(400).json({msg:'User not Exist'})
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
  })

  userRouter.get("/logout",async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1];
    try {
            if(token){
            if(blacklist.includes(token)){
                res.status(200).json({msg:"Already Logout"})
            }
            else{
                blacklist.push(token);
                res.status(200).json({msg:"Logout Successfully"})
            }
        } 
        else{
            res.status(400).json({msg:"You are Not Authorised"})
        }
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports=userRouter
