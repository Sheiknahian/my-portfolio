'use client'
import React, { useEffect, useState } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    return (
        <div className='mx-20 mb-50'>
            <H3Text>Contact</H3Text>
            <div className='mt-15 grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div className='flex flex-col justify-center'>
                    <motion.div 
                    initial={{ opacity: 0, x: isMobile ? -600 : -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-2 gap-5 text-black'>
                        <div className='bg-white border-2 border-sky-500 shadow-sm shadow-sky-500 p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaEnvelope></FaEnvelope> Email</p>
                            <p>sheiknahian06@...</p>
                        </div>
                        <div className='bg-white border-2 border-sky-500 shadow-sm shadow-sky-500 p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaMapMarkerAlt className='text-red-500'></FaMapMarkerAlt> Location</p>
                            <p>Mirpur-10, Dhaka, Bangladesh</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className='my-12'>
                        <h4 className='text-sky-500 text-xl font-bold'>Get In Touch</h4>
                        <p className='text-gray-200'>Have a project in mind or want to collaborate?
                        Feel free to reach out. I am always open to discussing new opportunities.</p>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: isMobile ? -600 : -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-2 gap-5 text-black'>
                        <div className='bg-white border-2 border-sky-500 shadow-sm shadow-sky-500 p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'>
                                <TbBrandFiverr className='text-green-500'></TbBrandFiverr> Fiverr</p>
                            <a href='https://www.fiverr.com/sheikh_nahian' className='hover:underline hover:text-blue-500'>Sheikh Nahian</a>
                        </div>
                        <div className='bg-white border-2 border-sky-500 shadow-sm shadow-sky-500 p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaLinkedin className='text-blue-500'></FaLinkedin> Linkedin</p>
                            <a href='https://www.linkedin.com/in/sheik-nahian-b9131a419/' className='hover:underline hover:text-blue-500'>Sheikh Nahian</a>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: isMobile ? -600 : -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='grid grid-cols-2 gap-5 text-black mt-5'>
                        <div className='bg-white border-2 border-sky-500 shadow-sm shadow-sky-500 p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaFacebook className='text-blue-500'></FaFacebook> Facebook</p>
                            <a href='https://www.facebook.com/nahianology' className='hover:underline hover:text-blue-500'>Sheikh Nahian</a>
                        </div>
                        <div className='bg-white border-2 border-sky-500 shadow-sm shadow-sky-500 p-3 rounded-2xl flex flex-col items-center justify-center gap-1'>
                            <p className='text-lg font-semibold flex items-center gap-1'><FaGithub></FaGithub> Github</p>
                            <a href='https://github.com/Sheiknahian' className='hover:underline hover:text-blue-500'>Sheikh Nahian</a>
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                initial={{ opacity: 0, y: isMobile ? 200 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='flex justify-center items-center rounded-2xl'>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="relative mx-auto w-full border-2 border-sky-500/10 max-w-2xl overflow-hidden rounded-3xl bg-[#0B1120] p-6 shadow-2xl backdrop-blur-xl md:p-10"
                        >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                        {/* Header */}
                        <div className="relative mb-8 text-center">
                            <span className="mb-3 inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-xs font-medium tracking-widest text-sky-400 uppercase">
                            Get In Touch
                            </span>

                            <h4 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                            Let's Build Something{" "}
                            <span className="text-sky-400">Amazing</span> Together
                            </h4>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
                            Have a project in mind or want to work together? Drop me a message and
                            I'll get back to you soon.
                            </p>
                        </div>

                        {/* Hidden Fields */}
                        <input
                            name="access_key"
                            defaultValue="7e17fe2a-530c-4d63-b7c6-9010255ccdc8"
                            type="hidden"
                        />

                        <input
                            name="subject"
                            defaultValue="New Message From Portfolio"
                            type="hidden"
                        />

                        {/* Inputs */}
                        <div className="relative space-y-5">

                            {/* Name */}
                            <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-sky-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-sky-400/10"
                            />
                            </div>

                            {/* Email */}
                            <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-sky-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-sky-400/10"
                            />
                            </div>

                            {/* Message */}
                            <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Tell me a little about your project..."
                                required
                                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition duration-300 focus:border-sky-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-sky-400/10"
                            />
                            </div>

                            {/* Submit */}
                            <button
                            type="submit"
                            className="group relative w-full overflow-hidden rounded-xl bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20 active:scale-[0.98]"
                            >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Send Message
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                                </span>
                            </span>
                            </button>
                        </div>
                        </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;