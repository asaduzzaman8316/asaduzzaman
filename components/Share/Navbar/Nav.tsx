'use client'
import { useState } from 'react'
import DestopNavbar from './DestopNavbar'
import MobileNavbar from './MobileNavbar'

function Nav() {
    const [showNva, setShowNva] = useState(false)
    const openNavHandler = ()=> setShowNva(true)
    const closeNavHandler = ()=> setShowNva(false)
    return (
        <nav>
            <DestopNavbar  openNav={openNavHandler}/>
            <MobileNavbar showNav={showNva} closeNav={closeNavHandler}/>
        </nav>
    )
}

export default Nav
