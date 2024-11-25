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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Glossy Studio Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900 opacity-90" />

      <div
        className="relative w-full px-4 md:px-20 border-t border-gray-700 pb-20 z-10"
        ref={containerRef}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 pt-10 pb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Studio Excellence
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.name}
              className="relative group overflow-hidden rounded-xl shadow-2xl bg-black/50 transition-all duration-300 transform hover:scale-105 border-2 border-gray-800 hover:border-indigo-500"
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(project.name)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Spotlight effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.img
                src={project.imgSrc}
                alt={`${project.name} Project`}
                className="w-full h-64 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-black/60 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                <AnimatePresence>
                  {hoveredProject === project.name && (
                    <motion.p
                      className="mt-2 text-gray-300 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
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

      {/* Floating Studio Glows */}
      <motion.div
        className="absolute top-16 left-16 w-28 h-28 bg-indigo-600 rounded-full blur-xl opacity-40"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-20 h-20 bg-pink-500 rounded-full blur-lg opacity-50"
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default OurProjects;
