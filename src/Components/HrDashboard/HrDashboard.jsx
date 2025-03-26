import React from 'react'
import './HrDashboard.css'
import "../../App.css";
import "../../index.css";
import ProfileCard from '../EmSidebar/Sidebar';
import Sidebar from '../HrSidebar/Sidebar';
import CompanyLogo from '../../assets/svg-image-1.svg'
import HrNavbar from '../HrNavbar/HrNavbar';
const HrDashboard = () => {
  return (
    <div className='hr-dash-container'>
        <div className="hr-sidebar">
            <Sidebar/>
        </div>
        
            <HrNavbar/>
            {/* <div className="hr-wlcm-div">
                Welcome, Admin
            </div>
            <div className="hr-profile-container">
                Profile
            </div> */}
        
        <div className="hr-dash-div">
            <div className="att-pie-container">
                <div className="mark-attendance-div">
                    <h2>Mark your attendance</h2>
                </div>
                <div className="employee-pie-chart-div">
                    <h2>Total Employees</h2>
                </div>
            </div>
            <div className="att-pie-container">
                <div className="mark-attendance-div">
                    <h2>Leave Status</h2>
                </div>
                <div className="employee-pie-chart-div">
                    <h2>Personal Todo</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HrDashboard