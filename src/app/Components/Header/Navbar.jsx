import React from 'react';
import Link from 'next/link';
import Menu from '../Menu';
import NavbarTabs from '../NavbarTabs';

const Navbar = () => {
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
                    <NavbarTabs></NavbarTabs>
                    <div className="flex gap-3">
                        <a
                            href="/Resume-Sheikh-Nahian.pdf"
                            download="Resume-Sheikh-Nahian.pdf"
                            className="rounded-lg border-2 cursor-pointer border-sky-700 px-4 py-2 font-semibold text-sky-700 bg-white hover:bg-black hover:text-white"
                        >
                            Resume
                        </a>

                        <a
                            href="https://www.fiverr.com/sheikh_nahian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-linear-to-r from-sky-900 to-sky-300 px-4 py-2 font-semibold cursor-pointer text-black hover:text-white"
                        >
                            Hire Me
                        </a>
                    </div>
                </nav>
            </div>
            <div className='md:hidden relative'>
                <nav className="p-5 flex justify-between items-center border-b border-white bg-[#111827] backdrop-blur-md">
                    <Menu></Menu>
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