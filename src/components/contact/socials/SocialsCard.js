import "./SocialsCard.css"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const SocialsCard = () => {
    return (
        <section id="socialsBox">
            <div id="socials-title">
                <h3>Connect with me on: </h3>
            </div>
            <div id="socials-card">
                <div id="sc-top">
                    <div id="sc-top-left">
                        <p>Email </p>
                        <a href="mailto: zeemudia@outlook.com" target="_blank" rel="noopener noreferrer">  <EmailIcon /> </a>
                    </div>
                    <div id="sc-top-right">
                        <div id="sm-icons-box">
                            <div id="sm-icons-grid">
                                <a href="https://www.linkedin.com/in/zeemudia" target="_blank" rel="noopener noreferrer"> <LinkedInIcon/> </a>
                                <a href="https://github.com/iosazee" target="_blank" rel="noopener noreferrer"> <GitHubIcon /> </a>
                                <a href="https://facebook.com/100090712771301" target="_blank" rel="noopener noreferrer"> <FacebookIcon /> </a>
                                <a href="https://www.instagram.com/zeemudia/" target="_blank" rel="noopener noreferrer"> <InstagramIcon /> </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="sc-bottom">
                        <h4>&copy; zeemudia. All rights Reserved.</h4>
                </div>
            </div>
        </section>
    )
}

export default SocialsCard;