import jwt from "jsonwebtoken"
import express, { NextFunction, Request, Response }   from "express"
import dotenv from "dotenv";
dotenv.config()

export const userMiddleware = (req:Request , res:Response ,next:NextFunction)=>{
    const header = req.headers["authorization"]
    const decoded = jwt.verify(header as string, process.env.JWT_PASSWORD as string)
    if(decoded){
        // @ts-ignore
 
        req.userid = decoded.id
        next()

    } else{
        res.status(403).json({
            message:"unauthorized  login"
        })
        
    }


}