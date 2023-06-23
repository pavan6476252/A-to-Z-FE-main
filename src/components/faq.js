import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./../assets/css/faq.css"
import { getFaq } from "../actions";
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
   
    '&:not(:last-child)': {
      borderBottom: 0,
    },
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
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    marginLeft: theme.spacing(3)
  }));
const Faq=()=>{
  const dispatch=useDispatch();
  const faqs=useSelector(state=>state.faqs);
  //console.log(faqs)
    const [expanded, setExpanded] = React.useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    useEffect(()=>{
      
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          });
    
     dispatch(getFaq());
    },[dispatch])
    return (
        <div className="terms-and-conditions">
            <div className="tp-1">
            FAQs
            </div>
            <div className="tp-main">
            Your website may use the Privacy Policy given below:
            </div>
            {faqs && faqs.map((faq,index)=><Accordion style={{marginBottom:'5px'}} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={`faq-${faq.id}`}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
            <div className="faq-content">
            <FiberManualRecordIcon className="faq-dot" style={{height:'10px'}}/><span>{faq.question}</span>
            </div>
          
        </AccordionSummary>
        <AccordionDetails>
          {faq.answer}
        </AccordionDetails>
      </Accordion>)}
        </div>
    )
}
export default Faq;