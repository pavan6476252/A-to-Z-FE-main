import * as actionType from "./../helpers/constants";
import notify from "../helpers/notify";

const API=actionType.API;

export const getHome=()=>async(dispatch)=>{
  try{ 
          await fetch(`${API}/api/home/home-top-slides/`)
          .then((res) => res.json())
          .then(
            (data) => {
              //console.log(data.data);
              dispatch({type:actionType.GET_HOME_CAROUSEL_1,payload:data.data})
            },
            (error) => {

              console.log(error);
            }
          );
          await fetch(`${API}/api/home/home-bottom-slides/`)
          .then((res) => res.json())
          .then(
            (data) => {
             //console.log(data.data)
              dispatch({type:actionType.GET_HOME_CAROUSEL_2,payload:data.data})
            },
            (error) => {
    
              console.log(error);
            }
          );
          await fetch(`${API}/api/home/home-cards/`)
          .then((res) => res.json())
          .then(
            (data) => {
             
              dispatch({type:actionType.GET_CARDS,payload:data.data})
            },
            (error) => {
    
              console.log(error);
            }
          );
          await fetch(`${API}/api/home/testimonials/`)
          .then((res) => res.json())
          .then(
            (data) => {
              //console.log(data.data.results);
              dispatch({type:actionType.GET_TESTIMONIALS,payload:data.data})
            },
            (error) => {
    
              console.log(error);
            }
          );
          
  }catch(error)
  {
    console.log(error);
  }
}
export const getBillDiscounting= ()=>async(dispatch)=>{
  try{
    await fetch(`${API}/api/home/bill-discounting-cards/`)
    .then((res) => res.json())
    .then(
      (data) => {
        //console.log(data);
        dispatch({type:actionType.GET_BILL_DISCOUNTING,payload:data.data})
      },
      (error) => {

        console.log(error);
      }
    );
  }catch(error)
  {
    console.log(error)
  }
}
export const getMoneyRecovery= ()=>async(dispatch)=>{
  try{
    await fetch(`${API}/api/home/money-recovery-tool-cards/`)
    .then((res) => res.json())
    .then(
      (data) => {
        //console.log(data);
        dispatch({type:actionType.GET_MONEY_RECOVERY,payload:data.data})
      },
      (error) => {

        console.log(error);
      }
    );
  }catch(error)
  {
    console.log(error)
  }
}
export const getInvoice= ()=>async(dispatch)=>{
  try{
    await fetch(`${API}/api/home/e-invoicing-cards/`)
    .then((res) => res.json())
    .then(
      (data) => {
        //console.log(data.data);
        dispatch({type:actionType.GET_INVOICE,payload:data.data})
      },
      (error) => {

        console.log(error);
      }
    );
  }catch(error)
  {
    console.log(error)
  }
}
export const getAbout= ()=>async(dispatch)=>{
  try{
    await fetch(`${API}/api/home/about-us-cards/`)
    .then((res) => res.json())
    .then(
      (data) => {
        //console.log(data);
        dispatch({type:actionType.GET_ABOUT,payload:data.data})
      },
      (error) => {

        console.log(error);
      }
    );
  }catch(error)
  {
    console.log(error)
  }
}
export const getFaq= (value)=>async(dispatch)=>{
  try{
    await fetch(`${API}/api/faqs/?is_homepage=${value}`)
    .then((res) => res.json())
    .then(
      (data) => {
        //console.log(data.data);
        dispatch({type:actionType.GET_FAQS,payload:data.data})
      },
      (error) => {

        console.log(error);
      }
    );
   
  }catch(error)
  {
    console.log(error)
  }
}
async function postData(url = '', data={}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
export const contact=(formdata)=>async(dispatch)=>{
  try{
    postData(`${API}/api/contact-us/`, formdata)
    .then((data) => {
      //console.log(data);
      if(data.success)
       notify("success","contact form submitted");
      else
       notify("error","errors occurred,try again")
    });
  }catch(error){
    console.log(error);
  }
}
export const signUp=(formdata,navigate)=>async(dispatch)=>{
  try{
    //console.log(formdata)
    postData(`${API}/api/accounts/users/`, formdata)
    .then((data) => {
      //console.log(data);
      if(data.success)
       {notify("success","sign up successful");
        navigate("/");
       }
      else
       notify("error",data.error.errors.map(item=>item.detail).join(""))
    });
  }catch(error){
    console.log(error);
  }
}
export const sendOtp=async(formdata)=>{
  let d=null;
  //console.log(formdata)
  try{
    //console.log(formdata)
    await postData(`${API}/api/accounts/users/send-otp/`, formdata)
    .then((data) => {
      //console.log("back",data);
      d=data;
      // if(data.success)
      //  {notify("success",`your otp is ${data.data.otp}`);
      
      //    dispatch({type:actionType.GET_OTP_SECRET,payload:data.data.otp_token});
         
      //   }
      // else
      // {notify("error",data.error.errors.map(item=>item.detail).join(""));
      // dispatch({type:actionType.GET_OTP_SECRET,payload:null});
     
      //  }
    });

  }catch(error){
    console.log(error);
    
  }
  return d
}
export const verifyOtp=(formdata,navigate)=>async(dispatch)=>{
  try{
    postData(`${API}/api/accounts/users/verify-otp/`, formdata)
    .then((data) => {
      //console.log(data);
      if(data.success)
       {notify("success","Login successful");
      navigate("/")
    }
      else
      notify("error",data.error.errors.map(item=>item.detail).join(""))
    });
  }catch(error){
    console.log(error);
  }
}
export const refreshOtp=(formdata)=>async(dispatch)=>{
  try{
    postData(`${API}/api/accounts/users/refresh-otp`, formdata)
    .then((data) => {
      console.log(data);
      if(data.success)
       notify("success","sign up successful");
      else
       notify("error","errors occurred,try again")
    });
  }catch(error){
    console.log(error);
  }
}