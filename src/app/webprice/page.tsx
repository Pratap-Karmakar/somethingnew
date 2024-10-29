
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WebsiteDevelopmentCost() {
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
        Website Development Cost and Information
      </motion.h1>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Common Website Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-purple-300">
            <thead>
              <tr className="bg-purple-800">
                <th className="border border-purple-300 p-2 text-white">Website Type</th>
                <th className="border border-purple-300 p-2 text-white">Description</th>
                <th className="border border-purple-300 p-2 text-white">Typical Features</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Static Website</td>
                <td className="border border-purple-300 p-2">Simple informational websites</td>
                <td className="border border-purple-300 p-2">Fixed content, contact forms, responsive design</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Dynamic Website</td>
                <td className="border border-purple-300 p-2">Interactive websites with changing content</td>
                <td className="border border-purple-300 p-2">CMS, user accounts, database integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">E-commerce Website</td>
                <td className="border border-purple-300 p-2">Online stores for selling products</td>
                <td className="border border-purple-300 p-2">Product catalog, shopping cart, payment gateway</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Blog/Content Website</td>
                <td className="border border-purple-300 p-2">Platforms for publishing articles and media</td>
                <td className="border border-purple-300 p-2">Content management, comments, categories/tags</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Web Application</td>
                <td className="border border-purple-300 p-2">Complex, feature-rich web-based software</td>
                <td className="border border-purple-300 p-2">User authentication, data processing, API integrations</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Technology Stack Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-purple-300">
            <thead>
              <tr className="bg-purple-800">
                <th className="border border-purple-300 p-2 text-white">Component</th>
                <th className="border border-purple-300 p-2 text-white">Traditional Development</th>
                <th className="border border-purple-300 p-2 text-white">Modern Development</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Frontend</td>
                <td className="border border-purple-300 p-2">HTML, CSS, JavaScript</td>
                <td className="border border-purple-300 p-2">React, Vue.js, Angular</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Backend</td>
                <td className="border border-purple-300 p-2">PHP, Java, Ruby</td>
                <td className="border border-purple-300 p-2">Node.js, Python, Go</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Database</td>
                <td className="border border-purple-300 p-2">MySQL, PostgreSQL</td>
                <td className="border border-purple-300 p-2">MongoDB, Firebase, GraphQL</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">CMS</td>
                <td className="border border-purple-300 p-2">WordPress, Drupal</td>
                <td className="border border-purple-300 p-2">Headless CMS (Contentful, Strapi)</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Hosting</td>
                <td className="border border-purple-300 p-2">Shared Hosting, VPS</td>
                <td className="border border-purple-300 p-2">Cloud (AWS, Google Cloud, Vercel)</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Development Phases</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-purple-300">
            <thead>
              <tr className="bg-purple-800">
                <th className="border border-purple-300 p-2 text-white">Phase</th>
                <th className="border border-purple-300 p-2 text-white">Typical Duration</th>
                <th className="border border-purple-300 p-2 text-white">Description</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Planning</td>
                <td className="border border-purple-300 p-2">1-2 weeks</td>
                <td className="border border-purple-300 p-2">Requirements gathering, sitemap creation</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Design</td>
                <td className="border border-purple-300 p-2">2-4 weeks</td>
                <td className="border border-purple-300 p-2">Wireframing, UI/UX design, mockups</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Development</td>
                <td className="border border-purple-300 p-2">4-12 weeks</td>
                <td className="border border-purple-300 p-2">Frontend and backend coding, CMS integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Content Creation</td>
                <td className="border border-purple-300 p-2">2-4 weeks</td>
                <td className="border border-purple-300 p-2">Writing, editing, and media creation</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Testing</td>
                <td className="border border-purple-300 p-2">1-2 weeks</td>
                <td className="border border-purple-300 p-2">Functionality, compatibility, and performance testing</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-purple-300 p-2">Deployment</td>
                <td className="border border-purple-300 p-2">1 week</td>
                <td className="border border-purple-300 p-2">Site launch, live monitoring</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Cost Factors</h2>
        <ul className="list-disc list-inside text-purple-300">
          <li>Complexity of design and functionality</li>
          <li>Experience of the development team</li>
          <li>Timeframe for project completion</li>
          <li>Number of features and integrations</li>
          <li>Ongoing maintenance and support</li>
        </ul>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Conclusion</h2>
        <p className="text-purple-300">
          Investing in a professional website is crucial for businesses today. Understanding the costs and factors involved helps you make informed decisions about your project.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} className="mt-8 text-center">
        <Link href="/contact">
          <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
            Get a Quote
          </button>
        </Link>
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
