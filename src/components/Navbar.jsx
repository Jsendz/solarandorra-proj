import React from 'react';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';


export const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full  h-[80px] bg-slate-800 flex justify-between items-center px-4 text-gray-100 z-30 antialiased'>
    <div className=" rounded-full shadow-lg shadow-slate-800">
      <img className="rounded-full" src="https://pixabay.com/get/gdcbc19003a477f1d9a44d428ac98ab9656819bdd19a92086ed0597d1ea31aedc4db0705c64d02c5e9b6f882bb19b9041_640.png" alt='Logo Image' style={{ width: '70px' }} />
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
        <Link onClick={handleClick} to='Hero' smooth={true} duration={500}>
          Inici
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Info' smooth={true} duration={500}>
          Qui Som?
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Chackra' smooth={true} duration={500}>
          Serveis
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Instalacio' smooth={true} duration={500}>
          Instalacio
        </Link>
      </li>
      <li className='py-4 text-3xl'>
        {' '}
        <Link onClick={handleClick} to='Contacte' smooth={true} duration={500}>
          Contacte
        </Link>
      </li>
    </ul>

  </div>
  )
}