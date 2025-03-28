import React from "react";
import "./Sidebar.css";
import "../../App.css";
import "../../index.css";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { useNavigate } from "react-router";
const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div className="em-sidebar-div">
      <div className="em-logo-div">
        <img src={CompanyLogo} alt="42 Works" />
      </div>
      <div className="em-sidebar-list-div">
        <ul>
          <li onClick={()=>navigate('/hr-dashboard')}>Dashboard</li>
          <li onClick={()=>navigate('/manage-employees')} >Manage Employess</li>
          <li>Leave</li>
          <li>Post Announcements</li>
          <li>Update Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
