const mongoose=require('mongoose')

const userShema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel=mongoose.model("users",userShema)
module.exports=UserModel