import React from 'react';
import { Box, Button, ButtonGroup, useTheme } from '@mui/material';
import { useLanguage } from '../../i18n';
import type { Language } from '../../i18n';

export const LanguageSelector: React.FC = () => {
  const theme = useTheme();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const getButtonStyles = (isActive: boolean) => ({
    backgroundColor: isActive
      ? 'rgba(255, 255, 255, 0.25)'
      : 'transparent',
    color: 'white',
    fontWeight: isActive ? 700 : 500,
    fontSize: '0.875rem',
    px: 2,
    py: 0.75,
    minWidth: 'auto',
    textTransform: 'none' as const,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: isActive
        ? 'rgba(255, 255, 255, 0.3)'
        : 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <ButtonGroup
        variant="outlined"
        size="small"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 2,
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(255, 255, 255, 0.2)`,
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 15px rgba(0, 0, 0, 0.3)'
            : '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Button
          onClick={() => handleLanguageChange('pt')}
          sx={getButtonStyles(language === 'pt')}
          aria-label="Português"
        >
          🇧🇷 PT
        </Button>
        <Button
          onClick={() => handleLanguageChange('en')}
          sx={getButtonStyles(language === 'en')}
          aria-label="English"
        >
          🇺🇸 EN
        </Button>
      </ButtonGroup>
    </Box>
  );
};
