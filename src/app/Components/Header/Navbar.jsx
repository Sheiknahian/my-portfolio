'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { FaX } from 'react-icons/fa6';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <div className='hidden md:block'>
                <nav className="p-5 flex justify-between items-center border-b border-white bg-[#111827] backdrop-blur-md">
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
                        <Link href={'/Projects'} scroll={true}>Projects</Link>
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
            <div className='md:hidden relative'>
                <nav className="p-5 flex justify-between items-center border-b border-white bg-[#111827] backdrop-blur-md">
                    <div>
                        <div onClick={handleMenu} className='text-2xl text-white'>
                        {
                            menu ?
                            <FaX></FaX>
                            :
                            <MdMenu></MdMenu>
                        }
                        </div>
                        {/* Menu Content */}
                        <div className={`absolute bg-gray-700 py-4 flex flex-col gap-4 text-white duration-500 ${menu ? 'top-15' : 'top-[-250]'}`}>
                            <Link className='mx-5 border-b-2 border-sky-500' href={'/#about'}>About</Link>
                            <Link className='mx-5 border-b-2 border-sky-500' href={'/#skills'}>Skills</Link>
                            <Link className='mx-5 border-b-2 border-sky-500' href={'/Projects'} scroll={true}>Projects</Link>
                            <Link className='mx-5 border-b-2 border-sky-500' href={'/#contact'}>Contact</Link>
                        </div>
                    </div>
                    <Link href={'/'}>
                        <h1 className="text-4xl font-extrabold text-white">
                            <span className="text-sky-500">&lt;</span>
                            SN
                            <span className="text-sky-500"> /&gt;</span>
                        </h1>
                    </Link>
                    <div className="flex gap-3">
                        <button className="rounded-lg border-2 cursor-pointer border-sky-700 px-4 py-2 font-semibold text-sky-700 bg-white hover:bg-black">
                            Resume
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;