import { useState } from "react";
// import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import {MdOutlineMenu} from 'react-icons/md'

import './Header.css'

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
           <nav className="navigation">
                    <img src={require("../../assets/logo.svg").default}
                    alt="logo" className="logo"/>
                <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                    <MdOutlineMenu />

                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li><Link to="/zee-portfolio">Home</Link></li>
                        <li><Link to="/zee-portfolio/projects">Projects</Link></li>
                        <li><Link to="/zee-portfolio/skills">Skills</Link></li>
                        <li><Link to="/zee-portfolio/contact">Contact</Link></li>
                        <li><Link to="/zee-portfolio/resume">Resume</Link></li>
                    </ul>

                </div>
           </nav>
    )
}

export default Header

