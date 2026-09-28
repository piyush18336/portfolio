import { useState, useEffect } from 'react';
import { Box, Typography, Button, Chip, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../theme';
import { profile } from '../data/resume';

const float = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -40px) scale(1.08); }
  66% { transform: translate(-30px, 25px) scale(0.95); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const gridFade = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
`;

const Blob = styled(Box)(({ blobcolor, delay }) => ({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(100px)',
  opacity: 0.18,
  background: blobcolor,
  animation: `${float} 10s ease-in-out ${delay || 0}s infinite`,
  pointerEvents: 'none',
}));

const GradientText = styled('span')({
  background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 60%, ${COLORS.primary} 100%)`,
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const AvatarRing = styled(Box)({
  width: 120,
  height: 120,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
  padding: 2,
  animation: `${pulse} 3s ease-in-out infinite`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .inner': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: 700,
    background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
});

const GridOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(rgba(0, 212, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.04) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
  animation: `${gridFade} 6s ease-in-out infinite`,
  pointerEvents: 'none',
});

const ScrollIndicator = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  color: COLORS.textMuted,
  cursor: 'pointer',
  '& .arrow': {
    animation: `${float} 2s ease-in-out infinite`,
    animationTimingFunction: 'ease-in-out',
  },
});

function TypeWriter({ titles }) {
  const [displayText, setDisplayText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIdx, titles]);

  return (
    <Box component="span" sx={{ fontFamily: '"JetBrains Mono", monospace', color: COLORS.primary }}>
      {displayText}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: 2,
          height: '1em',
          background: COLORS.primary,
          ml: '2px',
          verticalAlign: 'text-bottom',
          animation: `${blink} 1s step-end infinite`,
        }}
      />
    </Box>
  );
}

const floatingTags = ['RAG', 'LangGraph', 'MCP', 'WebRTC', 'FastAPI', 'MuseTalk', 'LLMs'];

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 212, 255, 0.06) 0%, transparent 60%)`,
      }}
    >
      {/* Background blobs */}
      <Blob blobcolor={COLORS.primary} delay={0} sx={{ width: 700, height: 700, top: '-20%', right: '-15%' }} />
      <Blob blobcolor={COLORS.secondary} delay={3} sx={{ width: 600, height: 600, bottom: '-20%', left: '-15%' }} />
      <Blob blobcolor={COLORS.accent} delay={6} sx={{ width: 300, height: 300, top: '40%', left: '30%', opacity: 0.06 }} />
      <GridOverlay />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 12, pb: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 3,
          }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            <AvatarRing>
              <Box className="inner">PG</Box>
            </AvatarRing>
          </motion.div>

          {/* Greeting */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.95rem',
                color: COLORS.accent,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              // Hello, World 👋
            </Typography>
          </motion.div>

          {/* Name */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              <GradientText>{profile.name}</GradientText>
            </Typography>
          </motion.div>

          {/* Typewriter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                color: COLORS.textSecondary,
                fontWeight: 400,
                minHeight: '2.2rem',
              }}
            >
              <TypeWriter titles={profile.titles} />
            </Typography>
          </motion.div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
            <Typography
              sx={{
                maxWidth: 680,
                color: COLORS.textSecondary,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.8,
                px: { xs: 2, md: 0 },
              }}
            >
              {profile.summary}
            </Typography>
          </motion.div>

          {/* Floating tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', maxWidth: 600 }}>
              {floatingTags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.07 }}
                >
                  <Chip
                    label={tag}
                    size="small"
                    sx={{
                      background: 'rgba(0, 212, 255, 0.05)',
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.primary,
                      '&:hover': { background: COLORS.primaryDim, borderColor: COLORS.primary },
                      transition: 'all 0.2s ease',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.1 }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  color: '#fff',
                  px: 3.5,
                  py: 1.4,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  boxShadow: `0 0 30px rgba(0, 212, 255, 0.25)`,
                  '&:hover': {
                    boxShadow: `0 0 50px rgba(0, 212, 255, 0.45)`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                href={profile.linkedin}
                target="_blank"
                sx={{
                  borderColor: COLORS.border,
                  color: COLORS.textSecondary,
                  px: 3,
                  py: 1.4,
                  fontSize: '0.95rem',
                  '&:hover': {
                    borderColor: COLORS.primary,
                    color: COLORS.primary,
                    background: COLORS.primaryDim,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<EmailIcon />}
                href={`mailto:${profile.email}`}
                sx={{
                  borderColor: COLORS.border,
                  color: COLORS.textSecondary,
                  px: 3,
                  py: 1.4,
                  fontSize: '0.95rem',
                  '&:hover': {
                    borderColor: COLORS.secondary,
                    color: COLORS.secondary,
                    background: COLORS.secondaryDim,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Email Me
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator
        onClick={scrollToAbout}
        sx={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
      >
        <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: '"JetBrains Mono", monospace' }}>
          scroll
        </Typography>
        <KeyboardArrowDownIcon className="arrow" sx={{ fontSize: 20 }} />
      </ScrollIndicator>
    </Box>
  );
}
