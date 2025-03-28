import React from "react";
import HrNavbar from "../HrNavbar/HrNavbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import './ManageEmployess.css'
import '../../index.css'
import { useNavigate } from "react-router";
import Sidebar from '../HrSidebar/Sidebar';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
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
            <div className="back-btn-div"  onClick={()=>navigate('/hr-dashboard')}>
              <IoMdArrowRoundBack />
              <div >back</div>
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
              <th> Team Name</th>
              <th>Designation</th>
              <th>Date of Joining </th>
              <th style={{textAlign:'center'}}>Profile </th>
              <th style={{textAlign:"center"}}>Action </th>
            </tr>
           </thead>
           <tbody>
            <tr>
              <td>Heena</td>
              <td> Backend</td>
              <td>Trainee</td>
              <td>26/12/2024</td>
              <td className="view-profile-btn-div"><button>view Profile</button></td>
              <td className="action-div">
              <button><MdEdit size={16}/></button>
              <button> <MdDelete size={16} /></button>
              </td>
              
            </tr>
            <tr>
              <td>Test</td>
              <td> Frontend</td>
              <td>Developer</td>
              <td>19 Aug 2024</td>
              <td className="view-profile-btn-div"><button>view Profile</button></td>
              <td className="action-div">
              <button><MdEdit size={16}/></button>
              <button> <MdDelete size={16} /></button>
              </td>
            </tr>
            <tr>
              <td>Test2</td>
              <td> Backend</td>
              <td>QA</td>
              <td>20 Sep</td>
              <td className="view-profile-btn-div"><button>view Profile</button></td>
              <td className="action-div">
              <button><MdEdit size={16}/></button>
              <button> <MdDelete size={16} /></button>
              </td>
            </tr>
            <tr>
              <td>xyz</td>
              <td>SEO</td>
              <td>Manger</td>
              <td>8 July</td>
              <td className="view-profile-btn-div"><button>view Profile</button></td>
              <td className="action-div">
              <button><MdEdit size={16}/></button>
              <button> <MdDelete size={16} /></button>
              </td>
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
