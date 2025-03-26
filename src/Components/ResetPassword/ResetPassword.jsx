import React, { useEffect, useState } from "react";
import "./ResetPassword.css";
import "../../App.css";
import "../../index.css";
import Bg2 from "../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg";
import Bg1 from "../../assets/signup-bg.jpg";
import Bg3 from "../../assets/krakenimages-Y5bvRlcCx8k-unsplash.jpg";
import Bg4 from "../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import { useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import CompanyLogo from "../../assets/svg-image-1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import loading from "../../assets/Rolling@1x-1.0s-200px-200px.gif";
const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");

  const [cPasswordType, setCPasswordType] = useState("password");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    password: "",
    cPassword: "",
  });
  const [isbuttonLoading, setIsButtonLoading] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const submitData = async (data) => {
    console.log(data);
    setIsButtonLoading(true)
    try {
      const resetToken = localStorage.getItem("resetToken");
      if (!resetToken) {
        toast.error(
          "Reset token not found. Please request a new password reset."
        );
        return;
      }
      const response = await axios.post(
        "http://localhost:5070/hrms/auth/resetPassword",
        {
          resetToken: resetToken,
          newPassword: data.password,
          confirmPassword: data.cPassword,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        console.log("Password Reset Successful:", response.data);
        localStorage.removeItem("resetToken");
        navigate('/')
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Password reset failed.");
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

  return (
    <div className="reset-pass-page-container">
      <div className="reset-pass-image-div">
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
                      ) ||
                      "Password must be atleast 8 characters long and must contain at least one uppercase letter, one lowercase letter, and one special character or number",
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
                <small className="errors-text">
                  {errors.cPassword.message}
                </small>
              )}
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
                <p>Reset password </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
