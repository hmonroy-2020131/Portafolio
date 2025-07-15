import { Container, Typography, Box, Divider, useTheme } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function Welcome() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const theme = useTheme()

  return (
    <Box
      ref={ref}
      sx={{
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #b3cde0, #e6f0f8)'
          : theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              padding: '4rem 2rem',
              bgcolor: theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.6)'
                : 'rgba(30, 30, 30, 0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              boxShadow: 6,
              mt: 4,
              '&:hover': {
                transform: 'scale(1.01)',
              },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: 'primary.main' }}
            >
              Bienvenido
            </Typography>
            <Divider
              sx={{
                width: '60px',
                height: '4px',
                backgroundColor: 'primary.main',
                margin: '0 auto 2rem auto',
                borderRadius: '2px',
              }}
            />
            <Typography
              variant="h5"
              sx={{ fontStyle: 'italic', color: 'text.secondary' }}
            >
              “Creando soluciones, aprendiendo cada día”
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Welcome
