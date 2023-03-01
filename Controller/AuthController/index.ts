import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router();

router.post('/login',async(request: Request, response: Response, next: NextFunction)=>{
  var id: number=Number(request.params.id);
  await prisma.users.findFirst({
  where:{
      Username:request.body.Username,
      Password:request.body.Password
    }
  }).then((res)=>{
    const token = jwt.sign(
    { id:res.id,Email: request.body.Username },
    'secret',
    {
      expiresIn: "12h",
    }
  );


response.send({ Status:true,accessToken: token });
    }).catch((err)=>{
      response.send({message:"UserNotFound",
    Status:false})
    })
})



module.exports= router;