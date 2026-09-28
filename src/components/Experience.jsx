import { Box, Container, Typography, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../theme';
import { experience } from '../data/resume';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(0, 212, 255, 0); }
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

const TimelineDot = styled(Box)({
  width: 16,
  height: 16,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
  flexShrink: 0,
  animation: `${pulse} 2.5s ease-in-out infinite`,
  position: 'relative',
  zIndex: 2,
});

const ExperienceCard = styled(Box)({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 20,
  padding: '32px',
  backdropFilter: 'blur(20px)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 3,
    background: `linear-gradient(180deg, ${COLORS.primary}, ${COLORS.secondary})`,
    borderRadius: '20px 0 0 20px',
  },
  '&:hover': {
    borderColor: 'rgba(0, 212, 255, 0.3)',
    transform: 'translateX(6px)',
    boxShadow: `0 20px 60px -20px rgba(0, 212, 255, 0.15)`,
  },
});

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        background: `radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168, 85, 247, 0.04) 0%, transparent 60%)`,
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
            <SectionLabel>// 02. experience</SectionLabel>
            <GradientHeading variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Work Experience
            </GradientHeading>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 860, mx: 'auto' }}>
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              {/* Timeline header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '14px',
                    background: COLORS.primaryDim,
                    border: `1px solid ${COLORS.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <WorkIcon sx={{ color: COLORS.primary, fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: COLORS.textPrimary,
                    }}
                  >
                    {job.company}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: COLORS.textSecondary }}>
                    {job.location} · {job.period}
                  </Typography>
                </Box>
                <Box sx={{ ml: 'auto', display: { xs: 'none', sm: 'block' } }}>
                  <Chip
                    label="Current"
                    size="small"
                    sx={{
                      background: 'rgba(0, 255, 136, 0.1)',
                      border: '1px solid rgba(0, 255, 136, 0.3)',
                      color: COLORS.accent,
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.7rem',
                    }}
                  />
                </Box>
              </Box>

              <ExperienceCard>
                <Typography
                  sx={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: COLORS.textPrimary,
                    mb: 0.5,
                  }}
                >
                  {job.role}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.8rem',
                    color: COLORS.primary,
                    mb: 3,
                    letterSpacing: '0.05em',
                  }}
                >
                  {job.period}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                  {job.bullets.map((bullet, i) => (
                    <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <FiberManualRecordIcon
                        sx={{
                          fontSize: 7,
                          color: COLORS.primary,
                          mt: '8px',
                          flexShrink: 0,
                        }}
                      />
                      <Typography sx={{ color: COLORS.textSecondary, lineHeight: 1.75, fontSize: '0.95rem' }}>
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {job.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        background: COLORS.primaryDim,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.primary,
                        '&:hover': { background: 'rgba(0, 212, 255, 0.2)', borderColor: COLORS.primary },
                        transition: 'all 0.2s',
                      }}
                    />
                  ))}
                </Box>
              </ExperienceCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
