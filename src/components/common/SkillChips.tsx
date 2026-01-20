import React from 'react';
import { Chip, Box, useTheme } from '@mui/material';

interface SkillChipsProps {
  skills: string[];
  size?: 'small' | 'medium';
}

export const SkillChips: React.FC<SkillChipsProps> = ({ skills, size = 'small' }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {skills.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          size={size}
          sx={{
            backgroundColor: theme.palette.mode === 'dark'
              ? 'rgba(92, 156, 229, 0.2)'
              : 'rgba(92, 156, 229, 0.12)',
            color: theme.palette.primary.main,
            fontWeight: 500,
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(92, 156, 229, 0.3)'
                : 'rgba(92, 156, 229, 0.2)',
              transform: 'scale(1.05)',
            },
          }}
        />
      ))}
    </Box>
  );
};
