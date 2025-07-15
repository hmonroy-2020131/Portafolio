import { Container, Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Gestion de ventas',
    description: 'Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos secciones principales, administrador y cliente, cada uno con funcionalidades específicas.',
    skills: ['NodeJS', 'API', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/hmonroy-2020131/ProyectoFInal.git',
    image: '/src/assets/Pfinal.png',
  },
  {
    title: 'COPEREX',
    description: 'La empresa COPEREX está buscando desarrollar una solución eficiente y moderna para gestionar la incorporación de nuevos socios y empresas a su famosa feria “Interfer”. Se creó una API robusta utilizando Node.js, Express y MongoDB. Esta API permite generar un reporte en formato Excel con los datos de las empresas registradas.',
    skills: ['Node.js', 'Express', 'MongoDB', 'Excel Report'],
    githubLink: 'https://github.com/hmonroy-2020131/COPEREX.git',
    image: '/src/assets/Coperex.png',
  },
  {
    title: 'Sistema de Adopción',
    description: 'Este proyecto consiste en un sistema de adopción de mascotas utilizando MongoDB. Se incorporaron funcionalidades como la actualización de datos de usuarios, actualización de contraseñas, eliminación de registros y la posibilidad de agregar citas para encuentros con las mascotas.',
    skills: ['MongoDB', 'NodeJS', 'API'],
    githubLink: 'https://github.com/hmonroy-2020131/MongoDB.git',
    image: '/src/assets/Adop.png',
  }
]

function ProjectsPortfolio() {
  const theme = useTheme()

  return (
    <Box
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            Portafolio de Aplicaciones
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
            A continuación, algunos de los proyectos que he desarrollado, cada uno con sus tecnologías y funcionalidades específicas.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card
                    sx={{
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      boxShadow: 6,
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: 12,
                        transform: 'scale(1.03)',
                      },
                    }}
                  >
                    <CardActionArea href={project.githubLink} target="_blank">
                      <CardMedia
                        component="img"
                        height="240"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)', // Efecto de zoom en la imagen
                          },
                        }}
                      />
                      <CardContent sx={{ padding: '1.5rem' }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', mb: 2 }}
                        >
                          {project.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
                        >
                          <strong>Habilidades:</strong> {project.skills.join(', ')}
                        </Typography>
                        <Button
                          variant="contained"
                          fullWidth
                          href={project.githubLink}
                          target="_blank"
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.getContrastText(theme.palette.primary.main),
                            '&:hover': {
                              backgroundColor: theme.palette.primary.dark,
                            },
                          }}
                        >
                          Ver Repositorio
                        </Button>
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

export default ProjectsPortfolio
