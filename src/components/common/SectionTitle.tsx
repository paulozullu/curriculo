import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, icon }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 3,
        pb: 1.5,
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      }}
    >
      {icon && (
        <Box
          sx={{
            color: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
      )}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: theme.palette.text.primary,
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
