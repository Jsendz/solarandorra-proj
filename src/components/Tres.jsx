import React from 'react'

const Tres = () => {
  return (
    <div className="h-full lg:h-screen w-full max-w-screen-2xl mx-auto">
        <h2 className="text-center font-bold text-6xl py-20">Inside Nature Experience</h2>

    <div className="lg:w-full flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:items-center lg:pt-20  text-center">
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
  )
}

export default Tres