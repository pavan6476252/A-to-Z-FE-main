import * as actionType from "./../helpers/constants";

const initialState = {
  home_carousel_1:null,
  home_carousel_2:null,
  testimonials:null,
  cards:null,
  bill_discounting:null,
  money_recovery:null,
  invoice:null,
  about:null,
  faqs:null,
  otp_secret:null
};
const reducer = (state = initialState, action) => {
  switch (action.type) 
  {
    case actionType.GET_HOME_CAROUSEL_1: 
      return { ...state, home_carousel_1: action.payload };
    case actionType.GET_HOME_CAROUSEL_2: 
      return { ...state, home_carousel_2: action.payload };
    case actionType.GET_CARDS: 
      return { ...state, cards: action.payload };
    case actionType.GET_ABOUT: 
      return { ...state, about: action.payload };   
    case actionType.GET_TESTIMONIALS: 
      return { ...state, testimonials: action.payload };
    case actionType.GET_BILL_DISCOUNTING:
      return {...state,bill_discounting:action.payload};
    case actionType.GET_MONEY_RECOVERY:
        return {...state,money_recovery:action.payload};
    case actionType.GET_INVOICE:
      return {...state,invoice:action.payload};
    case actionType.GET_FAQS: 
      return { ...state, faqs: action.payload };
    case actionType.GET_OTP_SECRET:{
      return {...state,otp_secret:action.payload}
    }
    default:
      return state;
  }
}
export default reducer;