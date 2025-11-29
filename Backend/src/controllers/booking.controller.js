const bookingModel = require ('../models/booking.model')

const createBooking = async function(req,res){
  const{customerName, phone, barbarID, date, time, status} = req.body

  const booking = await bookingModel.create({
    customerName,
    phone,
    barbarID,
    date,
    time,
    status
  })
  res.json({
    message: "Booking created", booking
  })
}

const getBookings = async function(req,res){
  try{
  const bookings = await bookingModel.find().populate("barbarID")
  res.json(bookings)
  }catch(err){    
    res.status(500).json({
      message: err
    })
  } 
}
module.exports = {createBooking, getBookings}