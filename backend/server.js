const express = require("express");
const dotenv = require("dotenv")
const {chats} = require("./data/data")
const connectDB = require("./config/db")
const colors = require("colors")
const userRouter=require('./router/userRouter')

dotenv.config();
connectDB();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 


// app.get('/',(req,res)=>{
//     res.send("API is Running")
// })

// app.get("/api/chat",(req,res)=>{
//     res.send(chats)
// })

app.use('/api/user',userRouter)

// app.get('/api/chat/:id',(req,res)=>{

//     const singleChat = chats.find((c)=> c._id === req.params.id);
//     console.log(singleChat);
//     res.send(singleChat)
// })



const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server Started on PORT ${PORT}`.yellow.bold))