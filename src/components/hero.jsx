import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FiCode, 
  FiSmartphone, 
  FiTrendingUp, 
  FiLayers, 
  FiCloud, 
  FiDatabase,
  FiServer,
  FiGlobe,
  FiMonitor,
  FiShoppingCart,
  FiMessageSquare,
  FiUsers
} from "react-icons/fi";
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiAdobexd, 
  SiFirebase,
  SiShopify,
  SiWordpress
} from "react-icons/si";

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [icons, setIcons] = useState([]);

  // All service icons that will emerge from the laptop
  const availableIcons = [
    { icon: <FiCode className="text-blue-500 text-2xl" />, color: "blue", name: "Web Dev" },
    { icon: <FiSmartphone className="text-purple-500 text-2xl" />, color: "purple", name: "Mobile" },
    { icon: <FiTrendingUp className="text-green-500 text-2xl" />, color: "green", name: "Marketing" },
    { icon: <FiLayers className="text-pink-500 text-2xl" />, color: "pink", name: "UI/UX" },
    { icon: <FiGlobe className="text-indigo-500 text-2xl" />, color: "indigo", name: "Hosting" },
    { icon: <FiMonitor className="text-red-500 text-2xl" />, color: "red", name: "CMS" },
    { icon: <FiShoppingCart className="text-yellow-500 text-2xl" />, color: "yellow", name: "E-commerce" },
    { icon: <FiMessageSquare className="text-teal-500 text-2xl" />, color: "teal", name: "Social Media" },
    { icon: <FiUsers className="text-orange-500 text-2xl" />, color: "orange", name: "Management" },
    { icon: <FaFacebook className="text-blue-600 text-2xl" />, color: "blue", name: "Facebook" },
    { icon: <FaInstagram className="text-pink-600 text-2xl" />, color: "pink", name: "Instagram" },
    { icon: <FaTwitter className="text-blue-400 text-2xl" />, color: "lightblue", name: "Twitter" },
    { icon: <FaLinkedin className="text-blue-700 text-2xl" />, color: "darkblue", name: "LinkedIn" },
    { icon: <SiShopify className="text-green-600 text-2xl" />, color: "green", name: "Shopify" },
    { icon: <SiWordpress className="text-gray-700 text-2xl" />, color: "gray", name: "WordPress" }
  ];

  // Generate beautiful curved paths to various points
  const generatePath = () => {
    const startX = 50;
    const startY = 80;
    const destinations = [
      // Top area
      { endX: 20, endY: 20, controlX1: 30, controlY1: 40, controlX2: 10, controlY2: 30 },
      { endX: 80, endY: 20, controlX1: 70, controlY1: 40, controlX2: 90, controlY2: 30 },
      // Bottom area
      { endX: 20, endY: 80, controlX1: 30, controlY1: 60, controlX2: 10, controlY2: 70 },
      { endX: 80, endY: 80, controlX1: 70, controlY1: 60, controlX2: 90, controlY2: 70 },
      // Middle areas
      { endX: 30, endY: 50, controlX1: 40, controlY1: 60, controlX2: 20, controlY2: 55 },
      { endX: 70, endY: 50, controlX1: 60, controlY1: 60, controlX2: 80, controlY2: 55 },
      { endX: 50, endY: 30, controlX1: 60, controlY1: 50, controlX2: 40, controlY2: 40 }
    ];
    const destination = destinations[Math.floor(Math.random() * destinations.length)];
    
    return {
      path: `M ${startX} ${startY} C ${destination.controlX1} ${destination.controlY1}, ${destination.controlX2} ${destination.controlY2}, ${destination.endX} ${destination.endY}`,
      endX: destination.endX,
      endY: destination.endY,
    };
  };

  // Launch new icons at intervals
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      if (icons.length < 12) { // Increased number of simultaneous icons
        const randomIcon = availableIcons[Math.floor(Math.random() * availableIcons.length)];
        const pathData = generatePath();
        
        setIcons(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            icon: randomIcon.icon,
            color: randomIcon.color,
            name: randomIcon.name,
            path: pathData.path,
            endX: pathData.endX,
            endY: pathData.endY,
          }
        ]);
      }
    }, 600); // Faster icon generation

    return () => clearInterval(interval);
  }, [inView, icons.length]);

  // Remove icons when animation completes
  useEffect(() => {
    if (icons.length > 0) {
      const timeout = setTimeout(() => {
        setIcons(prev => prev.slice(1));
      }, 5000); // Longer visibility

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
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const iconVariants = {
    hidden: { x: 50, y: 80, opacity: 0 },
    visible: (custom) => ({
      x: custom.endX,
      y: custom.endY,
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 4,
        ease: "easeInOut"
      }
    })
  };

  // Service blocks animation
  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  const services = [
    { icon: <FiCode className="text-3xl" />, title: "Web Solutions", description: "Custom websites & web applications", color: "bg-blue-100", text: "text-blue-600" },
    { icon: <FiSmartphone className="text-3xl" />, title: "Mobile Apps", description: "iOS & Android development", color: "bg-purple-100", text: "text-purple-600" },
    { icon: <FiTrendingUp className="text-3xl" />, title: "Digital Marketing", description: "SEO & growth strategies", color: "bg-green-100", text: "text-green-600" },
    { icon: <FiMessageSquare className="text-3xl" />, title: "Social Media", description: "Management & campaigns", color: "bg-pink-100", text: "text-pink-600" },
    { icon: <FiShoppingCart className="text-3xl" />, title: "E-commerce", description: "Online stores & platforms", color: "bg-yellow-100", text: "text-yellow-600" },
    { icon: <FiUsers className="text-3xl" />, title: "Consulting", description: "Digital strategy & planning", color: "bg-indigo-100", text: "text-indigo-600" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="z-10">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Complete Digital
                </span>{" "}
                Solutions
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              >
                From web and mobile development to digital marketing and social media management - 
                we provide end-to-end digital solutions for your business.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-10"
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <FiCode className="mr-3 text-xl" /> Get Your Solution
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 bg-white/80 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold flex items-center transition-all duration-300 shadow-md hover:shadow-lg">
                  <FiCloud className="mr-3 text-xl" /> All Services
                </button>
              </motion.div>

              {/* Stats with glow */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 max-w-md"
              >
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-purple-600 mb-1">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-pink-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Services</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Laptop with animated icons */}
          <div className="relative z-10">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Laptop base with glow */}
              <div className="relative bg-gray-200 rounded-2xl p-2 shadow-2xl h-80">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-30"></div>
                <div className="relative bg-gray-900 rounded-lg overflow-hidden h-full">
                  {/* Laptop screen content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                    {/* Animated floating icons with paths */}
                    <svg 
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {icons.map((icon) => (
                        <g key={`path-${icon.id}`}>
                          <path
                            d={icon.path}
                            fill="none"
                            stroke={`url(#gradient-${icon.color})`}
                            strokeWidth="0.8"
                            strokeDasharray="5 3"
                          />
                          <defs>
                            <linearGradient id={`gradient-${icon.color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
                              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                            </linearGradient>
                          </defs>
                        </g>
                      ))}
                    </svg>

                    {icons.map((icon) => (
                      <motion.div
                        key={icon.id}
                        custom={{ endX: icon.endX, endY: icon.endY }}
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
                        <div className={`bg-white p-3 rounded-full shadow-xl border-2 border-${icon.color}-300 flex flex-col items-center justify-center`}>
                          {icon.icon}
                          <span className="text-xs mt-1 text-gray-800 font-medium">{icon.name}</span>
                        </div>
                      </motion.div>
                    ))}

                    {/* Laptop screen content */}
                    <div className="relative z-10 p-6 text-center">
                      <div className="text-white text-2xl font-bold mb-3">Digital Services Hub</div>
                      <div className="text-gray-400 text-sm">Streaming solutions 24/7</div>
                      <div className="mt-4 flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop bottom */}
              <div className="mt-2 mx-auto w-4/5 h-3 bg-gray-300 rounded-b-xl shadow-lg"></div>
              <div className="mt-1 mx-auto w-1/3 h-2 bg-gray-400 rounded-b-lg"></div>
            </div>

            {/* Redesigned service blocks - 2x3 grid */}
            <motion.div 
              initial="hidden"
              animate={controls}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={serviceVariants}
                  className={`${service.color} p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-${service.text.split('-')[1]}-300 text-center`}
                >
                  <div className={`${service.text} p-3 rounded-full inline-block mb-3`}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated background circles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;