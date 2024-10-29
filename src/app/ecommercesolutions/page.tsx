'use client'

import { motion } from "framer-motion";

const EcommerceSolutions: React.FC = () => {
  return (
    <section className="bg-black py-10 relative">
      {/* Star Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(150)].map((_, index) => (
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

      {/* Header Section */}
      <motion.div
        className="text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">E-Commerce Solutions</h1>
        <p className="text-lg text-purple-300">
          Elevate your online store with our comprehensive e-commerce solutions.
        </p>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-purple-300">
          {[
            "Custom-built or platform-based solutions (Shopify, WooCommerce, etc.)",
            "Secure payment gateway integrations",
            "Inventory management systems",
            "Customer account and loyalty programs",
            "Analytics and reporting tools for business insights",
          ].map((feature, index) => (
            <motion.li
              key={index}
              className="hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Benefits</h2>
        <ul className="list-disc pl-5 space-y-2 text-purple-300">
          {[
            "Increased sales and revenue",
            "Expanded market reach",
            "Improved customer loyalty",
            "Streamlined inventory and order management",
            "Data-driven decision making",
          ].map((benefit, index) => (
            <motion.li
              key={index}
              className="hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {benefit}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Shopify",
            "WooCommerce",
            "Magento",
            "BigCommerce",
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="bg-purple-700 shadow-md p-6 rounded-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-white">{tech}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Our Process</h2>
        <div className="bg-purple-700 shadow-md p-6 rounded-lg space-y-4">
          {[
            { title: "Platform Selection & Strategy", time: "1-2 weeks" },
            { title: "Design & User Experience Optimization", time: "2-3 weeks" },
            { title: "Development & Integration", time: "4-6 weeks" },
            { title: "Payment & Shipping Setup", time: "1-2 weeks" },
            { title: "Testing, Launch & Ongoing Support", time: "Ongoing" },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center hover:bg-purple-600 transition duration-300 p-2 rounded"
            >
              <h3 className="text-white">{step.title}</h3>
              <span className="text-purple-300">{step.time}</span>
            </motion.div>
          ))}
        </div>
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
    </section>
  )
};

export default EcommerceSolutions;
