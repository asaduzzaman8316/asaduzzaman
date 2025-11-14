import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'
type props ={
    showNav:boolean,
    closeNav: () => void
}
function MobileNavbar({showNav, closeNav}: props) {
    const navopen = showNav ? "translate-x-0" : "translate-x-[100%]"
    return (
        <div className=''>
            <div className={`fixed ${navopen} inset-0 transform transition-all right-0 duration-500 z-105 bg-black opacity-70 w-full h-screen`}>
                <div className='text-white fixed justify-center flex flex-col h-full transform transition-all delay-300  w-[60%] bg-cyan-800 space-y-6 z-110 right-0 '>
                    {Navlinks.map((link) => {
                        return (
                            <Link
                                href={link.url}
                                key={link.id}
                            >
                                <p
                                    className='text-white w-fit text-xl ml-12 border-b-[1.5px]  pb-1 border-white sm:text-[30px] '
                                >
                                    {link.label}
                                </p>
                            </Link>
                        )
                    })}
                    <CgClose onClick={closeNav} className='absolute cursor-pointer top-10 right-6 sm:size-8 size-8' />
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar
