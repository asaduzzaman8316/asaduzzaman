"use client";
import { FaCode } from 'react-icons/fa'
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react';
type props = {
    openNav: () => void;
}

function DestopNavbar({ openNav }: props) {
    const [navBg, setNavBg] = useState(false)
    useEffect(() => {
        const hnadler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false)
        };
        window.addEventListener('scroll', hnadler);
        return () => window.removeEventListener('scroll', hnadler)
    }, [])
    return (
        <div className={`transition-all duration-300 h-[12vh] z-100 fixed w-full ${navBg ? 'bg-[#0f142ed9] shadow-md ' : 'fixed'} `}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                <Link href={'/'} className='flex items-center space-x-2'>
                    <div className='size-10 bg-white rounded-full flex items-center justify-center flex-col'>
                        <FaCode className='size-5 text-black' />
                    </div>
                    <h1 className='text-lg hidden sm:block md:text-2xl text-white font-bold'>Asaduzzaman</h1>
                </Link>
                <div className='hidden lg:flex items-center space-x-10'>
                    {
                        Navlinks.map((link) => {
                            return (
                                <Link
                                    href={link.url}
                                    key={link.id}
                                    scroll={true}
                                    className='hover:text-cyan-300 text-base text-white font-medium transition-all duration-500 hover:-translate-y-1 ) {
                                    }'
                                >
                                    <p>{link.label}</p>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='flex items-center space-x-4'>
                    <a href='/images/resume-(2).pdf' download='Asaduzzaman-CV.pdf' className='px-8 py-3.5 cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
                        <BiDownload className='size-5' />
                        Download CV
                    </a>
                    <HiBars3BottomRight
                        onClick={openNav}
                        className='size-8 cursor-pointer text-white lg:hidden ' />
                </div>

            </div>
        </div>
    )
}

export default DestopNavbar
