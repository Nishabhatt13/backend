const mongoose = require('mongoose');

//define person schema

const personschema = new mongoose.Schema({
    name :{
        type: String,
        require: true,
    },
    age:{
        type: Number,
    },

    work:{
        type:String,
        enum: ['chef','waiter','manager'],
        require: true,
    },

    mobile :{
        type: Number,
        require: true,
        unique: true,
    },

    email:{
        type: String,
        require: true,
        unique: true,
    },

    address:{
        type: String,
        require: true,
    },
})


//create person model

const Person = mongoose.model('Person', personschema);
module.exports = Person;