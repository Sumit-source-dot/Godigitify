import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCode, FiLayers, FiChevronRight } from 'react-icons/fi';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.2, 0.6, 0.3, 1]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-white py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50/80 to-transparent -z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-[100px] opacity-20 -z-0"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#00112d]/5 rounded-full filter blur-[80px] -z-0"></div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10">
        {/* Hero Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-24"
        >
          <motion.span 
            className="inline-block bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-sm border border-purple-100/50"
            whileHover={{ 
              y: -3,
              boxShadow: '0 6px 16px -4px rgba(124, 58, 237, 0.2)'
            }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="relative">
              About Godigitify
              <span className="absolute -right-3 -top-3 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            </span>
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#00112d] mb-6 leading-tight"
            variants={fadeIn}
          >
            Redefining <span className="relative">
              <span className="text-purple-600">Digital Transformation</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-100/60 -z-10"></span>
            </span>
          </motion.h2>
          <motion.div 
            className="w-28 h-1.5 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 mx-auto mb-8 rounded-full"
            variants={fadeIn}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Where innovative technology meets strategic vision to craft exceptional digital experiences that propel businesses forward.
          </motion.p>
        </motion.div>

        {/* Company Intro with Stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 
              variants={fadeIn} 
              className="text-3xl lg:text-4xl font-semibold text-[#00112d] mb-8 leading-tight"
            >
              Your Strategic <span className="text-purple-600">Digital Ally</span> in a Competitive World
            </motion.h3>
            <motion.p 
              variants={fadeIn} 
              className="text-lg leading-relaxed mb-12 text-gray-700"
            >
              At <span className="font-semibold text-purple-600 relative">
                Godigitify
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-purple-100/50"></span>
              </span>, we don't just build solutions - we architect digital futures. Our multidisciplinary team combines technical mastery with creative vision to deliver transformative results that matter.
            </motion.p>
            
            <motion.div 
              variants={fadeIn} 
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-400 group relative overflow-hidden"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-100/30 rounded-full"></div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-xl mr-5 group-hover:from-purple-200 group-hover:to-purple-100 transition-all shadow-inner">
                    <FiAward className="text-purple-600 text-2xl group-hover:text-purple-700 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-[#00112d] mb-1">5+</h4>
                    <p className="text-sm text-gray-600">Years Excellence</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-400 group relative overflow-hidden"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-100/30 rounded-full"></div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-xl mr-5 group-hover:from-purple-200 group-hover:to-purple-100 transition-all shadow-inner">
                    <FiUsers className="text-purple-600 text-2xl group-hover:text-purple-700 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-[#00112d] mb-1">150+</h4>
                    <p className="text-sm text-gray-600">Successful Partnerships</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.2, 0.6, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-purple-50/80 to-white rounded-3xl -z-10 rotate-3"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 -z-10"></div>
            <motion.div 
              className="overflow-hidden rounded-2xl shadow-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working on digital solutions" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs backdrop-blur-sm"
            >
              <div className="flex items-center mb-3">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#00112d]">Trusted by industry leaders</h5>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">"Godigitify transformed our digital ecosystem with remarkable precision."</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Cards (Unchanged as requested) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-[#00112d] rounded-2xl p-8 text-white overflow-hidden relative"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-400 rounded-full opacity-10"></div>
            <div className="relative z-10">
              <FiCode className="text-3xl mb-6 text-purple-300" />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-200 mb-6">
                To empower businesses with transformative digital solutions that drive measurable growth, operational efficiency, and lasting competitive advantage.
              </p>
              <div className="flex items-center text-purple-300 font-medium hover:text-purple-200 transition-colors cursor-pointer">
                <span>Learn more</span>
                <FiChevronRight className="ml-2" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden relative hover:shadow-xl transition-shadow"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-100 rounded-full"></div>
            <div className="relative z-10">
              <FiLayers className="text-3xl mb-6 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-4 text-[#00112d]">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be the most trusted digital innovation partner globally, recognized for our ability to turn complex challenges into elegant, user-centric solutions.
              </p>
              <div className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors cursor-pointer">
                <span>Our journey</span>
                <FiChevronRight className="ml-2" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;