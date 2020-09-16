let mongoose = require('mongoose');
let userschema = new mongoose.Schema({
    username: { type:String, required:true, unique:true, trim:true, minlength:3}
},{
    timestamps:true
})
let User =  mongoose.model('User',userschema)


module.exports = User;