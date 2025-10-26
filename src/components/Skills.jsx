import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, 
  FaPython 
} from 'react-icons/fa';
import { 
  SiRedux, SiTailwindcss, SiDjango, SiMysql 
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', level: 90 },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 95 },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: 90 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 85 },
    { name: 'React', icon: FaReact, color: 'text-blue-400', level: 88 },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-500', level: 80 },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', level: 85 },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-300', level: 90 },
    { name: 'AI/ML', icon: GiArtificialIntelligence, color: 'text-pink-500', level: 75 },
    { name: 'Python', icon: FaPython, color: 'text-blue-600', level: 85 },
    { name: 'OOP', icon: FaPython, color: 'text-green-500', level: 88 },
    { name: 'Django', icon: SiDjango, color: 'text-green-600', level: 82 },
    { name: 'SQL', icon: SiMysql, color: 'text-blue-500', level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-poppins">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-inter">
            Technologies I work with to create amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  duration: 0.3 
                }
              }}
              className="group relative"
            >
              {/* Liquid Glass Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              
              <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:bg-black/50 h-full">
                <div className="text-center flex flex-col items-center">
                  
                  {/* Water Drop Icon Container */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="relative mb-3 sm:mb-4 group/icon"
                  >
                    {/* Outer glow */}
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover/icon:blur-lg transition-all duration-500 opacity-60"></div>
                    
                    {/* Water drop main shape - sized to icon */}
                    <div className="relative bg-transparent border border-white/20 rounded-full p-2 sm:p-3 backdrop-blur-sm group-hover/icon:border-white/40 group-hover/icon:bg-white/5 transition-all duration-500">
                      <skill.icon className={`text-2xl sm:text-3xl ${skill.color} drop-shadow-lg`} />
                      
                      {/* Water drop reflection */}
                      <div className="absolute top-1 left-1 w-1.5 h-0.5 bg-white/50 rounded-full blur-xs"></div>
                    </div>
                    
                    {/* Dripping effect */}
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-white/30 rounded-full blur-xs"
                    ></motion.div>
                  </motion.div>

                  {/* Skill Name */}
                  <motion.h3 
                    className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base font-inter"
                    whileHover={{ color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.name}
                  </motion.h3>
                  
                  {/* Animated Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2 mb-1.5 sm:mb-2 overflow-hidden">
                    <motion.div
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={skill.level}
                      className="h-full rounded-full bg-gradient-to-r from-white/80 to-white/60 shadow-lg shadow-white/20"
                    ></motion.div>
                  </div>
                  
                  {/* Percentage */}
                  <motion.span 
                    className="text-gray-400 text-xs sm:text-sm font-medium"
                    whileHover={{ color: "#ffffff", scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>

              {/* Floating particles on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -inset-1 border border-white/5 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-10 top-1/4 w-4 h-4 bg-white/5 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-20 bottom-1/3 w-3 h-3 bg-white/5 rounded-full blur-sm"
        ></motion.div>
      </div>
    </section>
  );
};

export default Skills;