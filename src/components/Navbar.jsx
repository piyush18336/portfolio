import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { COLORS } from '../theme';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const GlassBar = styled(AppBar)(({ scrolled }) => ({
  background: scrolled
    ? 'rgba(5, 5, 8, 0.85)'
    : 'transparent',
  backdropFilter: scrolled ? 'blur(24px)' : 'none',
  borderBottom: scrolled ? `1px solid ${COLORS.border}` : '1px solid transparent',
  boxShadow: 'none',
  transition: 'all 0.4s ease',
}));

const NavLink = styled(Button)({
  color: COLORS.textSecondary,
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 500,
  fontSize: '0.9rem',
  padding: '6px 14px',
  borderRadius: 10,
  letterSpacing: '0.02em',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: COLORS.primary,
    background: COLORS.primaryDim,
  },
});

const Logo = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: '1.3rem',
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  cursor: 'pointer',
  letterSpacing: '0.05em',
});

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlassBar position="fixed" scrolled={scrolled ? 1 : 0}>
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: 1 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>PG</Logo>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <NavLink onClick={() => scrollTo(link.href)}>{link.label}</NavLink>
              </motion.div>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: COLORS.textSecondary }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </GlassBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: 'rgba(8, 8, 16, 0.97)',
            backdropFilter: 'blur(20px)',
            borderLeft: `1px solid ${COLORS.border}`,
            width: 260,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: COLORS.textSecondary }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => scrollTo(link.href)}
                sx={{
                  borderRadius: 2,
                  color: COLORS.textSecondary,
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 500,
                  fontSize: '1rem',
                  '&:hover': { color: COLORS.primary, background: COLORS.primaryDim },
                }}
              >
                {link.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
