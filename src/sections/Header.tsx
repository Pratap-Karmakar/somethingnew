'use client'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react"
import logo from '../assets/naiyo24.png'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="border-b border-white/15">
      <AnimatePresence>
        <motion.div
          className="md:px-16 p-4 mx-auto"
          initial={{ opacity: 0, y: -100 }} // Start above the view
          animate={{ opacity: 1, y: 0 }}    // Slide down to its original position
          exit={{ opacity: 0, y: -100 }}     // Slide back up when exiting
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex justify-between items-center"
          >
            <div>
              <Image src={logo} alt="Logo" width={64} height={64} className="w-16" />
            </div>
            <div className="relative z-50">
              <motion.button
                className="relative py-2 px-3 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_rgb(140,69,255)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDropdown}
              >
                <div className="absolute inset-0">
                  <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                  <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg" />
                </div>
                <span className="flex items-center justify-center text-2xl text-white z-50">
                  <AnimatePresence mode="wait">
                    {isDropdownOpen ? (
                      <motion.span
                        key="close"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        &times;
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {isDropdownOpen && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-center relative text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="space-y-4 text-2xl">
                  <li className="hover:underline hover:text-purple-600">
                    <a href="#services">Our Services</a>
                  </li>
                  <li className="hover:underline hover:text-purple-600">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="hover:underline hover:text-purple-600">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </header>
  )
}
