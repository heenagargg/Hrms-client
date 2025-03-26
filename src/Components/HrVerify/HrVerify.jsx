import React from 'react'
import './HrVerify.css'
import "../../App.css";
import "../../index.css";
import loader from '../../assets/Dual Ball@1x-1.0s-200px-200px.svg'
const HrVerify = () => {
  return (
    <div className='hr-verify-container'>
        <div className="hr-verify-div">
            <div className='loading-div'>
            <img src={loader} alt="loading..." />
            </div>
            {/* <p>Your role as HR is under verification. Please wait until the process is complete.</p> */}
            <p>Your role as  HR is not verified yet. Please contact the concerned authority for approval and try logging in after some time.</p>
        </div>
    </div>
  )
}

export default HrVerify