import React from 'react'
import BlogCard from './BlogCard'

function Blog() {
    return (
        <div className='lg:w-[70%] mx-auto px-4 lg:px-0 py-16'>
            <h1 className='text-gray-200 text-center text-3xl sm:text-4xl  font-semibold' >My latest <span className='text-cyan-300 '>Blogs</span></h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-16'>
                <div data-aos='fade-right' data-aos-anchor-placement='top-bottom'
                    data-aos-delay='0'>
                    <BlogCard image='/images/b1.jpg' name='Learn how to build an amazing portfolio website using next js' date='5 Sep 2025' />
                </div>

                <div data-aos='fade-right' data-aos-anchor-placement='top-bottom'
                    data-aos-delay='100'>
                    <BlogCard image='/images/b2.jpg' name='Learn how to build an amazing Blog website using next js' date='20 Sep 2025' />
                </div>

                <div data-aos='fade-right' data-aos-anchor-placement='top-bottom'
                    data-aos-delay='200'>
                    <BlogCard image='/images/b3.jpg' name='Learn how to build an amazing Social Media website using next js' date='15 Nov 2025' />
                </div>


            </div>
        </div>
    )
}

export default Blog
