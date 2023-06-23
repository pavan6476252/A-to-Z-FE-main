import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import refresh from "./../assets/icons/refresh.svg";
import validation from "./../assets/icons/validation.svg";
import connection from "./../assets/icons/connection.svg";
import { getMoneyRecovery } from "../actions";
import { renderParagraph } from "../helpers/utils";

const MoneyRecovery =()=>{
    const dispatch=useDispatch();
    const moneyData=useSelector(state=>state.money_recovery);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          });
       dispatch(getMoneyRecovery());
    },[dispatch])
   
return(
    <div>
         <div className="banner">
            <div className="banner-content">
                <div className="heading-main" style={{padding:'0 40px',marginBottom:'10px'}}>Get your payments timely

</div>
<div className="content" style={{textAlign:'center'}}>Money recovery tool to automate your payment collection</div>
<Link to="/sign-up"><button className="banner-btn">Sign Up Now For Free</button></Link>
            </div>
            <div className="home-straps">
            <div className="home-straps-content">
            <div className="home-strap">Auto Sharing Of Invoices To Buyers</div>
            <div className="home-strap">Automatic Payment Reminder</div>
            <div className="home-strap">Reduced Collection Period</div>
            </div>
            <div className="home-straps-content-small">
              <Carousel>
                <Carousel.Item>
                <div className="home-strap">Auto Sharing Of Invoices To Buyers</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Automatic Payment Reminder</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Reduced Collection Period</div>
                </Carousel.Item>
              </Carousel>
            </div>
         </div>
        </div>
        {moneyData && <>
            <div className="img-right-text-box">
            <div className="content-box">
                <div className="heading-main">{moneyData[0].title}</div>
                <div className="content">
                    {moneyData[0].description1 && <p> {renderParagraph('money',0,moneyData[0].description1)}
</p>}
                    {moneyData[0].description2 && <p> {renderParagraph('money',0,moneyData[0].description2)}
</p>}
               

<Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>

                </div>
                </div>
            <div className="image-box">
               <img src={moneyData[0].image} alt=""/>
            </div>
        </div> 
        <div className="invoice-data  ">
        <div className="heading-main">
        Your payment recovery will be as <br/>it is as you want
        </div>
        <div className="invoice-content">
            <div className="invoice-item">
                <img src={validation} alt=""/>
                <div className="title-pink">Strong Automation</div>
                <div className="content">Automatic payment
reminder on SMS, Emails &
Calls</div>
            </div>
            <div className="invoice-item">
                <img src={connection} alt=""/>
                <div className="title-pink">Ideal Team Cooperation</div>
                <div className="content">One-click sharing information and tracking communication history to customers.</div>
            </div>
            <div className="invoice-item">
                <img src={refresh} alt=""/>
                <div className="title-pink">Strong Cash Flow
Management</div>
                <div className="content">Control overdue, avoid bad
debt & auto-generated report.</div>
            </div>
        </div>
        </div>
        <div  style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className=" img-left-text-box">
        <div className="image-box">
               <img src={moneyData[1].image} alt=""/>
            </div>
            <div className="content-box">
               <div className="title-pink">
               {moneyData[1].title}
               </div>
                <div className="content">
                    {moneyData[1].description1 && <p>
                    {renderParagraph('money',1,moneyData[1].description1)}
                    </p>}
                    {moneyData[1].description2 && <p>
                    {renderParagraph('money',1,moneyData[1].description2)}
                    </p>}
                    
                    <Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>

                </div>
                </div>
        </div>
        </div>
        
        <div className=" img-right-text-box">
        <div className="content-box">
                <div className="heading-main">{moneyData[2].title}</div>
                <div className="content">
              {moneyData[2].description1 && <p>
{renderParagraph('money',2,moneyData[2].description1)}
</p>}
{moneyData[2].description2 && <p>
{renderParagraph('money',2,moneyData[2].description2)}
</p>}

<Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>

                </div>
           </div>
            <div className="image-box">
               <img src={moneyData[2].image} alt=""/>
            </div>
        
        </div>
        <div style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className=" img-left-text-box" >
        <div className="image-box">
               <img src={moneyData[3].image} alt=""/>
            </div>
            <div className="content-box">
               <div className="heading-main">
               {moneyData[3].title}
               </div>
                <div className="content">
                    {moneyData[3].description1 && <p>{renderParagraph('money',3,moneyData[3].description1)}</p>}
                    {moneyData[3].description2 && <p>{renderParagraph('money',3,moneyData[3].description2)}</p>}
     <Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>       

                </div>
           </div>
        </div>
        </div>
        <div>
        <div className=" img-right-text-box">
        <div className="content-box">
                <div className="title-pink">{moneyData[4].title}</div>
                <div className="content">
                    {moneyData[4].description1 && <p>{renderParagraph('money',4,moneyData[4].description1)}</p>}
                    {moneyData[4].description2 && <p>{renderParagraph('money',4,moneyData[4].description2)}</p>}
                <Link to="/sign-up"><button className="banner-btn">Sign Up Now</button></Link>

                </div>
           </div>
            <div className="image-box">
               <img src={moneyData[4].image} alt=""/>
            </div>
        </div>
        </div>
        </>}
        
        
    </div>
)
}
export default MoneyRecovery;