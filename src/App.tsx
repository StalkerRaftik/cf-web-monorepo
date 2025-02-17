import "./i18n/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Routing from "./routes/Routing";
import { AppThemeProvider } from "./themes/AppThemeProvider";
import { MainLayout } from "./layouts/MainLayout";
import { ThemeProvider } from "./providers/ThemeContext";
import { LanguageProvider } from "./providers/LanguageContext";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <ThemeProvider>
        <AppThemeProvider>
          <LanguageProvider>
            <CssBaseline />
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
