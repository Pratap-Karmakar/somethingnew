'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChartLine, FaCogs, FaChartBar, FaRocket, FaLaptopCode, FaUsers, FaAd, FaSearchDollar, FaChartPie, FaHandshake, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const services = [
  { 
    icon: FaChartLine, 
    title: "Tailored, Impactful Digital Strategies",
    description: "We start by aligning our strategies with your unique goals, industry, and audience. Each strategy is designed to expand your market, elevate brand recognition, and engage your audience.",
    details: [
      "In-depth market analysis",
      "Customized digital roadmaps",
      "Brand positioning strategies",
      "Audience segmentation and targeting"
    ]
  },
  { 
    icon: FaCogs, 
    title: "Operational Efficiency & Digital Agility",
    description: "We're right beside you, implementing best practices to streamline operations and drive productivity. Through efficient automation and workflow optimization, we reduce costs and boost productivity.",
    details: [
      "Business process reengineering",
      "Workflow automation solutions",
      "Digital transformation consulting",
      "Change management support"
    ]
  },
  { 
    icon: FaChartBar, 
    title: "Maximized Digital ROI and Business Results",
    description: "Valuable data becomes strategic action, increasing your digital ROI and supporting smarter decisions. Every initiative is crafted to directly support revenue growth and sustainable business success.",
    details: [
      "Data-driven decision making",
      "ROI tracking and optimization",
      "Performance metrics definition",
      "Continuous improvement strategies"
    ]
  },
  { 
    icon: FaRocket, 
    title: "Staying Ahead of Trends",
    description: "We keep you at the forefront of digital trends and technology, ensuring you're always prepared. Our forward-thinking strategies make your business resilient, relevant, and ready for what's next.",
    details: [
      "Emerging technology adoption",
      "Industry trend analysis",
      "Competitive landscape monitoring",
      "Innovation workshops"
    ]
  },
  { 
    icon: FaLaptopCode, 
    title: "IT Solutions",
    description: "Powerful, scalable technology to build your digital infrastructure. We provide end-to-end IT solutions tailored to your business needs.",
    details: [
      "Custom software development",
      "Cloud migration and management",
      "Cybersecurity solutions",
      "IT infrastructure optimization"
    ]
  },
  { 
    icon: FaUsers, 
    title: "Customer Base Growth",
    description: "Targeted strategies to attract, engage, and retain loyal customers. We help you build a strong, growing customer base.",
    details: [
      "Customer acquisition strategies",
      "Loyalty program development",
      "Customer journey mapping",
      "Personalization techniques"
    ]
  },
  { 
    icon: FaAd, 
    title: "Advertising & Finance Guidance",
    description: "Expert advice on ad management and financial planning to maximize resources. We help you make the most of your advertising budget and financial strategies.",
    details: [
      "Digital advertising optimization",
      "Budget allocation strategies",
      "Financial forecasting",
      "ROI-driven campaign management"
    ]
  },
  { 
    icon: FaSearchDollar, 
    title: "Market Research & Marketing",
    description: "In-depth analysis to inform your strategic moves and enhance market positioning. Our research-backed marketing strategies drive results.",
    details: [
      "Competitor analysis",
      "Market opportunity identification",
      "Consumer behavior studies",
      "Integrated marketing campaigns"
    ]
  },
  { 
    icon: FaChartPie, 
    title: "Sales Development",
    description: "Proven methods to boost sales performance and drive revenue. We help you optimize your sales processes and grow your bottom line.",
    details: [
      "Sales funnel optimization",
      "CRM implementation and training",
      "Sales team coaching",
      "Lead generation and nurturing"
    ]
  },
  { 
    icon: FaHandshake, 
    title: "Funding Guidance",
    description: "Support in securing the funding needed to fuel business growth. We guide you through the fundraising process and help you attract investors.",
    details: [
      "Investor pitch preparation",
      "Financial modeling",
      "Due diligence support",
      "Funding options analysis"
    ]
  },
]

const Star: React.FC<{ top: string; left: string; size: number }> = ({ top, left, size }) => {
  const [opacity, setOpacity] = useState(Math.random())

  

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(Math.random())
    }, Math.random() * 3000 + 1000)

    return () => clearInterval(interval)
  }, [])



  return (
    <div
      className="absolute rounded-full bg-white"
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity,
        transition: 'opacity 0.5s ease-in-out',
      }}
    />
  )
}

const StarField: React.FC = () => {
  const stars = Array.from({ length: 50 }, (_, i) => (
    <Star
      key={i}
      top={`${Math.random() * 100}%`}
      left={`${Math.random() * 100}%`}
      size={Math.random() * 2 + 1}
    />
  ))

  return <div className="fixed inset-0 overflow-hidden pointer-events-none">{stars}</div>
}

const ServiceCard: React.FC<{ service: typeof services[0], index: number }> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <service.icon className="text-purple-500 text-4xl" />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-purple-500 hover:text-purple-400 transition-colors"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
      <p className="text-gray-400 mb-4">{service.description}</p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-300">
              {service.details.map((detail, idx) => (
                <li key={idx} className="mb-1">{detail}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Naiyo24DigitalStrategy: React.FC = () => {

  const router = useRouter()
  const handleViewPrice = () => {
    router.push('/contact')
  }


  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <StarField />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Digital Strategy & Consulting by Naiyo24 Private Limited
        </motion.h1>
        
        <motion.p 
          className="text-lg text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          In today&apos;s fast-paced digital landscape, simply being online isn&apos;t enough. You need precision, purpose, and a partner who truly understands your vision. That&apos;s Naiyo24 Private Limited. We elevate your brand, amplify your reach, and unlock measurable success.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-500">Why Choose Naiyo24?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our commitment to service-oriented and product-oriented businesses sets us apart. 
            Naiyo24 Private Limited is built on trust, transparency, and tangible results. 
            We&apos;re your partner in building a future of sustainable growth and digital excellence.
          </p>
          <p className="max-w-2xl mx-auto mb-8">
            Choose Naiyo24 and experience a partnership focused on your success. We&apos;ll help you realize the power of a strategic, insight-driven approach tailored for lasting impact.
          </p>
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
            Talk to Us
          </button>
        </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Naiyo24DigitalStrategy