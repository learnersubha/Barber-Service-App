import React from "react";

const BarbarDashboard = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-full overflow-auto flex justify-center">
      <div className=" bg-gray-700 mx-20 my-15 rounded h-[80%] w-[60%]">
        <div className="mt-5 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold">👋 Welcome Barbar</h1>
          <h3>your dashboard overview</h3>
        </div>
        <div className=" flex items-center justify-between h-[50%] w-full mt-10">
          <div className=" border rounded  bg-gray-500 h-[80%] w-[40%] ml-17 flex flex-col items-start pl-8 ">
            <h1 className="pt-5 text-2xl font-semibold">Profile</h1>
            <h3 className="text-sm mt-2">Name: Barbar</h3>
            <h3 className="text-sm">Email: barbar@example.com</h3>
            <h3 className="text-sm">Specialization: Haircut, kids-Special, Hair-Color</h3>
            <h3 className="text-sm">Location: Hatgacha</h3>
          </div>
          <div className="border rounded bg-gray-500 h-[80%] w-[40%] mr-17 flex flex-col items-start pl-8">
            <h1 className="pt-3 text-2xl font-semibold">Today's Booking</h1>
            <h3 className="text-sm mt-2">Subah</h3>
            <h3 className="text-sm">10:00 AM</h3>
            <h3 className="text-sm">Rakesh</h3>
            <h3 className="text-sm">11:00 AM</h3>
            <h2 className="text-xl">Total Booking Today: 2</h2>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="border border-neutral-800 px-5 py-2 text-xl bg-green-600  rounded mr-5">View All Bookings</button>
          <button className="border border-neutral-800 bg-red-600 rounded text-xl px-5 py-2 ml-5">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default BarbarDashboard;
