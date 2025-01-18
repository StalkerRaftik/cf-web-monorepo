import { IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react';
import { SUPPORTED_LANGUAGES } from '@/i18n/i18n';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLang: string) => {
    const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLang}`);
    navigate(newPath);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <LanguageIcon color="primary" />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        {SUPPORTED_LANGUAGES.map((code) => (
          <MenuItem key={code} onClick={() => changeLanguage(code)} selected={i18n.language === code}>
            {t(`languages.${code}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
