import { Box, Container, Typography, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { COLORS } from '../theme';
import { skills } from '../data/resume';

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

const SkillGroup = styled(Box)(({ accentcolor }) => ({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 20,
  padding: '24px',
  backdropFilter: 'blur(20px)',
  height: '100%',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 2,
    background: accentcolor,
    borderRadius: '20px 0 0 20px',
    opacity: 0.6,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    borderColor: accentcolor + '50',
    '&::before': { opacity: 1 },
  },
}));

const SkillBadge = styled(Chip)(({ badgecolor }) => ({
  background: `${badgecolor}10`,
  border: `1px solid ${badgecolor}28`,
  color: badgecolor,
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '0.72rem',
  height: 28,
  transition: 'all 0.2s ease',
  '&:hover': {
    background: `${badgecolor}22`,
    borderColor: `${badgecolor}55`,
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 20px -6px ${badgecolor}40`,
  },
}));

const containerVariants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        background: `radial-gradient(ellipse 60% 40% at 70% 50%, rgba(168, 85, 247, 0.04) 0%, transparent 60%)`,
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
            <SectionLabel>// 04. skills</SectionLabel>
            <GradientHeading variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Technical Arsenal
            </GradientHeading>
            <Typography sx={{ color: COLORS.textSecondary, mt: 1.5, maxWidth: 500, mx: 'auto', fontSize: '0.95rem' }}>
              A full-stack of tools from LLM orchestration to cloud-native infrastructure.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={3}>
            {skills.map((group, gi) => (
              <Grid item xs={12} sm={6} lg={4} key={group.category}>
                <motion.div variants={itemVariants} transition={{ duration: 0.5 }} style={{ height: '100%' }}>
                  <SkillGroup accentcolor={group.color}>
                    {/* Category header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          background: `${group.color}15`,
                          border: `1px solid ${group.color}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.1rem',
                        }}
                      >
                        {group.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: group.color,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {group.category}
                      </Typography>
                    </Box>

                    {/* Skill chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {group.items.map((skill, si) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: gi * 0.05 + si * 0.04 }}
                        >
                          <SkillBadge label={skill} badgecolor={group.color} size="small" />
                        </motion.div>
                      ))}
                    </Box>
                  </SkillGroup>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
