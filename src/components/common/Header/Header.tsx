import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import HeartComponent from './HeartComponent';
import { useLanguage } from '@/providers/LanguageContext';

const Header: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <>
      <Box sx={{ height: '56px' }}></Box>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          flexShrink: 0,
          top: 0,
          backgroundColor: 'background.paper',
          height: '56px',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            component={RouterLink}
            to={`/${currentLanguage}`}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
              }}
            >
              cf-web-monorepo
            </Typography>
            <HeartComponent />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'right' }}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
