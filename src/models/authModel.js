const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','normal'],
    }
},{timestamps:true});

authSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash('this.password',salt);
})
authSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}
authSchema.methods.createToken = function(){
    const token = jwt.sign({userId:this._id,email:this.email,role:this.role},process.env.SECRET,{expiresIn:'30d'})
    return token;
}

module.exports = mongoose.model('User',authSchema);