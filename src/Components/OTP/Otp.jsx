import React, { useEffect, useRef, useState } from "react";
import "./Otp.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from "../../assets/signup-bg.jpg";
import Bg3 from "../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg";
import Bg4 from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import { useNavigate } from "react-router";
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
const Otp = ({ length = 6 }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);
  const [isbuttonLoading, setIsButtonLoading] = useState(null);

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      } else if (value === "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }

    // Move focus to previous input on backspace
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index] !== "") {
        // Clear the current input
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move focus to previous input and clear it
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    setIsButtonLoading(true)
    e.preventDefault();
    try {
      const formattedOtp = Number(otp.toString().replaceAll(",", ""));
      const otpToken = localStorage.getItem("otpToken");
      if (!otpToken) {
        toast.error("OTP token not found. Please request a new OTP.");
        return;
      }
      const response = await axios.post(
        "http://localhost:5070/hrms/auth/verifyOTP",
        {
          otpToken: otpToken,
          otp: formattedOtp,
        }
      );
      if (response.data.success) {
        localStorage.setItem("resetToken", response.data.data.resetToken);
        localStorage.removeItem("otpToken");
        toast.success(response.data.message);
        navigate('/reset-password')

      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Verification failed.");
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

  const handleResendOtp=async()=>{
    try {
      const otpToken= localStorage.getItem("otpToken")
      if (!otpToken) {
        toast.error("OTP token not found. Please request a new OTP.");
        return;
      }
      const response =await axios.post("http://localhost:5070/hrms/auth/resendOTP",{
        otpToken:otpToken
      })
      if (response.data.success) {
        toast.success(response.data.message);
        console.log("OTP Resent Successfully:", response.data);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Failed to resend OTP.");
      } else if (error.request) {
        toast.error("No response from the server. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Error Resending OTP:", error);
    }
  }

  return (
    <div className="otp-page-container">
      <div className="otp-image-div">
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
      <div className="otp-form-container">
        <div className="otp-form-div">
          <div className="otp-logo-div">
            <img src={CompanyLogo} alt="42 Works" />
          </div>
          <div className="otp-title">
            <h1>One Time Password</h1>
          </div>
          <div className="otp-description">
            <h1>Enter the OTP sent to your email to reset your password</h1>
          </div>
          <form className="otp-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="otp-div">
              <div className="verify-email-div">
                {otp.map((_, index) => (
                  <input
                    key={index}
                    className="verify-box-input"
                    type="text"
                    maxLength="1"
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                  />
                ))}
              </div>
            </div>
            <div className="resend-otp-div">
              Didn't receive?<span onClick={()=>handleResendOtp()}>Resend</span>{" "}
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
                <p>Verify OTP </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
