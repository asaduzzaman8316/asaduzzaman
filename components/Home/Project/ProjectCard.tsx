import Image from 'next/image'
import React from 'react'
type Props = {
    icon: string,
    title: string,
    para: string,
    live: string,
    github: string,
    delay:number
}
function ProjectCard({ icon, title, para, live, github,delay }: Props) {
    return (
        <div
            data-aos='zoom-in-right'  data-aos-delay={delay}
            className='relative group duration-500 transition-all'>
            <a href={live}>
                <Image
                    src={icon}
                    width={600}
                    height={600}
                    alt='Asad-Mart, Asad-Shop, e-commerce'
                    className='rounded-md'
                />
            </a>
            <div className='py-3'>
                <a
                    className='text-white hover:text-cyan-300 duration-500 font-semibold  text-2xl sm:text-3xl lg:text-2xl'
                    target='-blank'
                    href={live}
                >{title}</a>
                <div className='flex  items-center gap-10'>
                    <p className='text-gray-300 font-medium text-xl '>{para}</p>
                    <a
                        target='_blank'
                        href={github}
                        className='bg-blue-800 duration-500 transition-all   px-8 py-1.5 rounded-md hover:bg-blue-900 text-white uppercase '
                    >GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
