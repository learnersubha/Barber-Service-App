import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookAppointment = () => {
  const { id } = useParams();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setdate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async() => {

    if(!customerName || !phone || !date || !time){
      alert("Please fill all details")
      return;
    }

    try{
      await axios.post("http://localhost:3000/api/booking",{customerName, phone, barbarID:id, date, time, status: "Booked" })
      alert("Booking Successful")
    }catch(err){
      console.error(err)
      alert("Booking Failed")
    }
  };
  return (
    <div className="bg-gray-600 text-white pt-20 h-screen w-full flex justify-center ">
      <div className="shadow-2xl flex flex-col  items-center pt-7 h-[70%] w-[35%]">
        
          <h1 className="text-4xl font-semibold">Book Appointment</h1>
          <p className="text-2xl mt-2">BarbarID: {id}</p>
          <div>
            <h4>Your Name</h4>
            <input className="border border-white rounded" type="text"
              value={customerName}
              onChange={(e)=>{
                setCustomerName(e.target.value)
              }}            
            />
            <h4>Phone</h4>
            <input className="border border-white rounded " type="text" 
              value={phone}
              onChange={(e)=>{
                setPhone(e.target.value)
              }}
            />
            <h4>Date</h4>
            <input className="border border-white rounded" type="date" 
              value={date}
              onChange={(e)=>{
                setdate(e.target.value)
              }}
            />
            <h4>time</h4>
            <input className="border border-white rounded" type="time" 
              value={time}
              onChange={(e)=>{
                setTime(e.target.value)
              }}
            />
          </div>
          <button onClick=  {handleBooking} className="text-2xl bg-blue-700 px-5 py-2 mt-5 rounded active:scale-95">
            Confirm Booking
          </button>
      </div>
    </div>
  );
};

export default BookAppointment;
