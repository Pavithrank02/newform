import { Grid } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Grid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'white' }}>
              <Link
                to={"/"}
                style={{ textDecoration: 'none', }}
              >
                Home
              </Link>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/about"} style={{ textDecoration: 'none', }}>
                About Page
              </Link>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/post"} style={{ textDecoration: 'none', }}>
                Post
              </Link>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/postDetails"} style={{ textDecoration: 'none', }}>
                Post Details
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/contact"} style={{ textDecoration: 'none', }}>
                Contact
              </Link>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  )
}

export default Header