import React from "react";
import {Link} from 'react-router-dom';
import { Box, Container, Grid, Typography, Button} from "@mui/material";
import Logo from '../../assets/logo.svg';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home'


function Footer(){
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "var(--primary-color)"
      }}
    >
      <Container maxWidth="lg">
        <Grid container>

          <Grid item xs={12} sm={6} sx={{display:'flex', alignItems:'center', justifyContent: {xs:'center', sm:'flex-start'}}}>
            <Box sx={{my:2}}>
              <Box sx={{display:'flex', justifyContent: {xs:'center', sm:'flex-start'}}}>
                <img src={Logo} alt="Logo" style={logoStyle}></img>
              </Box>
              <Typography style={{color:"var(--secondary-color)"}}  >Proverbs 3:5 & 6</Typography>
              <Typography sx={{color: 'var(--secondary-color)', fontStyle: 'italic', textAlign: {xs:'center', sm:'left'}}}>
                Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{display:'flex', alignItems: 'center', justifyContent: {xs:'center', sm:'flex-end'}}}>
            <Box>
              <Box sx={{display:'flex', justifyContent:{xs:'center', sm:'flex-end'}}}>
              <a href="mailto: zeemudia@zeemudia-portfolio.com" target="_blank" rel="noreferrer" style={{color: 'var(--tertiary-color)', textDecoration: 'none', backgroundColor: 'transparent'}}>
                  <EmailIcon sx={{mx: 1}}/>
                </a>
                <a href="https://www.linkedin.com/in/zeemudia" target="_blank" rel="noreferrer" style={{color: 'var(--tertiary-color)', textDecoration: 'none', backgroundColor: 'transparent'}}>
                  <LinkedInIcon sx={{mx: 1}}/>
                </a>
                <a href="https://www.github.com/iosazee" target="_blank" rel="noreferrer" style={{color: 'var(--tertiary-color)', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <GithubIcon sx={{mx: 1}}/>
                </a>
                <a href="https://facebook.com/100090712771301" target="_blank" rel="noreferrer" style={{color: 'var(--tertiary-color)', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <FacebookIcon sx={{mx: 1}}/>
                </a>
              </Box>

              <Box sx={{display: 'flex'}}>
              <Button style={{color: 'var(--secondary-color)', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/zee-portfolio" style={{color: 'var(--secondary-color)', textDecoration: 'none' }}>
                    <HomeIcon />
                  </Link>
                </Button>
                <Button style={{color: 'var(--secondary-color)', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/zee-portfolio/projects" style={{color: 'var(--secondary-color)', textDecoration: 'none', textTransform:"none" }}>
                    Projects
                  </Link>
                </Button>
                <Button style={{color: 'var(--secondary-color)', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/zee-portfolio/skills" style={{color: 'var(--secondary-color)', textDecoration: 'none', textTransform:"none" }}>
                    Skills
                  </Link>
                </Button>
                <Button style={{color: 'var(--secondary-color)', textDecoration: 'none', backgroundColor: 'transparent' }}>
                  <Link to="/zee-portfolio/contact" style={{color: 'var(--secondary-color)', textDecoration: 'none', textTransform:"none" }}>
                    Contact
                  </Link>
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{borderTop: "1px solid var(--secondary-color)"}}>
            <Typography sx={{mt: 1.5}}color="#fff" variant="subtitle1">
              {`© ${new Date().getFullYear()} zeemudia | All Rights Reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;


const logoStyle = {
    maxHeight: "50px",
    filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(30deg) brightness(116%) contrast(102%)",
}
