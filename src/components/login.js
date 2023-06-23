import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import ImageCarousel from "./imageCarousel";
import arrowLeft from "../assets/icons/arrow-left.svg";
import notify from "../helpers/notify";
import "./../assets/css/form.css";
import { sendOtp, verifyOtp } from "../actions";
import * as actionType from "./../helpers/constants"
const initialForm = {
  country_code: "+91",
  mobile_no: "",
  otp: "",
  otp_token: ""
}
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOtp, setShowOtp] = useState(false);
  const [checkTerms, setCheckTerms] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [seconds, setSeconds] = useState(0);
  const otp_secret = useSelector(state => state.otp_secret);
  const startTimer = () => {
    setSeconds(30);
    setInterval(() => {
      if (seconds > -1)
        setSeconds(seconds => { return seconds - 1; })
    }, 1000)
  }

  const handleChange = (e) => {
    // console.log("in")
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (form.mobile_no.length === 10 && /[0-9]{10}/i.test(form.mobile_no) && checkTerms) {
      //console.log("out",otp_secret)
      const data = await sendOtp({ country_code: form.country_code, mobile_no: form.mobile_no, is_login: true });
      //console.log(data)
      if (data?.success) {
        notify("success", `your otp is ${data.data.otp}`);
        dispatch({ type: actionType.GET_OTP_SECRET, payload: data.data.otp_token });
        setShowOtp(true);
        startTimer();
      } else
        notify("error", data.error.errors.map(item => item.detail).join(""));

    } else {
      notify("error", "Enter valid phone number and check terms");
    }
  }
  
  const [redirectTo, setRedirectTo] = useState(null); // State to hold the website URL

  useEffect(() => {
    if (redirectTo) {
      window.location.href = redirectTo; // Redirect the user to the specified website
    }
  }, [redirectTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(form)
    dispatch(verifyOtp({ ...form, otp_token: otp_secret }, () => {
      // Callback function executed after successful OTP verification
      setRedirectTo('https://msmepayments.netlify.app/'); // Navigate to the dashboard screen
    }));

  }
  // if(otp_secret)
  // {
  //   console.log("in",otp_secret)
  //   setShowOtp(true)
  // startTimer();
  // }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])
  return (<div className="form-page">
    {showOtp ? <form onSubmit={handleSubmit} className="form-login">
      <img src={arrowLeft} alt="" style={{ height: "16px", position: 'absolute', top: '25px', left: '35px', cursor: 'pointer' }} onClick={() => setShowOtp(false)} />
      <div className="form-heading">Verification</div>
      <div className="form-title" style={{ marginBottom: '5px' }}>Please  enter OTP sent to your number</div>
      <input className="form-page-input top-margin" placeholder="OTP" name="otp" onChange={handleChange} value={form.otp} />
      {seconds >= 0 && <div className="form-action" style={{ color: ' #808285' }}>Resend code in {seconds} seconds</div>}
      {seconds < 0 && <div style={{ color: '#00EA48', cursor: 'pointer' }} className="form-action" onClick={handleSendOTP}>Resend OTP</div>}
      <button type="submit" className="form-page-button" style={{ color: `${(form.otp !== "") ? "#00EA48" : 'grey'}`, border: `1.8px solid ${(form.otp !== '') ? "#00EA48" : 'grey'}` }} disabled={form.otp === ''}>Continue</button>
    </form> : <form className="form-login">
      <div className="form-heading">Welcome</div>
      <div className="form-title" style={{ marginBottom: '5px' }}>Please enter your mobile number to continue</div>
      <div className="phone-box top-margin">
        <div className="phone-code">+91</div>
        <input placeholder="Mobile Number" minLength={10} maxLength={10} type="tel" pattern="[0-9]{10}" name="mobile_no" onChange={handleChange} value={form.mobile_no} />
      </div>
      <div className="check-box-block">
        <input type="checkbox" style={{ marginRight: '5px' }} onChange={(e) => setCheckTerms(e.target.checked)} />
        <div className="checkbox-text">I accept <Link to="/terms-and-conditions">Terms and Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link>  </div>
      </div>
      <button className="form-page-button" style={{ color: `${(form.mobile_no.length === 10 && checkTerms) ? "#00EA48" : 'grey'}`, border: `1.8px solid ${(form.mobile_no.length === 10 && checkTerms) ? "#00EA48" : 'grey'}` }} onClick={handleSendOTP} disabled={form.mobile_no.length !== 10 || !checkTerms}>Continue</button>
    </form>}
    <ImageCarousel />
  </div>)
}
export default Login;