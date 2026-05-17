import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Certificates from "./sections/Certificates"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import GithubStats from "./sections/GithubStats"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import ParticleBackground from "./components/ParticleBackground"


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden relative">

      <ParticleBackground />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />

    </div>
  )
}

export default App