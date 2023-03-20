import React from 'react'
import { useState } from 'react';





export const Hero = () => {


    const[hero, setHero] = useState(false);
    const handleClick = () => setHero(!hero);


  return (

    
    <div name='Hero' className=""  >
        <div className="bg-[url('https://pixabay.com/get/gc93f9971d15386e0f0e4c30ef3247cbcee81f36e6a89c5c15308e180e571364d84bda7659b5ad286f4b5daa55db9c58d5e4de9c2203bd8a1a3bebea41b557cb4_1280.jpg')] 2xl:bg-[url('https://pixabay.com/get/g3dbd3445ddc9b9684d3cefd3abeeb52c0f1ff7385374c1fe79197a5b7d0a0ff2545a7626ce475fb649d9fc85f80a68fa.jpg')] brightness-75 relative w-full h-screen bg-no-repeat bg-cover bg-center ">
          
          
        <div className="flex flex-col w-full max-w-7xl mx-auto h-full items-center justify-center  ">
          <div className="text-center">
          <h1 className="text-5xl 2xl:text-6xl text-white font-serif font-bold ">Inside Nature Experience</h1>
          <span className="text-2xl text-white mx-auto">Est. 2020</span>
          </div>
          <div className="w-full flex flex-row justify-around items-center">
          <div className="bg-white rounded-lg w-[90%] h-full">
            <h2 className="text-center text-xl font-bold antialiased">Quienes Somos</h2>
            <p className="px-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae suscipit nemo fuga accusantium, ipsa ab sit dignissimos excepturi possimus!</p>
        </div>
        <div className="bg-gray-200 rounded-lg w-[90%] h-full">
            <h2 className="text-center text-xl font-bold antialiased">Que queremos</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae suscipit nemo fuga accusantium, ipsa ab sit dignissimos excepturi possimus!</p>
        </div>
        <div className="bg-gray-200 rounded-lg w-[90%] h-full">
            <h2 className="text-center text-xl font-bold antialiased"> Que Ofrecemos</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea repudiandae suscipit nemo fuga accusantium, ipsa ab sit dignissimos excepturi possimus!</p>
        </div>
          </div>

      
          
        
        

        </div>
        </div>
    </div>
    
  )
}