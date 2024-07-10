import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-8">
            <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center">
                    <h1 className="text-xl font-bold text-white">Sr</h1>
                </div>
                <span className="text-xl font-semibold text-white">Sneha Rani</span>
            </div>

            <div className="flex space-x-6 items-center">
                <a href="https://www.linkedin.com/in/sneha-rani-564ba4220/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-200">
                    <FaLinkedin className="h-6 w-6 text-white" />
                </a>
                <a href="https://github.com/sneha-2510" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-200">
                    <FaGithub className="h-6 w-6 text-white" />
                </a>
                <a href="https://leetcode.com/u/ranisnehaaa/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-200">
                    <SiLeetcode className="h-6 w-6 text-white" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
