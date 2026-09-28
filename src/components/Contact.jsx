import { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../theme';
import { profile } from '../data/resume';

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const SectionLabel = styled(Typography)({
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '0.8rem',
  color: COLORS.accent,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: 12,
});

const GradientHeading = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  background: `linear-gradient(135deg, ${COLORS.textPrimary} 0%, ${COLORS.textSecondary} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const ContactCard = styled(Box)(({ accentcolor }) => ({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 16,
  padding: '20px 24px',
  backdropFilter: 'blur(20px)',
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    borderColor: accentcolor + '60',
    background: `${accentcolor}06`,
    transform: 'translateX(6px)',
    boxShadow: `0 10px 30px -10px ${accentcolor}20`,
  },
}));

const IconBox = styled(Box)(({ accentcolor }) => ({
  width: 46,
  height: 46,
  borderRadius: 13,
  background: `${accentcolor}15`,
  border: `1px solid ${accentcolor}30`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.3s ease',
}));

const ShimmerText = styled(Typography)({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: '1.8rem',
  background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.secondary} 30%, ${COLORS.accent} 60%, ${COLORS.primary} 100%)`,
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: `${shimmer} 4s linear infinite`,
});

const contactItems = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: profile.email,
    color: COLORS.primary,
    href: `mailto:${profile.email}`,
    copyable: true,
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'piyush-gupta-96b254123',
    color: COLORS.secondary,
    href: profile.linkedin,
    copyable: false,
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: profile.phone,
    color: COLORS.accent,
    href: `tel:${profile.phone}`,
    copyable: true,
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: profile.location,
    color: '#f59e0b',
    href: null,
    copyable: false,
  },
];

function ContactItem({ item, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    if (item.copyable) {
      navigator.clipboard.writeText(item.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClick = () => {
    if (item.href) window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ContactCard accentcolor={item.color} onClick={handleClick}>
        <IconBox accentcolor={item.color}>
          <Box sx={{ color: item.color, display: 'flex' }}>{item.icon}</Box>
        </IconBox>
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography sx={{ fontSize: '0.75rem', color: COLORS.textMuted, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}>
            {item.label}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.95rem',
              color: COLORS.textPrimary,
              fontWeight: 500,
              mt: 0.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {item.value}
          </Typography>
        </Box>
        {item.copyable && (
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              color: copied ? COLORS.accent : COLORS.textMuted,
              '&:hover': { color: item.color, background: `${item.color}15` },
              transition: 'all 0.2s',
            }}
          >
            {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
          </IconButton>
        )}
      </ContactCard>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        background: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${COLORS.border}, transparent)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <SectionLabel>// 06. contact</SectionLabel>
            <GradientHeading variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Let's Connect
            </GradientHeading>
            <Typography sx={{ color: COLORS.textSecondary, mt: 1.5, maxWidth: 480, mx: 'auto', fontSize: '0.95rem' }}>
              Open to new opportunities, collaborations, and interesting AI projects. Reach out anytime.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 640, mx: 'auto' }}>
          {/* CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${COLORS.border}`,
                borderRadius: 20,
                p: { xs: 3, md: 4 },
                mb: 3,
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
              }}
            >
              <ShimmerText>Available for hire</ShimmerText>
              <Typography sx={{ color: COLORS.textSecondary, mt: 1, fontSize: '0.95rem', lineHeight: 1.7 }}>
                4+ years building production AI systems. Looking for challenging roles in Generative AI,
                LLM Engineering, or Fullstack AI development.
              </Typography>
            </Box>
          </motion.div>

          {/* Contact links */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {contactItems.map((item, i) => (
              <ContactItem key={item.label} item={item} index={i} />
            ))}
          </Box>
        </Box>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 10, pb: 2 }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.78rem',
                color: COLORS.textMuted,
                letterSpacing: '0.08em',
              }}
            >
              // built by{' '}
              <Box component="span" sx={{ color: COLORS.primary }}>
                Piyush Gupta
              </Box>{' '}
              with React + MUI · {new Date().getFullYear()}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
