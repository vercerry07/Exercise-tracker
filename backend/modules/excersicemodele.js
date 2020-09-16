let mongoose = require('mongoose');
let d = new Date();
let excerciseschema = new mongoose.Schema({
    username:{ type:String , required:true},
    description: { type:String, required:true},
    duration:{ type:Number , required:true},
    date: {  type:Date ,default:d.getUTCDate() }
},
{
    timestamps:true
})



let Excercise = mongoose.model('excercise', excerciseschema);
module.exports = Excercise;