'use client'
import React, { useRef } from 'react';
import H3Text from '../h3Text';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHtml5 } from 'react-icons/fa';
import { backend, deployment, frontend, tools } from '../badges';

const Skills = () => {


    return (
        <div className=''>
            <H3Text>Skills & Technologies</H3Text>
            <div className="relative mt-50">
                {/* Timeline Progress */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-sky-500 rounded-full"/>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative flex items-center mb-80">
                    <div className="absolute border border-2 border-sky-500 shadow-lg shadow-white left-3/20 w-[30%] bg-white p-5 rounded-xl">
                        <h4 className='text-sky-600 text-xl font-bold'>Frontend Development</h4>
                        <p className='text-gray-700'>Building responsive, interactive, and user-friendly interfaces with modern frontend technologies and best practices.</p>
                        <h4 className='text-sky-600 text-xl font-bold mt-5'>Technologies</h4>
                        <div className='flex flex-wrap gap-3 mt-2'>
                        {
                            frontend?.map((skill, index)=>
                                <span className={`${skill.className} flex items-center gap-2 px-2 rounded-full`} key={index}>
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            )
                        }
                        </div>
                    </div>
                    <div className="absolute left-[45%] w-[5%] h-1 bg-sky-500"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 z-10"></div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative flex items-center mb-80">
                    <div className="absolute border border-2 border-sky-500 shadow-lg shadow-white right-3/20 w-[30%] bg-white p-5 rounded-xl">
                        <h4 className='text-sky-600 text-xl font-bold'>Backend Development</h4>
                        <p className='text-gray-700'>Developing secure and scalable server-side applications, APIs, and database solutions for modern web platforms.</p>
                        <h4 className='text-sky-600 text-xl font-bold mt-5'>Technologies</h4>
                        <div className='flex flex-wrap gap-3 mt-2'>
                        {
                            backend?.map((skill, index)=>
                                <span className={`${skill.className} flex items-center gap-2 px-2 rounded-full`} key={index}>
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            )
                        }
                        </div>
                    </div>
                    <div className="absolute right-[45%] w-[5%] h-1 bg-sky-500"></div>

                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 z-10"></div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative flex items-center mb-80">
                    <div className="absolute border border-2 border-sky-500 shadow-lg shadow-white left-3/20 w-[30%] bg-white p-5 rounded-xl">
                        <h4 className='text-sky-600 text-xl font-bold'>Deployment</h4>
                        <p className='text-gray-700'>Ensuring applications are accessible, optimized, and production-ready through modern deployment workflows.</p>
                        <h4 className='text-sky-600 text-xl font-bold mt-5'>Technologies</h4>
                        <div className='flex flex-wrap gap-3 mt-2'>
                        {
                            deployment?.map((skill, index)=>
                                <span className={`${skill.className} flex items-center gap-2 px-2 rounded-full`} key={index}>
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            )
                        }
                        </div>
                    </div>
                    <div className="absolute left-[45%] w-[5%] h-1 bg-sky-500"></div>

                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 z-10"></div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative flex items-center mb-80">
                    <div className="absolute border border-2 border-sky-500 shadow-lg shadow-white right-3/20 w-[30%] bg-white p-5 rounded-xl">
                        <h4 className='text-sky-600 text-xl font-bold'>Tools & Workflow</h4>
                        <p className='text-gray-700'>Using industry-standard tools for version control, collaboration, testing, and efficient development.</p>
                        <h4 className='text-sky-600 text-xl font-bold mt-5'>Technologies</h4>
                        <div className='flex flex-wrap gap-3 mt-2'>
                        {
                            tools?.map((skill, index)=>
                                <span className={`${skill.className} flex items-center gap-2 px-2 rounded-full`} key={index}>
                                    {skill.icon}
                                    {skill.name}
                                </span>
                            )
                        }
                        </div>
                    </div>
                    <div className="absolute right-[45%] w-[5%] h-1 bg-sky-500"></div>

                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-500 z-10"></div>
                </motion.div>

            </div>
        </div>
    );
};

export default Skills;