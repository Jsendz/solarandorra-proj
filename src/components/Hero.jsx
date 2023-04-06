import React from 'react'
import { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-scroll';




export const Hero = () => {


    const[hero, setHero] = useState(false);
    const handleClick = () => setHero(!hero);

    const slides = [
      {
        url:'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg', title:"alberta"
      },
      {
        url:'https://cdn.pixabay.com/photo/2013/06/12/22/20/mountains-139012_1280.jpg', title:"mountains"
      },
      {
        url:'https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_1280.jpg', title:"nature"
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const timerRef = useRef(null);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    const goToNext = useCallback(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    },[currentIndex, slides]);

    useEffect(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        goToNext();
      }, 6000);
  
      return () => clearTimeout(timerRef.current);
    }, [goToNext]);


  return (

    
    <div name='Hero' className=""  >
        <div className=" brightness-75 relative w-full h-screen bg-no-repeat bg-cover bg-center ">
        <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
          
      </div>
      <div className="absolute w-full top-[17%] lg:top-[19%] xl:top-[23%]">
        <div className="flex flex-col w-full max-w-7xl mx-auto h-full items-center justify-around  ">
          <div className="text-center pb-10">
          <h1 className="text-5xl 2xl:text-6xl text-white font-serif font-bold ">Inside Nature Experience</h1>
          <span className="text-2xl text-white mx-auto">Est. 2020</span>
          </div>
          <div className="pt-20">
            <button className="lg:hidden uppercase bg-gray-200 p-5 animate-bounce rounded-lg font-bold"><Link to='Contacte' smooth={true} duration={500}>
          Aventurate!
        </Link>

            </button>
            
            </div>

          
          <div className="hidden lg:w-full lg:flex flex-col lg:flex-row lg:justify-around lg:items-center lg:pt-10  text-center">
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