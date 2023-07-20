const express=require("express");
const connection = require("./db");
const cors=require("cors");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");

require("dotenv").config()


const app=express()
app.use(cors())

app.use(express.json())
app.use(userRouter)
app.use(cartRoute)
app.use(productRouter)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB is connected")
        console.log(`Server is running at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})