import React from 'react';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';



export const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full  h-[80px] bg-gray-100 flex justify-between items-center px-4 text-slate-800 z-30 antialiased'>
      
    <div className=" rounded-full shadow-lg shadow-slate-800 bg-[url('./assets/mountains.png')] w-[70px] h-[70px] bg-no-repeat bg-center bg-cover">
      
    </div>

    {/* menu */}
    <ul className='hidden md:flex md:text-xl font-serif cursor-pointer'>
      <li className="pr-2 lg:pr-4">
        <Link to='Hero' smooth={true} duration={500}>
          Inside Nature
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='Info' smooth={true} duration={500}>
          Actividades
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='Chackra' smooth={true} duration={500}>
          Expediciones
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='Instalacion' smooth={true} duration={500}>
          Galeria
        </Link>
      </li>
      <li className="pr-2 lg:pr-4">
        <Link to='Contacte' smooth={true} duration={500}>
          Contacto
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
        <Link onClick={handleClick} to='Hero' smooth={true} duration={500}>
          Inside Nature
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Info' smooth={true} duration={500}>
          Actividades
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Chackra' smooth={true} duration={500}>
          Expediciones
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Instalacio' smooth={true} duration={500}>
          Galeria
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Contacte' smooth={true} duration={500}>
          Contacto
        </Link>
      </li>
    </ul>

  </div>
  )
}