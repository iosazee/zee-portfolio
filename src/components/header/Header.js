import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import resume from '../../assets/documents/resume.pdf'

import './Header.css'

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
           <nav className="navigation">
                <img src={require("../../assets/logo.svg").default}
                    alt="logo" className="logo"/>
                <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                    <MenuIcon />
                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li><Link to="/zee-portfolio"> <HomeIcon /></Link></li>
                        <li><Link to="/zee-portfolio/projects">Projects</Link></li>
                        <li><Link to="/zee-portfolio/skills">Skills</Link></li>
                        <li><Link to="/zee-portfolio/contact">Contact</Link></li>
                        <li><a href={resume}  target="_blank" rel="noopener noreferrer">Resume</a>
                        </li>
                    </ul>
                </div>
           </nav>
    )
}

export default Header

