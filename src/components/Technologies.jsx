import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiPython, SiMysql } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaJava } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: 0, scale: 1, rotate: 0 },
    animate: {
        y: [10, -10],
        scale: [1, 1.1],
        rotate: [0, 5, -5, 0],
        transition: {
            y: {
                duration: duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            },
            scale: {
                duration: duration * 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            },
            rotate: {
                duration: duration * 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl' style={{ color: '#61DAFB' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-7xl' style={{ color: '#ffffff' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl' style={{ color: '#47A248' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl' style={{ color: '#339933' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className='text-7xl' style={{ color: '#4479A1' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-7xl' style={{ color: '#007396' }} />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPython className='text-7xl' style={{ color: '#306998' }} />
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Technologies;
