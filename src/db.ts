import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const connection_db = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("MONGO DB IS CONNECTED ");
        
    }
    catch (error){
        console.error("Mongo DB cznt connect with ur database please check",error)
    }
}

connection_db()

