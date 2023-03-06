import { Link } from "react-router-dom";
import './Hero.css'



const Hero = () => {
    return (
        <section id="heroArea">
                <div className="heroContainer">
                    <h1 className="text-1"> Hi, I am <span className="nameFont">Zee Mudia</span>.</h1>
                    <h2 className="text-2">I am a fullstack</h2>
                    <h2 className="text-2"> developer </h2>
                    <h2 className="text-3">I love to build apps that
                        <span className="alternateFont"> solves problems</span> and
                        <span className="alternateFont"> delivers utility</span> to end users
                    </h2>
                    <div>
                    <Link to='/zee-portfolio/contact'>
                        <button className="getInTouch-Btn">Get In Touch</button>
                    </Link>
                    </div>
                </div>
        </section>
    )
}

export default Hero;