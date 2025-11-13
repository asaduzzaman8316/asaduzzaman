import Image from 'next/image'
import React from 'react'
import Blogtag from './Blogtag'
type Props = {
    date: string,
    name: string,
    image: string
}
function BlogCard({ date, name, image }: Props) {
    return (
        <div>
            <Image
                src={image}
                width={600}
                height={500}
                alt='blog image'
                className='object-cover rounded-xl'
            />
            <div className='mt-3 space-y-4'>
                <p className='mt-4 text-gray-400 font-medium text-base sm:text-lg'>{date}</p>
                <a href="#"
                    className='text-white  text-lg sm:text-xl  font-bold duration-300 hover:text-cyan-300
                '
                >{name}</a>

                <div className='mt-4 flex gap-2 items-center'>
                    <Blogtag name='Tailwind' />
                    <Blogtag name='Next Js' />
                    <Blogtag name='React' />
                </div>
            </div>
        </div>
    )
}

export default BlogCard
