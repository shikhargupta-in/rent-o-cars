const mongoose = require("mongoose");
var validate = require('mongoose-validator');


const userSchema = new mongoose.Schema({
     username : {type:String , required: true},
     email : {type:String , required: true},
     password : {type:String , required: true, validate: {
          validator: function(val) {
              return val.length >= 8
          },
          message: val => `${val.value} has to be 8 char`
      }},
     mobile : {type:Number, required: true,
          validate: {
               validator: function(val) {
                   return val.toString().length === 10
               },
               message: val => `${val.value} has to be 10 digits`
           }}
})

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel