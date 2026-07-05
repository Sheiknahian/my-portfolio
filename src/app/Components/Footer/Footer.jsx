import Link from 'next/link';
import React from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='bg-black text-white py-20 md:py-none md:p-30'>
            <div className='flex flex-col gap-10 items-center justify-center'>
                <div className='flex flex-col gap-10 md:flex-row items-center md:gap-50'>
                    <div>
                        <Link href={'/'}>
                            <h1 className="text-4xl font-extrabold text-white">
                                <span className="text-sky-500">&lt;</span>
                                SN
                                <span className="text-sky-500"> /&gt;</span>
                            </h1>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center gap-10'>
                        <div className='text-3xl flex items-center gap-10'>
                            <span className='text-blue-500'><FaFacebook></FaFacebook></span>
                            <span className='text-green-500'><TbBrandFiverr></TbBrandFiverr></span>
                            <span className='text-white'><FaGithub></FaGithub></span>
                            <span className='text-blue-500'><FaLinkedin></FaLinkedin></span>
                        </div>
                        <div className="flex gap-10 font-semibold items-center text-white">
                            <Link href={'/#about'}>About</Link>
                            <Link href={'/#skills'}>Skills</Link>
                            <Link href={'/Projects'}>Projects</Link>
                            <Link href={'/#contact'}>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className='text-center space-y-2 text-gray-300'>
                    <p>© 2026 Sheikh Nahian. All Rights Reserved.</p>
                    <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;