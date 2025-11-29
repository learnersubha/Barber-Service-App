import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [specialization, setSpecialization] = useState([])
  const [street, setStreet] = useState('')
  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [barbarData, setBarbarData] = useState('')

  const handleChange = async(e)=>{
    e.preventDefault();
    const barbar = {name, email, password, specialization, location: { street, area, city, pincode}}

    const newBarbarData = [...barbarData, barbar]
    setBarbarData(newBarbarData)

    const registerResponse = await axios.post("http://localhost:3000/api/auth/barbar/register", barbar, {withCredentials: true})
    console.log(registerResponse.data);

    navigate('/barbar/dashboard')
    
  }
  return (
    <div className="bg-gray-900 h-screen w-full flex items-center justify-center ">
      <form onSubmit={(e)=>{
        handleChange(e)
      }}>
        <div className="bg-gray-800 h-130 w-95  rounded-xl text-white">
          <h1 className="mx-33 mt-8 text-2xl font-semibold">Register</h1>
          <input
            className="w-[80%] h-10 ml-10 border-2 border-amber-500 rounded mt-8 "
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
          <input
            className="w-[80%] h-10 ml-10 border-2 border-amber-500 rounded mt-2 "
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <input
            className="w-[80%] h-10 ml-10 border-2 border-amber-500 rounded mt-2 "
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <textarea
            className="w-[80%] h-15 ml-10 border-2 border-amber-500 rounded mt-2 "
            placeholder="Enter your specialization"
            value={specialization}
            onChange={(e)=>{
              setSpecialization(e.target.value)
            }}
          />
          <h1 className="text-large ml-10 mt-2 font-semibold">Location</h1>
          <input
            className="border-2 border-amber-500 w-[38%] h-8 ml-10 rounded mt-2"
            type="text"
            placeholder="Enter street"
            value={street}
            onChange={(e)=>{
              setStreet(e.target.value)
            }}
          />
          <input
            className="border-2 border-amber-500 w-[38%] h-8 ml-3 rounded mt-2"
            type="text"
            placeholder="Enter area"
            value={area}
            onChange={(e)=>{
              setArea(e.target.value)
            }}
          />
          <input
            className="border-2 border-amber-500 w-[38%] h-8 ml-10 rounded mt-2"
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e)=>{
              setCity(e.target.value)
            }}
          />
          <input
            className="border-2 border-amber-500 w-[38%] h-8 ml-3 rounded mt-2"
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={(e)=>{
              setPincode(e.target.value)
            }}
          />
          <button className="w-[40%] h-10 bg-amber-600 mx-27 mt-7 rounded-2xl font-bold active:scale-95 ">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
