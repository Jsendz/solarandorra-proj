import React from 'react'

export const Actividades = () => {
  return (
    <div name='Actividades' className="w-full max-w-screen-2xl mx-auto h-full lg:h-screen ">
    <h2 className="text-5xl xl:text-6xl font-bold text-slate-800 text-center pt-20 lg:pb-20">Actividades</h2>
    <div className="w-full flex flex-col lg:flex-row lg:justify-around items-center pt-20">
      <div className="w-full flex flex-col justify-around items-center" >
        <h3 className="text-2xl xl:text-4xl font-semibold p-2">Deja correr tu imaginacion!</h3>
        <p className="w-[90%] xl:text-xl text-center py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iure consequatur magnam nostrum in dolorum fugit voluptatibus laboriosam esse ab?</p>
        <button className="rounded-lg p-3 bg-blue-700 text-slate-100 font-semibold xl:text-xl ">Descargar folleto de Actividades</button>
      </div>
      <div className="w-full py-10">
        <img className="w-[90%] mx-auto rounded-lg" src="https://pixabay.com/get/g31b007bed9b01e20979af35c2ff0015be405f6d12614b4175d8ec398d1f25720110c3931bf244c785fa327c2aab9b1e3c94b3dfc955e440c0acf793dec9b2b6e39251d73c13064377631a060aa4eacca_1280.jpg" alt="" />
      </div>
    </div>
    </div>
  )
}