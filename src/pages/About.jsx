import { Container, Typography, Box, Avatar, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { Email, Phone, School, Work, CalendarToday } from '@mui/icons-material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function About() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const theme = useTheme()

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        paddingTop: '64px',
        transition: 'background-color 0.4s ease',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              alignItems: { xs: 'center', md: 'stretch' },
            }}
          >
            {/* Izquierda: texto */}
            <Box sx={{ flex: 2, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ maxWidth: 600 }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 2,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Sobre mí
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    lineHeight: 1.8,
                    textAlign: 'justify',
                    transition: 'color 0.4s ease',
                  }}
                >
                  Soy un desarrollador apasionado por la tecnología y la creación de soluciones innovadoras. Me motiva aprender cada día y aplicar mis conocimientos para resolver problemas reales, mientras sigo creciendo profesionalmente y aporto valor a los proyectos en los que participo. Además, disfruto trabajar en equipo, comunicar ideas y asumir desafíos técnicos que me permitan evolucionar.
                </Typography>
              </Box>
            </Box>

            {/* Derecha: foto + lista */}
            <Box
              sx={{
                flex: 1,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Avatar
                alt="Hayler"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/COZ2HBFBOQTGBTJNMLJFBCZPBI.jpg"
                sx={{
                  width: 120,
                  height: 120,
                  margin: '0 auto',
                  mb: 2,
                  border: '4px solid',
                  borderColor: 'primary.main',
                }}
              />

              <List dense sx={{ mt: 2, textAlign: 'left', mx: 'auto', maxWidth: 250 }}>
                {[ 
                  { icon: <CalendarToday />, text: '18 años' },
                  { icon: <Email />, text: 'monroyeithan21@gmail.com' },
                  { icon: <Phone />, text: '+502 5461-2315' },
                  { icon: <Work />, text: '3 años de experiencia' },
                  { icon: <School />, text: 'Formación en KINAL' },
                ].map((item, i) => (
                  <ListItem
                    key={i}
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: theme.palette.action.hover,
                        borderRadius: 1,
                        '& .MuiListItemIcon-root': {
                          transform: 'scale(1.2)',
                          color: 'secondary.main',
                        },
                        '& .MuiListItemText-primary': {
                          color: 'secondary.main',
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: 'primary.main',
                        transition: 'transform 0.3s ease, color 0.3s ease',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        color: 'text.primary',
                        transition: 'color 0.3s ease',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default About
