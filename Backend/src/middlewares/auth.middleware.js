const jwt = require("jsonwebtoken")
const userModel = require('../models/user.model')
const barbarModel = require('../models/barbar.model')

async function userAuth(req, res, next){
 
    const token = req.cookies.token

    if(!token){
      return res.status(400).json({message:"unauthorised"})
    }
     try{
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decode
    next();
    }
     catch(err){
    return res.status(400).json({message: "Unauthorised"})
  }
}

async function barbarAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ message: "unauthorised" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.barbar = decode; 
    next();
  } catch (err) {
    return res.status(400).json({ message: "Unauthorised" });
  }
}



module.exports = {userAuth,barbarAuth}