import React, { useEffect, useState } from "react";
import "./ForgotPassword.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from "../../assets/signup-bg.jpg";
import Bg3 from "../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg";
import Bg4 from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import { useNavigate } from "react-router";
import HrVerify from "../HrVerify/HrVerify";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import loading from "../../assets/Rolling@1x-1.0s-200px-200px.gif";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
  });

  const [isbuttonLoading, setIsButtonLoading] = useState(null);

  const handleSubmit = async (e) => {
    setIsButtonLoading(true)
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5070/hrms/auth/forgot-password",
        {
          email: formValues.email,
        }
      );
      if (response.data.success) {
        const otpToken = response.data.data.otpToken;
        localStorage.setItem("otpToken", otpToken);
        toast.success(response.data.message);
        navigate('/otp')
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong.");
      } else if (error.request) {
        toast.error("No response from the server. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Error:", error);
    }finally{
      setIsButtonLoading(false)
    }
  };
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="forgot-pass-page-container">
      <div className="for-pass-image-div">
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
      <div className="for-pass-form-container">
        <div className="for-pass-form-div">
          <div className="for-pass-logo-div">
            <img src={CompanyLogo} alt="42 Works" />
          </div>
          <div className="for-pass-title">
            <h1>Forgot Password?</h1>
          </div>
          <div className="for-pass-description">
            <h1>Enter your email to receive a password reset link</h1>
          </div>
          <form className="for-pass-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="for-pass-email-div">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <button
              className={`${
                isbuttonLoading ? "disabled-btn" : ""
              } confirm-btn `}
            >
              {" "}
              {isbuttonLoading ? (
                <img className="loading-image" src={loading} alt="loading..." />
              ) : (
                <p>Send </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
