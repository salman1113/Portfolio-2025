import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Ecobay – Full E-Commerce Headset Website .Building Ecobay gave me hands-on experience in:🔹 React hooks & state management🔹 API integration with JSON Server🔹 Full CRUD operations (Admin Panel)🔹 Responsive UI/UX with Tailwind',
      technologies: ['React','Tailwind', 'JSON server'],
      image: '/src/assets/1st.png',
      liveLink: 'https://project-ui-react.vercel.app/',
      githubLink: 'https://github.com/salman1113/Project-UI-react'
    },
    {
      title: '3D Cube',
      description: 'It started as a small experiment to explore more CSS stylings and turned into something really exciting.',
      technologies: ['React', 'CSS'],
      image: '/src/assets/2nd.png',
      liveLink: 'https://cube-for-fun.vercel.app/',
      githubLink: 'https://github.com/salman1113/cube-for-fun'
    },
    {
      title: 'Todo App',
      description: 'Just Built My First Stylish ToDo App in React!Learning React felt like a big climb, but building this ToDo App made everything super exciting!Used React + Bootstrap to give it that clean, premium feel ',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: 'https://media.licdn.com/dms/image/v2/D5622AQFEbubYR7BBgw/feedshare-shrink_2048_1536/B56Zf02rrUHYAo-/0/1752159665991?e=1762992000&v=beta&t=voAEeYYXld3GsLvOE2nu8iVbZ0Sbhj_75GjK8v_I-lI',
      liveLink: 'https://todoapp-phi-ten.vercel.app/',
      githubLink: 'https://github.com/salman1113/Todoapp'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.7
      }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent font-poppins">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-inter">
            Some of my recent work that showcases my skills and creativity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  duration: 0.4 
                }
              }}
              className="group relative"
            >
              {/* Liquid Glass Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:bg-black/50 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Links - Water Drop Style */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <motion.a
                      href={project.liveLink}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/link"
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-sm group-hover/link:blur-md transition-all duration-300"></div>
                      <div className="relative bg-transparent border border-white/20 rounded-full p-2 sm:p-3 backdrop-blur-sm group-hover/link:border-white/40 transition-all duration-300">
                        <FaExternalLinkAlt className="text-white text-sm sm:text-base" />
                      </div>
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/link"
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-sm group-hover/link:blur-md transition-all duration-300"></div>
                      <div className="relative bg-transparent border border-white/20 rounded-full p-2 sm:p-3 backdrop-blur-sm group-hover/link:border-white/40 transition-all duration-300">
                        <FaGithub className="text-white text-sm sm:text-base" />
                      </div>
                    </motion.a>
                  </div>

                  {/* Water Drip Effect */}
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute bottom-2 left-4 w-1 h-1 bg-white/30 rounded-full blur-sm"
                  ></motion.div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-poppins group-hover:text-white/90 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base mb-4 flex-1 font-inter leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="px-2.5 sm:px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs sm:text-sm border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300 font-inter"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom Water Reflection */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating particles on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute -inset-2 border border-white/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;