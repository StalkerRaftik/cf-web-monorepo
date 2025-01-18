import './i18n/i18n';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import { AppThemeProvider } from './themes/AppThemeProvider';
import { MainLayout } from './layouts/MainLayout';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { ThemeProvider } from './providers/ThemeContext';
import { LanguageProvider } from './providers/LanguageContext';

// We can import types from backend!
import { GenderType } from '../backendSrc/apps/auth/models/User.type';
const exampleTypeImportFromBackend: GenderType = 'male';
console.log(exampleTypeImportFromBackend);

const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <ThemeProvider>
        <AppThemeProvider>
          <LanguageProvider>
            <CssBaseline />
            <ScrollToTop />
            <MainLayout>
              <Routing />
            </MainLayout>
          </LanguageProvider>
        </AppThemeProvider>
      </ThemeProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
