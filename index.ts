
import express from 'express';
const auth=require('./middleware/auth')
const app=express();
// use this instead of the body-parser
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
 // Pass to next layer of middleware
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const UserContoller=require('./Controller/UserContoller')
const Reservation=require('./Controller/ReservationController')
const Auth=require('./Controller/AuthController')
app.use('/api',auth,UserContoller);
app.use('/api',auth,Reservation)
app.use('/Auth',Auth)
app.listen(3000)

