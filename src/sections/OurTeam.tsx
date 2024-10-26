'use client'

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

// Separate members into groups for each orbit
const orbitGroups = [
  teamData.slice(0, 3), // 1st circle - 3 members
  teamData.slice(3, 6), // 2nd circle - 3 members
  teamData.slice(6, 10), // 3rd circle - 4 members
]

const OrbitPath = ({ radius }: { radius: number }) => (
  <motion.div
    className="absolute rounded-full border border-white/10"
    style={{
      width: `${2 * radius}px`,
      height: `${2 * radius}px`,
      left: `calc(50% - ${radius}px)`,
      top: `calc(50% - ${radius}px)`,
      boxShadow: "0 0 20px rgba(148, 0, 211, 0.3)",
    }}
    animate={{
      rotate: 360,
      transition: { duration: 200 + radius / 2, repeat: Infinity, ease: "linear" },
    }}
  />
)

const TeamMemberButton = ({ member, index, totalMembers, radius, onClick, isSelected }: {
  member: TeamMember
  index: number
  totalMembers: number
  radius: number
  onClick: () => void
  isSelected: boolean
}) => {
  const angle = (index / totalMembers) * 2 * Math.PI
  const x = 50 + 50 * Math.cos(angle) * (radius / 300)
  const y = 50 + 50 * Math.sin(angle) * (radius / 300)

  return (
    <motion.button
      className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out shadow-lg"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle at 30% 30%, ${
          isSelected ? "#8B5CF6" : "#C4B5FD"
        }, ${isSelected ? "#4C1D95" : "#7C3AED"})`,
        boxShadow: `0 0 20px ${
          isSelected ? "rgba(139, 92, 246, 0.5)" : "rgba(196, 181, 253, 0.3)"
        }`,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={`View details for ${member.name}`}
    >
      {member.name.split(" ").map((n) => n[0]).join("")}
    </motion.button>
  )
}

const MemberCard = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="absolute inset-0 flex items-center justify-center"
    onClick={onClose}
  >
    <motion.div
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-[80%] sm:max-w-sm text-center border border-purple-300 border-opacity-30"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-purple-100">{member.name}</h2>
      <p className="text-sm sm:text-base md:text-xl text-purple-200 mb-3 sm:mb-4 md:mb-5">{member.title}</p>
      <p className="text-xs sm:text-sm text-purple-300">{member.quote}</p>
    </motion.div>
  </motion.div>
)

export default function CircularTeamDisplay() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('sm')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize('sm')
      else if (width < 1024) setScreenSize('md')
      else setScreenSize('lg')
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(selectedMember === member ? null : member)
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <h1 className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white opacity-10 text-center whitespace-nowrap px-4 pointer-events-none">
        Our Team at Naiyo24 Private Limited
      </h1>

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-30"
            initial={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, "100%"],
              transition: {
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px]">
        {[200, 250, 300].map((radius, i) => (
          <OrbitPath key={i} radius={radius} />
        ))}

        {orbitGroups.map((group, orbitIndex) =>
          group.map((member, memberIndex) => (
            <TeamMemberButton
              key={member.name}
              member={member}
              index={memberIndex}
              totalMembers={group.length}
              radius={[200, 250, 300][orbitIndex]}
              onClick={() => handleMemberClick(member)}
              isSelected={selectedMember === member}
            />
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <MemberCard
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
