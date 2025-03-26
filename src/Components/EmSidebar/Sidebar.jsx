import React from "react";
import "./Sidebar.css";
import "../../App.css";
import "../../index.css";
import CompanyLogo from "../../assets/svg-image-1.svg";
const Sidebar = () => {
  return (
    <div className="em-sidebar-div">
      <div className="em-logo-div">
        <img src={CompanyLogo} alt="42 Works" />
      </div>
      <div className="em-sidebar-list-div">
        <ul>
          <li>Dashboard</li>
          <li>Leave Approvals</li>
          <li>Upload Documents</li>
          <li>Update Profile</li>
          <li>Announcements</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
