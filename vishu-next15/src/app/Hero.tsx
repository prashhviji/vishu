"use client";
import React, { useEffect, useState } from 'react';
import { ChevronRight, MapPin, Calendar, GraduationCap, Award, Eye, Users } from 'lucide-react';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface Experience {
  year: string;
  position: string;
  company: string;
  location: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  icon: React.ReactNode;
}

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC = () => {
  const experiences: Experience[] = [
    {
      year: "06",
      position: "SENIOR VICE PRESIDENT OF OPERATIONS",
      company: "Titan Enterprises Inc.",
      location: "New York, USA",
      description: "At the Senior Vice President of Operations at Titan Enterprises Inc., I spent 3.5 years spearheading the corporate world from these challenging arena of demonstrators. That story is one of resilience, innovation, and unwavering dedication to excellence."
    }
  ];

  const education: Education[] = [
    {
      institution: "HARVARD UNIVERSITY",
      degree: "Master of Business Administration (MBA)",
      year: "2019 - 2021",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      institution: "PURDUE UNIVERSITY",
      degree: "Bachelor's Computer Science and Engineering",
      year: "2015 - 2019",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      institution: "ACADEMY OF DIGITAL ARTS",
      degree: "Certificate Graphics Technology",
      year: "2018 - 2019",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const achievements: Achievement[] = [
    {
      title: "CAREER DEVELOPMENT STRATEGIST",
      subtitle: "GUIDING PROFESSIONALS TO SUCCESS",
      description: "With my deep expertise in career development strategies, I have helped numerous professionals accelerate their growth and achieve remarkable success."
    },
    {
      title: "RESULTS-ORIENTED ENGINEER",
      subtitle: "BUILDING EFFICIENT SYSTEMS",
      description: "Expert in developing solutions that drive operational excellence and deliver measurable results. Proven track record of leading teams and achieving outstanding outcomes."
    }
  ];

  const companies = [
    "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum"
  ];

  // Animation for the moving boxes in the sidebar
  const [activeBox, setActiveBox] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-8"
        >
          <div className="text-xl font-light tracking-wider">
            PORTFOLIO<br />
            <span className="text-gray-400">WEBSITE</span>
          </div>
        </motion.div>
        <div className="flex items-center space-x-6">
          {['More Like This', 'Save', 'Permalink'].map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              {index === 0 && <Eye className="w-4 h-4" />}
              <span>{item}</span>
            </motion.button>
          ))}
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Hero Section */}
          <div className="grid grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm text-gray-400"
              >
                Hello, I'm 👋
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-8xl font-bold tracking-tight"
              >
                Vishnu
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-lg leading-relaxed max-w-md"
              >
                Introducing Meron, the embodiment of corporate excellence 
                redefined. Armed with a degree from a prestigious business 
                school, Meron rose through the ranks, exemplifying a blend of 
                prowess and visionary leadership.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-4"
              >
                <div className="text-2xl font-light mb-2">Benjamin Meron</div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '8rem' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-px bg-gray-600"
                ></motion.div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex space-x-4 pt-4"
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Profile Image */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/dp.png"
                alt="Profile"
                width={340}
                height={420}
                className="object-cover w-full h-full rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
                {[1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center space-x-12 mb-16"
          >
            {companies.map((company, index) => (
              <motion.div 
                key={index}
                animate={controls}
                className="text-gray-600 font-light text-sm"
              >
                {company}
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <div className="mb-16">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-gray-400 mb-2"
            >
              ✦ EXPERIENCE
            </motion.div>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-4xl font-bold mb-12"
            >
              JOURNEY THROUGH<br />EXPERIENCE
            </motion.h2>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="grid grid-cols-12 gap-8 mb-8"
              >
                <div className="col-span-1">
                  <div className="text-6xl font-bold text-gray-800">{exp.year}</div>
                </div>
                <div className="col-span-11">
                  <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                  <div className="text-gray-400 mb-1">{exp.company}</div>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>
                  <p className="text-gray-300 leading-relaxed max-w-2xl">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-gray-800 p-6 space-y-8">
          {/* Achievements */}
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <Users className="w-4 h-4" />
                </motion.div>
                <div className="text-xs text-gray-400">{achievement.title}</div>
              </div>
              <h3 className="text-sm font-semibold leading-tight">{achievement.subtitle}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="text-xs text-gray-400">✦ EDUCATION</div>
            </div>
            <h3 className="text-lg font-semibold">ENLIGHTENED THE<br />PATHWAYS</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              In my role, I embarked on a journey of discovery, delving deep into the foundations of business strategy and thought leadership, working for a solid foundation for my career trajectory.
            </p>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{edu.institution}</div>
                    <div className="text-xs text-gray-400">{edu.degree}</div>
                    <div className="text-xs text-gray-500">{edu.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="space-y-4"
          >
            <div className="text-sm font-semibold">CREATING CHANGE,<br />BUILDING TOMORROW</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg overflow-hidden relative"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className={`absolute w-8 h-12 bg-black opacity-50 rounded-sm ${i === activeBox ? 'bg-white opacity-70' : ''}`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: '50%'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="text-lg font-semibold">VISION</div>
            <p className="text-xs text-gray-400 leading-relaxed">
              My vision beyond the obvious, defining organizational transformation that will redefine industry standards, foster innovation, and create lasting impact on communities and markets globally.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;