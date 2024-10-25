'use client'

import { motion } from "framer-motion"
import React from "react"
import { FaLightbulb, FaHandshake, FaStar } from 'react-icons/fa'

const AboutPage: React.FC = () => {
  return (
    <motion.div
      className="bg-black min-h-screen text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="flex flex-col justify-center items-center pt-20 px-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
        //   className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 pb-10 text-center"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-black bg-yellow-400 px-4 p-2 mb-6 rounded-lg text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Naiyo24 pvt ltd.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl text-center mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We are dedicated to helping businesses grow with innovative solutions
          that are both scalable and future-proof. Our goal is to drive your
          success with our expertise in web and mobile development.
        </motion.p>
        <motion.div
          className="bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 h-1 w-40 rounded-full mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.a
          href="#mission"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.section>

      {/* Mission Statement Section */}
      <motion.section
        id="mission"
        className="flex flex-col items-center py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black bg-yellow-400 px-4 py-2 rounded-lg mb-8">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl text-center leading-relaxed">
          To revolutionize the digital landscape by providing cutting-edge
          solutions that empower businesses to excel in their respective
          industries. We believe in creativity, innovation, and collaboration to
          craft digital experiences that truly make a difference.
        </p>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="flex flex-col items-center py-20 px-4 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {[
            { title: "Innovation", icon: FaLightbulb, description: "We embrace creativity and push the boundaries of technology to build unique solutions tailored to your business needs." },
            { title: "Collaboration", icon: FaHandshake, description: "We believe in teamwork and close collaboration with our clients to deliver the best possible outcome for their projects." },
            { title: "Excellence", icon: FaStar, description: "We are committed to excellence, ensuring that every project we undertake meets the highest standards of quality and innovation." }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-lg p-8 text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <value.icon className="text-5xl text-purple-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">{value.title}</h3>
              <p className="text-gray-700 text-lg">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Let&#39;s Work Together
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-center mb-10 leading-relaxed">
          Whether you&#39;re looking for web development, mobile apps, or digital
          strategy, we are here to help you bring your vision to life. Contact
          us today to get started on your next big project!
        </p>
        <motion.a
          href="/contact"
          className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.section>
    </motion.div>
  )
}

export default AboutPage
