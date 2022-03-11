const mongoos = requrie("mongoos");

const NotesSchema = new Schema({
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

module.exports=mongoose.model('notes',NotesSchema);
