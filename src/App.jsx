import { useState, useMemo } from 'react'
import { ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'

import { getTheme } from './theme'

import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import About from './pages/About'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import ProjectsGallery from './pages/ProjectsGallery'
import ProjectsPortfolio from './pages/ProjectsPortfolio'
import SocialLinks from './pages/SocialLinks'

function App() {
  const [mode, setMode] = useState('light')
  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <IconButton
        onClick={toggleMode}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1300,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Box id="welcome" sx={{ paddingTop: '64px' }}>
        <Welcome />
      </Box>
      <Box id="about" sx={{ paddingTop: '64px' }}>
        <About />
      </Box>
      <Box id="skills" sx={{ paddingTop: '64px' }}>
        <Skills />
      </Box>
      <Box id="resume" sx={{ paddingTop: '64px' }}>
        <Resume />
      </Box>
      <Box id="projects" sx={{ paddingTop: '64px' }}>
        <ProjectsGallery />
        <ProjectsPortfolio />
      </Box>
      <Box id="contact" sx={{ paddingTop: '64px' }}>
        <SocialLinks />
      </Box>
    </ThemeProvider>
  )
}

export default App
