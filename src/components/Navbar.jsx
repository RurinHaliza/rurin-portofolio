import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { User, FolderKanban, Award, Mail } from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          Rin.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a href="#about" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <User size={20} />
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <FolderKanban size={20} />
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Award size={20} />
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="flex items-center gap-2 hover:text-cyan-400 transition">
              <Mail size={20} />
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-gray-800">

          <ul className="flex flex-col p-6 gap-6 text-gray-300">

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#certificates" onClick={() => setMenuOpen(false)}>
                Certificates
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar