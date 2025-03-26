import React, { useEffect, useRef, useState } from "react";
import "./EmailVerify.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from '../../assets/signup-bg.jpg'
import Bg3 from '../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg'
import Bg4 from '../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg'
import { useNavigate } from "react-router";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const EmailVerify = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);
  const navigate=useNavigate()
    const [currentImage, setCurrentImage] = useState(0);
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


    const handleSubmit=(e)=>{
      e.preventDefault()
      // console.log(otp.join().replaceAll(",",""))

      // add the toast here to notify user that verification is successful
    
    }
      // useEffect(() => {
      //   const interval = setInterval(() => {
      //     setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      //   }, 3000);
      //   return () => clearInterval(interval);
      // }, []);

  return (
    <div className="verify-page-container">
      <div className="verify-image-div">
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
      <div className="verify-form-container">
        <div className="verify-form-div">
          <div className="otp-logo-div">
                      <img src={CompanyLogo} alt="42 Works" />
                    </div>
          <div className="verify-title">
            <h1>Verify Your Account </h1>
          </div>
          <div className="verify-description">
            <h1>A verification code has been sent to your email. Please check your inbox and enter the code below to verify your account</h1>
          </div>
          <form className="verify-form" onSubmit={(e) => handleSubmit(e)}>
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
            <div className="verify-otp-div">
              Didn't receive?<span>Resend</span>{" "}
            </div>
            <button onClick={()=>navigate('/employee-dashboard')}>Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
