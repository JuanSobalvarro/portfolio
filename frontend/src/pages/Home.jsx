import React from "react";

function Home() {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-white text-black p-6 flex items-center">
                <img src="/logos/hexagon.svg" alt="Hexagon Logo" className="w-12 h-12 mr-4" />
                <div>
                    <h1 className="text-4xl font-bold">JuSo | Portfolio</h1>
                    <p>By Juan Sobalvarro</p>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero bg-blue-600 text-white flex items-center justify-center h-96">
                <div className="text-center">
                    <img src="/logos/face.svg" alt="Your Face" className="rounded-full w-48 h-48 mb-4" />
                    <p className="text-lg">Software, Backend, DevOps, and Lead Developer</p>
                </div>
            </section>

            {/* About Me Section */}
            <section className="about py-16 bg-gray-100">
                <h2 className="text-3xl text-center font-bold">About Me</h2>
                <p className="text-center mt-4 text-lg max-w-3xl mx-auto">
                    I'm a passionate software developer specializing in backend web applications using Django,
                    desktop applications with C/C++ (primarily with Qt Framework), and Python for both automation and desktop apps.
                    My current focus is on building scalable solutions for web and desktop platforms, while also exploring the vast potential of automation.
                </p>
            </section>

            {/* Socials Section */}
            <section className="socials py-16">
                <h2 className="text-3xl text-center font-bold">Connect with Me</h2>
                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://www.linkedin.com/in/juan-steve-sobalvarro-guerrero-2b9bbb326/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn" />
                    </a>
                    <a href="https://stackoverflow.com/users/26459610" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white" alt="StackOverflow" />
                    </a>
                    <a href="https://twitch.tv/juanxd4516" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/Twitch-%239146FF.svg?logo=Twitch&logoColor=white" alt="Twitch" />
                    </a>
                    <a href="https://x.com/JuanSobalvarroG" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white" alt="X" />
                    </a>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-stack py-16 bg-gray-100">
                <h2 className="text-3xl text-center font-bold">Technologies I Use</h2>
                <div className="flex justify-center gap-6 mt-8">
                    <img src="https://img.shields.io/badge/c-%2300599C.svg?style=flat&logo=c&logoColor=white" alt="C" />
                    <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=flat&logo=c%2B%2B&logoColor=white" alt="C++" />
                    <img src="https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54" alt="Python" />
                    <img src="https://img.shields.io/badge/django-%23092E20.svg?style=flat&logo=django&logoColor=white" alt="Django" />
                    <img src="https://img.shields.io/badge/Qt-%23217346.svg?style=flat&logo=Qt&logoColor=white" alt="Qt" />
                    <img src="https://img.shields.io/badge/opencv-%23white.svg?style=flat&logo=opencv&logoColor=white" alt="OpenCV" />
                    <img src="https://img.shields.io/badge/OpenGL-%23FFFFFF.svg?style=flat&logo=opengl" alt="OpenGL" />
                </div>
            </section>



        </div>
    );
}

export default Home;
