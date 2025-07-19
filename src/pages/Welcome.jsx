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
          ? 'linear-gradient(135deg, rgba(252, 72, 124, 0.8), rgba(97, 218, 255, 0.6))' 
          : 'background.default', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px',
        transition: 'background-color 0.4s ease',
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
                ? 'rgba(255, 255, 255, 0.85)' 
                : 'rgba(30, 30, 30, 0.8)', 
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              boxShadow: 10,
              mt: 4,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                fontSize: '3rem',
                textTransform: 'uppercase',
              }}
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
              sx={{
                fontStyle: 'italic',
                color: 'text.secondary',
                fontSize: '1.2rem',
                fontWeight: 600,
                maxWidth: 700,
                margin: '0 auto',
              }}
            >
              “El software es el mejor megáfono del mundo.”
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Welcome
