import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          justifyContent: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center', display: 'flex' }}>
          {/* Navbar para pantallas grandes */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', gap: 2 }}>
            <Button href="#welcome" size="small">Inicio</Button>
            <Button href="#about" size="small">Sobre mí</Button>
            <Button href="#skills" size="small">Habilidades</Button>
            <Button href="#resume" size="small">Currículum</Button>
            <Button href="#projects" size="small">Proyectos</Button>
            <Button href="#contact" size="small">Contacto</Button>
          </Box>

          {/* Icono del menú hamburguesa en pantallas pequeñas */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para pantallas pequeñas */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <List>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Sobre mí" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Habilidades" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Currículum" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Proyectos" />
          </ListItem>
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemText primary="Contacto" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navbar
