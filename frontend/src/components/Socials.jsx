import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaStackOverflow, FaTwitch, FaTwitter, FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <section className="socials py-16 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 dark:from-purple-900 dark:via-indigo-800 dark:to-blue-800">
      <h2 className="text-4xl text-center font-bold text-white mb-8">Connect with Me</h2>
      <div className="flex justify-center gap-10 mt-8">
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/juan-steve-sobalvarro-guerrero-2b9bbb326/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaLinkedin size={40} className="text-white transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" />
        </motion.a>

        {/* StackOverflow */}
        <motion.a
          href="https://stackoverflow.com/users/26459610"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaStackOverflow size={40} className="text-white transition-colors duration-300 hover:text-orange-500 dark:hover:text-orange-400" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/juansobalvarro"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
            <FaGithub size={40} className="text-white transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-200" />
        </motion.a>

        {/* Twitch */}
        <motion.a
          href="https://twitch.tv/juanxd4516"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaTwitch size={40} className="text-white transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-500" />
        </motion.a>

        {/* Twitter (X) */}
        <motion.a
          href="https://x.com/JuanSobalvarroG"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
        >
          <FaTwitter size={40} className="text-white transition-colors duration-300 hover:text-blue-400 dark:hover:text-blue-300" />
        </motion.a>
      </div>
    </section>
  );
}

export default Socials;
