import React from 'react'
import { useState } from 'react';





export const Hero = () => {


    const[hero, setHero] = useState(false);
    const handleClick = () => setHero(!hero);


  return (

    
    <div name='Hero' className=""  >
        <div className="bg-[url('./assets/lake.jpg')] 2xl:bg-[url('./assets/lake2.jpg')] brightness-75 relative w-full h-screen bg-no-repeat bg-cover bg-center ">
          
          
      </div>
      <div className="absolute w-full top-[17%] lg:top-[19%] xl:top-[23%]">
        <div className="flex flex-col w-full max-w-7xl mx-auto h-full items-center justify-around  ">
          <div className="text-center pb-10">
          <h1 className="text-5xl 2xl:text-6xl text-white font-serif font-bold ">Inside Nature Experience</h1>
          <span className="text-2xl text-white mx-auto">Est. 2020</span>
          </div>
          <div className="hidden lg:w-full lg:flex flex-col lg:flex-row lg:justify-around lg:items-center lg:pt-10 lg:shadow-2xl text-center">
          <div className="bg-gray-200 hover:bg-white hover:cursor-pointer hover:shadow-xl rounded-lg w-60 xl:w-80 h-full ">
            <h2 className="text-center text-xl font-bold antialiased py-5">Quienes Somos</h2>
            <p className="px-6 xl:px-14 pb-5 text-sm xl:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae suscipit nemo fuga accusantium, ipsa ab sit dignissimos excepturi possimus!</p>
        </div>
        <div className="bg-gray-200 hover:bg-white hover:cursor-pointer hover:shadow-xl rounded-lg w-60 xl:w-80 h-full">
            <h2 className="text-center text-xl font-bold antialiased py-5">Que queremos</h2>
            <p className="px-6 xl:px-14 pb-5 text-sm xl:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae suscipit nemo fuga accusantium, ipsa ab sit dignissimos excepturi possimus!</p>
        </div>
        <div className="bg-gray-200 hover:bg-white hover:cursor-pointer hover:shadow-xl rounded-lg w-60 xl:w-80 h-full">
            <h2 className="text-center text-xl font-bold antialiased py-5"> Que Ofrecemos</h2>
            <p className="px-6 xl:px-14 pb-5 text-sm xl:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae suscipit nemo fuga accusantium, ipsa ab sit dignissimos excepturi possimus!</p>
        </div>
          </div>
          </div>

      
          
        
        

        </div>
    </div>
    
  )
}