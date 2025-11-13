import React from 'react'
import ServicesCard from './ServicesCard'

function Services() {
    return (
        <div className='py-16 mx-auto '>
            <div className=' '>
                <h1 className='text-2xl md:text-4xl xl:text-5xl text-white font-bold text-center'>
                    Colleborate with brand <br />
                    and agencies to create <br />
                    impactful results
                </h1>
                <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center '>
                    <ServicesCard  
                    icon="/images/s1.png" 
                    name='UI and UX'
                    desc="Designing interfaces that are intuitive, efficient, and enjoyable to use."
                    />
                    <ServicesCard  
                    icon="/images/s2.png" 
                    name='Web and Mobile App'
                    desc="Designing interfaces that are intuitive, efficient, and enjoyable to use."
                    />
                    <ServicesCard  
                    icon="/images/s3.png" 
                    name='Design & Creative'
                    desc="Designing interfaces that are intuitive, efficient, and enjoyable to use."
                    />
                    <ServicesCard  
                    icon="/images/s4.png" 
                    name='Development'
                    desc="Designing interfaces that are intuitive, efficient, and enjoyable to use."
                    />

                </div>
            </div>
        </div>
    )
}

export default Services
