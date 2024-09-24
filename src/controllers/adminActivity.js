const userModel = require('../models/authModel.js');

const getALL_USER = async(req,res)=>{
    try {
        const all = await userModel.find();
        res.status(200).json({users:all});
    } catch (error) {
        res.send(error);
    }
}
const createUser = async(req,res)=>{
    try {
        const crt = await userModel.create(req.body);
        res.status(201).json({crt});
    } catch (error) {
        re.send(error);
    }
}

const updateUser = async(req,res)=>{
    try {
        const id = req.params.id;
        await userModel.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true})
        res.status(201).send('updated Successfully');
    } catch (error) {
        res.send(error);
    }
}
const deleteuser = async(req,res)=>{
    try {
        const id = req.params.id;
        await userModel.findByIdAndDelete({_id:id});
        re.status(200).send('delted successfully');
    } catch (error) {
        res.send(error)
    }
}

module.exports = {getALL_USER,createUser,updateUser,deleteuser}