import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link} from "react-router-dom";
import partnership from "./../assets/images/partnership.svg";
import "./../assets/css/home.css";
import Carousel from "react-bootstrap/Carousel";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./../assets/css/carousel.css";
import "./../assets/css/faq.css";
import {getFaq, getHome} from "./../actions";
import { renderParagraph } from "../helpers/utils";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon  />}
      {...props}
    />
  ))(({ theme }) => ({
   
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(180deg)',
      color:'#0085D0'
    },
    '& .MuiAccordionSummary-content':{
      marginBottom:0
    }
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    
  }));
  // const faqs=[
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
  //   {
  //       'qs':'How can I get instant loan with invoice discounting ?',
  //       'ans':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time. We sense you might be worried about operation expenses. Taking your business towards continuous growth will be a great process. we have to stand with you.'
  //   },
    
  // ]
  // const testimonials=[
  //   {
  //     'id':1,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':2,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':3,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':4,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':5,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':6,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':7,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':8,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':9,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
  //   {
  //     'id':10,
  //     'name':'Jaylee Parkinson',
  //     'location':'Mexico',
  //     'feedback':'The process of making an easy financial operation & steady working capital can be a bit daunting. We understand you want an easy & smooth system that can save you cost & time.'
  //   },
     
  // ]
const Home=()=>{
  const dispatch=useDispatch();
    const homeCarousel1=useSelector(state=>state.home_carousel_1);
    const homeCarousel2=useSelector(state=>state.home_carousel_2)
    const cards=useSelector(state=>state.cards);
    const testimonials=useSelector(state=>state.testimonials);
    const faqs=useSelector(state=>state.faqs)
    
    const [expanded, setExpanded] = useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const sliceIntoChunks=(arr, chunkSize)=>{
      
      const res = [];
      for (let i=0;i<arr.length;i+=chunkSize) {
          const chunk = arr.slice(i, i+chunkSize);
          res.push(chunk);
      }
      return res;
  }
  let bigScreenTestimonials=null;
  let mdScreenTestimonials=null;
  let smallScreenTestimonials=null;
  if(testimonials)
  {
    bigScreenTestimonials=sliceIntoChunks(testimonials,3);
    //console.log(bigScreenTestimonials)
    mdScreenTestimonials=sliceIntoChunks(testimonials,2);
   
    smallScreenTestimonials=testimonials;
  }
  
  useEffect(()=>{
      window.scrollTo({
          top:0,
          left:0,
          behavior:'smooth'
        });
 
   dispatch(getHome());
   dispatch(getFaq(true));
  },[dispatch])
    return (
        <>
         <div className="section home-banner">
            <div className="home-banner-content">
                <div className="heading-main" style={{textAlign:'left'}}>
                We help business owners in faster recovery of their payments and reduce bad debts 
                </div>
                <div className="content">
                Forget complex financial methods, we simplify your financial operations through our Money Recovery & E-Invoicing Tool.
                </div>
            </div>
            <img className="home-banner-img" src={partnership} alt=""/>
            <Link to="/sign-up"><button className="banner-btn">Sign Up Now For Free</button></Link>
            
         </div>
         <div className="home-straps">
            <div className="home-straps-content">
            <div className="home-strap">GST E-invoicing<br/>(follow up payments)</div>
            <div className="home-strap">Faster recovery<br/>(reduce bad debts)</div>
            <div className="home-strap">Instant Collateral Free Loan<br/>(Zero security)</div>
            </div>
            <div className="home-straps-content-small">
              <Carousel>
                <Carousel.Item>
                <div className="home-strap">GST E-invoicing<br/>(follow up payments)</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Faster recovery<br/>(reduce bad debts)</div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="home-strap">Instant Collateral Free Loan<br/>(Zero security)</div>
                </Carousel.Item>
              </Carousel>
            </div>
         </div>
         <div className="section">
         <Carousel>
          {homeCarousel1 && homeCarousel1.map(item=><Carousel.Item key={`carousel-1-${item.id}`}>
                <div className="home-slide">
                <div className="heading-main">
                {item.title}
                </div>
                <div className="home-slide-content-1">
                    <div className="home-content">
                    {renderParagraph('home',0,item.description1)}
                    </div>
                    <div className="img-box">
                    <img src={item.image} alt=""/>
                    </div>
                   
                </div>
                </div>
                <div className="home-slide-sm">
                    <div className="img-box">
                    <img src={item.image} alt=""/>
                    </div>
                    <div className="heading-main">
                {item.title}
                </div>
                <div className="home-content">
                    {renderParagraph('home',0,item.description1)}
                    </div>
                </div>
              </Carousel.Item>)}
              
         </Carousel>
         </div>
         <div className="section">
            <div className="heading-main">Why use A To Z money recovery<br/> and credit private limited?</div>
            <div className="card-grid">
              {cards && cards.map((item,index)=>
                <div className="card-item" key={`card-${index}`}>
                <img src={item.image} alt=""/>
                <div className="card-content">
                    <div className="card-heading">
                    {item.title}
                    </div>
                    <div className="card-description">
                    {item.description1}
                    </div>
                </div>
               
                </div>)}
                
            </div>
           
         </div>
         <div className="section">
         <Carousel>
          {homeCarousel2 && homeCarousel2.map((item,index)=><Carousel.Item key={`slide2-${index}`}>
                    <div className="home-slide-2">
                    <img src={item.image} alt=""/>
                    <div className="home-content-2">
                    <div className="home-content-main">
                    {item.title}
                    </div>
                    <div className="home-content">
                      <p>{renderParagraph('home',1,item.description1)}</p>
                      
                      <p>{renderParagraph('home',1,item.description2)}</p>
                   </div>
                    </div>
                </div>
                   
              </Carousel.Item>)}
              
         </Carousel>
         </div>
         <div className="section">
         <div className="heading-main">Client testimonials</div>
          <div className="testimonial-bg">
          <Carousel>
            {bigScreenTestimonials && bigScreenTestimonials.map((item,index)=><Carousel.Item key={`testimonial1-grp-${index}`}>
             <div className="testimonial-slide-bg">
              {
                item.map((testimonial,index)=>
                  <div className="testimonial" key={`feedback-${index}`}>
                    <img src={testimonial.image} alt=""/>
                    <div className="testimonial-feedback">{testimonial.description}</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                )
              }
             </div>
          </Carousel.Item>)}
          </Carousel>
          </div>
          <div className="testimonial-md">
          <Carousel>
            {mdScreenTestimonials && mdScreenTestimonials.map((item,index)=><Carousel.Item key={`testimonial2-grp-${index}`}>
             <div className="testimonial-slide-md">
              {
                item.map(testimonial=>
                  <div className="testimonial" key={`feedback-${testimonial.id}`}>
                    <img src={testimonial.image} alt=""/>
                    <div className="testimonial-feedback">{testimonial.description}</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                )
              }
             </div>
          </Carousel.Item>)}
          </Carousel>
          </div>
          <div className="testimonial-small">
          <Carousel>
            {smallScreenTestimonials && smallScreenTestimonials.map((testimonial,index)=><Carousel.Item key={`testimonial3-grp-${index}`}>
             
                  <div className="testimonial" key={`feedback-${testimonial.id}`}>
                    <img src={testimonial.image} alt=""/>
                    <div className="testimonial-feedback">{testimonial.description}</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-location">{testimonial.location}</div>
                  </div>
                
          </Carousel.Item>)}
          </Carousel>
          </div>
         </div>
         <div className="section">
         <div className="heading-main">
         FAQs
         </div>
         <div className="faq-head">Have questions ? we are here to help.</div>
         {faqs && faqs.map((faq,index)=><Accordion className="faq-box" expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={`faq-${faq.id}`}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
            <div className="faq">
            <FiberManualRecordIcon style={{height:'8px'}}/><span>{faq.question}</span>
            </div>
          
        </AccordionSummary>
        <AccordionDetails>
          {faq.answer}
        </AccordionDetails>
      </Accordion>)}
         
         </div>
        </>
    )
}
export default Home;