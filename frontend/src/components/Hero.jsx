import React from "react";

function Hero() {
    return (
        <section className="hero bg-blue-100 text-white flex items-center justify-center pb-10">
            <div className="text-center relative z-10">
                <img src="/logos/face.svg" alt="Your Face" className="rounded-full w-48 h-32 mb-4 mx-auto sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black">Software, Backend, DevOps & Lead Developer</h1>
                <h2 className="text-base sm:text-lg md:text-xl font-light mb-6 text-black">
                    Building scalable solutions and solving complex challenges with passion and precision.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-black">
                    I craft beautiful and efficient systems, always striving to push the boundaries of technology and innovation.
                </p>
            </div>
        </section>
    );
}

export default Hero;
