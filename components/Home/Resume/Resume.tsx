
import { PiCertificateBold } from 'react-icons/pi'
import ResumeCard from './ResumeCard'
import { FaBookOpenReader } from 'react-icons/fa6'

function Resume() {
    return (
        <div id='resume' className='lg:w-[90%] sm:w-[70%] mt-6 mx-auto flex flex-col items-center justify-center '>

            <div>
                <h1 className='text-gray-200 text-3xl sm:text-4xl  font-semibold' >My <span className='text-cyan-300 '>Education</span></h1>
            </div>
            <div
            
            className='flex flex-col items-center gap-10 mt-10'>
                <ResumeCard Icon={FaBookOpenReader} role="SSC Secondary School Certificate" dese='Completed foundational coursework in "Science"This period built a strong base in analytical thinking and discipline ' date='Jan 2016 - Dec 2021' />
                <ResumeCard Icon={FaBookOpenReader} role="Diploma in Computer Science And Technology" dese='Strong foundation in Data Structures, Algorithms, and Object-Oriented Programming (OOP) concepts.' date='Jan 2021 - Dec 2025' />
                <ResumeCard Icon={PiCertificateBold} role="Spoken English – HEXA’S, Zindabazar, Sylhet" dese='Improved communication and professional English fluency.' date='Jun 2024 - Nov 2024' />
                <ResumeCard Icon={PiCertificateBold} role="Self-Presentation (US English)" dese='Through a combination of in-class and online learning ' date='November 11, 2025' />
            </div>
        </div>
    )
}

export default Resume
