import { AppBar, Toolbar, Button, Box } from '@mui/material'

function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        justifyContent: 'center',
        backgroundColor: 'background.paper',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
        <Button href="#welcome" size="small">Inicio</Button>
        <Button href="#about" size="small">Sobre mí</Button>
        <Button href="#skills" size="small">Habilidades</Button>
        <Button href="#resume" size="small">Currículum</Button>
        <Button href="#projects" size="small">Proyectos</Button>
        <Button href="#contact" size="small">Contacto</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
