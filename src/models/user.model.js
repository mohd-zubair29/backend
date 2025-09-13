import mongoose from mongoose;
import Schema from mongoose.Schema;
import { JsonWebTokenError, sign } from "jsonwebtoken";
import bcrypt from 'bcrypt';

const UserSchema=new Schema(
    {
          username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,

          },
          email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
          },
          fullName:{
            type:String,
            required:true,
          },
          profilePicture:{
            type:String,       //Cloudinary Url To Be Added
            required:true,
          },
          coverPicture:{ 
            type:String,       //Cloudinary Url To Be Added
            required:true,
          },
          watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            },
          ],
          passWord:{
                type:String,
               required:[true, 'Password Is Compulsory']
          },
          refreshToken:{
            type:String,
          },
    },{timestamps:true}
)

UserSchema.pre("save", async function(next){
  if(!this.modified("passWord")) return next;     //Agar Modified NaiHua Tou Kya Pre Lagana Hai
  this.passWord=bcrypt.hash(this.passWord, 5);   //This Will Encryt The Password Before Saving In The DataBase
  next();
})

UserSchema.methods.isPasswordCorrect=async function(passWord) {
  return await bcrypt.compare(passWord, this.passWord);
}

UserSchema.methods.generateAccessToken=function (){
  return jwt.sign({
          _id: this._id,
          email:this.email,
          full_name: this.fullName,
          username:this.username
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
})
}

UserSchema.methods.generateRefreshToken= function (){
  return jwt.sign({
    _id:this._id,
  },
  process.env.REFRESH_TOKEN_SECRET,
  {
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
  },)
}




export const User=mongoose.Schema("User", UserSchema)