import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, sm: 3 },
          textAlign: 'center',
          py: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
            background: 'linear-gradient(45deg, #FF3366 30%, #FF9933 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
            maxWidth: '600px',
            mb: 2,
          }}
        >
          {t('notFound.title', 'Страница не найдена')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '400px' }}>
          {t('notFound.description', 'Похоже, страница, которую вы ищете, не существует или была перемещена')}
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
          sx={{
            background: 'linear-gradient(45deg, #FF3366 30%, #FF9933 90%)',
            color: 'white',
            px: 4,
            py: 1.5,
            '&:hover': {
              background: 'linear-gradient(45deg, #FF3366 20%, #FF9933 80%)',
            },
          }}
        >
          {t('notFound.backHome', 'Вернуться на главную')}
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
