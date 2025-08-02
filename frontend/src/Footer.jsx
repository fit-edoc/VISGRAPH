import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full bg-gradient-to-r from-[#8f5736] to-[#000000] text-white p-6 md:p-10 flex flex-col h-[50vh]  md:flex-row justify-between items-center"
    >
      {/* Left: Logo */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 ,}}
        viewport={{once:true,}}
        className="text-4xl font-logo leading-snug  font-bold"
      >
        VISGRAPH
      </motion.div>

      {/* Right: Info */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 md:mt-0 flex flex-col md:flex-row gap-6 text-sm"
      >
        <span><a href="mailto:himanshuverma2660@gmail.com">himanshuverma2660@gmail.com</a></span>
        <span><Github/></span>
        <span>© 2025 VISGRAPH</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
