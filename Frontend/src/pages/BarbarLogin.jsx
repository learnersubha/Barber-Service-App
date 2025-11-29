import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState('')

  const [barbarLoginData, setBarbarLoginData] = useState('')

  const handleChange = async(e) => {
    e.preventDefault();
    const barbarLogin = {email, password}

    const newbarbarLoginData = [...barbarLoginData, barbarLogin]
    setBarbarLoginData(newbarbarLoginData)

    const barbarLoginResponse = await axios.post("http://localhost:3000/api/auth/barbar/login", barbarLogin, {withCredentials: true})
    console.log(barbarLoginResponse.data);

    navigate("/barbar/dashboard")
  };
  return (
    <div className="bg-gray-900 h-screen w-full flex items-center justify-center">
      <form
        onClick={(e) => {
          handleChange(e);
        }}
      >
        <div className="bg-gray-800 h-80 w-95 rounded-xl text-white">
          <h1 className="  ml-10 pt-10 text-2xl font-semibold flex justify-center mr-10">
            Barbar LogIN
          </h1>
          <input
            className="w-[80%] h-10 ml-9 border-2 border-green-600 rounded mt-5 "
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <input
            className="w-[80%] h-10 ml-9 border-2 border-green-600 rounded mt-3 "
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
          />
          <button className="w-[40%] h-10 mt-5 mx-26 rounded-2xl font-bold bg-green-700 hover:bg-green-900 active:scale-95">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
