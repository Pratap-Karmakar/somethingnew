'use client';

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const OurProjects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const projectData = [
    {
      name: "Luriana",
      imgSrc: "https://images.pexels.com/photos/27019303/pexels-photo-27019303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A revolutionary AI-powered design tool",
    },
    {
      name: "Nariii",
      imgSrc: "https://images.pexels.com/photos/29087220/pexels-photo-29087220/free-photo-of-brown-pelicans-at-la-jolla-cove-san-diego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Sustainable ocean conservation initiative",
    },
    {
      name: "Naiyo",
      imgSrc: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Next-gen smart home automation system",
    },
    {
      name: "Sirfdill",
      imgSrc: "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Innovative urban vertical farming solution",
    },
    {
      name: "2Strainers",
      imgSrc: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Cutting-edge music production software",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div 
      className="relative w-full py-20 mt-20 overflow-hidden bg-gradient-to-b from-black via-purple-900 to-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 200 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full px-4 md:px-20 border-b border-t border-purple-500/30 pb-20 z-10" ref={containerRef}>
        <motion.h1 
          className="text-4xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pt-10 pb-20 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Stellar Projects
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.name}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredProject(project.name)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.img
                src={project.imgSrc}
                alt={`${project.name} Project`}
                className="w-full h-64 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
                <AnimatePresence>
                  {hoveredProject === project.name && (
                    <motion.p
                      className="text-sm text-gray-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 border-2 border-pink-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default OurProjects;

