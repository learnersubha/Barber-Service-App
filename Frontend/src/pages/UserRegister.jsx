import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState([])
  const submitHandler = async(e) => {
    e.preventDefault()  
    const user = {name, email, password}
    const newData = [...data, user]
    console.log(newData);
    setData(newData)

    const response = await axios.post("http://localhost:3000/api/auth/user/register", user, {withCredentials: true})
    console.log(response.data);

    navigate("/")
    

    setName('')
    setEmail('')
    setPassword('')  
  };
  
  return (
    <div className="bg-gray-900 h-screen w-full flex items-center justify-center ">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <div className="bg-gray-800 h-95 w-95  rounded-xl text-white">
          <h1 className="mx-33 mt-8 pt-10 text-2xl font-semibold">Register</h1>
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
          <button className="w-[40%] h-10 bg-amber-600 mx-27 mt-7 rounded-2xl font-bold active:scale-95 ">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
