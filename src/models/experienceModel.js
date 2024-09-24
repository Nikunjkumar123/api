const mongoose = require('mongoose')

const expSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
    rounds:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

module.exports = mongoose.model('Exp',expSchema);