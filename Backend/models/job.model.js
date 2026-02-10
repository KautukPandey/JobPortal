import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

},{timestamps:true})

export default Job = mongoose.model('Job',jobSchema)