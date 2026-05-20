import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaPhp,
  FaMicrosoft,
  FaNetworkWired,
} from "react-icons/fa"

import {
  MdRouter,
} from "react-icons/md"

import {
  SiJavascript,
  SiTailwindcss,
  SiWebpack,
  SiSelenium,
  SiTensorflow,
  SiArduino,
  SiPytest,
  SiGoogle,
  SiTestinglibrary,
} from "react-icons/si"

import {
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2"

import {
  Database,
  Workflow,
  BrainCircuit,
} from "lucide-react"

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
  },
  {
    name: "Cisco Packet Tracer",
    icon: <MdRouter />,
  },
  {
    name: "Webpack",
    icon: <SiWebpack />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Selenium",
    icon: <SiSelenium />,
  },
  {
    name: "Blackbox Testing",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    name: "Whitebox Testing",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    name: "Greybox Testing",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    name: "RTM",
    icon: <Workflow size={38} />,
  },
  {
    name: "Pytest",
    icon: <SiPytest />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "System Analyst",
    icon: <Workflow size={38} />,
  },
  {
    name: "DFD & UML",
    icon: <Database size={38} />,
  },
  {
    name: "Microsoft Office",
    icon: <FaMicrosoft />,
  },
  {
    name: "Google Workspace",
    icon: <SiGoogle />,
  },
  {
    name: "Machine Learning",
    icon: <BrainCircuit size={38} />,
  },
]

function Skills() {
  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-[#111]
                border
                border-gray-800
                rounded-2xl
                py-6
                px-4

                flex
                flex-col
                items-center
                justify-center
                gap-3

                text-gray-300

                hover:border-cyan-400
                hover:text-cyan-400
                hover:-translate-y-1

                transition
                duration-300
              "
            >

              <div className="text-4xl">
                {skill.icon}
              </div>

              <span className="text-sm text-center">
                {skill.name}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills