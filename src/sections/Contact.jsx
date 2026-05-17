import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#0a0a0a]"
    >

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12">
          Interested in collaborating, discussing projects,
          or hiring me? 
          Feel free to connect with me.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:rurinhaliza@gmail.com"
            target="_blank"
            className="flex flex-col items-center justify-center text-center gap-2 "
          >
            <FaEnvelope size={20} />
            Email Me
          </a>

          <a
            href="https://github.com/RurinHaliza"
            target="_blank"
            className="flex flex-col items-center justify-center text-center gap-2 "
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://id.linkedin.com/in/rurin-haliza"
            target="_blank"
            className="flex flex-col items-center justify-center text-center gap-2 "
          >
            <FaLinkedin size={20} />
            Linkedin
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact