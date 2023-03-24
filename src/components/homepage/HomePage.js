import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "../about/About";
import ContactForm from "../contact/contactform/ContactForm";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../herosection/Hero";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";





const HomePage = () => {
    return (
        <section id="homepage">
            <Header />
            <Routes basename="zee-portfolio" >
                <Route path="/" element={<> <Hero /> <About />  </>}/>
                <Route path="/projects" element={<Projects/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/contact" element={ <> <ContactForm/>  </>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/contact" element={ <> <ContactForm/> </>} />
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
            <Footer />
        </section>
    )
}

export default HomePage;