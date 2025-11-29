const express = require ('express')
const bookinController = require ('../controllers/booking.controller')

const router = express.Router();

router.post("/", bookinController.createBooking)
router.get("/", bookinController.getBookings)

module.exports = router;
