'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function AppDevelopmentCost() {

  const router = useRouter()

  const handleViewPrice = () => {
    router.push('/contact')
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    <motion.div 
      initial="hidden"
      animate="visible"
      className=" mx-auto px-4 py-8 text-white bg-black"
    >
      <motion.h1 
        variants={fadeIn}
        className="text-3xl font-bold my-14 text-center text-purple-500"
      >
        App Development Cost and Information
      </motion.h1>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Common App Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-purple-800">
                <th className="border border-gray-300 p-2 text-black">App Type</th>
                <th className="border border-gray-300 p-2 text-black">Description</th>
                <th className="border border-gray-300 p-2 text-black">Typical Features</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Social Media</td>
                <td className="border border-gray-300 p-2">Platforms for connecting and sharing content</td>
                <td className="border border-gray-300 p-2">User profiles, news feed, messaging</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">E-commerce</td>
                <td className="border border-gray-300 p-2">Online shopping platforms</td>
                <td className="border border-gray-300 p-2">Product catalog, shopping cart, payment integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Health & Fitness</td>
                <td className="border border-gray-300 p-2">Apps for tracking health and exercise</td>
                <td className="border border-gray-300 p-2">Activity tracking, meal planning, progress reports</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Educational</td>
                <td className="border border-gray-300 p-2">Learning and skill development apps</td>
                <td className="border border-gray-300 p-2">Course content, quizzes, progress tracking</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Productivity</td>
                <td className="border border-gray-300 p-2">Tools for improving work efficiency</td>
                <td className="border border-gray-300 p-2">Task management, note-taking, calendar integration</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Technology Stack Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-purple-800">
                <th className="border border-gray-300 p-2 text-black">Component</th>
                <th className="border border-gray-300 p-2 text-black">Native Development</th>
                <th className="border border-gray-300 p-2 text-black">Cross-Platform Development</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Frontend (Mobile)</td>
                <td className="border border-gray-300 p-2">Swift (iOS), Kotlin (Android)</td>
                <td className="border border-gray-300 p-2">React Native, Flutter</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Frontend (Web)</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Backend</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Ruby on Rails</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Ruby on Rails</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Database</td>
                <td className="border border-gray-300 p-2">MongoDB, PostgreSQL, MySQL</td>
                <td className="border border-gray-300 p-2">MongoDB, PostgreSQL, MySQL</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Cloud Services</td>
                <td className="border border-gray-300 p-2">AWS, Google Cloud, Azure</td>
                <td className="border border-gray-300 p-2">AWS, Google Cloud, Azure</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Development Phases</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-purple-800">
                <th className="border border-gray-300 p-2 text-black">Phase</th>
                <th className="border border-gray-300 p-2 text-black">Typical Duration</th>
                <th className="border border-gray-300 p-2 text-black">Description</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Discovery</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Requirements gathering, market research</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Planning</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Project scope, timeline, and resource allocation</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Design</td>
                <td className="border border-gray-300 p-2">2-4 weeks</td>
                <td className="border border-gray-300 p-2">UI/UX design, prototyping, and design approval</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Development</td>
                <td className="border border-gray-300 p-2">8-12 weeks</td>
                <td className="border border-gray-300 p-2">Frontend and backend development, API integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Testing</td>
                <td className="border border-gray-300 p-2">2-3 weeks</td>
                <td className="border border-gray-300 p-2">Quality assurance, bug fixing, and performance optimization</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Deployment</td>
                <td className="border border-gray-300 p-2">1 week</td>
                <td className="border border-gray-300 p-2">Launching the app on stores, monitoring</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>
      
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            className="bg-purple-700 text-white font-bold text-xl py-3 px-8 rounded-full hover:bg-purple-900 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={handleViewPrice}
          >
            Get in Touch
          </button>
        </motion.div>
    </motion.div>

    <style jsx>{`
        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: white;
          border-radius: 50%;
          opacity: 0;
          animation: blink 2s infinite ease-in-out;
        }

        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
