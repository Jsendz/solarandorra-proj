import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export const Info = () => {
  return (
    <div className="bg-slate-300 w-full h-full py-10 lg:py-0 lg:h-screen">
    <div className="h-full min-h-screen w-full overflow-hidden flex flex-col lg:flex-row justify-around items-center max-w-7xl mx-auto bg-slate-300 -z-30 " >
      <div className="w-full h-full flex flex-col items-center p-2 py-5">
        <div className="w-full h-full flex flex-col justify-evenly md:pl-8">
        <h3 className="text-2xl text-center lg:text-left text-red-500 md:text-4xl font-bold py-3 lg:py-0 ">Sobre Nosaltres</h3>
        <h2 className="font-bold text-3xl md:text-5xl py-3 lg:py-0">La nostra empresa en numeros</h2>
        <p className=" text-xl py-3 lg:py-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore atque tenetur officiis. Fuga odit, eaque rerum magni enim expedita facilis tenetur voluptatem debitis, explicabo esse consequatur asperiores tempore excepturi voluptates.</p>
        <div className="w-full flex justify-around items-center py-4 lg:py-0 ">
          <div className="w-full flex flex-col  items-center">
            <h2 className="text-md text-center md:text-1xl font-bold ">Instalaciones Nacionales</h2>
            <div className="py-5">
        <CircularProgress value={30} size='100px' color='green.400'>
  <CircularProgressLabel>80</CircularProgressLabel>
</CircularProgress>
</div>
         </div>
         <div className="w-full flex flex-col items-center">
          <h2 className="text-md text-center md:text-1xl font-bold ">Instalaciones Internacionales</h2>
          <div className="py-5">
         <CircularProgress value={70} size='100px' color='green.400'>
  <CircularProgressLabel>400</CircularProgressLabel>
</CircularProgress>
</div>

         </div>
          
        </div>
      </div>
        </div>
      <div className="relative w-full py-2 lg:pt-24">
        <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-4 -top-10 -z-10 "></div>
        <div className="absolute w-28 h-24 md:w-40 md:h-40 bg-red-300 rounded-lg right-32 md:right-24 md: -bottom-12 md:bottom-2 flex flex-col justify-center z-20">
          <span className="text-2xl md:text-4xl font-bold">+10 Anys</span>
          <h3 className="text-xl md:text-2xl text-center font-bold">Experiencia</h3>
        </div>
        <div className="w-full lg:w-[90%] mx-auto h-full z-10">
          <img className="mx-auto rounded-xl shadow-md z-10" src="https://cdn.pixabay.com/photo/2017/11/11/17/05/solar-system-2939551_640.jpg" alt="" />
        </div>
      </div>
        

  
    </div>
    </div>
  )
}