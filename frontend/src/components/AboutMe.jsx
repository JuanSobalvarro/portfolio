import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { Code, Cpu, Database, FlaskConical, GitBranch, Settings } from "lucide-react"; // Icons representing your interests

function AboutMe() {
  return (
    <section className="about py-16 bg-lightyellow-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20 pointer-events-none">
        <div className="grid grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Code className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Cpu className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Database className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <FlaskConical className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <GitBranch className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Settings className="w-12 h-12 text-blue-600 dark:text-blue-300" />
          </motion.div>
        </div>
      </div>

      <InView triggerOnce threshold={0.2} as="div">
        {({ inView, ref }) => (
          <div ref={ref} className="relative z-10">
            <motion.h2
              className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-center mt-4 text-lg text-gray-700 max-w-3xl mx-auto dark:text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              I'm a passionate software developer specializing in backend web applications using Django, desktop
              applications with C/C++ (primarily with Qt Framework), and Python for both automation and desktop apps.
              My current focus is on building scalable solutions for web and desktop platforms, while also exploring the
              vast potential of automation.
            </motion.p>
          </div>
        )}
      </InView>
    </section>
  );
}

export default AboutMe;