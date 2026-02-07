import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // RESOURCE: https://www.emailjs.com/docs/examples/reactjs/
    // You need to replace these with your actual IDs from EmailJS dashboard
    // Service ID, Template ID, Public Key
    // Service ID, Template ID, Public Key (Stored in .env)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Auto-Reply to User
    const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID; // Notification to You
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



    // Send both emails in parallel
    const sendAdminNotification = emailjs.sendForm(SERVICE_ID, ADMIN_TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    });

    const sendUserAutoReply = emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    });

    Promise.allSettled([sendAdminNotification, sendUserAutoReply])
      .then((results) => {
        const [adminResult, userResult] = results;

        // Log failures for debugging (Sanitized)
        if (adminResult.status === 'rejected') {
          console.error('FAILED to send Admin Notification');
        }
        if (userResult.status === 'rejected') {
          console.error('FAILED to send User Auto-Reply');
        }

        // Success Condition: At least the Admin Notification must succeed (or both)
        // If Admin fails, it's a critical failure for the owner.
        if (adminResult.status === 'fulfilled') {
          toast.success('Message sent! I will get back to you soon.', {
            style: {
              background: '#333',
              color: '#fff',
              border: '1px solid var(--color-accent)',
            },
            iconTheme: {
              primary: 'var(--color-accent)',
              secondary: '#000',
            },
          });
          e.target.reset();
        } else {
          // Admin notification failed (even if auto-reply worked)
          toast.error('Failed to send message. Please check console for details.', {
            style: {
              background: '#333',
              color: '#fff',
              border: '1px solid red',
            }
          });
        }
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'mrsalmanxzs@gmail.com',
      href: 'mailto:mrsalmanxzs@gmail.com',
      color: 'hover:text-[var(--color-accent)]', // Keep email white/accent
      isEmail: true
    },
    {
      icon: FaLinkedin,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammed-salman-faris-a5792a361/',
      color: 'text-[#0077b5]', // Brand Blue
    },
    {
      icon: FaGithub,
      text: 'GitHub',
      href: 'https://github.com/salman1113',
      color: 'text-white', // Brand White/Black
    },
    {
      icon: FaInstagram,
      text: 'Instagram',
      href: 'https://www.instagram.com/sallllmaaaaan/',
      color: 'text-[#E1306C]', // Brand Pink
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[var(--color-dark-bg)] text-white relative overflow-hidden scroll-mt-20">
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Background Glow */}
      <div className="absolute -right-20 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-accent)] opacity-[0.03] blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-sm font-bold text-[var(--color-accent)] tracking-[0.5em] uppercase mb-4">
                /// Contact
          </h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
            LET'S BUILD <br />
            <span className="text-gray-800">SOMETHING</span> <span className="text-white">EPIC.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Info (Minimal List) */}
          <div className="space-y-12">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Got a project in mind? I'm always open to discussing new opportunities, creative ideas, or just having a chat about the future of tech.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className={`group flex items-center gap-6 font-bold transition-colors ${item.color || 'text-white'}`}>
                  <span className={`w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 group-hover:border-current group-hover:bg-white/5 transition-all`}>
                    <item.icon size={20} className={item.color || 'text-white'} />
                  </span>
                  {/* Styling adjustment for Email to be responsive if needed */}
                  <span className={item.isEmail ? "text-lg md:text-2xl break-all md:break-normal" : "text-2xl md:text-3xl"}>
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Minimal Form (Underline Style) */}
          <form ref={form} onSubmit={sendEmail} className="space-y-12 mt-8 lg:mt-0">
            <div className="group relative">
              <input
                type="text"
                name="user_name"
                required
                placeholder=" "
                className="peer w-full bg-white/[0.03] border-b border-white/10 rounded-t-lg px-4 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-[var(--color-accent)] focus:bg-white/[0.05] transition-all placeholder-transparent"
              />
              <label className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[var(--color-accent)] peer-focus:text-sm">
                Your Name
              </label>
            </div>

            <div className="group relative">
              <input
                type="email"
                name="user_email"
                required
                placeholder=" "
                className="peer w-full bg-white/[0.03] border-b border-white/10 rounded-t-lg px-4 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-[var(--color-accent)] focus:bg-white/[0.05] transition-all placeholder-transparent"
              />
              <label className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[var(--color-accent)] peer-focus:text-sm">
                Email Address
              </label>
            </div>

            <div className="group relative">
              <textarea
                name="message"
                required
                rows="3"
                placeholder=" "
                className="peer w-full bg-white/[0.03] border-b border-white/10 rounded-t-lg px-4 py-4 text-xl md:text-2xl text-white focus:outline-none focus:border-[var(--color-accent)] focus:bg-white/[0.05] transition-all resize-none placeholder-transparent"
              />
              <label className="absolute left-4 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-[var(--color-accent)] peer-focus:text-sm">
                Project Details
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-lg py-5 hover:bg-white hover:text-black hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest group"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;