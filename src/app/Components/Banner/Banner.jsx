'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GrGithub } from 'react-icons/gr';

const Banner = () => {
    return (
        <div className='min-h-screen px-5 flex justify-center items-center bg-gradient-to-b from-sky-900 via-slate-900 to-sky-900'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                >
                <div className='md:max-w-3xl flex flex-col items-center gap-5 text-center'>
                    <h4 className='text-2xl font-semibold text-white'>{"Hello, I'm"} <br /> <span className='text-4xl md:text-5xl text-sky-400 font-bold'>Sheikh Nahian</span></h4>
                    <p className='text-gray-300'>I'm a Full Stack Web Developer who enjoys turning ideas into modern and functional web applications. With experience in React, Next.js, Node.js, Express.js, and MongoDB, I build responsive, scalable, and user-friendly solutions. I'm passionate about writing clean code, learning new technologies, and creating digital experiences that help businesses and individuals achieve their goals.
                    </p>
                    <div className='flex items-center gap-2'>
                        <Link href={'/Projects'}><button className='px-6 py-3 rounded-xl bg-sky-500 font-semibold cursor-pointer hover:bg-sky-700 
                        hover:text-white'>View Projects</button></Link>
                        <a
                            href={'https://github.com/Sheiknahian'}
                            target="_blank"
                            className="rounded-xl border border-white px-6 py-3 flex items-center gap-1 font-medium transition hover:bg-gray-100 hover:text-black"
                            >
                                <GrGithub></GrGithub>
                                GitHub ↗
                        </a>
                    </div>
                </div>
            </motion.div>
            
        </div>
    );
};

export default Banner;