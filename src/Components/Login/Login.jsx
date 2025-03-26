import React, { useEffect, useState } from "react";
import "./Login.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from "../../assets/signup-bg.jpg";
import Bg3 from "../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg";
import Bg4 from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import HrVerify from "../HrVerify/HrVerify";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { toast } from "react-toastify";
import loading from "../../assets/Rolling@1x-1.0s-200px-200px.gif";
const Login = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [currentImage, setCurrentImage] = useState(0);
  const [userData,setUserData]=useState()
   const [isbuttonLoading, setIsButtonLoading] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const submitData = async(data) => {
    console.log(data);
    setIsButtonLoading(true)
    try {
      const response=await axios.post("http://localhost:5070/hrms/auth/login",{
        email:data.email,
        password:data.password
      })
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("authToken", response.data.data.token);
        localStorage.setItem("user", JSON.stringify({
          fullName: response.data.data.fullName,
          role: response.data.data.role,
          teamName: response.data.data.teamName,
          designation: response.data.data.designation,
        }));
        setUserData(response.data.data); 
        if(response.data.data.role==="Employee"){
          navigate('/employee-dashboard')
        }
        if(response.data.data.role==="Manager"){
          navigate('/employee-dashboard')
        }
        if(response.data.data.role==="HR"){
          navigate("/hr-dashboard")
        }
        // navigate("/dashboard"); 
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        toast.error(error.response.data.message || "Login failed. Please try again.");
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }finally{
      setIsButtonLoading(false)
    }

  };
  return (
    <div className="login-page-container">
      <div className="login-image-div">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Bg1} alt="42Works" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bg2} alt="42Works" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bg3} alt="42Works" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bg4} alt="42Works" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="login-form-container">
        <div className="login-form-div">
          <div className="login-logo-div">
            <img src={CompanyLogo} alt="42 Works" />
          </div>
          <div className="login-title">
            <h1>Welcome to the hrm portal</h1>
          </div>
          <div className="login-description">
            <h1>Sign in with your credentials to access the HRMS portal</h1>
          </div>
          <form className="login-form" onSubmit={handleSubmit(submitData)}>
            <div className="login-email-div">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                maxLength={100}
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
            <div className="login-password-div">
              <input
                type={passwordType}
                placeholder="Password"
                name="password"
                maxLength={20}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  // validate: {
                  //   matchPattern: (v) =>
                  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/.test(
                  //       v
                  //     ) ||
                  //     "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number",
                  // },
                })}
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
              {errors?.password && (
                <small
                  className={`${
                    errors.password.message === "Password is required"
                      ? "errors-text"
                      : "pass-errors-text"
                  }`}
                >
                  {errors.password.message}
                </small>
              )}
            </div>
            <div className="remember-container">
              <div className="remember-div">
                <input type="radio" />
                <span>Remember me</span>
              </div>
              <div
                className="forgot-pass-div"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </div>
            </div>
            <button   className={`${
                isbuttonLoading ? "disabled-btn" : ""
              } confirm-btn `}>  {isbuttonLoading ? (
                            <img className="loading-image" src={loading} alt="loading..." />
                          ) : (
                            <p>Login </p>
                          )}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
