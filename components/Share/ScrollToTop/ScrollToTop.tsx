'use client'

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

function ScrollToTop() {
    const [isVisiable, setIsVisiable] = useState(false)
    useEffect(() => {
        const totogolVisiable = () => {
            if (window.scrollY > 300) setIsVisiable(true);
            else setIsVisiable(false)
        }
        window.addEventListener("scroll", totogolVisiable);
        return () => window.removeEventListener('scroll', totogolVisiable);
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className=" fixed bottom-4 animate-pulse right-4">
            {
                isVisiable && (
                    <button className="bg-blue-950/50 cursor-pointer text-white rounded-full size-12 flex justify-center items-center focus:outline-none"
                    onClick={scrollToTop}
                    >
                        <FaArrowUp />
                    </button>
                )
            }
        </div>
    )
}

export default ScrollToTop
