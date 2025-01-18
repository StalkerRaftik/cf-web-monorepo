import { IconButton } from '@mui/material';
import { useThemeContext } from '@/providers/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} size="small" color="primary">
      <Brightness4Icon />
    </IconButton>
  );
};

export default ThemeSwitcher;
