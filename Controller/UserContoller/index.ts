import { Request, Response, NextFunction } from 'express';


import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const express=require('express')
const router=express.Router();
// Get All
router.get('/User', async(request: Request, response: Response, next: NextFunction) => {
 const Users= await prisma.users.findMany()
 response.status(200).send(Users);
})


//POST user
router.post('/User',async (request: Request, response: Response, next: NextFunction) => {
const {Username,Password} = request.body;
 await prisma.users.create({
  data: {
    Username: Username,
    Password: Password,
  },
}).then((res)=>{response.send(res)})

})
// Delete User
router.delete('/User/:id',async(request: Request<{ id: string}>, response: Response, next: NextFunction)=>{
 var id: number = Number(request.params.id);
await prisma.users.delete({
  where: {
    id: id,
  },
}).then((res)=>response.send("DELETED"))
})
// Get By ID
router.get('/User/:id',async(request: Request, response: Response, next: NextFunction)=>{
  var id: number=Number(request.params.id);
  await prisma.users.findUnique({
    where:{
      id:id
    }
  }).then((res)=>{response.send(res)})
})



module.exports= router;