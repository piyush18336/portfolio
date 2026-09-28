import { Box, Container, Typography, Chip, Grid } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { COLORS } from '../theme';
import { projects } from '../data/resume';

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

const ProjectCard = styled(Box)(({ accentcolor }) => ({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 20,
  padding: '28px',
  backdropFilter: 'blur(20px)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'default',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: `linear-gradient(90deg, ${accentcolor}, transparent)`,
    transition: 'all 0.35s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${accentcolor}08, transparent 60%)`,
    opacity: 0,
    transition: 'opacity 0.35s ease',
    pointerEvents: 'none',
  },
  '&:hover': {
    borderColor: accentcolor + '60',
    transform: 'translateY(-8px)',
    boxShadow: `0 30px 60px -20px ${accentcolor}25`,
  },
  '&:hover::after': {
    opacity: 1,
  },
  '&:hover::before': {
    background: `linear-gradient(90deg, ${accentcolor}, ${accentcolor}40, transparent)`,
  },
}));

const NumberBadge = styled(Box)(({ accentcolor }) => ({
  width: 44,
  height: 44,
  borderRadius: 12,
  background: `${accentcolor}18`,
  border: `1px solid ${accentcolor}40`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: 700,
  fontSize: '0.85rem',
  color: accentcolor,
  flexShrink: 0,
}));

export default function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        background: `radial-gradient(ellipse 70% 40% at 20% 50%, rgba(0, 212, 255, 0.04) 0%, transparent 60%)`,
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
            <SectionLabel>// 03. projects</SectionLabel>
            <GradientHeading variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Featured Work
            </GradientHeading>
            <Typography sx={{ color: COLORS.textSecondary, mt: 1.5, maxWidth: 500, mx: 'auto', fontSize: '0.95rem' }}>
              Production-grade AI systems across EdTech, logistics, healthcare, and IoT domains.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {projects.map((project, i) => (
            <Grid item xs={12} sm={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ height: '100%' }}
              >
                <ProjectCard accentcolor={project.color}>
                  {/* Header */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2.5 }}>
                    <NumberBadge accentcolor={project.color}>
                      {String(project.id).padStart(2, '0')}
                    </NumberBadge>
                    <Typography
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '0.72rem',
                        color: COLORS.textMuted,
                        letterSpacing: '0.05em',
                        mt: 0.5,
                      }}
                    >
                      {project.period}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: COLORS.textPrimary,
                      mb: 0.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: project.color,
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  {/* Bullets */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3, flexGrow: 1 }}>
                    {project.bullets.map((bullet, bi) => (
                      <Box key={bi} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <FiberManualRecordIcon sx={{ fontSize: 6, color: project.color, mt: '9px', flexShrink: 0 }} />
                        <Typography sx={{ color: COLORS.textSecondary, fontSize: '0.88rem', lineHeight: 1.65 }}>
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                          fontSize: '0.7rem',
                          height: 24,
                          '&:hover': {
                            background: `${project.color}20`,
                            borderColor: `${project.color}60`,
                          },
                          transition: 'all 0.2s',
                        }}
                      />
                    ))}
                  </Box>
                </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
