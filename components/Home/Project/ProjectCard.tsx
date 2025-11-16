import Image from 'next/image'

type Props = {
    icon: string,
    title: string,
    para: string,
    live: string,
    github: string,
    delay: number
}
function ProjectCard({ icon, title, para, live, github, delay }: Props) {
    return (
        <div
            data-aos='zoom-in-right' data-aos-delay={delay}
            className='relative group duration-500 transition-all'>
            <a href={live} target='_blank'>
                
                <div className='relative overflow-hidden h-auto rounded-xl'>
                    <Image
                        src={icon}
                        width={700}
                        height={500}
                        alt='blog image'
                        className='object-cover rounded-xl'
                    />

                    <div className={`bg-cover transition-all duration-500 absolute top-0 hover:scale-110 `}>
                        <Image
                            src={icon}
                            width={700}
                            height={500}
                            alt='blog image'
                            className='object-cover  '
                        />
                    </div>
                </div>
            </a>
            <div className='py-3 '>
                <a
                    className='text-white hover:text-cyan-300 duration-500 font-semibold  text-2xl sm:text-3xl  lg:text-xl'
                    target='_blank'
                    href={live}
                >{title}</a>
                <div className='flex mt-4 items-center gap-10'>
                    <p className='text-gray-300 font-medium text-lg '>{para}</p>
                    <a
                        target='_blank'
                        href={github}
                        className='bg-blue-800 duration-500 transition-all   px-6 py-1 rounded-md hover:bg-blue-900 text-white uppercase '
                    >GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
