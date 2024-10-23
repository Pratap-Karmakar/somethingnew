"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

interface LinkProps {
  label: string;
  href: string;
}

interface LinkSectionProps {
  title: string;
  links: LinkProps[];
  variants: any;
}

export default function Footer() {
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  return (
    <motion.footer
      className="relative text-gray-200 pt-44 w-full min-h-screen bg-[#080114] py-28 px-4 sm:px-6 lg:px-8 flex flex-col overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <StarBackground />
      <div className="max-w-7xl mx-auto flex-grow flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <motion.div className="lg:w-1/2 flex flex-col justify-between" variants={itemVariants}>
          <div className="space-y-6">
            <motion.h2
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-purple-800"
              variants={itemVariants}
            >
              About.
            </motion.h2>
            <motion.p className="max-w-md text-lg text-gray-300" variants={itemVariants}>
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We're committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </motion.p>
          </div>
          <motion.div className="mt-16 lg:mt-0 font-semibold text-2xl text-gray-300" variants={itemVariants}>
            Naiyo24 pvt ltd.
          </motion.div>
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-12" variants={itemVariants}>
          <motion.h3 className="text-4xl sm:text-5xl font-semibold text-purple-700" variants={itemVariants}>
            Quick Links.
          </motion.h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" variants={containerVariants}>
            <LinkSection
              title="Social"
              links={[
                { label: "Facebook", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" },
              ]}
              variants={itemVariants}
            />
            <LinkSection
              title="Company"
              links={[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "/contact" },
              ]}
              variants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="mt-16 pt-8 border-t border-[#1a1528] text-center text-sm text-gray-400"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} NAIYO24 PRIVATE LIMITED. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
}

function LinkSection({ title, links, variants }: LinkSectionProps) {
  return (
    <motion.div className="space-y-4" variants={variants}>
      <h4 className="text-2xl font-semibold text-gray-200">{title}.</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Star Background Component with Slower Blinking Stars
function StarBackground() {
  const starCount = 100; // Adjust the number of stars here
  const stars = Array.from({ length: starCount });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`, // Random size between 1px and 4px
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`, // Random position on Y axis
            left: `${Math.random() * 100}%`, // Random position on X axis
          }}
          initial={{
            opacity: Math.random(), // Initial random opacity for blinking effect
          }}
          animate={{
            opacity: [0, 1, 0], // Blinking effect
          }}
          transition={{
            duration: Math.random() * 5 + 3, // Slower duration between 3s and 8s
            repeat: Infinity,
            ease: "easeInOut", // Smooth easing for a slower blink
          }}
        />
      ))}
    </div>
  );
}
