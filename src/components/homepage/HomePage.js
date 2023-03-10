import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../about/About";
import ContactForm from "../contact/contactform/ContactForm";
import SocialsCard from "../contact/socials/SocialsCard";
import Header from "../header/Header";
import Hero from "../herosection/Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";





const HomePage = () => {
    return (
        <section id="homepage">
            <Header />
            <Routes basename="zee-portfolio" >
                <Route path="/zee-portfolio" element={<> <Hero /> <About />  </>}/>
                <Route path="zee-portfolio/projects" element={<Projects/>} />
                <Route path="zee-portfolio/skills" element={<Skills/>} />
                <Route path="zee-portfolio/contact" element={ <> <ContactForm/> <SocialsCard/>  </>} />
            </Routes>
        </section>
    )
}

export default HomePage;