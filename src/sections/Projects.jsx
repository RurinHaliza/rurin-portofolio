import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import { useState } from "react"

function Projects() {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Web Development",
    "Quality Assurance",
    "IoT & AI",
  ]

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        )

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#0a0a0a]"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl border transition ${
                selectedCategory === category
                  ? "bg-cyan-400 text-black"
                  : "border-gray-700 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects