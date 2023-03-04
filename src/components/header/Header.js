import { useState } from "react";
// import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import {MdOutlineMenu} from 'react-icons/md'

import './Header.css'

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
           <nav className="navigation">
                <Link to="/">
                    <img src={require("../../assets/logo.svg").default}
                    alt="logo" className="logo"/>
                </Link>
                <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                    <MdOutlineMenu />

                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>

                </div>
           </nav>
    )
}

export default Header

