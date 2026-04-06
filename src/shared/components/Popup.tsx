import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion, AnimatePresence } from 'framer-motion';

import { RiCloseFill } from 'react-icons/ri';

import { closePopup } from '@/redux/popup/slice';
import { selectActiveModal, selectIsOpen } from '@/redux/popup/selectors';

import { useEscape } from '@/hooks/useEscape';
import { useScrollLock } from '@/hooks/useScrollLock';

import { SignInForm, SignUpForm } from '@/features';

import { MobileMenu } from '@/shared/components';

const Popap = () => {
  const isOpen = useSelector(selectIsOpen);
  const typeModal = useSelector(selectActiveModal);
  const dispatch = useDispatch();

  useEscape(() => dispatch(closePopup()));
  useScrollLock(isOpen);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');

    const handleChange = () => {
      if (media.matches && typeModal === 'MOBILE_MENU') {
        dispatch(closePopup());
      }
    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [typeModal, dispatch]);

  const modalMap = {
    LOGIN: SignInForm,
    SIGNUP: SignUpForm,
    MOBILE_MENU: MobileMenu,
  };

  const ModalComponent = modalMap[typeModal];

  const isMobileMenu = typeModal === 'MOBILE_MENU';

  return (
    <AnimatePresence mode="wait">
      {typeModal && (
        <motion.div
          key={typeModal}
          className={`fixed inset-0 bg-black/50 z-50 flex 
        ${isMobileMenu ? 'justify-start items-end' : 'items-center justify-center'}
      `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => dispatch(closePopup())}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={isMobileMenu ? { x: -100, opacity: 0 } : { y: 40, opacity: 0, scale: 0.95 }}
            animate={isMobileMenu ? { x: 0, opacity: 1 } : { y: 0, opacity: 1, scale: 1 }}
            exit={isMobileMenu ? { x: -100, opacity: 0 } : { y: 40, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={
              isMobileMenu
                ? 'bg-[var(--bg)] h-full w-[200px] border border-primary-yellow p-6'
                : 'bg-bg p-8 relative w-[90%] max-w-[600px] border border-primary-yellow rounded-2xl'
            }
          >
            {!isMobileMenu && (
              <button
                aria-label="Close popap"
                type="button"
                className="absolute top-2 right-3 cursor-pointer text-primary-yellow transition-colors duration-300 hover:text-secondary-cyan focus:text-secondary-cyan focus:outline-none"
                onClick={() => dispatch(closePopup())}
              >
                <RiCloseFill size="24px" />
              </button>
            )}

            {ModalComponent && <ModalComponent />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popap;
