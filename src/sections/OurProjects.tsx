'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";

const OurProjects: React.FC = () => {
  const [hovering, setHovering] = useState({
    Luriana: false,
    Nariii: false,
    Naiyo: false,
    Sirfdill: false,
    Strainers: false,
  });

  const handleMouseEnter = (project: string) => {
    setHovering((prev) => ({ ...prev, [project]: true }));
  };

  const handleMouseLeave = (project: string) => {
    setHovering((prev) => ({ ...prev, [project]: false }));
  };

  const projectData = [
    { name: "Luriana", imgSrc: "https://images.pexels.com/photos/27019303/pexels-photo-27019303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", positionClass: "left-full -translate-x-1/2" },
    { name: "Nariii", imgSrc: "https://images.pexels.com/photos/29087220/pexels-photo-29087220/free-photo-of-brown-pelicans-at-la-jolla-cove-san-diego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", positionClass: "right-full translate-x-1/2" },
    { name: "Naiyo", imgSrc: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", positionClass: "left-full -translate-x-1/2" },
    { name: "Sirfdill", imgSrc: "https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", positionClass: "right-full translate-x-1/2" },
    { name: "2Strainers", imgSrc: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", positionClass: "left-full -translate-x-1/2" },
  ];

  // Zigzag line styles and animation
  const zigzagStyle = (animationDelay: string, direction: "left" | "right") => ({
    position: "absolute" as "absolute",
    left: direction === "left" ? 0 : "auto",
    right: direction === "right" ? 0 : "auto",
    width: "100%",
    height: "20px",
    backgroundImage: "linear-gradient(135deg, transparent 25%, #FFD700 25%, #FFD700 50%, transparent 50%, transparent 75%, #FFD700 75%)",
    backgroundSize: "30px 30px",
    opacity: 0.5,
    pointerEvents: "none" as "none",
    animation: `slide 6s ease-in-out infinite`,
    animationDelay: animationDelay,
  });

  return (
    <div className="relative w-full py-20 mt-20 overflow-hidden">
      {/* Animated Zigzag Background Lines */}
      <div style={{ ...zigzagStyle("0s", "left"), top: "10%" }}></div>
      <div style={{ ...zigzagStyle("1s", "right"), top: "25%" }}></div>
      <div style={{ ...zigzagStyle("2s", "left"), top: "40%" }}></div>
      <div style={{ ...zigzagStyle("3s", "right"), top: "55%" }}></div>
      <div style={{ ...zigzagStyle("4s", "left"), top: "70%" }}></div>
      <div style={{ ...zigzagStyle("4s", "right"), top: "85%" }}></div>
      <div style={{ ...zigzagStyle("4s", "left"), top: "100%" }}></div>

      <div className="relative w-full px-2 md:px-20 lg:px-20 xl:px-20 border-b border-t border-zinc-700 pb-20 z-10">
        <h1 className="md:text-7xl lg:text-7xl xl:text-8xl text-3xl font-bold tracking-tight text-black pt-10 pb-20">
          Our Projects.
        </h1>

        <div className="cards w-full grid grid-cols-2 md:grid-cols-2 md:gap-10 lg:gap-10 xl:gap-10 gap-3">
          {projectData.map((project) => (
            <div
              key={project.name}
              onMouseEnter={() => handleMouseEnter(project.name)}
              onMouseLeave={() => handleMouseLeave(project.name)}
              className="cardcontainer relative rounded-xl w-full h-full"
            >
              <h1
                className={`absolute flex text-yellow-500 font-bold ${project.positionClass} top-1/2 -translate-y-1/2 z-10 text-8xl overflow-hidden hidden md:flex ${
                  hovering[project.name as keyof typeof hovering] ? "opacity-100" : "opacity-0"
                }`}
              >
                {project.name.split("").map((letter, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering[project.name as keyof typeof hovering] ? { y: "0%" } : { y: "100%" }}
                    transition={{ duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55], delay: index * 0.1 }}
                    className="inline-block"
                    key={index}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <div className="card w-full h-full rounded-xl overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-500 relative">
                <img src={project.imgSrc} alt={`${project.name} Project`} className="hover:scale-110 transition-all duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center md:hidden">
                  <h1 className="text-4xl font-bold text-yellow-500">{project.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Keyframes */}
      <style>{`
  @keyframes slide {
    0% { transform: translateX(0); }
    25% { transform: translateX(10px); }
    50% { transform: translateX(20px); }
    75% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }
`}</style>
    </div>
  );
};

export default OurProjects;
