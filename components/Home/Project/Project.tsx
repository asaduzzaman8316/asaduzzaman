// Custom hook to check if the screen is mobile-sized (less than md breakpoint)
const useIsMobile = (breakpoint = 668) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Set initial state
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
};


import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

function Project() {
    const isMobile = useIsMobile();
    const scenRef = useRef(null)
    const projects = useMemo(() => [
        {
            id: '01',
            title: 'Modern E-Commerce in TypeScript',
            link: 'https://asad-mart.vercel.app/',
            bg: '#3c2752',
            image: isMobile ? '/images/mb2.png' : '/images/p1.png',
            git: 'https://github.com/asaduzzaman8316/Asad-Shop'
        },
        {
            id: '02',
            title: 'E-Learning Management System',
            link: 'https://lms8316.vercel.app/',
            bg: '#0284c7',
            image: isMobile ? '/images/mb1.png' : '/images/l2.png',
            git: 'https://github.com/asaduzzaman8316/learning-management-system'
        },
        {
            id: '03',
            title: 'Modern E-Commerce in JavaScript',
            link: 'https://asad-e-commerce.vercel.app/',
            bg: '#ec4899',
            image: '/images/p5.png',
            git: 'https://github.com/asaduzzaman8316/Asad-E-Commerce'
        },
        {
            id: '04',
            title: 'Sylhet PolyTechnic Institute',
            link: 'https://spi-smart-campus.vercel.app/',
            bg: '#7c3aed',
            image: isMobile ? '/images/spi.png' : '/images/spi.png',
            git: 'https://github.com/asaduzzaman8316/spi-smart-campus'
        },
    ], [])

    const { scrollYProgress } = useScroll({
        target: scenRef,
        offset: ['start start', 'end end']
    })

    const changePoint = projects.map((_, i) => (i + 1) / projects.length)
    const [activeIndex, setActiveIndex] = useState(0)

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        const idx = changePoint.findIndex((t) => v <= t)
        setActiveIndex(idx === -1 ? changePoint.length - 1 : idx)
    })

    const activeProject = projects[activeIndex];

    return (
        <section
            id='projects'
            ref={scenRef}
            className='text-white'
            style={{
                height: `${100 * projects.length}vh`,
                backgroundColor: activeProject.bg,
                transition: "background-color 400ms ease"
            }}
        >
            <div className='sticky top-0 left-0 right-0 h-screen flex flex-col overflow-visible pt-20 md:pt-24'>
                <h2 className='text-3xl md:text-4xl font-semibold text-center mb-6 md:mb-8 px-4'>
                    Projects
                </h2>

                <div className='relative flex-1 flex items-center justify-center px-4'>
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`absolute  flex flex-col w-[85%] max-w-[1200px] items-center justify-center transition-all duration-500 ${activeIndex === idx ? 'opacity-100 z-20' : 'opacity-0 z-0'
                                }`}
                        >
                            <div className='w-full max-w-5xl mx-auto'>
                                <AnimatePresence mode='wait'>
                                    {activeIndex === idx && (
                                        <motion.h3
                                            key={project.id}
                                            initial={{ opacity: 0, y: -30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 30 }}
                                            transition={{ duration: 0.5, ease: 'easeOut' }}
                                            className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 md:mb-8 italic'
                                        >
                                            {project.title}
                                        </motion.h3>
                                    )}
                                </AnimatePresence>

                                <div
                                    className='relative w-full h-[50vh] md:h-[55vh] overflow-hidden rounded-lg bg-black/20 shadow-2xl'
                                    style={{
                                        transition: 'box-shadow 250ms ease'
                                    }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className='object-cover h-full w-full'
                                        style={{
                                            filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.65))',
                                            transition: 'filter 200ms ease'
                                        }}
                                        loading='lazy'
                                    />
                                </div>

                                <div className='flex gap-4 justify-center mt-6'>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors'
                                    >
                                        Live Demo
                                    </Link>
                                    <a
                                        href={project.git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors'
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center pb-8 text-sm opacity-70'>
                    {activeIndex + 1} / {projects.length}
                </div>
            </div>
        </section>
    )
}

export default Project