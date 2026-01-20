import React from 'react';
import { Box, Grid, Typography, Paper, useTheme } from '@mui/material';
import { Code } from '@mui/icons-material';
import { SectionTitle, SkillChips } from '../common';
import type { SkillCategory } from '../../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <SectionTitle title="Competências" icon={<Code fontSize="large" />} />

      <Grid container spacing={3}>
        {skillCategories.map((category, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                backgroundColor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(92, 156, 229, 0.04)',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 24px rgba(0, 0, 0, 0.3)'
                    : '0 8px 24px rgba(92, 156, 229, 0.15)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  mb: 2,
                  pb: 1,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}
              >
                {category.category}
              </Typography>

              <SkillChips skills={category.skills} size="medium" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
