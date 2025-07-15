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
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        bgcolor: 'background.default',
        transition: 'background-color 0.4s ease',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Foto */}
          <Avatar
            src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/COZ2HBFBOQTGBTJNMLJFBCZPBI.jpg"
            alt="Hayler"
            sx={{
              width: 120,
              height: 120,
              margin: '0 auto 1rem auto',
              boxShadow: 3,
            }}
          />
          <Typography variant="h4" gutterBottom align="center" sx={{ color: 'text.primary', mb: 3 }}>
            Conéctate conmigo
          </Typography>
          <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 3 }}>
            {/* Iconos de redes sociales con animación */}
            <IconButton
              href="https://github.com/hmonroy-2020131"
              target="_blank"
              sx={{
                width: 56,
                height: 56,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.getContrastText(theme.palette.primary.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'scale(1.1)', // Efecto de escala al pasar el ratón
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
                width: 56,
                height: 56,
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.getContrastText(theme.palette.secondary.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                  transform: 'scale(1.1)', // Efecto de escala al pasar el ratón
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
                width: 56,
                height: 56,
                backgroundColor: theme.palette.info.main,
                color: theme.palette.getContrastText(theme.palette.info.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.info.dark,
                  transform: 'scale(1.1)', // Efecto de escala al pasar el ratón
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
                width: 56,
                height: 56,
                backgroundColor: theme.palette.info.main,
                color: theme.palette.getContrastText(theme.palette.info.main),
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: theme.palette.info.dark,
                  transform: 'scale(1.1)', // Efecto de escala al pasar el ratón
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
