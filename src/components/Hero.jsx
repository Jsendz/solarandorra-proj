import React from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll';


export const Hero = () => {


    const[hero, setHero] = useState(false);
    const handleClick = () => setHero(!hero);


  return (

    
    <div name='Hero' className="h-full lg:h-screen w-full max-w-7xl md:mx-auto pt-24 md:pt-30 lg:pt-0 flex flex-col lg:flex-row "  >
        
         <div className="w-full h-full my-auto  flex flex-col  items-center justify-center ">
        <h2 className="w-full lg:w-full mx-auto lg:mx-0 text-center text-4xl md:text-5xl 2xl:text-6xl font-Rajdhani py-2 px-1"><span className="">Energia Renovable.</span><br />Tu Hogar.<br />Tranquilidad.</h2>
        <p className="text-xl text-center w-[90%] text-slate-500 py-4 px-8 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, a.</p>
        <button  className="py-4 px-6 bg-slate-800 text-white rounded-lg  "><Link onClick={handleClick} to='Instalacion' smooth={true} duration={500}>
          Com Funciona?
        </Link></button>
        </div>
        <div className="h-full w-full flex justify-center items-center py-2">
            <div className=" ">
            <img className="md:rounded-lg" src="https://img.freepik.com/vector-gratis/empresarios-utilizan-paneles-energia-solar-producir-electricidad-ciudad_335657-3225.jpg?w=740&t=st=1675102667~exp=1675103267~hmac=2d5bcc0f3d73256724d4b2ae35d99f9b52a43292a40764224b8ac67b0716ea43" alt="" />
            </div>
          </div>
        
        

    </div>
    
  )
}