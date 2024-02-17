const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');


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

const encryptPassword = (userDoc) => {
    const hashPassword = bcryptjs.hashSync(userDoc.password,10);
    userDoc.password = hashPassword;
  };
  
  userSchema.pre('save', function(next) {
    encryptPassword(this); 
    next();
  });

const User=mongoose.model('User',userSchema);

module.exports=User;