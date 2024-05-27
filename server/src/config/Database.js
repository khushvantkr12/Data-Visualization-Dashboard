const mongoose=require('mongoose');
require("dotenv").config();//jo bhi environment(.env) me define kiye hai wo isme load hojayega


const dbConnect=()=> {//establish connection between application and database
   mongoose.connect(process.env.MONGO_URI)
   //then it returns promise
   .then(()=>console.log("DB connection is successful"))
   .catch((error)=>{
    console.log("error in DB connection")
    console.error(error.message)
    process.exit(1);
});
}
module.exports = dbConnect;

