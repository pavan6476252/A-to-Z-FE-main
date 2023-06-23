import React from "react";
import { Link,useLocation} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./../assets/images/img-1.svg";
import img2 from "./../assets/images/img-2.svg";
import img3 from "./../assets/images/img-3.svg";
import img4 from "./../assets/images/img-4.svg";
import img5 from "./../assets/images/img-5.svg";
import gplay from "./../assets/images/gplay.png";
import appstore from "./../assets/images/appstore.png";
import facebook from "./../assets/icons/facebook-outlined.svg";
import instagram from "./../assets/icons/instagram-outlined.svg";
import twitter from "./../assets/icons/twitter-outlined.svg";
import "./../assets/css/carousel.css";
const ImageCarousel=()=>{
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <Carousel className="image-carousel">
            <Carousel.Item>
                <div  className="image-carousel-item">
                <img src={img4} alt=""/>
                <div className="image-carousel-caption">
                    <div>Strong Automation</div>
                    <div>Automatic payment reminder on SMS, Emails & Calls</div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div  className="image-carousel-item">
                <img src={img3} alt=""/>
                <div className="image-carousel-caption">
                    <div>Strong Cash Flow Management</div>
                    <div>Control overdue, avoid bad debt & auto-generated reports</div>
                </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
                <div  className="image-carousel-item">
                <img src={img2} alt=""/>
                <div className="image-carousel-caption">
                    <div>Instant Bill Discounting</div>
                    <div>Get an instant loan on invoices & avoid the risk of assets.</div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div  className="image-carousel-item">
                <img src={img1} alt=""/>
                <div className="image-carousel-caption">
                    <div>Generate E-Invoice</div>
                    <div>Generate & Send E-Invoices automatically</div>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div  className="image-carousel-item">
                <img src={img5} alt=""/>
                <div className="image-carousel-caption">
                    <div>Manage your collections and payouts</div>
                    <div>Connect your accounting platform to monitor your overall business health</div>
                </div>
                </div>
            </Carousel.Item>
        </Carousel>
        <div className="base">
            <div style={{display:'flex',justifyContent:'center',margin:'20px 0'}}>
                <img src={gplay} style={{marginRight:'20px'}} alt=""/>
                <img src={appstore} alt=""/>
            </div>
            <div className="base-text">@2022 msmepayments.com all rights are reserved </div>
            <ul className="base-nav">
                <li>
                    <Link to="/terms-and-conditions">Terms of services</Link>
                </li>
                <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/faq">FAQs</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact us</Link>
                </li>
            </ul>
            <ul className="base-socials">
                <li>
                    <a href="">
                        <img src={facebook} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={instagram} alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={twitter} alt=""/>
                    </a>
                </li>
            </ul>
        </div>
        </div>
    )
}
export default ImageCarousel;