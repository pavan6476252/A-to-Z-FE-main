import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link} from "react-router-dom";
import arrowRight from "./../assets/icons/arrow-right.svg"
import "./../assets/css/about.css"
import { renderParagraph } from "../helpers/utils";
import { getAbout } from "../actions";

const About=()=>{
    const dispatch=useDispatch();
    const aboutData=useSelector(state=>state.about);
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          });
     dispatch(getAbout());
    },[dispatch])
    
    return <div className="about">
        <div className="banner">
            <div className="banner-content">
                <div className="pink-content">
                    <span style={{textDecoration:"line-through"}}>About Us</span>
                    <img src={arrowRight} alt=""/>
                    <span>About you</span>
                </div>
                <div className="heading-main" style={{padding:'0 40px',textTransform:'initial',marginBottom:'10px'}}>Simplifying your financial operations can be a daunting process.
</div>
<div className="content" style={{textAlign:'center'}}>We help MSMEs do their e-invoicing and accounting in such a way that it helps them in
faster recovery of payments, reduce their bad debt, get instant collateral-free loans and
increase their profits and cash flow.</div>
<Link to="/sign-up"><button className="banner-btn">Sign Up Now For Free</button></Link>

            </div>
        </div>
        {aboutData && <>
            <div style={{background:' rgba(0, 133, 208, 0.1)'}}>
            <div className="img-right-text-box">
                 <div className="content-box">
                <div className="heading-main">{aboutData[0].title}</div>
                <div className="content">
                    {aboutData[0].description1 && <p>{renderParagraph('about',0,aboutData[0].description1)}</p>}
                    {aboutData[0].description2 && <p>{renderParagraph('about',0,aboutData[0].description2)}</p>}
                    
                </div>
                </div>
            <div className="image-box">
               <img src={aboutData[0].image} alt=""/>
            </div>
            </div>
        </div>
        <div className="img-left-text-box" >
         <div className="image-box">
               <img src={aboutData[1].image} alt=""/>
            </div>
            <div className="content-box">
                <div className="content">
                    {aboutData[1].description1 &&  <p>{renderParagraph('about',1,aboutData[1].description1)}</p>}
                    {aboutData[1].description2 &&  <p>{renderParagraph('about',1,aboutData[1].description2)}</p>}
               
                </div>
            </div>
        </div>
        <div  style={{background:' rgba(0, 133, 208, 0.1)'}}>
        <div className="img-right-text-box">
             <div className="content-box">
                <div className="content">
                    {aboutData[2].description1 && <p>{renderParagraph('about',2,aboutData[2].description1)}</p> }
                    {aboutData[2].description2 && <p>{renderParagraph('about',2,aboutData[2].description2)}</p> }

<p className="highlight">{aboutData[2].sub_title}</p>
<Link to="/sign-up"><button className="banner-btn" >Sign Up Now</button></Link>

                </div>
            </div>
            <div className="image-box">
               <img src={aboutData[2].image} alt=""/>
            </div>
        </div>
        </div>
        </>}
        
    </div>
}
export default About;