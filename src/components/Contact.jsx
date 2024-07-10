import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                className='my-10 text-center text-4xl'
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.5 }}
            >
                Get In Touch
            </motion.h1>
            <motion.div
                className='text-center tracking-tighter'
                initial="hidden"
                whileInView="visible"
                variants={contentVariants}
                viewport={{ once: false, amount: 0.5 }}
            >
                <p className='my-4'>
                    {CONTACT.address}
                </p>
                <p className='my-4'>
                    {CONTACT.phoneNo}
                </p>
                <a href='#' className='border-b'>{CONTACT.email}</a>
            </motion.div>
        </div>
    );
};

export default Contact;
