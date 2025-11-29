const mongoose = require ('mongoose')

const barbarSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String
  },
  specialization: {
    type: [String],
    required:true
  },
  location: {
    type: {
    street: String,
    area: String,
    city: String,
    pincode: String,
    },
    require: true
  }
})

const barbarModel = mongoose.model('barbar', barbarSchema);

module.exports = barbarModel;