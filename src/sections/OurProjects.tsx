"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const OurProjects = () => {
  const [hoveringLuriana, setHoveringLuriana] = useState(false);
  const [hoveringNariii, setHoveringNariii] = useState(false);

  return (
    <div className="relative w-full py-20 mt-20">
      {/* Two Yellow Circles at Top Right Corner */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-10 right-20 w-64 h-64 bg-yellow-500 rounded-full opacity-50 -translate-x-1/4 -translate-y-1/4"></div>

      <div className="w-full px-20 border border-zinc-700 pb-20 relative z-10">
        <h1 className="text-7xl font-bold tracking-tight text-black pt-10 pb-20">
          Our Projects.
        </h1>
        <div className="cards w-full flex gap-10">
          
          {/* Card for Luriana */}
          <div
            onMouseEnter={() => setHoveringLuriana(true)}
            onMouseLeave={() => setHoveringLuriana(false)}
            className="cardcontainer relative rounded-xl w-1/2 h-full"
          >
            <h1 className="absolute flex text-yellow-500 font-bold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl overflow-hidden">
              {"Luriana".split("").map((letter, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveringLuriana ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.68, -0.55, 0.27, 1.55],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/27019303/pexels-photo-27019303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Luriana Project"
              />
            </div>
          </div>

          {/* Card for Nariii */}
          <div
            onMouseEnter={() => setHoveringNariii(true)}
            onMouseLeave={() => setHoveringNariii(false)}
            className="cardcontainer relative rounded-xl w-1/2 h-full"
          >
            <h1 className="absolute flex text-yellow-500 font-bold right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl overflow-hidden">
              {"Nariii".split("").map((letter, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hoveringNariii ? { y: "0%" } : { y: "100%" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.68, -0.55, 0.27, 1.55],
                    delay: index * 0.1,
                  }}
                  className="inline-block"
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-500">
              <img
                src="https://images.pexels.com/photos/29087220/pexels-photo-29087220/free-photo-of-brown-pelicans-at-la-jolla-cove-san-diego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nariii Project"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurProjects;
