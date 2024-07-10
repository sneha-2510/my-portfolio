import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from "../constants";

const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className='my-20 text-center text-4xl'
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.5 }}
            >
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            className='w-full lg:w-1/4'
                            initial="hidden"
                            whileInView="visible"
                            variants={leftVariants}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <img
                                src={project.image}
                                height={150}
                                width={150}
                                alt={project.title}
                                className='mb-6 rounded'
                            />
                        </motion.div>
                        <motion.div
                            className='w-full max-w-xl lg:w-3/4'
                            initial="hidden"
                            whileInView="visible"
                            variants={rightVariants}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <h6 className='mb-2 font-semibold'>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-400 hover:underline"
                                >
                                    {project.title}
                                </a>
                            </h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-100'>
                                    {tech}
                                </span>
                            ))}
                            <div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
