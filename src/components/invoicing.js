import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import refresh from "./../assets/icons/refresh.svg";
import validation from "./../assets/icons/validation.svg";
import connection from "./../assets/icons/connection.svg";
import {getInvoice} from "./../actions";
import { renderParagraph } from "../helpers/utils";

const Invoicing =()=>{
    const dispatch=useDispatch();
    const invoiceData=useSelector(state=>state.invoice);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          });
       dispatch(getInvoice());
    },[dispatch])
return(
    <div>
         <div className="banner">
            <div className="banner-content">
                <div className="heading-main" style={{padding:'0 55px',marginBottom:'10px'}}>E-invoicing & accounting easily fastly and accurately

</div>
<div className="content" style={{textAlign:'center'}}>Inch perfect E-Invoicing & Accounting to help you to become streamlined and efficient.</div>
<Link to="/sign-up"><button className="banner-btn">Sign Up Now For Free</button></Link>

            </div>
            <div className="home-straps">
            <div className="home-straps-content">
            <div className="home-strap">Authenticated E-Invoices</div>
            <div className="home-strap">E-invoices Under GST</div>
            <div className="home-strap">Recurring E-Invoices</div>
            </div>
            <div className="home-straps-content-small">
              <Carousel>
                <Carousel.Item>
                <div className="home-strap">Authenticated E-Invoices</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">E-invoices Under GST</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Recurring E-Invoices</div>
                </Carousel.Item>
              </Carousel>
            </div>
         </div>
        </div>
       {invoiceData && <>
        <div className=" img-right-text-box">
            <div className="content-box">
                <div className="heading-main">{invoiceData[0].title}</div>
                <div className="content">
                    {invoiceData[0].description1 && <p> {renderParagraph('invoice',0,invoiceData[0].description1)}</p>}
                    {invoiceData[0].description2 && <p> {renderParagraph('invoice',0,invoiceData[0].description2)}</p>}
<Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>

                </div>
            </div>
            <div className="image-box">
               <img src={invoiceData[0].image} alt=""/>
            </div>
        
        </div> 
        <div className="invoice-data  ">
        <div className="heading-main">
        Your financial functioning will<br/> be as it is as you want
        </div>
        <div className="invoice-content">
            <div className="invoice-item">
                <img src={validation} alt=""/>
                <div className="title-pink">Sharp Validation</div>
                <div className="content">Identify violations, correct data entry and missing required field</div>
            </div>
            <div className="invoice-item">
                <img src={refresh} alt=""/>
                <div className="title-pink">Recurring Invoices</div>
                <div className="content">Auto charge your customers by
setting in recurring mode</div>
            </div>
            <div className="invoice-item">
                <img src={connection} alt=""/>
                <div className="title-pink">Multiple GSTIN</div>
                <div className="content">Multiple GSTIN supports for your branches.</div>
            </div>
        </div>
        </div>
        <div  style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className="img-left-text-box">
        <div className="image-box">
               <img src={invoiceData[1].image} alt=""/>
         </div>
         <div className="content-box">
               <div className="title-pink">
               {invoiceData[1].title}
               </div>
                <div className="content">
                    {invoiceData[1].description1 && <p>{renderParagraph('invoice',1,invoiceData[1].description1)}</p>}
                    {invoiceData[1].description2 && <p>{renderParagraph('invoice',1,invoiceData[1].description2)}</p>}
    
<Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>
                </div>
           </div>
            
        </div>
        </div>
        
        <div className=" img-right-text-box">
            <div className="content-box">
                <div className="heading-main"> {invoiceData[2].title}</div>
                <div className="content">
              {invoiceData[2].description1 && <p>
{renderParagraph('invoice',2,invoiceData[2].description1)}
</p>}
{invoiceData[2].description2 && <p>
{renderParagraph('invoice',2,invoiceData[2].description2)}
</p>}
<Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>

                </div>
           </div>
            <div className="image-box">
               <img src={invoiceData[2].image} alt=""/>
            </div> 
        </div>
        
        <div style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className=" img-left-text-box" >
        <div className="image-box">
               <img src={invoiceData[3].image} alt=""/>
            </div>
            <div className="content-box"> 
               <div className="heading-main">
               {invoiceData[3].title}
               </div>
                <div className="content">
                    {invoiceData[3].description1 && <p>{renderParagraph('invoice',3,invoiceData[3].description1)}</p>}
                    {invoiceData[3].description2 && <p>{renderParagraph('invoice',3,invoiceData[3].description2)}</p>}
                    
                <Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>


                </div>
                </div>
        </div>
        </div>
        <div className=" img-right-text-box">
            <div className="content-box">
                <div className="title-pink"> {invoiceData[4].title}</div>
                <div className="content">
                    {invoiceData[4].description1 && <p>{renderParagraph('invoice',4,invoiceData[4].description1)}</p>}
                    {invoiceData[4].description2 && <p>{renderParagraph('invoice',4,invoiceData[4].description2)}</p>}
                
<Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>


                </div>
                </div>
            <div className="image-box">
               <img src={invoiceData[4].image} alt=""/>
            </div>
        </div>
       </>}
    </div>
)
}
export default Invoicing;