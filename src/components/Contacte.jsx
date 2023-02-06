import React from 'react';
import {FaPhoneAlt, FaMailBulk, FaLocationArrow, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';


export const Contacte = () => {
  return (
    <div className="antialiased flex w-full h-full justify-center items-center bg-cyan-800">
        <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6  w-full max-w-7xl p-8 sm:p-12 text-white overflow-hidden ">
            <div className=" flex flex-col space-y-8 justify-between">
                <div>
                    <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                    <p className="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, praesentium?</p>
                </div>
                <div className="flex flex-col space-y-4">
                <div className="inline-flex space-x-2 items-center">
                    <FaPhoneAlt/> 
                    <span>+376 123456</span>
                
                </div>
                <div className="inline-flex space-x-2 items-center">
                    <FaMailBulk/> 
                    <span>info@andsolar.com</span>
                
                </div>
                <div className="inline-flex space-x-2 items-center">
                    <FaLocationArrow/> 
                    <span>Carrer de la energia renovable, atic 3, Andorra </span>
                
                </div>
                </div>
                <div className="flex space-x-4 text-lg ">
                    <a href="">< FaFacebookF /> </a>
                    <a href=""> <FaInstagram /> </a>
                    <a href=""> <FaLinkedin /> </a>
                </div>

            </div>
            <div className="relative">
                <div className="absolute w-40 h-40 bg-orange-400 rounded-full -right-28 -top-28 "></div>
                <div className="absolute w-40 h-40 bg-orange-400 rounded-full -left-28 -bottom-16 "></div>

                <div className="bg-white rounded-xl shadow-lg p-8 md:w-80 relative z-10">
                    <form action="" className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="Your name" className="text-sm text-slate-400 ">Your name</label>
                        
                            <input type="text" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                        <div>
                            <label htmlFor="Email Address" className="text-sm text-slate-400 ">Your email</label>
                        
                            <input type="email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-slate-400 ">Message</label>
                        
                            <textarea name="" id="" cols="10" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300" ></textarea>
                        </div>
                        <button class="inline-block self-end bg-slate-700 text-white font-bold rounded-lg px-6 py-2 ">Send Message</button>

                    </form>
                    
                </div>

            </div>

        </div>
    </div>
  )
}
