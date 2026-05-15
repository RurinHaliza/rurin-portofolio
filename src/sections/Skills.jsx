const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Webpack",
  "Python",
  "Selenium",
  "Machine Learning",
  "IoT",
]

function Skills() {
  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-800 px-6 py-3 rounded-xl text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills