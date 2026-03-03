import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { RiCloseFill } from 'react-icons/ri';

import { closePopup } from "../../../redux/popup/slice";
import { selectModalType, selectOpen } from "../../../redux/popup/selectors";

import SignInForm from "./forms/SignInFopm";
import SignUpForm from "./forms/SignUpForm";

const Popap =()=>{
        const isOpen=useSelector(selectOpen);
        const typeModal = useSelector(selectModalType);
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

        const modalMap = {
                LOGIN : <SignInForm/>,
                SIGNUP:<SignUpForm/>
        }
if (!isOpen || !typeModal) return null;

        return  (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" 
                       onClick={()=>{dispatch(closePopup())}}>
                   <div onClick={(e) => e.stopPropagation()}
                        className="bg-[var(--bg)] p-8 rounded-2xl relative w-[600px] shadow-lg shadow-secondary-cyan">
                        <button aria-label="Close popap"
                                type="button" 
                                className="absolute top-2 right-3 cursor-pointer text-secondary-cyan transition-color duration-300 hover:text-primary-yellow focus:text-primary-yellow focus:outline-none"
                                onClick={()=>{dispatch(closePopup())}}>
                                <RiCloseFill size="24px" />
                        </button>
                        {modalMap[typeModal]}
                    </div>
       
        </div>)
}

export default Popap;