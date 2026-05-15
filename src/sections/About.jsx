function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a Software Engineering student with interests in
              Web Development, QA Automation, Artificial Intelligence,
              and IoT systems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              During my study and independent learning journey at
              Dicoding, I have built several real-world projects
              including web applications, automation testing systems,
              AI-based systems, and IoT monitoring platforms.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy building modern digital solutions and continuously
              improving my technical and problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-cyan-400 text-3xl font-bold">
                9+
              </h3>

              <p className="text-gray-400 mt-2">
                Dicoding Courses
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-cyan-400 text-3xl font-bold">
                10+
              </h3>

              <p className="text-gray-400 mt-2">
                Completed Projects
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-cyan-400 text-3xl font-bold">
                QA
              </h3>

              <p className="text-gray-400 mt-2">
                Automation Testing
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-cyan-400 text-3xl font-bold">
                AI
              </h3>

              <p className="text-gray-400 mt-2">
                IoT & ML Projects
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About