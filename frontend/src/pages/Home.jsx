import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Socials from "../components/Socials.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Technologies from "../components/Technologies.jsx";


function Home() {
    return (
        <div>
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Projects Section */}
            <Projects />


            {/* About Me Section */}
            <AboutMe />

            {/* Socials Section */}
            <Socials />

            {/* Tech Stack Section */}
            <Technologies />
        </div>
    );
}

export default Home;
