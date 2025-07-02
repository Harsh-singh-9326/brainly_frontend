// const express = require ("express");
import express from "express"; 
import { connection_db } from "./db";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()
import { usermodel,contentmodel } from "./model";
import { userMiddleware } from "./middleware";
const port= process.env.PORT || 3000;
const app = express();
app.use(express.json());
connection_db()




app.post("/api/v1/signup",async (req,res)=>{
     const Username = req.body.Username 
     const Password = req.body.Password
    try{
        await usermodel.create({
            Username : Username,
            Password : Password
        }) 
        res.status(201).json({
            message:"you just signed up"
        })
    } catch (e){
            res.status(414).json({
                message :"you already sign up"})
        }
    
});

app.post("/api/v1/signin",async(req,res)=>{
    const Username = req.body.Username
    const Password = req.body.Password
    const existingUser = await usermodel.findOne({
        Username ,
        Password
    })
    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id
        },process.env.JWT_PASSWORD as string)
        res.json({token})
    }else {
        res.status(404).json({
            message:"aunthencation failed"
        })
    }
})

app.get("/api/v1/content",userMiddleware,async(req,res)=>{
    //@ts-ignore
    const userid = req.userid
     const content = await contentmodel.find({
        userid:userid
    }).populate("userid","username")
    res.json({
        content
    })

})
app.post("/api/v1/content",userMiddleware,async(req,res)=>{
    const title = req.body.title
    const link = req.body.link

    await contentmodel.create({
        link,
        title,
        //@ts-ignore
        userid:req.userid,
        tags:[]
    })
        res.status(201).json({ message: "Content created successfully" });
    
})
app.delete("/api/v1/content",(req,res)=>{
    
})
app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
});