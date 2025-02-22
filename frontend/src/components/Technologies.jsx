import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiDjango,
  SiQt,
  SiOpencv,
  SiOpengl,
} from "react-icons/si"; // Importing specific icons from react-icons

const technologies = [
  { name: "C", icon: <SiC size={36} />, color: "bg-blue-500" },
  { name: "C++", icon: <SiCplusplus size={36} />, color: "bg-blue-600" },
  { name: "Python", icon: <SiPython size={36} />, color: "bg-yellow-500" },
  { name: "Django", icon: <SiDjango size={36} />, color: "bg-green-600" },
  { name: "Qt", icon: <SiQt size={36} />, color: "bg-teal-600" },
  { name: "Pyside", icon: <img src="/portfolio/tech/pyside.png" alt="PySide" className="w-8 h-8" />, color: "bg-blue-600" }, // Adjusted image size
  { name: "OpenCV", icon: <SiOpencv size={36} />, color: "bg-purple-600" },
  { name: "OpenGL", icon: <SiOpengl size={36} />, color: "bg-gray-700" },
];

function Technologies() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Technologies I Use
      </h2>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <div ref={ref} className="container mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, rotate: [0, -5, 5, -3, 3, 0] }} // Hover effect with rotation
                  className="flex flex-col items-center justify-center rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 backdrop-blur-md transition-transform duration-200 hover:shadow-xl hover:ring-2 hover:ring-opacity-50 hover:ring-blue-500"
                >
                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center rounded-full ${tech.color}`}
                    whileHover={{ scale: 1.1 }} // Icon hover effect
                  >
                    {tech.icon}
                  </motion.div>
                  <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </InView>
    </section>
  );
}

export default Technologies;