'use client'
import React from 'react';
import H3Text from '../h3Text';
import Counter from '../Counter';
import { motion } from 'framer-motion';
import { FaBolt, FaBookOpen, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <div
        className='mt-20 mb-20 mx-5'>
            <H3Text>About Me</H3Text>
            <div className='mt-15 grid grid-cols-4 gap-10'>
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='bg-white rounded-2xl h-50 flex flex-col items-center p-5 text-center justify-center'>
                    <div className='text-green-500 text-3xl bg-gray-200 p-4 rounded-full'>
                        <FaPuzzlePiece></FaPuzzlePiece>
                    </div>
                    <h4 className='text-lg font-bold text-sky-500 mt-2'>Problem Solver</h4>
                    <p className='text-gray-700'>I enjoy breaking down complex challenges into simple and effective solutions.</p>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='bg-white rounded-2xl h-50 flex flex-col items-center p-5 text-center justify-center'>
                    <div className='text-blue-500 text-3xl bg-gray-200 p-4 rounded-full'>
                        <FaBookOpen></FaBookOpen>
                    </div>
                    <h4 className='text-lg font-bold text-sky-500 mt-2'>Continuous Learner</h4>
                    <p className='text-gray-700'>Always exploring new technologies and improving my skills through practice and real-world projects.</p>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 110 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='bg-white rounded-2xl h-50 flex flex-col items-center p-5 text-center justify-center'>
                    <div className='text-yellow-500 text-3xl bg-gray-200 p-4 rounded-full'>
                        <FaBolt></FaBolt>
                    </div>
                    <h4 className='text-lg font-bold text-sky-500 mt-2'>Clean Code</h4>
                    <p className='text-gray-700'>I focus on writing clean, maintainable, and scalable code for long-term success.</p>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 140 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='bg-white rounded-2xl h-50 flex flex-col items-center p-5 text-center justify-center'>
                    <div className='text-orange-500 text-3xl bg-gray-200 p-4 rounded-full'>
                        <FaRocket></FaRocket>
                    </div>
                    <h4 className='text-lg font-bold text-sky-500 mt-2'>Project Builder</h4>
                    <p className='text-gray-700'>Passionate about turning ideas into functional and user-friendly web applications.</p>
                </motion.div>

                
                <motion.div 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='col-span-3 rounded-2xl flex flex-col justify-end gap-10'>
                    <div>
                        <h4 className='text-2xl text-sky-500 font-semibold'>Full Stack Web Developer & Lifelong Learner</h4>
                        <p className='mt-3 text-white'>I'm Sheikh Nahian, a passionate Full Stack Web Developer who enjoys building modern, responsive, and user-friendly web applications. I specialize in React, Next.js, Node.js, Express.js, and MongoDB, and I love turning ideas into real-world digital solutions.

                        My focus is on writing clean, maintainable code and creating seamless user experiences. I am constantly learning new technologies and improving my skills to build faster, more scalable, and more efficient applications.

                        Whether it's a portfolio website, business website, dashboard, or full-stack web application, I enjoy solving problems and bringing creative ideas to life through code.
                        </p>
                    </div>
                    <div className='text-black text-2xl font-bold text-center grid grid-cols-3 gap-10'>
                        <p className='bg-white rounded-2xl p-5'><span className='text-sky-600'><Counter target={7}></Counter>+</span> Projects</p>
                        <p className='bg-white rounded-2xl p-5'><span className='text-sky-600'><Counter target={10}></Counter>+</span> Technologies</p>
                        <p className='bg-white rounded-2xl p-5'><span className='text-sky-600'>24/7</span> Learning</p>
                    </div>
                </motion.div>
                <motion.img 
                initial={{ opacity: 0, y: 140 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className='rounded-2xl' src={'/developer.avif'} alt="" />

            </div>
        </div>
    );
};

export default About;