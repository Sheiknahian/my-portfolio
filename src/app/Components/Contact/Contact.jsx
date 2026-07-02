'use client'
import React from 'react';
import H3Text from '../h3Text';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {
    return (
        <div className='mx-5 mb-10'>
            <H3Text>Contact</H3Text>
            <div className='mt-15 grid grid-cols-2 gap-10'>
                <div className='flex flex-col justify-center'>
                    <motion.div 
                    initial={{ opacity: 0, x: -600 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-2 gap-5 text-black'>
                        <div className='bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaEnvelope></FaEnvelope> Email</p>
                            <p>sheiknahian06@gmail.com</p>
                        </div>
                        <div className='bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaGithub></FaGithub> Github</p>
                            <a href='https://github.com/Sheiknahian' className='hover:underline hover:text-blue-500'>https://github.com/Sheiknahian</a>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className='my-12'>
                        <h4 className='text-sky-500 text-xl font-bold'>Get In Touch</h4>
                        <p>Have a project in mind or want to collaborate?
                        Feel free to reach out. I'm always open to discussing new opportunities.</p>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: -600 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-2 gap-5 text-black'>
                        <div className='bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'>
                                <TbBrandFiverr className='text-green-500'></TbBrandFiverr> Fiverr</p>
                            <a href='https://www.fiverr.com/sheikh_nahian' className='hover:underline hover:text-blue-500'>https://www.fiverr.com/sheikh_na...</a>
                        </div>
                        <div className='bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaLinkedin className='text-blue-500'></FaLinkedin> Linkedin</p>
                            <a href='https://www.linkedin.com/in/sheik-nahian-b9131a419/' className='hover:underline hover:text-blue-500'>https://www.linkedin.com/nahi...</a>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: -600 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-2 gap-5 text-black mt-5'>
                        <div className='bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaFacebook className='text-blue-500'></FaFacebook> Facebook</p>
                            <a href='https://www.facebook.com/nahianology' className='hover:underline hover:text-blue-500'>https://www.facebook.com/nahian...</a>
                        </div>
                        <div className='bg-white p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaMapMarkerAlt className='text-red-500'></FaMapMarkerAlt> Location</p>
                            <p>Mirpur-10, Dhaka, Bangladesh</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                initial={{ opacity: 0, x: 600 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                className='flex justify-center items-center bg-white rounded-2xl p-10'>
                    <form action={'https://api.web3forms.com/submit'} method='POST' className='flex flex-col items-center'>
                        <h4 className='font-bold text-2xl text-sky-600 mb-5'>{"Let's Build Something Amazing Together"}</h4>
                        <input name='access_key' defaultValue={'8a7eee20-497f-4f26-85d1-04f86c7ab6dc'} type="text" className='hidden' />
                        <input name='subject' defaultValue={'New Message From Portfolio'} type="text" className='hidden' />
                        <div className='my-2'>
                            <p className='text-sky-600 font-semibold'>Name</p>
                            <input name='name' className='bg-[#0B1120] text-white px-2 py-2 w-100 rounded-lg' type="text" placeholder='Type your name' required/>
                        </div>
                        <div className='my-2'>
                            <p className='text-sky-600 font-semibold'>Email</p>
                            <input name='email' className='bg-[#0B1120] text-white px-2 py-2 w-100 rounded-lg' type="email" placeholder='Type your email' required/>
                        </div>
                        <div className='my-2'>
                            <p className='text-sky-600 font-semibold'>Your Message</p>
                            <textarea name='message' className='bg-[#0B1120] text-white px-2 py-2 w-100 rounded-lg' placeholder='You can say something...' required/>
                        </div>
                        <input className='w-100 rounded-lg bg-linear-to-r to-sky-300 font-semibold
                    cursor-pointer from-sky-900 px-4 py-2 font-medium text-black hover:text-white hover:bg-black' type="submit" defaultValue={'Send Message'}/>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;