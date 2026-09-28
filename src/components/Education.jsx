import { Box, Container, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { COLORS } from '../theme';
import { education } from '../data/resume';

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

const EduCard = styled(Box)(({ accentcolor }) => ({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 20,
  padding: '32px',
  backdropFilter: 'blur(20px)',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    background: `linear-gradient(90deg, ${accentcolor}, transparent)`,
    borderRadius: '0 0 20px 20px',
  },
  '&:hover': {
    borderColor: accentcolor + '50',
    transform: 'translateY(-8px)',
    boxShadow: `0 30px 60px -20px ${accentcolor}25`,
  },
}));

const DegreeBadge = styled(Box)(({ accentcolor }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 16px',
  borderRadius: 10,
  background: `${accentcolor}15`,
  border: `1px solid ${accentcolor}30`,
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: 700,
  fontSize: '0.85rem',
  color: accentcolor,
  letterSpacing: '0.05em',
  marginBottom: 16,
}));

const ScoreBadge = styled(Box)(({ accentcolor }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 16px',
  borderRadius: 12,
  background: `${accentcolor}08`,
  border: `1px solid ${accentcolor}20`,
  width: 'fit-content',
}));

export default function Education() {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        background: `radial-gradient(ellipse 50% 40% at 30% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 60%)`,
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
            <SectionLabel>// 05. education</SectionLabel>
            <GradientHeading variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Academic Background
            </GradientHeading>
          </Box>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {education.map((edu, i) => (
            <Grid item xs={12} sm={6} md={5} key={edu.short}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <EduCard accentcolor={edu.color}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <SchoolIcon sx={{ color: edu.color, fontSize: 26 }} />
                  </Box>

                  <DegreeBadge accentcolor={edu.color}>{edu.short}</DegreeBadge>

                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: COLORS.textPrimary,
                      mb: 1,
                      lineHeight: 1.3,
                    }}
                  >
                    {edu.degree}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      color: COLORS.textSecondary,
                      mb: 0.5,
                    }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.78rem',
                      color: COLORS.textMuted,
                      mb: 3,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {edu.period}
                  </Typography>

                  <ScoreBadge accentcolor={edu.color}>
                    <EmojiEventsIcon sx={{ color: edu.color, fontSize: 18 }} />
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: edu.color,
                      }}
                    >
                      {edu.score}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', color: COLORS.textSecondary }}>
                      Score
                    </Typography>
                  </ScoreBadge>
                </EduCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
