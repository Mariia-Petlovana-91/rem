import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { RiCloseFill } from 'react-icons/ri';

import { closePopup } from "../../../redux/popup/slice";
import { selectActiveModal, selectIsOpen } from "../../../redux/popup/selectors";

import SignInForm from "../../forms/SignInFopm";
import SignUpForm from "../../forms/SignUpForm";
import MobileMenu from "../../header/mobileMenu/MobileMenu";

const Popap =()=>{
        const isOpen=useSelector(selectIsOpen);
        const typeModal = useSelector(selectActiveModal);
        const dispatch = useDispatch();

        useEffect(()=>{
                if(isOpen){
                        document.body.classList.add("no-scroll");
                }else{
                        document.body.classList.remove("no-scroll");
                }
                return()=>{
                        document.body.classList.remove("no-scroll");
                }
        },[isOpen]);

        useEffect(() => {
  const handleEsc = (e:KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(closePopup());
    }
  };

  if (isOpen) {
    window.addEventListener("keydown", handleEsc);
  }

  return () => window.removeEventListener("keydown", handleEsc);
        }, [isOpen, dispatch]);


        useEffect(() => {
  const media = window.matchMedia("(min-width: 768px)");

  const handleChange = () => {
    if (media.matches && typeModal === "MOBILE_MENU") {
      dispatch(closePopup());
    }
  };

  media.addEventListener("change", handleChange);

  return () => {
    media.removeEventListener("change", handleChange);
  };
        }, [typeModal, dispatch]);

        const modalMap = {
                LOGIN : <SignInForm/>,
                SIGNUP:<SignUpForm/>,
                MOBILE_MENU:<MobileMenu/>
        }

       const isMobileMenu = typeModal === "MOBILE_MENU";

       if (!typeModal) return null;

        return  (
        <div className={`fixed inset-0 bg-black/50 z-50 ${
    isMobileMenu
      ? "flex justify-start items-end"
      : "flex items-center justify-center"
  }`} 
         onClick={()=>{dispatch(closePopup())}}>

                <div onClick={(e) => e.stopPropagation()}
                        className={
    isMobileMenu
      ? "bg-[var(--bg)] w-[280px] h-full shadow-lg shadow-secondary-cyan p-6"
      : "bg-[var(--bg)] p-8 rounded-2xl relative w-[600px] shadow-lg shadow-secondary-cyan"
  }> {!isMobileMenu &&  (<button aria-label="Close popap"
                                type="button" 
                                className="absolute top-2 right-3 cursor-pointer text-secondary-cyan transition-color duration-300 hover:text-primary-yellow focus:text-primary-yellow focus:outline-none"
                                onClick={()=>{dispatch(closePopup())}}>
                                <RiCloseFill size="24px" />
                        </button>)}
                        {modalMap[typeModal]}
                 </div>
       
        </div>)
}

export default Popap;