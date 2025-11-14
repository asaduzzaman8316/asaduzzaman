
interface Params {
    blogid: string;
}

import Image from "next/image";
import { Blog } from "../Type/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

async function Page({ params }: { params: Promise<Params> }) {
    const { blogid } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/blog.json`, { cache: 'no-store' })
    const blog: Blog[] = await res.json()
    const specificBlog = blog && blog.find(item => item.id === blogid)
    console.log(specificBlog)
    return (
        <>
            {specificBlog &&
                <div className='bg-gray-900 min-h-screen pt-28 pb-16'>
                    <div className='container mx-auto px-4 lg:px-8 max-w-4xl'>

                        <header className='mb-10 text-center'>
                            <p className='text-sm text-blue-400 uppercase font-semibold tracking-widest mb-2'>
                                Published on <span className="text-white">{specificBlog.date}</span>
                            </p>
                            <h1 className='text-3xl md:text-4xl font-bold text-white leading-tight mb-4'>
                                {specificBlog.title}
                            </h1>
                            <p className='text-xl italic text-gray-400'>
                                {specificBlog.excerpt}
                            </p>
                        </header>

                        <div className='mb-12'>
                            <Image
                                width={800}
                                height={200}
                                src={specificBlog.imageUrl}
                                alt={specificBlog.title}
                                className="w-full h-90 object-cover rounded-xl shadow-2xl shadow-blue-500/20"
                            />
                        </div>

                        <article className="prose prose-lg prose-invert max-w-none text-gray-200">
                            <ReactMarkdown>
                                {specificBlog.bodyMarkdown}
                            </ReactMarkdown >
                        </article>

                    </div>
                    <hr className='mt-16 border-gray-700 container mx-auto max-w-4xl' />

                    <div className='container mx-auto px-4 lg:px-8 max-w-4xl mt-8'>
                        <Link
                            href="/#blog"
                            className='text-blue-400 hover:text-blue-300 transition duration-300 flex items-center'
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Back to all posts
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Page
