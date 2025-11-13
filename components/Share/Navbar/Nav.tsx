'use client'
import { useState } from 'react'
import DestopNavbar from './DestopNavbar'
import MobileNavbar from './MobileNavbar'

function Nav() {
    const [showNva, setShowNva] = useState(false)
    const openNavHandler = ()=> setShowNva(true)
    const closeNavHandler = ()=> setShowNva(false)
    return (
        <div>
            <DestopNavbar  openNav={openNavHandler}/>
            <MobileNavbar showNav={showNva} closeNav={closeNavHandler}/>
        </div>
    )
}

export default Nav
