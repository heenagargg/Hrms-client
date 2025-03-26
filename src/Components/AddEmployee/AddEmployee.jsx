import React, { useState } from "react";
import "./AddEmployee.css";
import "../../index.css";
import ProfileCard from "../EmSidebar/Sidebar";
import Sidebar from "../HrSidebar/Sidebar";
import CompanyLogo from "../../assets/svg-image-1.svg";
import HrNavbar from "../HrNavbar/HrNavbar";
import { useForm } from "react-hook-form";
import Popup from "../popup/Popup";
import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { addNewEmployee } from "../Services/EmployeeOnboarding";
import { toast } from "react-toastify";
import loading from "../../assets/Rolling@1x-1.0s-200px-200px.gif";
const AddEmployee = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const [isbuttonLoading, setIsButtonLoading] = useState(null);
  const [newEmployeeData, setNewEmployeeData] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const submitData = (data) => {
    console.log(data);
    setNewEmployeeData(data);
    setIsPopupOpen(true);
  };

  const handleOnboarding = async () => {
    setIsButtonLoading(true);
    const response = await addNewEmployee(newEmployeeData);
    console.log("response", response);
    if (response.data.success) {
      setIsButtonLoading(false);
      toast.success(response.data.message);
      navigate("/manage-employees");
    } else {
      setIsButtonLoading(false);
      setIsPopupOpen(false);
      toast.error(response.data.message);
      navigate("/add-employee");
    }
  };

  return (
    <div className="hr-dash-container">
      {isPopupOpen && (
        <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}>
          <div className="add-emp-pop-msg">
            Are you sure you want to proceed with onboarding?
          </div>
          <div className="add-emp-btns">
            <button
              className={`${
                isbuttonLoading ? "disabled-btn" : ""
              } confirm-btn `}
              onClick={() => handleOnboarding()}
            >
              {isbuttonLoading ? (
                <img className="loading-image" src={loading} alt="loading..." />
              ) : (
                <p>Yes</p>
              )}
            </button>
            <button
              className="cancel-btn"
              onClick={() => setIsPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Popup>
      )}
      <div className="hr-sidebar">
        <Sidebar />
      </div>
      <HrNavbar />
      <div className="add-emp-dash-div">
        <div className="add-emp-container">
          <div className="back-btn">
            <div className="back-btn-div">
              <IoMdArrowRoundBack />
              <div>back</div>
            </div>
          </div>
          <div className="add-emp-title">
            <h1>Onboard new Employee</h1>
          </div>
          <div className="add-emp-description">
            <h1>
              Please Enter the necessary details to onboard a new employee.
            </h1>
          </div>
          <form className="add-emp-form" onSubmit={handleSubmit(submitData)}>
            <div className="name-div">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                maxLength={50}
                autoComplete="off"
                {...register("fullName", {
                  required: {
                    value: true,
                    message: "Full Name is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Full name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Full name cannot exceed 50 characters",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /^[A-Za-z\s]+$/.test(v) ||
                      "Full Name can only contain alphabets",
                  },
                })}
              />
              {errors?.fullName && (
                <small className="errors-text">{errors.fullName.message}</small>
              )}
            </div>
            <div className="email-div">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                maxLength={100}
                autoComplete="off"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/.test(
                        v
                      ) || "Please enter a valid email address",
                  },
                })}
              />
              {errors?.email && (
                <small className="errors-text">{errors.email.message}</small>
              )}
            </div>
            {/* <div className="role-div">
              <select
                name="role"
                id="role"
                {...register("role", {
                  required: {
                    value: true,
                    message: "Role is required",
                  },
                })}
              >
                <option value="" disabled selected>
                  Role
                </option>
                <option value="Hr">HR</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
              {errors?.role && (
                <small className="errors-text">{errors.role.message}</small>
              )}
            </div> */}
            <div className="role-div">
              <select
                name="role"
                id="role"
                {...register("role", {
                  required: {
                    value: true,
                    message: "Role is required",
                  },
                })}
                defaultValue="" // Fix to prevent "disabled selected" issue
              >
                <option value="" disabled>
                  Role
                </option>
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
              {errors?.role && (
                <small className="errors-text">{errors.role.message}</small>
              )}
            </div>

            <div className="team-div">
              <input
                type="text"
                placeholder="Team Name"
                name="teamName"
                maxLength={30}
                autoComplete="off"
                {...register("teamName", {
                  required: {
                    value: true,
                    message: "Team Name is required",
                  },
                })}
              />
              {errors?.teamName && (
                <small className="errors-text">{errors.teamName.message}</small>
              )}
            </div>
            <div className="designation-div">
              <input
                type="text"
                placeholder="Designation"
                name="designation"
                maxLength={30}
                autoComplete="off"
                {...register("designation", {
                  required: {
                    value: true,
                    message: "Designation is required",
                  },
                })}
              />
              {errors?.designation && (
                <small className="errors-text">
                  {errors.designation.message}
                </small>
              )}
            </div>
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
