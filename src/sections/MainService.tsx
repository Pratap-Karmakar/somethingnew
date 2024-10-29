"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Crop,
  Pencil,
  Monitor,
  BookOpen,
  Rocket,
} from "lucide-react";
import { useRouter } from "next/navigation";

const serviceData = [
  {
    icon: <Crop className="h-8 w-8 text-primary" />,
    title: "Custom Web Applications",
    description:
      "We create custom web applications tailored to your business needs, utilizing the latest technologies for optimal performance, security, and scalability.",
    link: "/webapp",
  },
  {
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: "Website Design & Development",
    description:
      "Your website is your online face. Our team designs user-friendly sites that look great and drive engagement across all devices.",
    link: "/webapp",
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "E-Commerce Solutions",
    description:
      "Enhance your online store with our secure and scalable e-commerce solutions, providing a seamless shopping experience to boost your business.",
    link: "/ecommercesolutions",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Mobile App Development",
    description:
      "Grow your reach with our mobile app development services for iOS, Android, and cross-platform solutions, delivering high-quality apps that engage users.",
    link: "/mobileapp",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Digital Strategy & Consulting",
    description:
      "Navigate the digital landscape with our strategy and consulting services, providing insights to optimize your presence and achieve business goals.",
    link: "/digitalstrategy",
  },
];

export default function Component() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ourservices");
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between px-2">
      <div className="flex-grow flex flex-col p-4 md:p-8">
        <div className="flex flex-col items-end mb-8 md:mb-16">
          <div className="flex items-center justify-end space-x-2">
            <p className="text-right text-sm font-semibold text-foreground leading-snug">
              We focus on helping your business grow <br /> and move forward
            </p>
            <div className="bg-gradient-to-r from-black to-muted h-px w-24 md:w-48 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow text-center mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-8 space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-black w-24 h-8 md:w-64 md:h-24 rounded-full" />
            <h1 className="text-3xl md:text-8xl font-bold">
              <span className="text-black">Unique</span> Ideas
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <h1 className="text-3xl md:text-8xl font-bold">
              <span className="text-black">For Your</span> Business.
            </h1>
            <button
              onClick={handleClick}
              className="bg-black group gap-3 md:text-2xl text-white hover:bg-zinc-900 px-4 py-2 sm:px-8 sm:py-4 md:px-24 md:py-8 rounded-full text-base sm:text-lg font-medium flex items-center justify-center transition-colors duration-200"
            >
              What We Do?
              <div className="bg-white text-black rounded-full p-2 sm:p-3 md:p-4 transition-transform duration-300 group-hover:translate-x-3 sm:group-hover:translate-x-4 md:group-hover:translate-x-7 group-hover:scale-125">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary transform transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex flex-row gap-4 min-w-max px-4">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[80vw] sm:w-[300px] flex-shrink-0 group relative"
            >
              <div className="bg-card text-card-foreground border border-border h-full flex flex-col p-6 group rounded-lg">
                <div className="absolute top-0 left-0 h-1 w-full bg-black transform scale-x-0 transition-transform duration-700 rounded-t-full origin-left group-hover:scale-x-100" />
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground flex-grow">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center"
                >
                  <div className=" bg-black rounded-full p-4 transition-transform duration-300 group-hover:translate-x-5">
                    <ArrowRight className="h-5 w-5  text-white" />
                  </div>
                  <span className="sr-only">
                    Learn more about {service.title}
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
