import { Container, Typography, Box, Grid, Button, useTheme, Modal, Fade, Backdrop } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: 'Pokemon',
    image: '/src/assets/pokemon.png',
    description: 'Proyecto donde consumimos la API de Pokémon (PokeAPI) para buscar Pokémon por su número y mostrar algunas de sus estadísticas.',
    skills: ['API', 'React', 'JavaScript'],
    githubLink: 'https://github.com/hmonroy-2020131/Pokemon-App.git',
  },
  {
    title: 'RickAndMortyAPP',
    image: '/src/assets/randm.png',
    description: 'Aplicación que consume la API de Rick and Morty para listar personajes, que se pueden buscar por nombre o tipo.',
    skills: ['API', 'React', 'JavaScript'],
    githubLink: 'https://github.com/hmonroy-2020131/RickAndMorty.git',
  },
  {
    title: 'Hotelería',
    image: '/src/assets/hotel.png',
    description: 'Plataforma web para la gestión hotelera, donde los usuarios pueden buscar hoteles, reservar habitaciones y ver eventos asociados.',
    skills: ['Node.js', 'MongoDB', 'Express', 'Frontend'],
    githubLink: 'https://github.com/grupo-3-IN6CM-1/Hoteleria-Front.git',
  },
  {
    title: 'Blog de Aprendizaje',
    image: '/src/assets/blog.png',
    description: 'Blog educativo donde se publican actividades de cursos técnicos. Los usuarios pueden interactuar dejando comentarios en las publicaciones.',
    skills: ['React', 'Node.js', 'MongoDB', 'Backend'],
    githubLink: 'https://github.com/hmonroy-2020131/5-Blog-de-aprendizaje-frontend.git',
  },
]

function ProjectsGallery() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleOpen = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', paddingTop: '64px' }}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', color: 'primary.main', mb: 4 }}>
            Galería de Proyectos
          </Typography>

          <Grid container spacing={6}>
            {projects.map((project, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '200px', height: 'auto', borderRadius: '10px', cursor: 'pointer' }}
                      onClick={() => handleOpen(project.image)}  // Abre el modal al hacer clic
                    />
                  </motion.div>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>{project.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>{project.description}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 600 }}>Habilidades: {project.skills.join(', ')}</Typography>
                    <Button variant="contained" color="primary" href={project.githubLink} target="_blank" sx={{ mt: 2 }}>
                      Ver Repositorio
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Modal de Imagen Ampliada */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              borderRadius: '8px',
              boxShadow: 24,
              p: 4,
            }}
          >
            <img src={selectedImage} alt="project" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default ProjectsGallery
