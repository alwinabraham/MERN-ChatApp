const User = require('../models/userModel');

const router=require('express').Router();


  router.post('/register',async(req,res)=>{
    console.log(req.body);
    console.log('reached');
     try {
         
    const{name,email,password}=req.body
      const newUser= new User({
        name,
        email,
        password
      })
      const user=await newUser.save()
     console.log('user',user);
      res.send('user inserted')
     } catch (error) {
        console.log(error);
         res.send(error)
     }
  })

  module.exports=router