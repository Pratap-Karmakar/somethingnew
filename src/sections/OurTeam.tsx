"use client"

import { useState } from "react"
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
    quote: "Ongoing Projects - Nariii",
    name: "Aaryan Sinha Roy",
    title: "API, Server-side programming and App Deployment",
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

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <div className="relative w-[600px] h-[600px]">
        {teamData.map((member, index) => {
          const angle = (index / teamData.length) * 2 * Math.PI
          const x = 300 + 250 * Math.cos(angle)
          const y = 300 + 250 * Math.sin(angle)
          return (
            <motion.button
              key={member.name}
              className={`absolute w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out ${
                selectedMember === member ? "bg-purple-600 text-white" : "bg-purple-300 text-black"
              } shadow-md hover:shadow-lg`}
              style={{ left: x - 28, top: y - 28 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(member)}
              aria-label={`View details for ${member.name}`}
            >
              {getInitials(member.name)}
            </motion.button>
          )
        })}
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
                className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
                <p className="text-purple-700 mb-4">{selectedMember.title}</p>
                <p className="text-sm text-gray-500">{selectedMember.quote}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
