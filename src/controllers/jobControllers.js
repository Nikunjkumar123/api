const mongoose = require('mongoose');
const jobModel = require('../models/jobModel.js')

const allJob = async(req,res)=>{
    try {
        const all = await jobModel.find();
        res.status(200).json({all})
    } catch (error) {
        res.send(error)
    }
}
const createJob = async(req,res)=>{
    try {
        const {company,position,status} = req.body;
        req.body.createdBy =await req.user.userId;
        if(!company || !position){
            res.status(402).json({msg:'fill all fields'})
        }
        const job = await jobModel.create(req.body);
        res.status(201).json({user:job});
    } catch (error) {
        res.send(error);
    }
}
const singleJob = async(req,res)=>{
    try {
        const id = req.params.id;
        const job = await jobModel.find({_id:id})
        res.status(200).json({job});
    } catch (error) {
        res.send(error);
    }
}
const updateJob = async(req,res)=>{
    try {
        const id = req.params.id;
        const upj = await jobModel.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true});
        res.send({upj})
    } catch (error) {
        res.send(error);
    }
}
const deleteJob = async(req,res)=>{
    try {
        const id = req.params.id;
        await jobModel.findByIdAndDelete({_id:id})
        res.send("deleted successfully")
    } catch (error) {
        res.send(error);
    }
}


module.exports = {allJob,createJob,singleJob,updateJob,deleteJob}