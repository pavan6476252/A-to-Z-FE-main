import * as React from 'react';
import { Link,useLocation} from "react-router-dom";
import logo from "./../assets/images/logo.png";
import arrowDown from "./../assets/icons/arrow-down.svg";
import arrowBlue from "./../assets/icons/arrow-blue.svg";
import menu from "./../assets/icons/menu.svg";
import "./../assets/css/header.css";
const Header=()=>{
    let location=useLocation();
    let pathname=location.pathname.split("/")[1];
    //console.log(pathname)
    const [showDropdown,setShowDropdown]=React.useState(false)
    const [showMenu,setShowMenu]=React.useState(false)
   document.addEventListener('click',(e=>{
    //console.log(el,menudrop)
      if(!e.target.closest('.header-drop'))
       { setShowMenu(false);
      setShowDropdown(false);}
   }));
    return (
        <div className="header">
          <div className={`header-drop`} onClick={()=>setShowMenu(p=>!p)}>
          <img className='header-menu' src={menu}  alt=""/>
              </div>
           
          <ul className={`about-nav-small ${showMenu?'':'hidden'}`}>
          <li className="header-nav-link">
              <div className={`header-nav-item`}>
                <Link to="/e-invoicing">E-Invoicing</Link>
              </div>
            </li>
            <li className="header-nav-link">
              <div className={`header-nav-item`}>
                <Link to="/money-recovery">Money Recovery Tool</Link>
              </div>
            </li>
            <li className="header-nav-link">
              <div className={`header-nav-item`}>
                <Link to="/bill-discounting">Bill Discounting</Link>
              </div>
            </li>
            <li className="header-nav-link"  >
              <div className={`header-nav-item header-drop`} onClick={()=>setShowDropdown(p=>!p)}>
                About
                <img src={arrowDown} alt=""/>
              </div>
              <ul className={`about-nav ${showDropdown?'':'hidden'}`}>
                    <li >
               
                        <Link className={`about-nav-item`} to="/about">About us</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/">Blogs</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/terms-and-conditions">Terms of services</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/privacy-policy">Privacy Policy</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/faq">FAQs</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/contact-us">Contact us</Link>
                        
                    </li>
                </ul>
            </li>
                </ul>
          <Link to="/"><img className='logo' src={logo} alt="logo"/></Link>
          
          <ul className="header-nav">
            <li className="header-nav-link">
              <div className={`header-nav-item ${pathname==='e-invoicing'?'selected':''}`}>
                <Link to="/e-invoicing">E-Invoicing</Link>
              </div>
            </li>
            <li className="header-nav-link">
              <div className={`header-nav-item  ${pathname==='money-recovery'?'selected':''}`}>
                <Link to="/money-recovery">Money Recovery Tool</Link>
              </div>
            </li>
            <li className="header-nav-link">
              <div className={`header-nav-item  ${pathname==='bill-discounting'?'selected':''}`}>
                <Link to="/bill-discounting">Bill Discounting</Link>
              </div>
            </li>
            <li className="header-nav-link"  >
              <div className={`header-nav-item header-drop ${(pathname==='about'||pathname==='blogs'||pathname==='terms-and-conditions'||pathname==='privacy-policy'||pathname==='faq'||pathname==='contact-us'|| showDropdown)?'selected-drop':''}`} onClick={()=>setShowDropdown(p=>!p)}>
                About
                <img src={(pathname==='about'||pathname==='blogs'||pathname==='terms-and-conditions'||pathname==='privacy-policy'||pathname==='faq'||pathname==='contact-us'|| showDropdown)?arrowBlue:arrowDown} alt=""/>
              </div>
              <ul className={`about-nav ${showDropdown?'':'hidden'}`}>
                    <li >
               
                        <Link className={`about-nav-item`} to="/about">About us</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/blogs">Blogs</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/terms-and-conditions">Terms of services</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/privacy-policy">Privacy Policy</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/faq">FAQs</Link>
                        
                    </li>
                    <li >
                        
                        <Link className={`about-nav-item`} to="/contact-us">Contact us</Link>
                        
                    </li>
                </ul>
            </li>
           
          </ul>
          <div className='header-btns'>
          <div className="header-nav-link">
              <div className={`header-nav-btn-text`}>
                <Link to="/login">Login</Link>
              </div>
            </div>
            <div className="header-nav-link">
              <button className={`header-nav-btn`}>
                <Link to="/sign-up">Sign Up</Link>
              </button>
            </div>
          </div>
          
        </div>
    )
}
export default Header;