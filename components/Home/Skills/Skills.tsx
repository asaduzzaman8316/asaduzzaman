"use client"
import { SiCplusplus, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbCircleLetterC } from 'react-icons/tb'
import Tilt from 'react-parallax-tilt'
function Skills() {
    const skils = [
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
            parcentage: 90
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
            parcentage: 80
        },
        {
            name: 'Next.js',
            icon: <SiNextdotjs />,
            parcentage: 85
        },
        {
            name: 'React.js',
            icon: <SiReact />,
            parcentage: 93
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />,
            parcentage: 95
        },
        {
            name: 'C',
            icon: <TbCircleLetterC />,
            parcentage: 96
        },
        {
            name: 'C++',
            icon: <SiCplusplus />,
            parcentage: 95
        }

    ]
    return (
        <div id='skills' className='text-white py-16'>
            <h1 className='text-gray-200 text-center text-3xl sm:text-4xl  font-semibold' >My  <span className='text-cyan-300 '>Skills</span></h1>
            <div className='flex flex-wrap justify-center gap-12 mt-24'>
                {
                    skils.map((skill, i) => (
                        <Tilt key={skill.name} scale={1.5} transitionSpeed={800} >
                            <div
                                data-aos='flip-right'
                                data-aos-anchor-placement='top-bottom'
                                data-aos-delay={i * 100}
                                className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                                <div className='text-5xl mb-4 text-gray-300'>
                                    {skill.icon}
                                </div>
                                <p className='text-2xl font-semibold '>{skill.parcentage}%</p>
                                <p className='text-purple-400 mt-1'>{skill.name}</p>
                            </div>
                        </Tilt>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
