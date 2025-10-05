import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const roles = [
     'Web Developer',
     'App Developer',
     'Data Analyst',
     'UI/UX Designer',
     'Machine Learning Engineer',
];

const Home = () => {
     const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }, 3000); // Change role every 3 seconds
          return () => clearInterval(interval);
     }, []);

     return (
          <section
               id="home"
               className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-orange-500 text-gray-900 p-4 md:p-6"
          >
               {/* Mobile Layout */}
               <div className="w-full mt-8 md:hidden flex flex-col items-center justify-center">
                    {/* Image */}
                    <div className="relative w-48 h-48 mb-6">
                         <img
                              src="https://media.licdn.com/dms/image/v2/D5603AQFMQq8xBJiGag/profile-displayphoto-scale_400_400/B56Zge7pi3G4Ak-/0/1752865610468?e=1762387200&v=beta&t=5n7yegbzKVx0gu0fcU52bPXb6ZHnQo1e_GhOz9j0LYA"
                              alt="Nagaraju"
                              className="w-full h-full object-cover rounded-full border-4 border-teal-500 shadow-xl"
                         />
                         <div className="absolute inset-0 rounded-full opacity-40 blur-xl"></div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center mb-6">
                         <h1 className="text-3xl font-bold mb-4 leading-tight">
                              <span className="text-gray-800">Hi,</span>
                              <br />
                              <span className="text-teal-600">I'am Nagaraju</span>
                         </h1>
                         <div className="mb-6 text-lg font-medium text-gray-700 h-10 overflow-hidden">
                              <AnimatePresence mode="wait">
                                   <motion.div
                                        key={roles[currentRoleIndex]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center justify-center"
                                   >
                                        {roles[currentRoleIndex]}
                                        <motion.span
                                             className="ml-2 text-teal-600"
                                             animate={{ opacity: [1, 1, 0, 0] }}
                                             transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
                                        >
                                             |
                                        </motion.span>
                                   </motion.div>
                              </AnimatePresence>
                         </div>
                         <p className="px-5 font-medium text-center">
                              Code is your superpower. Every bug you fix makes you stronger. Dream in
                              algorithms, think in solutions. Innovation starts with curiosity. From 0s
                              and 1s, you can build anything
                         </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center space-x-6 mb-6">
                         <a
                              href="https://www.linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-700 hover:text-teal-900 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                         >
                              <FaLinkedinIn size={24} />
                         </a>
                         <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-800 hover:text-gray-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                         >
                              <FaGithub size={24} />
                         </a>
                    </div>

                    {/* Button */}
                    <button className="bg-teal-500 text-white px-8 py-4 rounded-full flex items-center justify-center space-x-3 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-6">
                         <span>Download Resume</span>
                    </button>
               </div>

               {/* Desktop Layout */}
               <div className="hidden md:flex md:flex-row items-center justify-center space-x-20 w-full">
                    {/* Text Content */}
                    <div className="w-1/2 text-left">
                         <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                              <span className="text-gray-800">Hi,</span>
                              <br />
                              <span className="text-teal-600">I'am Nagaraju</span>
                         </h1>
                         <div className="mb-8 text-xl md:text-2xl font-medium text-gray-700 h-10 md:h-12 overflow-hidden">
                              <AnimatePresence mode="wait">
                                   <motion.div
                                        key={roles[currentRoleIndex]}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center"
                                   >
                                        {roles[currentRoleIndex]}
                                        <motion.span
                                             className="ml-2 text-teal-600"
                                             animate={{ opacity: [1, 1, 0, 0] }}
                                             transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
                                        >
                                             |
                                        </motion.span>
                                   </motion.div>
                              </AnimatePresence>
                         </div>
                         <div><p className='px-5 font-medium pb-5'>Code is your superpower.
                              Every bug you fix makes you stronger.
                              Dream in algorithms, think in solutions.
                              Innovation starts with curiosity.
                              From 0s and 1s, you can build anything</p></div>
                         <button className="bg-teal-500 text-white px-8 py-4 rounded-full flex items-center space-x-3 hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-6 md:mb-8">
                              <span>Download Resume</span>
                         </button>
                         <div className="flex items-center justify-start space-x-6">
                              <a
                                   href="https://www.linkedin.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-teal-700 hover:text-teal-900 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                              >
                                   <FaLinkedinIn size={24} />
                              </a>
                              <a
                                   href="https://github.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-800 hover:text-gray-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                              >
                                   <FaGithub size={24} />
                              </a>
                         </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-112 lg:h-112 flex-shrink-0">
                         <img
                              src="https://media.licdn.com/dms/image/v2/D5603AQFMQq8xBJiGag/profile-displayphoto-scale_400_400/B56Zge7pi3G4Ak-/0/1752865610468?e=1762387200&v=beta&t=5n7yegbzKVx0gu0fcU52bPXb6ZHnQo1e_GhOz9j0LYA" // Replace with your image URL
                              alt="Nagaraju"
                              className="w-full h-full object-cover rounded-full border-4 border-teal-500 shadow-xl"
                         />
                         <div className="absolute inset-0  rounded-full opacity-40 blur-xl"></div>
                    </div>
               </div>
          </section>
     );
};

export default Home;