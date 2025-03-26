import React from "react";
import HrNavbar from "../HrNavbar/HrNavbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import './ManageEmployess.css'
import '../../index.css'
import { useNavigate } from "react-router";
import Sidebar from '../HrSidebar/Sidebar';
const ManageEmployess = () => {
  const navigate=useNavigate()
  return (
    <div className="hr-dash-container">
      <div className="hr-sidebar">
        <Sidebar/>
      </div>
      <HrNavbar />
      <div className="mng-emp-dash-div">
        <div className="mng-emp-container">
          <div className="back-btn">
            <div className="back-btn-div">
              <IoMdArrowRoundBack />
              <div>back</div>
            </div>
            <div className="add-emp-btn-div">
              <div onClick={()=>navigate('/add-employee')}>Add new employee</div>
            </div>
          </div>
          <div className="mng-emp-list-container">
            <div className="title">
              Employees List
            </div>
            <table>
           <thead>
            <tr>
              <th> Full Name</th>
              <th>Date of Joining </th>
              <th> Team Name</th>
              <th>Status </th>
              <th>Action </th>
            </tr>
           </thead>
           <tbody>
            <tr>
              <td>ABc</td>
              <td>25 Dec</td>
              <td> BAckend</td>
              <td>No</td>
              <td>view/Edit /Delete</td>
            </tr>
            <tr>
              <td>ABc</td>
              <td>25 Dec</td>
              <td> BAckend</td>
              <td>No</td>
              <td>view/Edit /Delete</td>
            </tr>
            <tr>
              <td>ABc</td>
              <td>25 Dec</td>
              <td> BAckend</td>
              <td>No</td>
              <td>view/Edit /Delete</td>
            </tr>
            <tr>
              <td>ABc</td>
              <td>25 Dec</td>
              <td> BAckend</td>
              <td>No</td>
              <td>view/Edit /Delete</td>
            </tr>
           </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEmployess;
