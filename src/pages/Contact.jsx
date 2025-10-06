import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaDiscord, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp, FaGithubAlt, FaTwitch, FaMailBulk } from 'react-icons/fa';
import { FaCode, FaGithub, FaM, FaSquareXTwitter, FaX } from 'react-icons/fa6';
import Notification from './ui/notification';

const Contact = () => {
    const form = useRef();
    const [showNotification, setShowNotification] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace with your actual EmailJS service ID, template ID, and user ID
        const serviceId = 'service_6xpr9cm';
        const templateId = 'template_sm78zor';
        const userId = 'E0Kr2x2V-xETtisdz';

        emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then((result) => {
                console.log(result.text);
                setShowNotification(true);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    };

    const formVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const infoVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            background: 'linear-gradient(45deg, #00FFFF, #FF00FF)',
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.98 }
    };

    const socialVariants = {
        hover: {
            scale: 1.2,
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="contact" style={{
            background: '#000',
            color: '#FFF',
            padding: '100px 20px', // Increased padding for better spacing
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '"Orbitron", sans-serif',
            width: '100%',
            position: 'relative',
        }}>
            <style>
                {`
          @media (max-width: 768px) {
            section {
              padding: 60px 20px;
            }
            .contact-container {
              flex-direction: column !important;
              gap: 40px; // Increased gap for mobile
            }
            .form-section, .info-section {
              width: 100% !important;
              max-width: 100%;
            }
            .social-icons {
              justify-content: center;
              gap: 15px;
            }
            .input-row {
              flex-direction: column;
              gap: 15px;
            }
          }
          @media (min-width: 769px) {
            .contact-container {
              flex-direction: row;
              gap: 50px; // Increased gap for desktop
            }
            .input-row {
              flex-direction: row;
              gap: 15px;
            }
          }
          .input-field, .textarea-field {
            transition: all 0.3s ease;
          }
          .input-field:focus, .textarea-field:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          }
        `}
            </style>

            <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
                <h2 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent animate-glow">
                    Contact With Me
                </h2>

            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{
                    fontSize: '1rem',
                    color: '#CCC',
                    marginBottom: '40px', // Increased margin for spacing
                    textAlign: 'center',
                    maxWidth: '600px',
                }}
            >
            </motion.p>

            <div className="contact-container" style={{
                display: 'flex',
                gap: '50px', // Increased gap for better separation
                maxWidth: '1100px', // Increased max-width for better layout
                width: '100%',
                justifyContent: 'center',
            }}>
                {/* Form Section */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    className="form-section"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '40px', // Increased padding for spacing
                        width: '450px', // Increased width for better layout
                        border: '1px solid rgba(0, 255, 255, 0.2)',
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '25px', // Increased margin for spacing
                        color: '#00FFFF',
                        textAlign: 'center',
                    }}>
                        Send Me a Message
                    </h3>
                    <Notification
                        message="Email sent successfully!"
                        show={showNotification}
                        onClose={() => setShowNotification(false)}
                    />

                    <div className="input-row" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                        <input
                            type="name"
                            name="name"
                            placeholder="Name"
                            required
                            className="input-field"
                            style={{
                                flex: 1,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(0, 255, 255, 0.3)',
                                borderRadius: '8px',
                                padding: '15px', // Increased padding for better spacing
                                color: '#FFF',
                                fontSize: '1rem',
                                width: '100%', // Ensure full width within flex
                            }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="input-field"
                            style={{
                                flex: 1,
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(0, 255, 255, 0.3)',
                                borderRadius: '8px',
                                padding: '15px', // Increased padding for better spacing
                                color: '#FFF',
                                fontSize: '1rem',
                                width: '100%', // Ensure full width within flex
                            }}
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        className="textarea-field"
                        style={{
                            width: '100%',
                            height: '150px', // Increased height for better spacing
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(0, 255, 255, 0.3)',
                            borderRadius: '8px',
                            padding: '15px', // Increased padding for better spacing
                            color: '#FFF',
                            fontSize: '1rem',
                            marginBottom: '25px', // Increased margin for spacing
                            resize: 'vertical',
                        }}
                    />

                    <motion.button
                        type="submit"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            width: '100%',
                            background: 'linear-gradient(45deg, #00FFFF, #FF00FF)',
                            color: '#000',
                            padding: '15px',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
                            marginTop: '10px', // Added margin for spacing
                        }}
                    >
                        <span><FaMailBulk /></span>
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Contact Info Section */}
                <motion.div
                    className="info-section"
                    variants={infoVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '40px', // Increased padding for spacing
                        width: '450px', // Increased width for better layout
                        border: '1px solid rgba(0, 255, 255, 0.2)',
                        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '25px', // Increased margin for spacing
                        color: '#00FFFF',
                        textAlign: 'center',
                    }}>
                        Contact Information
                    </h3>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <FaEnvelope style={{ color: '#00FFFF', fontSize: '1.2rem' }} />
                            <span style={{ color: '#FFF' }}>nagarajuch3737@gmail.com</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <FaPhone style={{ color: '#00FFFF', fontSize: '1.2rem' }} />
                            <span style={{ color: '#FFF' }}>+91 6305593737</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <FaMapMarkerAlt style={{ color: '#00FFFF', fontSize: '1.2rem' }} />
                            <span style={{ color: '#FFF' }}>Warangal ,Telangana, India</span>
                        </div>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '20px', // Increased margin for spacing
                            color: '#00FFFF',
                            textAlign: 'center',
                        }}>
                            Connect on Socials
                        </h4>
                        <div className="social-icons" style={{
                            display: 'flex',
                            gap: '20px', // Increased gap for better spacing
                            justifyContent: 'center',
                        }}>
                            <motion.a
                                href="https://github.com/Nagaraju3737"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                whileHover="hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaGithub style={{ fontSize: '1.2rem' }} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/nagaraju-chittimalla/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                whileHover="hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaLinkedin style={{ fontSize: '1.2rem' }} />
                            </motion.a>
                            <motion.a
                                href="https://leetcode.com/u/_nagaraju_07/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                whileHover="hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaCode style={{ fontSize: '1.2rem' }} />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/_nagaraju_07/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                whileHover="hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaInstagram style={{ fontSize: '1.2rem' }} />
                            </motion.a>
                            <motion.a
                                href="https://x.com/nagarajuch3737"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                whileHover="hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaSquareXTwitter style={{ fontSize: '1.2rem' }} />
                            </motion.a>
                            <motion.a
                                href="https://wa.me/91938093460"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={socialVariants}
                                whileHover="hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    color: '#FFF',
                                    textDecoration: 'none',
                                }}
                            >
                                <FaWhatsapp style={{ fontSize: '1.2rem' }} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
