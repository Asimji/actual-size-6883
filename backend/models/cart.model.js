const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
       type:"array",
       items:{
        type:String
       }
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    userId:String,
    userName:String,
   

},{
    versionKey:false
}
)

const cartModel=mongoose.model("cart",cartSchema);

module.exports=cartModel