import React from "react";
import ImageCarousel from "./imageCarousel";
import "./../assets/css/form.css";
const ResendOtp=()=>{
  return (<div className="form-page">
  <form className="form-login">
  <div className="form-heading">Welcome</div>
    <div className="form-title"  style={{marginBottom:'5px'}}>Please fill your details to login</div>
    <div className="phone-box top-margin" >
        <div className="phone-code">+91</div>
        <input placeholder="Mobile Number"></input>
    </div>
    <input className="form-page-input" placeholder="OTP"/>
    <button className="form-page-button">Resend OTP</button>
  </form>
  <ImageCarousel/>
  </div>)
}
export default ResendOtp;