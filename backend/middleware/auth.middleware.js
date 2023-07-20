const jwt=require("jsonwebtoken");
const blacklist = require("../blacklist");
require("dotenv").config()

const auth=(req,res,next)=>{
const token=req.headers.authorization?.split(" ")[1];
if(token){
    try {
        if(blacklist.includes(token)){
            res.status(200).json({msg:"Already Logout please Login!"})
        }
        else{
            var decoded = jwt.verify(token, process.env.SecretKey);
            req.body.userName=decoded._doc.name
            req.body.userId=decoded._doc._id
            console.log(decoded,req.body.userId)
            next()
        }
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
else{
    res.status(400).json({msg:"Unauthorised"})
}

}

module.exports=auth