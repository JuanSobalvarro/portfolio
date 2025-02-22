import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero bg-blue-100 dark:bg-slate-800 text-white dark:text-gray-100 flex items-center justify-center pb-10">
      <div className="text-center relative z-10">
        {/* Animated Face Image */}
        <motion.img
          src="/portfolio/logos/face.svg"
          alt="Your Face"
          className={`rounded-full w-48 h-32 mb-4 mx-auto sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 transition-all dark:filter dark:invert`}
          initial={{ scale: 0.8 }} // Start from a scaled-down state
          animate={{ scale: 1 }} // Scale up to normal size
          transition={{
            type: "spring",
            // stiffness: 50,
            damping: 10,
            duration: 2,
            bounce: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          whileHover={{ scale: 1.05 }} // Slight scale-up on hover
          whileTap={{ scale: 0.5 }} // Slight scale-down on tap
        />

        {/* Floating Animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} // Float up and down
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
            Software, Backend, DevOps & Lead Developer
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-light mb-6 text-black dark:text-gray-400">
            Building scalable solutions and solving complex challenges with passion and precision.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black dark:text-gray-200">
            I craft beautiful and efficient systems, always striving to push the boundaries of technology and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
