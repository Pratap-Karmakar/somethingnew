"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx"; // Ensure you import icons
import { FaArrowRight } from "react-icons/fa6";

const serviceData = [
  {
    icon: <RxCrop className="text-3xl text-purple-300" />,
    title: "Custom Web Applications",
    description:
      "We create custom web applications tailored to your business needs, utilizing the latest technologies for optimal performance, security, and scalability.",
    link: "/webapp",
  },
  {
    icon: <RxPencil2 className="text-3xl text-purple-300" />,
    title: "Website Design & Development",
    description:
      "Your website is your online face. Our team designs user-friendly sites that look great and drive engagement across all devices.",
    link: "/webapp",
  },
  {
    icon: <RxDesktop className="text-3xl text-purple-300" />,
    title: "E-Commerce Solutions",
    description:
      "Enhance your online store with our secure and scalable e-commerce solutions, providing a seamless shopping experience to boost your business.",
    link: "/ecommercesollution",
  },
  {
    icon: <RxReader className="text-3xl text-purple-300" />,
    title: "Mobile App Development",
    description:
      "Grow your reach with our mobile app development services for iOS, Android, and cross-platform solutions, delivering high-quality apps that engage users.",
    link: "/mobileapp",
  },
  {
    icon: <RxRocket className="text-3xl text-purple-300" />,
    title: "Digital Strategy & Consulting",
    description:
      "Navigate the digital landscape with our strategy and consulting services, providing insights to optimize your presence and achieve business goals.",
    link: "/digitalstrategy",
  },
];

const MainService = () => {
  return (
    <motion.div className="text-white relative bg-black min-h-screen flex flex-col justify-between">
      {/* Text at the top-right */}
      <div className="absolute top-0 right-0 flex items-start justify-end m-4 mt-20">
        <div className="flex items-center">
          <p className="text-right text-sm font-semibold text-purple-300 leading-snug shadow-md mr-2">
            We focus on helping your business grow <br /> and move forward
          </p>
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-[1px] w-[200px] lg:w-[300px] rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"></div>{" "}
        </div>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 text-center md:text-left">
        {/* First row: Purple div and "Unique Ideas" */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="bg-purple-500 w-[120px] h-[40px] lg:w-[200px] lg:h-[60px] border rounded-full mr-0 md:mr-4 mb-4 md:mb-0"></div>
          <h1 className="text-3xl lg:text-5xl">
            <span className="font-bold text-purple-400">Unique </span>
            Ideas
          </h1>
        </div>

        {/* Second row: "For Your Business" text and large button */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-1 space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="text-3xl lg:text-5xl">
            <span className="font-bold text-purple-400">For Your</span>
            Business.
          </h1>
          <div className="flex">
            <button className="bg-purple-300 text-black w-[180px] h-[50px] lg:w-[230px] lg:h-[60px] rounded-full hover:bg-purple-400 text-lg lg:text-xl flex items-center justify-center">
              <p className="mr-2">What We Do?</p>
              <div className="bg-white rounded-full p-2">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* List section with cards aligned to the bottom */}
      <div className="flex flex-wrap justify-center">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-black border border-b border-b-black border-white/20 text-white p-6 m-2 transform transition-transform duration-300 text-left w-[280px] h-[320px] sm:w-[300px] sm:h-[350px] flex flex-col justify-between overflow-hidden group"
          >
            <div className="mb-4">{service.icon}</div>
            <h1 className="text-lg font-bold mb-2">{service.title}</h1>
            <p className="mb-2 text-sm">{service.description}</p>

            <button
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
              onClick={() => (window.location.href = service.link)}
            >
              Read More
            </button>

            <div className="absolute top-0 left-0 h-1 bg-purple-500 transform scale-x-0 transition-transform duration-700 origin-left group-hover:scale-x-100 w-full"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MainService;
