'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx'

const serviceData = [
  {
    icon: <RxCrop className="text-5xl" />,
    title: "Custom Web Applications",
    description:
      "From dynamic web apps to sophisticated online platforms, we design and develop tailor-made web applications that cater to your unique business needs. Our solutions are built with the latest technologies, ensuring optimal performance, security, and scalability.",
    link: "/webapp",
  },
  {
    icon: <RxPencil2 className="text-5xl" />,
    title: "Website Design & Development",
    description:
      "Your website is the face of your business online. Our team of expert designers and developers craft stunning, user-friendly websites that not only look great but also function seamlessly across all devices. We focus on creating engaging experiences that drive user interaction and conversion.",
    link: "/webapp",
  },
  {
    icon: <RxDesktop className="text-5xl" />,
    title: "E-Commerce Solutions",
    description:
      "Elevate your online store with our comprehensive e-commerce solutions. We create robust, secure, and scalable e-commerce platforms that provide a seamless shopping experience for your customers, helping you grow your business effortlessly.",
    link: "/ecommercesollution",
  },
  {
    icon: <RxReader className="text-5xl" />,
    title: "Mobile App Development",
    description:
      "Expand your reach with our mobile app development services. Whether you need an iOS app, an Android app, or a cross-platform solution, we have the expertise to deliver high-quality mobile applications that engage and retain users.",
    link: "/mobileapp",
  },
  {
    icon: <RxRocket className="text-5xl" />,
    title: "Digital Strategy & Consulting",
    description:
      "Navigating the digital landscape can be complex. Our digital strategy and consulting services offer you the guidance and insights needed to make informed decisions, optimize your digital presence, and achieve your business goals.",
    link: "/digitalstrategy",
  },
]

const ServiceCard = ({ service, index }: { service: typeof serviceData[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ scale: 1.05, y: -10 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
  >
    <div className="p-8 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-purple-700 opacity-0"
        whileHover={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-white bg-white bg-opacity-20 p-4 rounded-full inline-block"
        >
          {service.icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>
        <Link href={service.link} className="inline-block">
          <motion.span
            className="text-white font-semibold py-2 px-4 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors duration-300 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.span>
        </Link>
      </div>
    </div>
  </motion.div>
)

export default function OurServices() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center text-white mb-16 leading-tight"
        >
          Our Stellar <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Services</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {serviceData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
