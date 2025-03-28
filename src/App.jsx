import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import EmailVerify from './Components/EmailVerify/EmailVerify'
import { ToastContainer } from 'react-toastify'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import Otp from './Components/OTP/Otp'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import EmployeeDashboard from './Components/EmployeeDashboard/EmployeeDashboard'
import HrDashboard from './Components/HrDashboard/HrDashboard'
import ManageEmployess from './Components/ManageEmplyees/ManageEmployess'
import AddEmployee from './Components/AddEmployee/AddEmployee'
import VerifyEmail from './Components/verifyEmail/verifyEmail'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Signup/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/verification' element={<EmailVerify  />}/>
        <Route path='/hr-dashboard' element={<HrDashboard  />}/>
        <Route path='/manage-employees' element={<ManageEmployess  />}/>
        <Route path='/add-employee' element={<AddEmployee/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/employee-dashboard' element={<EmployeeDashboard  />}/>
        <Route path='/update-profile' element={<UpdateProfile/>}/>
      </Routes>
      <ToastContainer style={{fontSize:'14px'}}/>
      </BrowserRouter>
    </div>
  )
}

export default App

// T09DVdi7nGOjWtlR