const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/sourabh?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const ConnectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
       try { console.log('connected to mongodb successfully');
           
       } catch (error) {
           console.log('error occured while connecting to mongo');
           
       }
    })
}
module.exports=ConnectToMongo;