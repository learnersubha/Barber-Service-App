import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [barbar, setBarbar] = useState(null)

  useEffect(()=>{
    const getBarbar = async ()=>{
      const response = await axios.get(`http://localhost:3000/api/barbar/${id}`)
      setBarbar(response.data.message)
    }
    getBarbar();
  },[id])

  if(!barbar){
    return <p>Loading...</p>
  }

  return (
    <div className='bg-blue-900 text-white h-screen w-full flex justify-center pt-20'>
      <div className='bg-blue-900 h-[70%] w-[30%] shadow-2xl shadow-amber-50 flex flex-col items-center pt-10 rounded'>
      <h1 className='text-5xl font-semibold'>{barbar.name}</h1>
      <h2 className='text-3xl pt-5 font-medium'>Specialization:</h2>
      <h4>{barbar.specialization?.join(",")}</h4>
      <h2 className='text-3xl pt-5 font-medium'>Location:</h2>
      <h4>{barbar.location?.street},{barbar.location?.area},{barbar.location?.city}-{barbar.location?.pincode}</h4>
      <button onClick={()=>{
        navigate(`/book/${id}`)
      }}  className='mt-10 text-2xl px-5 py-2 rounded bg-zinc-900 active:scale-95'>Book Appointment</button>
      </div>
    </div>
  )
}

export default ViewDetails
