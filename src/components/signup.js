import React,{useState,useEffect} from "react";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import ImageCarousel from "./imageCarousel";
import arrowDown from "../assets/icons/arrow-down.svg"
import visible from "./../assets/icons/visible.svg";
import hide from "./../assets/icons/hide.svg";
import { sendOtp,signUp } from "../actions";
import notify from "../helpers/notify";
import * as actionType from "./../helpers/constants";
import "./../assets/css/form.css";

const initialForm={
  full_name:"",
  email:"",
  country_code: "+91",
  mobile_no:"",
  referral_code:"",
  accounting_software_name:"",
  otp:"",
  otp_token:""
}
const SignUp=()=>{
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [showDropdown,setShowDropdown]=useState(false)
  const [resendOtp, setResendOtp] = useState(false);
  const otp_secret=useSelector(state=>state.otp_secret);
  const [form,setForm]=useState(initialForm);
  const accounting_options=["Busy","Marg","Tally","Quick Books","Zoho Books","Others"]
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}

const [redirectTo, setRedirectTo] = useState(null); // State to hold the website URL

useEffect(() => {
  if (redirectTo) {
    window.location.href = redirectTo; // Redirect the user to the specified website
  }
}, [redirectTo]);

const handleSubmit=(e)=>{
  e.preventDefault();
      dispatch(signUp({...form,otp_token:otp_secret},() => {
        // Callback function executed after successful OTP verification
        setRedirectTo('https://msmepayments.netlify.app/'); // Navigate to the dashboard screen
      }));  
}
const handleSendOTP=async()=>{
  if(form.mobile_no.length===10)
  {
     const data=await sendOtp({...form,is_login:false});
     //console.log(data)
     if(data?.success)
     {
       notify("success",`your otp is ${data.data.otp}`);
       dispatch({type:actionType.GET_OTP_SECRET,payload:data.data.otp_token});
       setResendOtp(true);
     }else
     notify("error",data.error.errors.map(item=>item.detail).join(""));
       
   }else{
     notify("error","Enter valid phone number");
   }  
  }


  useEffect(()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      });
},[])
  return (<div className="form-page">
  <form onSubmit={handleSubmit}>
    <div className="form-heading">Register</div>
    <div className="form-title"  style={{marginBottom:'5px'}}>Please fill your details to continue</div>
    <input className="form-page-input top-margin" placeholder="Full Name" name="full_name" value={form.full_name} onChange={handleChange} required/>
    <input type="email" className="form-page-input" placeholder="Email" name="email" value={form.email} onChange={handleChange} required/>
    <div className="phone-box">
        <div className="phone-code">+91</div>
        <input placeholder="Mobile Number" minLength={10} maxLength={10} type="tel" pattern="[0-9]{10}" name="mobile_no" value={form.mobile_no} onChange={handleChange}/>
    </div>
    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
      {!resendOtp && <div style={{color:`${form.mobile_no.length===10 ? '#00EA48':'grey'}`,cursor:'pointer'}} className="form-action" onClick={handleSendOTP}>Send OTP</div>}
      {resendOtp && <div style={{color:'red',cursor:'pointer'}} className="form-action" onClick={handleSendOTP}>Resend OTP</div>}
    </div>
    <input className="form-page-input" placeholder="OTP" name="otp" value={form.otp}  onChange={handleChange} required/>
    <input className="form-page-input" placeholder="Referral code (optional)" name="referral_code" value={form.referral_code} onChange={handleChange}/>
    <div className="form-page-dropdown" >
      <div onClick={()=>setShowDropdown(p=>!p)} className="form-page-dropdown-input">
      <div className="dropdown-input">{form.accounting_software_name.length==0?<span style={{color:"#808285"}}>Accounting software name (optional)</span>:form.accounting_software_name}</div>
      <img src={arrowDown} alt="arrow_down"/>
      </div>
      {showDropdown &&
      <div className="form-page-dropdown-list">
        {accounting_options.map(item=><div className="form-page-dropdown-item" onClick={()=>{setForm({...form,accounting_software_name:item});setShowDropdown(false)}}>{item}</div>)}
      </div>
     }
    </div>
    <div className="check-box-block">
        <input type="checkbox" style={{marginRight:'5px'}} required/>
        <div className="checkbox-text">I accept <Link to="/terms-and-conditions">Terms and Conditions</Link> and <Link to="/privacy-policy">Privacy Policy</Link>  </div>
    </div>
    <button type="submit" className="form-page-button">Register</button>
  </form>
  <ImageCarousel/>
  </div>)
}
export default SignUp;