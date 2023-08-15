const mongoose = require('mongoose')
const { Schema } = mongoose;

const doctorSchema = new Schema({
  userId: {
    type: String,
    
  },
  firstName: {
    type: String,
    required: [true, "firstname is require"],
    
  },
  lastName: {
    type: String,
    required: [true, "lastname is require"],
    
  },
  phone: {
    type:String,
    required:[true,"phone no is required"],
  },
  email: {
    type:String,
    required:[true,"email is required"],
  },
  website : {
    type:String,
    required:[true,"website is required"]
    
  },
  address: {
    type:String,
    required:[true,"address is required"]
  },
  specialization: {
    type:String,
    required:[true,"specialization is required"]
  },
  experience: {
    type:String,
    required:[true,"experience is required"]
  },
  feesPerCunsaltation:{
    type:Number,
    required:[true,"fee is required"]
  },
  timings:{
    type:Object,
    required:[true,'work timing is required']
  },
  status:{
     type:String,
     default:'pending'
  },
  
},{timestamps:true});

const doctorModel = mongoose.model('doctors',doctorSchema);
module.exports = doctorModel; 