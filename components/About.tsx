import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.2,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-8xl px-10 justify-evenly max-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        transition={{
            duration:1.2
        }}
        // viewport={{
        //     once:true
        // }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://i.postimg.cc/1ztZFwMB/301608204-1377147196028336-3503007109111159602-n.jpg"
        />

        <div className='space-y-10 px-10'>
            <h4 className='text-4xl font-semibold'>Here is <span className='underline decoration-[#F7AB0A]/50'>Little</span> Background</h4>
            <p className='text-base'>I'm Ramandeep singh. I am Student at Chandigarh Group of college, Jhanjeri Mohali. I am becaming a Full Stack Devloper. I have Aggregate CGPA 8.83. I Have Knowlege about The Full Stack Technoleges.</p>
        </div>
    </motion.div>
  )
}

export default About