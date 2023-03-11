import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import resume from '../../assets/documents/resume.pdf'
import { Link } from "react-router-dom";
import './Header.css'


const pages = [
    {
        id: 1,
        text: <HomeIcon />,
        href: "/zee-portfolio"
    },

    {
        id: 2,
        text: "Projects",
        href: "/zee-portfolio/projects"
    },

    {
        id: 3,
        text: "Skills",
        href: "/zee-portfolio/skills"
    },

    {
        id: 4,
        text:"Contact",
        href: "/zee-portfolio/contact"
    },

];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" style={{background: "var(--primary-color)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            href="/zee-portfolio"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              textDecoration: 'none',
            }}
          >
            <img src={require("../../assets/logo.svg").default}
                alt="logo" className="logo"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={{
                    textDecoration: 'none', listStyleType: 'none'
                }} >
                <Link to={page.href} style={{color: 'var(--secondary-color)', textDecoration: 'none'}} >   <Typography textAlign="center"
                 >{page.text}</Typography> </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            href="/zee-portfolio"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'var(--secondary-color)',
              textDecoration: 'none',
            }}
          >
            <img src={require("../../assets/logo.svg").default}
                alt="logo" className="logo"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Link to={page.href} key={page.id} style={{textDecoration: 'none', color: 'inherit'}} >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'var(--secondary-color)', display: 'block', textTransform: 'none'} }
              >
                {page.text}
              </Button>
            </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Typography >
                <a href={resume}  target="_blank" rel="noopener noreferrer"
                style={{color: "var(--secondary-color)", textDecoration: "none"}} >Resume</a>
            </Typography>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

