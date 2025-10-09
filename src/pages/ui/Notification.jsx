import React, { useState, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi'; // Assuming react-icons is installed; if not, add via npm install react-icons

const Notification = ({ message, type = 'success', isVisible, onClose }) => {
     const [shouldAnimate, setShouldAnimate] = useState(false);

     useEffect(() => {
          if (isVisible) {
               setShouldAnimate(true);
               const timer = setTimeout(() => {
                    setShouldAnimate(false);
                    setTimeout(onClose, 300); // Delay close until animation ends
               }, 4000);
               return () => clearTimeout(timer);
          }
     }, [isVisible, onClose]);

     if (!isVisible) return null;

     const baseClasses = 'fixed top-4 right-4 z-50 flex items-center space-x-3 rounded-lg px-6 py-4 shadow-xl transform transition-all duration-300 ease-out';
     const successClasses = 'bg-green-500 text-white border border-green-600';
     const errorClasses = 'bg-red-500 text-white border border-red-600';
     const animateIn = 'translate-x-0 opacity-100';
     const animateOut = 'translate-x-full opacity-0';
     const iconClasses = 'text-lg';

     return (
          <div
               className={`${baseClasses} ${type === 'success' ? successClasses : errorClasses} ${shouldAnimate ? animateIn : animateOut
                    }`}
          >
               {type === 'success' ? (
                    <FiCheck className={`${iconClasses} animate-bounce`} />
               ) : (
                    <FiX className={iconClasses} />
               )}
               <span className="font-medium">{message}</span>
          </div>
     );
};

export default Notification;