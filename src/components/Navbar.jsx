import React from 'react';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png'

export const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full  h-[80px] bg-white flex justify-between items-center px-4 text-slate-800 z-30'>
    <div>
      <img src={Logo} alt='Logo Image' style={{ width: '150px' }} />
    </div>

    {/* menu */}
    <ul className='hidden md:flex md:text-xl font-bold'>
      <li className="pr-2 lg:pr-4">
        <Link to='home' smooth={true} duration={500}>
          Inici
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='about' smooth={true} duration={500}>
          Qui Som?
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='skills' smooth={true} duration={500}>
          Serveis
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='work' smooth={true} duration={500}>
          Instalacio
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='contact' smooth={true} duration={500}>
          Contacte
        </Link>
      </li>
    </ul>

    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile menu */}
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-20 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-start items-center'
      }
    >
      <li className='py-4 text-3xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Inici
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          Qui Som?
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          Serveis
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          Instalacio
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contacte
        </Link>
      </li>
    </ul>

  </div>
  )
}