const mongoose = require ('mongoose')

const bookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  barbarID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Barbar",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Booked", "Completed", "Canceled"],
    default: "Booked"
  }
})

const bookingModel = mongoose.model("booking", bookingSchema)

module.exports = bookingModel;