import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ramandeep Portfolio</title>
   
      </Head>
      
      <Header/>
      {/* hero */}
    <section id='hero'>
      <Hero />
    </section>
      {/* About */}

      {/* Skills */}

      {/* Projects */}
    </div>
  )
}
