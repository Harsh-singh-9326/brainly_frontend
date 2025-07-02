import mongoose,{Model, model,Schema, Types} from "mongoose";
import { TypeFlags } from "typescript";
const UserSchema= new Schema({
    Username : {type:String ,unique:true},
    Password : String
})

export const usermodel = model("User", UserSchema);

const contentSchema = new Schema({
    title: String ,
    link : String ,
    Tags:[{type : mongoose.Types.ObjectId ,ref :"tag"}],
    userid:{type : mongoose.Types.ObjectId ,ref :"User", require :true}
})
export const contentmodel = model("content",contentSchema)