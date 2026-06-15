import { useState } from "react"

import certificates from "../data/certificates"
import CertificateCard from "../components/CertificateCard"

function Certificates() {

  const [activeCategory, setActiveCategory] =
    useState("All")
  const [visibleCount, setVisibleCount] =
    useState(6)

  const categories = [
    "All",
    "Academic",
    "Web Development",
    "Language",
  ]

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter(
          (certificate) =>
            certificate.category === activeCategory
        )

  return (

    <section
      id="certificates"
      className="py-28 px-6 bg-black"
    >

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">
          Certificates
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-12 max-w-2xl">
          Certifications and learning achievements
          from academic studies, web development
          courses, and professional self-development.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">

          {categories.map((category, index) => (

            <button
              key={index}
              onClick={() => {
                setActiveCategory(category)
                setVisibleCount(6)
              }}
              className={`
                px-5
                py-2

                rounded-xl

                border

                transition
                duration-300

                ${
                  activeCategory === category
                    ? "bg-cyan-400 text-black border-cyan-400"
                    : "border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Certificate Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {filteredCertificates
            .slice(0, visibleCount)
            .map((certificate, index) => (

              <CertificateCard
                key={index}
                {...certificate}
              />

            ))
          }

        </div>
        
      </div>
        {visibleCount < filteredCertificates.length && (

          <div className="flex justify-center mt-10">

            <button
              onClick={() =>
                setVisibleCount(prev => prev + 6)
              }
              className="
                px-6
                py-3

                bg-cyan-400
                text-black

                rounded-xl
                font-semibold

                hover:scale-105

                transition
                duration-300
              "
            >
              Show More
            </button>

          </div>

            )}

    </section>

  )
}

export default Certificates