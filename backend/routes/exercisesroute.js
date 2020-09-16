const e = require('express');
let express = require('express');
let exerciseroute = express.Router();
let mongoose = require('mongoose');
const Excercise = require('../modules/excersicemodele');
let Exercise = require('../modules/excersicemodele');

exerciseroute.get('/',(req,res)=>{
      Excercise.find().then((excercise)=>{
           res.json({
               excercise
           })
      })
      .catch((err)=>{
         console.log(err);
      })
});

exerciseroute.post('/add',(req,res)=>{
       let username = req.body.username;
       let description = req.body.description;
       let duration = Number(req.body.duration);
       let date = req.body.date; //Date.parse
      
       if(!username || !description || !duration) {
          return res.status(422).json({
              error:'enter fields'
          })
       }
       let newexercise = new Excercise({
           username,
           description,
           duration,
           date
       })
       newexercise.save().then(()=>{
           return res.json({
               msg:'successfully added'
           })
       })
       .catch((err)=>{
          console.log(err);
       })
})

exerciseroute.get('/:id',(req,res)=>{
      Excercise.findById(req.params.id).then((foundexercise)=>{
         res.json({
             foundexercise
         })         
      })
      .catch((err)=>{
        console.log(err)  
      })
})

exerciseroute.delete('/:id',(req,res)=>{
      Excercise.findByIdAndDelete(req.params.id).then(()=>{
          res.json({
              msg:'deleted successfully'
          })
      })
      .catch((err)=>{
        console.log(err)
      })
})

exerciseroute.post('/update/:id',(req,res)=>{
      Excercise.findById(req.params.id).then((exercise1)=>{
         exercise1.username = req.body.username;
         exercise1.description = req.body.description;
         exercise1.duration = req.body.duration;

         exercise1.save().then(()=>{
             res.json({
                 msg:'exercise updated'
             })
         })
         .catch((err)=>{
            console.log(err)
         })
      })
      .catch((err)=>{
         console.log(err)
      })       
})

module.exports = exerciseroute;