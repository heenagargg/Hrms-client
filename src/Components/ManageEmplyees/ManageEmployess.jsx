import React from "react";
import Sidebar from "../EmSidebar/Sidebar";
import HrNavbar from "../HrNavbar/HrNavbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import './ManageEmployess.css'
import '../../index.css'
const ManageEmployess = () => {
  return (
    <div className="hr-dash-container">
      <div className="hr-sidebar">
        <Sidebar />
      </div>
      <HrNavbar />
      <div className="mng-emp-dash-div">
        <div className="mng-emp-container">
          <div className="back-btn">
            <div className="back-btn-div">
              <IoMdArrowRoundBack />
              <div>back</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEmployess;
