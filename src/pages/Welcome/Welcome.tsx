import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Welcome: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
      <Typography variant="h3" component="h1">
        {t('welcome.title')}
      </Typography>
    </Box>
  );
};

export default Welcome;
