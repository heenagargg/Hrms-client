import React from 'react'
import './EmployeeDashboard.css'
import "../../App.css";
import "../../index.css";
import ProfileCard from '../EmSidebar/Sidebar';
import Sidebar from '../EmSidebar/Sidebar';
import CompanyLogo from '../../assets/svg-image-1.svg'
const EmployeeDashboard = () => {
  return (
    <div className='em-dash-container'>
        <div className="em-sidebar">
            <Sidebar/>
        </div>
        <div className="em-nav-container">
            <div className="em-wlcm-div">
                Welcome, Abc
            </div>
            <div className="em-profile-container">
                Profile
            </div>
        </div>
        <div className="em-dash-div">
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

export default EmployeeDashboard