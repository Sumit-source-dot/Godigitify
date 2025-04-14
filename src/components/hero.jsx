import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FiCode, FiSmartphone, FiTrendingUp, FiLayers, 
  FiCloud, FiGlobe, FiMonitor, FiMessageSquare 
} from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [icons, setIcons] = useState([]);

  const availableIcons = [
    { icon: <FiCode className="text-gray-800 text-xl" />, name: "Web Dev" },
    { icon: <FiSmartphone className="text-gray-800 text-xl" />, name: "Mobile" },
    { icon: <FiTrendingUp className="text-gray-800 text-xl" />, name: "Marketing" },
    { icon: <FiLayers className="text-gray-800 text-xl" />, name: "UI/UX" },
    { icon: <FiGlobe className="text-gray-800 text-xl" />, name: "Hosting" },
    { icon: <FiMonitor className="text-gray-800 text-xl" />, name: "CMS" },
    { icon: <FiMessageSquare className="text-gray-800 text-xl" />, name: "Social Media" },
    { icon: <FaFacebook className="text-gray-800 text-xl" />, name: "Facebook" },
    { icon: <FaInstagram className="text-gray-800 text-xl" />, name: "Instagram" },
    { icon: <FaTwitter className="text-gray-800 text-xl" />, name: "Twitter" },
    { icon: <FaLinkedin className="text-gray-800 text-xl" />, name: "LinkedIn" }
  ];

  const generatePath = (fromLeft) => {
    const startX = fromLeft ? 30 : 70;
    const startY = 90;
    const destinations = [
      { endX: 20, endY: 20, controlX1: fromLeft ? 25 : 75, controlY1: 50 },
      { endX: 80, endY: 20, controlX1: fromLeft ? 35 : 85, controlY1: 50 },
      { endX: 10, endY: 50, controlX1: fromLeft ? 15 : 65, controlY1: 70 },
      { endX: 90, endY: 50, controlX1: fromLeft ? 45 : 95, controlY1: 70 },
      { endX: 50, endY: 30, controlX1: fromLeft ? 40 : 60, controlY1: 60 }
    ];
    const destination = destinations[Math.floor(Math.random() * destinations.length)];
    return {
      path: `M ${startX} ${startY} Q ${destination.controlX1} ${destination.controlY1}, ${destination.endX} ${destination.endY}`,
      endX: destination.endX,
      endY: destination.endY,
      fromLeft
    };
  };

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      if (icons.length < 10) {
        const randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)];
        const fromLeft = Math.random() > 0.5;
        const pathData = generatePath(fromLeft);
        setIcons(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            icon: randomIcon.icon,
            name: randomIcon.name,
            path: pathData.path,
            endX: pathData.endX,
            endY: pathData.endY,
            fromLeft: pathData.fromLeft
          }
        ]);
      }
    }, 700);
    return () => clearInterval(interval);
  }, [inView, icons.length]);

  useEffect(() => {
    if (icons.length > 0) {
      const timeout = setTimeout(() => {
        setIcons(prev => prev.slice(1));
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [icons.length]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  const iconVariants = {
    hidden: (custom) => ({ x: custom.fromLeft ? 30 : 70, y: 90, opacity: 0 }),
    visible: (custom) => ({
      x: custom.endX,
      y: custom.endY,
      opacity: [0, 1, 1, 0],
      transition: { duration: 4, ease: "easeInOut" }
    })
  };

  const services = [
    {
      title: "Web & Mobile",
      description: "Custom websites and mobile applications",
      icon: <FiCode className="text-2xl" />,
      color: "from-purple-400 to-white"
    },
    {
      title: "Digital Marketing",
      description: "Growth-focused online strategies",
      icon: <FiTrendingUp className="text-2xl" />,
      color: "from-blue-400 to-white"
    },
    {
      title: "Social Media",
      description: "Management & campaign services",
      icon: <FiMessageSquare className="text-2xl" />,
      color: "from-gray-400 to-white"
    }
  ];

  return (
    <section className="relative bg-white text-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[600px]">
          
          {/* Left Column */}
          <div className="z-10 h-full flex flex-col justify-center">
            <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants}>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600">
                  Digital Excellence
                </span>{" "}Redefined
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              >
                Comprehensive digital solutions from development to marketing, 
                designed to elevate your online presence.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-10"
              >
                <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-purple-400">
                  <FiCode className="mr-3 text-xl" /> Get Started
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-lg font-semibold flex items-center transition-all duration-300 shadow-md hover:shadow-lg border border-gray-300">
                  <FiCloud className="mr-3 text-xl" /> Our Services
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Laptop */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="relative w-full max-w-lg mx-auto h-full flex flex-col justify-center">
              <div className="relative bg-gray-100 rounded-xl p-1 shadow-2xl h-80 border border-gray-300">
                <div className="bg-white rounded-lg overflow-hidden h-full border border-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {icons.map((icon) => (
                        <path
                          key={`path-${icon.id}`}
                          d={icon.path}
                          fill="none"
                          stroke={icon.fromLeft ? "rgba(168, 85, 247, 0.4)" : "rgba(209, 213, 219, 0.4)"}
                          strokeWidth="0.8"
                          strokeDasharray="5 3"
                        />
                      ))}
                    </svg>

                    {icons.map((icon) => (
                      <motion.div
                        key={icon.id}
                        custom={icon}
                        initial="hidden"
                        animate="visible"
                        variants={iconVariants}
                        className="absolute origin-center"
                        style={{
                          left: `${icon.endX}%`,
                          top: `${icon.endY}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <div className={`bg-gradient-to-br ${icon.fromLeft ? 'from-purple-300 to-purple-100' : 'from-white to-blue-100'} p-3 rounded-full shadow-lg border ${icon.fromLeft ? 'border-purple-300' : 'border-blue-300'} flex flex-col items-center justify-center`}>
                          {icon.icon}
                          <span className="text-xs mt-1 text-gray-700 font-medium">{icon.name}</span>
                        </div>
                      </motion.div>
                    ))}

                    <div className="relative z-10 p-6 text-center">
                      <div className="text-gray-900 text-2xl font-bold mb-3">Digital Solutions</div>
                      <div className="text-gray-500 text-sm">Streaming services...</div>
                      <div className="mt-4 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 mx-auto w-4/5 h-3 bg-gray-200 rounded-b-xl shadow-lg border-t border-gray-300"></div>
              <div className="mt-1 mx-auto w-1/3 h-2 bg-gray-300 rounded-b-lg border-t border-gray-200"></div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 + 1, duration: 0.6 }}
                  className={`bg-gradient-to-br ${service.color} p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="bg-white bg-opacity-60 w-8 h-8 rounded-lg flex items-center justify-center mb-2">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
