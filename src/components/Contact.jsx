import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'mrsalmanxzs@gmail.com',
      href: 'mrsalmanxzs@gmail.com'
    },
    {
      icon: FaPhone,
      text: '+91 9048752402',
      href: 'tel:+919048752402'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Kerala, India',
      href: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 group cursor-pointer"
              >
                {/* Water Drop Icon */}
                <div className="relative group/icon">
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm group-hover/icon:blur-md transition-all duration-300"></div>
                  <div className="relative bg-transparent border border-white/20 rounded-lg p-2 sm:p-3 backdrop-blur-sm group-hover/icon:border-white/40 transition-all duration-300">
                    <item.icon className="text-white text-lg sm:text-xl" />
                  </div>
                </div>
                
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  {item.text}
                </span>
              </motion.a>
            ))}

            {/* Liquid Glass Decoration */}
            <motion.div
              variants={itemVariants}
              className="relative mt-6 sm:mt-8"
            >
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-black/30 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10">
                <p className="text-gray-400 text-center text-sm sm:text-base">
                  I'm always open to discussing new opportunities and creative projects.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Liquid Glass Background */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl opacity-50"></div>
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8 border border-white/10"
            >
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm sm:text-base">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm sm:text-base">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full relative group overflow-hidden"
                >
                  {/* Liquid Glass Background */}
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-lg blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  
                  {/* Main Button */}
                  <div className="relative bg-black/80 backdrop-blur-md border border-white/20 rounded-lg px-4 sm:px-6 py-3 sm:py-4 group-hover:border-white/30 transition-all duration-500 overflow-hidden">
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    <div className="relative flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <span className="text-white font-semibold text-sm sm:text-base">
                            Send Message
                          </span>
                          <FaPaperPlane className="text-white text-sm" />
                        </>
                      )}
                    </div>
                  </div>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;