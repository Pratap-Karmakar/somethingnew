"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { FaLightbulb, FaHandshake, FaPuzzlePiece, FaTrophy } from "react-icons/fa"
import { MdSecurity, MdCloud } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri"
import { useRef, FC } from "react"
import Link from 'next/link'

interface ValueProps {
  icon: FC;
  title: string;
  text: string;
}

interface ServiceProps {
  icon: FC;
  text: string;
}

const values: ValueProps[] = [
  { icon: FaLightbulb, title: "Innovation", text: "Embracing cutting-edge technologies to stay ahead of the curve." },
  { icon: FaHandshake, title: "Integrity", text: "Upholding transparency, ethics, and reliability in every interaction." },
  { icon: RiTeamFill, title: "Collaboration", text: "Fostering a culture of teamwork, open communication, and mutual support." },
  { icon: FaTrophy, title: "Excellence", text: "Pursuing perfection in every project, every time." },
];

const services: ServiceProps[] = [
  { icon: FaPuzzlePiece, text: "Enhance operational efficiency" },
  { icon: MdSecurity, text: "Protect valuable data and assets" },
  { icon: MdCloud, text: "Drive digital transformation" },
  { icon: FaLightbulb, text: "Unlock business growth" },
];

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen p-8 relative overflow-hidden bg-black"
    >
      {/* Floating shapes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <motion.div style={{ opacity, scale }} className="relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-12 text-center text-purple-400"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {Array.from("Naiyo24 pvt ltd.").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.section {...fadeInUp} className="mb-16 text-white">
          <p className="text-xl mb-6 leading-relaxed">
            At Naiyo24 pvt ltd. we are dedicated to delivering cutting-edge IT solutions that empower businesses and individuals in today&apos;s digital landscape. Our expertise spans across various technological domains, enabling us to craft innovative products and services that drive growth and enhance user experiences.
          </p>
          <p className="text-xl leading-relaxed">
            We pride ourselves on being at the forefront of technology, constantly evolving to meet the changing needs of our clients. From software development to IT consulting, our team of professionals is committed to excellence, quality, and customer satisfaction.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-4xl font-semibold mb-6 text-purple-400">Our Mission</h2>
          <p className="text-xl text-white leading-relaxed">
            Our mission is to bridge the gap between technology and business needs, providing exceptional IT solutions that exceed our clients&apos;s expectations. We strive to build lasting relationships, fueled by trust, expertise, and a customer-centric approach.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-purple-400">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-purple-400 text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-400">{item.title}</h3>
                <p className="text-white">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-purple-400">What We Do</h2>
          <p className="text-xl mb-6 text-white leading-relaxed">
            From IT consulting and managed services to cybersecurity, cloud solutions, and software development, our comprehensive suite of services is designed to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <item.icon className="text-purple-400 text-3xl flex-shrink-0" />
                <span className="text-lg text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="text-center">
          <h2 className="text-4xl font-semibold mb-6 text-purple-400">Get in Touch</h2>
          <p className="text-xl mb-8 text-white leading-relaxed">
            Ready to explore how Naiyo24 pvt ltd. can help you achieve your technology goals? Contact us today to discover how our expertise can shape your IT future.
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-purple-400 to-purple-600 text-black px-8 py-4 rounded-full font-semibold text-xl shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(128, 0, 128, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
