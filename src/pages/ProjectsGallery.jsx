import { Container, Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent, useTheme } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Super Kinal', image: 'https://static.valorantstats.xyz/agent-headshots/chamber-headshot.png', description: 'proyecto 1' },
  { title: 'Proyecto 2', image: 'https://static.valorantstats.xyz/agent-headshots/clove-headshot.png', description: 'proyecto 2' },
  { title: 'Proyecto 3', image: 'https://static.valorantstats.xyz/agent-headshots/gekko-headshot.png', description: 'proyecto 3' },
  { title: 'Proyecto 4', image: 'https://static.valorantstats.xyz/agent-headshots/phoenix-headshot.png', description: 'proyecto 4' },
]

function ProjectsGallery() {
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
              mb: 4
            }}
          >
            Galería de proyectos
          </Typography>

          <Typography
            sx={{
              fontSize: '1.1rem',
              color: 'text.primary',
              textAlign: 'center',
              maxWidth: 700,
              margin: '0 auto',
              mb: 6
            }}
          >
            Capturas.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: 'box-shadow 0.3s ease',
                      '&:hover': {
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="160"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ProjectsGallery
