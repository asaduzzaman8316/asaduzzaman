'use client'
import { BsArrowRight } from 'react-icons/bs'

import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBancground'
import Link from 'next/link'
import Lanyard from '@/app/Animation/Lanyard'

function Hero() {
    return (
        <div className='relative w-full h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
            <ParticlesHero />
            <div className='  w-full'>
                {/* <Image
                    src={'/images/hero1.png'}
                    width={300}
                    height={300}
                    className=' rounded-xl shadow-cyan-800 shadow-xl  border-8 border-[#0c0c48aa]'
                    data-aos='fade-up'
                    alt='Hero image'
                    /> */}
                <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
                <div className='flex flex-col items-center absolute inset-x-0 bottom-44  xl:bottom-10  2xl:bottom-28 md:bottom-20 mx-auto max-w-8xl  px-2'>
                    <h1
                        data-aos='fade-up' data-aos-delay='200'
                        className='text-2xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-6xl  text-center font-bold tracking-wide '>
                        Creating web products,<br />brands,
                        <span
                            className='text-cyan-200'> and experiences</span>
                    </h1>
                    <h2
                        data-aos='fade-up' data-aos-delay='400'
                        className='mt-5 text-sm px-2 text-center sm:text-xl font-medium flex items-center'>
                        Hi! I&apos;m Asaduzzaman - A Passionate
                        <span className='text-cyan-200 font-bold  '>
                            <Typewriter options={{
                                strings: [
                                    'Fontend Devloper',
                                    'Web Devloper'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                wrapperClassName: 'pl-2'
                            }}
                            />
                        </span>
                    </h2>
                    <Link
                        href={'#projects'}
                        data-aos='fade-up' data-aos-delay='600'
                        className='mt-6 py-3 px-10 bg-blue-800 hover:bg-blue-900 transition-all duration-500 cursor-pointer rounded-full text-lg font-medium'>
                        <span>
                            See My Work
                        </span>
                        <BsArrowRight className='size-5 ml-2 inline-block' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
