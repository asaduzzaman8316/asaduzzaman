
import BlogCard from './BlogCard'

function Blog() {
    return (
        <div id='blog' className='container lg:px-14 mx-auto px-4  py-16'>
            <h1 className='text-gray-200 text-center text-3xl sm:text-4xl  font-semibold' >My latest <span className='text-cyan-300 '>Blogs</span></h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-16'>
                <div data-aos='fade-right' data-aos-anchor-placement='top-bottom'
                    data-aos-delay='0'>
                    <BlogCard id='1' image='/images/b3.jpg' name='Why React, Next.js, and Tailwind CSS are My Go-To for Modern Web Apps' date='2025-11-14' />
                </div>

                <div data-aos='fade-right' data-aos-anchor-placement='top-bottom'
                    data-aos-delay='100'>
                    <BlogCard id='2' image='/images/b2.jpg' name='Ditching the Old Stylesheet: My Love Affair with Tailwind CSS' date='2025-11-13' />
                </div>

                <div data-aos='fade-right' data-aos-anchor-placement='top-bottom'
                    data-aos-delay='200'>
                    <BlogCard id='3' image='/images/b1.jpg' name='Beyond the Hype: How Next.js Makes My Portfolio Websites *Actually* Fast' date='2025-11-12' />
                </div>


            </div>
        </div>
    )
}

export default Blog
