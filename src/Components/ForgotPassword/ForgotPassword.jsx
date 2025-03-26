import React, { useEffect, useState } from "react";
import "./ForgotPassword.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from '../../assets/signup-bg.jpg'
import Bg3 from '../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg'
import Bg4 from '../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg'
import { useNavigate } from "react-router";
import HrVerify from "../HrVerify/HrVerify";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  
  const [currentImage, setCurrentImage] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);
  return (
    <div className="forgot-pass-page-container">
      <div className="for-pass-image-div">
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
            
            <button onClick={()=>navigate('/otp')}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
