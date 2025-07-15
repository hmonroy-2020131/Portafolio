import { Container, Typography, Box, Paper, useTheme } from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import CodeIcon from '@mui/icons-material/Code'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function Resume() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const theme = useTheme()

  const events = [
    {
      title: 'Estudiante de Perito en Computación',
      institution: 'Centro Educativo Técnico KINAL',
      period: '2022 - Actualidad',
      description:
        'Actualmente formándome como desarrollador con sólidos conocimientos en backend y frontend.',
      icon: <SchoolIcon />,
      color: 'primary',
    },
    {
      title: 'Prácticas profesionales',
      institution: 'Zen Digital Business',
      period: '2025',
      description:
        'Prácticas en automatización de procesos utilizando RPA y apoyo en proyectos de desarrollo web.',
      icon: <WorkIcon />,
      color: 'secondary',
    },
    {
      title: 'Proyectos Personales',
      institution: 'GitHub',
      period: '2023 - Actualidad',
      description:
        'Desarrollo de diversos proyectos personales para mejorar mis habilidades técnicas y creativas.',
      icon: <CodeIcon />,
      color: 'success',
    },
  ]

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
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              color: 'primary.main',
              mb: 4,
            }}
          >
            Currículum
          </Typography>

          <Typography
            sx={{
              fontSize: '1.1rem',
              color: 'text.primary',
              lineHeight: 1.8,
              textAlign: 'center',
              maxWidth: 700,
              margin: '0 auto',
              mb: 6,
            }}
          >
            Mi formación académica y experiencia profesional están orientadas al desarrollo web, creación de soluciones técnicas y trabajo colaborativo en proyectos reales.
          </Typography>

          <Timeline position="alternate">
            {events.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color={event.color}>
                    {event.icon}
                  </TimelineDot>
                  {index < events.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 2,
                      bgcolor: 'background.paper',
                      transition: 'background-color 0.4s ease',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {event.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {event.institution} | {event.period}
                    </Typography>
                    <Typography sx={{ mt: 1, color: 'text.primary' }}>
                      {event.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Resume
