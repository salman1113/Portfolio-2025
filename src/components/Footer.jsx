import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode, FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: '#', 
      label: 'GitHub',
      color: 'text-gray-400 hover:text-white'
    },
    { 
      icon: FaLinkedin, 
      href: '#', 
      label: 'LinkedIn',
      color: 'text-blue-400 hover:text-blue-300'
    },
    { 
      icon: FaInstagram, 
      href: '#', 
      label: 'Instagram',
      color: 'text-pink-400 hover:text-pink-300'
    },
    { 
      icon: FaEnvelope, 
      href: '#', 
      label: 'Email',
      color: 'text-red-400 hover:text-red-300'
    },
  ];

  return (
    <footer className="relative bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-500 text-sm"
          >
            <FaCode className="text-cyan-400" />
            <span>© {currentYear} Salman Faris</span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-400"
            >
            </motion.span>
          </motion.div>

          {/* Built With - Minimal */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xs"
          >
            Built with React & Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;