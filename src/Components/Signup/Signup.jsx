import React, { useState } from "react";
import "./Signup.css";
import "../../App.css";
import "../../index.css";
import SignupBg from "../../assets/bg.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import loading from "../../assets/Rolling@1x-1.0s-200px-200px.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    contact: "",
    emergencyContact: "",
    address: "",
    role: "",
    teamName: "",
    designation: "",
    password: "",
    cPassword: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [cPasswordType, setCPasswordType] = useState("password");
  const [errors, setErrors] = useState({});
  const [isButtonDisabled,setIsButtonDisabled]=useState(null)
  

  const validateForm = () => {
    let validationErrors = {};
    const fullNameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactRegex = /^[6-9][0-9]{9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/;
    if (!formValues.fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    } else if (!fullNameRegex.test(formValues.fullName)) {
      validationErrors.fullName = "Full Name can only contain alphabets";
    } else if (
      formValues.fullNamelength < 4 ||
      formValues.fullName.length > 50
    ) {
      validationErrors.fullName =
        "Full name must be between 3 to 50 characters";
    }
    if (!formValues.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formValues.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formValues.contact.trim()) {
      validationErrors.contact = "Contact Number is required";
    } else if (!contactRegex.test(formValues.contact)) {
      validationErrors.contact = "Please enter a valid contact number";
    }
    if (!formValues.emergencyContact.trim()) {
      validationErrors.emergencyContact =
        "Emergency Contact Number is required";
    } else if (!contactRegex.test(formValues.emergencyContact)) {
      validationErrors.emergencyContact = "Please enter a valid contact number";
    }
    if (!formValues.address.trim()) {
      validationErrors.address = "Address is required";
    } else if (formValues.address > 100) {
      validationErrors.address =
        "Address must be less than or equal to 100 characters ";
    }
    if (!formValues.role.trim()) {
      validationErrors.role = "Role is required";
    }
    if (!formValues.teamName.trim()) {
      validationErrors.teamName = "Team Name is required";
    }
    if (!formValues.designation.trim()) {
      validationErrors.designation = "Designation is required";
    }
    if (!formValues.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (!passwordRegex.test(formValues.password)) {
      validationErrors.password =
        "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number";
    } else if (formValues.password.length < 8) {
      validationErrors.password =
        "Password must be between 8 and 20 characters";
    }
    if (!formValues.cPassword.trim()) {
      validationErrors.cPassword = "Confirm Passowrd is required";
    }else if(formValues.password!==formValues.cPassword){
        validationErrors.cPassword="Password does not match"
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!validateForm()) return;
    setIsButtonDisabled(true)

    setTimeout(() => {
        setIsButtonDisabled(false)
        navigate('/verification')
    }, 3000);
    toast.success("A verification code has been sent to your email. Please check your inbox and enter the code below to verify your account.",)
    // add a toast here to notify user that sign up is successful
    // send the verfication code to email
    // then redirect to the verification page
  
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));


    setErrors((prevErrors) => {
      let newErrors = { ...prevErrors };
      if (name === "fullName") {
        const fullNameRegex = /^[A-Za-z\s]+$/;
        if (value.trim() === "") {
          newErrors.fullName = "Full Name is required";
        } else if (!fullNameRegex.test(value)) {
          newErrors.fullName = "Full Name can only contain alphabets";
        } else if (value.length < 3 || value.length > 50) {
          newErrors.fullName = "Full name must be between 3 to 50 characters";
        } else {
          newErrors.fullName = "";
        }
      }

      if (name === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value.trim()) {
          newErrors.email = "Email is required";
        } else if (!emailRegex.test(value.trim())) {
          newErrors.email = "Please enter a valid email address";
        } else {
          newErrors.email = "";
        }
      }
      if (name === "contact") {
        // const contactRegex="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
        const contactRegex = /^[6-9][0-9]{9}$/;
        if (!value.trim()) {
          newErrors.contact = "Contact is required";
        } else if (!contactRegex.test(value.trim())) {
          newErrors.contact = "Please enter a valid contact number";
        } else {
          newErrors.contact = "";
        }
      }
      if (name === "emergencyContact") {
        const contactRegex = /^[6-9][0-9]{9}$/;
        if (!value.trim()) {
          newErrors.emergencyContact = "Emergency Contact is required";
        } else if (!contactRegex.test(value.trim())) {
          newErrors.emergencyContact = "Please enter a valid contact number";
        } else {
          newErrors.emergencyContact = "";
        }
      }
      if (name === "address") {
        if (value.trim() === "") {
          newErrors.address = "Address is required";
        } else if (value.length > 100) {
          newErrors.address =
            "Address must be less than or equal to 100 characters ";
        } else {
          newErrors.address = "";
        }
      }
      if (name === "role") {
        newErrors.role = value.trim() === "" ? "Role is required" : "";
      }
      if (name === "teamName") {
        newErrors.teamName = value.trim() === "" ? "Team Name is required" : "";
      }
      if (name === "designation") {
        newErrors.designation =
          value.trim() === "" ? "Designation is required" : "";
      }
      if (name === "password") {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*]).{8,20}$/;

        if (!value.trim()) {
          newErrors.password = "Password is required";
        } else if (!passwordRegex.test(value.trim())) {
          newErrors.password =
            "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number.";
        } else {
          newErrors.password = "";
        }
      }
      if (name === "cPassword") {
        if(!value.trim()){
            newErrors.cPassword ="Confirm Password is required"
        }else if(formValues.password!==value){
            newErrors.cPassword="Password does not match"
        }else{
            newErrors.cPassword=""
        }
      }

      return newErrors;
    });
  };

  return (
    <div className="signup-page-container">
      <div className="signup-image-div">
        <img src={SignupBg} alt="bg" />
      </div>
      <div className="signup-form-container">
        <div className="signup-form-div">
          <div className="signup-title">
            <h1>Sign Up</h1>
          </div>
          <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="name-email-div">
              <div className="name-div">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  maxLength={50}
                  value={formValues.fullName}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors.fullName && (
                  <p className="error-text">{errors.fullName}</p>
                )}
              </div>
              <div className="email-div">
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  maxLength={100}
                  value={formValues.email}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>
            <div className="contact-div-container">
              <div className="contact-div">
                <input
                  type="text"
                  placeholder="Contact Number"
                  name="contact"
                  maxLength={10}
                  value={formValues.contact}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors.contact && (
                  <p className="error-text">{errors.contact}</p>
                )}
              </div>
              <div className="contact-div">
                <input
                  type="text"
                  placeholder="Emergency Contact Number"
                  name="emergencyContact"
                  maxLength={10}
                  value={formValues.emergencyContact}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors.emergencyContact && (
                  <p className="error-text">{errors.emergencyContact}</p>
                )}
              </div>
            </div>
            <div className="address-div">
              <input
                type="text"
                placeholder="Address"
                name="address"
                maxLength={100}
                value={formValues.address}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.address && <p className="error-text">{errors.address}</p>}
            </div>
            <div className="role-container">
              <div className="role-div">
                <select
                  name="role"
                  id="role"
                  value={formValues.role}
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value="" disabled selected>
                    Role
                  </option>
                  <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
                {errors.role && <p className="error-text">{errors.role}</p>}
              </div>
              <div className="team-div">
                <input
                  type="text"
                  placeholder="Team Name"
                  name="teamName"
                  maxLength={30}
                  value={formValues.teamName}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors.teamName && (
                  <p className="error-text">{errors.teamName}</p>
                )}
              </div>
              <div className="designation-div">
                <input
                  type="text"
                  placeholder="Designation"
                  name="designation"
                  maxLength={30}
                  value={formValues.designation}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors.designation && (
                  <p className="error-text">{errors.designation}</p>
                )}
              </div>
            </div>
            <div className="password-div-container">
              <div className="password-div">
                <input
                  type={passwordType}
                  placeholder="Password"
                  name="password"
                  maxLength={20}
                  value={formValues.password}
                  onChange={(e) => handleInputChange(e)}
                />
                {passwordType === "password" ? (
                  <FaEyeSlash
                    className="eye-icon pass-hidden"
                    onClick={() => setPasswordType("text")}
                  />
                ) : (
                  <FaEye
                    className="eye-icon"
                    onClick={() => setPasswordType("password")}
                  />
                )}
                {errors.password && (
                  <p
                    className={`${
                      errors.password === "Password is required"
                        ? "error-text"
                        : "pass-error-text"
                    }`}
                  >
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="password-div">
                <input
                  type={cPasswordType}
                  placeholder="Confirm Password"
                  name="cPassword"
                  maxLength={20}
                  value={formValues.cPassword}
                  onChange={(e) => handleInputChange(e)}
                />
                {cPasswordType === "password" ? (
                  <FaEyeSlash
                    className="eye-icon pass-hidden"
                    onClick={() => setCPasswordType("text")}
                  />
                ) : (
                  <FaEye
                    className="eye-icon"
                    onClick={() => setCPasswordType("password")}
                  />
                )}
                {errors.cPassword && (
                  <p className="error-text">{errors.cPassword}</p>
                )}
              </div>
            </div>
            <button className={`${isButtonDisabled?"disabled-btn":''}`} disabled={isButtonDisabled?true:false}>{isButtonDisabled?<img className="loading-img" src={loading} alt="loading..."/>:<p>Sign up</p>}</button>
          </form>
          <div className="signup-info-div">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
