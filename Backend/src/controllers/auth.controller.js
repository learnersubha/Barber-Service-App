const userModel = require ('../models/user.model')
const barbarModel = require ('../models/barbar.model')

const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const { json } = require('express')

async function registerUser(req, res){
  const{name,email,password} = req.body

  const isUserAlreadyExist = await userModel.findOne({
    email
  })

  if(isUserAlreadyExist){
    return res.status(400).json({
        message: "User Already Exist"
      })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword
  })

  const token = jwt.sign({
    id: user._id
  },process.env.JWT_SECRET)
  res.cookie("token", token)

  res.status(201).json({
    message: "User register successfully",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    }
  })
}

async function loginUser(req, res){
  const {email,password} = req.body
  
  const user = await userModel.findOne({
    email
  })

  if(!user){
     return res.status(400).json({
      message: "Invalid user or password"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if(!isPasswordValid){
     return res.status(400).json({
      message: "Invalid user or password"
    })
  }

  const token = jwt.sign({
    id: user._id
  },process.env.JWT_SECRET)
  res.cookie("token", token)

  res.status(201).json({
    message: "User login successfully",
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    }
  })

}

async function findUser(req, res) {
  try {
    const user = await userModel.findById(req.user.id)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}

function logoutUser(req, res){
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out successfully"
  })
}

async function registerBarbar(req,res){

  const {name, email, password, specialization, location} = req.body

  const isBarbarExist = await barbarModel.findOne({
    email
  })

  if(isBarbarExist){
    return res.status(400).json({
      message: "Barbar already exist"
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const barbar = await barbarModel.create({
      name,
      email,
      password: hashedPassword,
      specialization,
      location
  })

  const token =  jwt.sign({
    id: barbar._id,
  },process.env.JWT_SECRET)
  res.cookie("token", token)
  res.status(201).json ({
    message: "Barbar registered successfully",
    barbar: {
      _id: barbar._id,
      name: barbar.name,
      email: barbar.email,
      specialization: barbar.specialization,
      location: barbar.location
    }
  })
}

async function loginBarbar(req, res) {
  const {email, password} = req.body

  const barbar = await barbarModel.findOne({
    email
  })

  if(!email){
    return res.status(400).json({
      message: "Invalid email or password"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, barbar.password)

  if(!isPasswordValid){
    return res.status(400).json({
      message: "Invalid email or password"
    })
  }

  const token = jwt.sign({
    id: barbar._id
  }, process.env.JWT_SECRET)
  res.cookie("token", token)

  res.status(200).json({
    message: "Barbar login successfully",
    barbar: {
      _id: barbar._id,
      email: barbar.email,
      name: barbar.name
    }
  }) 
}

async function findBarbar(req, res){
  try{
    const barbar = await barbarModel.findById(req.barbar.id)
    if(!barbar){
      return res.status(400).json({message: "Undefined"})
    }
    return res.status(200).json({barbar})
  }catch(err){
     return res.status(500).json({ message: "Server error" });
  }
}
function logoutBarbar(req, res){
   res.clearCookie("token");
   res.status(200).json({
    message: "Barbar logged out successfully"
   }) 
  }




module.exports = { registerUser, loginUser, findUser, logoutUser, registerBarbar, loginBarbar,findBarbar, logoutBarbar}