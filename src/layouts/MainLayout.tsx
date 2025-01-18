import { Box } from '@mui/material';
import Header from '@/components/common/Header/Header';
import { MobileNavigation } from '@/components/common/MobileNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
      <MobileNavigation />
    </Box>
  );
};
