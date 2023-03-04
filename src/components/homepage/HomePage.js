import React from "react";
import About from "../about/About";
import Header from "../header/Header";
import Hero from "../herosection/Hero";





const HomePage = () => {
    return (
        <section id="homepage">
            <Header />
            <Hero />
            <About />
        </section>
    )
}

export default HomePage;