const mongoose = require("mongoose");
 mongoose.connect("mongodb://127.0.0.1:27017/courses")
 .then(()=>{
   console.log('connect');
} )   
.catch((error)=>{
   console.log(error);
})