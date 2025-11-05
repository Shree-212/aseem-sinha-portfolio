'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Research from '@/components/Research'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Teaching from '@/components/Teaching'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Background3D from '@/components/Background3D'

export default function Home() {
  return (
    <main>
      <Background3D />
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Education />
      <Experience />
      <Teaching />
      <Contact />
    </main>
  )
}
