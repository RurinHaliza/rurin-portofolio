function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  documentation,
  image,
  category,
}) {
  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-lg text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">

          {/* GitHub */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-lg font-medium"
            >
              GitHub
            </a>
          )}

          {/* Web Development */}
          {category === "Web Development" && demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-2 rounded-lg"
            >
              Live Demo
            </a>
          )}

          {/* QA Automation */}
          {category === "Quality Assurance" && documentation && (
            <a
              href={documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-4 py-2 rounded-lg"
            >
              See Documentation
            </a>
          )}

        </div>

      </div>

    </div>
  )
}

export default ProjectCard