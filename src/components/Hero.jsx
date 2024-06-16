import React from 'react'
import {HERO_CONTENT} from '../constants'
import profilePic from '../assets/muhammedYasinProfile.png'

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Muhammed Yasin</h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-4xl tracking-tight
                text-transparent'>Full Stack Developer</span>
                <p className='my-2 max-width-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}
                </p>
                
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
            <img className='rounded-lg w-[100%] h-[100%] lg:w-[70%] lg:h-[40%]' src={profilePic} alt="Muhammed Yasin"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
