import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     const navLinks = [
          { to: 'home', label: 'Home' },
          { to: 'about', label: 'About' },
          { to: 'skills', label: 'Skills' },
          { to: 'work', label: 'Work' },
          { to: 'contact', label: 'Contact' },
     ];

     return (
          <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-500 via-purple-600 to-orange-500 bg-opacity-80 backdrop-blur-lg shadow-lg">
               <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
                    {/* Logo */}
                    <div className="text-xl md:text-2xl font-bold text-white font-poppins tracking-tight">
                         <Link
                              to="home"
                              smooth={true}
                              duration={500}
                              className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
                         >
                              Nagaraju
                         </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                         {navLinks.map((link) => (
                              <li key={link.to}>
                                   <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-white text-base md:text-lg font-inter hover:text-yellow-300 transition-colors duration-300 cursor-pointer relative group"
                                        activeClass="text-yellow-300 border-b-2 border-yellow-300"
                                   >
                                        {link.label}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                                   </Link>
                              </li>
                         ))}
                    </ul>

                    {/* Hamburger Icon for Mobile */}
                    <button
                         className="md:hidden text-white hover:text-yellow-300 focus:outline-none transition-colors duration-300"
                         onClick={toggleMenu}
                         aria-label="Toggle menu"
                    >
                         {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
               </nav>

               {/* Mobile Menu */}
               <div
                    className={`md:hidden bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-90 backdrop-blur-lg w-full transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                         }`}
               >
                    <ul className="flex flex-col items-center py-4 space-y-4">
                         {navLinks.map((link) => (
                              <li key={link.to}>
                                   <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-white text-lg font-inter hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
                                        activeClass="text-yellow-300"
                                        onClick={toggleMenu}
                                   >
                                        {link.label}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </div>
          </header>
     );
};

export default Header;