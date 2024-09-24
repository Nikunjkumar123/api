const mongoose = require('mongoose');

const connectdb = (URL)=>{
    mongoose.connect(URL).then(()=>{
        console.log("connected to db")
    }).catch(()=>{
        console.log("error occured in connectdb");
    })
}
module.exports = connectdb;