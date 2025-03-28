import React from "react";
import "./HrDashboard.css";
import "../../App.css";
import "../../index.css";
import ProfileCard from "../EmSidebar/Sidebar";
import Sidebar from "../HrSidebar/Sidebar";
import CompanyLogo from "../../assets/svg-image-1.svg";
import HrNavbar from "../HrNavbar/HrNavbar";
import { PieChart } from "@mui/x-charts/PieChart";
const HrDashboard = () => {
  return (
    <div className="hr-dash-container">
      <div className="hr-sidebar">
        <Sidebar />
      </div>
      <HrNavbar />
      <div className="hr-dash-div">
        <div className="emp-stats-container">
          <div className="total-emp-div">
            <h2>Total employess</h2>
            <div className="stats-number">80</div>
          </div>
          <div className="present-emp-div">
            <h2>Present Today</h2>
            <div className="stats-number">70</div>
          </div>
          <div className="leave-emp-div">
            <h2>On leave today</h2>
            <div className="stats-number">10</div>
          </div>
          <div className="pending-approvals-div">
            <h2>Pending Approvals</h2>
            <div className="stats-number">5</div>
          </div>
        </div>
        <div className="stats2-container">
          <div className="att-list-div">
            <h2>Attendance List</h2>
          </div>
          <div className="pie-chart-div">
            <h2>Employees pie Chart</h2>
            <div className="pie-chart">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 11, label: "Backend & Mobile Team"},
                      { id: 1, value: 19, label: "BSD Team" },
                      { id: 2, value: 4, label: "Virtual Window Team" },
                      { id: 3, value: 8, label: "Frontend Team" },
                      { id: 4, value: 5, label: "Mainteance Team" },
                      { id: 5, value: 7, label: "Designer Team",color:'rgb(41, 213, 156)'  },
                      { id: 6, value: 11, label: "SEO Team",color:'rgb(213, 41, 153)'  },
                      { id: 7, value: 5, label: "HR/ADMIn/Account/IT/BD",color:'rgb(49, 148, 100)'  },
                      { id: 8, value: 4, label: "Marketing Team" ,color:'rgb(41, 187, 213)' },
                    ],
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 10, additionalRadius: -20, color: 'gray' },
                    // valueFormatter,
                    innerRadius:20,
                    outerRadius:110,
                    // paddingAngle:1,
                    cornerRadius:2,
                    cx:100
                  },
                ]}
                width={500}
                height={280}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrDashboard;
