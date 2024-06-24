import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logobetfive.png'

function Navbar() {
    return (
        <nav className='w-full px-5 sm:px-10 lg:px-32 py-5 flex items-center justify-between'>
            <Link to={"/"}><img src={logo} alt='logobetfive' className='w-[125px] h-[85px]' /></Link>
        </nav>
    )
}

export default Navbar