const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://shikharg:qwerty%40123@cluster0.iqryzzc.mongodb.net/rent-o-cars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose