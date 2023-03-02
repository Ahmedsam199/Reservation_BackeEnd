import { Request, Response, NextFunction } from 'express';
import jwt_decode from "jwt-decode";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const express=require('express')
const router=express.Router();
interface jwtpayload{
id:number
}
router.get('/Reservation/:series',async(request: Request, response: Response, next: NextFunction)=>{
let series=request.params.series
const datas:jwtpayload= jwt_decode(series)
const id:number=Number(datas.id);
  const reservation=await prisma.reservation.findMany({
      where:{
        PassengerID:id
      }
    })
    response.send(reservation);
    next();
})

router.post('/Reservation',async(request:Request,response:Response,next:NextFunction)=>{
    const{FlightName,

PassengerID,
FlightNumber,
Cost,
isChildern ,
TypeOfFlight,
From  ,
ToCountrt ,
DatePuarcshed,
FlightDate,
TripType,}=request.body
   let Passid:number=Number(PassengerID)
   let FlightNumberInt:number=Number(FlightNumber)
   let ConstInt:number=Number(Cost)
   let DateP=new Date(DatePuarcshed)
   let FlightD=new Date(FlightDate)
 await prisma.reservation.create({
  data: {
    FlightName: FlightName,
    PassengerID: Passid,
    DatePuarcshed:DateP,
    FlightDate:FlightD,
    From  :From,
    ToCountrt:ToCountrt,
    TripType:TripType,  
    FlightNumber:FlightNumberInt,
    TypeOfFlight:TypeOfFlight,
    isChildern:isChildern,
Cost:ConstInt,
  }
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
  }).then((res)=>{response.send(res)}).catch((err)=>{response.send(err)})
})


module.exports=router