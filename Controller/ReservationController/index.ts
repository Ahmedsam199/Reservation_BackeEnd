import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const express=require('express')
const router=express.Router();
router.get('/Reservation',async(request: Request, response: Response, next: NextFunction)=>{
    const reservation=await prisma.reservation.findMany()
    response.send(reservation);
    next();
})

router.post('/Reservation',async(request:Request,response:Response,next:NextFunction)=>{
    const {FlightName,PassengerID,DatePuarcshed,FlightDate}=request.body
   let Passid:number=Number(PassengerID)
   let DateP=new Date(DatePuarcshed)
   let FlightD=new Date(FlightDate)
 await prisma.reservation.create({
  data: {
    FlightName: FlightName,
    PassengerID: Passid,
    DatePuarcshed:DateP,
    FlightDate:FlightD
  },
}).then((res)=>{response.send(res)}).catch((error)=>console.log(error))
next()
})
router.delete('/Reservation/:id',async(request:Request,response:Response,next:NextFunction)=>{
let id:number=Number(request.params.id)
await prisma.reservation.delete({
    where:{
        id:id
    }
}).then((res)=>response.send("DONE"))
})
router.get('/Reservation/:id',async(request: Request, response: Response, next: NextFunction)=>{
  var id: number=Number(request.params.id);
  await prisma.reservation.findUnique({
    where:{
      id:id
    }
  }).then((res)=>{response.send(res)})
})


module.exports=router