'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, 
  RxArrowTopRight, RxChevronDown, RxChevronUp 
} from "react-icons/rx"
import Link from 'next/link'

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  details: string[];
  benefits: string[];
  technologies: string[];
  process: string[];
  link: string;
}

const serviceData: Service[] = [
  {
    icon: <RxCrop />,
    title: "Custom Web Applications",
    description: "From dynamic web apps to sophisticated online platforms...",
    details: [
      "Customized solutions to fit your specific business requirements",
      "Scalable architecture to grow with your business",
      "Integration with existing systems and third-party APIs",
      "Robust security measures to protect your data",
      "Ongoing support and maintenance"
    ],
    benefits: [
      "Increased efficiency and productivity",
      "Improved customer engagement and satisfaction",
      "Streamlined business processes",
      "Enhanced data management and analysis capabilities",
      "Competitive advantage in the digital marketplace"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "MongoDB", "PostgreSQL"],
    process: [
      "Requirements gathering and analysis",
      "Design and prototyping",
      "Development and testing",
      "Deployment and integration",
      "Maintenance and support"
    ],
    link: "/webapp"
  },
  {
    icon: <RxDesktop />,
    title: "E-Commerce Solutions",
    description: "Elevate your online store with our comprehensive e-commerce solutions. We create robust, secure, and scalable e-commerce platforms that provide a seamless shopping experience for your customers, helping you grow your business effortlessly.",
    details: [
      "Custom-built or platform-based solutions (Shopify, WooCommerce, etc.)",
      "Secure payment gateway integrations",
      "Inventory management systems",
      "Customer account and loyalty programs",
      "Analytics and reporting tools for business insights"
    ],
    benefits: [
      "Increased sales and revenue",
      "Expanded market reach",
      "Improved customer loyalty",
      "Streamlined inventory and order management",
      "Data-driven decision making"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom solutions"],
    process: [
      "Platform selection and strategy",
      "Design and user experience optimization",
      "Development and integration",
      "Payment and shipping setup",
      "Testing, launch, and ongoing support"
    ],
    link: "/ecommercesollution"
  },
  {
    icon: <RxReader />,
    title: "Mobile App Development",
    description: "Expand your reach with our mobile app development services. Whether you need an iOS app, an Android app, or a cross-platform solution, we have the expertise to deliver high-quality mobile applications that engage and retain users.",
    details: [
      "Native iOS and Android app development",
      "Cross-platform development using React Native or Flutter",
      "User-friendly interface design",
      "Push notification and in-app messaging features",
      "App store optimization for better visibility"
    ],
    benefits: [
      "Increased customer engagement and loyalty",
      "New revenue streams",
      "Improved brand visibility and recognition",
      "Enhanced customer service and support",
      "Valuable user data and insights"
    ],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    process: [
      "Concept and strategy development",
      "UI/UX design and prototyping",
      "Development and testing",
      "App store submission and approval",
      "Post-launch support and updates"
    ],
    link: "/mobileapp"
  },
  {
    icon: <RxRocket />,
    title: "Digital Strategy & Consulting",
    description: "Navigating the digital landscape can be complex. Our digital strategy and consulting services offer you the guidance and insights needed to make informed decisions, optimize your digital presence, and achieve your business goals.",
    details: [
      "Comprehensive digital audits and competitive analysis",
      "Custom digital transformation roadmaps",
      "Technology stack recommendations",
      "Data-driven insights for decision making",
      "Ongoing support and strategy refinement"
    ],
    benefits: [
      "Clear direction for digital initiatives",
      "Optimized resource allocation",
      "Improved ROI on digital investments",
      "Competitive advantage in the digital space",
      "Agile adaptation to market changes"
    ],
    technologies: ["Analytics tools", "CRM systems", "Marketing automation", "Business intelligence software"],
    process: [
      "Discovery and assessment",
      "Strategy development",
      "Implementation planning",
      "Execution support",
      "Monitoring and optimization"
    ],
    link: "/digitalstrategy"
  }
]

const DetailedServices: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Comprehensive IT Services
      </motion.h1>
      <motion.p 
        className="text-lg text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover how our cutting-edge IT solutions can transform your business...
      </motion.p>
      {serviceData.map((service, index) => (
        <motion.div 
          key={index}
          className="mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.div 
            className="flex items-center justify-between p-6 cursor-pointer"
            onClick={() => toggleService(index)}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-center">
              <div className="text-purple-400 text-3xl mr-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            </div>
            <motion.div
              animate={{ rotate: expandedService === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {expandedService === index ? <RxChevronUp size={24} /> : <RxChevronDown size={24} />}
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {expandedService === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 text-gray-300">
                  <p className="text-lg mb-4">{service.description}</p>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Key Features</h3>
                  <ul className="list-disc list-inside mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="mb-1">{detail}</li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Benefits</h3>
                  <ul className="list-disc list-inside mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-1">{benefit}</li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white">{tech}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Our Process</h3>
                  <ol className="list-decimal list-inside mb-6">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="mb-1">{step}</li>
                    ))}
                  </ol>
                  <Link href={service.link}>
                    <motion.a
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More About {service.title}
                      <RxArrowTopRight className="ml-2" />
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default DetailedServices




