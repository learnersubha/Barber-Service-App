const barbarModel = require ('../models/barbar.model')


const getAllBarbar  = async function(req,res) { 
  try {
  const barbars = await barbarModel.find()
  res.json(barbars) 
  } catch(err){
    res.status(500).json({
      message: "Internal server issue"
    })
  }
}

const getBarbarById = async function(req,res) {
  try{
  const barbar = await barbarModel.findById(req.params.id)
    if(!barbar){
      return res.status(404).json({
        message: "Barbar not found"
      })
    }  
  res.status(200).json({message: barbar})
  }catch(err){
    res.status(500).json({
      message: "Server Error", err
    })
  }
}

module.exports = {getAllBarbar, getBarbarById}

