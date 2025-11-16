'use client'
import { BsArrowRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import ParticlesHero from './ParticleBancground'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'

// Lazy load Lanyard component with no SSR
const Lanyard = dynamic(() => import('@/app/Animation/Lanyard'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-500/10 rounded-md animate-pulse" />
        </div>
    )
})

function Hero() {
    const [shouldRenderLanyard, setShouldRenderLanyard] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        // Delay Lanyard rendering for better initial load
        const timer = setTimeout(() => {
            setShouldRenderLanyard(true)
        }, 100)

        // Detect scrolling to pause heavy animations
        let scrollTimeout: NodeJS.Timeout
        const handleScroll = () => {
            setIsScrolling(true)
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false)
            }, 150)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            clearTimeout(timer)
            clearTimeout(scrollTimeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            id="hero"
            className='relative w-full h-screen flex items-center justify-center text-white overflow-hidden flex-col'
        >
            <ParticlesHero />

            <div className='w-full h-full'>
                {/* Only render Lanyard when ready and not scrolling heavily */}
                {shouldRenderLanyard && (
                    <Suspense fallback={<div className="w-full h-full" />}>
                        <div style={{
                            opacity: isScrolling ? 0.7 : 1,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: isScrolling ? 'none' : 'auto'
                        }}>
                            <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
                        </div>
                    </Suspense>
                )}

                <div className='flex flex-col items-center absolute inset-x-0 bottom-14  mx-auto max-w-8xl px-2 z-10'>
                    <h1
                        data-aos='fade-up'
                        data-aos-delay='200'
                        className='text-2xl sm:text-4xl md:text-5xl lg:text-4xl 2xl:text-6xl text-center font-bold tracking-wide'
                    >
                        Creating web products,<br />brands,
                        <span className='text-cyan-200'> and experiences</span>
                    </h1>

                    <h2
                        data-aos='fade-up'
                        data-aos-delay='400'
                        className='mt-5 text-sm px-2 text-center sm:text-xl font-medium flex items-center flex-wrap justify-center'
                    >
                        Hi! I&apos;m Asaduzzaman - A Passionate
                        <span className='text-cyan-200 font-bold'>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Frontend Developer',
                                        'Web Developer'
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
                        data-aos='fade-up'
                        data-aos-delay='600'
                        className='mt-6 py-3 px-10 bg-blue-800 hover:bg-blue-900 transition-all duration-500 cursor-pointer rounded-full text-lg font-medium inline-flex items-center'
                    >
                        <span>See My Work</span>
                        <BsArrowRight className='size-5 ml-2' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero