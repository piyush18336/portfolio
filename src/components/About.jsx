import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { COLORS } from '../theme';
import { profile } from '../data/resume';

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

const GlassCard = styled(Box)({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 20,
  padding: '28px 32px',
  backdropFilter: 'blur(20px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(0, 212, 255, 0.25)',
    background: 'rgba(0, 212, 255, 0.02)',
  },
});

const StatCard = styled(Box)(({ accentcolor }) => ({
  background: 'rgba(255,255,255,0.02)',
  border: `1px solid ${COLORS.border}`,
  borderRadius: 16,
  padding: '24px 20px',
  textAlign: 'center',
  backdropFilter: 'blur(20px)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    background: accentcolor,
    borderRadius: '16px 16px 0 0',
  },
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: accentcolor,
    boxShadow: `0 20px 40px -12px ${accentcolor}33`,
  },
}));

const statColors = [COLORS.primary, COLORS.secondary, COLORS.accent, '#f59e0b'];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
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
        <motion.div {...fadeUp}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <SectionLabel>// 01. about</SectionLabel>
            <GradientHeading variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Who I Am
            </GradientHeading>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Summary card */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard sx={{ height: '100%' }}>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    color: COLORS.primary,
                    letterSpacing: '0.1em',
                    mb: 2,
                  }}
                >
                  // professional summary
                </Typography>
                <Typography
                  sx={{
                    color: COLORS.textSecondary,
                    lineHeight: 1.9,
                    fontSize: '1.02rem',
                  }}
                >
                  {profile.summary}
                </Typography>
                <Box sx={{ mt: 3, display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Location', value: profile.location },
                    { label: 'Email', value: profile.email },
                  ].map((item) => (
                    <Box key={item.label}>
                      <Typography sx={{ fontSize: '0.75rem', color: COLORS.textMuted, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.08em' }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.9rem', color: COLORS.textPrimary, mt: 0.3 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </GlassCard>
            </motion.div>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {profile.stats.map((stat, i) => (
                <Grid item xs={6} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <StatCard accentcolor={statColors[i]}>
                      <Typography
                        sx={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          fontSize: '2.4rem',
                          fontWeight: 700,
                          background: `linear-gradient(135deg, ${statColors[i]}, ${statColors[(i + 1) % 4]})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          lineHeight: 1.1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography sx={{ fontSize: '0.82rem', color: COLORS.textSecondary, mt: 0.5, fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                    </StatCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
