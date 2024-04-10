import { AppBar, IconButton, Toolbar, Typography, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { useAppState } from '../context/ContextProvider';
import { AppLink } from './AppLink';

/**
 * Top navigation bar component
 */
export const TopBar: React.FC = () => {
  const app = useAppState();
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Stack 
          direction="row" 
          sx={{
            alignItems: 'center',
            flexGrow: 1 ,
          }}
        >
          <AppLink href="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
          </AppLink>
          <AppLink href="/">
            <Typography variant="h6" component="div">
              {app.state.appTitle}
            </Typography>
          </AppLink>
        </Stack>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}