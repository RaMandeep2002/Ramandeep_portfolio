import Link from 'next/link'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgoundCircles from './BackgoundCircles'
type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi,Its Ramandeep singh", "Guy-who-loves-tea.tsx", "<ButLovesToCodeMore />"],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgoundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://www.linkpicture.com/q/20220723_183759-2.jpg" alt="" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full-Stack Devloper</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
            <Link href="#about">
            <button className='heroButton'>About</button>            
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#porject">
            <button className='heroButton'>Project</button>
            </Link>
        </div>
        </div>
        
    </div>
  )
}

export default Hero