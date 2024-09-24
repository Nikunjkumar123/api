const authModel = require('../models/authModel.js')

const registerUSer = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email ||!password){
            res.status(400).send('jyada tej chal rha hh me aa jau apni pe');
        }
        const firstuser = (await authModel.countDocuments({}))===0;
        const role = firstuser ? 'admin' : 'normal';
        const userCreation = await authModel.create({name,email,password,role} );
        res.status(201).json({user:userCreation});
    } catch (error) {
        res.status(400).send(error);
    }
}
const loginUSer = async(req,res)=>{
    try {
        const{email,password} = req.body
        if(!email|| !password){
            res.status(402).json({msg:'fill all fields, teri field lagao kya'});
        }
        const findUser = await authModel.findOne({email});
        if(!email){
            res.status(402).json({msg:'no email registered'});
        }
        findUser.comparePassword(password);
        const token = findUser.createToken();
        res.status(200).json({findUser,token});
    } catch (error) {
        res.status(400).send(error);
    }
}
const logoutUSer = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {registerUSer,loginUSer,logoutUSer};