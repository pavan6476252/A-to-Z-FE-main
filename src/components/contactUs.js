import React,{useState} from "react";
import { useDispatch} from "react-redux";
import ImageCarousel from "./imageCarousel";
import call from "./../assets/icons/call.svg"
import inbox from "./../assets/icons/inbox.svg";
import "./../assets/css/form.css";
import {contact} from "./../actions"
const initialForm={
  full_name:"",
  email:"",
  mobile_no:"",
  message:""
}
const ContactUs=()=>{
  const dispatch=useDispatch();
  const [contactForm,setContactForm]=useState(initialForm);
  const handleChange=(e)=>{
    setContactForm({...contactForm,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault();
   //console.log(contactForm);
       dispatch(contact(contactForm));
      setContactForm(initialForm);
    
}
  return (<div className="form-page">
  <form onSubmit={handleSubmit}>
    <div className="form-heading">Contact Us</div>
    <div className="form-title">A-Z Infotech </div>
    <div className="form-title">A-12, Sector-4, NOIDA - 201301</div>
    <div className="form-title"  style={{marginBottom:'5px'}}>(Delhi-NCR) India</div>
    <div className="contact" style={{marginBottom:'5px'}}>
        <img src={inbox} alt=""/>
        <span>azinfotech@gmail.com</span>
    </div>
    <div className="contact"  style={{marginBottom:'30px'}}>
        <img src={call} alt=""/>
        <span>1234567890</span>
    </div>
    <input className="form-page-input" placeholder="Full Name" name="full_name" value={contactForm.full_name} onChange={handleChange} required/>
    <input type="email" className="form-page-input" placeholder="Email" name="email" value={contactForm.email} onChange={handleChange} required/>
    <div className="phone-box">
        <div className="phone-code">+91</div>
        <input placeholder="Mobile Number" name="mobile_no" value={contactForm.mobile_no} minLength={10} maxLength={10} type="tel" pattern="[0-9]{10}" onChange={handleChange} required/>
    </div>
    <textarea style={{height:'100px'}} className="form-page-input" placeholder="Your message" name="message" value={contactForm.message} onChange={handleChange} required></textarea>
    <button type="submit" className="form-page-button">Continue</button>
  </form>
  <ImageCarousel/>
  </div>)
}
export default ContactUs;