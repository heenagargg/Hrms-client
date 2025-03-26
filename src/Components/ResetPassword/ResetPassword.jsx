import React, { useEffect, useState } from "react";
import "./ResetPassword.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from '../../assets/signup-bg.jpg'
import Bg3 from '../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg'
import Bg4 from '../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg'
import { useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useForm } from "react-hook-form";
const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");

  const [cPasswordType, setCPasswordType] = useState("password");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    password: "",
    cPassword: "",
  });

  const [currentImage, setCurrentImage] = useState(0);
      const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm({ mode: "all" });

  const submitData=(data)=>{
        console.log(data)
      
       }

  const validateForm=()=>{
    let validationErrors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/;
    if (!formValues.password.trim()) {
        validationErrors.password = "New Password is required";
      } else if (!passwordRegex.test(formValues.password)) {
        validationErrors.password =
          "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number";
      } else if (formValues.password.length < 8) {
        validationErrors.password =
          "Password must be between 8 and 20 characters";
      }
      if (!formValues.cPassword.trim()) {
        validationErrors.cPassword = "Confirm New Passowrd is required";
      }else if(formValues.password!==formValues.cPassword){
          validationErrors.cPassword="Password does not match"
      }
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   validateForm()

  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prevErrors)=>{
        let newErrors = { ...prevErrors };
        
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
    })
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);
  return (
    <div className="reset-pass-page-container">
      <div className="reset-pass-image-div">
        {/* <div className="slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentImage ? "active" : ""}`}
            />
          ))}
  
          <div className="dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? "active-dot" : ""}`}
              ></span>
            ))}
          </div>
        </div> */}
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
                <SwiperSlide><img src={Bg1} alt="42Works"/></SwiperSlide>
                       <SwiperSlide><img src={Bg2} alt="42Works"/></SwiperSlide>
                       <SwiperSlide><img src={Bg3} alt="42Works"/></SwiperSlide>
                       <SwiperSlide><img src={Bg4} alt="42Works"/></SwiperSlide>
              </Swiper>
      </div>
      <div className="reset-pass-form-container">
        <div className="reset-pass-form-div">
          <div className="reset-pass-logo-div">
            <img src={CompanyLogo} alt="42 Works" />
          </div>
          <div className="reset-pass-title">
            <h1>Reset Password</h1>
          </div>
          <div className="reset-pass-description">
            <h1>Create a new password for your account</h1>
          </div>
          <form className="reset-pass-form" onSubmit={handleSubmit(submitData)}>
            <div className="reset-password-div">
              <input
                type={passwordType}
                placeholder="Enter New Password"
                name="password"
                maxLength={20}
                // value={formValues.password}
                // onChange={(e) => handleInputChange(e)}
                {...register("password", {
                  required: {
                    value: true,
                    message: "New Password is required",
                  },
                  validate: {
                    matchPattern: (v) =>
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&.*]).{8,20}$/.test(
                        v
                      ) || "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number",
                  },
            
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
                    errors.password.message === "New Password is required"
                      ? "errors-text"
                      : "pass-errors-text"
                  }`}
                  >
                    {errors.password.message}
                  </small>
                )}
            </div>
            <div className="reset-password-div">
              <input
                type={cPasswordType}
                placeholder="Confirm New Password"
                name="cPassword"
                maxLength={20}
                // value={formValues.cPassword}
                // onChange={(e) => handleInputChange(e)}
                {...register("cPassword", {
                  required: {
                    value: true,
                    message: "Please confirm your password",
                  },
                  validate: (value) =>
                    value === getValues("password") ||
                    "Password does not match",
                })}
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
               {errors?.cPassword && (
                  <small
               className="errors-text"
                  >
                    {errors.cPassword.message}
                  </small>
                )}
            
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
