import { TypeAnimation } from "react-type-animation"
import ParticleBackground from "../components/ParticleBackground"

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-6 overflow-hidden">
      
      <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>
      
      <div className="text-center max-w-4xl">

        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Rurin Haliza
        </h1>

        <div className="text-2xl md:text-3xl text-gray-400 mt-6">

          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "QA Automation Enthusiast",
              2000,
              "AI & IoT Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        <p className="text-gray-500 mt-8 leading-relaxed">
          I build modern web applications, automation testing systems,
          and intelligent IoT solutions based on real-world projects
          and study experiences.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/cv/resume.pdf"
            target="_blank"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            Download CV
          </a>
          
          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-xl text-white hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Contact Me
          </a>

          <div
            data-aos="fade-up"
            className="text-center max-w-4xl">
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero