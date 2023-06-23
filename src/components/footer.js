import React,{useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import "./../assets/css/footer.css";
import Grid from '@mui/material/Grid';
import logo from "./../assets/images/logo.png";
import insta from "./../assets/icons/Instagram.svg";
import facebook from "./../assets/icons/Facebook.svg";
import twitter from "./../assets/icons/twitter.svg";
import search from "./../assets/icons/search.svg";

const Footer=()=>{
    const navigate=useNavigate();
    const [searchItem,setSearch]=useState("");
    const handleSearchItem=(e)=>{
        setSearch(e.target.value);
    }
    const handleSearch=(e)=>{
        e.preventDefault();
        //console.log(searchItem)
        if(searchItem.length!==0)
          {navigate("/faq")
       setSearch("")
    }
    }
    return (
        <div className="footer">
                <div className="footer-form">
                <img src={logo} alt=""/>
                <form onSubmit={handleSearch}>
                <div className="footer-form-input">
                        <img src={search} alt="glass"/>
                        <input type="text" placeholder="Search" onChange={handleSearchItem} value={searchItem}/>
                    </div>
                    <button type="submit">Search</button>
                </form>
                </div>
                <Grid container className="footer-grid">
                    <Grid item xs={6} md={3}>
                    <ul className="footer-nav">
                        <li className="footer-nav-heading">Company</li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Home</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/about">About Us</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Carriers</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/contact-us">Contact Us</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/terms-and-conditions">Terms of condition</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </div>
                        </li>
                    </ul>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <ul className="footer-nav">
                        <li className="footer-nav-heading">Resources</li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/faq">FAQs</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Blogs</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Webinars</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Knowledge Base</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Podcasts</Link>
                            </div>
                        </li>
                    </ul>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <ul className="footer-nav">
                        <li className="footer-nav-heading">Business Products</li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/e-invoicing">E-Invoicing</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/money-recovery">Money Recovery Tool</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/bill-discounting">Bill Discounting</Link>
                            </div>
                        </li>
                    </ul>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <ul className="footer-nav">
                        <li className="footer-nav-heading">Support </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/login">Login</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/sign-up">Sign Up</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/">Chat With Us</Link>
                            </div>
                        </li>
                        <li className="footer-link">
                            <div className="footer-link-item">
                                <Link to="/contact-us">Contact Us</Link>
                            </div>
                        </li>
                    </ul>
                    </Grid>
                </Grid>
                <div>
                <div className="footer-socials">
                  <a href="/" className="social">
                    <img src={twitter} alt=""/>
                  </a>
                  <a href="/" className="social">
                    <img src={insta} alt=""/>
                  </a>
                  <a href="/" className="social">
                    <img src={facebook} alt=""/>
                  </a>
                </div>
                <div className="footer-copyright">
                    <span style={{marginRight:'20px'}}>Copyright 2023. Powered by msmepayments</span>
                    <span>Sitemap</span>
                </div>
                </div>
                
                
        </div>
    )
}
export default Footer;