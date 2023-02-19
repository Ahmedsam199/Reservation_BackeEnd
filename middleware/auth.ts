const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token =
    req.headers["authorization"];
    
 if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {

jwt.verify(token.split(' ')[1], 'secret',(err,decodedToken)=>{
        if(err){
            return res.status(401).send("Invalid Token");
        }else{
            console.log(decodedToken,'decodedToken2')
            return next()
        }
    });
    
  } catch (err) {
      console.log(token)
    return res.status(401).send("Invalid Token");
  }
   
};

module.exports = verifyToken;