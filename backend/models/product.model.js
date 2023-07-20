const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
       type:'array',
       items:String
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
    }

},{
    versionKey:false
})

const productModel=mongoose.model("products",productSchema);

module.exports=productModel