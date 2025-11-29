import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoginData, setUserLoginData] = useState("");

  const handleChange = async(e) => {
    e.preventDefault();
    const loginUser = {email, password}
    const newUserLoginData  = [...userLoginData, loginUser]
    setUserLoginData(newUserLoginData)

    const loginResponse = await axios.post("http://localhost:3000/api/auth/user/login", loginUser, {withCredentials: true})
    console.log(loginResponse.data);

    navigate("/")  

    setEmail('')
    setPassword('')
  };

  return (
    <div className="bg-gray-900 h-screen w-full flex items-center justify-center">
      <form
        onSubmit={(e) => {
          handleChange(e);
        }}
      >
        <div className="bg-gray-800 h-80 w-95 rounded-xl text-white">
          <h1 className="  ml-10 pt-10 text-2xl font-semibold flex justify-center mr-10">
            LogIN
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
              setPassword(e.target.value)
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
