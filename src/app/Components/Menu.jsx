'use client'
import Link from "next/link"
import { useState } from "react"
import { FaX } from "react-icons/fa6"
import { MdMenu } from "react-icons/md"

const Menu = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
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
    )
}

export default Menu