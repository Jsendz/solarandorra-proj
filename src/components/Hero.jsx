import React from 'react'
import { useState } from 'react';
import ImageSlider from "./ImageSlider";





export const Hero = () => {


    const[hero, setHero] = useState(false);
    const handleClick = () => setHero(!hero);

    const slides = [
      {
        url:'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg'
      },
      {
        url:'https://cdn.pixabay.com/photo/2013/06/12/22/20/mountains-139012_1280.jpg'
      },
      {
        url:'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_1280.jpg'
      },
    ];

    



  return (

    
    <div name='Hero' className=""  >
        <div className=" brightness-75 relative w-full h-screen bg-no-repeat bg-cover bg-center ">
        <ImageSlider slides={slides}/>
          
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