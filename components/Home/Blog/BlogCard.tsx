
import Image from 'next/image'

import Blogtag from './Blogtag'
import Link from 'next/link'
type Props = {
    date: string,
    name: string,
    image: string,
    id: string
}
function BlogCard({ id, date, name, image }: Props) {
    return (
        <div>
            <div className='relative overflow-hidden h-auto rounded-xl'>
                <Image
                    src={image}
                    width={600}
                    height={500}
                    alt='blog image'
                    className='object-cover rounded-xl'
                />

                <div className={`bg-cover transition-all duration-500 absolute top-0 hover:scale-110 `}>
                    <Image
                        src={image}
                        width={600}
                        height={500}
                        alt='blog image'
                        className='object-cover  '
                    />
                </div>
            </div>

            <div className='mt-3 space-y-4'>
                <p className='mt-4 text-gray-400 font-medium text-base sm:text-lg'>{date}</p>
                <Link href={`/${id}`}
                    className='text-white  text-lg sm:text-xl  font-bold duration-300 hover:text-cyan-300
                '
                >{name}</Link>

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
