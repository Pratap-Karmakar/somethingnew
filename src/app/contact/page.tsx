'use client'

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface BubbleProps {
  id: number; // Added id to the interface
  size: number;
  position: { x: number; y: number };
  delay: number;
}

const Bubble: React.FC<BubbleProps> = ({ size, position, delay }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -window.innerHeight],
      x: [position.x, position.x + Math.sin(position.y) * 50],
      transition: {
        duration: 10 + Math.random() * 20,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }, [controls, position, delay])

  return (
    <motion.div
      className="absolute rounded-full bg-purple-400 opacity-20"
      style={{
        width: size,
        height: size,
        bottom: -size,
        left: position.x,
      }}
      animate={controls}
    />
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [bubbles, setBubbles] = useState<BubbleProps[]>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i, // Keep id here
      size: Math.random() * 60 + 20,
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
      delay: Math.random() * 5,
    }))
    setBubbles(newBubbles)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Message sent!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="relative px-4 md:px-0 lg:px-0 xl:px-0 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(to right, #221133, #311949)",
            "linear-gradient(to right, #311949, #221133)",
          ],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {bubbles.map((bubble) => (
      <Bubble 
        key={bubble.id} 
        id={bubble.id} // Added id prop
        size={bubble.size} 
        position={bubble.position} 
        delay={bubble.delay} 
      />
    ))}
      
      {/* Heading text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-bold text-white text-center mb-12 z-10"
      >
        Get in Touch
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-md bg-black/80 p-8 rounded-lg shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-semibold text-purple-400 text-center mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-purple-400 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-purple-400 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <label htmlFor="message" className="block text-purple-400 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-purple-400 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-purple-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
