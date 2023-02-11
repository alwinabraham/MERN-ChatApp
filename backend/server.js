const express = require("express");
const dotenv = require("dotenv")
const {chats} = require("./data/data")

const app = express()
dotenv.config();

app.get('/',(req,res)=>{
    res.send("API is Running")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id);
    const singleChat = chats.find((c)=> c._id === req.params.id);
    console.log(singleChat);
    res.send(singleChat)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server Started on PORT ${PORT}`))