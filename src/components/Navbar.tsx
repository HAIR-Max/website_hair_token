import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../contexts/ThemeContext';
import hairLogo from '../assets/logo_hair_no_bg.png';
import hairLogoJpeg from '../assets/logo.jpeg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Hemi', href: '/#hemi' },
  { name: 'Tokenomics', href: '/#tokenomics' },
  { name: 'Roadmap', href: '/#roadmap' },
  { name: 'My Account', href: '/account' },
];

const gradientKeyframes = {
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { mode, toggleTheme } = useThemeContext();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (href: string) => {
    handleCloseNavMenu();
    if (href === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        const navbarHeight = 80; 
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        top: '1%',
        left: 0,
        right: 0,
        mx: 'auto',
        width: '75%',
        borderRadius: '9999px',
        border: 'none',
        overflow: 'hidden',
        justifyContent: 'center',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        WebkitBackdropFilter: 'blur(20px)',
        '& .MuiAppBar-root': {
          borderRadius: 0,
          border: 'none',
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src={hairLogo}
              alt="Logo"
              style={{ height: '50px', width: 'auto' }}
            />
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                '& .MuiPaper-root': {
                  width: '100vw',
                  maxWidth: '100vw',
                  left: '0 !important',
                  right: '0 !important',
                  marginTop: '0',
                  borderRadius: '0',
                },
                '& .MuiMenu-list': {
                  padding: 0,
                },
                '& .MuiMenuItem-root': {
                  justifyContent: 'center',
                  padding: 2,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  '&:last-child': {
                    borderBottom: 'none',
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  component={RouterLink}
                  to={page.href}
                  onClick={() => handleNavClick(page.href)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
              {/* Theme Toggle in Mobile Menu */}
              <MenuItem 
                onClick={toggleTheme}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                <Typography textAlign="center">
                  {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Typography
              variant="h5"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img
                src={hairLogoJpeg}
                alt="Logo"
                style={{ height: '38px', width: 'auto', zIndex: 1000 }}
              />
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.href}
                onClick={() => handleNavClick(page.href)}
                sx={{
                  my: 2,
                  mx: 0.5,
                  px: 2,
                  color: 'text.primary',
                  display: 'block',
                  borderRadius: 999,
                  fontWeight: 600,
                  textTransform: 'none',
                  backgroundColor: 'transparent',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    background: 'linear-gradient(270deg, #FF6B35, #FF8C42, #FFB74D, #FF6B35)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'navGradientMove 3s ease infinite',
                  },
                  '@keyframes navGradientMove': gradientKeyframes,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Theme Toggle Button - Desktop Only */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
            <IconButton 
              onClick={toggleTheme} 
              color="inherit"
              sx={{
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                
                },
              }}
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

          {/* Custom RainbowKit Connect Button */}
          <Box sx={{ maxHeight: '32px', display: 'flex', alignItems: 'center' }}>
              <ConnectButton
                chainStatus="icon"
                showBalance={false}
                accountStatus={{
                  smallScreen: 'avatar',
                  largeScreen: 'full',
                }}
              />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;