"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TeamMember {
  quote: string
  name: string
  title: string
}

const teamData: TeamMember[] = [
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Srijani Ghosh",
    title: "BDM SEO and Marketing",
  },
  {
    quote: "Ongoing Projects - Niayo24, Nariii",
    name: "Sambik Karmakar",
    title: "IT Full Stack Graphic Designer",
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Rohit Ghosh",
    title: "Full Stack, Backend Professional",
  },
  {
    quote: "Ongoing Projects - Luriana",
    name: "Pratap Karmakar",
    title: "Full Stack Web Developer Professional",
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Rana Kobiraj",
    title: "Backend Developer",
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Subhankar Das",
    title: "Frontend Developer",
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Kaustubh Upadhyay",
    title: "IT Backend Developer",
  },
  {
    quote: "Intern",
    name: "Samadrita Banarjee",
    title: "IT Frontend Developer",
  },
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Tamashree Halder",
    title: "BDM, SEO And Marketing",
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Souvik Nandy",
    title: "Full Stack Developer",
  },
]

export default function CircularTeamDisplay() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [rotation, setRotation] = useState(0)

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  const handleClick = (member: TeamMember) => {
    if (selectedMember === member) {
      setSelectedMember(null)
    } else {
      setSelectedMember(member)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 0.0005) // Slightly faster, but still slow rotation
    }, 20) // Shorter interval for smoother animation

    return () => clearInterval(interval)
  }, [])

  const orbitRadii = [200, 250, 300]

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Responsive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white opacity-5 text-center">
          Our Team at Naiyo24 Pvt Ltd.
        </h1>
      </div>

      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative w-[700px] h-[700px] max-w-full max-h-full scale-[0.8] sm:scale-90 md:scale-100">
        {/* Orbits */}
        {orbitRadii.map((radius, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 * radius}px`,
              height: `${2 * radius}px`,
              left: `${350 - radius}px`,
              top: `${350 - radius}px`,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 20px rgba(148, 0, 211, 0.3)",
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 200 + i * 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}

        {/* Team Members (Planets) */}
        {teamData.map((member, index) => {
          const radius = orbitRadii[index % orbitRadii.length]
          const angle = (index / teamData.length) * 2 * Math.PI + rotation
          const x = 350 + radius * Math.cos(angle)
          const y = 350 + radius * Math.sin(angle)

          return (
            <motion.button
              key={member.name}
              className="absolute w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out shadow-lg"
              style={{
                left: x - 32,
                top: y - 32,
                background: `radial-gradient(circle at 30% 30%, ${
                  selectedMember === member ? "#8B5CF6" : "#C4B5FD"
                }, ${selectedMember === member ? "#4C1D95" : "#7C3AED"})`,
                boxShadow: `0 0 20px ${
                  selectedMember === member ? "rgba(139, 92, 246, 0.5)" : "rgba(196, 181, 253, 0.3)"
                }`,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(member)}
              aria-label={`View details for ${member.name}`}
            >
              {getInitials(member.name)}
            </motion.button>
          )
        })}

        {/* Display Card (Center Planet) */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-sm text-center border border-purple-300 border-opacity-30"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-3xl font-bold mb-3 text-purple-100">{selectedMember.name}</h2>
                <p className="text-xl text-purple-200 mb-5">{selectedMember.title}</p>
                <p className="text-sm text-purple-300">{selectedMember.quote}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}