'use client'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav className="p-5 flex justify-between items-center border-b border-white bg-[#111827] backdrop-blur-md">
                {/* <Link href={'/'}><h2 className="text-3xl text-white font-bold px-4 py-1 rounded-full bg-linear-to-r to-sky-200 from-sky-900">Next <span className='text-sky-800'>Journey</span></h2></Link> */}
                <Link href={'/'}>
                    <h1 className="text-4xl font-extrabold text-white">
                        <span className="text-sky-500">&lt;</span>
                        SN
                        <span className="text-sky-500"> /&gt;</span>
                    </h1>
                </Link>
                <div className="flex gap-10 font-semibold items-center text-white">
                    <Link href={'/#about'}>About</Link>
                    <Link href={'/#skills'}>Skills</Link>
                    <Link href={'/Projects'}>Projects</Link>
                    <Link href={'/#contact'}>Contact</Link>
                </div>
                <div className="flex gap-3">
                    <button className="rounded-lg border-2 cursor-pointer border-sky-700 px-4 py-2 font-semibold text-sky-700 bg-white hover:bg-black">
                        Resume
                    </button>
                    <button className="rounded-lg bg-linear-to-r to-sky-300 font-semibold
                    cursor-pointer from-sky-900 px-4 py-2 font-medium text-black hover:text-white hover:bg-black">
                        Hire Me
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;