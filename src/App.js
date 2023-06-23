import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './assets/css/App.css';
import {Header,Footer,Home,About,Invoicing,MoneyRecovery,BillDiscounting,TermsAndConditions,PrivacyPolicy,Faq,ContactUs,SignUp,Login,ResendOtp} from "./components"
const App=()=> {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer />
      <Routes>
        <Route path="/e-invoicing" element={<><Invoicing/><Footer/></>}/>
        <Route path="/money-recovery" element={<><MoneyRecovery/><Footer/></>}/>
        <Route path="/bill-discounting" element={<><BillDiscounting/><Footer/></>}/>
        <Route path="/about" element={<><About/><Footer/></>}/>
        <Route path="/terms-and-conditions" element={<><TermsAndConditions/><Footer/></>}/>
        <Route path="/privacy-policy" element={<><PrivacyPolicy/><Footer/></>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/resend-otp" element={<ResendOtp/>}/>
        <Route path="/faq" element={<><Faq/><Footer/></>}/>
        <Route path="/" element={<><Home/><Footer/></>}/>
        
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;