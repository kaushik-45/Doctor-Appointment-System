const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
    
  },
  password: {
    type: String,
    required: [true, "password is require"],
    
  },
  hasApplied:{
    type :Boolean,
    default: false,
  },
  isAdmin: {
    type:Boolean,
    default:false
  },
  isDoctor: {
    type:Boolean,
    default:false
  },
  notification : {
    type:Array,
    default:[]
  },
  seennotification: {
    type:Array,
    default:[]
  },
  isBlocked: {
    type: Boolean,
    default: false,
  } 
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel; 