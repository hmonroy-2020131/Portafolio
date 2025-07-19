import { Container, Typography, Box, Grid, Stack, useTheme } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Code, Web, Storage, GitHub, Build, DeveloperMode
} from '@mui/icons-material'

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const theme = useTheme()

  const [progress, setProgress] = useState([
    { name: 'Java', level: 0, target: 80, color: '#FF5733', icon: <Code /> }, 
    { name: 'MySQL', level: 0, target: 75, color: '#00758F', icon: <Storage /> }, 
    { name: 'HTML/CSS', level: 0, target: 95, color: '#E44D26', icon: <Web /> }, 
    { name: 'Vite', level: 0, target: 80, color: '#646CFF', icon: <Build /> }, 
    { name: 'JavaFX', level: 0, target: 70, color: '#4CAF50', icon: <Code /> }, 
    { name: 'MERN Stack', level: 0, target: 85, color: '#9C27B0', icon: <DeveloperMode /> }, 
    { name: 'GitHub', level: 0, target: 95, color: '#333', icon: <GitHub /> }, // Dark
    { name: 'SpringBoot', level: 0, target: 70, color: '#6DB33F', icon: <Build /> }, 
    { name: 'JavaScript', level: 0, target: 90, color: '#F7DF1E', icon: <Code /> }, 
  ])

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setProgress(prev =>
          prev.map(skill => {
            if (skill.level < skill.target) {
              return { ...skill, level: skill.level + 1 }
            }
            return skill
          })
        )
      }, 10)

      return () => clearInterval(interval)
    } else {
      setProgress(prev => prev.map(skill => ({ ...skill, level: 0 })))
    }
  }, [inView])

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        bgcolor: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #b3cde0, #e6f0f8)' 
          : theme.palette.background.default, 
        transition: 'background-color 0.4s ease',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              color: 'primary.main',
              mb: 4
            }}
          >
            Habilidades
          </Typography>

          <Stack spacing={4}>
            {progress.map(skill => (
              <Box key={skill.name} sx={{ px: { xs: 0, md: 8 } }}>
                <Grid container justifyContent="space-between">
                  <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {skill.icon} {skill.name}
                  </Typography>
                </Grid>

                <Box
                  sx={{
                    position: 'relative',
                    height: 24,
                    bgcolor: theme.palette.mode === 'light' ? '#e0e0e0' : '#333',
                    borderRadius: 12,
                    overflow: 'hidden',
                    mt: 1,
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.4s ease'
                  }}
                >
                  {/* Barra progresiva */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${skill.level}%`,
                      backgroundColor: skill.color, 
                      borderRadius: 12,
                      transition: 'width 0.3s ease-out',
                    }}
                  />

                  {/* Porcentaje centrado */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.palette.getContrastText(skill.color),
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      pointerEvents: 'none'
                    }}
                  >
                    {skill.level}%
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Skills
