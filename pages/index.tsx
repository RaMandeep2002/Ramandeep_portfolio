import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Ramandeep Portfolio</title>
   
      </Head>
      
      <Header/>
      {/* hero */}
    <section id='hero' className='snap-start'>
      <Hero />
    </section>
      {/* About */}
    <section id='about' className='snap-center'>
      <About />
    </section>
      {/* Skills */}
    <section id='skills' className='snap-start'>
      <Skills />
    </section>
      {/* Projects */}

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'><img
        className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
        src="https://i.postimg.cc/1ztZFwMB/301608204-1377147196028336-3503007109111159602-n.jpg" alt="" /></div>
      </footer>
      </Link>
    </div>
  )
}
