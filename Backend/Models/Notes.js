const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
  user:{
type:mongoose.Schema.Types.ObjectId,
ref:'users'
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type:String,
  },
  tag:{
      type:String,
      required:false,
      default:'General'
  },
 
});
const Notes=mongoose.model('notes',NotesSchema)
module.exports=Notes;
