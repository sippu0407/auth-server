const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        default:"chutiya"
    },
    email:{
        type:String,
        required:true,
        unique:true
        //email validation
    },
    password:{
        type:String,
        required:true
    }
});

const User=mongoose.model('User',userSchema);

module.exports=User;