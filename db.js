const mongoose = require('mongoose');

//mongodb connection url

const mongoURL ='mongodb://localhost:27017/hotels'  //hotels is database name

//setup connection

mongoose.connect(mongoURL,{
    // useNewUrlParser : true,
    // useUnifiedTopology: true,
})

const db =mongoose.connection;

db.on('connected' , ()=>{
console.log('connected to mongodb server');}
)

db.on('error',(err)=>{
    console.log('mongodb connection error',err);
})

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
    
})

//export database connection

module.exports=db;