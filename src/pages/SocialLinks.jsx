import { Container, Typography, Box, IconButton, Avatar, useTheme } from '@mui/material'
import { GitHub, Instagram, Facebook, Twitter } from '@mui/icons-material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function SocialLinks() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const theme = useTheme()

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: 'auto',  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '16px', 
        bgcolor: theme.palette.mode === 'light' ? 'linear-gradient(135deg, #b3cde0, #e6f0f8)' : 'background.default',
        transition: 'background-color 0.4s ease',
        boxShadow: 'none',  
        paddingBottom: '16px',  
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar */}
          <Avatar
            src="/src/assets/Yo.jpeg"
            alt="Hayler"
            sx={{
              width: 80, 
              height: 80,
              margin: '0 auto 1rem auto',
              boxShadow: 3,
              border: '3px solid',
              borderColor: theme.palette.primary.main,
            }}
          />

          {/* Título */}
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{
              color: 'text.primary',
              mb: 2,
              fontWeight: 700,
            }}
          >
            Conéctate conmigo
          </Typography>

          {/* Texto descriptivo */}
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '0.9rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Encuentra mis perfiles en las siguientes redes sociales.
          </Typography>

          {/* Iconos de redes sociales */}
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap', 
            }}
          >
            <IconButton
              href="https://github.com/hmonroy-2020131"
              target="_blank"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.getContrastText(theme.palette.primary.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHub />
            </IconButton>

            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.getContrastText(theme.palette.secondary.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Instagram />
            </IconButton>

            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: theme.palette.info.main,
                color: theme.palette.getContrastText(theme.palette.info.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.info.dark,
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Facebook />
            </IconButton>

            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{
                width: 48,
                height: 48,
                backgroundColor: theme.palette.info.main,
                color: theme.palette.getContrastText(theme.palette.info.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.info.dark,
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Twitter />
            </IconButton>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default SocialLinks
