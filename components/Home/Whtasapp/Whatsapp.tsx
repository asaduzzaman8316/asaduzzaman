'use client'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

function Whatsapp() {
    return (
        <div className='fixed bottom-20 right-5 z-50'>
            <div className='bg-blue-950/50 cursor-pointer text-white rounded-full size-12 flex justify-center items-center'>
                <Link target='_blank' href="https://wa.me/+8801610839202"><FaWhatsapp className='text-2xl text-white' /></Link>
            </div>
        </div>
    )
}

export default Whatsapp
