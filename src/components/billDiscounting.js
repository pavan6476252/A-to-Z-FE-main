import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import refresh from "./../assets/icons/refresh.svg";
import validation from "./../assets/icons/validation.svg";
import connection from "./../assets/icons/connection.svg";
import {getBillDiscounting} from "./../actions";
import { renderParagraph } from "../helpers/utils";


const BillDiscounting =()=>{
    const dispatch=useDispatch();
    const billData=useSelector(state=>state.bill_discounting);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          });
        dispatch(getBillDiscounting());
    },[dispatch])
    
return(
    <div>
         <div className="banner">
            <div className="banner-content">
                <div className="heading-main" style={{padding:'0 40px',marginBottom:'10px'}}>Expand your business daily
</div>
<div className="content" style={{textAlign:'center'}}>An instant loan to help you to boost your business growth.</div>
<Link to="/sign-up"><button className="banner-btn">Apply now</button></Link>
            </div>
            <div className="home-straps">
            <div className="home-straps-content">
            <div className="home-strap">Paperless Process</div>
            <div className="home-strap">Collateral Free Discounting</div>
            <div className="home-strap">Avoid New Debts</div>
            </div>
            <div className="home-straps-content-small">
              <Carousel>
                <Carousel.Item>
                <div className="home-strap">Paperless Process</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Collateral Free Discounting</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Avoid New Debts</div>
                </Carousel.Item>
              </Carousel>
            </div>
         </div>
        </div>
        {billData && <>
            <div className=" img-right-text-box">
            <div className="content-box">
                <div className="heading-main">{billData[0].title}</div>
                <div className="content">
                    {billData[0].description1 && <p>{renderParagraph('bill',0,billData[0].description1)}</p>}
                    {billData[0].description2 && <p>{renderParagraph('bill',0,billData[0].description2)}</p>}
                    
                    <Link to="/sign-up"><button className="banner-btn">Apply Now</button></Link>

                </div>
           </div>
            <div className="image-box">
               <img src={billData[0].image} alt=""/>
            </div>
        </div>
        <div className="invoice-data  ">
        <div className="heading-main">
        Your payment recovery will<br/> be as it is as you want
        </div>
        <div className="invoice-content">
            
            <div className="invoice-item">
                <img src={connection} alt=""/>
                <div className="title-pink">Collateral-Free Instant Loan</div>
                <div className="content">Get instant paid for your unpaid
invoice & avoid the risk of
assets.</div>
            </div>
            <div className="invoice-item">
                <img src={validation} alt=""/>
                <div className="title-pink">Improved Cash Flow</div>
                <div className="content">Release your working
capital and get paid within
24-72 hours of selling an
invoice.</div>
            </div>
            <div className="invoice-item">
                <img src={refresh} alt=""/>
                <div className="title-pink">Paperless Easy Process</div>
                <div className="content">The easy and transparent
process ensures quick access
to loans.</div>
            </div>
        </div>
        </div>
        <div  style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className=" img-left-text-box">
        <div className="image-box">
               <img src={billData[1].image} alt=""/>
            </div>
            <div className="content-box">
               <div className="title-pink">
              {billData[1].title}
               </div>
                <div className="content">
                    {billData[1].description1 && <p>{renderParagraph('bill',1,billData[1].description1)}</p>}
                    {billData[1].description2 && <p>{renderParagraph('bill',1,billData[1].description2)}</p>}
                
<Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>


                </div>
           </div> 
            
        </div>
        </div>
        
        <div className=" img-right-text-box">
        <div className="content-box">
                <div className="heading-main">{billData[2].title}</div>
                <div className="content">
              {billData[2].description1 && <p>{renderParagraph('bill',2,billData[2].description1)}</p>}
              {billData[2].description2 && <p>{renderParagraph('bill',2,billData[2].description2)}</p>}
              
<Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>


                </div>
            </div>
            <div className="image-box">
               <img src={billData[2].image} alt=""/>
            </div>
        
        </div>
        <div style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className=" img-left-text-box" >
        <div className="image-box">
               <img src={billData[3].image} alt=""/>
            </div>
            <div className="content-box">
               <div className="heading-main">
               {billData[3].title}
               </div>
                <div className="content">
                    {billData[3].description1 && <p>{renderParagraph('bill',3,billData[3].description1)}</p>}
                    {billData[3].description2 && <p>{renderParagraph('bill',3,billData[3].description2)}</p>}
                    
                    <Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>


                </div>
           </div>
            
        </div>
        </div>
        
        <div className=" img-right-text-box">
        <div className="content-box">
                <div className="title-pink">{billData[4].title}</div>
                <div className="content">
                    {billData[4].description1 && <p>{renderParagraph('bill',4,billData[4].description1)}</p>}
                    {billData[4].description2 && <p>{renderParagraph('bill',4,billData[4].description2)}</p>}
               <Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>


                </div>
           </div>
            <div className="image-box">
               <img src={billData[4].image} alt=""/>
            </div>
        </div>
        </>}
       
    </div>
)
}
export default BillDiscounting;