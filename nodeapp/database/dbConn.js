const mongoose= require('mongoose');

async function dbconn() {
    try{
       //mongodb+srv://satveer0905:o9o52oo3+@@cluster0.zotei7s.mongodb.net/studentappcseb?retryWrites=true&w=majority&appName=Cluster0
    //
    // mongoose.connect('mongodb://localhost:27017/studentappcseb');
   await mongoose.connect('mongodb+srv://satveer0905:satveer@cluster0.zotei7s.mongodb.net/studentappcseb?retryWrites=true&w=majority&appName=Cluster0');
console.log("Data Base Connected successfully")  
  }catch(err){
        console.log(err.message);
    }
}
module.exports=dbconn;
// dbconn();