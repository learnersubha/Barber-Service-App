// Create Server
const express = require ('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const barbarRoutes = require('./routes/barbar.routes')
const bookingRouter = require ('./routes/bookings.routes')
const cors = require('cors')


const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}))
app.use(cookieParser());
app.use(express.json());


app.get('/', (req, res)=>{
  res.send("Hello")
})

app.use('/api/auth',authRoutes)
app.use('/api/barbar',barbarRoutes)
app.use('/api/booking', bookingRouter)

module.exports = app;