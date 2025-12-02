import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [barbars, setBarbars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const fetchUser = async()=>{
      const res = await axios.get("http://localhost:3000/api/auth/user/me",{withCredentials: true})
      setUser(res.data.user)
      
    }
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchBarbar = async () => {
      const response = await axios.get("http://localhost:3000/api/barbar");
      setBarbars(response.data);      
    };

    fetchBarbar();
  }, []);

  const filterBarbars = barbars.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="h-screen w-full bg-gray-800">
      <Navbar />
      <div className="flex items-center justify-center pt-12 bg-gray-800 text-white">
        <div className="bg-gray-800 h-[90%] w-[85%]  rounded flex flex-col items-start  pb-8 shadow-2xl shadow-amber-50 ">
          <div className=" mt-10 flex flex-col items-center w-full ">
            <h1 className="text-3xl font-medium">👋 Welcome {user?.name}</h1>
            <h4 className="text-lg">Book your appointments</h4>
          </div>
          <div className="mt-5 ml-120 w-full ">
            <input
              className=" border border-white rounded h-10 w-110"
              type="text"
              placeholder=" 🔍 Search barbers"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <h2 className="text-2xl font-medium pl-25 mt-7 mb-7 shadow-white">Available Barbars</h2>
          </div>
          <div className="flex-wrap flex">
            {filterBarbars.map((item) => {
            return <div key={item._id} className="mt-3 ml-3 h-20 w-112 border border-white rounded p-3 flex items-center justify-between mr-4 ">
              <div>
                <h3 className="text-2xl font-medium">{item.name}</h3>
                <p className=" text-lg">{item.specialization.join(", ")}</p>
              </div>
              <button
                onClick={() => {
                  navigate(`/${item._id}`);
                }}
                className="bg-amber-500 hover:bg-amber-800 text-black px-5 py-2 active:scale-95  rounded"
              >
                View Details
              </button>
            </div>;
          })}
          </div>
          {/* <button
            onClick={()=>{
              navigate(`/book}`)
            }}
            className="mt-8 bg-amber-500 hover:bg-amber-800 text-black px-5 py-2 rounded text-xl font-semibold  active:scale-95">
            Book Appointments
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
