let express = require('express')
let userroute = express.Router();
let mongoose = require('mongoose');
let User = require('../modules/usermodule');

userroute.get('/',(req,res)=>{
      User.find().then((users)=>{
         res.json({
               users
         })
      })
      .catch((err)=>{
         res.status(400).json('error '+ err )
      })      
});
userroute.post('/add',(req,res)=>{
      let username = req.body.username;
      if(!username){
          return res.status(422).json({
                msg:'enter username'
          })
      }
      else {
          let newuser = new User({
                username:username
          })
          newuser.save().then(()=>{
                return res.json({
                      msg:'successfully saved'
                })
          })
          .catch((err)=>{
             console.log(err);
          })
      }
})
module.exports = userroute;