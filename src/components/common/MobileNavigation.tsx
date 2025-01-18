import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Chat, Mic, Favorite, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/providers/LanguageContext';
import { useState } from 'react';

export const MobileNavigation = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const [value, setValue] = useState(-1);

  return (
    <>
      <Box sx={{ height: '56px' }}></Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: 1,
          borderColor: 'divider',
          height: 56,
          zIndex: 100,
        }}
        elevation={0}
      >
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
            switch (newValue) {
              case 0:
                navigate(`/${currentLanguage}/search-chat`);
                break;
              case 1:
                navigate(`/${currentLanguage}/search-voice`);
                break;
              case 2:
                navigate(`/${currentLanguage}/contacts`);
                break;
              case 3:
                navigate(`/${currentLanguage}/profile`);
                break;
            }
          }}
          sx={{ height: '100%' }}
        >
          <BottomNavigationAction icon={<Chat />} />
          <BottomNavigationAction icon={<Mic />} />
          <BottomNavigationAction icon={<Favorite />} />
          <BottomNavigationAction icon={<Person />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};
