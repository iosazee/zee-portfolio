import React from "react";
import './Logo.css'


const Logo = () => {
    return (
        <section id="logo">
            <img
                src={require("../../assets/logo.svg").default}
                alt="logo"
                className="splash-logo"
            />
        </section>
    )
}

export default Logo