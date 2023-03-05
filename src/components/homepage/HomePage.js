import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../about/About";
import Header from "../header/Header";
import Hero from "../herosection/Hero";
import Projects from "../projects/Projects";





const HomePage = () => {
    return (
        <section id="homepage">
            <Header />
            <Hero />
            <Projects />
            <Routes basename="zee-portfolio" >
                <Route path="/" element={<Hero/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </section>
    )
}

export default HomePage;