const expModel = require('../models/experienceModel.js')

const createExp = async(req,res)=>{
    try {
        const {company,position,rounds,experience} = req.body;
        if(!company || !position || !rounds || !experience){
            res.status(404).send('fill all fields');
        }
        req.body.createdBy = req.user.userId;
        const expCrt = await expModel.create(req.body);
        res.status(201).json({expCrt});
    } catch (error) {
        res.send(error);
    }
}
const allExp = async(req,res)=>{
    try {
        const allexp = await expModel.find({});
        res.status(200).json({allexp});
    } catch (error) {
        res.send(error);
    }
}
const singleExp = async(req,res)=>{
    try {
        const id = req.params.id;
        const sjob = await expModel.find({_id:id});
        if(!sjob){
            res.send(' no experience with provided id');
        }
        res.status(202).json({sjob});
    } catch (error) {
        res.send(error);
    }
}
const updateExp = async(req,res)=>{
    try {
        const id=req.params.id;
        const crtID = req.user.userId;
        const upexpd = await expModel.findByIdAndUpdate({_id:id,createdBy:crtID},req.body,{new:true,runValidators:true});
        res.status(200).json({upexpd});
    } catch (error) {
        res.send(error);
    }
}
const deleteExp = async(req,res)=>{
    try {
        const id = req.params.id
        await expModel.findByIdAndDelete({_id:id});
        res.status(200).send('deleted successfully')
    } catch (error) {
        res.send(error);
    }
}


module.exports = {createExp,allExp,singleExp,updateExp,deleteExp}