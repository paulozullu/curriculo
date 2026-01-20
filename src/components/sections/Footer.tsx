import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { Favorite } from '@mui/icons-material';

export const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.2)'
          : 'rgba(92, 156, 229, 0.05)',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
          }}
        >
          © {currentYear} • Feito com
          <Favorite sx={{ fontSize: 16, color: theme.palette.primary.main }} />
          usando React & Material UI
        </Typography>
      </Container>
    </Box>
  );
};
