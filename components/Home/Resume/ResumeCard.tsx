import React from 'react'
import { IconType } from 'react-icons'
type Props = {
    Icon: IconType,
    role: string,
    date: string,
    dese: string
}
function ResumeCard({ Icon, role, date, dese }: Props) {
    return (
        <div className='mb-6 w-[80%]'>
            <div className='flex  items-start space-x-6 bg-blue-900/20 transition-all  p-4 sm:p-8 rounded-md w-full'>
                <div className='sm:size-14 size-10 bg-blue-950 rounded-full flex items-center justify-center flex-col'>
                    <Icon className='sm:size-8 size-6 text-white' />
                </div>
                <div className='flex-1 '>
                    <h1 className=' mb-3 sm:px-6 sm:py-1.5 px-4 py-1 bg-gray-200 rounded-full text-gray-600 w-fit sm:text-lg text-sm font-bold'>{date}</h1>
                    <h1 className='text-gray-200 pb-2 text-xl sm:text-2xl font-semibold'>{role}</h1>
                    <p className='text-gray-300 text-sm sm:text-base'>{dese}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard
