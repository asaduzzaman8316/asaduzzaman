import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function Social() {
    return (
        <div className='flex items-center mt-8 space-x-3'>
            <Link
                target='_blank'
                href={'https://www.facebook.com/asaduzzaman.dev/'}
                className='size-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-700 transition-all duration-500'>
                <FaFacebook className='text-white size-6' />
            </Link>

            <Link
                target='_blank'
                href={'https://www.instagram.com/asaduzzaman.dev/'}
                className='size-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-pink-500 transition-all duration-500'>
                <FaInstagram className='text-white size-6' />
            </Link>

            <Link
                target='_blank'
                href={'https://www.linkedin.com/in/mdasaduzzamancse/'}
                className='size-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-900 transition-all duration-500'>
                <FaLinkedin className='text-white size-6' />
            </Link>

            <Link
                target='_blank'
                href={'https://x.com/Asad_uzzaman2'}
                className='size-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-500'>
                <FaTwitter className='text-white size-6' />
            </Link>
            <Link
                target='_blank'
                href={'https://github.com/asaduzzaman8316'}
                className='size-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-500'>
                <FaGithub className='text-white size-6' />
            </Link>
        </div>
    )
}

export default Social
