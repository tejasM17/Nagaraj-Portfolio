import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Futuristic Dashboard',
        description: 'A modern analytics dashboard with real-time data visualization and interactive elements.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        tech: ['React', 'D3.js', 'Node.js'],
        codeLink: 'https://example.com/futuristic-dashboard-code',
        demoLink: 'https://example.com/futuristic-dashboard-demo',
    },
    {
        title: 'AI-Powered App',
        description: 'An intelligent mobile application with machine learning capabilities and intuitive UX.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        tech: ['Python', 'TensorFlow', 'Flutter'],
        codeLink: 'https://example.com/ai-powered-app-code',
        demoLink: 'https://example.com/ai-powered-app-demo',
    },
    {
        title: 'E-Commerce Platform',
        description: 'A complete e-commerce solution with modern design and seamless user experience.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        tech: ['Next.js', 'Stripe', 'MongoDB'],
        codeLink: 'https://example.com/ecommerce-platform-code',
        demoLink: 'https://example.com/ecommerce-platform-demo',
    },
];

const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
    hover: { scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)', transition: { duration: 0.3 } },
};

const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
};

const Projects = () => {
    return (
        <section id='projects' style={{
            background: '#000',
            color: '#FFF',
            padding: '80px 20px',
            textAlign: 'center',
            fontFamily: '"Orbitron", sans-serif',
        }}>
            <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
                <h2 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent animate-glow">
                    Future Projects
                </h2>

            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{
                    fontSize: '1rem',
                    color: '#CCC',
                    marginBottom: '40px',
                }}
            >

            </motion.p>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '30px',
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={projectVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        style={{
                            background: '#1A1A1A',
                            borderRadius: '15px',
                            padding: '20px',
                            width: '300px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            style={{
                                width: '100%',
                                borderRadius: '10px',
                                marginBottom: '15px',
                            }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        />
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '10px',
                            color: '#FF00FF',
                        }}>
                            {project.title}
                        </h3>
                        <p style={{
                            fontSize: '0.9rem',
                            color: '#BBB',
                            marginBottom: '15px',
                        }}>
                            {project.description}
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '5px',
                            marginBottom: '15px',
                        }}>
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    style={{
                                        background: '#333',
                                        padding: '5px 10px',
                                        borderRadius: '10px',
                                        fontSize: '0.8rem',
                                        color: '#CCC',
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <motion.a
                                href={project.codeLink}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                style={{
                                    background: '#00C4FF',
                                    color: '#000',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    display: 'inline-block',
                                }}
                            >
                                Code
                            </motion.a>
                            <motion.a
                                href={project.demoLink}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                style={{
                                    background: '#FF00FF',
                                    color: '#000',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    display: 'inline-block',
                                }}
                            >
                                Demo
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
