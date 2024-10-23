'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Button from "@/components/Button"
import starBg from "../assets/stars.png"

const Ring = ({ className, children, rotationSpeed = 20 }: { className: string, children?: React.ReactNode, rotationSpeed?: number }) => (
  <motion.div
    className={`absolute rounded-full border border-white/20 ${className}`}
    animate={{ rotate: 360 }} // Continuous rotation
    transition={{ repeat: Infinity, duration: rotationSpeed, ease: "linear" }} // Infinite rotation with custom speed
  >
    {children}
  </motion.div>
)

const Dot = ({ className = "" }: { className?: string }) => (
  <div className={`absolute h-2 w-2 bg-white rounded-full ${className}`} />
)

export default function Hero() {
  return (
    <section
      className="relative h-[750px] sm:h-[600px] md:h-[700px] lg:h-[750px] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)] z-0"
      ></div>

      {/* Central Circles and Rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="h-44 w-44 sm:h-48 sm:w-48 md:h-64 md:w-64 bg-purple-500 rounded-full border border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <Ring className="h-[200px] w-[200px] sm:h-[244px] sm:w-[244px] md:h-[344px] md:w-[344px]" rotationSpeed={30}>
          <Dot className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
        </Ring>

        <Ring className="h-[300px] w-[300px] sm:h-[344px] sm:w-[344px] md:h-[444px] md:w-[444px] border-dashed" rotationSpeed={40} />

        <Ring className="h-[400px] w-[400px] sm:h-[444px] sm:w-[444px] md:h-[544px] md:w-[544px] opacity-20" rotationSpeed={60}>
          <Dot className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="left-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Ring>
      </div>

      {/* Text Content */}
      <div className="container relative z-10 mt-8 sm:mt-12 md:mt-16 text-center">
        <motion.h1 
          className="text-5xl sm:text-3xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] pb-2 text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Transforming Concepts
        </motion.h1>
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/70 mt-3 sm:mt-4 md:mt-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          into seamless
        </motion.p>
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] pb-2 text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          User Experiences
        </motion.h1>
        <motion.div 
          className="flex justify-center mt-5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button>Get Started</Button>
        </motion.div>
      </div>
    </section>
  )
}
