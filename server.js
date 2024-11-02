// const { log } = require('console');
// var _= require('lodash');
// const notes = require('./notes.js')
// var age = require('./notes.js')
// var add = require('./notes.js')

// var age = notes.age;

// var result = notes.add(age,100)
// // console.log(age);
// // console.log(result);

// var data = ["hello","hello", 1,4,1,6,2,2,"hii","hello"]
// var filter = _.uniq(data);
// console.log(filter);



// const jsondata='{"name":"nisha" , "rollno":"25"}';
// const jsonobject = JSON.parse(jsondata);
// console.log(jsonobject.name);


// const jsonobject = {name : 'nisha' , age:'25'};
// const jsonstring = JSON.stringify(jsonobject);
// console.log(jsonstring);


//server creation

const express = require('express')

const db = require('./db')
const app = express()
require('dotenv').config();
const person = require('./models/person');
const bodyParser = require('body-parser');
const Person = require('./models/person');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const menuitems = require('./models/Menuitem');
const MenuItem = require('./models/Menuitem');


app.get('/', function (req, res) {
  res.send('Hello World')
})


//get data from database

//define routes

const personroutes = require('./routes/personroutes');
const menuroutes = require('./routes/menuroutes');

//use routes
app.use('/person', personroutes);
app.use('/menu',menuroutes);

// app.get('/greet',function(req,res){

// var customise ={
//     name : 'nisha',
//     gender : 'female',
//     languagec:'hindi',
// }
// res.send(customise);
// }
// )


app.listen(PORT, () => {
  console.log("server is live");

})





