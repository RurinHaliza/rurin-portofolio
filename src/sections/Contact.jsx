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
          or hiring me? Feel free to contact me.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:your-email@gmail.com"
            className="bg-cyan-400 text-black px-6 py-4 rounded-xl font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="border border-gray-700 px-6 py-4 rounded-xl"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="border border-gray-700 px-6 py-4 rounded-xl"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact