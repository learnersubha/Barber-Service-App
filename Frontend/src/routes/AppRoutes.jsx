import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import UserRegister from '../pages/UserRegister';
import BarbarRegister from '../pages/BarbarRegister';
import BarbarLogin from '../pages/BarbarLogin'
import Home from '../pages/Home'
import BarbarDashboard from '../pages/BarbarDashboard';
import ViewDetails from '../pages/ViewDetails';
import BookAppointment from '../pages/BookAppointment';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/user/register' element={<UserRegister />}/>
          <Route path='/user/login' element={<Login />}/>
          <Route path='/barbar/register' element={<BarbarRegister />}/>
          <Route path='/barbar/login' element={<BarbarLogin />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/barbar/dashboard' element={<BarbarDashboard />} />
          <Route path='/:id' element={<ViewDetails />} />
          <Route path='/book/:id' element={<BookAppointment />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes
