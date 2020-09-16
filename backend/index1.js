let express = require('express');
let app = express();
let cors = require('cors');
require('dotenv').config();
let mongoose = require('mongoose');

let userroute = require('./routes/userroute');
let exerciseroute = require('./routes/exercisesroute');

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended:false }));
mongoose.connect(process.env.mongour,{ useNewUrlParser: true, useUnifiedTopology: true  }).then(()=>{
      console.log('connected to database');     
})
.catch((err)=>{
      console.log(err) 
})


app.use('/userroute',userroute);
app.use('/exercise',exerciseroute);

let port = 3200;
app.get('/',(req,res)=>{
      res.send('testing');   
});
app.listen(port,
    console.log('server '+port))

    