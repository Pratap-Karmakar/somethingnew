'use client'

import { motion, useAnimation, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const Ring = ({ className, children, rotationSpeed = 20 }: { className: string, children?: React.ReactNode, rotationSpeed?: number }) => (
  <motion.div
    className={`absolute rounded-full border border-white/20 ${className}`}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: rotationSpeed, ease: "linear" }}
  >
    {children}
  </motion.div>
)

const Dot = ({ className = "" }: { className?: string }) => (
  <div className={`absolute h-2 w-2 bg-white rounded-full ${className}`} />
)

const Planet = ({ className, size, color }: { className: string, size: string, color: string }) => {
  const randomDuration = Math.random() * 10 + 10 // Random duration between 10-20s
  return (
    <motion.div
      className={`absolute rounded-full ${className} ${size}`}
      style={{ background: `radial-gradient(circle at 30% 30%, ${color}, #000)` }}
      initial={{ scale: 0 }}
      animate={{ 
        scale: 1,
        y: [0, -10, 0],
        x: [0, 5, 0],
      }}
      transition={{
        scale: { duration: 1, ease: "easeOut" },
        y: { repeat: Infinity, duration: randomDuration, ease: "easeInOut" },
        x: { repeat: Infinity, duration: randomDuration * 0.8, ease: "easeInOut" },
      }}
    />
  )
}

const Button = ({ children }: { children: React.ReactNode }) => (
  <motion.button 
    className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 relative overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="absolute inset-0 bg-white"
      initial={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 2, opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    />
    {children}
  </motion.button>
)

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const controls = useAnimation()
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start(i => ({
        opacity: 1,
        transition: { delay: i * 0.1 + delay }
      }))
    }
  }, [isInView, controls, delay])

  return (
    <motion.span ref={textRef} initial={{ opacity: 0 }}>
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} custom={i} animate={controls}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Component() {

  const router = useRouter()

  const handleClick = () => {
    router.push("/contact")
  }


  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050011]">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30"
        animate={{
          background: [
            "linear-gradient(to right, rgba(74, 0, 114, 0.3), rgba(22, 0, 49, 0.3), rgba(0, 0, 92, 0.3))",
            "linear-gradient(to right, rgba(0, 0, 92, 0.3), rgba(74, 0, 114, 0.3), rgba(22, 0, 49, 0.3))",
            "linear-gradient(to right, rgba(22, 0, 49, 0.3), rgba(0, 0, 92, 0.3), rgba(74, 0, 114, 0.3))",
          ],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Central Circles and Rings */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div
          className="h-32 w-32 sm:h-44 sm:w-44 md:h-64 md:w-64 bg-purple-500 rounded-full border border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgba(255,255,255,0.5),-20px_-20px_80px_rgba(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: 1,
          }}
          transition={{ 
            scale: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
            opacity: { duration: 0.8, ease: "easeOut" }
          }}
        />
          
        <Ring className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px]" rotationSpeed={30}>
          <Dot className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
        </Ring>

        <Ring className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] border-dashed" rotationSpeed={40} />

        <Ring className="h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] opacity-20" rotationSpeed={60}>
          <Dot className="left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="left-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Ring>

        <Ring className="h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] opacity-10" rotationSpeed={80}>
          <Dot className="left-1/4 top-0 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="left-3/4 top-full -translate-x-1/2 -translate-y-1/2" />
        </Ring>

        <Ring className="h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] md:h-[650px] md:w-[650px] border-dotted opacity-30" rotationSpeed={100} />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
      <motion.h1 
          className="text-5xl sm:text-3xl md:text-7xl lg:text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] pb-2 text-transparent bg-clip-text px-1"
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
          className="flex justify-center mt-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
           <button onClick={handleClick} className="relative py-2 px-4 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_rgb(140,69,255)] hover:shadow-[0px_0px_16px_rgb(140,69,255)] transition-shadow duration-300">
      <div className="absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to bottom, black, transparent)]"></div>
        <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to top, black, transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg"></div>
      </div>
      <span className="relative z-10">Get Started</span>
    </button>
        </motion.div>
      </div>
    </section>
  )
}